import { motion } from 'framer-motion'
import { testimonials } from '../data/products'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="section-padding bg-light-gray">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-4">
            Trusted by <span className="text-accent-orange">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Client testimonials and success stories
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-hover bg-white rounded-lg p-6 shadow-elegant"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-orange text-accent-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

              {/* Company */}
              <div className="font-bold text-dark-blue">{testimonial.company}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white rounded-lg p-6 shadow-elegant">
            <p className="text-gray-600 mb-2">Serving</p>
            <div className="text-3xl font-bold text-accent-orange">500+</div>
            <p className="text-gray-600">Satisfied Clients Worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
