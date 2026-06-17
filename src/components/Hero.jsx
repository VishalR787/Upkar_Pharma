import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex items-center overflow-hidden">

      {/* Background tonal gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-parchment/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Vertical gold accent line */}
      <div className="absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">
              WHO-GMP Certified Manufacturer
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-deep leading-[1.1] mb-6">
            Advancing Health.<br />
            <em className="text-gold not-italic">Delivering Trust.</em>
          </h1>

          <p className="text-charcoal/70 text-base leading-relaxed mb-10 max-w-md">
            Upkar Pharma is a trusted B2B pharmaceutical manufacturer and supplier
            of quality medicines across India — built on science, ethics, and reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="flex items-center gap-2 bg-deep text-cream text-[11px] tracking-[0.18em] uppercase font-medium px-7 py-4 hover:bg-gold hover:text-deep transition-all duration-300"
            >
              Explore Products <ArrowRight size={13} />
            </Link>
            <a
              href="#"
              className="flex items-center gap-2 border border-deep text-deep text-[11px] tracking-[0.18em] uppercase font-medium px-7 py-4 hover:bg-deep hover:text-cream transition-all duration-300"
            >
              <Download size={13} /> Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Right — Credential Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden md:block"
        >
          <div className="relative bg-deep p-10 border border-gold/20">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-gold/40" />
            <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-gold/40" />
            <div className="absolute bottom-4 left-4 w-7 h-7 border-b border-l border-gold/40" />
            <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-gold/40" />

            <div className="text-center mb-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-serif mb-3">Portfolio Overview</p>
              <p className="font-serif text-5xl font-semibold text-cream">500+</p>
              <p className="text-cream/50 text-sm mt-2">Products across 10+ therapeutic areas</p>
            </div>

            <div className="border-t border-gold/20 pt-7 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-serif text-2xl font-semibold text-gold">20+</p>
                <p className="text-cream/50 text-xs mt-1.5 tracking-wider uppercase">Years</p>
              </div>
              <div className="text-center border-x border-gold/20">
                <p className="font-serif text-2xl font-semibold text-gold">30+</p>
                <p className="text-cream/50 text-xs mt-1.5 tracking-wider uppercase">States</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl font-semibold text-gold">500+</p>
                <p className="text-cream/50 text-xs mt-1.5 tracking-wider uppercase">Clients</p>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-gold/20 text-center">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-serif">
                WHO-GMP · ISO 9001 · DCGI
              </p>
              <p className="text-cream/40 text-xs mt-1.5">Certified & Compliant</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
