"use client"

import { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    totalPages: number
    initialPage: number
    onPageChange?: (page: number) => void
}

export default function Pagination({ totalPages, initialPage, onPageChange }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
        onPageChange?.(page)
    }

    const renderPageNumbers = () => {
        const pages = []

        // Always show first page
        pages.push(
            <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={`w-8 text-center ${currentPage === 1 ? "text-black font-medium" : "text-gray-400"}`}
            >
                {String(1).padStart(2, "0")}
            </button>,
        )

        // Show ellipsis if current page is far from the start
        if (currentPage > 4) {
            pages.push(
                <span key="ellipsis1" className="text-gray-400">
                    ...
                </span>,
            )
        }

        // Show pages around current page
        const startPage = Math.max(2, currentPage - 1)
        const endPage = Math.min(totalPages - 1, currentPage + 1)

        for (let i = startPage; i <= endPage; i++) {
            if (i <= 1 || i >= totalPages) continue // Skip first and last pages as they're always shown
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-8 text-center ${currentPage === i ? "text-black font-medium" : "text-gray-400"}`}
                >
                    {String(i).padStart(2, "0")}
                </button>,
            )
        }

        // Show points if current page is far from the end
        if (currentPage < totalPages - 3) {
            pages.push(
                <span key="points" className="text-gray-400">
                    ...
                </span>,
            )
        }

        // Always show last page
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={`w-8 text-center ${currentPage === totalPages ? "text-black font-medium" : "text-gray-400"}`}
                >
                    {String(totalPages).padStart(2, "0")}
                </button>
            )
        }

        return pages
    }

    return (
        <div className="flex items-center justify-center p-4 rounded-lg">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
            >
                <ChevronLeft />
            </button>

            <div className="flex items-center space-x-2 mx-2">{renderPageNumbers()}</div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
            >
                <ChevronRight />
            </button>
        </div>
    )
}