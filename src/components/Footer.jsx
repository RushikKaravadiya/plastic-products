import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-accent-orange rounded-lg flex items-center justify-center">
                  <span className="text-dark-blue font-bold text-lg">MP</span>
                </div>
                <span className="font-bold text-lg">Maruti Plastic Products</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Premium industrial Plastic solutions for over 25 years.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin size={16} className="text-accent-orange" />
                  <span>Rajpar Road, Morbi, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Phone size={16} className="text-accent-orange" />
                  <span>+91 92652 02308</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail size={16} className="text-accent-orange" />
                  <span>info@marutiplastic.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-accent-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-300 hover:text-accent-orange transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-accent-orange transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Product Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm">
                    Oil Sealing Gaskets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm">
                    Water Sealing Gaskets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm">
                    Chemical Resistant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm">
                    Steam System Gaskets
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 rounded-lg overflow-hidden"
            >
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6202652190765!2d72.8479!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb3b6c0001%3A0x2b2d5b9b9b9b9b9b!2sIndustrial%20Park%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </motion.div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p>© {currentYear} Plastic Products Manufacturing. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Privacy Policy
                </a>
                {' | '}
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Terms of Service
                </a>
                {' | '}
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Sitemap
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
