import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <Card className="group cursor-pointer">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-t-lg" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold group-hover:text-primary transition-colors">{name}</h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-bold">${price}</p>
              <Button size="sm" variant="secondary">
                <ShoppingBag className="w-4 h-4 mr-2" />
                View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

