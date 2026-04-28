'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "DenAlign transformed our practice. We've reduced administrative time by 40% and our patients love the streamlined experience.",
    author: "Dr. Sarah Chen",
    role: "Lead Dentist",
    practice: "Bright Smiles Dental",
    rating: 5
  },
  {
    quote: "The AI-powered scheduling has been a game-changer. We've eliminated double-bookings and optimized our daily workflow.",
    author: "Dr. Michael Rodriguez",
    role: "Practice Owner",
    practice: "Downtown Dental Care",
    rating: 5
  },
  {
    quote: "Best investment we've made. The ROI was evident within the first month, and patient satisfaction scores increased by 35%.",
    author: "Dr. Emily Thompson",
    role: "Managing Partner",
    practice: "Thompson Family Dentistry",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="relative py-32 bg-[#0a2614] overflow-hidden" style={{ position: 'relative' }}>
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9FE870]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9FE870]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Trusted by dental professionals
            <br />
            <span className="bg-gradient-to-r from-[#9FE870] to-[#7dd84a] bg-clip-text text-transparent">
              across the country
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            See what our customers have to say about transforming their practices
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-[#0f3d1f] border border-[#9FE870]/20 hover:border-[#9FE870]/40 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-[#9FE870]/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#9FE870] text-[#9FE870]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-white mb-1">{testimonial.author}</div>
                  <div className="text-sm text-neutral-400">{testimonial.role}</div>
                  <div className="text-sm text-[#9FE870]">{testimonial.practice}</div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9FE870]/0 to-[#9FE870]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-4">
            Join 5,000+ practices already using DenAlign
          </p>
          <motion.button
            className="px-8 py-3 bg-transparent text-[#9FE870] rounded-lg border border-[#9FE870]/30 hover:bg-[#9FE870]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}