'use client'

import { motion } from 'motion/react'
import { Award } from 'lucide-react'

// G2 Award badges data
const awards = [
  { title: 'Leader', season: 'Winter 2026' },
  { title: 'Best Est. ROI', season: 'Winter 2026' },
  { title: 'Easiest To Do Business With', season: 'Winter 2026' },
  { title: 'Users Love Us', season: 'Winter 2026' },
  { title: 'Fastest Implementation', season: 'Winter 2026' },
  { title: 'Best Support', season: 'Winter 2026' }
]

// Award badge cell component
function AwardBadge({ title, season, index }: { title: string, season: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex flex-col items-center justify-center h-full min-h-[160px] bg-white p-6"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3">
        <Award className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold text-neutral-900 mb-1">{title}</div>
        <div className="text-xs text-neutral-500">{season}</div>
      </div>
    </motion.div>
  )
}

export default function G2AwardsSection() {
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
            {/* Badge Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border-2 border-orange-500 mb-2"
            >
              <Award className="w-6 h-6 text-orange-500" strokeWidth={2} />
            </motion.div>

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-neutral-900 leading-tight mb-2">
              Rated #1 for Dental Practice Management in G2
            </h2>

            {/* Supporting Text */}
            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              Recognized as the industry leader by thousands of dental professionals. Our platform delivers unmatched value and experience.
            </p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center justify-center px-6 py-3 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-all duration-300 font-medium text-base w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* RIGHT BADGE GRID (68% width) */}
          <div className="w-full lg:w-[68%] lg:border-l border-[#e5e7eb]">
            {/* 2 Rows × 3 Columns Badge Grid with Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {/* Row 1 */}
              <div className="border-b border-r border-[#e5e7eb]">
                <AwardBadge title={awards[0].title} season={awards[0].season} index={0} />
              </div>
              <div className="border-b sm:border-r border-[#e5e7eb]">
                <AwardBadge title={awards[1].title} season={awards[1].season} index={1} />
              </div>
              <div className="border-b border-r sm:border-r-0 border-[#e5e7eb]">
                <AwardBadge title={awards[2].title} season={awards[2].season} index={2} />
              </div>

              {/* Row 2 */}
              <div className="border-r border-[#e5e7eb]">
                <AwardBadge title={awards[3].title} season={awards[3].season} index={3} />
              </div>
              <div className="sm:border-r border-[#e5e7eb]">
                <AwardBadge title={awards[4].title} season={awards[4].season} index={4} />
              </div>
              <div className="border-r sm:border-r-0 border-[#e5e7eb]">
                <AwardBadge title={awards[5].title} season={awards[5].season} index={5} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}