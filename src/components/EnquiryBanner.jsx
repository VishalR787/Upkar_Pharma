import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnquiryBanner() {
  return (
    <section className="bg-deep py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">
                B2B Enquiries Welcome
              </span>
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream leading-snug mb-5">
              Looking for a Reliable<br />Pharma Partner?
            </h2>
            <p className="text-cream/55 text-sm leading-relaxed mb-10 max-w-md">
              Whether you are a distributor, hospital chain, or healthcare provider —
              we are equipped to meet your pharmaceutical supply needs at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-deep text-[11px] tracking-[0.18em] uppercase font-semibold px-7 py-4 hover:bg-cream transition-all duration-300"
              >
                <Mail size={13} /> Send Enquiry
              </Link>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 border border-cream/25 text-cream text-[11px] tracking-[0.18em] uppercase font-medium px-7 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone size={13} /> Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { label: 'Registered Office', content: 'Upkar Pharma Pvt. Ltd., Industrial Area, Phase II, New Delhi — 110020, India' },
              { label: 'Phone & Email', content: '+91 12345 67890 · enquiry@upkarpharma.com' },
              { label: 'Business Hours', content: 'Monday – Saturday: 9:00 AM – 6:00 PM IST' },
            ].map((item, i) => (
              <div key={i} className="border border-gold/20 p-6 hover:border-gold/40 transition-colors duration-300">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-serif mb-2">{item.label}</p>
                <p className="text-cream/60 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
