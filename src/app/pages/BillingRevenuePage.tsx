'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  DollarSign,
  CreditCard,
  TrendingUp,
  FileCheck,
  Repeat,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Wallet,
  BarChart,
  Calculator,
  Star,
  Users,
  Clock,
  FileSpreadsheet,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept all payment types with integrated credit card, ACH, and digital wallets',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FileCheck,
    title: 'Insurance Management',
    description: 'Automated eligibility verification, claims submission, and tracking',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Repeat,
    title: 'Payment Plans',
    description: 'Flexible financing options with automated recurring payments',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    description: 'Real-time dashboards to track production, collection, and revenue trends',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Calculator,
    title: 'Treatment Estimates',
    description: 'Generate accurate estimates with insurance breakdown and patient portion',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Wallet,
    title: 'Outstanding AR',
    description: 'Manage accounts receivable with automated reminders and collection tools',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '23%',
    label: 'Revenue Increase',
    description: 'Average first-year revenue growth'
  },
  {
    stat: '45%',
    label: 'Faster Payments',
    description: 'With automated payment processing'
  },
  {
    stat: '97%',
    label: 'Collection Rate',
    description: 'Industry-leading collection efficiency'
  },
  {
    stat: '$15K+',
    label: 'Monthly Savings',
    description: 'Reduced overhead and inefficiencies'
  }
];

const capabilities = [
  'Automated insurance verification',
  'Electronic claims submission',
  'ERA/EOB processing',
  'Payment plan creation & management',
  'Credit card & ACH processing',
  'Text-to-pay & online payments',
  'Automated payment reminders',
  'Production vs. collection reports',
  'Aging reports & AR management',
  'Revenue cycle analytics',
  'Treatment acceptance tracking',
  'Fee schedule management'
];

export function BillingRevenuePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6 border border-green-200"
                >
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Revenue Optimization</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Maximize Revenue &{' '}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Streamline Billing
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Complete revenue cycle management with automated billing, payment processing, 
                  and insurance claims - all in one platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    See ROI Calculator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    View Features
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
                      <h3 className="font-semibold text-gray-900">Revenue Dashboard</h3>
                      <div className="text-xs text-green-600 font-semibold px-3 py-1 bg-green-100 rounded-full">
                        ↑ 23% vs last month
                      </div>
                    </div>
                    
                    {/* Revenue Chart */}
                    <div className="h-40 flex items-end justify-between space-x-2 mb-6">
                      {[65, 45, 78, 52, 88, 72, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg relative group"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              ${(height * 100).toFixed(0)}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Production', value: '$42.5K', color: 'green' },
                        { label: 'Collections', value: '$38.2K', color: 'blue' },
                        { label: 'Outstanding', value: '$4.3K', color: 'orange' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className="text-center p-3 bg-gray-50 rounded-xl"
                        >
                          <div className={`text-2xl font-bold text-${stat.color}-600`}>
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
                    <TrendingUp className="w-5 h-5 text-green-600" />
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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Complete Solution</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need to Maximize Revenue
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end billing and revenue cycle management tools
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
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 transition-all hover:shadow-xl"
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
        <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Proven Revenue Growth
              </h2>
              <p className="text-xl text-green-100">
                See the financial impact on practices using DenStack
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
                  <div className="text-xl text-green-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-green-200">{benefit.description}</div>
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
                  Complete Revenue Cycle Management
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From insurance verification to payment collection - streamline every 
                  step of your revenue cycle.
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
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Options</h3>
                <div className="space-y-6">
                  {[
                    { icon: CreditCard, title: 'Credit Cards', desc: 'Visa, MasterCard, Amex, Discover' },
                    { icon: BarChart, title: 'ACH/Bank Transfer', desc: 'Direct bank payments' },
                    { icon: Wallet, title: 'Digital Wallets', desc: 'Apple Pay, Google Pay' },
                    { icon: Repeat, title: 'Payment Plans', desc: 'Flexible financing options' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <PieChart className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Low Processing Fees</div>
                      <div className="text-sm text-gray-600">Industry-competitive rates starting at 2.5%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Payroll Management Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
              >
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Payroll & HR Management</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Clinic Finance & Payroll Management
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Streamline employee compensation, time tracking, and HR compliance with integrated payroll solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: 'Employee Management',
                  description: 'Centralized database for employee records, roles, and permissions',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: Clock,
                  title: 'Time & Attendance',
                  description: 'Track hours worked, overtime, PTO, and schedule management',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  icon: DollarSign,
                  title: 'Payroll Processing',
                  description: 'Automated salary calculations, deductions, and direct deposits',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: FileSpreadsheet,
                  title: 'Tax Compliance',
                  description: 'Automated tax calculations, W-2/1099 generation, and filing',
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl"
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

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Compliance & Reporting</h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Automated federal & state tax calculations',
                    'FLSA overtime compliance tracking',
                    'Benefits administration & deductions',
                    'Quarterly tax reports & filings',
                    'Year-end tax form generation (W-2, 1099)',
                    'Payroll journals & general ledger integration',
                    'Workers compensation tracking',
                    'Multi-state payroll support'
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Financial Integration</h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Real-time payroll expense tracking',
                    'Automated GL posting & reconciliation',
                    'Labor cost analytics by department',
                    'Budget vs. actual labor cost reports',
                    'Direct deposit & pay card options',
                    'Garnishment & child support handling',
                    'Reimbursement & bonus processing',
                    'Commission & incentive calculations'
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Simplify Payroll with Automated Processing
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Save 15+ hours per month on payroll processing with automated calculations, tax filings, and compliance reporting
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { stat: '98%', label: 'Accuracy Rate' },
                  { stat: '15hrs', label: 'Time Saved/Month' },
                  { stat: '$2K+', label: 'Cost Savings/Year' }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <div className="text-4xl font-bold text-white mb-2">{item.stat}</div>
                    <div className="text-purple-100">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Increase Your Revenue?
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  See how much you could save and earn with DenStack
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Calculate ROI
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
