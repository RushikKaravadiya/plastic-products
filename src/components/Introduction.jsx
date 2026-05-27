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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <img
              src="/aboutImg.png"
              alt="Maruti Plastic Products"
              className="w-full rounded-2xl shadow-elegant object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6 leading-tight">
              About{' '}
              <span className="text-accent-orange">
                Maruti Plastic Products
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              With 17+ years of expertise in polymer extrusion, Maruti Plastic
              Products is a trusted manufacturer of premium architectural
              gaskets, sealing profiles, and edge strips based in Morbi,
              Gujarat.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We deliver durable sealing solutions for aluminum windows, glass
              partitions, shower enclosures, and modular furniture using
              high-quality PVC, TPE, and TPV (EPDM) materials for superior
              flexibility, UV resistance, and long-lasting performance.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-orange/15 flex items-center justify-center">
                  <span className="text-accent-orange text-xl font-bold">
                    ✓
                  </span>
                </div>
                <span className="text-dark-blue font-semibold text-lg">
                  17+ Years of Industry Experience
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-orange/15 flex items-center justify-center">
                  <span className="text-accent-orange text-xl font-bold">
                    ✓
                  </span>
                </div>
                <span className="text-dark-blue font-semibold text-lg">
                  ISI Certified Quality Standards
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-orange/15 flex items-center justify-center">
                  <span className="text-accent-orange text-xl font-bold">
                    ✓
                  </span>
                </div>
                <span className="text-dark-blue font-semibold text-lg">
                  Global Distribution Network
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction