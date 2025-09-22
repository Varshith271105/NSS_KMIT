import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Heart, Users, Phone, Clock, MapPin } from "lucide-react"

export default function BloodCommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Droplets className="w-20 h-20 mx-auto mb-6 text-red-200" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blood <span className="text-red-200">Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Connecting Life Savers with Life Seekers - Every Drop Counts
          </p>
          <div className="w-24 h-1 bg-red-300 mx-auto"></div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Donate Blood */}
            <Card className="border-l-4 border-l-red-500 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Donate Blood</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Join our community of life savers. Register as a blood donor and help save lives in your community.
                  Your donation can save up to 3 lives.
                </p>
                <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white w-full">
                  <Link href="/blood-community/donor-form">Register as Donor</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Request Blood */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Request Blood</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  In urgent need of blood? Submit a request and we'll connect you with compatible donors in your area as
                  quickly as possible.
                </p>
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  <Link href="/blood-community/request-form">Request Blood</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Register</h3>
              <p className="text-gray-600">
                Fill out the donor registration form with your details and blood type information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Get Matched</h3>
              <p className="text-gray-600">
                We match blood requests with compatible donors based on blood type and location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Save Lives</h3>
              <p className="text-gray-600">Connect with recipients and donate blood to save lives in your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Blood Donation Facts</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <p className="text-gray-600">Lives saved per donation</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-red-600 mb-2">56</div>
                <p className="text-gray-600">Days between donations</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-red-600 mb-2">10</div>
                <p className="text-gray-600">Minutes to donate</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-red-600 mb-2">120</div>
                <p className="text-gray-600">Days blood can be stored</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Emergency Blood Request</h2>
          <p className="text-lg text-gray-600 mb-8">
            For urgent blood requirements, contact us directly for immediate assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-red-600" />
              <span className="font-semibold">+91 9876543210</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="font-semibold">Hyderabad</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
