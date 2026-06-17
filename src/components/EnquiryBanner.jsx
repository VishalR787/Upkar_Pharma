import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnquiryBanner() {
  return (
    <section className="bg-pharmagreen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              B2B Enquiries Welcome
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
              Looking for a Reliable <br /> Pharma Partner?
            </h2>
            <p className="text-green-100 text-sm leading-relaxed mb-8 max-w-md">
              Whether you are a distributor, hospital chain, or healthcare provider —
              we are equipped to meet your pharmaceutical supply needs at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded hover:bg-navy hover:text-white transition-colors duration-200"
              >
                <Mail size={18} />
                Send Enquiry
              </Link>

              
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-navy transition-colors duration-200"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold mb-1">📍 Registered Office</p>
              <p className="text-green-100 text-sm">
                Upkar Pharma Pvt. Ltd., Industrial Area, Phase II,{' '}
                New Delhi — 110020, India
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold mb-1">📞 Phone & Email</p>
              <p className="text-green-100 text-sm">+91 12345 67890</p>
              <p className="text-green-100 text-sm">enquiry@upkarpharma.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold mb-1">🕐 Business Hours</p>
              <p className="text-green-100 text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
              <p className="text-green-100 text-sm">Sunday: Closed</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}