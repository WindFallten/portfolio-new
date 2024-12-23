// Import necessary modules
import Link from 'next/link';
// import Image from 'next/image';

// Define the Header component
export default function Header() {
    return (
        <header className="py-4 sticky top-0 z-50 mx-auto px-60 flex justify-between items-center bg-background">
            <h1 className="text-xl font-semibold">WindFall</h1>
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
                    {/*<li>*/}
                    {/*    <Link href="/contact" className="hover:text-gray-400">*/}
                    {/*        Контакты*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
}