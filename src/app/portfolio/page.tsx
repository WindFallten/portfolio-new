import Link from "next/link";
import Image from "next/image";


export default function Portfolio() {

    return (
        <div className="min-h-screen bg-background">
            <h1 className="text-4xl font-bold mb-8 text-center">Мои портфолио</h1>
            <div className="container mx-auto px-4 py-8 flex flex-wrap flex-col gap-6">
                <Link className="bg-foreground flex flex-col p-10 gap-6 rounded-2xl" href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col p-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
                <Link className="bg-foreground flex flex-col p-10 gap-6 rounded-2xl" href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col p-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
                <Link className="bg-foreground flex flex-col p-10 gap-6 rounded-2xl" href="portfolio/relynolli">
                    <Image
                        className="dark:invert"
                        src="relynolli/file.svg"
                        alt="Relynolli"
                        width={30}
                        height={38}
                    />
                    <div className="flex flex-col p-2">
                        <h3 className="font-bold text-3xl text-background">Relynolli</h3>
                        <p className="font-medium text-xl text-background">Проект, с которым не получилось
                            подружиться</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
