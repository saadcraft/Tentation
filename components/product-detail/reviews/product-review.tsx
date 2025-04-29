"use client"

import { useState } from "react"
import Pagination from "./pagi-reviews"
import Reviews from "./review"
import ReviewStatus from "./review-status"
import ReviewsFilter from "./reviews-filter"

export default function ReviewsSection() {

    const [currentPage, setCurrentPage] = useState(1)

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
        {
            id: 3,
            author: "Moh B.",
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
                {/* Left side - Filter and reviews */}
                <ReviewStatus ratingDistribution={ratingDistribution} />
                {/* Right side - Filter and reviews */}
                <div className="lg:w-2/3 lg:pl-12">
                    {/* Filter options */}
                    <ReviewsFilter />

                    {/* Individual reviews */}
                    <div className="space-y-12">
                        {reviews.map((review) => (
                            <Reviews key={review.id} review={review} />
                        ))}
                        <Pagination totalPages={10} initialPage={currentPage} onPageChange={(page) => setCurrentPage(page)} />
                    </div>
                </div>
            </div>
        </section>
    )
}

