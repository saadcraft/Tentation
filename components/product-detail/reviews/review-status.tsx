
type StateType = {
    stars: number;
    percentage: number;
}


export default function ReviewStatus({ ratingDistribution }: { ratingDistribution: StateType[] }) {
    return (
        <div className="lg:w-1/3 mb-10 lg:mb-0 h-full lg:sticky top-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">REVIEWS</h2>
            <div className="flex items-start gap-2">
                <div className="text-5xl font-bold mb-6">4.3</div>
                <div className='flex flex-col items-left gap-x-2 md:flex-row md:items-center'>
                    <div>
                        <p className='text-gray-300 text-xl'>★★★★★</p>
                    </div>
                    <div className='absolute'>
                        <div className='overflow-hidden' style={{ width: `${(4.3 * 100) / 5}%` }}>
                            <p className='text-primer text-xl'>★★★★★</p>
                        </div>
                    </div>
                </div>
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
    )
}
