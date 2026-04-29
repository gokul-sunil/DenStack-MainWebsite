'use client'

import { motion } from 'motion/react'
import { Network } from 'lucide-react'

// Integration partners data
const integrations = [
  { name: 'Stripe', color: '#635BFF', position: { x: -120, y: -80 } },
  { name: 'Slack', color: '#E01E5A', position: { x: 120, y: -80 } },
  { name: 'Zapier', color: '#FF4A00', position: { x: -140, y: 40 } },
  { name: 'QuickBooks', color: '#2CA01C', position: { x: 140, y: 40 } },
  { name: 'Mailchimp', color: '#FFE01B', position: { x: -100, y: 120 } },
  { name: 'Dropbox', color: '#0061FF', position: { x: 100, y: 120 } }
]

export default function EcosystemSection() {
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
            {/* Network Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mb-2"
            >
              <Network className="w-6 h-6 text-purple-600" strokeWidth={2} />
            </motion.div>

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-neutral-900 leading-tight mb-2">
              Highly Integrated Ecosystem
            </h2>

            {/* Supporting Text */}
            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              Connect seamlessly with the tools you already use. Our platform integrates with over 100+ applications to streamline your workflow.
            </p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center justify-center px-6 py-3 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-all duration-300 font-medium text-base w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Integrations
            </motion.button>
          </div>

          {/* RIGHT ECOSYSTEM VISUAL (68% width) */}
          <div className="w-full lg:w-[68%] lg:border-l border-[#e5e7eb] p-12 flex items-center justify-center">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Central Platform Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-64 h-64 rounded-3xl bg-gradient-to-br from-[#9FE870] to-[#7bc955] shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f3d1f] mb-2">DenStack</div>
                  <div className="text-sm text-[#0f3d1f]/70">Central Platform</div>
                </div>
              </motion.div>

              {/* Floating Integration Icons */}
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + index * 0.1,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundColor: integration.color,
                    left: `calc(50% + ${integration.position.x}px)`,
                    top: `calc(50% + ${integration.position.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <span className="text-white font-semibold text-xs text-center px-2">
                    {integration.name}
                  </span>
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                {integrations.map((integration, index) => (
                  <line
                    key={`line-${index}`}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${integration.position.x}px)`}
                    y2={`calc(50% + ${integration.position.y}px)`}
                    stroke="#333"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                ))}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}