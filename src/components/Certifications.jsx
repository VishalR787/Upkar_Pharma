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
    <section className="bg-parchment py-24">
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
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Trust & Compliance</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-semibold text-deep">Certifications & Accreditations</h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
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
              className="bg-white p-5 text-center border border-gold/10 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3"
            >
              <BadgeCheck size={26} className="text-gold" />
              <p className="font-serif text-deep font-semibold text-sm">{cert.name}</p>
              <p className="text-charcoal/50 text-xs leading-snug">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quality Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-deep p-14 text-center relative border border-gold/10"
        >
          <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-gold/30" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-gold/30" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-gold/30" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-gold/30" />

          <div className="h-px w-14 bg-gold/40 mx-auto mb-8" />
          <h3 className="font-serif text-cream text-2xl font-semibold mb-4">
            Quality is Not a Checkbox. It&apos;s Our Culture.
          </h3>
          <p className="text-cream/55 text-sm max-w-2xl mx-auto leading-relaxed">
            Every batch manufactured at Upkar Pharma undergoes rigorous in-process
            and final quality checks. Our dedicated QA team ensures zero compromise
            on safety, efficacy, and compliance — every single time.
          </p>
          <div className="h-px w-14 bg-gold/40 mx-auto mt-8" />
        </motion.div>

      </div>
    </section>
  )
}
