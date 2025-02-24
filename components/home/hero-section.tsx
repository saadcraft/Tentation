// "use client"

// import { useState, useEffect, useCallback } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const slides = [
//   {
//     image: "/placeholder.svg?height=800&width=1400",
//     title: "Summer Collection 2024",
//     subtitle: "Discover effortless style",
//     cta: "Shop Now",
//     link: "/products/summer",
//     position: "right",
//   },
//   {
//     image: "/placeholder.svg?height=800&width=1400",
//     title: "Luxury Accessories",
//     subtitle: "Elevate your everyday",
//     cta: "View Collection",
//     link: "/products/accessories",
//     position: "left",
//   },
//   {
//     image: "/placeholder.svg?height=800&width=1400",
//     title: "New Season Arrivals",
//     subtitle: "Be the first to shop",
//     cta: "Explore Now",
//     link: "/new-arrivals",
//     position: "center",
//   },
// ]

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }, [slides.length])

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000)
//     return () => clearInterval(timer)
//   }, [nextSlide])

//   return (
//     <div className="relative h-[80vh] overflow-hidden bg-gray-900">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
//             ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
//         >
//           <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
//           <div className="absolute inset-0 bg-black/30" />
//           <div
//             className={`absolute inset-0 flex items-center ${
//               slide.position === "right"
//                 ? "justify-end pr-12"
//                 : slide.position === "left"
//                   ? "justify-start pl-12"
//                   : "justify-center"
//             }`}
//           >
//             <div className="max-w-xl p-8 text-center">
//               <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">{slide.title}</h1>
//               <p className="mb-8 text-lg text-white/90 md:text-xl">{slide.subtitle}</p>
//               <Link
//                 href={slide.link}
//                 className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
//               >
//                 {slide.cta}
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
//           >
//             <span className="sr-only">Go to slide {index + 1}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }



import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {

  const t = useTranslations()

  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
      <Image src="/main.png?height=500&width=1200" alt="Hero image" fill className="object-cover object-right" priority />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("home.hero.title")}</h1>
          <p className="text-lg md:text-xl mb-6">{t("home.hero.subtitle")}</p>
          <Button asChild size="lg">
            <Link href="/products">{t("home.hero.cta")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

