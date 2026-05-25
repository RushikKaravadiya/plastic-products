import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Introduction = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
              alt="Manufacturing"
              className="w-full rounded-lg shadow-elegant"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6">
              About <span className="text-accent-orange">Plastic Products</span>
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              With over 25 years of industry experience, Plastic Products has established itself as a leading manufacturer of premium industrial gaskets and sealing solutions. Our commitment to excellence and innovation drives us to deliver products that exceed international standards.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              We serve diverse industries including automotive, oil & gas, chemicals, pharmaceuticals, and food processing. Our state-of-the-art manufacturing facilities and skilled workforce ensure consistent quality in every product we deliver.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-orange text-xl">✓</span>
                </div>
                <span className="text-dark-blue font-semibold">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-orange text-xl">✓</span>
                </div>
                <span className="text-dark-blue font-semibold">25+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-orange text-xl">✓</span>
                </div>
                <span className="text-dark-blue font-semibold">Global Distribution Network</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
