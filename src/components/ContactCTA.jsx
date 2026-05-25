import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding bg-dark-blue text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to <span className="text-accent-orange">Get Started</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Reach out to us today for product inquiries, quotes, or technical support
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-hover bg-white/10 rounded-lg p-6 text-center backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <Phone size={40} className="text-accent-orange" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-300">+91 92652 02308</p>
            <p className="text-gray-400 text-sm">Mon-Sun 9AM-9PM IST</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-hover bg-white/10 rounded-lg p-6 text-center backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <Mail size={40} className="text-accent-orange" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-300">info@marutiplastic.com</p>
            <p className="text-gray-400 text-sm">Response within 24hrs</p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card-hover bg-white/10 rounded-lg p-6 text-center backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <MapPin size={40} className="text-accent-orange" />
            </div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-gray-300 text-sm">Rajpar Road</p>
            <p className="text-gray-400 text-sm">Morbi, India</p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">Send Inquiry</button>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
