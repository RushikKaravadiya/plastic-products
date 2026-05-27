// src/components/Introduction.jsx
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CounterCard from './CounterCard'

const Introduction = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    // Niche 'pb-20' (padding-bottom) add kari chhe jethi niche perfect space chhutshe
    <section ref={ref} className="pt-16 pb-20 bg-light-gray overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column: Image and Counter Card */}
          <div className="order-2 md:order-1 flex flex-col gap-6 w-full">
            <motion.div variants={itemVariants} className="w-full">
              <img
                src="/aboutImg.png"
                alt="Maruti Plastic Products"
                className="w-full rounded-2xl shadow-elegant object-cover transform hover:scale-[1.01] transition-transform duration-300"
              />
            </motion.div>
            
            {/* Counter Card */}
            <motion.div variants={itemVariants} className="w-full">
              <CounterCard targetNumber={359} trigger={inView} duration={1400} />
            </motion.div>
          </div>

          {/* Right Column: Premium Text Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6 leading-tight">
              About{' '}
              <span style={{ color: '#366199' }} className="font-extrabold">
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
              {[
                "17+ Years of Industry Experience",
                "ISI Certified Quality Standards",
                "Global Distribution Network"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                       style={{ backgroundColor: 'rgba(54, 97, 153, 0.1)' }}>
                    <span className="text-xl font-bold" style={{ color: '#366199' }}>
                      ✓
                    </span>
                  </div>
                  <span className="text-dark-blue font-semibold text-lg group-hover:translate-x-1 transition-transform duration-200">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction