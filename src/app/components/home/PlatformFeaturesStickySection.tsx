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
import { Button } from '@/app/components/ui/button'

interface Badge {
  icon: LucideIcon
  label: string
}

interface FeatureCategory {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
  bgColor: string
  hoverColor: string
  badges: Badge[]
  features: string[]
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'revenue-management',
    icon: DollarSign,
    title: 'Revenue Management',
    subtitle: 'Maximize practice revenue',
    description: 'Streamline billing, collections, and payment processing. Automated claims and smart billing ensure you get paid faster.',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-[#4CAF50]',
    hoverColor: 'hover:bg-[#43A047]',
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
    id: 'clinical-workflows',
    icon: Stethoscope,
    title: 'Clinical Workflows',
    subtitle: 'Streamline clinical operations',
    description: 'Comprehensive clinical tools for digital charting, imaging, and e-prescriptions. Built for modern dental practices.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
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
    id: 'patient-management',
    icon: Users,
    title: 'Patient Management',
    subtitle: 'Enhance patient experience',
    description: 'Engage patients with smart scheduling, automated reminders, and seamless communication tools.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
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
    id: 'practice-analytics',
    icon: BarChart3,
    title: 'Practice Analytics',
    subtitle: 'Data-driven insights',
    description: 'Make informed decisions with real-time dashboards, performance metrics, and predictive analytics.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-600',
    hoverColor: 'hover:bg-cyan-700',
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

export function PlatformFeaturesStickySection() {
  return (
    <section className="relative py-20 bg-white">
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

        {/* Sticky Layout Container */}
        <div className="relative grid lg:grid-cols-[40%_60%] gap-12">
          
          {/* Left Side - Sticky Navigation */}
          <div className="relative lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#f5f6f7] rounded-[24px] p-8 border border-[#e5e7eb]"
            >
              <h3 className="text-[24px] font-bold text-[#0B1220] mb-6">
                Platform Features
              </h3>
              
              <nav className="space-y-3">
                {featureCategories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <motion.a
                      key={category.id}
                      href={`#${category.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group flex items-center gap-4 p-4 bg-white rounded-[16px] border border-[#e5e7eb] hover:border-[#4CAF50] hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-[12px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[15px] font-bold text-[#0B1220] mb-1">
                          {category.title}
                        </h4>
                        <p className="text-[12px] text-[#64748B]">
                          {category.subtitle}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#4CAF50] group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
                <p className="text-[14px] text-[#64748B] mb-4">
                  Ready to transform your practice?
                </p>
                <Button className="w-full bg-[#4CAF50] hover:bg-[#43A047] text-white px-6 py-3 rounded-[10px] font-semibold">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Feature Sections */}
          <div className="relative space-y-12">
            {featureCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  id={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.62, 
                    delay: categoryIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="relative bg-white rounded-[24px] p-8 border border-[#e5e7eb] shadow-md"
                  style={{ 
                    boxShadow: '0px 4px 16px rgba(0,0,0,0.04)',
                    scrollMarginTop: '120px'
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-[16px] flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[28px] font-bold text-[#0B1220] mb-2 leading-tight">
                    {category.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[16px] text-[#4CAF50] font-semibold mb-4 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[#64748B] mb-8 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Badges */}
                  <div className="relative flex flex-wrap gap-3 mb-8">
                    {category.badges.map((badge, i) => (
                      <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + i * 0.05, duration: 0.28 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl text-[#0369A1] font-semibold text-[12px]"
                      >
                        <badge.icon className="w-4 h-4" />
                        <span>{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features Grid */}
                  <div className="relative grid md:grid-cols-2 gap-4 mb-8">
                    {category.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 p-3 bg-[#f5f6f7] rounded-[12px] hover:bg-[#E8F5E9] transition-colors duration-300 group"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-[14px] text-[#475569] font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Button className={`${category.bgColor} ${category.hoverColor} text-white px-6 py-3 rounded-[10px] font-semibold inline-flex items-center gap-2`}>
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}