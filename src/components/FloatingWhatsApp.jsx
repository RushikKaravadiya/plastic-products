// src/components/FloatingButtons.jsx

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const FloatingButtons = () => {
  const whatsappLink =
    'https://wa.me/919714586233?text=Maruti%20Plastic%20Products!%20How%20can%20we%20help%20you%20today?'

  const phoneNumber = 'tel:+919714586233'

  return (
    <div className="fixed bottom-8 right-4 sm:right-8 flex flex-col items-center gap-2 z-50">

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={phoneNumber}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#366199] text-white p-4 rounded-full shadow-lg hover:shadow-2xl"
        title="Call Us"
      >
        <FaPhoneAlt className="w-6 h-6" />
      </motion.a>

    </div>
  )
}

export default FloatingButtons