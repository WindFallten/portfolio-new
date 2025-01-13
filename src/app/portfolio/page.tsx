"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioAccordion = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const portfolioSections = [
        {
            id: 1,
            title: "UX/UI Design",
            items: [
                {
                    id: 1,
                    title: "Relynolli - редизайн",
                    date: "Май 2023",
                    logo: "relynolli/banner.png",
                    url: "/portfolio/relynolli",
                },
                {
                    id: 2,
                    title: "Nicety",
                    date: "Февраль 2023",
                    logo: "nicety/banner.png",
                    url: "/portfolio/nicety",
                },
                {
                    id: 3,
                    title: "Alpha Engineering",
                    date: "2023-2024",
                    logo: "ae/banner.png",
                    url: "/portfolio/ae",
                },
                {
                    id: 4,
                    title: "Random-Sport",
                    date: "Январь 2025",
                    logo: "rs/banner.png",
                    url: "/portfolio/rs",
                },
                {
                    id: 5,
                    title: "Folipro - редизайн",
                    date: "Сентябрь 2024",
                    logo: "folipro/banner.png",
                    url: "/portfolio/folipro",
                },
            ],
        },
        {
            id: 2,
            title: "Графический дизайн",
            items: [
                {
                    id: 6,
                    title: "Швейный мир",
                    date: "2022-н.в.",
                    logo: "sw/banner.png",
                    url: "/portfolio/sw",
                },
                {
                    id: 7,
                    title: "Barrique",
                    date: "Июль 2024",
                    logo: "barrique/banner.png",
                    url: "/portfolio/barrique",
                },
            ],
        },
        {
            id: 3,
            title: "Разработка на Tilda",
            items: [
                {
                    id: 8,
                    title: "Bilston",
                    date: "Июль 2024",
                    logo: "bilston/banner.png",
                    url: "/portfolio/bilston",
                },
                {
                    id: 9,
                    title: "Relynolli - сайт",
                    date: "Март 2024",
                    logo: "relynolli/banner.png",
                    url: "/portfolio/relynolli/site",
                },
                {
                    id: 10,
                    title: "Feellesya",
                    date: "Февраль 2024, Ноябрь 2024",
                    logo: "feellesya/banner.png",
                    url: "/portfolio/feellesya",
                },
            ],
        },
        {
            id: 4,
            title: "Frontend разработчик",
            items: [
                {
                    id: 11,
                    title: "Швейный мир",
                    date: "2021-н.в.",
                    logo: "sw/banner.png",
                    url: "/portfolio/sw",
                },
            ],
        },
        {
            id: 5,
            title: "Контент-менеджер",
            items: [
                {
                    id: 12,
                    title: "Швейный мир",
                    date: "2021-н.в.",
                    logo: "sw/banner.png",
                    url: "/portfolio/sw",
                },
            ],
        },
    ];

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className=" sm:min-h-screen max-w-screen-2xl mx-auto px-0">
            <h1 className="text-6xl lg:text-8xl font-semibold mb-8 text-start">
                Мои портфолио
            </h1>
            <div className="flex flex-col gap-6">
                {portfolioSections.map((section) => (
                    <div key={section.id} className="border-4 rounded-3xl overflow-hidden">
                        {/* Заголовок аккордеона */}
                        <button
                            className="w-full flex justify-between items-center px-4 sm:px-12 py-6 sm:py-12 font-bold text-3xl sm:text-6xl"
                            onClick={() => toggleAccordion(section.id)}
                        >
                            {section.title}
                            <span>{openAccordion === section.id ? "−" : "+"}</span>
                        </button>

                        {/* Контент аккордеона */}
                        {openAccordion === section.id && (
                            <div className="flex flex-col gap-1 sm:gap-6 px-4 sm:px-12 uppercase">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.url}
                                        className="block rounded-2xl overflow-hidden"
                                    >
                                        {/* Картинка с шириной экрана */}
                                        <div className="relative w-full aspect-[1340/550]">
                                            <Image
                                                src={`/${item.logo}`}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>

                                        {/* Заголовок и дата */}
                                        <div
                                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 sm:gap-0 p-4 sm:p-8">
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
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioAccordion;
