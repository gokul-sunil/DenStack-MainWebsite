'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function CareStackActionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Transform values based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -20])

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, scale, position: 'relative' }}
      className="relative w-full bg-[#1A3A2E] py-16 md:py-20"
    >
      <motion.div 
        style={{ y }}
        className="max-w-[1200px] mx-auto px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-[32px] md:text-[42px] font-semibold text-white mb-4 leading-tight">
          See DenStack in action
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] md:text-[16px] text-[#A8B8B0] max-w-[600px] mx-auto mb-8 leading-relaxed">
          DenStack's modern User Interface is easy to learn. You can also use our learning center to swiftly onboard new staff.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ 
            y: -2,
            boxShadow: '0px 6px 16px rgba(182, 243, 107, 0.3)',
            transition: { duration: 0.16, ease: 'easeOut' }
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-3 bg-[#B6F36B] text-[#0B1220] rounded-[10px] font-medium text-[15px] transition-colors duration-180 hover:bg-[#A5E25A]"
        >
          Book Free Demo
        </motion.button>
      </motion.div>
    </motion.section>
  )
}