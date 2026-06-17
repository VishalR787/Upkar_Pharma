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
    <section className="bg-offwhite py-20">
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
            Areas We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
            Therapeutic Areas
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            Our product portfolio spans across major therapeutic categories —
            addressing diverse healthcare needs with precision and care.
          </p>
        </motion.div>

        {/* Pills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-3 shadow-sm hover:border-pharmagreen hover:text-pharmagreen hover:shadow-md transition-all duration-200 cursor-default"
            >
              <span className="text-xl">{area.icon}</span>
              <span className="text-navy text-sm font-medium">{area.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 bg-navy rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-semibold text-lg">
              Don't see your therapeutic area?
            </p>
            <p className="text-blue-200 text-sm mt-1">
              We take on custom manufacturing requests for specialized needs.
            </p>
          </div>
          <a  
            href="/contact"
            className="shrink-0 bg-pharmagreen text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-navy transition-colors duration-200"
          >
            Talk to Us
          </a>
        </motion.div>

      </div>
    </section>
  )
}