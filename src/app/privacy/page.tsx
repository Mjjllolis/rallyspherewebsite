import React from 'react';
import { PRIVACY_POLICY } from '@/data/legalDocuments';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                        {PRIVACY_POLICY}
                    </pre>
                </div>
            </div>
        </div>
    );
}
