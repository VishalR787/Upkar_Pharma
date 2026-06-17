import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Package, Leaf, MapPin, FlaskConical } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'GMP Certified',
    desc: 'All our facilities meet WHO-GMP standards ensuring pharmaceutical grade quality at every stage.',
  },
  {
    icon: <Truck size={22} />,
    title: 'Timely Delivery',
    desc: 'Reliable logistics network ensuring on-time dispatch and delivery across 30+ states.',
  },
  {
    icon: <Package size={22} />,
    title: 'Custom Packaging',
    desc: 'Flexible packaging solutions tailored to your branding and regulatory requirements.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Ethical Sourcing',
    desc: 'Raw materials sourced from certified vendors with full traceability and compliance.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Pan-India Reach',
    desc: 'Strong distribution network covering hospitals, distributors and pharmacies nationwide.',
  },
  {
    icon: <FlaskConical size={22} />,
    title: 'R&D Focus',
    desc: 'Continuous investment in research to develop new formulations and improve existing ones.',
  },
]

export default function WhyUs() {
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
            <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Our Strengths</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl font-semibold text-deep">
            Why Partner With Upkar Pharma
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We bring more than just products — we bring reliability, compliance,
            and a partnership built on trust.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-4 p-8 border border-gold/10 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center text-gold border border-gold/30 group-hover:bg-gold group-hover:text-deep transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-deep font-semibold text-lg">{item.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
