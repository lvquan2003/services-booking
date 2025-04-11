import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  location: string
  price: number
  imageSrc: string
}

export default function ServiceCard({ title, location, price, imageSrc }: ServiceCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden border bg-white">
      <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{location}</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="font-bold text-lg">${price}</span>
              <span className="text-gray-500 text-sm"> /session</span>
            </div>
            <Button variant="outline" size="sm">
              Book Now
            </Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
