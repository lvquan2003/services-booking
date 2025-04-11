import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServiceCard from "@/components/service-card"
import CategoryCard from "@/components/category-card"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Inspiring Beauty Transformations
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Create memorable beauty moments by choosing a premium service with a warm ambiance as your beauty
              destination.
            </p>
            <div className="relative">
              <Input
                placeholder="Find Beauty Services"
                className="pl-4 pr-10 py-6 rounded-full border-gray-300 bg-white"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 rounded-full h-10 w-10 bg-gray-900 hover:bg-gray-800"
              >
                <Search className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative">
            <Image
              src="/eye-3.jpeg"
              alt="Featured beauty service"
              width={500}
              height={400}
              className="object-cover w-full h-[300px] md:h-[400px]"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Exceptional Beauty Services</h2>
              <p className="text-white text-lg mb-4">Located in Stunning Surroundings</p>
              <Button variant="secondary" className="w-fit" asChild>
                <Link href="/services/featured">
                  Show Top-Rated Services
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 text-white rounded-xl p-6 flex items-center justify-between col-span-full md:col-span-1">
              <span className="text-2xl font-semibold">200+</span>
              <span className="text-xl">Unique Services</span>
            </div>
            <CategoryCard
              title="Recommended Services"
              imageSrc="/eye-1.jpg"
              className="bg-[#a8c5c0]"
            />
            <CategoryCard
              title="Premium Treatments"
              imageSrc="/eye-1.jpg"
              className="bg-[#3d8b99]"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Popular Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Classic Eyelash Extensions"
              location="Downtown Beauty Studio"
              price={120}
              imageSrc="/eye-2.jpg"
            />
            <ServiceCard
              title="Gel Manicure & Pedicure"
              location="Nail Art Boutique"
              price={85}
              imageSrc="/eye-2.jpg"
            />
            <ServiceCard
              title="Facial Treatment"
              location="Glow Skincare Center"
              price={150}
              imageSrc="/eye-2.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
