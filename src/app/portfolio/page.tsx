import Card from "../../components/card";

export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            image: "https://via.placeholder.com/300x200",
            title: "Портфолио 1",
            description: "Описание первого портфолио.",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300x200",
            title: "Портфолио 2",
            description: "Описание второго портфолио.",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300x200",
            title: "Портфолио 3",
            description: "Описание третьего портфолио.",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300x200",
            title: "Портфолио 4",
            description: "Описание четвёртого портфолио.",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/300x200",
            title: "Портфолио 5",
            description: "Описание пятого портфолио.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Мои портфолио</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolios.map((portfolio) => (
                        <Card
                            key={portfolio.id}
                            id={portfolio.id}
                            image={portfolio.image}
                            title={portfolio.title}
                            description={portfolio.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
