
export default function ReviewsSection() {
    // Sample review data
    const reviews = [
        {
            id: 1,
            author: "Cindy C.",
            date: "January 16, 2025",
            location: "France",
            rating: 5,
            title: "EFFICIENT",
            content:
                "The most effective of all peels for me! I have atomic skin and had no reaction. My skin is much more even and luminous without the not-so-pleasant experience of a scrub. I would recommend",
            verified: true,
            skinType: "Combination",
            ageRange: "25-34 years old",
            sensitiveSkin: "Yes",
            productName: "Resurfacing Mask with 10% AHA and 10% PHA",
            translated: true,
        },
        {
            id: 2,
            author: "Nathalie P.",
            date: "January 28, 2025",
            location: "France",
            rating: 5,
            title: "EXCELLENT TOLERANCE",
            content:
                "As I have sensitive skin, this peel is both effective and non-irritating. I use it once a week in the evening, just before my night cream. No redness, no tightness, just a fresh and luminous complexion the next day.",
            verified: true,
            skinType: "Combination",
            ageRange: "35-44 years old",
            sensitiveSkin: "Yes",
            productName: "Resurfacing Mask with 10% AHA and 10% PHA",
            translated: false,
        },
    ]

    // Rating distribution data
    const ratingDistribution = [
        { stars: 5, percentage: 61 },
        { stars: 4, percentage: 23 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 4 },
        { stars: 1, percentage: 6 },
    ]

    return (
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row justify-between">
                {/* Left side - Reviews summary */}
                <div className="lg:w-1/3 mb-10 lg:mb-0 h-full lg:sticky top-20">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4">REVIEWS</h2>
                    <div className="text-5xl font-bold mb-6">4.3</div>
                    <div className="flex mb-2">
                        {[1, 2, 3, 4].map((star) => (
                            <svg key={star} className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                fillOpacity="0.3"
                            />
                            <path fill="currentColor" d="M12 17.27L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                        </svg>
                    </div>
                    <p className="text-sm mb-8">
                        This product is rated 4.3 out of 5 stars. We have collected more than 71 reviews.
                    </p>

                    {/* Rating distribution */}
                    <div className="space-y-2">
                        {ratingDistribution.map((item) => (
                            <div key={item.stars} className="flex items-center">
                                <div className="flex items-center w-24">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < item.stars ? "fill-current text-black dark:text-white" : "fill-gray-200 dark:fill-gray-600"}`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="w-full bg-gray-200 h-2 mx-2">
                                    <div className="bg-gray-400 h-2" style={{ width: `${item.percentage}%` }}></div>
                                </div>
                                <span className="text-xs w-10">{item.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Filter and reviews */}
                <div className="lg:w-2/3 lg:pl-12">
                    {/* Filter options */}
                    <div className="mb-10">
                        <p className="text-sm text-gray-500 mb-3">FILTER</p>
                        <div className="flex flex-wrap gap-3">
                            <select className="border px-4 py-3 text-sm flex justify-between items-center">
                                <option value=""> SKIN </option>
                            </select>
                            <select className="border px-4 py-3 text-sm flex justify-between items-center">
                                <option value="">AGE RANGE </option>
                            </select>
                            <select className="border px-4 py-3 text-sm flex justify-between items-center">
                                <option value="">SENSITIVE SKIN </option>
                            </select>
                            <select className="border px-4 py-3 text-sm flex justify-between items-center">
                                <option value="">TYPOLOGY </option>
                            </select>
                        </div>
                    </div>

                    {/* Individual reviews */}
                    <div className="space-y-12">
                        {reviews.map((review) => (
                            <div key={review.id} className="border-b pb-12">
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

