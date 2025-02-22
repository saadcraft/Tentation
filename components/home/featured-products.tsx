import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
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
]

export default function FeaturedProducts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-bold">${product.price}</p>
                    <Button size="sm" variant="secondary">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

