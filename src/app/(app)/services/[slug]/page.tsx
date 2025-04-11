import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function ServicePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the service data based on the slug
  const service = {
    name: "Volume Eyelash Extensions",
    location: "Glow Beauty Studio, New York",
    price: 180,
    description:
      "Volume Eyelash Extensions are a luxurious beauty treatment that adds fullness and length to natural eyelashes. This premium service uses multiple lightweight extensions on each natural lash to create a fluffy, textured look that enhances your eyes and eliminates the need for mascara. Our skilled technicians use only the highest quality materials to ensure comfort and longevity, with results lasting up to 4 weeks with proper care.",
    duration: 120,
    capacity: 1,
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 items-start">
          <div className="md:col-span-1 lg:col-span-3 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{service.name}</h1>
              <div className="flex items-center text-gray-500 mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{service.location}</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={service.images[0] || "/placeholder.svg"}
                alt={service.name}
                width={800}
                height={500}
                className="object-cover w-full h-[300px] md:h-[400px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {service.images.slice(1).map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${service.name} ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-[150px]"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About this service</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <div className="sticky top-8 border rounded-xl p-6 bg-white shadow-sm">
              <div className="text-2xl font-bold mb-4">
                ${service.price} <span className="text-gray-500 text-sm font-normal">/session</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>{service.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-500 mr-3" />
                  <span>For {service.capacity} person</span>
                </div>
              </div>

              <Button className="w-full mb-3" asChild>
                <Link href={`/booking?service=${params.slug}`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Availability
                </Link>
              </Button>

              <p className="text-center text-sm text-gray-500">{"You won't be charged yet"}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
