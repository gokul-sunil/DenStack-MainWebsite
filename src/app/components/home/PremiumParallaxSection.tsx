'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Calendar, Users, TrendingUp, BarChart3, CheckCircle2, Clock, DollarSign } from 'lucide-react';

// Premium easing configuration
const springConfig = { 
  stiffness: 100, 
  damping: 30, 
  restDelta: 0.001 
};

// Apple/Stripe-like easing curve
const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Card {
  id: number;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: any;
  color: string;
  bgGradient: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Smart Scheduling',
    description: 'AI-powered appointment management that reduces no-shows by 40%',
    metric: '2.5x',
    metricLabel: 'More bookings',
    icon: Calendar,
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    title: 'Patient Engagement',
    description: 'Automated reminders and two-way communication to keep patients connected',
    metric: '95%',
    metricLabel: 'Satisfaction rate',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100'
  },
  {
    id: 3,
    title: 'Revenue Growth',
    description: 'Streamline billing and collections to maximize practice revenue',
    metric: '+$180K',
    metricLabel: 'Avg. annual increase',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    id: 4,
    title: 'Analytics & Insights',
    description: 'Real-time dashboards to make data-driven decisions',
    metric: '24/7',
    metricLabel: 'Live monitoring',
    icon: BarChart3,
    color: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100'
  }
];

const features = [
  'Intelligent appointment booking',
  'Automated patient reminders',
  'Real-time analytics dashboard',
  'Multi-location support'
];

export function PremiumParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Background parallax - slowest movement
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgYSmooth = useSpring(bgY, springConfig);

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50"
      style={{ height: '400vh', position: 'relative' }}
    >
      {/* Background decoration - slowest layer */}
      <motion.div
        style={{ y: bgYSmooth }}
        className="fixed inset-0 pointer-events-none opacity-40"
      >
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
      </motion.div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column - Sticky Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="relative z-20"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: premiumEase }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Platform Features</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: premiumEase }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
              >
                Everything you need to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  grow faster
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: premiumEase }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                A complete platform built for modern dental practices. Streamline operations, 
                engage patients, and accelerate growthall from one powerful system.
              </motion.p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.5,
                      ease: premiumEase
                    }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-shadow duration-300">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6, ease: premiumEase }}
                className="mt-10"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Features
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Parallax Card Stack */}
            <div className="relative h-[700px] hidden lg:block">
              <ParallaxCardStack scrollYProgress={scrollYProgress} cards={cards} />
            </div>

            {/* Tablet/Mobile - Simplified Grid */}
            <div className="lg:hidden grid gap-6">
              {cards.map((card, index) => (
                <SimplifiedCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop Parallax Card Stack
function ParallaxCardStack({ scrollYProgress, cards }: { scrollYProgress: any; cards: Card[] }) {
  return (
    <>
      {cards.map((card, index) => {
        const Icon = card.icon;
        
        // Different scroll ranges and speeds for each card
        const rangeStart = index * 0.15;
        const rangeEnd = rangeStart + 0.7;
        const speed = 1.5 - (index * 0.3); // Foreground faster, background slower
        
        // Vertical parallax movement
        const rawY = useTransform(
          scrollYProgress,
          [rangeStart, rangeEnd],
          [150 * speed, -150 * speed]
        );
        const y = useSpring(rawY, springConfig);
        
        // Scale animation
        const rawScale = useTransform(
          scrollYProgress,
          [rangeStart, rangeStart + 0.2],
          [0.95, 1]
        );
        const scale = useSpring(rawScale, springConfig);
        
        // Opacity animation
        const rawOpacity = useTransform(
          scrollYProgress,
          [rangeStart, rangeStart + 0.15],
          [0, 1]
        );
        const opacity = useSpring(rawOpacity, springConfig);
        
        // Subtle horizontal offset for depth
        const rawX = useTransform(
          scrollYProgress,
          [rangeStart, rangeEnd],
          [index * 10, -index * 10]
        );
        const x = useSpring(rawX, springConfig);

        return (
          <motion.div
            key={card.id}
            style={{
              y,
              x,
              scale,
              opacity,
              zIndex: 40 - index * 10
            }}
            className="absolute inset-0"
          >
            <motion.div
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: premiumEase }
              }}
              className="relative bg-white rounded-[20px] shadow-2xl border border-gray-100 overflow-hidden h-full max-h-[420px] cursor-pointer group"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: `
                  0 ${20 + index * 10}px ${40 + index * 20}px -12px rgba(0, 0, 0, ${0.15 - index * 0.03}),
                  0 ${10 + index * 5}px ${20 + index * 10}px -8px rgba(0, 0, 0, ${0.1 - index * 0.02})
                `
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`relative h-32 bg-gradient-to-br ${card.bgGradient} overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-br ${card.color} bg-clip-text text-transparent`}>
                      {card.metric}
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-1">
                      {card.metricLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Clock, value: '24/7', label: 'Uptime' },
                    { icon: Users, value: '10K+', label: 'Users' },
                    { icon: DollarSign, value: '40%', label: 'ROI' }
                  ].map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={i} className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-gray-200 transition-colors duration-300">
                        <StatIcon className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className={`h-1 bg-gradient-to-r ${card.color}`} />
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

// Simplified Card for Mobile/Tablet
function SimplifiedCard({ card, index }: { card: Card; index: number }) {
  const Icon = card.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.6,
        ease: premiumEase
      }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* Card Header */}
      <div className={`h-24 bg-gradient-to-br ${card.bgGradient} p-5 flex items-center justify-between`}>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold bg-gradient-to-br ${card.color} bg-clip-text text-transparent`}>
            {card.metric}
          </div>
          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {card.metricLabel}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {card.description}
        </p>
      </div>

      {/* Bottom Border */}
      <div className={`h-1 bg-gradient-to-r ${card.color}`} />
    </motion.div>
  );
}
