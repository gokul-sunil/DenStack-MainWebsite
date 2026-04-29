'use client'

import { motion } from 'motion/react'
import { Maximize2 } from 'lucide-react'

// Client logos data
const clients = [
  { name: 'Espire Dental', color: '#00B4D8' },
  { name: 'Paradigm', color: '#D4AF37' },
  { name: 'Image Dental', color: '#0096D6' },
  { name: '1st Family Dental', color: '#0066CC' },
  { name: 'beBright', color: '#8B7AB8' },
  { name: 'Alpha Dental', color: '#4A7BA7' }
]

// Logo grid cell component
function LogoCell({ name, color, index }: { name: string, color: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex items-center justify-center h-full min-h-[140px] bg-white"
    >
      <div 
        className="text-xl font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300" 
        style={{ color }}
      >
        {name}
      </div>
    </motion.div>
  )
}

export default function DSOSection() {
  return (
    <section className="relative py-24 bg-[#f5f6f7] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        {/* Main Container with rounded border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden shadow-sm"
        >
          {/* LEFT CONTENT PANEL (30-35% width) */}
          <div className="w-full lg:w-[35%] p-12 flex flex-col justify-center gap-4">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 mb-2"
            >
              <Maximize2 className="w-6 h-6 text-neutral-700" strokeWidth={2} />
            </motion.div>

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-neutral-900 leading-tight mb-2">
              Scale your DSO
              <br />
              with DenStack
            </h2>

            {/* Supporting Text */}
            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              Ease billing, enhance patient experience, boost practice efficiency, profits.
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

          {/* RIGHT LOGO GRID (65-70% width) */}
          <div className="w-full lg:w-[65%] lg:border-l border-[#e5e7eb]">
            {/* 2 Rows × 3 Columns Grid with Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {/* Row 1 */}
              <div className="border-b border-r border-[#e5e7eb]">
                <LogoCell name={clients[0].name} color={clients[0].color} index={0} />
              </div>
              <div className="border-b sm:border-r border-[#e5e7eb]">
                <LogoCell name={clients[1].name} color={clients[1].color} index={1} />
              </div>
              <div className="border-b border-r sm:border-r-0 border-[#e5e7eb]">
                <LogoCell name={clients[2].name} color={clients[2].color} index={2} />
              </div>

              {/* Row 2 */}
              <div className="border-r border-[#e5e7eb]">
                <LogoCell name={clients[3].name} color={clients[3].color} index={3} />
              </div>
              <div className="sm:border-r border-[#e5e7eb]">
                <LogoCell name={clients[4].name} color={clients[4].color} index={4} />
              </div>
              <div className="border-r sm:border-r-0 border-[#e5e7eb]">
                <LogoCell name={clients[5].name} color={clients[5].color} index={5} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}