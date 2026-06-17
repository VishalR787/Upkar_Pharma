import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
]

const productLinks = ['Tablets', 'Capsules', 'Syrups', 'Injections', 'Ointments', 'Nutraceuticals']

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-gold/10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="mb-5">
            <p className="font-serif text-xl font-semibold text-cream">
              Upkar <span className="text-gold">Pharma</span>
            </p>
            <p className="text-[9px] tracking-[0.3em] uppercase text-cream/30 mt-1">Est. 2004</p>
          </div>
          <div className="h-px w-8 bg-gold/30 mb-5" />
          <p className="text-cream/45 text-sm leading-relaxed mb-6">
            A trusted B2B pharmaceutical manufacturer delivering quality,
            compliance, and reliability across India since 2004.
          </p>
          <a
            href="mailto:enquiry@upkarpharma.com"
            className="inline-flex items-center justify-center w-9 h-9 border border-gold/25 text-gold hover:bg-gold hover:text-deep transition-all duration-300"
          >
            <Mail size={13} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold font-serif mb-4">Quick Links</h4>
          <div className="h-px w-8 bg-gold/25 mb-5" />
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-cream/45 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold font-serif mb-4">Products</h4>
          <div className="h-px w-8 bg-gold/25 mb-5" />
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item}>
                <Link
                  to="/products"
                  className="text-cream/45 text-sm hover:text-gold transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold font-serif mb-4">Contact Us</h4>
          <div className="h-px w-8 bg-gold/25 mb-5" />
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-cream/45 text-sm">
              <MapPin size={13} className="text-gold mt-0.5 shrink-0" />
              Industrial Area, Phase II, New Delhi — 110020, India
            </li>
            <li className="flex items-center gap-3 text-cream/45 text-sm">
              <Phone size={13} className="text-gold shrink-0" />
              +91 12345 67890
            </li>
            <li className="flex items-center gap-3 text-cream/45 text-sm">
              <Mail size={13} className="text-gold shrink-0" />
              enquiry@upkarpharma.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs">
            &copy; {new Date().getFullYear()} Upkar Pharma Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-cream/25 text-xs hover:text-gold transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
