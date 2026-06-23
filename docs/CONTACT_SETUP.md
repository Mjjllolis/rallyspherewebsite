# Contact form setup (free, via Microsoft Graph)

The contact form (`/api/contact`) emails submissions using **Microsoft Graph**
from your M365 tenant. No Power Automate premium connector, no third party — free.

## One-time Azure / Entra setup

You can run these with the Azure CLI after `az login` (or do the equivalent in
the Entra admin center). Replace the from/to mailboxes with real ones.

```bash
az login   # sign into the RallySphere tenant

GRAPH=00000003-0000-0000-c000-000000000000
MAIL_SEND=b633e1c5-b582-4048-a93e-9f11b44c7e96   # Graph "Mail.Send" application role

# 1) App registration
APP_ID=$(az ad app create --display-name "RallySphere Contact Form" --query appId -o tsv)

# 2) Service principal for the app
az ad sp create --id "$APP_ID"

# 3) Client secret (save the output password — it is shown only once)
az ad app credential reset --id "$APP_ID" --display-name "vercel" --years 1 --query password -o tsv

# 4) Grant the Mail.Send application permission + admin consent
az ad app permission add --id "$APP_ID" --api "$GRAPH" --api-permissions "$MAIL_SEND=Role"
az ad app permission admin-consent --id "$APP_ID"

# 5) Values you need
echo "AZURE_CLIENT_ID=$APP_ID"
az account show --query tenantId -o tsv   # AZURE_TENANT_ID
```

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables** (and in
`.env.local` for local testing):

| Var | Value |
|-----|-------|
| `AZURE_TENANT_ID` | from `az account show` |
| `AZURE_CLIENT_ID` | the app's `appId` |
| `AZURE_CLIENT_SECRET` | the secret password from step 3 |
| `MAIL_FROM` | a real mailbox to send from (e.g. `noreply@yourdomain.com`) |
| `MAIL_TO` | where you want to receive submissions |

## Recommended hardening (optional)

`Mail.Send` (application) technically lets the app send as any mailbox. To lock it
to only `MAIL_FROM`, create an **Application Access Policy** in Exchange Online
PowerShell:

```powershell
New-ApplicationAccessPolicy -AppId <APP_ID> -PolicyScopeGroupId <MAIL_FROM> `
  -AccessRight RestrictAccess -Description "RallySphere contact form"
```

## Test

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"t@example.com","category":"Player","anticipatedFeature":"Club Dashboard"}'
# -> {"ok":true} and an email arrives at MAIL_TO
```
