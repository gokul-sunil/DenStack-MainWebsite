'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  ClipboardList,
  Users, 
  BarChart3, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Sparkles,
  Activity
} from 'lucide-react';

interface FeatureItem {
  label: string;
  hasSparkle?: boolean;
}

interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  imageUrl: string;
  leftFeatures: FeatureItem[];
  rightFeatures: FeatureItem[];
  highlightFeatures: string[];
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Clinical Workflows ',
    subtitle: 'Streamline your practice',
    description: 'Complete clinical management tools designed for modern dental practices. From treatment planning to prescriptions, everything you need in one place.',
    icon: ClipboardList,
    imageUrl: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNoZWNrdXB8ZW58MXx8fHwxNzY5NTc4ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlightFeatures: [
      'Treatment planning with e-signatures',
      'Clinical notes with templates',
      'Digital imaging integrations',
      // 'HIPAA compliant documentation'
    ],
    leftFeatures: [
      { label: 'Treatment Planning with E-signatures' },
      { label: 'General and Perio Clinical Charting' },
      { label: 'Electronic Prescriptions' },
      // { label: 'HIPAA Compliant' }
    ],
    rightFeatures: [
      { label: 'Clinical Notes with Templates', hasSparkle: true },
      { label: 'Digital Imaging Integrations', hasSparkle: true },
      { label: 'Periodontal Charting' },
      { label: 'Always-On Backups' }
    ]
  },
  {
    id: 2,
    title: 'Patient Management',
    subtitle: 'Engage and retain patients',
    description: 'Smart scheduling and communication tools that keep your practice running smoothly. Reduce no-shows and improve patient satisfaction.',
    icon: Users,
    imageUrl: 'https://images.unsplash.com/photo-1643660527072-9c702932f606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcmFjdGljZSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3Njk1Nzg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlightFeatures: [
      'Smart appointment scheduling',
      'Automated reminders & confirmations',
      'Two-way messaging with patients',
      'Online booking widget'
    ],
   leftFeatures: [
  { label: 'Built-in Appointment Reminders' },
  { label: 'Two-way Patient Texting', hasSparkle: true},
  { label: 'Online Self-service Scheduling' },
  { label: 'Online forms for Patient Convenience' },
  { label: 'Online Patient Payments' }
],

rightFeatures: [
  { label: 'Built-in Teledentistry' },
  { label: 'Patient Portal for Forms and Payments' },
  { label: 'Patient Kiosk for Easy Self Check-in' },
  { label: 'Curbside Check-in' }
]
  },
  {
    id: 3,
    title: 'Practice Analytics',
    subtitle: 'Data-driven decisions',
    description: 'Real-time insights into your practice performance. Track key metrics, identify trends, and optimize operations with powerful analytics.',
    icon: BarChart3,
    imageUrl: 'https://images.unsplash.com/photo-1600721187850-c944924fd48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5pc3QlMjBjbGVhbmluZ3xlbnwxfHx8fDE3Njk1Nzg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlightFeatures: [
      'Real-time revenue dashboard',
      'Provider performance metrics',
      'Predictive analytics with AI',
      'Custom report builder'
    ],
    leftFeatures: [
      { label: 'Real-Time Revenue Dashboard' },
      { label: 'Provider Performance Metrics' },
      { label: 'Patient Acquisition Reports' },
      { label: 'Treatment Acceptance Tracking' }
    ],
    rightFeatures: [
      { label: 'Predictive Analytics', hasSparkle: true },
      { label: 'Custom Report Builder', hasSparkle: true },
      { label: 'Benchmark Comparisons' },
      { label: 'Export to Excel/PDF' }
    ]
  },
  {
    id: 4,
    title: 'Revenue Management',
    subtitle: 'Maximize practice revenue',
    description: 'Streamline billing, collections, and payment processing. Automated claims and smart billing ensure you get paid faster.',
    icon: Activity,
    imageUrl: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNoZWNrdXB8ZW58MXx8fHwxNzY5NTc4ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlightFeatures: [
      'Automated claims processing',
      'Payment plans & financing',
      'Smart billing engine with AI',
      'Collections management'
    ],
     leftFeatures: [
  { label: 'Clinic Expenses Management' },
  { label: 'Treatment-based Revenue Tracking' },
  { label: 'Payment Reminder with Pay-by-Text' }
],

rightFeatures: [
  { label: 'Patient Financing' },
  { label: 'Credit Card Processing' }
]
  }
];

export function RealParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Determine active card based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Divide scroll progress into sections for each card
      const newIndex = Math.floor(latest * cards.length);
      const clampedIndex = Math.min(Math.max(newIndex, 0), cards.length - 1);
      
      // Only update if the index actually changed to avoid unnecessary re-renders
      setActiveCardIndex(prev => prev !== clampedIndex ? clampedIndex : prev);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeCard = cards[activeCardIndex];
  const ActiveIcon = activeCard.icon;

  return (
    <div 
      ref={sectionRef}
      className="relative py-32"
      style={{ position: 'relative' }}
    >
      {/* Main content grid */}
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Text Content with Dynamic Updates */}
          <div className="lg:sticky lg:top-32 lg:self-start h-fit">
            {/* Eyebrow - Static, no animation */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-4">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">Platform Features</span>
            </div>

            {/* Single AnimatePresence wrapping all dynamic content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCardIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <ActiveIcon className="w-6 h-6 text-white" />
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] mb-2">
                  {activeCard.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {activeCard.subtitle}
                </p>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                  {activeCard.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {activeCard.highlightFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 group">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm lg:text-base text-gray-700 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator - Static, no animation */}
            <div className="flex items-center gap-2 mb-6">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeCardIndex
                      ? 'w-12 bg-blue-600'
                      : 'w-6 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* CTA - Static, no animation */}
            <div>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Explore Features
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Scrolling Parallax Cards */}
          <div className="relative min-h-[2400px] hidden lg:block">
            <ScrollingParallaxCards scrollYProgress={scrollYProgress} activeIndex={activeCardIndex} />
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden grid gap-6">
            {cards.map((card, index) => (
              <MobileCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop Scrolling Parallax Cards
function ScrollingParallaxCards({ scrollYProgress, activeIndex }: { scrollYProgress: any; activeIndex: number }) {
  return (
    <div className="relative w-full space-y-32 pt-0">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isActive = index === activeIndex;
        
        // Different scroll speeds for parallax effect
        const speed = 1 - (index * 0.15);
        
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [index * 80 * speed, -index * 40 * speed]
        );
        
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.1, 0.9, 1],
          [0.4, 1, 1, 0.4]
        );
        
        const scale = useTransform(
          scrollYProgress,
          [0, 0.2, 0.5, 0.8, 1],
          [0.95, 1, 1, 1, 0.95]
        );

        return (
          <motion.div
            key={card.id}
            style={{
              y,
              opacity,
              scale
            }}
            className="w-full"
          >
            <div 
              className={`bg-gradient-to-br from-gray-100 to-gray-50 rounded-[32px] overflow-hidden transition-all duration-500 ${
                isActive ? 'shadow-2xl ring-2 ring-blue-500/50' : 'shadow-xl'
              }`}
            >
              {/* Top Section - Icon and Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 pt-8 px-8 pb-6">
                {/* Icon */}
                <div className={`absolute top-8 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${
                  isActive ? 'ring-2 ring-blue-500' : ''
                }`}>
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-20">
                  {card.title}
                </h3>

                {/* Image/Screenshot Area */}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay UI Element */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-br from-green-700/95 to-green-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-[280px]">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="text-white font-bold text-base">Smart Analysis</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Real-time data', 'AI-powered', 'HIPAA secure'].map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Feature Links */}
              <div className="bg-gray-900 px-8 py-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {/* Left Column Features */}
                  <div className="space-y-4">
                    {card.leftFeatures.map((feature, i) => (
                      <FeatureLink key={i} feature={feature} />
                    ))}
                  </div>

                  {/* Right Column Features */}
                  <div className="space-y-4">
                    {card.rightFeatures.map((feature, i) => (
                      <FeatureLink key={i} feature={feature} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Feature Link Component
function FeatureLink({ feature }: { feature: FeatureItem }) {
  return (
    <div className="group flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-lg transition-colors duration-200 py-2 px-2 -mx-2">
      <div className="flex items-center gap-2">
        <span className="text-white text-sm font-medium">{feature.label}</span>
        {feature.hasSparkle && (
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        )}
      </div>
      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
    </div>
  );
}

// Mobile Card Component
function MobileCard({ card, index }: { card: Card; index: number }) {
  const Icon = card.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-xl"
    >
      {/* Top Section */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 pt-6 px-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6 text-gray-900" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
        </div>

        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={card.imageUrl} 
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 px-6 py-6 space-y-3">
        {[...card.leftFeatures, ...card.rightFeatures].slice(0, 4).map((feature, i) => (
          <div key={i} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium">{feature.label}</span>
              {feature.hasSparkle && (
                <Sparkles className="w-3 h-3 text-blue-400" />
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
