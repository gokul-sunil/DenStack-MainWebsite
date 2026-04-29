'use client'

import { motion } from 'motion/react'
import { Award, Users, Network, MessageSquareQuote, ExternalLink, Box } from 'lucide-react'
const dsoImage = '/assets/366dba66d211bc7c7f5bde2c79258783fb648aad.png';

// G2 Awards Section
function G2AwardsCard() {
  const awards = [
    { label: 'Top 50', subtitle: 'HEALTHCARE\\nSOFTWARE', color: '#FF6B35' },
    { label: 'Best Usability', subtitle: '', color: '#FFB84D' },
    { label: 'Momentum Leader', subtitle: '', color: '#FF6B35' },
    { label: 'Highest User\\nAdoption', subtitle: '', color: '#4A90E2' },
    { label: 'Grid Leader', subtitle: '', color: '#FFB84D' },
    { label: 'Grid Leader', subtitle: 'SMALL BUSINESS', color: '#FF6B35' }
  ]

  return (
    <section className="relative py-2 bg-[#f5f6f7] sticky top-0 z-10" style={{ minHeight: '120vh' }}>
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 sticky top-2"
        style={{
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ 
            duration: 0.62, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[16px] sm:rounded-[20px] border border-[#E5E7EB] overflow-hidden relative"
          style={{ 
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        >
          {/* LEFT CONTENT PANEL - 35% on desktop, full width on mobile */}
          <div 
            className="w-full lg:w-[35%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4 sm:gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #F6F7F4 0%, #FAFBF9 100%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Rated #1 for<br />
              Dental Practice<br />
              Management in G2
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed"
            >
              Top-rated dental software on G2, offering powerful, all-in-one solutions trusted by providers to streamline operations.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                y: -2,
                boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                transition: { duration: 0.16, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-[18px] py-3 bg-[#B6F36B] text-[#0B1220] rounded-[10px] font-medium text-[14px] sm:text-[15px] w-fit transition-colors duration-180 hover:bg-[#A5E25A]"
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* RIGHT BADGE GRID - 65% on desktop, full width on mobile */}
          <div className="w-full lg:w-[65%] bg-[#F2F3F1] p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.28, 
                    delay: index * 0.09,
                    ease: 'easeOut'
                  }}
                  whileHover={{ 
                    scale: 1.025,
                    y: -2,
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                    transition: { duration: 0.18, ease: 'easeOut' }
                  }}
                  className="relative bg-white rounded-[12px] sm:rounded-[14px] border border-[#E5E7EB] min-h-[100px] sm:min-h-[110px] flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer"
                  style={{ boxShadow: '0px 6px 18px rgba(0,0,0,0.05)' }}
                >
                  {/* Badge Header */}
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded bg-red-500 text-white text-[9px] sm:text-[10px] font-medium">
                    <span>G2</span>
                  </div>
                  
                  {/* Award Badge */}
                  <div className="text-center mt-2">
                    <div 
                      className="text-[16px] sm:text-[18px] font-bold text-[#0F172A] leading-tight whitespace-pre-line mb-1"
                    >
                      {award.label}
                    </div>
                    {award.subtitle && (
                      <div className="text-[8px] sm:text-[9px] text-[#64748B] font-medium uppercase whitespace-pre-line">
                        {award.subtitle}
                      </div>
                    )}
                  </div>
                  
                  {/* Badge Shape with Subtle Idle Float */}
                  <motion.div
                    animate={{
                      y: [0, -1, 0]
                    }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.3 + (index * 0.15)
                    }}
                    className="w-8 h-8 mt-2"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)',
                      background: `linear-gradient(135deg, ${award.color} 0%, ${award.color}DD 100%)`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Community Event Section
function CommunityEventCard() {
  return (
    <section className="relative py-2 bg-[#f5f6f7] z-20 sticky top-0" style={{ minHeight: '100vh' }}>
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 sticky top-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ 
            duration: 0.62, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[16px] sm:rounded-[20px] border border-[#E5E7EB] overflow-hidden relative"
          style={{ 
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        >
          {/* LEFT CONTENT PANEL - 35% */}
          <div 
            className="w-full lg:w-[35%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4 sm:gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #F6F7F4 0%, #FAFBF9 100%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Deeply Impactful<br />
              Community
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed"
            >
              Engage with like-minded peers.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                y: -2,
                boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                transition: { duration: 0.16, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-[18px] py-3 bg-[#B6F36B] text-[#0B1220] rounded-[10px] font-medium text-[14px] sm:text-[15px] w-fit transition-colors duration-180 hover:bg-[#A5E25A]"
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* RIGHT EVENT PANEL - 65% */}
          <div className="w-full lg:w-[65%] bg-[#1a1a1a] relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center p-6 sm:p-8"
            >
              {/* Event Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              
              {/* Event Logo/Badge */}
              <div className="relative z-20 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-3 sm:border-4 border-[#B6F36B] flex items-center justify-center">
                    <div className="text-[#B6F36B] text-[10px] sm:text-xs font-bold">2026</div>
                  </div>
                  <div>
                    <div className="text-white text-xl sm:text-3xl font-bold">INNER CIRCLE</div>
                    <div className="text-[#B6F36B] text-[10px] sm:text-sm font-bold tracking-widest">ONEBOLDSTROKE</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-2"
                >
                  <div className="text-white text-2xl sm:text-4xl font-bold">$695.00</div>
                  <div className="text-white/80 text-xs sm:text-sm">Limited Seats Available</div>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0px 6px 20px rgba(182, 243, 107, 0.4)'
                    }}
                    className="mt-4 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-white/10 transition-colors"
                  >
                    Grab Early Bird Ticket
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Ecosystem Section
function EcosystemCard() {
  const integrations = [
    { name: 'Slack', color: '#4A154B', rotation: -15, x: -40, y: -20 },
    { name: 'Figma', color: '#F24E1E', rotation: 10, x: -80, y: 30 },
    { name: 'Notion', color: '#000000', rotation: 5, x: 20, y: -40 },
    { name: 'Stripe', color: '#635BFF', rotation: -8, x: 60, y: 10 },
    { name: 'Gmail', color: '#EA4335', rotation: 12, x: -30, y: 50 },
    { name: 'Zapier', color: '#FF4A00', rotation: -5, x: 80, y: -10 },
    { name: 'Zoom', color: '#2D8CFF', rotation: 8, x: -60, y: -50 },
    { name: 'Asana', color: '#F06A6A', rotation: -12, x: 40, y: 60 },
  ]

  return (
    <section className="relative py-2 bg-[#f5f6f7] z-30 sticky top-0" style={{ minHeight: '100vh' }}>
      <div className="relative max-w-[1200px] mx-auto px-6 sticky top-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[20px] border border-[#E5E7EB] overflow-hidden relative"
          style={{ 
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        >
          {/* LEFT CONTENT PANEL - 35% */}
          <div 
            className="w-full lg:w-[35%] p-10 flex flex-col justify-center gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #F6F7F4 0%, #FAFBF9 100%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <Network className="w-5 h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Highly Integrated<br />
              Ecosystem
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[15px] text-[#64748B] leading-relaxed"
            >
              Connect with all your favourite tools / partners.
            </motion.p>

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

          {/* RIGHT ECOSYSTEM PANEL - 65% */}
          <div className="w-full lg:w-[65%] bg-[#F2F3F1] relative overflow-hidden min-h-[320px] flex items-center justify-center">
            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl flex items-center justify-center z-10"
              style={{ boxShadow: '0px 20px 60px rgba(16, 185, 129, 0.3)' }}
            >
              <div className="text-white text-4xl font-bold">D</div>
            </motion.div>

            {/* Floating Integration Cards */}
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.08,
                  ease: 'easeOut'
                }}
                className="absolute w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                style={{ 
                  left: `calc(50% + ${integration.x}px)`,
                  top: `calc(50% + ${integration.y}px)`,
                  transform: `translate(-50%, -50%) rotate(${integration.rotation}deg)`,
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.1)'
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [integration.rotation, integration.rotation + 2, integration.rotation]
                  }}
                  transition={{
                    y: { duration: 2 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="w-8 h-8 rounded-lg"
                  style={{ backgroundColor: integration.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsCard() {
  const testimonials = [
    {
      quote: "DenStack simplifies our daily operations by enabling efficient multitasking for the entire team.",
      author: "Nathan Suter, DDS",
      title: "Chief Innovation Officer,",
      company: "Enable Dental"
    },
    {
      quote: "DenStack is where all our processes are being brought together in a single system.",
      author: "David Rallis",
      title: "CEO, Paradigm Oral Surgery"
    },
    {
      quote: "We have made 27,000,000+ API calls with DenStack to consolidate data from multiple systems.",
      author: "Tim Hill",
      title: "CEO, Espire Dental"
    }
  ]

  return (
    <section className="relative py-2 bg-[#f5f6f7] z-40 sticky top-0" style={{ minHeight: '100vh' }}>
      <div className="relative max-w-[1200px] mx-auto px-6 sticky top-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[20px] border border-[#E5E7EB] overflow-hidden relative"
          style={{ 
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        >
          {/* LEFT CONTENT PANEL - 35% */}
          <div 
            className="w-full lg:w-[35%] p-10 flex flex-col justify-center gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #F6F7F4 0%, #FAFBF9 100%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <MessageSquareQuote className="w-5 h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Intuitive User<br />
              Experience
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[15px] text-[#64748B] leading-relaxed"
            >
              One platform for smarter multitasking and practice growth.
            </motion.p>

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

          {/* RIGHT TESTIMONIALS PANEL - 65% */}
          <div className="w-full lg:w-[65%] bg-[#F2F3F1] p-6 flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + index * 0.1,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                  transition: { duration: 0.2 }
                }}
                className="flex gap-4 bg-white rounded-[14px] border border-[#E5E7EB] p-4"
                style={{ boxShadow: '0px 6px 18px rgba(0,0,0,0.05)' }}
              >
                {/* Avatar Placeholder */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300" />
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <span className="text-[#CBD5E1] text-4xl leading-none absolute -top-2 -left-1">"</span>
                    <p className="text-[#475569] text-[14px] leading-relaxed pl-5">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="flex-shrink-0 text-right">
                  <div className="text-[13px] font-semibold text-[#0F172A]">
                    {testimonial.author}
                  </div>
                  <div className="text-[11px] text-[#64748B] leading-tight mt-1">
                    {testimonial.title}
                    {testimonial.company && (
                      <>
                        <br />{testimonial.company}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// DSO Section
function DSOCard() {
  return (
    <section className="relative py-2 bg-[#f5f6f7] z-50 sticky top-0" style={{ minHeight: '100vh' }}>
      <div className="relative max-w-[1200px] mx-auto px-6 sticky top-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row bg-[#F6F7F4] rounded-[20px] border border-[#E5E7EB] overflow-hidden relative"
          style={{ 
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        >
          {/* LEFT CONTENT PANEL - 35% */}
          <div 
            className="w-full lg:w-[35%] p-10 flex flex-col justify-center gap-6 relative"
            style={{
              background: 'linear-gradient(135deg, #F6F7F4 0%, #FAFBF9 100%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: '#00000008' }}
            >
              <Box className="w-5 h-5 text-[#0F172A]" strokeWidth={2} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[32px] font-semibold text-[#0F172A] leading-[1.15]"
            >
              Scale your DSO<br />
              with DenStack
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[15px] text-[#64748B] leading-relaxed"
            >
              Ease billing, enhance patient experience, boost practice efficiency, profits.
            </motion.p>

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

          {/* RIGHT DSO LOGOS PANEL - 65% */}
          <div className="w-full lg:w-[65%] bg-white relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full min-h-[320px] flex items-center justify-center p-8"
            >
              <img 
                src={dsoImage} 
                alt="DSO Partners" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Partnered Companies Section
function PartneredCompaniesCard() {
  return (
    <section className="relative py-8 bg-[#f5f6f7]">
      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white rounded-[16px] border border-[#E5E7EB] overflow-hidden px-8 py-5"
          style={{ 
            boxShadow: '0px 4px 12px rgba(0,0,0,0.03)'
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Centered Text */}
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1,
                ease: 'easeOut'
              }}
              className="relative text-[14px] text-[#64748B]"
            >
              Trusted by 3000+ Dental Practices
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Export Component
export function PremiumMarketingSections() {
  return (
    <div className="relative" style={{ position: 'relative' }}>
      <G2AwardsCard />
      <CommunityEventCard />
      <EcosystemCard />
      <TestimonialsCard />
      <DSOCard />
      <PartneredCompaniesCard />
    </div>
  )
}