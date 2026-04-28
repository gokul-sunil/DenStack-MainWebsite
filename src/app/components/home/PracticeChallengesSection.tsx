'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
const exampleImage = '/assets/8bea9a3422c02a0f90e5493ca38cd67b4bdec7e6.png';

interface Challenge {
  id: string;
  number: string;
  title: string;
  description?: string;
  cta?: string;
}

const challenges: Challenge[] = [
  {
    id: 'enterprise-dsos',
    number: '01',
    title: 'Enterprise DSOs',
    description: 'Manage multiple locations with centralized operations, standardized workflows, and comprehensive reporting across your entire network.',
    cta: 'Learn More'
  },
  {
    id: 'emerging-groups',
    number: '02',
    title: 'Emerging Groups',
    description: 'Scale efficiently with tools designed to support your growth from a few locations to a thriving multi-site practice.',
    cta: 'Learn More'
  },
  {
    id: 'private-practices',
    number: '03',
    title: 'Private Practices',
    description: 'Streamline daily operations with intuitive practice management designed specifically for independent dental offices.',
    cta: 'Learn More'
  },
  {
    id: 'speciality-practices',
    number: '04',
    title: 'Speciality Practices',
    description: 'Customize workflows and documentation to fit the unique needs of your specialty practice, from orthodontics to oral surgery.',
    cta: 'Learn More'
  },
  {
    id: 'dental-startups',
    number: '05',
    title: 'Dental Startups',
    description: 'Easily setup the software platform to hit the ground running with your new office.',
    cta: 'Learn More'
  }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds per card

export function PracticeChallengesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0); // Key to force re-animation

  // Auto-play carousel logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % challenges.length);
      setKey(prev => prev + 1); // Force progress bar to restart
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  // Handle manual selection
  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setKey(prev => prev + 1); // Force progress bar to restart
    setIsPaused(false);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_60%)]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm mb-6"
          >
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">Who We Serve</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-[1.1] max-w-4xl"
          >
            Scalable Practice Management for DSOs, Multi-Location Groups and Single Offices
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Challenge List */}
          <div className="space-y-0">
            {challenges.map((challenge, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleSelect(index)}
                    className={`w-full text-left group transition-all duration-300 relative overflow-hidden ${
                      isActive 
                        ? 'bg-white shadow-md' 
                        : 'hover:bg-white/50'
                    }`}
                  >
                    {/* Animated Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                      {isActive && !isPaused && (
                        <motion.div
                          key={`progress-${key}`}
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ 
                            duration: AUTOPLAY_DURATION / 1000,
                            ease: 'linear'
                          }}
                        />
                      )}
                      {isActive && isPaused && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                          style={{ width: '50%' }}
                        />
                      )}
                    </div>

                    <div className="flex items-start gap-4 lg:gap-6 py-4 lg:py-5 px-4 lg:px-6 border-b border-gray-200">
                      {/* Number */}
                      <span className={`text-sm font-bold transition-colors duration-300 ${
                        isActive 
                          ? 'text-blue-600' 
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}>
                        {challenge.number}
                      </span>

                      {/* Title and Content */}
                      <div className="flex-1">
                        <h3 className={`text-lg lg:text-xl font-bold mb-2 transition-colors duration-300 ${
                          isActive 
                            ? 'text-gray-900' 
                            : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                          {challenge.title}
                        </h3>

                        {/* Description - Only show when active */}
                        {isActive && challenge.description && (
                          <div>
                            <p className="text-base text-gray-600 mb-4 leading-relaxed">
                              {challenge.description}
                            </p>
                            
                            {challenge.cta && (
                              <motion.div 
                                className="inline-flex items-center gap-2 text-gray-900 font-semibold text-base group/cta cursor-pointer relative"
                                whileHover={{ gap: '12px' }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="relative pb-1">
                                  {challenge.cta}
                                  <motion.div 
                                    className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                                    initial={{ width: '100%' }}
                                    whileHover={{ width: '100%' }}
                                    style={{ width: '100%' }}
                                  />
                                </span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                              </motion.div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                {/* Background Image */}
                <div className="relative h-[400px] lg:h-[480px]">
                  <img 
                    src={exampleImage} 
                    alt="Leslie Murray, Owner of Iris Pediatric Dentistry"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
                    
                    {/* Top - Logo */}
                    <div className="flex justify-end">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                        <span className="text-2xl font-bold text-gray-900">iris</span>
                      </div>
                    </div>

                    {/* Bottom - Testimonial and Info */}
                    <div>
                      {/* Quote */}
                      <div className="mb-6 lg:mb-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-full mb-4 group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </motion.div>
                        
                        <p className="text-white text-xl lg:text-2xl font-bold leading-snug max-w-md">
                          "CareStack helped me grow from a solo startup to a modern, efficient Pediatric practice."
                        </p>
                      </div>

                      {/* Author Info and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                        {/* Author */}
                        <div className="text-white">
                          <p className="font-bold text-lg mb-1">Leslie Murray</p>
                          <p className="text-white/90 text-sm mb-3">Owner, Iris Pediatric Dentistry</p>
                          <div className="space-y-0.5 text-white/80 text-sm">
                            <p className="font-semibold">Colorado</p>
                            <p>United States</p>
                          </div>
                          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            Location
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          Book Free Demo
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
