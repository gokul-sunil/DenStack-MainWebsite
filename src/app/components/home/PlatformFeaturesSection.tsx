'use client'

import { motion } from 'motion/react'
import { 
  Users,
  Stethoscope,
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Brain,
  Shield,
  LucideIcon
} from 'lucide-react'

interface Badge {
  icon: LucideIcon
  label: string
}

interface FeatureCategory {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
  badges: Badge[]
  features: string[]
}

const featureCategories: FeatureCategory[] = [
  {
    icon: DollarSign,
    title: 'Revenue Management',
    subtitle: 'Maximize practice revenue',
    description: 'Streamline billing, collections, and payment processing. Automated claims and smart billing ensure you get paid faster.',
    color: 'from-emerald-500 to-green-500',
    badges: [
      { icon: Zap, label: 'Smart Analysis' },
      { icon: Clock, label: 'Real-time data' },
      { icon: Brain, label: 'AI-powered' },
      { icon: Shield, label: 'HIPAA secure' }
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
    ]
  },
  {
    icon: Stethoscope,
    title: 'Clinical Workflows',
    subtitle: 'Streamline clinical operations',
    description: 'Comprehensive clinical tools for digital charting, imaging, and e-prescriptions. Built for modern dental practices.',
    color: 'from-purple-500 to-indigo-500',
    badges: [
      { icon: Zap, label: 'Smart Analysis' },
      { icon: Clock, label: 'Real-time data' },
      { icon: Brain, label: 'AI-powered' },
      { icon: Shield, label: 'HIPAA secure' }
    ],
    features: [
      'Treatment Planning with E-signatures',
      'General and Perio Clinical Charting',
      'Electronic Prescriptions',
      'HIPAA Compliant',
      'Clinical Notes with Templates',
      'Digital Imaging Integrations',
      'Periodontal Charting',
      'Always-On Backups'
    ]
  },
  {
    icon: Users,
    title: 'Patient Management',
    subtitle: 'Enhance patient experience',
    description: 'Engage patients with smart scheduling, automated reminders, and seamless communication tools.',
    color: 'from-blue-500 to-cyan-500',
    badges: [
      { icon: Zap, label: 'Smart Analysis' },
      { icon: Clock, label: 'Real-time data' },
      { icon: Brain, label: 'AI-powered' },
      { icon: Shield, label: 'HIPAA secure' }
    ],
    features: [
      'Smart Appointment Scheduling',
      'Automated Reminders & Confirmations',
      'Patient Portal Access',
      'Insurance Verification',
      'Two-Way Messaging',
      'Online Booking Widget',
      'Waitlist Management',
      'Patient Forms & Intake'
    ]
  },
  {
    icon: BarChart3,
    title: 'Practice Analytics',
    subtitle: 'Data-driven insights',
    description: 'Make informed decisions with real-time dashboards, performance metrics, and predictive analytics.',
    color: 'from-cyan-500 to-blue-500',
    badges: [
      { icon: Zap, label: 'Smart Analysis' },
      { icon: Clock, label: 'Real-time data' },
      { icon: Brain, label: 'AI-powered' },
      { icon: Shield, label: 'HIPAA secure' }
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
    ]
  }
]

export function PlatformFeaturesSection() {
  return (
    <section className="relative py-20 bg-[#f5f6f7]">
      <div className="relative max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
              <span className="text-sm font-semibold text-[#2E7D32] tracking-wide">COMPLETE PLATFORM</span>
            </motion.div>
            
            <h2 className="text-[36px] md:text-[42px] font-bold text-[#0B1220] mb-4 leading-tight">
              Everything You Need in One Platform
            </h2>
            
            <p className="text-[16px] text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Comprehensive features across practice growth, patient experience, clinical workflows, 
              revenue management, and analytics.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="relative grid md:grid-cols-2 gap-6">
          {featureCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.62, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0px 12px 32px rgba(0,0,0,0.08)',
                  transition: { duration: 0.18, ease: 'easeOut' }
                }}
                className="relative bg-white rounded-[24px] p-8 border border-[#E5E7EB] overflow-hidden group cursor-pointer"
                style={{ 
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-[14px] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#0B1220] mb-2 leading-tight">
                  {category.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[14px] text-[#4CAF50] font-semibold mb-4 leading-relaxed">
                  {category.subtitle}
                </p>

                {/* Description */}
                <p className="text-[14px] text-[#64748B] mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {category.badges.map((badge, i) => (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + i * 0.03 }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg text-[#0369A1] font-medium text-[11px]"
                    >
                      <badge.icon className="w-3.5 h-3.5" />
                      <span>{badge.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className="relative space-y-3 mb-6">
                  {category.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + i * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-[#475569] font-medium leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Explore Features Link */}
                <motion.div
                  className="inline-flex items-center gap-2 mt-4 text-[#4CAF50] font-semibold text-[14px] group/cta"
                  whileHover={{ gap: '12px' }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                y: -2,
                boxShadow: '0px 8px 20px rgba(76, 175, 80, 0.25)',
                transition: { duration: 0.16, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4CAF50] text-white rounded-[10px] font-semibold text-[15px] transition-colors duration-180 hover:bg-[#43A047]"
            >
              View All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}