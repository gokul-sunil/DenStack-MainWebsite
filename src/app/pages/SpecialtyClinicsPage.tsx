'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Scissors,
  Heart,
  Activity,
  Smile,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const specialties = [
  {
    icon: Smile,
    title: 'Orthodontics',
    description: 'Comprehensive treatment planning, progress tracking, and patient communication tools',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Activity,
    title: 'Endodontics',
    description: 'Specialized charting, referral management, and procedure-specific documentation',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Periodontics',
    description: 'Advanced perio charting, treatment plans, and maintenance scheduling',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Scissors,
    title: 'Oral Surgery',
    description: 'Surgical templates, consent forms, and post-op care coordination',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Pediatric Dentistry',
    description: 'Family-friendly features, parent portals, and growth tracking',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Target,
    title: 'Cosmetic Dentistry',
    description: 'Before/after galleries, treatment simulations, and financing options',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '100%',
    label: 'Specialty-Ready',
    description: 'Custom templates for your specialty'
  },
  {
    stat: '45%',
    label: 'More Referrals',
    description: 'With integrated referral management'
  },
  {
    stat: '35%',
    label: 'Higher Efficiency',
    description: 'Specialty-specific workflows'
  },
  {
    stat: '24/7',
    label: 'Patient Access',
    description: 'Online booking and communication'
  }
];

const features = [
  'Specialty-specific clinical charting',
  'Custom treatment plan templates',
  'Referral tracking & management',
  'Specialty procedure codes',
  'Advanced imaging integration',
  'Customizable consent forms',
  'Treatment progress tracking',
  'Automated recall systems',
  'Insurance pre-authorization',
  'Multi-provider scheduling',
  'Case presentation tools',
  'Specialty-focused reporting'
];

export function SpecialtyClinicsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6 border border-purple-200"
                >
                  <Star className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">Specialty Solutions</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Built for{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Specialty Practices
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Whether you're an orthodontist, endodontist, periodontist, or oral surgeon - 
                  get specialty-specific tools designed for your unique workflows.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    View Features
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Quick Setup</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Specialty Dashboard</h3>
                      <div className="text-xs text-purple-600 font-semibold px-3 py-1 bg-purple-100 rounded-full">
                        Orthodontics
                      </div>
                    </div>
                    
                    {/* Specialty Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { label: 'Active Cases', value: '156', color: 'purple' },
                        { label: 'New Referrals', value: '24', color: 'blue' },
                        { label: 'This Month', value: '$124K', color: 'green' },
                        { label: 'Completion', value: '94%', color: 'orange' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={`p-4 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-xl border border-${stat.color}-200`}
                        >
                          <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Treatment Progress */}
                    <div className="space-y-3">
                      {[
                        { patient: 'Sarah M.', progress: 75, phase: 'Phase 2' },
                        { patient: 'John D.', progress: 45, phase: 'Phase 1' },
                        { patient: 'Emily R.', progress: 90, phase: 'Retention' }
                      ].map((item, i) => (
                        <motion.div
                          key={item.patient}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="relative"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.patient}</span>
                            <span className="text-xs text-purple-600 font-semibold">{item.phase}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <Smile className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold">Specialty Tools</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">All Specialties Covered</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Custom Solutions for Every Specialty
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tailored features and workflows for your specific specialty practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <motion.div
                    key={specialty.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition-all hover:shadow-xl"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Proven Results for Specialty Practices
              </h2>
              <p className="text-xl text-purple-100">
                See the impact on specialty practice efficiency and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-xl text-purple-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-purple-200">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Everything Your Specialty Needs
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From orthodontic treatment tracking to surgical documentation - 
                  we have the specialized tools you need.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Among Specialists</h3>
                <div className="space-y-6">
                  {[
                    { specialty: 'Orthodontists', users: '2,400+', rating: '4.9/5' },
                    { specialty: 'Endodontists', users: '1,200+', rating: '4.8/5' },
                    { specialty: 'Periodontists', users: '980+', rating: '4.9/5' },
                    { specialty: 'Oral Surgeons', users: '850+', rating: '4.8/5' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.specialty}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{item.specialty}</div>
                        <div className="text-sm text-gray-600">{item.users} practices</div>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-semibold text-gray-900">{item.rating}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Growing Fast</div>
                      <div className="text-sm text-gray-600">Join thousands of specialist practices</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Specialty Practice?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  See how DenStack can streamline your specialty workflows
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    View Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

