import React from 'react';
import type { Metadata } from 'next';
import { CHILD_SAFETY_STANDARDS } from '@/data/legalDocuments';

export const metadata: Metadata = {
    title: 'Child Safety Standards | RallySphere',
    description:
        'RallySphere’s published standards and practices for preventing child sexual abuse and exploitation (CSAE).',
};

export default function ChildSafetyPage() {
    return (
        <div className="min-h-screen bg-bg text-ink">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink">
                        {CHILD_SAFETY_STANDARDS}
                    </pre>
                </div>
            </div>
        </div>
    );
}
