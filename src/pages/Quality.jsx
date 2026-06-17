import { motion } from 'framer-motion'
import { BadgeCheck, FlaskConical, ClipboardList, ShieldCheck, Microscope, BarChart3 } from 'lucide-react'

const certifications = [
  { name: 'WHO-GMP', desc: 'World Health Organization Good Manufacturing Practice certified facility.' },
  { name: 'ISO 9001:2015', desc: 'International quality management system standard for consistent output.' },
  { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India licensed for nutraceuticals.' },
  { name: 'DCGI Approved', desc: 'All products approved by Drugs Controller General of India.' },
  { name: 'Schedule M', desc: 'Full compliance with Indian GMP under Drugs & Cosmetics Act.' },
  { name: 'CDSCO', desc: 'Registered and audited by Central Drugs Standard Control Organization.' },
]

const processes = [
  { icon: <FlaskConical size={22} />, title: 'Raw Material Testing', desc: 'Every incoming raw material is tested for identity, purity, and potency before use in production.' },
  { icon: <ClipboardList size={22} />, title: 'In-Process Quality Checks', desc: 'Continuous monitoring at each production stage to detect and prevent deviations early.' },
  { icon: <Microscope size={22} />, title: 'Finished Product Testing', desc: 'Every batch undergoes comprehensive testing including dissolution, assay, and microbiological checks.' },
  { icon: <ShieldCheck size={22} />, title: 'Stability Studies', desc: 'Long-term and accelerated stability testing conducted as per ICH guidelines.' },
  { icon: <BarChart3 size={22} />, title: 'Batch Documentation', desc: 'Complete batch manufacturing records maintained for full traceability and regulatory compliance.' },
  { icon: <BadgeCheck size={22} />, title: 'QA Final Release', desc: 'No batch is released without written approval from the Quality Assurance department.' },
]

const stats = [
  { value: '100%', label: 'Batches QA Reviewed' },
  { value: '0', label: 'Regulatory Rejections' },
  { value: '99.8%', label: 'Batch Pass Rate' },
  { value: '15+', label: 'QC Lab Instruments' },
]

export default function Quality() {
  return (
    <div className="pt-16 bg-cream">

      {/* Hero */}
      <section className="bg-deep py-24 relative overflow-hidden">
        <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-gold/20" />
        <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-gold/20" />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-gold/20" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-gold/20" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Our Commitment</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-cream mb-5">
              Quality & Compliance
            </h1>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
              At Upkar Pharma, quality is not a department — it is a
              responsibility shared by every person on the floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-deep border-t border-gold/15 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/15">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center px-6 py-4"
              >
                <p className="font-serif text-3xl font-semibold text-gold">{stat.value}</p>
                <p className="text-cream/45 text-[10px] tracking-[0.2em] uppercase mt-2.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Quality Philosophy</span>
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep mb-5 leading-snug">
              Built Into Every Step,<br />Not Bolted On At The End
            </h2>
            <p className="text-charcoal/65 text-sm leading-relaxed mb-4">
              Our quality management system is integrated into every stage of
              manufacturing — from vendor qualification to final dispatch. We
              believe that quality medicines save lives, and that belief drives
              every decision we make on the production floor.
            </p>
            <p className="text-charcoal/65 text-sm leading-relaxed">
              Our dedicated QA and QC teams work independently to ensure
              objectivity in testing and release decisions. No batch leaves our
              facility without passing every quality parameter defined in its
              product specification.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-deep relative flex items-center justify-center h-72 border border-gold/15"
          >
            <div className="absolute top-5 left-5 w-7 h-7 border-t border-l border-gold/40" />
            <div className="absolute top-5 right-5 w-7 h-7 border-t border-r border-gold/40" />
            <div className="absolute bottom-5 left-5 w-7 h-7 border-b border-l border-gold/40" />
            <div className="absolute bottom-5 right-5 w-7 h-7 border-b border-r border-gold/40" />
            <div className="text-center text-cream relative z-10">
              <p className="font-serif text-xl font-semibold mb-2">QC Laboratory</p>
              <div className="h-px w-12 bg-gold/40 mx-auto my-3" />
              <p className="text-cream/45 text-sm">State-of-the-art testing infrastructure</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">How We Maintain Quality</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep">Our Quality Control Process</h2>
            <p className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              A rigorous multi-stage process ensures every product that
              leaves our facility meets the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {processes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gold/10 p-8 hover:border-gold/35 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center text-gold border border-gold/30 mb-6 group-hover:bg-gold group-hover:text-deep transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-deep font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Accreditations</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep">Certifications We Hold</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-cream border border-gold/10 p-7 hover:border-gold/35 transition-all duration-300"
              >
                <BadgeCheck size={24} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-deep font-semibold text-sm mb-1.5">{cert.name}</h4>
                  <p className="text-charcoal/55 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
