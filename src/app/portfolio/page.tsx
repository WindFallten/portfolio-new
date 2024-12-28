import Link from "next/link";
import Image from "next/image";


export default function Portfolio() {

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl lg:text-8xl font-bold mb-8 text-start">Мои портфолио</h1>
            <div className="container flex flex-wrap justify-items-center gap-6">
                <Link className="bg-foreground flex flex-col p-8 gap-6 rounded-2xl " href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col py-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
                <Link className="bg-foreground flex flex-col p-8 gap-6 rounded-2xl max-w-fit" href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col py-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
                <Link className="bg-foreground flex flex-col p-8 gap-6 rounded-2xl max-w-fit" href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col py-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
