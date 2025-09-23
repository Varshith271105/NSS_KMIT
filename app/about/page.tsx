import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Heart, Lightbulb } from "lucide-react"

const executiveBoard = [
  {
    name: "Nithin Chowdary",
    position: "PRESIDENT",
    image: "/President.jpg",
  },
  {
    name: "Nithya Sanjana",
    position: "SECRETARY",
    image: "/secretary.jpg",
  },
  {
    name: "Saanvi",
    position: "VICE-PRESIDENT",
    image: "/vice_president.jpg",
  },
  {
    name: "Hemanth",
    position: "ASSOCIATE-PRESIDENT",
    image: "/associative_president.jpg",
  },
  {
    name: "Ramalaxmi",
    position: "PUBLIC RELATIONS",
    image: "/pr.jpg",
  },
  {
    name: "Rishi",
    position: "HUMAN RESOURCES",
    image: "/hr.jpg",
  },
  {
    name: "Nithya",
    position: "TREASURER",
    image: "/hr.jpg",
  },
  {
    name: "Maanvith",
    position: "DOCUMENTATION HEAD",
    image: "/documentation_head.jpg",
  },
  {
    name: "Anjali",
    position: "PHOTOGRAPHY CONTENT-CREATION",
    image: "/photo_content_head.jpg",
  },
  {
    name: "Sarayu",
    position: "DIGITAL HEAD",
    image: "/digital_head.jpg",
  },
  {
    name: "Sree Harshitha",
    position: "COORDINATOR IN-CHARGE",
    image: "/COORDINATOR IN-CHARGE.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">NSS KMIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empowering Communities Through Service, Leadership, and Social Impact
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-l-4 border-l-cyan-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-cyan-500 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To develop the personality and character of students through voluntary community service. NSS KMIT
                  aims to provide hands-on experience to young students in delivering community service, fostering
                  social responsibility, and creating leaders who can contribute meaningfully to society's development
                  and progress.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-l-4 border-l-emerald-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-emerald-500 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create a generation of socially conscious and responsible citizens who understand the challenges
                  faced by communities and work towards sustainable solutions. We envision a society where young minds
                  actively participate in nation-building through service, innovation, and leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About NSS KMIT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About NSS KMIT</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The National Service Scheme (NSS) at Keshav Memorial Institute of Technology (KMIT) is a vibrant
                student-led organization that has been at the forefront of community service and social development
                since its inception. Our chapter is dedicated to fostering a spirit of service among students while
                providing them with opportunities to contribute meaningfully to society.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through various initiatives ranging from educational programs and health camps to environmental
                conservation and social outreach, our team of dedicated volunteers works tirelessly to bring positive
                change and support to those in need. We believe in the power of collective action and the impact that
                young minds can have when united for a common cause.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join us in our mission to make a difference, develop leadership skills, and create lasting positive
                impact in our communities and beyond.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/executive-board.png"
                alt="NSS KMIT Executive Board 2024-2025"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Service</h3>
                <p className="text-gray-600">
                  Dedicated to serving communities with compassion, integrity, and commitment to making a positive
                  difference in society.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Leadership</h3>
                <p className="text-gray-600">
                  Developing future leaders who can inspire change, guide teams, and create sustainable solutions for
                  community challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Embracing creative approaches and innovative solutions to address social issues and community
                  development challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Executive Board 2024-2025</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated leadership team who guide NSS KMIT's mission and initiatives. Each member brings unique
              skills and passion to drive our community service efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {executiveBoard.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-200 group-hover:border-cyan-400 transition-colors duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-cyan-100">Making a difference, one initiative at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-cyan-100">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-cyan-100">Community Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-cyan-100">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-cyan-100">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
