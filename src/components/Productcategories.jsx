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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">What We Manufacture</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-semibold text-deep">Our Product Range</h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From tablets to nutraceuticals — we manufacture across a wide spectrum
            of dosage forms with consistent quality at every step.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-cream border border-gold/10 p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-5">{cat.icon}</div>
              <h3 className="font-serif text-deep font-semibold text-xl mb-2">{cat.name}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-gold group-hover:gap-3 transition-all duration-300"
              >
                View Products <ArrowRight size={12} />
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
            className="inline-flex items-center gap-2 bg-deep text-cream text-[11px] tracking-[0.18em] uppercase font-medium px-9 py-4 hover:bg-gold hover:text-deep transition-all duration-300"
          >
            View All Products <ArrowRight size={13} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
