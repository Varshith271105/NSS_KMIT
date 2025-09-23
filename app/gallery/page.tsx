"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "/rakhi.jpg",
    title: "Rakhi for Rakshak Ceremony",
    category: "Social Service",
    event: "rakhi-for-rakshak",
    description: "Volunteers tying rakhis to police officers",
  },
  {
    id: 2,
    src: "/ekta.jpg",
    title: "Unity Day March",
    category: "National Service",
    event: "ekta-divas",
    description: "Students participating in Unity Day celebrations",
  },
  {
    id: 3,
    src: "/plant.jpg",
    title: "Tree Plantation Drive",
    category: "Environment",
    event: "tree-plantation",
    description: "Environmental conservation initiative",
  },
  {
    id: 4,
    src: "/kids.jpg",
    title: "Education Outreach Program",
    category: "Education",
    event: "education-outreach",
    description: "Teaching underprivileged children",
  },
  {
    id: 5,
    src: "/blood.jpg",
    title: "Blood Donor Registration",
    category: "Healthcare",
    event: "blood-donation",
    description: "Volunteers helping with donor registration",
  },
  {
    id: 6,
    src: "/ekta.jpg",
    title: "Unity Pledge Ceremony",
    category: "National Service",
    event: "ekta-divas",
    description: "Students taking the unity pledge",
  },
  {
    id: 6,
    src: "/ekta.jpg",
    title: "Ekta Ceremony",
    category: "National Service",
    event: "ekta-divas",
    description: "Students taking the unity pledge",
  },
  {
    id: 7,
    src: "/unity.jpg",
    title: "Unity Pledge Ceremony",
    category: "National Service",
    event: "Unity-March",
    description: "Volunteers promoting unity",
  }
]

const categories = [
  "All",
  "Social Service",
  "Healthcare",
  "Cultural",
  "National Service",
  "Environment",
  "Education",
  "Community Development",
  "Training",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Capturing Moments of Service, Impact, and Community Engagement
          </p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredItems.length} of {galleryItems.length} images
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="ml-2">
                {selectedCategory}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found matching your criteria.</p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="break-inside-avoid cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-cyan-500 text-white">{item.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <Badge className="mt-2 bg-cyan-500 text-white">{selectedImage.category}</Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
