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
  { icon: <Target size={20} />, title: 'Our Mission', desc: 'To manufacture and supply high quality affordable medicines that improve lives across India.' },
  { icon: <Eye size={20} />, title: 'Our Vision', desc: 'To be the most trusted pharmaceutical manufacturing partner for B2B healthcare businesses.' },
  { icon: <Heart size={20} />, title: 'Our Values', desc: 'Quality, ethics, transparency and continuous improvement drive every decision we make.' },
]

const team = [
  { name: 'Mr. Alpha', role: 'Founder & Managing Director', exp: '30+ years in pharma' },
  { name: 'Dr. Beta', role: 'Head of Quality Assurance', exp: 'PhD Pharmaceutical Sciences' },
  { name: 'Mr. Gamma', role: 'VP Manufacturing', exp: '20+ years in production' },
  { name: 'Ms. Delta', role: 'Head of Regulatory Affairs', exp: 'DCGI & WHO compliance expert' },
]

export default function About() {
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
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Who We Are</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-cream mb-5">
              About Upkar Pharma
            </h1>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Two decades of pharmaceutical excellence — built on science,
              ethics, and an unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gold/10 p-9 hover:border-gold/35 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center text-gold border border-gold/30 mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-deep text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep mb-5 leading-snug">
              From a Small Unit to a<br />Pan-India Manufacturer
            </h2>
            <p className="text-charcoal/65 text-sm leading-relaxed mb-4">
              Upkar Pharma was founded in 2004 with a single goal — to make quality
              medicines accessible and affordable across India. Starting with a modest
              facility in New Delhi, we have grown into a full-scale pharmaceutical
              manufacturer trusted by 500+ B2B partners nationwide.
            </p>
            <p className="text-charcoal/65 text-sm leading-relaxed mb-7">
              Today our state-of-the-art facility spans multiple production blocks,
              a dedicated R&D wing, and a stringent quality control laboratory —
              all operating under WHO-GMP and ISO 9001 certified processes.
            </p>
            <ul className="space-y-3">
              {['500+ Products across 10 therapeutic areas', 'WHO-GMP & ISO 9001 Certified', 'Pan-India distribution in 30+ states', 'Dedicated QA/QC and R&D teams'].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-charcoal/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
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
            className="bg-deep relative flex items-center justify-center h-80 border border-gold/15"
          >
            <div className="absolute top-5 left-5 w-7 h-7 border-t border-l border-gold/40" />
            <div className="absolute top-5 right-5 w-7 h-7 border-t border-r border-gold/40" />
            <div className="absolute bottom-5 left-5 w-7 h-7 border-b border-l border-gold/40" />
            <div className="absolute bottom-5 right-5 w-7 h-7 border-b border-r border-gold/40" />
            <div className="text-center text-cream relative z-10">
              <p className="font-serif text-xl font-semibold mb-2">Manufacturing Facility</p>
              <div className="h-px w-12 bg-gold/40 mx-auto my-3" />
              <p className="text-cream/50 text-sm">New Delhi, India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Our Journey</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep">20 Years of Growth</h2>
          </motion.div>

          <div className="relative border-l border-gold/30 pl-10 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] w-4 h-4 bg-gold border-4 border-cream" />
                <span className="font-serif text-gold font-semibold text-sm tracking-wider">{item.year}</span>
                <p className="text-charcoal/65 text-sm mt-1.5 leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Leadership</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep">Meet Our Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream border border-gold/10 p-7 text-center hover:border-gold/35 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-deep border border-gold/25 flex items-center justify-center text-gold font-serif text-xl font-semibold mx-auto mb-5">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-serif text-deep font-semibold text-sm">{member.name}</h4>
                <p className="text-gold text-xs mt-1.5 tracking-wide">{member.role}</p>
                <p className="text-charcoal/50 text-xs mt-2">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
