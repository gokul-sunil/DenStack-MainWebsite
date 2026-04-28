'use client'

import { motion } from 'motion/react'
import { Sparkles, Award, Users, TrendingUp, Shield, Zap } from 'lucide-react'

// Badge data with icons
const badges = [
  { icon: Award, label: 'Industry Leader', color: '#FF6B6B' },
  { icon: Users, label: '10,000+ Users', color: '#4ECDC4' },
  { icon: TrendingUp, label: '40% Growth', color: '#45B7D1' },
  { icon: Shield, label: 'Enterprise Security', color: '#96CEB4' },
  { icon: Zap, label: 'Lightning Fast', color: '#FFEAA7' },
  { icon: Sparkles, label: 'AI Powered', color: '#DDA0DD' }
]

// Individual Badge Component
function BadgeCard({ icon: Icon, label, color, index }: { 
  icon: any, 
  label: string, 
  color: string, 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1] // Custom ease-out curve
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      className="relative bg-white rounded-[14px] border border-[#E5E7EB] min-h-[110px] flex flex-col items-center justify-center p-6 cursor-pointer"
      style={{
        boxShadow: '0px 6px 18px rgba(0,0,0,0.05)'
      }}
    >
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
        style={{ 
          backgroundColor: `${color}20`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={2} />
      </div>
      
      {/* Label */}
      <div className="text-center text-sm font-medium text-[#0F172A]">
        {label}
      </div>
    </motion.div>
  )
}

export default function PremiumMarketingCard() {
  return (
    <section className="relative py-24 bg-[#f5f6f7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Debug text - remove after confirming it works */}
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-red-600">PREMIUM MARKETING CARD SECTION</p>
        </div>
        
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[20px] border border-[#E5E7EB] overflow-hidden"
          style={{
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)'
          }}
        >
          {/* LEFT CONTENT PANEL - 35% */}
          <div className="w-full lg:w-[35%] p-10 flex flex-col justify-center gap-6">
            {/* Icon Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <Sparkles className="w-5 h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Transform Your
              <br />
              Practice Today
            </motion.h2>

            {/* Body Text */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[15px] text-[#64748B] leading-relaxed"
            >
              Join thousands of dental professionals who have revolutionized their practice management with our award-winning platform.
            </motion.p>

            {/* Primary CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                y: -2,
                boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                transition: { duration: 0.18, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-[18px] py-3 bg-[#B6F36B] text-[#0B1220] rounded-[10px] font-medium text-[15px] w-fit transition-colors duration-180 hover:bg-[#A5E25A]"
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* RIGHT BADGE GRID - 65% */}
          <div className="w-full lg:w-[65%] bg-[#F2F3F1] p-6">
            {/* 3 Columns × 2 Rows Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <BadgeCard
                  key={index}
                  icon={badge.icon}
                  label={badge.label}
                  color={badge.color}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}