import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Select Service</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceCategory">Service Category</Label>
                  <Select defaultValue="eyelashes">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eyelashes">Eyelashes</SelectItem>
                      <SelectItem value="nails">Nails</SelectItem>
                      <SelectItem value="facial">Facial</SelectItem>
                      <SelectItem value="massage">Massage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select defaultValue="volume">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volume">Volume Eyelash Extensions</SelectItem>
                      <SelectItem value="classic">Classic Eyelash Extensions</SelectItem>
                      <SelectItem value="hybrid">Hybrid Eyelash Extensions</SelectItem>
                      <SelectItem value="anime">Anime Eyelash Extensions</SelectItem>
                      <SelectItem value="removal">Eyelash Removal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceOptions">Additional Options</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select options (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lash-bath">Lash Bath (+$15)</SelectItem>
                      <SelectItem value="colored-lashes">Colored Lashes (+$25)</SelectItem>
                      <SelectItem value="lash-serum">Lash Growth Serum (+$30)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <CalendarComponent mode="single" className="rounded-md border" />
                </div>
                <div>
                  <h3 className="font-medium mb-3">Available Times</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"].map((time) => (
                      <Button key={time} variant="outline" className="justify-start">
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Your Information</h2>
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <input
                      id="firstName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <input
                      id="lastName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <textarea
                    id="notes"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Any special requests or notes for your appointment"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <RadioGroup defaultValue="card" className="space-y-3">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                    PayPal
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="apple" id="apple" />
                  <Label htmlFor="apple" className="flex-1 cursor-pointer">
                    Apple Pay
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <div className="sticky top-8 border rounded-xl overflow-hidden bg-white">
              <div className="relative h-48">
                <Image
                  src="/eye-2.jpg"
                  alt="Volume Eyelash Extensions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">Volume Eyelash Extensions</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1 mb-4">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Glow Beauty Studio, New York</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>April 15, 2025</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>2:30 PM (120 minutes)</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Service Price</span>
                    <span>$180.00</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax</span>
                    <span>$14.40</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$194.40</span>
                  </div>
                </div>

                <Button className="w-full mt-6">Confirm Booking</Button>

                <p className="text-xs text-gray-500 mt-4">
                  By confirming your booking, you agree to our Terms of Service and Cancellation Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
