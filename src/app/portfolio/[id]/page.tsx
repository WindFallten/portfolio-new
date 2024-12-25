type PortfolioDetailProps = {
    params: {
        id: string;
    };
};

export default function PortfolioDetail({ params }: PortfolioDetailProps) {
    const { id } = params;

    // Тестовые данные. Можно заменить на запрос к API.
    const portfolioDetails = {
        title: `Портфолио ${id}`,
        image: "https://via.placeholder.com/600x400",
        description: `Это подробное описание портфолио с ID ${id}.`,
        details: "Здесь можно разместить больше информации о проекте.",
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {portfolioDetails.title}
                </h1>
                <img
                    src={portfolioDetails.image}
                    alt={portfolioDetails.title}
                    className="w-full h-96 object-cover rounded-lg mb-8"
                />
                <p className="text-lg mb-4">{portfolioDetails.description}</p>
                <div className="text-base">{portfolioDetails.details}</div>
            </div>
        </div>
    );
}
