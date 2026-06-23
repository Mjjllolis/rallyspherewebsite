import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const {
  AZURE_TENANT_ID,
  AZURE_CLIENT_ID,
  AZURE_CLIENT_SECRET,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  anticipatedFeature?: string;
  clubName?: string;
  clubSize?: string;
  clubLocation?: string;
  sponsorType?: string;
  message?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function getGraphToken(): Promise<string> {
  const res = await fetch(
    `https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: AZURE_CLIENT_ID!,
        client_secret: AZURE_CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  );
  if (!res.ok) {
    throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export async function POST(request: Request) {
  // Fail loudly in logs if the deployment isn't configured yet.
  if (!AZURE_TENANT_ID || !AZURE_CLIENT_ID || !AZURE_CLIENT_SECRET || !MAIL_FROM || !MAIL_TO) {
    console.error('Contact API missing env vars (AZURE_TENANT_ID/CLIENT_ID/CLIENT_SECRET/MAIL_FROM/MAIL_TO).');
    return NextResponse.json({ error: 'Contact form is not configured yet.' }, { status: 503 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, category, anticipatedFeature } = body;
  if (!name || !email || !category || !anticipatedFeature) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const rows = (
    [
      ['Name', body.name],
      ['Email', body.email],
      ['Phone', body.phone],
      ['I am a', body.category],
      ['Most anticipated feature', body.anticipatedFeature],
      ['Club name', body.clubName],
      ['Club size', body.clubSize],
      ['Club location', body.clubLocation],
      ['Sponsor type', body.sponsorType],
      ['Message', body.message],
    ] as [string, string | undefined][]
  )
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#334155">${esc(k)}</td><td style="padding:6px 12px;color:#0f1b2d">${esc(v!)}</td></tr>`
    )
    .join('');

  const html = `
    <div style="font-family:sans-serif">
      <h2 style="color:#2d7cf6">New RallySphere contact submission</h2>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`;

  try {
    const token = await getGraphToken();
    const graphRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAIL_FROM)}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: `New RallySphere contact: ${name} (${category})`,
            body: { contentType: 'HTML', content: html },
            toRecipients: [{ emailAddress: { address: MAIL_TO } }],
            replyTo: [{ emailAddress: { address: email } }],
          },
          saveToSentItems: false,
        }),
      }
    );

    if (!graphRes.ok) {
      const detail = await graphRes.text();
      console.error('Graph sendMail failed:', graphRes.status, detail);
      return NextResponse.json({ error: 'Could not send your message.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}
