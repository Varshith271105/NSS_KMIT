import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, MapPin, Clock, Heart } from "lucide-react"

const serviceDetails = {
  "rakhi-for-rakshak": {
    title: "Rakhi for Rakshak",
    description: "Celebrating and honoring our protectors with traditional rakhi ceremonies",
    fullDescription: `The "Rakhi for Rakshak" initiative is one of our most cherished programs where NSS KMIT volunteers express gratitude to the brave men and women who protect our society. This heartwarming event involves tying traditional rakhis to police officers, security personnel, traffic police, and other protectors of our community.

    The program not only honors their service but also strengthens the bond between citizens and those who serve to keep us safe. Through this initiative, we recognize the sacrifices made by our protectors and show our appreciation for their dedication to public safety.

    Our volunteers prepare handmade rakhis and organize ceremonies at police stations, security checkpoints, and public areas. The event is accompanied by cultural performances and refreshments, creating a festive atmosphere that brings joy to both the volunteers and the recipients.`,
    images: ["/placeholder.svg?key=rakhi1", "/placeholder.svg?key=rakhi2", "/placeholder.svg?key=rakhi3"],
    stats: {
      participants: "200+",
      beneficiaries: "500+",
      locations: "15+",
      duration: "1 Day",
    },
    gallery: [
      {
        type: "image",
        src: "/placeholder.svg?key=rakhi-gallery1",
        caption: "Volunteers tying rakhis to police officers",
      },
      {
        type: "image",
        src: "/placeholder.svg?key=rakhi-gallery2",
        caption: "Cultural performances during the ceremony",
      },
      { type: "image", src: "/placeholder.svg?key=rakhi-gallery3", caption: "Group photo with security personnel" },
      { type: "image", src: "/placeholder.svg?key=rakhi-gallery4", caption: "Handmade rakhis prepared by volunteers" },
    ],
  },
  "blood-donation": {
    title: "Blood Donation",
    description: "Life-saving blood donation camps organized regularly",
    fullDescription: `Our Blood Donation drives are among the most impactful initiatives conducted by NSS KMIT. These camps are organized in partnership with local hospitals, blood banks, and medical institutions to address the critical shortage of blood in our healthcare system.

    Every drop of blood donated can save up to three lives, making this initiative one of our most direct contributions to saving lives. Our volunteers work tirelessly to organize these camps, ensuring proper medical supervision, donor safety, and efficient collection processes.

    The camps include pre-donation health checkups, professional blood collection by qualified medical staff, and post-donation care for all donors. We also conduct awareness sessions about the importance of blood donation and maintain a database of regular donors for emergency situations.`,
    images: ["/placeholder.svg?key=blood1", "/placeholder.svg?key=blood2", "/placeholder.svg?key=blood3"],
    stats: {
      participants: "300+",
      beneficiaries: "900+",
      locations: "10+",
      duration: "Quarterly",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=blood-gallery1", caption: "Blood donation camp setup" },
      { type: "image", src: "/placeholder.svg?key=blood-gallery2", caption: "Volunteers assisting donors" },
      {
        type: "image",
        src: "/placeholder.svg?key=blood-gallery3",
        caption: "Medical professionals conducting checkups",
      },
      {
        type: "image",
        src: "/placeholder.svg?key=blood-gallery4",
        caption: "Donors receiving certificates of appreciation",
      },
    ],
  },
  bathukamma: {
    title: "Bathukamma",
    description: "Celebrating Telangana's vibrant cultural festival",
    fullDescription: `Bathukamma is Telangana's vibrant floral festival that celebrates the beauty of nature and the spirit of womanhood. NSS KMIT organizes grand Bathukamma celebrations that bring together students, faculty, and the local community to participate in this colorful cultural extravaganza.

    The festival involves creating beautiful floral arrangements using seasonal flowers, particularly marigolds, and performing traditional folk songs and dances around these arrangements. Our celebration promotes cultural heritage, environmental awareness, and community bonding.

    The event features traditional Bathukamma songs, folk dances, cultural competitions, and a grand procession. We also organize workshops on flower arrangement and educate participants about the ecological significance of the festival, which celebrates the relationship between humans and nature.`,
    images: [
      "/placeholder.svg?key=bathukamma1",
      "/placeholder.svg?key=bathukamma2",
      "/placeholder.svg?key=bathukamma3",
    ],
    stats: {
      participants: "500+",
      beneficiaries: "1000+",
      locations: "5+",
      duration: "3 Days",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=bathukamma-gallery1", caption: "Colorful Bathukamma arrangements" },
      {
        type: "image",
        src: "/placeholder.svg?key=bathukamma-gallery2",
        caption: "Traditional folk dance performances",
      },
      {
        type: "image",
        src: "/placeholder.svg?key=bathukamma-gallery3",
        caption: "Community participation in celebrations",
      },
      { type: "image", src: "/placeholder.svg?key=bathukamma-gallery4", caption: "Cultural competition winners" },
    ],
  },
  "ekta-divas": {
    title: "Ekta Divas",
    description: "Unity Day celebrations promoting national integration",
    fullDescription: `Ekta Divas (Unity Day) is celebrated on October 31st to commemorate the birth anniversary of Sardar Vallabhbhai Patel, the Iron Man of India. NSS KMIT organizes various activities to promote unity, integrity, and national integration among diverse communities.

    The celebration includes the Unity Run, cultural programs showcasing India's diversity, pledge ceremonies, and educational sessions about national heroes. The event emphasizes the importance of unity in diversity and encourages participants to work together for the nation's progress.

    Our volunteers organize inter-community dialogue sessions, cultural exchange programs, and awareness campaigns about national integration. The day concludes with the Unity Pledge, where participants commit to preserving and strengthening the unity and integrity of our nation.`,
    images: ["/placeholder.svg?key=ekta1", "/placeholder.svg?key=ekta2", "/placeholder.svg?key=ekta3"],
    stats: {
      participants: "800+",
      beneficiaries: "2000+",
      locations: "20+",
      duration: "1 Day",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=ekta-gallery1", caption: "Unity Run participants" },
      { type: "image", src: "/placeholder.svg?key=ekta-gallery2", caption: "Cultural diversity showcase" },
      { type: "image", src: "/placeholder.svg?key=ekta-gallery3", caption: "Unity Pledge ceremony" },
      { type: "image", src: "/placeholder.svg?key=ekta-gallery4", caption: "Inter-community dialogue session" },
    ],
  },
  "tree-plantation": {
    title: "Tree Plantation",
    description: "Environmental conservation through green initiatives",
    fullDescription: `Our Tree Plantation drives are comprehensive environmental conservation initiatives aimed at combating climate change, improving air quality, and creating a greener environment for future generations. These drives are conducted throughout the year in various locations including schools, colleges, public parks, and rural areas.

    Each plantation drive is carefully planned with proper species selection based on local climate and soil conditions. We focus on native species that provide maximum environmental benefits and require minimal maintenance. Our volunteers also conduct follow-up visits to ensure proper care and maintenance of planted saplings.

    The initiative includes environmental awareness sessions, workshops on sustainable living, and community engagement programs. We maintain detailed records of survival rates and environmental impact, making our tree plantation drives both effective and sustainable.`,
    images: ["/placeholder.svg?key=trees1", "/placeholder.svg?key=trees2", "/placeholder.svg?key=trees3"],
    stats: {
      participants: "400+",
      beneficiaries: "10000+",
      locations: "25+",
      duration: "Year-round",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=trees-gallery1", caption: "Volunteers planting saplings" },
      { type: "image", src: "/placeholder.svg?key=trees-gallery2", caption: "Community participation in plantation" },
      { type: "image", src: "/placeholder.svg?key=trees-gallery3", caption: "Environmental awareness session" },
      { type: "image", src: "/placeholder.svg?key=trees-gallery4", caption: "Follow-up care of planted trees" },
    ],
  },
  "education-outreach": {
    title: "Education Outreach",
    description: "Teaching and mentoring underprivileged children",
    fullDescription: `Our Education Outreach program is designed to bridge the educational gap for underprivileged children in our community. Through regular tutoring sessions, career guidance, and skill development workshops, we aim to provide quality education and opportunities to those who need it most.

    The program includes after-school tutoring, computer literacy classes, English language training, and career counseling sessions. Our volunteers, who are students themselves, serve as mentors and role models, inspiring young minds to pursue their dreams despite challenges.

    We also organize educational trips, science exhibitions, and cultural programs to provide holistic development opportunities. The program has helped numerous children improve their academic performance and gain confidence in their abilities.`,
    images: ["/placeholder.svg?key=education1", "/placeholder.svg?key=education2", "/placeholder.svg?key=education3"],
    stats: {
      participants: "150+",
      beneficiaries: "500+",
      locations: "12+",
      duration: "Ongoing",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=education-gallery1", caption: "Tutoring session in progress" },
      { type: "image", src: "/placeholder.svg?key=education-gallery2", caption: "Computer literacy training" },
      { type: "image", src: "/placeholder.svg?key=education-gallery3", caption: "Career guidance workshop" },
      { type: "image", src: "/placeholder.svg?key=education-gallery4", caption: "Educational trip to science museum" },
    ],
  },
  "health-camps": {
    title: "Health Camps",
    description: "Free medical checkups and health awareness programs",
    fullDescription: `Our Health Camps provide comprehensive healthcare services to underserved communities, including free medical checkups, health screenings, and awareness programs. These camps are conducted in partnership with qualified medical professionals and healthcare institutions.

    The camps offer services such as general health checkups, blood pressure monitoring, diabetes screening, eye examinations, and dental checkups. We also provide free medicines for common ailments and refer serious cases to appropriate medical facilities.

    Health awareness sessions cover topics like hygiene, nutrition, disease prevention, and healthy lifestyle practices. Our volunteers assist medical professionals and help maintain camp organization, ensuring smooth operations and maximum benefit to attendees.`,
    images: ["/placeholder.svg?key=health1", "/placeholder.svg?key=health2", "/placeholder.svg?key=health3"],
    stats: {
      participants: "100+",
      beneficiaries: "1500+",
      locations: "18+",
      duration: "Monthly",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=health-gallery1", caption: "Free medical checkup in progress" },
      { type: "image", src: "/placeholder.svg?key=health-gallery2", caption: "Health awareness session" },
      { type: "image", src: "/placeholder.svg?key=health-gallery3", caption: "Eye examination camp" },
      { type: "image", src: "/placeholder.svg?key=health-gallery4", caption: "Distribution of free medicines" },
    ],
  },
  "community-events": {
    title: "Community Events",
    description: "Various community engagement and development programs",
    fullDescription: `Our Community Events encompass a wide range of programs designed to engage, educate, and empower local communities. These events include skill development workshops, awareness campaigns, cultural programs, and social development initiatives.

    We organize workshops on various topics such as digital literacy, financial planning, women's empowerment, and entrepreneurship. These programs are designed to provide practical skills and knowledge that can improve the quality of life for community members.

    Cultural events help preserve local traditions while promoting social harmony and community bonding. Our awareness campaigns address important social issues such as cleanliness, road safety, and social justice, creating positive behavioral changes in the community.`,
    images: ["/placeholder.svg?key=community1", "/placeholder.svg?key=community2", "/placeholder.svg?key=community3"],
    stats: {
      participants: "600+",
      beneficiaries: "3000+",
      locations: "30+",
      duration: "Regular",
    },
    gallery: [
      { type: "image", src: "/placeholder.svg?key=community-gallery1", caption: "Skill development workshop" },
      { type: "image", src: "/placeholder.svg?key=community-gallery2", caption: "Cultural program performance" },
      { type: "image", src: "/placeholder.svg?key=community-gallery3", caption: "Awareness campaign rally" },
      { type: "image", src: "/placeholder.svg?key=community-gallery4", caption: "Community interaction session" },
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">{service.fullDescription}</div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Event Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-cyan-500" />
                        <span className="text-gray-600">Participants</span>
                      </div>
                      <span className="font-semibold text-slate-900">{service.stats.participants}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">Beneficiaries</span>
                      </div>
                      <span className="font-semibold text-slate-900">{service.stats.beneficiaries}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Locations</span>
                      </div>
                      <span className="font-semibold text-slate-900">{service.stats.locations}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Duration</span>
                      </div>
                      <span className="font-semibold text-slate-900">{service.stats.duration}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600">
                      <Link href="https://visionary-blini-14fdb2.netlify.app/" target="_blank">
                        Join This Initiative
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Event Gallery</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.caption}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">{item.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Participate?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join us in making a positive impact through {service.title} and other community service initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full"
            >
              <Link href="https://visionary-blini-14fdb2.netlify.app/" target="_blank">
                Become a Volunteer
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg rounded-full bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
