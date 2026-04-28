'use client'

import { motion } from 'motion/react'
import { 
  Stethoscope,
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react'
import { useState } from 'react'
const clinicalWorkflowsImage = '/assets/5b3a5a3bcf8f7b3d1708b53d0b982a2c40045f2f.png'

const features = [
  'Treatment planning with e-signatures',
  'Clinical notes with templates',
  'Digital imaging integrations',
  'HIPAA compliant documentation'
]

// const badges = [
//   { icon: Zap, label: 'Smart Analysis' },
//   { icon: Clock, label: 'Real-time data' },
//   { icon: Brain, label: 'AI-powered' },
//   { icon: Shield, label: 'HIPAA secure' }
// ]

const detailedFeatures = [
  'Treatment Planning with E-signatures',
  'Clinical Notes with Templates',
  'General and Perio Clinical Charting',
  'Digital Imaging Integrations',
  'Electronic Prescriptions',
  'Periodontal Charting',
  'HIPAA Compliant',
  'Always-On Backups'
]

export function ClinicalWorkflowsShowcase() {
  const [activeSlide] = useState(0)
  const totalSlides = 4

  return (
    <section className="relative py-20 bg-white">
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="relative grid lg:grid-cols-[42%_58%] gap-12 items-center">
          
          {/* Left Content */}
          <div className="relative">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-[13px] text-[#64748B]">◀ Platform Features</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-14 h-14 bg-[#3B82F6] rounded-[14px] flex items-center justify-center mb-6 shadow-md"
            >
              <Stethoscope className="w-7 h-7 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[40px] font-bold text-[#0B1220] mb-3 leading-tight"
            >
              Clinical Workflows
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[16px] text-[#6366F1] font-semibold mb-6"
            >
              Streamline your practice
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-md"
            >
              Complete clinical management tools designed for modern dental practices. 
              From treatment planning to prescriptions, everything you need in one place.
            </motion.p>

            {/* Features List */}
            <div className="relative space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[14px] text-[#334155] font-medium leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Progress Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-2 mb-8"
            >
              {[...Array(totalSlides)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeSlide 
                      ? 'w-8 bg-[#3B82F6]' 
                      : 'w-1 bg-[#CBD5E1]'
                  }`}
                />
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              whileHover={{ 
                y: -2,
                boxShadow: '0px 8px 20px rgba(59, 130, 246, 0.25)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-[10px] font-semibold text-[14px] shadow-md hover:bg-[#2563EB] transition-colors"
            >
              Explore Features
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-[24px] border border-[#E5E7EB] shadow-lg overflow-hidden">
                
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#F1F5F9] rounded-[10px] flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-[#94A3B8]" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#94A3B8]">
                      Clinical Workflows
                    </h3>
                  </div>

                  {/* Image with Badges Overlay */}
                  <div className="relative rounded-[16px] overflow-hidden">
                    <img 
                      src={clinicalWorkflowsImage} 
                      alt="Clinical Workflows" 
                      className="w-full h-[320px] object-cover"
                    />
                    
                    {/* Badges Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="bg-[#4CAF50]/95 backdrop-blur-sm rounded-[12px] p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-white" />
                          <span className="text-[12px] font-semibold text-white">
                            Smart Analysis
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-medium">
                            Real-time data
                          </span>
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-medium">
                            AI-powered
                          </span>
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-medium">
                            HIPAA secure
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Features List Below */}
                <div className="relative px-6 pb-6">
                  <div className="bg-[#64748B] rounded-[16px] p-5">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {detailedFeatures.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                          className="flex items-center gap-2"
                        >
                          <ArrowRight className="w-3 h-3 text-white/70 flex-shrink-0" />
                          <span className="text-[11px] text-white font-medium leading-tight">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}