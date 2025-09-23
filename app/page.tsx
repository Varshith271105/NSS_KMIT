"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, HandHeart, Globe, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const testimonials = [
    {
      image: "/Anandanam-Subramanyam.png",
      quote: `"As the Secretary of Keshav Society, I am deeply proud of our volunteers' unwavering dedication. Their commitment to community service, environmental sustainability, and education initiatives exemplifies the values we hold dear. Our NSS members embody social responsibility, enriching both their personal growth and the communities they serve. Together, we continue to inspire fellow students to make a meaningful impact in society."`,
      name: "Shri. Dr. Annadanam Subramanyam",
      title: "Secretary, Keshav society",
    },
    {
      image: "/deepaganu-mam.png",
      quote: `"As the Academic Director of KMIT, I am immensely proud of our National Service Scheme (NSS) unit. The dedication and commitment shown by our NSS volunteers in various community service activities reflect the core values of our institution. Their involvement in social welfare, environmental sustainability, and education drives has not only benefited the community but also enriched their personal growth. The NSS unit at KMIT is a beacon of social responsibility and continues to inspire students to contribute positively to society."`,
      name: "Mrs. Deepa Ganu Mam",
      title: "Academic Director, KMIT",
    },
    {
      image: "/Malleswari-Mam.jpg",
      quote: `"I extend my heartfelt appreciation to the NSS unit at KMIT for their remarkable contributions to society. The selfless efforts of our NSS volunteers in various community service activities have made a significant difference in the lives of many. Their projects in health, education, and environmental conservation are a testament to their commitment to social welfare. The NSS unit not only enhances the holistic development of our students but also strengthens the bond between the institution and the community. We are proud to support such a noble initiative."`,
      name: "Mrs. Malleswari Mam",
      title: "Principal, KMIT",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/nss-logo-pattern.jpg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Welcome To <span className="text-cyan-400">NSS KMIT</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              "Not Me, But You"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://visionary-blini-14fdb2.netlify.app/" target="_blank">
                Apply as Volunteer
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
            <h3 className="text-3xl font-semibold text-slate-700 mb-6">NSS KMIT: Your Gateway to Service</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              "NSS KMIT is a vibrant community where young, passionate minds come together to grow, learn, and make a
              difference. We focus on blending education with service, empowering you to chase your dreams, develop
              personally and professionally, and create a positive&nbsp;impact."
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-4 mb-6">
              <Users className="w-12 h-12" />
              <HandHeart className="w-12 h-12" />
            </div>
            <p className="text-lg max-w-3xl mx-auto">
              In the NSS KMIT community, leadership and teamwork shine through hands-on collaborative projects. We plan
              and execute initiatives together, honing skills to lead with purpose, support one another, and drive real
              impact for personal growth and community&nbsp;service.
            </p>
            <h4 className="text-xl font-semibold mt-4">Leadership and Teamwork</h4>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">Empowering Lives</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Path to Growth, Impact, and Service</h2>
                <p className="text-gray-600 mb-6">
                  The National Service Scheme (NSS) is a student-run organization focused on fostering personal
                  development through community service, building a strong foundation for gaining enhanced leadership
                  skills.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Personal Growth</span>
                </div>
                <p className="text-gray-600 ml-5">Enhance your leadership, communication, and organizational skills.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Social Impact</span>
                </div>
                <p className="text-gray-600 ml-5">Address social issues and contribute to community development.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Skill Development</span>
                </div>
                <p className="text-gray-600 ml-5">Gain experience in project management, planning, and execution.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Networking</span>
                </div>
                <p className="text-gray-600 ml-5">
                  Connect with like-minded individuals and build lasting relationships.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">You're Next!</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience the Thrill of Community Events</h2>
                <p className="text-gray-600 mb-6">
                  NSS events unlock personal growth, social impact, and lifelong skills for the future. Each experience
                  is a unique opportunity to make a difference and develop leadership skills.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Personal Growth</span>
                </div>
                <p className="text-gray-600 ml-5">Develop confidence, leadership, and communication skills.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Social Impact</span>
                </div>
                <p className="text-gray-600 ml-5">Make a real difference in your community through service.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Build Skills</span>
                </div>
                <p className="text-gray-600 ml-5">Gain practical experience in event management and teamwork.</p>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-700">Expand Network</span>
                </div>
                <p className="text-gray-600 ml-5">Connect with diverse groups and build professional relationships.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Carousel */}
      <section className="relative py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide mb-8">Testimonial</h2>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 text-white rounded-full ml-4"
              onClick={goToPreviousTestimonial}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 text-white rounded-full mr-4"
              onClick={goToNextTestimonial}
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="mb-8 transition-opacity duration-500 ease-in-out">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
              {currentTestimonial.quote}
            </blockquote>
            <cite className="font-semibold">
              {currentTestimonial.name}
              <br />
              <span className="text-cyan-200">{currentTestimonial.title}</span>
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}
