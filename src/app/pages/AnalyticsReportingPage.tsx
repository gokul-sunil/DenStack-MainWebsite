'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { BarChart3, TestTube, Wifi, Wrench, UserPlus } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';

const features = [
  {
    icon: BarChart3,
    title: 'Configurable Reports & Dashboards',
    description: 'Create custom reports and dashboards tailored to your practice\'s specific metrics and KPIs.',
  },
  {
    icon: TestTube,
    title: 'Lab Case Management',
    description: 'Track lab cases from submission to delivery with complete visibility and communication.',
  },
  {
    icon: Wifi,
    title: 'Remote Access',
    description: 'Access your practice data and reports securely from anywhere, on any device.',
  },
  {
    icon: Wrench,
    title: 'Implant Tracker',
    description: 'Comprehensive implant tracking system for warranty management and patient outcomes.',
  },
  {
    icon: UserPlus,
    title: 'Patient Referral Management',
    description: 'Track and analyze referral sources to optimize your marketing and growth strategies.',
  },
];

export function AnalyticsReportingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Data-Driven{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Analytics & Reporting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform data into actionable insights with powerful analytics and customizable reporting tools.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl shadow-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl">
                Explore Reports
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Track What Matters Most
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our analytics platform gives you instant visibility into the metrics that drive practice success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-indigo-100">Pre-built Reports</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <div className="text-5xl font-bold mb-2">Real-time</div>
              <p className="text-purple-100">Data Updates</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-pink-100">Remote Access</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <div className="text-5xl font-bold mb-2">Custom</div>
              <p className="text-red-100">Dashboards</p>
            </div>
          </div>
        </section>

        {/* Report Categories */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Reports</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  <span>Daily Production Summary</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  <span>Provider Performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  <span>Treatment Acceptance Rates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  <span>Production by Procedure</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Reports</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Accounts Receivable Aging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Collections Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Insurance Claims Status</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Payment Plan Tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Reports</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                  <span>Schedule Efficiency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                  <span>Patient Retention Metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                  <span>Referral Source Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                  <span>No-Show & Cancellation Rates</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform Features Sticky Section */}
        <PlatformFeaturesStickySection />

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Make Smarter Decisions with Better Data
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how our analytics and reporting tools can help you optimize every aspect of your practice.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl shadow-lg">
              Schedule Your Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
