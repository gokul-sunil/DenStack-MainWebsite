'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { Calendar, Stethoscope, DollarSign, BarChart3, CheckCircle2 } from 'lucide-react';
const exampleImage = '/assets/635216754cd060aa55d66f99396d5c1ffe13f789.png';

// Premium easing curve for smooth animations
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

interface ParallaxCardProps {
  scrollYProgress: MotionValue<number>;
  rangeStart: number;
  rangeEnd: number;
  speed: number;
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
  delay?: number;
}

function ParallaxCard({ 
  scrollYProgress, 
  rangeStart, 
  rangeEnd, 
  speed, 
  children, 
  className = '',
  zIndex = 10,
  delay = 0
}: ParallaxCardProps) {
  // Transform scroll progress to Y position with smooth spring animation
  const rawY = useTransform(scrollYProgress, [rangeStart, rangeEnd], [100 * speed, -100 * speed]);
  const y = useSpring(rawY, springConfig);
  
  // Scale from 0.95 to 1 as card enters viewport
  const rawScale = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.15], [0.95, 1]);
  const scale = useSpring(rawScale, springConfig);
  
  // Opacity from 0 to 1
  const rawOpacity = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.1], [0, 1]);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <motion.div
      style={{ 
        y, 
        scale, 
        opacity,
        zIndex,
        transitionDelay: `${delay}ms`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: Calendar,
    title: 'Intelligent appointment booking',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Stethoscope,
    title: 'Automated reminders & confirmations',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CheckCircle2,
    title: 'Online patient self-scheduling',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Multi-location calendar management',
    color: 'from-blue-500 to-blue-600'
  }
];

const tabs = [
  { id: 'scheduling', label: 'Scheduling', icon: Calendar },
  { id: 'clinical', label: 'Clinical', icon: Stethoscope },
  { id: 'billing', label: 'Billing', icon: DollarSign },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 }
];

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('scheduling');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background layer - moves slowest
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgYSpring = useSpring(bgY, springConfig);

  // If reduced motion, disable parallax
  const finalBgY = prefersReducedMotion ? 0 : bgYSpring;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50"
      style={{ position: 'relative' }}
    >
      {/* Background decoration - slowest layer */}
      <motion.div
        style={{ y: finalBgY }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </motion.div>

      {/* Sticky container for parallax effect */}
      <div className="sticky top-0 pt-20 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Title */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Scheduling
                </h2>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-lg text-gray-700 font-medium">
                        {feature.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Floating Cards Stack */}
            <div className="relative h-[600px] hidden lg:block">
              {!prefersReducedMotion ? (
                <>
                  {/* Background Card - slowest, largest shadow */}
                  <ParallaxCard
                    scrollYProgress={scrollYProgress}
                    rangeStart={0}
                    rangeEnd={0.8}
                    speed={0.3}
                    zIndex={10}
                    className="absolute top-20 left-10 right-0"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 opacity-40 blur-sm">
                      <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl" />
                    </div>
                  </ParallaxCard>

                  {/* Mid Card - medium speed, medium shadow */}
                  <ParallaxCard
                    scrollYProgress={scrollYProgress}
                    rangeStart={0.1}
                    rangeEnd={0.9}
                    speed={0.6}
                    zIndex={20}
                    delay={50}
                    className="absolute top-10 left-5 right-5"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 opacity-60">
                      <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl" />
                    </div>
                  </ParallaxCard>

                  {/* Front Card - fastest, sharpest */}
                  <ParallaxCard
                    scrollYProgress={scrollYProgress}
                    rangeStart={0.2}
                    rangeEnd={1}
                    speed={1}
                    zIndex={30}
                    delay={100}
                    className="absolute top-0 left-0 right-10"
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                      {/* Dashboard Image */}
                      <div className="relative">
                        <img 
                          src={exampleImage} 
                          alt="Scheduling Dashboard" 
                          className="w-full h-auto"
                        />
                        
                        {/* Live indicator */}
                        <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs font-semibold text-gray-900">Live</span>
                        </div>
                      </div>

                      {/* Card footer with subtle gradient */}
                      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              Scheduling Dashboard
                            </h3>
                            <p className="text-sm text-gray-600">
                              Real-time appointment management
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </ParallaxCard>
                </>
              ) : (
                // Simplified version for reduced motion
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  <div className="relative">
                    <img 
                      src={exampleImage} 
                      alt="Scheduling Dashboard" 
                      className="w-full h-auto"
                    />
                    
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-gray-900">Live</span>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          Scheduling Dashboard
                        </h3>
                        <p className="text-sm text-gray-600">
                          Real-time appointment management
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile/Tablet simplified view */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:hidden bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={exampleImage} 
                  alt="Scheduling Dashboard" 
                  className="w-full h-auto"
                />
                
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-gray-900">Live</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Scheduling Dashboard
                    </h3>
                    <p className="text-sm text-gray-600">
                      Real-time appointment management
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
