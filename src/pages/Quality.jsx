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
  {
    icon: <FlaskConical size={24} />,
    title: 'Raw Material Testing',
    desc: 'Every incoming raw material is tested for identity, purity, and potency before use in production.',
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'In-Process Quality Checks',
    desc: 'Continuous monitoring at each production stage to detect and prevent deviations early.',
  },
  {
    icon: <Microscope size={24} />,
    title: 'Finished Product Testing',
    desc: 'Every batch undergoes comprehensive testing including dissolution, assay, and microbiological checks.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Stability Studies',
    desc: 'Long-term and accelerated stability testing conducted as per ICH guidelines.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Batch Documentation',
    desc: 'Complete batch manufacturing records maintained for full traceability and regulatory compliance.',
  },
  {
    icon: <BadgeCheck size={24} />,
    title: 'QA Final Release',
    desc: 'No batch is released without written approval from the Quality Assurance department.',
  },
]

const stats = [
  { value: '100%', label: 'Batches QA Reviewed' },
  { value: '0', label: 'Regulatory Rejections' },
  { value: '99.8%', label: 'Batch Pass Rate' },
  { value: '15+', label: 'QC Lab Instruments' },
]

export default function Quality() {
  return (
    <div className="pt-16 bg-offwhite">

      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Our Commitment
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Quality & Compliance
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              At Upkar Pharma, quality is not a department — it is a
              responsibility shared by every person on the floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-pharmagreen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-green-100 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Quality Philosophy
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-5">
              Built Into Every Step, Not Bolted On At The End
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Our quality management system is integrated into every stage of
              manufacturing — from vendor qualification to final dispatch. We
              believe that quality medicines save lives, and that belief drives
              every decision we make on the production floor.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
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
            className="bg-navy rounded-2xl p-8 flex items-center justify-center h-72"
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🔬</div>
              <p className="font-semibold text-lg">QC Laboratory</p>
              <p className="text-blue-200 text-sm mt-2">State-of-the-art testing infrastructure</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              How We Maintain Quality
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3">
              Our Quality Control Process
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              A rigorous multi-stage process ensures every product that
              leaves our facility meets the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {processes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-offwhite flex items-center justify-center text-pharmagreen mb-5">
                  {item.icon}
                </div>
                <h3 className="text-navy font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Accreditations
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3">
              Certifications We Hold
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-offwhite rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <BadgeCheck size={28} className="text-pharmagreen shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-navy font-bold text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}