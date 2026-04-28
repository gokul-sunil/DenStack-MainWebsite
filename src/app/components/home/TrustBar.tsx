'use client';

import { Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const metrics = [
  { icon: Users, value: '10,000+', label: 'Dental Practices', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, value: '35%', label: 'Revenue Growth', color: 'from-green-500 to-emerald-500' },
  { icon: Award, value: '4.9/5', label: 'Customer Rating', color: 'from-amber-500 to-orange-500' },
];

export function TrustBar() {
  return (
    <section className="py-12 sm:py-16 bg-transparent relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Soft gradient fade at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-[5]" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"
              >
                {/* Glassmorphic Card */}
                <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 p-4 sm:p-6 rounded-2xl shadow-2xl shadow-black/20 transition-all group-hover:bg-white/40 group-hover:border-white/60 group-hover:shadow-3xl group-hover:backdrop-blur-2xl">
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl pointer-events-none" />
                  
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-center sm:space-x-3 lg:space-x-4 text-center sm:text-left">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${metric.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow mb-2 sm:mb-0`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-sm"
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-800 font-semibold">{metric.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full mt-8 sm:mt-12 mx-auto max-w-xs"
        />
      </div>
    </section>
  );
}
