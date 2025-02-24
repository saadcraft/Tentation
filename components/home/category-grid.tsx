"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from '@/i18n/routing';


export default function CategoryGrid() {

  const t = useTranslations()

  const categories = [
    {
      name: t("home.categories.mens"),
      slug: "mens",
      image: "/men-wear.png?height=300&width=500",
    },
    {
      name: t("home.categories.womens"),
      slug: "womens",
      image: "/women-wear.png?height=300&width=500",
    },
    {
      name: t("home.categories.accessories"),
      slug: "accessories",
      image: "/accessoire.png?height=300&width=500",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className={`text-2xl font-bold mb-6`}>{t("home.categories.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={`/products?category=${category.slug}`}>
            <Card className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0 relative aspect-[16/9]">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover object-top transition-transform group-hover:scale-105"
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

