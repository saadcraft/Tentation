"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function CheckoutPage() {

  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">{t("common.checkout")}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">{t("cart.contact")}</h2>
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("user.firstname")}</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("user.lastname")}</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("user.email")}</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("user.phone")}</Label>
                  <Input id="phone" type="tel" placeholder="+213 555 555555" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">{t("user.street")}</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="apartment">Apartment, suite, etc.</Label>
                  <Input id="apartment" placeholder="Apt 4B" />
                </div> */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">{t("user.city")}</Label>
                    <Input id="city" placeholder="Enter Municipalité" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">{t("user.state")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">Oran</SelectItem>
                        <SelectItem value="ca">Tlemcen</SelectItem>
                        <SelectItem value="tx">Alger</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">{t("user.zip")}</Label>
                    <Input id="zip" placeholder="31000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Special delivery instructions..." />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          {/* <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Payment Method</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expMonth">Expiry Month</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                            {String(i + 1).padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expYear">Expiry Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                            {new Date().getFullYear() + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">{t("common.order")}</h2>
              <div className="space-y-4">
                {/* Order Items */}
                <div className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative aspect-square h-16 w-16 shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity} × {item.price} DA
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{(item.price * item.quantity).toFixed(2)} DA</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Order Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t("cart.subtotal")}</span>
                    <span>14900 DA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("cart.shipping")}</span>
                    <span>1000 DA</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>{t("cart.total")}</span>
                    <span>15900 DA</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{t("common.place")}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

const orderItems = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 8900,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "White T-Shirt",
    price: 2900,
    quantity: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
]

