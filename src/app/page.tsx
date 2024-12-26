import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <div className="flex lg:flex-row items-center justify-between sm:flex-col-reverse">
              <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                  <h1 className="font-black text-8xl">Привет, я Гоша</h1>
                  <p className="text-2xl font-bold ">Я создаю цифровые решения и платформы, которые делают жизнь удобнее
                      и продуктивнее.</p>
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
              </div>
              <Image
                  className="rounded-full"
                  src="/me.jpg"
                  alt="Сигалев Георгий"
                  width={500}
                  height={150}
              />
          </div>

          <section className="py-16">
              <h2 className="text-3xl font-semibold text-center">Мои проекты</h2>
              <Link href="/portfolio">

              </Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  <div className="card">
                      <img src="/images/project1.jpg" alt="Проект 1" className="w-full h-64 object-cover"/>
                      <h3 className="text-xl font-semibold mt-4">Проект 1</h3>
                      <p className="text-gray-500">Краткое описание проекта...</p>
                      <Link href="/portfolio/project1" className="text-blue-500">Подробнее</Link>
                  </div>
                  <div className="card">
                      <img src="/images/project2.jpg" alt="Проект 2" className="w-full h-64 object-cover"/>
                      <h3 className="text-xl font-semibold mt-4">Проект 2</h3>
                      <p className="text-gray-500">Краткое описание проекта...</p>
                      <Link href="/portfolio/project2" className="text-blue-500">Подробнее</Link>
                  </div>
                  <div className="card">
                      <img src="/images/project3.jpg" alt="Проект 3" className="w-full h-64 object-cover"/>
                      <h3 className="text-xl font-semibold mt-4">Проект 3</h3>
                      <p className="text-gray-500">Краткое описание проекта...</p>
                      <Link href="/portfolio/project3" className="text-blue-500">Подробнее</Link>
                  </div>
              </div>
          </section>

          <section className="bg-background py-16">
              <h2 className="text-3xl font-semibold text-center">Мои навыки</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
                  <div className="text-center">
                      <img src="/icons/web-development.svg" alt="Веб-разработка" className="w-12 h-12 mx-auto"/>
                      <h3 className="mt-4 font-semibold">Веб-разработка</h3>
                      <p>Next.js, Strapi, Tailwind CSS</p>
                  </div>
                  <div className="text-center">
                      <img src="/icons/ux-design.svg" alt="UX/UI дизайн" className="w-12 h-12 mx-auto"/>
                      <h3 className="mt-4 font-semibold">UX/UI дизайн</h3>
                      <p>Figma, Sketch, Adobe XD</p>
                  </div>
                  <div className="text-center">
                      <img src="/icons/photography.svg" alt="Фотография" className="w-12 h-12 mx-auto"/>
                      <h3 className="mt-4 font-semibold">Фотография</h3>
                      <p>DaVinci Resolve, Lightroom</p>
                  </div>
                  <div className="text-center">
                      <img src="/icons/music.svg" alt="Музыка" className="w-12 h-12 mx-auto"/>
                      <h3 className="mt-4 font-semibold">Музыка</h3>
                      <p>Хор, пианино, музыкальное ПО</p>
                  </div>
              </div>
          </section>

          <section className="py-16">
              <h2 className="text-3xl font-semibold text-center">Отзывы</h2>
              <div className="flex justify-center gap-16 mt-10">
                  <div className="text-center">
                      <blockquote className="italic">"Гоша - настоящий профессионал! Его подход к проектам всегда точен
                          и эффективен."
                      </blockquote>
                      <p className="font-semibold mt-2">Иван, CEO компании</p>
                  </div>
                  <div className="text-center">
                      <blockquote className="italic">"Работа с Гошей всегда приносит отличные результаты. Очень доволен
                          сотрудничеством."
                      </blockquote>
                      <p className="font-semibold mt-2">Анна, Project Manager</p>
                  </div>
              </div>
          </section>

          <section className="bg-background py-16">
              <h2 className="text-3xl font-semibold text-center">Свяжитесь со мной</h2>
              <p className="text-center text-lg mt-4">Готов обсудить новые проекты и идеи. Напишите мне, и я с радостью
                  помогу!</p>
              <div className="flex justify-center mt-6">
                  <Link href="/contact" className="bg-foreground text-background py-2 px-6 rounded-md hover:bg-green-500">
                      Написать
                  </Link>
              </div>
          </section>
      </div>
  );
}
