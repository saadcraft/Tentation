import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Men's Wear",
    slug: "mens",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Women's Fashion",
    slug: "womens",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function CategoryGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={`/products?category=${category.slug}`}>
            <Card className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0 relative aspect-[16/9]">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

