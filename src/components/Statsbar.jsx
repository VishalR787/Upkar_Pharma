import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Products' },
  { value: '30+', label: 'States Covered' },
  { value: 'WHO-GMP', label: 'Certified' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-pharmagreen">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}