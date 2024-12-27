import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-grow items-start gap-16 text-start">
            <div className="flex flex-col items-start justify-start gap-3">
                <h1 className="font-semibold text-6xl xl:text-9xl">Привет, я Гоша</h1>
                <p className="font-medium text-2xl xl:text-4xl">и этот сайт должен выглядеть именно так:</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-10 justify-center flex-grow">
                <Link
                    className="font-black border-4 border-foreground rounded-3xl p-8 text-4xl sm:text-5xl xl:text-6xl 2xl:text-8xl hover:border-color1 hover:text-color1 text-start"
                    href="/portfolio"
                >
                    БОЛЬШАЯ КНОПКА С ПОРТФОЛИО
                </Link>
                <Link
                    className="font-black border-4 border-foreground rounded-3xl p-8 text-4xl sm:text-5xl xl:text-6xl 2xl:text-8xl hover:border-color1 hover:text-color1 text-start"
                    href="/about"
                >
                    БОЛЬШАЯ КНОПКА ОБО МНЕ
                </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
                <h1 className="font-semibold text-6xl xl:text-9xl">Мои соцсети</h1>
                <p className="font-medium text-2xl xl:text-4xl">в футере, который я специально не клеил:</p>
            </div>
        </div>
    );
}
