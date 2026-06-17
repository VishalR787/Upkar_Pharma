import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Products Manufactured' },
  { value: '30+', label: 'States Covered' },
  { value: 'WHO-GMP', label: 'Certified Facility' },
]

export default function StatsBar() {
  return (
    <section className="bg-deep py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/15">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center px-6 py-4"
            >
              <p className="font-serif text-3xl font-semibold text-gold">{stat.value}</p>
              <p className="text-cream/50 text-[10px] tracking-[0.2em] uppercase mt-2.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
