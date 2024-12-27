import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata: Metadata = {
    title: "Сигалев Георгий",
    description: "Продуктовый дизайнер, Frontend разработчик, Человек",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className="container mx-auto px-6">
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
