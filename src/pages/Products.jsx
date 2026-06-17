import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Injections', 'Ointments', 'Nutraceuticals']

const products = [
  { name: 'Amoxicillin 500mg', category: 'Tablets', therapeutic: 'Anti-infective', packing: '10x10 Alu-Alu', schedule: 'Schedule H' },
  { name: 'Pantoprazole 40mg', category: 'Tablets', therapeutic: 'Gastroenterology', packing: '10x10 Blister', schedule: 'Schedule H' },
  { name: 'Metformin 500mg', category: 'Tablets', therapeutic: 'Diabetology', packing: '10x10 Blister', schedule: 'Schedule H' },
  { name: 'Atorvastatin 10mg', category: 'Tablets', therapeutic: 'Cardiology', packing: '10x10 Blister', schedule: 'Schedule H' },
  { name: 'Omeprazole 20mg', category: 'Capsules', therapeutic: 'Gastroenterology', packing: '10x10 Blister', schedule: 'Schedule H' },
  { name: 'Vitamin D3 60K', category: 'Capsules', therapeutic: 'Nutraceuticals', packing: '4 Caps Strip', schedule: 'OTC' },
  { name: 'Amoxicillin 250mg Syrup', category: 'Syrups', therapeutic: 'Anti-infective', packing: '60ml Bottle', schedule: 'Schedule H' },
  { name: 'Paracetamol Syrup', category: 'Syrups', therapeutic: 'Analgesic', packing: '60ml Bottle', schedule: 'OTC' },
  { name: 'Ondansetron 2mg Syrup', category: 'Syrups', therapeutic: 'Gastroenterology', packing: '30ml Bottle', schedule: 'Schedule H' },
  { name: 'Ceftriaxone 1g Injection', category: 'Injections', therapeutic: 'Anti-infective', packing: 'Vial', schedule: 'Schedule H' },
  { name: 'Pantoprazole Injection', category: 'Injections', therapeutic: 'Gastroenterology', packing: 'Vial', schedule: 'Schedule H' },
  { name: 'Clotrimazole Cream', category: 'Ointments', therapeutic: 'Dermatology', packing: '15g Tube', schedule: 'OTC' },
  { name: 'Betamethasone Cream', category: 'Ointments', therapeutic: 'Dermatology', packing: '10g Tube', schedule: 'Schedule H' },
  { name: 'Omega 3 Fatty Acids', category: 'Nutraceuticals', therapeutic: 'Wellness', packing: '30 Softgels', schedule: 'OTC' },
  { name: 'Multivitamin Tablets', category: 'Nutraceuticals', therapeutic: 'Wellness', packing: '30 Tabs Strip', schedule: 'OTC' },
]

const scheduleStyle = (schedule) =>
  schedule === 'OTC'
    ? 'border border-gold/40 text-gold bg-gold/5'
    : 'border border-charcoal/20 text-charcoal/60 bg-charcoal/5'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.therapeutic.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

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
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Our Portfolio</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-cream mb-5">
              Product Range
            </h1>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our wide range of pharmaceutical products across
              multiple dosage forms and therapeutic categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gold/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-[11px] tracking-[0.12em] uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-deep text-cream'
                    : 'bg-cream text-charcoal/60 hover:text-deep border border-gold/10 hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gold/15 bg-cream focus:outline-none focus:border-gold/40 transition-colors placeholder:text-muted/60"
            />
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-charcoal/50 text-xs tracking-wide mb-8">
            Showing <span className="text-deep font-semibold">{filtered.length}</span> products
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-deep text-xl font-semibold mb-2">No products found</p>
              <p className="text-charcoal/50 text-sm mt-2">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gold/10 p-7 hover:border-gold/35 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-lg">
                      💊
                    </div>
                    <span className={`text-[10px] tracking-[0.1em] uppercase font-medium px-2.5 py-1 ${scheduleStyle(product.schedule)}`}>
                      {product.schedule}
                    </span>
                  </div>
                  <h3 className="font-serif text-deep font-semibold text-base mb-1">{product.name}</h3>
                  <p className="text-gold text-xs tracking-wide mb-4">{product.therapeutic}</p>
                  <div className="border-t border-gold/10 pt-3.5 flex items-center justify-between">
                    <span className="text-charcoal/45 text-xs">{product.category}</span>
                    <span className="text-charcoal/45 text-xs">{product.packing}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-deep py-20 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="h-px w-14 bg-gold/40 mx-auto mb-8" />
          <h3 className="font-serif text-cream text-3xl font-semibold mb-3">
            Need a Custom Formulation?
          </h3>
          <p className="text-cream/50 text-sm max-w-xl mx-auto mb-9 leading-relaxed">
            We offer contract manufacturing and custom formulation services
            tailored to your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block border border-gold text-gold text-[11px] tracking-[0.18em] uppercase font-medium px-9 py-4 hover:bg-gold hover:text-deep transition-all duration-300"
          >
            Send Enquiry
          </a>
          <div className="h-px w-14 bg-gold/40 mx-auto mt-8" />
        </div>
      </section>

    </div>
  )
}
