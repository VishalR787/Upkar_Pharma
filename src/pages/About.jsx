import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const timeline = [
  { year: '2004', event: 'Upkar Pharma founded in New Delhi with a small manufacturing unit' },
  { year: '2008', event: 'Received WHO-GMP certification and expanded product range to 100+' },
  { year: '2012', event: 'Launched second manufacturing facility with modern automation' },
  { year: '2016', event: 'Crossed 300+ products and expanded to 20+ states across India' },
  { year: '2020', event: 'Obtained ISO 9001 certification and entered nutraceuticals segment' },
  { year: '2024', event: 'Serving 500+ B2B clients with 500+ products across 30+ states' },
]

const values = [
  { icon: <Target size={22} />, title: 'Our Mission', desc: 'To manufacture and supply high quality affordable medicines that improve lives across India.' },
  { icon: <Eye size={22} />, title: 'Our Vision', desc: 'To be the most trusted pharmaceutical manufacturing partner for B2B healthcare businesses.' },
  { icon: <Heart size={22} />, title: 'Our Values', desc: 'Quality, ethics, transparency and continuous improvement drive every decision we make.' },
]

const team = [
  { name: 'Mr. Alpha', role: 'Founder & Managing Director', exp: '30+ years in pharma' },
  { name: 'Dr. Beta', role: 'Head of Quality Assurance', exp: 'PhD Pharmaceutical Sciences' },
  { name: 'Mr. Gamma', role: 'VP Manufacturing', exp: '20+ years in production' },
  { name: 'Ms. Delta', role: 'Head of Regulatory Affairs', exp: 'DCGI & WHO compliance expert' },
]

export default function About() {
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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              About Upkar Pharma
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Two decades of pharmaceutical excellence — built on science,
              ethics, and an unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-offwhite flex items-center justify-center text-pharmagreen mb-5">
                  {item.icon}
                </div>
                <h3 className="text-navy font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-5">
              From a Small Unit to a Pan-India Manufacturer
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Upkar Pharma was founded in 2004 with a single goal — to make quality
              medicines accessible and affordable across India. Starting with a modest
              facility in New Delhi, we have grown into a full-scale pharmaceutical
              manufacturer trusted by 500+ B2B partners nationwide.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Today our state-of-the-art facility spans multiple production blocks,
              a dedicated R&D wing, and a stringent quality control laboratory —
              all operating under WHO-GMP and ISO 9001 certified processes.
            </p>
            <ul className="space-y-3">
              {['500+ Products across 10 therapeutic areas', 'WHO-GMP & ISO 9001 Certified', 'Pan-India distribution in 30+ states', 'Dedicated QA/QC and R&D teams'].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-pharmagreen shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 flex items-center justify-center h-80"
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏭</div>
              <p className="font-semibold text-lg">Manufacturing Facility</p>
              <p className="text-blue-200 text-sm mt-2">New Delhi, India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3">
              20 Years of Growth
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-pharmagreen pl-8 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-11 w-5 h-5 rounded-full bg-pharmagreen border-4 border-white shadow" />
                <span className="text-pharmagreen font-bold text-sm">{item.year}</span>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-offwhite rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-navy font-semibold text-sm">{member.name}</h4>
                <p className="text-pharmagreen text-xs mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}