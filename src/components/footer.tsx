export default function Footer() {
    return (
        <footer className='flex flex-col gap-5 justify-center items-center p-10'>
            <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="font-semibold text-2xl xl:text-4xl">Мои <span className="text-xl">маленькие</span> соцсети:</h2>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center'>
                <Link href="https://t.me/WindFall">
                    <Image
                        className="dark:invert"
                        src="/telegram.svg"
                        alt="Telegram"
                        width={30}
                        height={38}
                    />
                </Link>
                <Link href="https://www.instagram.com/eg.sig">
                    <Image
                        className="dark:invert"
                        src="/instagram.svg"
                        alt="Instagram"
                        width={30}
                        height={38}
                    />
                </Link>
                <Link href="https://github.com/WindFallten">
                    <Image
                        className="dark:invert"
                        src="/github.svg"
                        alt="Github"
                        width={30}
                        height={38}
                    />
                </Link>
            </div>
            <p>Сигалев Георгий &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}
import Link from 'next/link';

import Image from "next/image";
