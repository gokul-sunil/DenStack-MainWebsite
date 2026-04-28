'use client'

import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight, Star, Phone } from 'lucide-react'

const features = [
  'Free 30-day trial',
  'No credit card required',
  'Full platform access',
  'Dedicated onboarding support'
]

export default function FinalCTASection() {
  return (
    <section className="relative py-24 bg-[#f5f6f7] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-br from-[#4F46E5] via-[#5B52ED] to-[#6366F1] p-12 md:p-16 shadow-2xl overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Feature Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              {/* Primary CTA */}
              <motion.button
                className="group relative px-8 py-4 bg-white text-[#4F46E5] rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 shadow-lg min-w-[200px] justify-center font-semibold text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="px-8 py-4 bg-white/10 text-white rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-w-[200px] font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Video
              </motion.button>
            </motion.div>

            {/* Rating Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <p className="text-white/90 text-lg font-medium mb-4">
                Rated 4.9/5 by 2,500+ dental professionals
              </p>

              {/* Contact Info */}
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">
                  Questions? Call us at{' '}
                  <a 
                    href="tel:1-800-DENTCARE" 
                    className="underline hover:text-white transition-colors font-medium"
                  >
                    1-800-DENTCARE
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}