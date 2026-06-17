import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

const certs = [
  { name: 'WHO-GMP', desc: 'World Health Organization Good Manufacturing Practice' },
  { name: 'ISO 9001', desc: 'International Quality Management System Standard' },
  { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
  { name: 'DCGI', desc: 'Drugs Controller General of India Approved' },
  { name: 'Schedule M', desc: 'Indian GMP Compliance under Drugs & Cosmetics Act' },
  { name: 'CDSCO', desc: 'Central Drugs Standard Control Organization' },
]

export default function Certifications() {
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
            Trust & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
            Certifications & Accreditations
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            Our facilities and processes are regularly audited and certified by
            national and international regulatory bodies.
          </p>
        </motion.div>

        {/* Cert Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3"
            >
              <BadgeCheck size={32} className="text-pharmagreen" />
              <p className="text-navy font-bold text-sm">{cert.name}</p>
              <p className="text-gray-400 text-xs leading-snug">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quality Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-navy rounded-2xl p-10 text-center"
        >
          <h3 className="text-white text-2xl font-bold mb-3">
            Quality is Not a Checkbox. It&apos;s Our Culture.
          </h3>
          <p className="text-blue-200 text-sm max-w-2xl mx-auto leading-relaxed">
            Every batch manufactured at Upkar Pharma undergoes rigorous in-process
            and final quality checks. Our dedicated QA team ensures zero compromise
            on safety, efficacy, and compliance — every single time.
          </p>
        </motion.div>

      </div>
    </section>
  )
}