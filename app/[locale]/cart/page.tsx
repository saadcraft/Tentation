"use client"

import CartItem from "@/components/cart/cart-item"
import CartSummary from "@/components/cart/cart-summary"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10

  const t = useTranslations()

  return (
    <div className="container mx-auto lg:px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">{t("cart.title")}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="divide-y">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <CartSummary subtotal={subtotal} shipping={shipping} />
        </div>
      </div>
    </div>
  )
}

const initialCartItems = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 8900,
    quantity: 1,
    size: "M",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "White T-Shirt",
    price: 2900,
    quantity: 2,
    size: "L",
    image: "/placeholder.svg?height=200&width=200",
  },
]

