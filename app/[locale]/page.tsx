import CategoryGrid from "@/components/home/category-grid"
import FeaturedProducts from "@/components/home/featured-products"
import HeroSection from "@/components/home/hero-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
    </div>
  )
}

