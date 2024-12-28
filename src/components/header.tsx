'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="py-4 sticky top-0 z-50 mx-auto px-6 sm:px-12 flex justify-between items-center text-background bg-foreground rounded-3xl mt-10 mb-14 ring-2 ring-offset-4 ring-foreground">
            <Link href="/">
                <Image
                    className="invert dark:invert-0 hover:fill-color1"
                    src="/logo.svg"
                    alt="logo"
                    width={60}
                    height={60}
                />
                {/*<h1 className="text-2xl font-semibold hover:text-color1">WindFall</h1>*/}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-x-6 text-xl font-bold">
                    <li>
                        <Link href="/" className="hover:text-color1">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-color1">
                            Обо мне
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-color1">
                            Портфолио
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Hamburger Icon */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="block w-6 h-0.5 bg-background mb-1"></span>
                <span className="block w-6 h-0.5 bg-background mb-1"></span>
                <span className="block w-6 h-0.5 bg-background"></span>
            </button>

            {/* Mobile Navigation */}
            <nav
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:hidden absolute top-16 right-0 w-full bg-background text-foreground shadow-lg`}
            >
                <ul className="flex flex-col items-center py-4">
                    <li>
                        <Link
                            href="/"
                            className="block py-2 px-4 hover:text-color1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 px-4 hover:text-color1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Обо мне
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/portfolio"
                            className="block py-2 px-4 hover:text-color1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Портфолио
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
