import ProductGallery from "@/components/product-detail/product-gallery"
import ProductInfo from "@/components/product-detail/product-info"

export default function ProductPage() {
  const productImages = [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
  ]

  const productDetails = {
    name: "Classic Denim Jacket",
    price: 8900,
    description:
      "A timeless denim jacket that never goes out of style. Made from high-quality cotton denim with a comfortable fit and classic design. Perfect for layering in any season.",
    details: [
      "100% Cotton Denim",
      "Button closure",
      "Machine washable",
      "Two chest pockets",
      "Adjustable button cuffs",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductGallery images={productImages} productName={productDetails.name} />
        <ProductInfo {...productDetails} />
      </div>
    </div>
  )
}

