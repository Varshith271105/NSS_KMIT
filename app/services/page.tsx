"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Droplets, Flower2, Calendar, Users, TreePine, BookOpen, Stethoscope } from "lucide-react"

const services = [
  {
    id: "rakhi-for-rakshak",
    title: "Rakhi for Rakshak",
    icon: Heart,
    description: "Celebrating and honoring our protectors with traditional rakhi ceremonies",
    fullDescription:
       "A heartfelt initiative where NSS volunteers tie rakhis to police officers, security personnel, and other society guardians, showing deep gratitude for their dedication.",
    image: "/placeholder.svg?key=rakhi",
    category: "Social Service",
  },
  {
    id: "blood-donation",
    title: "Blood Donation",
    icon: Droplets,
    description: "Life-saving blood donation camps organized regularly",
    fullDescription:
      "Regular blood donation drives conducted in partnership with local hospitals and blood banks to address critical blood shortages and save lives.",
    image: "/placeholder.svg?key=blood",
    category: "Healthcare",
  },
  {
    id: "bathukamma",
    title: "Bathukamma",
    icon: Flower2,
    description: "Celebrating Telangana's vibrant cultural festival",
    fullDescription:
      "Cultural celebration of Bathukamma festival, promoting local traditions and bringing communities together through colorful floral arrangements and festivities.",
    image: "/placeholder.svg?key=bathukamma",
    category: "Cultural",
  },
  {
    id: "ekta-divas",
    title: "Ekta Divas",
    icon: Users,
    description: "Unity Day celebrations promoting national integration",
    fullDescription:
      "Commemorating Sardar Vallabhbhai Patel's birthday with activities that promote unity, integrity, and national integration among diverse communities.",
    image: "/placeholder.svg?key=ekta",
    category: "National Service",
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation",
    icon: TreePine,
    description: "Environmental conservation through green initiatives",
    fullDescription:
      "Large-scale tree plantation drives to combat climate change, improve air quality, and create a greener environment for future generations.",
    image: "/placeholder.svg?key=trees",
    category: "Environment",
  },
  {
    id: "education-outreach",
    title: "Education Outreach",
    icon: BookOpen,
    description: "Teaching and mentoring underprivileged children",
    fullDescription:
      "Educational support programs for underprivileged children including tutoring, career guidance, and skill development workshops.",
    image: "/placeholder.svg?key=education",
    category: "Education",
  },
  {
    id: "health-camps",
    title: "Health Camps",
    icon: Stethoscope,
    description: "Free medical checkups and health awareness programs",
    fullDescription:
      "Comprehensive health camps providing free medical checkups, health screenings, and awareness programs in rural and urban communities.",
    image: "/placeholder.svg?key=health",
    category: "Healthcare",
  },
  {
    id: "community-events",
    title: "Community Events",
    icon: Calendar,
    description: "Various community engagement and development programs",
    fullDescription:
      "Diverse community engagement programs including skill development workshops, awareness campaigns, and social development initiatives.",
    image: "/placeholder.svg?key=community",
    category: "Community Development",
  },
]

export default function ServicesPage() {
  const [flippedCards, setFlippedCards] = useState<string[]>([])

  const toggleFlip = (serviceId: string) => {
    setFlippedCards((prev) => (prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Uplifting Communities with NSS KMIT’s Dedicated Efforts</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At NSS KMIT, we’re committed to uplifting communities through powerful initiatives. 
              From educational drives and health camps to environmental care and social support,
              our dedicated volunteers tirelessly create positive impact for those in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              const isFlipped = flippedCards.includes(service.id)

              return (
                <div key={service.id} className="relative h-80 perspective-1000">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    onClick={() => toggleFlip(service.id)}
                  >
                    {/* Front of card */}
                    <Card className="absolute inset-0 backface-hidden hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="mt-auto">
                          <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Back of card */}
                    <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                          <p className="text-cyan-100 text-sm leading-relaxed mb-4">{service.fullDescription}</p>
                        </div>
                        <div className="mt-auto">
                          <Button
                            asChild
                            variant="secondary"
                            className="w-full bg-white text-cyan-600 hover:bg-gray-100"
                          >
                            <Link href={`/services/${service.id}`}>Learn More</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join our community of dedicated volunteers and help us create positive change in society.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
            <Link href="https://visionary-blini-14fdb2.netlify.app/" target="_blank">
              Become a Volunteer
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
