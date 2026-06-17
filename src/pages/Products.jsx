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

const scheduleColor = (schedule) =>
  schedule === 'OTC'
    ? 'bg-green-100 text-green-700'
    : 'bg-orange-100 text-orange-700'

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Product Range
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our wide range of pharmaceutical products across
              multiple dosage forms and therapeutic categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-offwhite text-gray-500 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-pharmagreen"
            />
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Count */}
          <p className="text-gray-400 text-sm mb-8">
            Showing <span className="text-navy font-semibold">{filtered.length}</span> products
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-navy font-semibold text-lg">No products found</p>
              <p className="text-gray-400 text-sm mt-2">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-offwhite flex items-center justify-center text-xl">
                      💊
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${scheduleColor(product.schedule)}`}>
                      {product.schedule}
                    </span>
                  </div>
                  <h3 className="text-navy font-semibold text-base mb-1">{product.name}</h3>
                  <p className="text-pharmagreen text-xs font-medium mb-3">{product.therapeutic}</p>
                  <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{product.category}</span>
                    <span className="text-gray-400 text-xs">{product.packing}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">
            Need a Custom Formulation?
          </h3>
          <p className="text-blue-200 text-sm max-w-xl mx-auto mb-8">
            We offer contract manufacturing and custom formulation services
            tailored to your specific requirements.
          </p>
          
          
          <a
            href="/contact"
            className="inline-block bg-pharmagreen text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-navy transition-colors duration-200"
          >
            Send Enquiry
          </a>
        </div>
      </section>

    </div>
  )
}