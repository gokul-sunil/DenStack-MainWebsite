'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Brain, Gauge, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to optimize scheduling, predict patient needs, and automate routine tasks.',
    stat: '40%',
    statLabel: 'Time Saved'
  },
  {
    icon: Gauge,
    title: 'Real-Time Analytics',
    description: 'Monitor practice performance with live dashboards and comprehensive reporting tools.',
    stat: '99.9%',
    statLabel: 'Accuracy'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'HIPAA-compliant infrastructure with end-to-end encryption and regular security audits.',
    stat: '100%',
    statLabel: 'Compliant'
  },
  {
    icon: Users,
    title: 'Patient Experience',
    description: 'Streamlined appointment booking, automated reminders, and seamless communication.',
    stat: '95%',
    statLabel: 'Satisfaction'
  }
]

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale, position: 'relative' }}
      className="relative py-32 bg-[#111111] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9FE870]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9FE870]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-[#9FE870] to-[#7dd84a] bg-clip-text text-transparent">
              run a modern practice
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow and enhance patient care
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-[#1a1a1a] border border-neutral-800 hover:border-[#9FE870]/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[#9FE870]/10 group-hover:bg-[#9FE870]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#9FE870]" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-neutral-800">
                  <div className="text-3xl text-[#9FE870] mb-1">{feature.stat}</div>
                  <div className="text-sm text-neutral-500">{feature.statLabel}</div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9FE870]/0 to-[#9FE870]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}