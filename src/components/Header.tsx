'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`bg-transparent z-50 mx-auto w-[95%] rounded-b-2xl pb-[5px] ${className}`}>
      <Container className="!px-0">
        <nav className="shadow-md bg-[#001B33] text-white mx-auto flex justify-between items-center py-2 pr-8 pl-5 md:py-10 rounded-b-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="h-10 w-10" />
            <span className="manrope text-2xl font-semibold text-white cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiOutlineXMark className="text-white w-6 h-6" />
              ) : (
                <HiBars3 className="text-white w-6 h-6" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex flex-wrap items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="text-white hover:text-gray-300 transition-colors text-2xl">
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="text-black bg-primary hover:bg-primary-accent px-6 py-1 rounded-full transition-colors text-2xl"
              >
                Coming Soon
              </Link>
            </li>
            {/* <li><ThemeToggle /></li> */}
          </ul>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-[#001B33] text-white px-5 pt-4 pb-6 space-y-4 mt-3 rounded-3xl">
            {menuItems.map((item) => (
              <Link key={item.text} href={item.url} className="block text-white hover:text-gray-300">
                {item.text}
              </Link>
            ))}
            <Link
              href="#cta"
              className="block text-center text-black bg-primary hover:bg-primary-accent px-6 py-2 rounded-full transition-colors"
            >
              Coming Soon
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;