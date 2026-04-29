'use client'

import { motion } from 'motion/react'
import { Box } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'

// Testimonials data
const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1674775372064-8c75d3f8c757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAxMDkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'DenStack transformed how we manage our practice. The interface is incredibly intuitive and saves us hours every week.',
    name: 'Dr. Sarah Mitchell',
    role: 'Practice Owner, Denver Dental'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkb2N0b3IlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzAxMDkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Implementation was seamless and the support team is outstanding. Our revenue has increased by 40% since switching.',
    name: 'Dr. Michael Chen',
    role: 'CEO, Bay Area Dental Group'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWx0aGNhcmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAxMDkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The reporting features give us insights we never had before. Making data-driven decisions has never been easier.',
    name: 'Dr. Emily Rodriguez',
    role: 'Director of Operations, Smile Partners'
  }
]

// Testimonial Row Component
function TestimonialRow({ avatar, quote, name, role, index }: { 
  avatar: string, 
  quote: string, 
  name: string, 
  role: string, 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center gap-6 p-6 ${index < testimonials.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#e5e7eb]">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Quote Text */}
      <div className="flex-1">
        <p className="text-base text-neutral-700 leading-relaxed mb-2">
          "{quote}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-neutral-900">{name}</div>
            <div className="text-xs text-neutral-500">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialSection() {
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
            {/* Box Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mb-2"
            >
              <Box className="w-6 h-6 text-green-600" strokeWidth={2} />
            </motion.div>

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-neutral-900 leading-tight mb-2">
              Intuitive User Experience
            </h2>

            {/* Supporting Text */}
            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              Designed with dental professionals in mind. Our platform is built for ease of use, ensuring your team can focus on patient care.
            </p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center justify-center px-6 py-3 bg-[#9FE870] text-[#0f3d1f] rounded-lg hover:bg-[#8dd75f] transition-all duration-300 font-medium text-base w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Reviews
            </motion.button>
          </div>

          {/* RIGHT TESTIMONIAL GRID (68% width) */}
          <div className="w-full lg:w-[68%] lg:border-l border-[#e5e7eb]">
            {testimonials.map((testimonial, index) => (
              <TestimonialRow
                key={index}
                avatar={testimonial.avatar}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}