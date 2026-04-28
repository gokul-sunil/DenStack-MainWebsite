'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export function ClinicFinancePayrollPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                  <Calculator className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">Financial Management</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Clinic Finance & Payroll Management
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Complete financial and payroll management system built specifically for dental practices
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl">
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="px-8 py-6 rounded-xl">
                    View Pricing
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Finance & Payroll Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to manage your clinic's finances in one place
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Payroll Processing',
                  description: 'Automated salary calculations and payments'
                },
                {
                  title: 'Expense Tracking',
                  description: 'Monitor and categorize all practice expenses'
                },
                {
                  title: 'Financial Reports',
                  description: 'Real-time insights into your financial health'
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Financial Management?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get started with our comprehensive finance and payroll solution today
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

