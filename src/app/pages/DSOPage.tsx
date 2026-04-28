'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Building,
  Database,
  Shield,
  BarChart3,
  Users,
  Settings,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  Star,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Enterprise Data Platform',
    description: 'Centralized data warehouse with real-time synchronization across all locations',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics Suite',
    description: 'Executive dashboards, predictive analytics, and comprehensive KPI tracking',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with advanced encryption and audit trails',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Multi-Entity Management',
    description: 'Manage hundreds of locations, thousands of providers with hierarchical control',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Settings,
    title: 'Custom Workflows',
    description: 'Build and deploy standardized processes across your entire organization',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Lock,
    title: 'Advanced Permissions',
    description: 'Granular role-based access control for corporate, regional, and location staff',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '100+',
    label: 'Locations Supported',
    description: 'Enterprise-scale infrastructure'
  },
  {
    stat: '99.9%',
    label: 'Uptime SLA',
    description: 'Mission-critical reliability'
  },
  {
    stat: '40%',
    label: 'Cost Reduction',
    description: 'Through operational efficiency'
  },
  {
    stat: '24/7',
    label: 'Enterprise Support',
    description: 'Dedicated success team'
  }
];

const capabilities = [
  'Unlimited locations & providers',
  'Enterprise data warehouse',
  'Custom reporting & BI tools',
  'API access & integrations',
  'White-label capabilities',
  'Multi-brand support',
  'Advanced security & compliance',
  'Dedicated account management',
  'Custom onboarding & training',
  'Priority support (24/7)',
  'SLA guarantees',
  'Disaster recovery & backup'
];

export function DSOPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30"
                >
                  <Building className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-semibold text-blue-100">Enterprise DSO Solution</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Enterprise Platform for{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Dental Service Organizations
                  </span>
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Scalable infrastructure built for DSOs managing 50-1000+ locations. 
                  Enterprise-grade security, analytics, and support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/20">
                    Request Enterprise Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-600/20 px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
                    View Case Studies
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-blue-100">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-blue-100">99.9% SLA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-blue-100">24/7 Support</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white">Enterprise Dashboard</h3>
                      <div className="flex items-center space-x-2 text-xs text-cyan-300 font-semibold px-3 py-1 bg-cyan-600/20 rounded-full border border-cyan-400/30">
                        <Globe className="w-3 h-3" />
                        <span>247 Locations</span>
                      </div>
                    </div>
                    
                    {/* Enterprise Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { label: 'Monthly Revenue', value: '$24.8M', trend: '+12%', color: 'green' },
                        { label: 'Total Patients', value: '487K', trend: '+8%', color: 'blue' },
                        { label: 'Locations Active', value: '247', trend: '+5', color: 'purple' },
                        { label: 'Providers', value: '1,240', trend: '+32', color: 'orange' }
                      ].map((metric, i) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                        >
                          <div className="text-xs text-blue-200 mb-1">{metric.label}</div>
                          <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold text-white">{metric.value}</div>
                            <div className={`text-xs font-semibold text-${metric.color}-400 bg-${metric.color}-600/20 px-2 py-1 rounded`}>
                              {metric.trend}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Regional Performance */}
                    <div className="space-y-2">
                      {[
                        { region: 'Northeast', locations: 84, performance: 96 },
                        { region: 'Southeast', locations: 67, performance: 94 },
                        { region: 'Midwest', locations: 53, performance: 92 },
                        { region: 'West', locations: 43, performance: 95 }
                      ].map((region, i) => (
                        <motion.div
                          key={region.region}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{region.region}</div>
                            <div className="text-xs text-blue-200">{region.locations} locations</div>
                          </div>
                          <div className="text-sm font-bold text-green-400">{region.performance}%</div>
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
                    <Database className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold">Real-Time</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Enterprise Features</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Built for Enterprise-Scale DSOs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mission-critical infrastructure with enterprise-grade security and support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Enterprise-Grade Performance
              </h2>
              <p className="text-xl text-blue-200">
                Trusted by leading DSOs across North America
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
                  <div className="text-xl text-blue-200 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-blue-300">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Enterprise Suite
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Everything a large DSO needs to operate efficiently at scale with 
                  enterprise-grade reliability and support.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{capability}</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Support</h3>
                <div className="space-y-6">
                  {[
                    { 
                      tier: 'Dedicated Success Team',
                      desc: 'Named account manager & CSM',
                      icon: Users
                    },
                    { 
                      tier: '24/7 Priority Support',
                      desc: '<15 min response time',
                      icon: Zap
                    },
                    { 
                      tier: 'Custom Onboarding',
                      desc: 'Tailored training & implementation',
                      icon: Settings
                    },
                    { 
                      tier: 'Quarterly Business Reviews',
                      desc: 'Strategic planning sessions',
                      icon: TrendingUp
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.tier}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.tier}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">99.9% Uptime SLA</div>
                      <div className="text-sm text-gray-600">Mission-critical reliability guarantee</div>
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
              className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for Enterprise-Scale Growth?
                </h2>
                <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                  Connect with our enterprise team to see how DentaCare can power your DSO
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl font-semibold">
                    Contact Enterprise Sales
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-600/20 px-8 py-6 text-lg rounded-xl font-semibold backdrop-blur-sm">
                    Download Brochure
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

