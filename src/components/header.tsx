import Link from "next/link"
import { EyeClosed, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <EyeClosed className="h-6 w-6 mr-2" />
            <span className="font-semibold text-lg">Hine Eyelash</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/services/eyelashes" className="text-gray-600 hover:text-gray-900">
              EYELASHES
            </Link>
            <Link href="/services/nails" className="text-gray-600 hover:text-gray-900">
              NAILS
            </Link>
            <Link href="/booking" className="text-gray-600 hover:text-gray-900">
              BOOKING
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-up">SIGN UP</Link>
          </Button>
          <Button variant="default" className="rounded-full bg-gray-900 hover:bg-gray-800" asChild>
            <Link href="/sign-in">SIGN IN</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
