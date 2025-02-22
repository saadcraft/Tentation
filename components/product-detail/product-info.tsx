"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"

interface ProductInfoProps {
  name: string
  price: number
  description: string
  details: string[]
}

export default function ProductInfo({ name, price, description, details }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-2xl font-bold mt-2">${price}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Description</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Select Size</h3>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="xs">XS</SelectItem>
            <SelectItem value="s">S</SelectItem>
            <SelectItem value="m">M</SelectItem>
            <SelectItem value="l">L</SelectItem>
            <SelectItem value="xl">XL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Quantity</h3>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={decreaseQuantity}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium w-8 text-center">{quantity}</span>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button size="lg" className="w-full">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>

      <div className="space-y-2">
        <h3 className="font-semibold">Product Details</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

