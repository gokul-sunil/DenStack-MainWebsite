'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'

const benefits = [
  'No credit card required',
  'Free 14-day trial',
  'Cancel anytime',
  'Full feature access'
]

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-32 bg-[#111111] overflow-hidden" style={{ position: 'relative' }}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-[#9FE870]/20 to-transparent blur-3xl"
        />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Ready to transform
            <br />
            <span className="bg-gradient-to-r from-[#9FE870] to-[#7dd84a] bg-clip-text text-transparent">
              your practice?
            </span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Join thousands of dental practices already using DenAlign to deliver exceptional patient care
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-neutral-300"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9FE870]/20">
                  <Check className="w-3 h-3 text-[#9FE870]" />
                </div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#9FE870] text-[#0f3d1f] rounded-xl hover:bg-[#8dd75f] transition-all duration-300 shadow-lg shadow-[#9FE870]/30"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(159, 232, 112, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}