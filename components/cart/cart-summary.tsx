import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"
import { Link } from '@/i18n/routing';

interface CartSummaryProps {
  subtotal: number
  shipping: number
}

export default function CartSummary({ subtotal, shipping }: CartSummaryProps) {
  const total = subtotal + shipping

  const t = useTranslations()

  return (
    <Card>
      <CardContent className="grid gap-4 p-6">
        <h2 className="font-semibold">{t("common.order")}</h2>
        <div className="flex justify-between">
          <span>{t("cart.subtotal")}</span>
          <span>{subtotal.toFixed(2)} DA</span>
        </div>
        <div className="flex justify-between">
          <span>{t("cart.shipping")}</span>
          <span>{shipping.toFixed(2)} DA</span>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Promo code" />
          <Button variant="outline">{t("cart.apply")}</Button>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>{t("cart.total")}</span>
          <span>{total.toFixed(2)} DA</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/checkout">{t("cart.checkout")}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

