import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/nss_logo.webp" 
                alt="NSS Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
              <span className="font-bold text-xl">NSS KMIT</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              National Service Scheme at KMIT - Empowering communities through service, leadership, and social impact.
              Join us in making a difference.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">KMIT Campus, Hyderabad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">nss@kmit.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 NSS KMIT. All rights reserved. | Empowering Communities Through Service
          </p>
        </div>
      </div>
    </footer>
  )
}
