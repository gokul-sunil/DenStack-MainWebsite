'use client';

import { AlertCircle, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { motion } from 'motion/react';

const problems = [
  {
    title: 'Fragmented Systems',
    description: 'Managing multiple disconnected software tools leads to data silos and inefficiencies.',
  },
  {
    title: 'Manual Processes',
    description: 'Time-consuming administrative tasks take focus away from patient care.',
  },
  {
    title: 'Revenue Leakage',
    description: 'Missed appointments and billing errors impact practice profitability.',
  },
];

const solutions = [
  'Unified platform eliminates data silos',
  'Automated workflows save 15+ hours per week',
  'AI-powered scheduling reduces no-shows by 40%',
  'Integrated billing maximizes revenue capture',
];

export function ProblemSolutionSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 sm:top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-red-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-10 sm:bottom-20 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Challenge"
          title="Running a dental practice shouldn't be this complicated"
          centered
        />

        {/* Problem Cards - Glassmorphic Style */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Glassmorphic Card */}
              <div className="relative backdrop-blur-lg bg-white/70 border border-white/40 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all group-hover:bg-white/80 group-hover:border-white/60 shadow-xl shadow-gray-200/50">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                >
                  <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{problem.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow Indicator with Animation */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-50"
            />
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-white transform rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Solution */}
        <div className="max-w-5xl mx-auto px-0 sm:px-4 py-4 sm:py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Animated Border Glow */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-blue-600 via-cyan-500 via-purple-500 to-blue-600 rounded-2xl sm:rounded-[3rem] blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ zIndex: 0 }}
            />

            <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl border-2 border-blue-200 shadow-2xl" style={{ zIndex: 1 }}>
              <div className="text-center mb-8 sm:mb-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>The Solution</span>
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  One Platform.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Complete Control.
                  </span>
                </h3>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  DenStack unifies every aspect of your practice into a single, intelligent platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, x: 8 }}
                    className="flex items-start space-x-3 sm:space-x-4 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
