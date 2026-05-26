import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
const whatsappLink = 'https://wa.me/919714586233?text=Maruti%20Plastic%20Products!%20How%20can%20we%20help%20you%20today?'
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-4 sm:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-40 hover:shadow-xl"
      title="Chat with us on WhatsApp"
    >
   <img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  alt="WhatsApp"
  className="w-6 h-6"
/>
    </motion.a>
  )
}

export default FloatingWhatsApp
