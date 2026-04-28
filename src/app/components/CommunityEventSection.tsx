'use client'

import { motion } from 'motion/react'
import { Users } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'

export default function CommunityEventSection() {
  return (
    <section className="relative py-24 bg-[#f5f6f7] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden shadow-sm"
        >
          {/* LEFT CONTENT PANEL (32% width) */}
          <div className="w-full lg:w-[32%] p-12 flex flex-col justify-center gap-4">
            {/* Community Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 mb-2"
            >
              <Users className="w-6 h-6 text-blue-600" strokeWidth={2} />
            </motion.div>

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-neutral-900 leading-tight mb-2">
              Deeply Impactful Community
            </h2>

            {/* Supporting Text */}
            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              Join thousands of dental professionals transforming their practices. Network, learn, and grow together at our exclusive events.
            </p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center justify-center px-6 py-3 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-all duration-300 font-medium text-base w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>

          {/* RIGHT EVENT CARD (68% width) */}
          <div className="w-full lg:w-[68%] lg:border-l border-[#e5e7eb] p-8 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Event Image */}
              <div className="relative h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670382417551-d2f1ee29aea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjb25mZXJlbmNlJTIwZXZlbnQlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NzAxMDg5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Inner Circle 2026 Event"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Event Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    INNER CIRCLE 2026
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    Starting at $599
                  </p>
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Grab Early Bird Ticket
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}