'use client'

// src/components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    // Стейт для отслеживания состояния меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения состояния меню
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="py-4 sticky top-0 z-50 mx-auto px-6 sm:px-12 flex justify-between items-center bg-background">
            <Link href="/">
                <h1 className="text-xl font-semibold">WindFall</h1>
            </Link>

            {/* Навигация на десктопах */}
            <nav className="hidden md:block">
                <ul className="flex gap-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-400">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400">
                            Обо мне
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-gray-400">
                            Портфолио
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Иконка гамбургера для мобильных устройств */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={toggleMenu}
            >
                <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-6 h-0.5 bg-foreground"></span>
            </button>

            {/* Мобильное меню */}
            <nav
                className={`md:hidden absolute top-16 right-0 bg-background text-foreground w-full shadow-lg transform transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="flex flex-col items-center py-4">
                    <li>
                        <Link href="/" className="block py-2 px-4 hover:bg-gray-200">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 px-4 hover:bg-gray-200">
                            Обо мне
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="block py-2 px-4 hover:bg-gray-200">
                            Портфолио
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
