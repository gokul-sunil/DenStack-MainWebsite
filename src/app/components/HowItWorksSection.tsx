'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Calendar, Users, BarChart3, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Sign Up & Setup',
    description: 'Create your account in minutes. Our intuitive onboarding guides you through practice setup.',
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Import & Integrate',
    description: 'Seamlessly migrate existing patient data and connect with your favorite tools.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Optimize & Grow',
    description: 'Let AI handle scheduling, reminders, and insights while you focus on patient care.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Scale with Confidence',
    description: 'Expand your practice with enterprise-grade infrastructure that grows with you.',
    icon: Sparkles,
  },
]

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-[#111111] to-[#0a2614] overflow-hidden" style={{ position: 'relative' }}>
      {/* Parallax background decoration */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9FE870]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#9FE870]/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            How it works
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Get started in four simple steps and transform your practice
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12 md:gap-20`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl md:text-7xl text-[#9FE870]/20">
                    {step.number}
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#9FE870]/10 border border-[#9FE870]/20">
                    <step.icon className="w-8 h-8 text-[#9FE870]" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d1f] to-[#123f22] rounded-3xl border border-[#9FE870]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-[#9FE870]/20 rounded-full blur-2xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-[#9FE870]/40" />
                  </div>
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#9FE870]/30 rounded-tl-xl" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#9FE870]/30 rounded-br-xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-neutral-400 mb-6">
            Ready to get started?
          </p>
          <motion.button
            className="px-8 py-4 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}