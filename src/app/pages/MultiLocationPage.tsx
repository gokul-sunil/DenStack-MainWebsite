'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Building2,
  MapPin,
  BarChart3,
  Users,
  Settings,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Star,
  Network,
  Globe,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Centralized Management',
    description: 'Control all locations from a single dashboard with unified reporting',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Cross-Location Analytics',
    description: 'Compare performance, track trends, and benchmark across all locations',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Multi-Provider Support',
    description: 'Manage providers across locations with flexible scheduling and permissions',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Settings,
    title: 'Standardized Workflows',
    description: 'Implement consistent processes and protocols across all practices',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: MapPin,
    title: 'Location-Specific Customization',
    description: 'Maintain brand consistency while allowing location-level flexibility',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Lock,
    title: 'Role-Based Access',
    description: 'Granular permissions for corporate staff, managers, and providers',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '60%',
    label: 'Admin Time Saved',
    description: 'With centralized management'
  },
  {
    stat: '10+',
    label: 'Locations',
    description: 'Average group practice size'
  },
  {
    stat: '100%',
    label: 'Data Visibility',
    description: 'Across all practice locations'
  },
  {
    stat: '$50K+',
    label: 'Annual Savings',
    description: 'Through operational efficiency'
  }
];

const capabilities = [
  'Centralized patient database',
  'Cross-location scheduling',
  'Unified billing & collections',
  'Consolidated reporting',
  'Multi-location inventory',
  'Corporate dashboards',
  'Location performance comparison',
  'Standardized templates & protocols',
  'Group-wide patient communications',
  'Centralized insurance management',
  'Multi-location patient transfers',
  'Corporate branding & customization'
];

export function MultiLocationPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6 border border-blue-200"
                >
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Multi-Location Groups</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Manage Multiple Locations{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Seamlessly
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Centralized control with location-level flexibility. Perfect for dental groups 
                  managing 2-50+ practice locations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    See Pricing
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Enterprise Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Scalable Platform</span>
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
                      <h3 className="font-semibold text-gray-900">Group Overview</h3>
                      <div className="flex items-center space-x-2 text-xs text-green-600 font-semibold px-3 py-1 bg-green-100 rounded-full">
                        <Globe className="w-3 h-3" />
                        <span>12 Locations</span>
                      </div>
                    </div>
                    
                    {/* Location Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { name: 'Downtown', status: 'online', patients: 45 },
                        { name: 'Westside', status: 'online', patients: 38 },
                        { name: 'Eastside', status: 'online', patients: 52 },
                        { name: 'North', status: 'online', patients: 41 },
                        { name: 'South', status: 'online', patients: 36 },
                        { name: 'Suburbs', status: 'online', patients: 29 }
                      ].map((location, i) => (
                        <motion.div
                          key={location.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-900">{location.name}</span>
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                          <div className="text-xs text-gray-600">{location.patients} pts today</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Group Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Total Patients', value: '14.2K', color: 'blue' },
                        { label: 'Monthly Rev', value: '$1.2M', color: 'green' },
                        { label: 'Avg Rating', value: '4.8★', color: 'yellow' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="text-center p-3 bg-gray-50 rounded-xl"
                        >
                          <div className={`text-xl font-bold text-${stat.color}-600`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
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
                    <Network className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold">Connected</span>
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
                Built for Multi-Location Success
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Centralized management tools designed for growing dental groups
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
        <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Multi-Location Performance
              </h2>
              <p className="text-xl text-blue-100">
                Real results from dental groups using DentaCare
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
                  <div className="text-xl text-blue-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-blue-200">{benefit.description}</div>
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
                  Everything You Need to Scale
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From 2 locations to 50+, DentaCare grows with your dental group.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Performance</h3>
                <div className="space-y-4">
                  {[
                    { location: 'Downtown Office', performance: 98, revenue: '$142K' },
                    { location: 'Westside Clinic', performance: 95, revenue: '$128K' },
                    { location: 'Eastside Practice', performance: 92, revenue: '$135K' },
                    { location: 'North Location', performance: 88, revenue: '$118K' },
                    { location: 'South Office', performance: 85, revenue: '$109K' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.location}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-gray-900">{item.location}</span>
                        </div>
                        <span className="text-sm font-bold text-green-600">{item.revenue}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.performance}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Group Average: 92%</div>
                      <div className="text-sm text-gray-600">Above industry benchmark</div>
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
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Unify Your Dental Group?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  See how centralized management can transform your multi-location practice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Schedule Group Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    Contact Sales
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

