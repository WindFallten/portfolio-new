import Link from "next/link";

export default function NicetyPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Проект: Nicety</h1>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Описание проекта</h2>
                <p>
                    В этом проекте я создал сайт на платформе Tilda для компании «Relynolli». Сайт должен был стать зеркалом существующего ресурса с интеграцией каталога через 1С, реализацией корзины, а также переноса на новый домен. В процессе работы были выполнены следующие задачи:
                </p>
                <ul className="list-disc pl-6">
                    <li>Перенос сайта на новый домен (relynolli.ru).</li>
                    <li>Интеграция с системой 1С для автоматического обновления ассортимента.</li>
                    <li>Разработка функционала корзины с возможностью заказа товаров.</li>
                    <li>Реализация адаптивного дизайна, который корректно отображается на мобильных устройствах.</li>
                    <li>Настройка форм для сбора данных в Tilda CRM и интеграция с Яндекс.Метрикой.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Технологии</h2>
                <p>Для реализации проекта использовались следующие технологии:</p>
                <ul className="list-disc pl-6">
                    <li>Tilda — основная платформа для создания сайта.</li>
                    <li>1С — интеграция каталога для автоматического обновления товаров.</li>
                    <li>HTML/CSS — для кастомизации и дизайна страниц.</li>
                    <li>JavaScript — для реализации динамических элементов и форм.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Результаты</h2>
                <p>
                    В результате работы сайт был полностью перенесен на новый домен, интегрирован с 1С, и обеспечен весь функционал для удобного оформления заказов. Все страницы были адаптированы под мобильные устройства, а также настроены все необходимые формы для сбора информации.
                </p>
            </section>
        </div>
    );
}
