import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B1120] dark:bg-[#0B1120] text-white w-[90%] mx-auto rounded-t-2xl pt-12 pb-8">
            <div className="w-full px-6 sm:px-8 md:px-10">
                <div className="flex flex-col items-center text-center mb-12 gap-8">
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 brightness-0 invert"
                            />
                            <span className="manrope text-xl sm:text-2xl font-semibold text-white cursor-pointer">
                                {siteDetails.siteName}
                            </span>
                        </Link>
                        <p className="text-white max-w-sm sm:max-w-lg text-center text-base sm:text-lg leading-relaxed px-4">
                            {footerDetails.subheading}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <ul className="flex flex-wrap gap-6 sm:gap-8 text-white justify-center">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-white/80 hover:text-white transition-colors text-base sm:text-lg py-2">{link.text}</Link>
                                </li>
                            ))}
                        </ul>

                        {footerDetails.socials?.instagram && (
                            <Link
                                href={footerDetails.socials.instagram}
                                aria-label="Instagram"
                                className="text-white/80 hover:text-white transition-colors p-2"
                            >
                                {getPlatformIconByName("instagram")}
                            </Link>
                        )}
                    </div>
                </div>

                {/* Legal Links */}
                <div className="border-t border-white/20 pt-6 mt-8">
                    <ul className="flex flex-wrap gap-4 sm:gap-6 text-white justify-center mb-4">
                        {footerDetails.legalLinks?.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">{link.text}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Copyright */}
                    <p className="text-center text-sm text-white">
                        &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;