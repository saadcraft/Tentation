type Review = {
    id: number;
    author: string;
    date: string;
    location: string;
    rating: number;
    title: string;
    content: string;
    verified: boolean;
    skinType: string;
    ageRange: string;
    sensitiveSkin: string;
    productName: string;
    translated: boolean;
};

export default function Reviews({ review }: { review: Review }) {
    return (
        <div className="border-b pb-12">
            <div className="flex flex-col md:flex-row md:items-start">
                {/* Left column - User info */}
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <p className="font-medium">{review.author}</p>
                    <p className="text-sm text-gray-500">Verified buyer</p>
                    <p className="text-sm text-gray-500">
                        {review.location}, {review.date}
                    </p>

                    <div className="mt-4 space-y-1">
                        <p className="text-sm">
                            <span className="text-gray-500">Skin Type:</span> {review.skinType}
                        </p>
                        <p className="text-sm">
                            <span className="text-gray-500">Age range:</span> {review.ageRange}
                        </p>
                        <p className="text-sm">
                            <span className="text-gray-500">Sensitive skin:</span> {review.sensitiveSkin}
                        </p>
                    </div>
                </div>

                {/* Right column - Review content */}
                <div className="md:w-2/3">
                    <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "fill-current text-black" : "fill-gray-200"}`}
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>

                    <h3 className="font-bold mb-2">{review.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">About {review.productName}</p>
                    <p className="text-sm mb-3">{review.content}</p>

                    {review.translated && (
                        <p className="text-xs text-gray-500">
                            Translated from French. <button className="underline">See original.</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
