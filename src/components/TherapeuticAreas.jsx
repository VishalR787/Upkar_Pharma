import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const areas = [
  { icon: '❤️', name: 'Cardiology' },
  { icon: '🧠', name: 'Neurology' },
  { icon: '🫁', name: 'Pulmonology' },
  { icon: '🦴', name: 'Orthopedics' },
  { icon: '🧬', name: 'Oncology' },
  { icon: '👶', name: 'Pediatrics' },
  { icon: '🩺', name: 'Gastroenterology' },
  { icon: '🦷', name: 'Dermatology' },
  { icon: '👁️', name: 'Ophthalmology' },
  { icon: '🩸', name: 'Diabetology' },
  { icon: '🧪', name: 'Gynecology' },
  { icon: '💪', name: 'Nutraceuticals' },
]

export default function TherapeuticAreas() {
  return (
    <section className="bg-cream py-24">
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
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Areas We Serve</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-semibold text-deep">Therapeutic Areas</h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Our product portfolio spans across major therapeutic categories —
            addressing diverse healthcare needs with precision and care.
          </p>
        </motion.div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-center gap-2 bg-white border border-gold/20 px-5 py-3 hover:bg-deep hover:border-deep transition-all duration-300 cursor-default"
            >
              <span className="text-lg">{area.icon}</span>
              <span className="text-charcoal text-sm font-medium tracking-wide group-hover:text-cream transition-colors duration-300">
                {area.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 bg-deep px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold/10"
        >
          <div>
            <p className="font-serif text-cream text-xl font-semibold">
              Don't see your therapeutic area?
            </p>
            <p className="text-cream/50 text-sm mt-2">
              We take on custom manufacturing requests for specialized needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 border border-gold text-gold text-[11px] tracking-[0.18em] uppercase font-medium px-8 py-4 hover:bg-gold hover:text-deep transition-all duration-300"
          >
            Talk to Us
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
