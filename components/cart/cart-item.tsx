import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface CartItemProps {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  image: string
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  size,
  image,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {

  const t = useTranslations()

  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <div className="flex gap-4">
        <div className="relative aspect-square h-24 w-24 shrink-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-md" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{t("cart.size")}: {size}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(id, quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(id, quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">{(price * quantity).toFixed(2)} DA</span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onRemove(id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

