import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  'Established manufacturer with 20+ years in pharma',
  'State-of-the-art GMP certified production facility',
  'Ethically sourced raw materials & strict QC process',
  'Serving 500+ B2B clients across India',
]

export default function AboutSnapshot() {
  return (
    <section className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-navy rounded-2xl w-full h-80 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <div className="text-6xl mb-4">🏭</div>
              <p className="text-xl font-semibold">Upkar Pharma Facility</p>
              <p className="text-blue-200 text-sm mt-2">Modern. Certified. Reliable.</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-pharmagreen text-white rounded-xl px-5 py-3 shadow-lg">
            <p className="text-sm font-semibold">ISO 9001 Certified</p>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-5 leading-snug">
            A Legacy of Quality <br /> Pharmaceutical Manufacturing
          </h2>

          <p className="text-gray-500 leading-relaxed mb-6">
            Upkar Pharma has been a cornerstone of India's pharmaceutical supply chain
            for over two decades. We partner with distributors, hospital chains, and
            healthcare providers to deliver consistent, affordable, and high-quality medicines.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                <CheckCircle size={18} className="text-pharmagreen mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-pharmagreen transition-colors"
          >
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}