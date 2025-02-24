"use client"

import { Input } from "@/components/ui/input"
// import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

// interface ProductFiltersProps {
//   priceRange: number[]
//   onPriceRangeChange: (value: number[]) => void
// }

const categories = ["T-Shirts", "Jeans", "Dresses", "Jackets", "Accessories"]

export default function ProductFilters() {
  const t = useTranslations();
  return (
    <aside className="w-full md:w-64 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">{t("common.search")}</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search products..." />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">{t("home.categories.categorie")}</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider value={priceRange} onValueChange={onPriceRangeChange} max={200} step={1} className="mb-2" />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div> */}
    </aside>
  )
}

