import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  { icon: '💊', name: 'Tablets', desc: 'Oral solid dosage forms across therapeutic areas' },
  { icon: '💉', name: 'Injections', desc: 'Sterile injectables manufactured under strict conditions' },
  { icon: '🧴', name: 'Syrups', desc: 'Liquid formulations for pediatric and adult use' },
  { icon: '🧪', name: 'Capsules', desc: 'Hard and soft gel capsules for varied applications' },
  { icon: '🩹', name: 'Ointments', desc: 'Topical preparations for dermatological treatments' },
  { icon: '🌿', name: 'Nutraceuticals', desc: 'Health supplements and wellness formulations' },
]

export default function ProductCategories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
            What We Manufacture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
            Our Product Range
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            From tablets to nutraceuticals — we manufacture across a wide spectrum
            of dosage forms with consistent quality at every step.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-offwhite rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-navy font-semibold text-lg mb-2">{cat.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{cat.desc}</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-1 text-pharmagreen text-sm font-medium group-hover:gap-2 transition-all"
              >
                View Product <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-pharmagreen transition-colors duration-200"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}