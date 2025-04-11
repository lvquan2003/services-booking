import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import ServiceCard from "@/components/service-card"

export default function EyelashesPage() {
  // In a real app, you would fetch these from your Payload CMS
  const featuredServices = [
    {
      id: "1",
      title: "Volume Eyelash Extensions",
      description: "Multi-dimensional look with multiple extensions on each natural lash",
      price: 180,
      duration: 120,
      imageSrc: "/eye-1.jpg",
      location: "Glow Beauty Studio",
      slug: "volume-eyelash-extensions",
    },
    {
      id: "2",
      title: "Classic Eyelash Extensions",
      description: "One extension applied to one natural lash for a natural look",
      price: 120,
      duration: 90,
      imageSrc: "/eye-1.jpg",
      location: "Glow Beauty Studio",
      slug: "classic-eyelash-extensions",
    },
    {
      id: "3",
      title: "Hybrid Eyelash Extensions",
      description: "Mix of classic and volume techniques for a textured look",
      price: 150,
      duration: 105,
      imageSrc: "/eye-2.jpg",
      location: "Glow Beauty Studio",
      slug: "hybrid-eyelash-extensions",
    },
    {
      id: "4",
      title: "Anime Eyelash Extensions",
      description: "Dramatic, doll-like lashes inspired by anime characters",
      price: 200,
      duration: 150,
      imageSrc: "/eye-2.jpg",
      location: "Glow Beauty Studio",
      slug: "anime-eyelash-extensions",
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
          <span>Eyelashes</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start mb-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Eyelash Extensions</h1>
            <p className="text-lg text-gray-600">
              Enhance your natural beauty with our premium eyelash extension services. Our skilled technicians use only
              the highest quality materials to create stunning, long-lasting lashes tailored to your preferences.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/eye-3.jpeg"
              alt="Eyelash Extensions"
              width={600}
              height={400}
              className="object-cover w-full h-[300px]"
            />
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Eyelash Services</h2>
            <Button variant="outline" asChild>
              <Link href="/services/eyelashes/all">
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
          <h2 className="text-xl font-semibold mb-4">About Our Eyelash Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                Our eyelash extensions are applied by certified lash artists with years of experience. We use premium,
                lightweight materials that wont damage your natural lashes.
              </p>
              <p>
                Each service includes a consultation to determine the best style, length, and curl for your eye shape
                and desired look.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Maintenance appointments are recommended every 2-3 weeks to keep your lashes looking full and beautiful
                as your natural lashes shed.
              </p>
              <p>
                First-time clients should arrive 15 minutes early to complete a brief consultation form and discuss any
                allergies or sensitivities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">How to Prepare</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Arrive with clean lashes (no makeup)</li>
              <li>• Avoid caffeine before your appointment</li>
              <li>• Remove contact lenses if possible</li>
              <li>• Plan for 2-3 hours for your first appointment</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Aftercare</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Avoid water and steam for 24 hours</li>
              <li>• Dont use oil-based products near eyes</li>
              <li>• Brush lashes daily with a clean spoolie</li>
              <li>• Avoid rubbing or pulling at lashes</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Book Your Service</h3>
            <p className="text-gray-600 mb-4">Ready to transform your lashes? Book your appointment today.</p>
            <Button className="w-full" asChild>
              <Link href="/booking?category=eyelashes">Book Now</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
