'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, DollarSign, Users, Zap, ArrowRight, Clock } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Startup-friendly pricing with no hidden costs or long-term contracts'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Get up and running in days, not months, with our streamlined onboarding'
  },
  {
    icon: Users,
    title: 'Scalable Solution',
    description: 'Start small and grow without switching systems as your practice expands'
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'Cloud-based platform accessible anywhere, anytime on any device'
  }
];

const features = [
  'Complete practice management system',
  'Patient scheduling and reminders',
  'Digital charting and treatment planning',
  'Integrated billing and claims',
  'HIPAA-compliant data storage',
  'Marketing and patient engagement tools',
  'Free training and support',
  'No hardware required'
];

export function DentalStartupsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Rocket className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-700">For Dental Startups</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Launch Your Practice with{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Everything you need to start and grow your dental practice, all in one affordable platform
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Startups Choose DentaCare
              </h2>
              <p className="text-xl text-gray-600">
                Built specifically for new practices getting off the ground
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need From Day One
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  No need to piece together multiple systems. DentaCare provides your complete practice infrastructure.
                </p>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Startup Success Stats</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">Setup Time</span>
                      <span className="text-2xl font-bold text-orange-600">3 Days</span>
                    </div>
                    <p className="text-sm text-gray-600">Average time from signup to first patient</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">Cost Savings</span>
                      <span className="text-2xl font-bold text-green-600">60%</span>
                    </div>
                    <p className="text-sm text-gray-600">Compared to traditional practice software</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">Patient Growth</span>
                      <span className="text-2xl font-bold text-blue-600">2x</span>
                    </div>
                    <p className="text-sm text-gray-600">Average patient base growth in first year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Launch Your Practice?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of successful dental startups using DentaCare
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

