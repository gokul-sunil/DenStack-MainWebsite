'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Activity, FileText, Image, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Endodontic Charting',
    description: 'Specialized charting for root canal procedures and retreatments'
  },
  {
    icon: Image,
    title: 'Digital Radiograph Integration',
    description: 'Seamless integration with digital X-ray and apex locator systems'
  },
  {
    icon: Calendar,
    title: 'Treatment Tracking',
    description: 'Track multi-visit procedures with automated appointment scheduling'
  },
  {
    icon: Activity,
    title: 'Referral Management',
    description: 'Efficient communication with referring dentists and specialists'
  }
];

export function EndodontistsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
                <Activity className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-700">For Endodontists</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Endodontic Practice{' '}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Specialized practice management for root canal specialists
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  View Features
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Endodontic Workflows
              </h2>
              <p className="text-xl text-gray-600">
                Specialized tools designed for endodontic specialists
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-teal-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Endodontic-Specific Features
                </h2>
                <div className="space-y-4">
                  {[
                    'Root canal treatment documentation',
                    'Retreatment case tracking',
                    'Apicoectomy procedure notes',
                    'Canal anatomy documentation',
                    'Working length measurements',
                    'File sequence tracking',
                    'Post-operative instructions',
                    'Referral letter automation'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Practice Success</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
                    <div className="text-4xl font-bold text-teal-600 mb-2">45%</div>
                    <p className="text-gray-700 font-semibold">Faster Documentation</p>
                    <p className="text-sm text-gray-600 mt-1">With automated templates</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                    <p className="text-gray-700 font-semibold">Referral Satisfaction</p>
                    <p className="text-sm text-gray-600 mt-1">With communication tools</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
                    <div className="text-4xl font-bold text-teal-600 mb-2">30%</div>
                    <p className="text-gray-700 font-semibold">More Efficiency</p>
                    <p className="text-sm text-gray-600 mt-1">Multi-visit case management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Endodontic Practice
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading endodontists using DenStack
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl">
              Start Free Trial
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

