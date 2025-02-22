import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
      <Image src="/placeholder.svg?height=500&width=1200" alt="Hero image" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Collection 2024</h1>
          <p className="text-lg md:text-xl mb-6">Discover the latest trends in fashion</p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

