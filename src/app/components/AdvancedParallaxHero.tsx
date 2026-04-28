'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Shield, Target } from 'lucide-react'

// Design Tokens
const colors = {
  primary900: '#0f3d1f',
  primary800: '#123f22',
  accent500: '#9FE870',
  neutral900: '#111111',
  neutral600: '#6b7280',
  white: '#ffffff'
}

// Floating Card Component with Parallax
function FloatingCard({ 
  icon: Icon, 
  title, 
  description,
  metric,
  delay = 0,
  yOffset = 0,
  xOffset = 0
}: { 
  icon: any
  title: string
  description: string
  metric: string
  delay?: number
  yOffset?: number
  xOffset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Mid-layer parallax: moves at 0.6x speed
  const y = useTransform(scrollYProgress, [0, 1], [yOffset + 150, yOffset - 150])
  const x = useTransform(scrollYProgress, [0, 1], [xOffset, xOffset * 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return (
    <motion.div
      ref={ref}
      style={{ y, x, scale, opacity, rotateZ, position: 'relative' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(159,232,112,0.1)] transition-shadow duration-500">
        {/* Accent gradient overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#9FE870]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="rounded-lg bg-gradient-to-br from-[#9FE870]/20 to-[#9FE870]/5 p-3 backdrop-blur-sm">
              <Icon className="w-6 h-6 text-[#9FE870]" />
            </div>
            <div className="text-3xl text-[#9FE870]">{metric}</div>
          </div>
          
          <h3 className="text-lg text-white mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
        </div>

        {/* Subtle border gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#9FE870]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px', margin: '-1px' }} />
      </div>
    </motion.div>
  )
}

// Abstract Blob Shape for Background Layer
function AbstractBlob({ delay = 0, scale = 1, position }: { delay?: number, scale?: number, position: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.05, 0.1, 0.05],
        scale: [scale * 0.9, scale * 1.1, scale * 0.9],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 12 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={`absolute ${position} blur-3xl`}
      style={{
        background: 'radial-gradient(circle, rgba(159,232,112,0.15) 0%, transparent 70%)',
        width: `${400 * scale}px`,
        height: `${400 * scale}px`,
      }}
    />
  )
}

export default function AdvancedParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Background layer: slowest movement (0.3x speed)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.9, 0.7])

  // Foreground content: slight parallax (0.9x speed)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.primary900, position: 'relative' }}
    >
      {/* Visual separator at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9FE870] to-transparent z-50" />
      
      {/* BACKGROUND GRADIENT LAYER - Slowest (0.3x speed) */}
      <motion.div 
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* Base gradient */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(135deg, ${colors.primary900} 0%, ${colors.primary800} 50%, ${colors.primary900} 100%)`
          }}
        />
        
        {/* Radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,232,112,0.08),transparent_60%)]" />
        
        {/* Abstract blobs */}
        <AbstractBlob position="top-1/4 left-1/4" scale={1.2} delay={0} />
        <AbstractBlob position="top-1/3 right-1/4" scale={1.5} delay={2} />
        <AbstractBlob position="bottom-1/3 left-1/3" scale={1} delay={4} />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />
      </motion.div>

      {/* PARALLAX BACK LAYER - Blurred floating elements (0.5x speed) */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        {/* Left side cards */}
        <div className="absolute top-[20%] left-[5%]">
          <div className="relative">
            <FloatingCard
              icon={TrendingUp}
              title="Revenue Growth"
              description="Average practice revenue increase"
              metric="+145%"
              yOffset={-100}
              xOffset={-30}
              delay={0.2}
            />
          </div>
        </div>
        
        <div className="absolute top-[65%] left-[8%]">
          <div className="relative">
            <FloatingCard
              icon={Users}
              title="Patient Satisfaction"
              description="Patient retention rate improvement"
              metric="98.5%"
              yOffset={80}
              xOffset={20}
              delay={0.6}
            />
          </div>
        </div>

        {/* Right side cards */}
        <div className="absolute top-[35%] right-[6%]">
          <div className="relative">
            <FloatingCard
              icon={Zap}
              title="Time Efficiency"
              description="Administrative time saved per week"
              metric="12hrs"
              yOffset={60}
              xOffset={30}
              delay={0.4}
            />
          </div>
        </div>

        <div className="absolute bottom-[15%] right-[10%]">
          <div className="relative">
            <FloatingCard
              icon={Shield}
              title="Security & Compliance"
              description="HIPAA compliance uptime score"
              metric="99.9%"
              yOffset={-50}
              xOffset={-20}
              delay={0.8}
            />
          </div>
        </div>
      </div>

      {/* PARALLAX MID LAYER - Decorative elements (0.7x speed) */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Grid overlay */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.02, 0])
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} 
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [-20, 20, -20],
              x: [-10, 10, -10]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute w-1 h-1 rounded-full bg-[#9FE870]"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 11}%`,
            }}
          />
        ))}
      </div>

      {/* FOREGROUND CONTENT LAYER - Fixed speed (1x) */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex items-center justify-center min-h-screen px-6"
      >
        <div className="max-w-5xl mx-auto text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9FE870]/10 border border-[#9FE870]/20 mb-8 backdrop-blur-sm"
            >
              <Target className="w-4 h-4 text-[#9FE870]" />
              <span className="text-sm text-[#9FE870] font-medium">Enterprise-Grade Platform</span>
              <Sparkles className="w-4 h-4 text-[#9FE870]" />
            </motion.div>

            {/* Hero headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[1.1] tracking-tight"
            >
              Scale Your Practice
              <br />
              <span 
                className="bg-gradient-to-r from-[#9FE870] via-[#b8f598] to-[#9FE870] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
              >
                With Confidence
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-16 max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.neutral600 }}
            >
              Join 5,000+ dental practices using our AI-powered platform to deliver exceptional patient care, streamline operations, and accelerate growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <motion.button
                className="group relative px-10 py-5 bg-[#9FE870] text-[#0f3d1f] rounded-xl hover:bg-[#8dd75f] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#9FE870]/30 overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 25px 50px rgba(159, 232, 112, 0.4)' 
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative text-lg font-semibold">Start Free Trial</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="px-10 py-5 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-medium">View Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm"
              style={{ color: colors.neutral600 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9FE870]" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9FE870]" />
                <span>14-day free trial</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9FE870]" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent z-30 pointer-events-none" />
    </section>
  )
}