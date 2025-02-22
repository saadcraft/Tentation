import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={productName}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} thumbnail ${i + 1}`}
              fill
              className="object-cover rounded-lg cursor-pointer hover:opacity-75"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

