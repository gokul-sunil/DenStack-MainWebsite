'use client';

import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

const benefits = [
  'Free 30-day trial',
  'No credit card required',
  'Full platform access',
  'Dedicated onboarding support',
];

export function FinalCTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Card Container with extra padding for blur effect */}
          <div className="relative px-2 py-8 md:px-4 md:py-12">
            <div className="relative group">
              {/* Animated Gradient Glow Background - positioned behind card */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-blue-600 via-cyan-500 via-purple-500 to-blue-600 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Floating Orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-10 right-10 w-32 h-32 md:w-40 md:h-40 bg-cyan-400/30 rounded-full blur-3xl"
                />
                
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute bottom-10 left-10 w-32 h-32 md:w-40 md:h-40 bg-purple-400/30 rounded-full blur-3xl"
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="inline-flex items-center space-x-2 px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-white font-semibold text-sm">Limited Time Offer</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    Ready to Transform Your Practice?
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
                  >
                    Join 10,000+ dental practices using DenStack to streamline operations and grow revenue
                  </motion.p>

                  {/* Benefits Grid */}
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl"
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                        <span className="text-white font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-2xl shadow-2xl group relative overflow-hidden">
                        <span className="relative z-10 flex items-center font-bold">
                          Book Free Demo
                          <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-7 text-lg rounded-2xl backdrop-blur-sm font-bold transition-all"
                      >
                        View Pricing
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Trust Elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 flex flex-col items-center space-y-4"
                  >
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-blue-100 text-sm">
                      Rated 4.9/5 by 2,500+ dental professionals
                    </p>
                    
                    <p className="text-blue-200 text-sm">
                      Questions? Call us at{' '}
                      <a href="tel:1-800-DENTCARE" className="underline hover:text-white transition-colors font-semibold">
                        1-800-DENTCARE
                      </a>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-blue-200/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-cyan-200/20 rounded-full" />
    </section>
  );
}
