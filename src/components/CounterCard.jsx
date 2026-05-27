// src/components/CounterCard.jsx
import React, { useState, useEffect } from 'react'

const CounterCard = ({ targetNumber, duration = 1500, trigger }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) {
      setCount(0)
      return
    }

    let start = 0
    const end = parseInt(targetNumber)
    if (start === end) return

    const totalSteps = end - start
    const stepTime = Math.max(Math.floor(duration / totalSteps), 6)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [targetNumber, duration, trigger])

  return (
    // Card ni max-width ane padding naani kari didhi chhe
    <div className="bg-white rounded-xl p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center max-w-[280px] w-full mx-auto text-center transition-all duration-500 hover:shadow-[0_12px_30px_rgba(54,97,153,0.08)]">
      <span className="text-gray-400 font-medium tracking-wider text-xs uppercase mb-0.5">
        Serving
      </span>
        <h3 
        className="text-4xl sm:text-5xl font-extrabold flex items-center justify-center tracking-tight mb-1 select-none"
        style={{ color: '#366199' }}
      >
        {count}+
      </h3>
      
      {/* Text size nani kari didhi chhe */}
      <p className="text-gray-600 font-semibold text-sm sm:text-base tracking-normal">
        Satisfied Clients Worldwide
      </p>
    </div>
  )
}

export default CounterCard