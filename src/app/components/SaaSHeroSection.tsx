'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

// Floating Card Component
function MetricCard({ 
  icon: Icon, 
  title, 
  metric, 
  delay = 0,
  yOffset = 0 
}: { 
  icon: any
  title: string
  metric: string
  delay?: number
  yOffset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Mid-layer parallax: moves at 0.6x speed
  const y = useTransform(scrollYProgress, [0, 1], [yOffset + 100, yOffset - 100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity, position: 'relative' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-[#9FE870]/20 p-3">
          <Icon className="w-5 h-5 text-[#9FE870]" />
        </div>
        <div>
          <div className="text-sm text-neutral-400 mb-1">{title}</div>
          <div className="text-2xl text-white">{metric}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SaaSHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Background layer: slowest movement (0.4x speed)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0f3d1f]" style={{ position: 'relative' }}>
      {/* Background Gradient Layer - Slowest */}
      <motion.div 
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d1f] via-[#123f22] to-[#0f3d1f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,232,112,0.1),transparent_50%)]" />
        
        {/* Subtle animated orbs */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9FE870]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#9FE870]/8 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Parallax Back Layer - Floating abstract shapes */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        <div className="absolute top-[15%] left-[8%]">
          <MetricCard
            icon={Sparkles}
            title="Practice Growth"
            metric="+145%"
            yOffset={-80}
            delay={0.2}
          />
        </div>
        <div className="absolute top-[55%] right-[10%]">
          <MetricCard
            icon={Zap}
            title="Time Saved"
            metric="12hrs/week"
            yOffset={120}
            delay={0.4}
          />
        </div>
        <div className="absolute bottom-[20%] left-[12%]">
          <MetricCard
            icon={Shield}
            title="Security Score"
            metric="99.9%"
            yOffset={-40}
            delay={0.6}
          />
        </div>
      </div>

      {/* Foreground Content Layer - Fixed speed (1x) */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9FE870]/10 border border-[#9FE870]/20 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#9FE870]" />
              <span className="text-sm text-[#9FE870]">Trusted by 5,000+ dental practices</span>
            </motion.div>

            {/* Hero Heading */}
            <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-[#9FE870] to-[#7dd84a] bg-clip-text text-transparent">
                Dental Practice
              </span>
              <br />
              Management
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Streamline operations, enhance patient experiences, and grow your practice with our enterprise-grade platform powered by AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="group px-8 py-4 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#9FE870]/20"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(159, 232, 112, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#9FE870]" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9FE870]" />
                <span>99.9% Uptime</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9FE870]" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      </div>
    </div>
  )
}