'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Heart, Activity, FileText, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Periodontal Charting',
    description: 'Advanced perio charting with automated probing depth tracking'
  },
  {
    icon: FileText,
    title: 'Treatment Documentation',
    description: 'Comprehensive documentation for scaling, root planing, and surgical procedures'
  },
  {
    icon: TrendingUp,
    title: 'Progress Monitoring',
    description: 'Track tissue health improvements over time with visual comparisons'
  },
  {
    icon: Heart,
    title: 'Maintenance Scheduling',
    description: 'Automated recall for perio maintenance appointments'
  }
];

export function PeriodontistsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-rose-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 rounded-full mb-6">
                <Heart className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700">For Periodontists</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Periodontal Practice{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Specialized tools for comprehensive periodontal care and practice growth
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
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
                Built for Periodontal Workflows
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive tools designed for periodontal specialists
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
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-red-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
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
        <section className="py-24 bg-gradient-to-br from-red-50 to-rose-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Periodontal-Specific Features
                </h2>
                <div className="space-y-4">
                  {[
                    'Comprehensive perio charting with PSR',
                    'Pocket depth and recession tracking',
                    'Mobility and furcation documentation',
                    'Laser therapy documentation',
                    'Bone loss monitoring',
                    'Maintenance interval tracking',
                    'Referral communication tools',
                    'Before/after photo comparison'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Practice Outcomes</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl">
                    <div className="text-4xl font-bold text-red-600 mb-2">35%</div>
                    <p className="text-gray-700 font-semibold">Better Compliance</p>
                    <p className="text-sm text-gray-600 mt-1">With maintenance recalls</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl">
                    <div className="text-4xl font-bold text-rose-600 mb-2">90%</div>
                    <p className="text-gray-700 font-semibold">Chart Completion</p>
                    <p className="text-sm text-gray-600 mt-1">Improved documentation</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl">
                    <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                    <p className="text-gray-700 font-semibold">Time Savings</p>
                    <p className="text-sm text-gray-600 mt-1">On charting procedures</p>
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
              Elevate Your Periodontal Practice
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading periodontists using DenStack
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl">
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

