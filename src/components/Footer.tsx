import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

const Footer: React.FC = () => {
    const socials = Object.entries(footerDetails.socials || {}).filter(([, url]) => Boolean(url));

    return (
        <footer className="relative surface-navy text-white w-full overflow-hidden">
            {/* Top accent line + subtle texture */}
            <div className="h-1 w-full brand-gradient opacity-80" />
            <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />

            <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-8 md:px-12 pt-10 pb-6">
                <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-3 w-fit">
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={36}
                                height={36}
                                className="h-9 w-9 brightness-0 invert"
                            />
                            <span className="manrope text-xl sm:text-2xl font-semibold text-white">
                                {siteDetails.siteName}
                            </span>
                        </Link>
                        <p className="max-w-sm text-base leading-relaxed text-white/70">
                            {footerDetails.subheading}
                        </p>
                        {socials.length > 0 && (
                            <div className="flex items-center gap-3">
                                {socials.map(([name, url]) => (
                                    <Link
                                        key={name}
                                        href={url as string}
                                        aria-label={name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white/20 hover:text-accent-via hover:scale-110"
                                    >
                                        {getPlatformIconByName(name)}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Product</h4>
                        <ul className="space-y-3">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-white/70 transition-colors hover:text-white">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Legal</h4>
                        <ul className="space-y-3">
                            {footerDetails.legalLinks?.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-white/70 transition-colors hover:text-white">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get the app */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Get the app</h4>
                        <p className="mb-4 text-sm text-white/60">Launching soon on iOS &amp; Android.</p>
                        <div className="flex flex-wrap gap-3">
                            <AppStoreButton dark />
                            <PlayStoreButton dark />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row">
                    <p className="text-sm text-white/60">
                        &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>
                    <p className="text-sm text-white/60">
                        Built for pickleball clubs &amp; players 🎾
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
