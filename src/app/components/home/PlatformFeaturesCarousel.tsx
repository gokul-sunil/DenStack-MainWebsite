'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ClipboardList
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
const clinicalWorkflowsImg = '/assets/08ef643a32996dbb875f097daccc2b5edba11b1d.png';

const platformFeatures = [
  {
    id: 'clinical-workflows',
    icon: ClipboardList,
    title: 'Clinical Workflows',
    subtitle: 'Streamline your practice',
    description: 'Complete clinical management tools designed for modern dental practices. From treatment planning to prescriptions, everything you need in one place.',
    image: clinicalWorkflowsImg,
    color: 'from-purple-500 to-indigo-500',
    badgeColor: 'from-purple-100 to-indigo-100',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    bullets: [
      'Treatment planning with e-signatures',
      'Clinical notes with templates',
      'Digital imaging integrations',
      'HIPAA compliant documentation',
      'Hellloooooooiiiiii'
    ],
    features: [
      'Treatment Planning with E-signatures',
      'Clinical Notes with Templates',
      'General and Perio Clinical Charting',
      'Digital Imaging Integrations',
      'Electronic Prescriptions',
      'Periodontal Charting',
      'HIPAA Compliant',
      'Always-On Backups'
    ],
    badges: ['Smart Analysis', 'Real-time data', 'AI-powered', 'HIPAA secure']
  },
  {
    id: 'patient-management',
    icon: Users,
    title: 'Patient Management',
    subtitle: 'Enhance patient experience',
    description: 'Engage patients with smart scheduling, automated reminders, and seamless communication tools that keep your practice running smoothly.',
    image: clinicalWorkflowsImg, // Replace with actual patient management image
    color: 'from-blue-500 to-cyan-500',
    badgeColor: 'from-blue-100 to-cyan-100',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    bullets: [
      'Smart appointment scheduling',
      'Automated reminders (SMS & Email)',
      'Patient portal access',
      'Two-way messaging'
    ],
    features: [
      'Smart Appointment Scheduling',
      'Automated Reminders',
      'Patient Portal Access',
      'Insurance Verification',
      'Two-Way Messaging',
      'Online Booking Widget',
      'Waitlist Management',
      'Patient Forms & Intake'
    ],
    badges: ['Smart Scheduling', 'Automated', 'Self-service', 'Secure']
  },
  {
    id: 'revenue-management',
    icon: DollarSign,
    title: 'Revenue Management',
    subtitle: 'Maximize collections',
    description: 'Streamline billing, collections, and payment processing. Automated claims and smart billing ensure you get paid faster.',
    image: clinicalWorkflowsImg, // Replace with actual revenue management image
    color: 'from-emerald-500 to-green-500',
    badgeColor: 'from-emerald-100 to-green-100',
    textColor: 'text-emerald-600',
    bgColor: 'bg-[#4CAF50]',
    hoverColor: 'hover:bg-[#43A047]',
    bullets: [
      'Automated claims processing',
      'Payment plans & financing',
      'Collections management',
      'EOB reconciliation'
    ],
    features: [
      'Automated Claims Processing',
      'Payment Plans & Financing',
      'Collections Management',
      'EOB Reconciliation',
      'Smart Billing Engine',
      'Stripe & Square Integration',
      'Aging Reports',
      'Bulk Payment Processing'
    ],
    badges: ['Automated', 'Fast payments', 'Secure', 'Integrated']
  },
  {
    id: 'practice-analytics',
    icon: BarChart3,
    title: 'Practice Analytics',
    subtitle: 'Data-driven decisions',
    description: 'Make informed decisions with real-time dashboards, performance metrics, and predictive analytics that drive practice growth.',
    image: clinicalWorkflowsImg, // Replace with actual analytics image
    color: 'from-cyan-500 to-blue-500',
    badgeColor: 'from-cyan-100 to-blue-100',
    textColor: 'text-cyan-600',
    bgColor: 'bg-cyan-600',
    hoverColor: 'hover:bg-cyan-700',
    bullets: [
      'Real-time revenue dashboard',
      'Provider performance metrics',
      'Patient acquisition reports',
      'Predictive analytics'
    ],
    features: [
      'Real-Time Revenue Dashboard',
      'Provider Performance Metrics',
      'Patient Acquisition Reports',
      'Treatment Acceptance Tracking',
      'Predictive Analytics',
      'Custom Report Builder',
      'Benchmark Comparisons',
      'Export to Excel/PDF'
    ],
    badges: ['Real-time', 'Predictive AI', 'Custom reports', 'Benchmarks']
  }
];

export function PlatformFeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = platformFeatures[activeIndex];

  return (
    <section className="relative py-24 bg-white">
      <div className="relative max-w-[1200px] mx-auto px-6">
        
        <div className="relative grid lg:grid-cols-[38%_62%] gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Platform Features Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-[12px] font-semibold text-blue-600 tracking-wide">
                  Platform Features 
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${activeFeature.color} rounded-[16px] flex items-center justify-center mb-6 shadow-lg`}>
                    <activeFeature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-[40px] font-bold text-[#0B1220] mb-3 leading-tight">
                    {activeFeature.title}
                  </h2>

                  {/* Subtitle */}
                  <p className={`text-[18px] font-semibold ${activeFeature.textColor} mb-4`}>
                    {activeFeature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[#64748B] leading-relaxed mb-8">
                    {activeFeature.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {activeFeature.bullets.map((bullet, index) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 ${activeFeature.textColor} mt-0.5 flex-shrink-0`} />
                        <span className="text-[14px] text-[#0B1220]">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 mb-8">
                {platformFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-blue-600' 
                        : 'w-4 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <Button className={`${activeFeature.bgColor} ${activeFeature.hoverColor} text-white px-6 py-3 rounded-[10px] font-semibold text-[15px] inline-flex items-center gap-2`}>
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Visual - Feature Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-[24px] shadow-2xl border border-[#e5e7eb] overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-8 pb-6 border-b border-[#e5e7eb]">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${activeFeature.badgeColor} rounded-[12px] flex items-center justify-center`}>
                      <activeFeature.icon className={`w-6 h-6 ${activeFeature.textColor}`} />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#94A3B8]">
                      {activeFeature.title}
                    </h3>
                  </div>
                </div>

                {/* Hero Image with Badge Overlay */}
                <div className="relative">
                  <ImageWithFallback
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    className="w-full h-[280px] object-cover"
                  />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-6 right-6 bg-[#4CAF50] rounded-[12px] p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-[14px]">Smart Analysis</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeFeature.badges.map((badge, index) => (
                        <motion.span
                          key={badge}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.08 }}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[11px] font-medium text-white"
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="bg-[#64748B] p-8">
                  <div className="grid grid-cols-2 gap-3">
                    {activeFeature.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="flex items-center justify-between text-white hover:bg-white/10 p-2 rounded-[8px] transition-colors cursor-pointer group"
                      >
                        <span className="text-[13px] font-medium">{feature}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
