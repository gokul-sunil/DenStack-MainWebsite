'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Baby, Smile, Gift, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Baby,
    title: 'Child-Friendly Interface',
    description: 'Colorful, engaging interfaces designed for young patients'
  },
  {
    icon: Gift,
    title: 'Behavior Management',
    description: 'Track rewards, stickers, and positive reinforcement programs'
  },
  {
    icon: Heart,
    title: 'Parent Communication',
    description: 'Enhanced tools for communicating with parents and guardians'
  },
  {
    icon: Smile,
    title: 'Growth Tracking',
    description: 'Monitor dental development and eruption patterns'
  }
];

export function PediatricDentistsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
                <Baby className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-700">For Pediatric Dentists</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Pediatric Practice{' '}
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Kid-friendly tools designed specifically for pediatric dental practices
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
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
                Made for Kids & Parents
              </h2>
              <p className="text-xl text-gray-600">
                Specialized features for pediatric dental care
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
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-yellow-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
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
        <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Pediatric-Specific Features
                </h2>
                <div className="space-y-4">
                  {[
                    'Age-appropriate patient education materials',
                    'Tooth eruption tracking and charts',
                    'Behavior assessment tools',
                    'Parent portal with growth information',
                    'Fluoride varnish tracking',
                    'Early orthodontic screening',
                    'Recall management for kids',
                    'Rewards and incentive programs'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Happy Patients</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">92%</div>
                    <p className="text-gray-700 font-semibold">Parent Satisfaction</p>
                    <p className="text-sm text-gray-600 mt-1">With communication tools</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                    <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
                    <p className="text-gray-700 font-semibold">Less Anxiety</p>
                    <p className="text-sm text-gray-600 mt-1">With child-friendly features</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">85%</div>
                    <p className="text-gray-700 font-semibold">Recall Success</p>
                    <p className="text-sm text-gray-600 mt-1">Automated parent reminders</p>
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
              Transform Your Pediatric Practice
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Make dental visits fun for kids and easy for parents
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg rounded-xl">
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

