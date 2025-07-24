'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-transparent z-50 mx-auto w-full pb-[5px]">
            <Container className="!px-0">
                <nav className="shadow-md bg-[#001B33] text-white mx-auto flex justify-between items-center py-2 px-5 md:py-10 rounded-b-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/favicon.ico"
                            alt="Logo"
                            width={28}
                            height={28}
                            className="h-7 w-7" // Ensures it matches text-xl (28px)
                        />
                        <span className="manrope text-xl font-semibold text-white cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="flex flex-wrap items-center space-x-6">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-white hover:text-gray-300 transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="#cta"
                                className="text-black bg-primary hover:bg-primary-accent px-6 py-1 rounded-full transition-colors"
                            >
                                Coming Soon
                            </Link>
                        </li>
                        {/* <li>
                            <ThemeToggle />
                        </li> */}
                    </ul>

                    {/* Mobile Menu Button */}
                </nav>
            </Container>
        </header>
    );
};

export default Header;