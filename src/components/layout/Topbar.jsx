import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react' // Lucide icons

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r bg-blue-800 text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Left side - can add content here if needed */}
          </div>

          <div className="flex items-center space-x-6">
            {/* Contact Link */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="text-white hover:text-cyan-200 transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <Link
                href="mailto:info@skilledwriting.co.uk"
                className="text-white hover:text-cyan-200 transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10"
                title="Email us"
              >
                <Mail className="w-4 h-4" />
              </Link>

              <Link
                href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                className="text-white hover:text-cyan-200 transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10"
                title="Call us"
              >
                <Phone className="w-4 h-4" />
              </Link>

              <Link
                href="https://wa.me/+447471095853?text=Referral%20link%20website%3A%20www.skilledWritings.org"
                className="text-white hover:text-green-300 transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10"
                title="WhatsApp us"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
