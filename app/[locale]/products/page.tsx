"use client"

import ProductFilters from "@/components/products/product-filters"
import ProductGrid from "@/components/products/product-grid"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <ProductFilters priceRange={priceRange} onPriceRangeChange={setPriceRange} />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price-asc")}>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price-desc")}>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}

