import Image from "next/image";

export default function FeelPage() {
    return (
        <div className="flex flex-col items-start w-full gap-8">
            {/* Заголовок */}
            <h1 className="text-4xl lg:text-8xl font-bold w-full text-left px-4">
                Feellesya
            </h1>

            {/* Первая картинка (на всю ширину экрана) */}
            <Image
                src="/feellesya/banner.png"
                alt="Feellesya"
                width={1920} // Условно большой размер
                height={0} // Автоматический расчет пропорций
                className="w-full h-auto"
            />

            {/* Описание проекта */}
            <section className="w-full px-4">
                <h2 className="text-3xl font-semibold mb-4 text-left">
                    Описание проекта
                </h2>
                <p className="text-left">
                    В этом проекте я создал сайт на платформе Tilda для компании «Relynolli».
                    Сайт должен был стать зеркалом существующего ресурса с интеграцией каталога
                    через 1С, реализацией корзины, а также переноса на новый домен. В процессе
                    работы были выполнены следующие задачи:
                </p>
                <ul className="list-disc pl-6 text-left">
                    <li>Перенос сайта на новый домен (relynolli.ru).</li>
                    <li>Интеграция с системой 1С для автоматического обновления ассортимента.</li>
                    <li>Разработка функционала корзины с возможностью заказа товаров.</li>
                    <li>
                        Реализация адаптивного дизайна, который корректно отображается на
                        мобильных устройствах.
                    </li>
                    <li>
                        Настройка форм для сбора данных в Tilda CRM и интеграция с Яндекс.Метрикой.
                    </li>
                </ul>
            </section>

            {/* Вторая картинка (пример другой картинки на всю ширину) */}
            <Image
                src="/feellesya/1.png"
                alt="Another example"
                width={1920} // Условно большой размер
                height={0} // Автоматический расчет пропорций
                className="w-full h-auto"
            />

            {/* Технологии */}
            <section className="w-full px-4">
                <h2 className="text-3xl font-semibold mb-4 text-left">Технологии</h2>
                <p className="text-left">Для реализации проекта использовались следующие технологии:</p>
                <ul className="list-disc pl-6 text-left">
                    <li>Tilda — основная платформа для создания сайта.</li>
                    <li>1С — интеграция каталога для автоматического обновления товаров.</li>
                    <li>HTML/CSS — для кастомизации и дизайна страниц.</li>
                    <li>JavaScript — для реализации динамических элементов и форм.</li>
                </ul>
            </section>

            {/* Результаты */}
            <section className="w-full px-4">
                <h2 className="text-3xl font-semibold mb-4 text-left">Результаты</h2>
                <p className="text-left">
                    В результате работы сайт был полностью перенесен на новый домен, интегрирован
                    с 1С, и обеспечен весь функционал для удобного оформления заказов. Все страницы
                    были адаптированы под мобильные устройства, а также настроены все необходимые
                    формы для сбора информации.
                </p>
            </section>
        </div>
    );
}
