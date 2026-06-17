import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Package, Leaf, MapPin, FlaskConical } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'GMP Certified',
    desc: 'All our facilities meet WHO-GMP standards ensuring pharmaceutical grade quality at every stage.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Timely Delivery',
    desc: 'Reliable logistics network ensuring on-time dispatch and delivery across 30+ states.',
  },
  {
    icon: <Package size={28} />,
    title: 'Custom Packaging',
    desc: 'Flexible packaging solutions tailored to your branding and regulatory requirements.',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Ethical Sourcing',
    desc: 'Raw materials sourced from certified vendors with full traceability and compliance.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Pan-India Reach',
    desc: 'Strong distribution network covering hospitals, distributors and pharmacies nationwide.',
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'R&D Focus',
    desc: 'Continuous investment in research to develop new formulations and improve existing ones.',
  },
]

export default function WhyUs() {
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
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
            Why Partner With Upkar Pharma
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            We bring more than just products — we bring reliability, compliance,
            and a partnership built on trust.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-6 rounded-xl border border-gray-100 hover:border-pharmagreen hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-offwhite flex items-center justify-center text-pharmagreen">
                {item.icon}
              </div>
              <h3 className="text-navy font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}