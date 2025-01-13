// src/app/about.tsx
import React from 'react';
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="mx-auto flex flex-col items-start justify-start gap-2">
            <h1 className="lg:text-8xl text-6xl font-semibold">Обо мне</h1>
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 my-8">
                <Image
                    className="rounded-full float-none lg:float-left lg:mr-8 mb-4 lg:mb-0"
                    src="/me.jpg"
                    alt="Сигалев Георгий"
                    width={500}
                    height={500}
                />
                <div>
                    <h2 className="text-6xl lg:text-8xl font-semibold ">Меня зовут Гоша</h2>
                    <p className="text-xl">
                        Я разрабатываю инновационные проекты и платформы, которыми приятно пользоваться. Моя цель —
                        создавать удобные и функциональные инструменты, которые решают реальные задачи и помогают людям.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <section className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold">Цифровые решения и разработки</h2>
                    <p className="text-xl">
                        Я занимаюсь разработкой веб-платформ и цифровых решений, используя современные технологии, такие
                        как Next.js и Strapi. В своей работе я фокусируюсь на создании удобных интерфейсов и интеграции
                        функционала, который будет полезен пользователям. Среди моих проектов — платформы для поиска
                        работы и карьерные агрегаторы, которые обеспечивают легкость в использовании и эффективную
                        работу с данными.
                    </p>
                    <p className="text-xl">
                        Я также имею опыт в UX/UI дизайне, что позволяет мне создавать интерфейсы, ориентированные на
                        пользователя, с фокусом на простоту и доступность. Мой подход в разработке всегда основывается
                        на том, чтобы создавать не просто рабочие решения, но и удобные и интуитивно понятные
                        интерфейсы.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold">Фотография и видеосъемка</h2>
                    <p className="text-xl ">
                        Помимо технических навыков, я также занимаюсь фотографией и видеосъемкой. Многолетний опыт в
                        этой области помогает мне создавать визуальный контент высокого качества, будь то для личных
                        проектов или коммерческих нужд. Я использую такие инструменты, как DaVinci Resolve, Lightroom,
                        Photoshop, Gimp и Corel Draw для обработки и монтажа материалов.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold">Музыка и творческие увлечения</h2>
                    <p className="text-xl">
                        Мое музыкальное образование и любовь к музыке также влияют на мой творческий подход к работе. Я
                        учился в музыкальной школе 7 лет, где основным направлением был хор, а вторичным — пианино.
                        Музыка продолжает вдохновлять меня в разных аспектах жизни, будь то в работе с контентом или в
                        личных проектах.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold">Soft Skills</h2>
                    <p className="text-xl">
                        Я также уделяю внимание развитию soft skills, таких как коммуникация и презентация. Эти навыки
                        помогают мне эффективно взаимодействовать с коллегами и клиентами, а также доносить свои идеи и
                        проекты до широкой аудитории.
                    </p>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold">Основные компетенции:</h2>
                    <ul className="list-disc pl-6 text-xl ">
                        <li>Разработка веб-платформ (Next.js, Strapi)</li>
                        <li>UX/UI дизайн</li>
                        <li>Обработка фото и видео (DaVinci Resolve, Lightroom, Photoshop, Gimp, Corel Draw)</li>
                        <li>3D моделирование (T-flex CAD)</li>
                        <li>Soft skills и коммуникация</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
