import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: <MapPin size={18} />, title: 'Registered Office', lines: ['Upkar Pharma Pvt. Ltd.', 'Industrial Area, Phase II', 'New Delhi — 110020, India'] },
  { icon: <Phone size={18} />, title: 'Phone', lines: ['+91 12345 67890', '+91 98765 43210'] },
  { icon: <Mail size={18} />, title: 'Email', lines: ['enquiry@upkarpharma.com', 'support@upkarpharma.com'] },
  { icon: <Clock size={18} />, title: 'Business Hours', lines: ['Monday – Saturday', '9:00 AM – 6:00 PM IST'] },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputClass = "w-full border border-gold/15 bg-cream px-4 py-3 text-sm text-deep focus:outline-none focus:border-gold/50 transition-colors placeholder:text-muted/50"
  const labelClass = "text-[10px] tracking-[0.2em] uppercase text-charcoal/60 mb-1.5 block font-medium"

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
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Get In Touch</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-cream mb-5">Contact Us</h1>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Reach out for B2B enquiries, product information,
              or partnership opportunities. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-serif text-gold">Reach Us</span>
            </div>
            <h2 className="font-serif text-4xl font-semibold text-deep mb-9 leading-snug">
              We Would Love to<br />Hear From You
            </h2>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/25 flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 mb-1.5 font-medium">{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-charcoal/70 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-deep relative h-52 flex items-center justify-center border border-gold/15">
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/35" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/35" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/35" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/35" />
              <div className="text-center text-cream">
                <p className="font-serif font-semibold mb-2">New Delhi, India</p>
                <div className="h-px w-10 bg-gold/40 mx-auto my-2" />
                <p className="text-cream/45 text-xs">Industrial Area, Phase II</p>
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
            <div className="bg-white border border-gold/10 p-9">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-deep text-xl font-semibold mb-2">Enquiry Submitted</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed mb-6">
                    Thank you for reaching out. Our team will get back
                    to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', category: '', message: '' }) }}
                    className="text-[11px] tracking-[0.18em] uppercase text-gold font-medium border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-px w-8 bg-gold" />
                    <h3 className="font-serif text-deep text-lg font-semibold">Send an Enquiry</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company *</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Product Category</label>
                      <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
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

                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your requirement..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-deep text-cream text-[11px] tracking-[0.2em] uppercase font-medium py-4 hover:bg-gold hover:text-deep transition-all duration-300"
                    >
                      Submit Enquiry
                    </button>

                    <p className="text-charcoal/40 text-xs text-center">
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
