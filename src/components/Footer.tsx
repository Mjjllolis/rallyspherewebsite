import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground pt-10 pb-6">
            <div className="max-w-7xl w-full mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-10 gap-6">
                    <div className="flex flex-col items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={28}
                                height={28}
                                className="h-7 w-7"
                            />
                            <span className="manrope text-xl font-semibold text-foreground dark:text-white cursor-pointer">
                                {siteDetails.siteName}
                            </span>
                        </Link>
                        <p className="mt-3.5 text-foreground-accent max-w-full text-center whitespace-normal overflow-visible">
                            {footerDetails.subheading}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <ul className="flex gap-4 text-foreground-accent justify-center">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                                </li>
                            ))}
                        </ul>

                        {footerDetails.socials?.instagram && (
                            <Link
                                href={footerDetails.socials.instagram}
                                aria-label="Instagram"
                                className="hover:text-white"
                            >
                                {getPlatformIconByName("instagram")}
                            </Link>
                        )}
                    </div>
                </div>

                {/* Empowering text */}
                <p className="text-center text-sm text-foreground-accent mb-2">
                </p>


                {/* Copyright */}
                <p className="text-center text-xs text-foreground-accent">
                    &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;