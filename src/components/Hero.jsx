import { Link } from 'react-router-dom'
import { ArrowRight, Upload } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-offwhite flex items-center overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-pharmagreen opacity-5" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-navy opacity-5" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-pharmagreen text-sm font-semibold tracking-widest uppercase mb-4">
            WHO-GMP Certified Manufacturer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
            Advancing Health. <br />
            <span className="text-pharmagreen">Delivering Trust.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
            Upkar Pharma is a trusted B2B pharmaceutical manufacturer and supplier
            of quality medicines across India — built on science, ethics, and reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-pharmagreen transition-colors duration-200"
            >
              Explore Products <ArrowRight size={18} />
            </Link>

            <a
              href="#"
              className="flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded hover:border-pharmagreen hover:text-pharmagreen transition-colors duration-200"
            >
              <Upload size={18} /> Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Right — Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
            <div className="bg-offwhite rounded-xl p-6 mb-6 text-center">
              <div className="text-5xl mb-2">💊</div>
              <p className="text-navy font-semibold text-lg">500+ Products</p>
              <p className="text-gray-400 text-sm">Across 10+ therapeutic categories</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy text-white rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-xs text-blue-200 mt-1">Years of Trust</p>
              </div>
              <div className="bg-pharmagreen text-white rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-xs text-green-100 mt-1">States Covered</p>
              </div>
              <div className="bg-offwhite rounded-xl p-4 text-center col-span-2">
                <p className="text-navy font-semibold text-sm">WHO-GMP · ISO 9001 · DCGI</p>
                <p className="text-gray-400 text-xs mt-1">Certified & Compliant</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

