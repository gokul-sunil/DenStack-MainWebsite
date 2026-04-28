'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  BarChart3,
  PieChart,
  Users,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowRight,
  LineChart,
  Activity,
  Target,
  Star
} from 'lucide-react';
import { ParallaxFeatureGrid } from '@/app/components/shared/ParallaxFeatureGrid';

const features = [
  {
    icon: BarChart3,
    title: 'Production Reports',
    description: 'Track provider productivity, procedures, and revenue generation in real-time',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: DollarSign,
    title: 'Revenue Analytics',
    description: 'Monitor collections, outstanding AR, and revenue trends with detailed breakdowns',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Patient Analytics',
    description: 'Understand patient demographics, retention rates, and lifetime value',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Calendar,
    title: 'Scheduling Insights',
    description: 'Optimize your schedule with appointment analytics and capacity planning',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set and monitor practice goals with automated progress tracking',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: PieChart,
    title: 'Custom Dashboards',
    description: 'Build personalized dashboards with the metrics that matter most',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '10hrs',
    label: 'Saved Monthly',
    description: 'On manual reporting and analysis'
  },
  {
    stat: '360°',
    label: 'Practice View',
    description: 'Complete visibility into operations'
  },
  {
    stat: '50+',
    label: 'KPI Metrics',
    description: 'Pre-built reports and dashboards'
  },
  {
    stat: 'Real-Time',
    label: 'Data Updates',
    description: 'Always current, never outdated'
  }
];

const analyticsCapabilities = [
  'Real-time production dashboards',
  'Collection rate analysis',
  'Treatment acceptance tracking',
  'Patient acquisition & retention',
  'Provider productivity reports',
  'Hygiene department analytics',
  'Procedure code analysis',
  'Insurance claim tracking',
  'Appointment fill rates',
  'Cancellation & no-show trends',
  'Revenue forecasting',
  'Custom report builder'
];

export function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Data-Driven Insights</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Make Smarter Decisions with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Powerful Analytics
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Turn your practice data into actionable insights with real-time dashboards, 
                  comprehensive reports, and predictive analytics.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    See Demo Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    View Reports
                  </Button>
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
                      <h3 className="font-semibold text-gray-900">Practice Dashboard</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-600">Live</span>
                      </div>
                    </div>
                    
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { label: 'Production', value: '$124K', trend: '+12%', color: 'green' },
                        { label: 'Collections', value: '$118K', trend: '+8%', color: 'blue' },
                        { label: 'Patients', value: '1,247', trend: '+5%', color: 'purple' },
                        { label: 'Acceptance', value: '89%', trend: '+3%', color: 'orange' }
                      ].map((kpi, i) => (
                        <motion.div
                          key={kpi.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                        >
                          <div className="text-xs text-gray-600 mb-1">{kpi.label}</div>
                          <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
                            <div className={`text-xs font-semibold text-${kpi.color}-600 bg-${kpi.color}-100 px-2 py-1 rounded`}>
                              {kpi.trend}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mini Chart */}
                    <div className="h-24 flex items-end justify-between space-x-1">
                      {[40, 65, 45, 78, 52, 88, 72, 95, 68, 85, 90, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 1 + i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                        />
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
                    <LineChart className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold">Real-Time</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Comprehensive Analytics</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Complete Visibility Into Your Practice
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Track every metric that matters with powerful analytics tools
              </p>
            </div>

            <ParallaxFeatureGrid features={features} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Analytics That Drive Results
              </h2>
              <p className="text-xl text-blue-100">
                See the impact of data-driven decision making
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
        <section className="relative py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  50+ Pre-Built Reports & Dashboards
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Get instant access to the insights you need with comprehensive 
                  analytics across every aspect of your practice.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {analyticsCapabilities.map((capability, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Reports</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Production by Provider', usage: '95%', color: 'blue' },
                    { name: 'Collection Efficiency', usage: '87%', color: 'green' },
                    { name: 'Treatment Acceptance', usage: '82%', color: 'purple' },
                    { name: 'Patient Retention', usage: '78%', color: 'orange' },
                    { name: 'Schedule Optimization', usage: '71%', color: 'cyan' }
                  ].map((report, i) => (
                    <motion.div
                      key={report.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{report.name}</span>
                        <span className={`text-${report.color}-600 font-bold text-sm`}>{report.usage}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: report.usage }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full bg-gradient-to-r from-${report.color}-500 to-${report.color}-600 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Custom Report Builder</div>
                      <div className="text-sm text-gray-600">Create unlimited custom reports</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to See Your Practice Insights?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Discover what data-driven decision making can do for your practice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    View Sample Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    Book Demo
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
