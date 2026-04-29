'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Smile, Calendar, Image, FileText, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Treatment Timeline Management',
    description: 'Visual treatment planning with progress tracking and milestone alerts'
  },
  {
    icon: Image,
    title: 'Photo Documentation',
    description: 'Before/after photo galleries with automated comparison views'
  },
  {
    icon: FileText,
    title: 'Digital Treatment Plans',
    description: 'Create detailed orthodontic treatment plans with patient education materials'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor treatment progress with automated appointment scheduling'
  }
];

export function OrthodontistsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
                <Smile className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-semibold text-pink-700">For Orthodontists</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Orthodontic Practice{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Comprehensive tools for managing complex orthodontic treatments from start to finish
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
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
                Built for Orthodontic Workflows
              </h2>
              <p className="text-xl text-gray-600">
                Specialized tools designed specifically for orthodontic practices
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
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-pink-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
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
        <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Orthodontic-Specific Features
                </h2>
                <div className="space-y-4">
                  {[
                    'Braces and aligner treatment tracking',
                    'Automated appointment scheduling for adjustments',
                    'Treatment phase management',
                    'Digital impression integration',
                    'Retention protocol tracking',
                    'Multi-patient family management',
                    'Photo timeline for each patient',
                    'Referral source tracking'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-pink-600 mb-2">30%</div>
                    <p className="text-gray-700 font-semibold">Faster Treatment Planning</p>
                    <p className="text-sm text-gray-600 mt-1">Compared to traditional methods</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                    <p className="text-gray-700 font-semibold">Patient Satisfaction</p>
                    <p className="text-sm text-gray-600 mt-1">With progress tracking tools</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-pink-600 mb-2">25%</div>
                    <p className="text-gray-700 font-semibold">More Referrals</p>
                    <p className="text-sm text-gray-600 mt-1">Through better patient communication</p>
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
              Transform Your Orthodontic Practice
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading orthodontists using DenStack
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-xl">
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

