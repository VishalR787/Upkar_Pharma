import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    title: 'Registered Office',
    lines: ['Upkar Pharma Pvt. Ltd.', 'Industrial Area, Phase II', 'New Delhi — 110020, India'],
  },
  {
    icon: <Phone size={22} />,
    title: 'Phone',
    lines: ['+91 12345 67890', '+91 98765 43210'],
  },
  {
    icon: <Mail size={22} />,
    title: 'Email',
    lines: ['enquiry@upkarpharma.com', 'support@upkarpharma.com'],
  },
  {
    icon: <Clock size={22} />,
    title: 'Business Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM IST'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', category: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Contact Us
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Reach out for B2B enquiries, product information,
              or partnership opportunities. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-pharmagreen text-sm font-semibold tracking-widest uppercase">
              Reach Us
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-8">
              We Would Love to Hear From You
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-pharmagreen shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm mb-1">{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-gray-400 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 bg-navy rounded-2xl h-52 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-semibold text-sm">New Delhi, India</p>
                <p className="text-blue-200 text-xs mt-1">Industrial Area, Phase II</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-sm p-8">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={56} className="text-pharmagreen mx-auto mb-4" />
                  <h3 className="text-navy font-bold text-xl mb-2">Enquiry Submitted!</h3>
                  <p className="text-gray-400 text-sm">
                    Thank you for reaching out. Our team will get back
                    to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', category: '', message: '' }) }}
                    className="mt-6 text-pharmagreen text-sm font-semibold hover:underline"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-navy font-bold text-xl mb-6">Send an Enquiry</h3>

                  <div className="space-y-4">
                    {/* Name + Company */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-pharmagreen"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Company *</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-pharmagreen"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-pharmagreen"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-pharmagreen"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1 block">Product Category</label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:border-pharmagreen"
                      >
                        <option value="">Select a category</option>
                        <option>Tablets</option>
                        <option>Capsules</option>
                        <option>Syrups</option>
                        <option>Injections</option>
                        <option>Ointments</option>
                        <option>Nutraceuticals</option>
                        <option>Custom Formulation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1 block">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your requirement..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-pharmagreen resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-navy text-white font-semibold py-3 rounded-lg hover:bg-pharmagreen transition-colors duration-200"
                    >
                      Submit Enquiry
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}