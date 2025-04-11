import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  imageSrc: string
  className?: string
}

export default function CategoryCard({ title, imageSrc, className }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className={cn("rounded-xl overflow-hidden relative h-40 flex items-center justify-center text-white", className)}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover mix-blend-overlay opacity-30"
      />
      <h3 className="text-xl font-semibold z-10">{title}</h3>
    </Link>
  )
}
