'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { FileCheck, FileText, CreditCard, Wallet, CheckCircle, Send, Calendar, Smartphone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';

const features = [
  {
    icon: FileCheck,
    title: 'Centralized Claims Management',
    description: 'Manage all insurance claims from a single dashboard with real-time status tracking.',
  },
  {
    icon: FileText,
    title: 'Electronic Statements',
    description: 'Send patient statements electronically to reduce costs and improve delivery rates.',
  },
  {
    icon: CreditCard,
    title: 'Credit Card Processing & Card-on-file',
    description: 'Secure payment processing with card vault for recurring payments and easy checkout.',
  },
  {
    icon: Wallet,
    title: 'Patient Financing',
    description: 'Integrated financing options help patients afford treatment while you get paid upfront.',
  },
  {
    icon: CheckCircle,
    title: 'Electronic Eligibility Verification',
    description: 'Verify insurance eligibility in real-time before appointments to prevent claim denials.',
  },
  {
    icon: Send,
    title: 'Submit and Auto Post Claims Electronically',
    description: 'Submit claims electronically with automatic posting of EOBs to save time.',
  },
  {
    icon: Calendar,
    title: 'Payment Plans with Auto Debit',
    description: 'Set up custom payment plans with automatic recurring payments for patient convenience.',
  },
  {
    icon: Smartphone,
    title: 'Dental Pay-By-Text',
    description: 'Send payment links via text for instant, frictionless patient payments.',
  },
];

export function RevenueCyclePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
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
              Optimize Your{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Revenue Cycle
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive billing and revenue management tools that accelerate payments and reduce administrative overhead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl shadow-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl">
                See Pricing
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Measurable Revenue Impact</h2>
              <p className="text-xl text-emerald-50">
                See the financial difference our revenue cycle tools make
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold mb-2">35%</div>
                <p className="text-emerald-50">Faster claim payments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold mb-2">92%</div>
                <p className="text-emerald-50">First-pass claim acceptance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold mb-2">28%</div>
                <p className="text-emerald-50">Increase in collections</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold mb-2">60%</div>
                <p className="text-emerald-50">Reduction in AR days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Your Practice</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Reduce Administrative Burden</h4>
                    <p className="text-gray-600">Automation eliminates manual data entry and follow-up</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Improve Cash Flow</h4>
                    <p className="text-gray-600">Get paid faster with electronic claims and patient payments</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Increase Acceptance Rates</h4>
                    <p className="text-gray-600">Clean claims mean fewer denials and rejections</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Your Patients</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Flexible Payment Options</h4>
                    <p className="text-gray-600">Multiple ways to pay including financing and payment plans</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Transparent Billing</h4>
                    <p className="text-gray-600">Clear statements and real-time insurance verification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Convenient Payment Methods</h4>
                    <p className="text-gray-600">Pay online, by text, or set up auto-pay</p>
                  </div>
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
              Ready to Boost Your Revenue?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our revenue cycle management tools can transform your practice finances.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl shadow-lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
