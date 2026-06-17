import { Link } from 'react-router-dom'
import { FlaskConical, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
]

const productLinks = [
  'Tablets', 'Capsules', 'Syrups',
  'Injections', 'Ointments', 'Nutraceuticals'
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={22} className="text-pharmagreen" />
            <span className="font-bold text-lg">
              Upkar <span className="text-pharmagreen">Pharma</span>
            </span>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-6">
            A trusted B2B pharmaceutical manufacturer delivering quality,
            compliance, and reliability across India since 2004.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:enquiry@upkarpharma.com"
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-pharmagreen transition-colors duration-200"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-blue-200 text-sm hover:text-pharmagreen transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Products
          </h4>
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item}>
                <Link
                  to="/products"
                  className="text-blue-200 text-sm hover:text-pharmagreen transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-blue-200 text-sm">
              <MapPin size={16} className="text-pharmagreen mt-0.5 shrink-0" />
              Industrial Area, Phase II, New Delhi — 110020, India
            </li>
            <li className="flex items-center gap-3 text-blue-200 text-sm">
              <Phone size={16} className="text-pharmagreen shrink-0" />
              +91 12345 67890
            </li>
            <li className="flex items-center gap-3 text-blue-200 text-sm">
              <Mail size={16} className="text-pharmagreen shrink-0" />
              enquiry@upkarpharma.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200 text-xs">
            &copy; {new Date().getFullYear()} Upkar Pharma Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200 text-xs hover:text-pharmagreen transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 text-xs hover:text-pharmagreen transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-blue-200 text-xs hover:text-pharmagreen transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}