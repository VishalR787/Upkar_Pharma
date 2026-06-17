import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-cream/98 backdrop-blur-md shadow-sm border-b border-gold/10'
        : 'bg-cream/85 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-wide text-deep">
            Upkar <span className="text-gold">Pharma</span>
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted">Est. 2004</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-[11px] tracking-[0.18em] uppercase font-medium text-charcoal hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block border border-deep text-deep text-[11px] tracking-[0.18em] uppercase font-medium px-5 py-2.5 hover:bg-deep hover:text-cream transition-all duration-300"
        >
          Partner With Us
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-deep" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Gold hairline on scroll */}
      {scrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-gold/10 px-6 pb-6 pt-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[11px] tracking-[0.18em] uppercase font-medium text-charcoal hover:text-gold border-b border-parchment transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-5 border border-deep text-deep text-[11px] tracking-[0.18em] uppercase font-medium px-5 py-3 text-center hover:bg-deep hover:text-cream transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  )
}
