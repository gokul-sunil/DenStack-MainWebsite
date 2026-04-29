'use client';

import { motion } from 'motion/react';

export function WhoWeServeDetailSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#f5f6f7]">
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side - Title and CTA */}
          <div className="py-4">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-8"
            >
              REVIEWS
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10"
            >
              See What Our Customers Have to Say!
            </motion.h2>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-280"
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-center py-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              DenStack is grateful to work with an amazing community of dentists from all across the country, and nothing makes us happier than hearing from these satisfied customers! Many have been kind enough to share their experiences, so discover what they are saying about DenStack, then contact us to find out for yourself. We're confident you'll see the DenStack difference!
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
