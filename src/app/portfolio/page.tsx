
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PortfolioSection = {
    id: number;
    title: string;
    items: Array<{
        id: number;
        title: string;
        date: string;
        logo: string;
        url: string;
    }>;
};

const PortfolioAccordion: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    const portfolioSections: PortfolioSection[] = [
        {
            id: 1,
            title: "UX/UI Design",
            items: [
                {
                    id: 1,
                    title: "Folipro - редизайн",
                    date: "Сентябрь 2024",
                    logo: "folipro/banner.png",
                    url: "/portfolio/folipro",
                },
                {
                    id: 2,
                    title: "Random-Sport",
                    date: "Январь 2025",
                    logo: "rs/banner.png",
                    url: "/portfolio/rs",
                },
                {
                    id: 3,
                    title: "Nicety",
                    date: "Февраль 2023",
                    logo: "nicety/banner.png",
                    url: "/portfolio/nicety",
                },
                {
                    id: 4,
                    title: "Alpha Engineering",
                    date: "2023-2024",
                    logo: "ae/banner.png",
                    url: "/portfolio/ae",
                },
            ],
        },
        {
            id: 2,
            title: "Графический дизайн",
            items: [
                {
                    id: 5,
                    title: "Швейный мир",
                    date: "2022-н.в.",
                    logo: "sw/banner.png",
                    url: "/portfolio/sw",
                },
                {
                    id: 6,
                    title: "Barrique",
                    date: "Июль 2024",
                    logo: "barrique/banner.png",
                    url: "/portfolio/barrique",
                },
            ],
        },
        {
            id: 3,
            title: "Tilda Разработка",
            items: [
                {
                    id: 7,
                    title: "Feellesya",
                    date: "Февраль 2024, Ноябрь 2024",
                    logo: "feellesya/banner.png",
                    url: "/portfolio/feellesya",
                },

                {
                    id: 8,
                    title: "Bilston",
                    date: "Июль 2024",
                    logo: "bilston/banner.png",
                    url: "/portfolio/bilston",
                },
            ],
        },
        {
            id: 4,
            title: "Frontend разработчик",
            items: [
                {
                    id: 9,
                    title: "Портфолио",
                    date: "Январь 2025",
                    logo: "myport/banner.png",
                    url: "/portfolio/myport",
                },
            ],
        },
        {
            id: 5,
            title: "Контент-менеджер",
            items: [
                {
                    id: 10,
                    title: "Швейный мир",
                    date: "2021-н.в.",
                    logo: "sw/banner.png",
                    url: "/portfolio/sw",
                },
            ],
        },
    ];


    const toggleAccordion = (id: number) => {
        if (openAccordion === id) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(id);
        }
    };

    const setHeight = (id: number) => {
        const element = contentRefs.current.get(id);
        if (element) {
            return openAccordion === id
                ? `${element.scrollHeight}px`
                : "0px";
        }
        return "0px";
    };

    return (
        <div className="sm:min-h-screen max-w-screen-2xl mx-auto">
            <h1 className="text-6xl lg:text-8xl font-semibold mb-8 text-start">
                Мои портфолио
            </h1>
            <div className="flex flex-col gap-6 ">
                {portfolioSections.map((section) => (
                    <div
                        key={section.id}
                        className="border-4 rounded-3xl overflow-hidden "
                    >
                        {/* Заголовок аккордеона */}
                        <button
                            className="w-full flex justify-between items-center px-4 sm:px-12 py-6 sm:py-12 font-bold text-3xl sm:text-6xl hover:text-color1"
                            onClick={() => toggleAccordion(section.id)}
                        >
                            {section.title}
                            <span>{openAccordion === section.id ? "−" : "+"}</span>
                        </button>

                        {/* Контент аккордеона */}
                        <div
                            ref={(el) => {
                                if (el) {
                                    contentRefs.current.set(section.id, el);
                                }
                            }}
                            style={{

                                height: setHeight(section.id),
                                transition: "height 0.5s ease-in-out",
                                overflow: "hidden",
                            }}
                        >
                            <div className="flex flex-col gap-1 sm:gap-6 px-4 sm:px-12 uppercase">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.url}
                                        className="block rounded-3xl overflow-hidden"
                                    >
                                        {/* Картинка с шириной экрана */}
                                        <div className="relative w-full aspect-[1340/550] ">
                                            <Image
                                                src={`/${item.logo}`}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>

                                        {/* Заголовок и дата */}
                                        <div
                                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-4 sm:gap-0 p-4 sm:p-8"
                                        >
                                            <h3 className="text-xl sm:text-4xl font-bold text-foreground">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg sm:text-2xl font-bold text-foreground">
                                                {item.date}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioAccordion;
