import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import ServiceCard from "@/components/service-card"

export default function NailsPage() {
  // In a real app, you would fetch these from your Payload CMS
  const featuredServices = [
    {
      id: "1",
      title: "Gel Manicure",
      description: "Long-lasting, chip-resistant gel polish for a flawless finish",
      price: 45,
      duration: 60,
      imageSrc: "/placeholder.svg?height=300&width=400",
      location: "Nail Art Boutique",
      slug: "gel-manicure",
    },
    {
      id: "2",
      title: "Pink & White Acrylic",
      description: "Classic French manicure look with durable acrylic overlay",
      price: 65,
      duration: 75,
      imageSrc: "/placeholder.svg?height=300&width=400",
      location: "Nail Art Boutique",
      slug: "pink-white-acrylic",
    },
    {
      id: "3",
      title: "Basic Manicure",
      description: "Essential nail care with regular polish application",
      price: 30,
      duration: 45,
      imageSrc: "/placeholder.svg?height=300&width=400",
      location: "Nail Art Boutique",
      slug: "basic-manicure",
    },
    {
      id: "4",
      title: "Nail Art Design",
      description: "Custom nail art with intricate designs and embellishments",
      price: 75,
      duration: 90,
      imageSrc: "/placeholder.svg?height=300&width=400",
      location: "Nail Art Boutique",
      slug: "nail-art-design",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Nails</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start mb-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Nail Services</h1>
            <p className="text-lg text-gray-600">
              Express your style with our premium nail services. From classic manicures to elaborate nail art, our
              skilled technicians will help you achieve the perfect look for any occasion.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Nail Services"
              width={600}
              height={400}
              className="object-cover w-full h-[300px]"
            />
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Nail Services</h2>
            <Button variant="outline" asChild>
              <Link href="/services/nails/all">
                View All Services
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                location={service.location}
                price={service.price}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">About Our Nail Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                Our nail services are performed by experienced technicians using premium products and sterilized tools.
                We prioritize both beauty and nail health in every service.
              </p>
              <p>
                From quick polish changes to elaborate nail art, we offer a wide range of options to suit your style and
                schedule.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We use high-quality gel and acrylic products that provide durability without damaging your natural nails
                when properly applied and removed.
              </p>
              <p>
                All services include proper nail preparation, cuticle care, and finishing touches to ensure your
                manicure looks flawless and lasts as long as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Our Techniques</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Gel polish for 2-3 weeks of shine</li>
              <li>• Durable acrylic for length and strength</li>
              <li>• Dip powder for natural-looking enhancement</li>
              <li>• Hand-painted nail art for unique designs</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Nail Health</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Gentle removal techniques</li>
              <li>• Nourishing treatments for damaged nails</li>
              <li>• Strengthening base coats</li>
              <li>• Cuticle oil and hydration</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Book Your Service</h3>
            <p className="text-gray-600 mb-4">Ready for beautiful nails? Book your appointment today.</p>
            <Button className="w-full" asChild>
              <Link href="/booking?category=nails">Book Now</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
