import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  'Established manufacturer with 20+ years in pharma',
  'State-of-the-art GMP certified production facility',
  'Ethically sourced raw materials & strict QC process',
  'Serving 500+ B2B clients across India',
]

export default function AboutSnapshot() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-deep w-full h-80 relative flex items-center justify-center overflow-hidden">
            <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-gold/40" />
            <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-gold/40" />
            <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-gold/40" />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-gold/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-deep via-deep to-charcoal/80" />
            <div className="text-center text-cream relative z-10 px-8">
              <p className="font-serif text-2xl font-semibold mb-2">Upkar Pharma</p>
              <div className="h-px w-12 bg-gold/50 mx-auto my-3" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">Manufacturing Facility</p>
              <p className="text-cream/40 text-xs mt-4">Modern · Certified · Reliable</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-gold text-deep px-5 py-3">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold">ISO 9001 Certified</p>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Who We Are</span>
          </div>

          <h2 className="font-serif text-4xl font-semibold text-deep leading-snug mb-5">
            A Legacy of Quality<br />Pharmaceutical Manufacturing
          </h2>

          <p className="text-charcoal/70 leading-relaxed mb-7 text-sm">
            Upkar Pharma has been a cornerstone of India's pharmaceutical supply chain
            for over two decades. We partner with distributors, hospital chains, and
            healthcare providers to deliver consistent, affordable, and high-quality medicines.
          </p>

          <ul className="space-y-3.5 mb-9">
            {highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal/70 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-deep border-b border-gold/50 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            Learn More About Us <ArrowRight size={12} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
