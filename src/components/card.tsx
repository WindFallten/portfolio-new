import Link from "next/link";

type CardProps = {
    id: number;
    image: string;
    title: string;
    description: string;
};

export default function Card({ id, image, title, description }: CardProps) {
    return (
        <Link href={`/portfolio/${id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer transform hover:scale-105 transition-transform">
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt={title}
                />
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
