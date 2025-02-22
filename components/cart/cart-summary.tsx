import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface CartSummaryProps {
  subtotal: number
  shipping: number
}

export default function CartSummary({ subtotal, shipping }: CartSummaryProps) {
  const total = subtotal + shipping

  return (
    <Card>
      <CardContent className="grid gap-4 p-6">
        <h2 className="font-semibold">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Promo code" />
          <Button variant="outline">Apply</Button>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

