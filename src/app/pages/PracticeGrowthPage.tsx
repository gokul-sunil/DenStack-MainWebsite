'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  TrendingUp,
  Bell,
  Phone,
  Mail,
  Star,
  CheckCircle2,
  ArrowRight,
  Building2,
  MessageSquare
} from 'lucide-react';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';

const features = [
  {
    icon: Building2,
    title: 'Powerful Multi-location Scheduling',
    description: 'Manage appointments across multiple locations with unified scheduling, provider coordination, and real-time synchronization.',
    color: 'from-blue-500 to-blue-600',
    benefits: [
      'Centralized schedule management',
      'Cross-location patient booking',
      'Provider availability sync',
      'Waitlist management'
    ]
  },
  {
    icon: Star,
    title: 'Membership Plans',
    description: 'Create and manage in-house membership programs to increase patient loyalty and recurring revenue.',
    color: 'from-purple-500 to-purple-600',
    benefits: [
      'Custom membership tiers',
      'Automated billing',
      'Member discounts & benefits',
      'Retention tracking'
    ]
  },
  {
    icon: Bell,
    title: 'Built-in Patient Notifications',
    description: 'Automated multi-channel notifications keep patients informed and engaged throughout their care journey.',
    color: 'from-green-500 to-green-600',
    benefits: [
      'SMS & email notifications',
      'Appointment confirmations',
      'Treatment reminders',
      'Recall notifications'
    ]
  },
  {
    icon: Phone,
    title: 'AI-Driven Telephony Integrations',
    description: 'Intelligent phone system integration with automatic call logging, routing, and patient identification.',
    color: 'from-orange-500 to-orange-600',
    benefits: [
      'Automatic call logging',
      'Patient identification',
      'Smart call routing',
      'Voicemail transcription'
    ]
  },
  {
    icon: Mail,
    title: 'Text & Email Payment Reminders',
    description: 'Reduce outstanding balances with automated payment reminders and easy payment links.',
    color: 'from-cyan-500 to-cyan-600',
    benefits: [
      'Automated payment reminders',
      'Pay-by-text links',
      'Email payment options',
      'Balance notifications'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Built-in Reputation Management',
    description: 'Monitor and improve your online reputation with automated review requests and feedback management.',
    color: 'from-pink-500 to-pink-600',
    benefits: [
      'Automated review requests',
      'Multi-platform monitoring',
      'Feedback collection',
      'Response management'
    ]
  }
];

const stats = [
  { value: '45%', label: 'Membership Revenue Growth', description: 'Practices with active membership plans' },
  { value: '3.5x', label: 'More Online Reviews', description: 'With automated reputation management' },
  { value: '25%', label: 'Increased Bookings', description: 'Through multi-location optimization' },
  { value: '60%', label: 'Faster Collections', description: 'With payment reminders' }
];

export function PracticeGrowthPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6 border border-green-200">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Practice Growth Features</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your Practice with{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Intelligent Tools
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Powerful features designed to help you scale, attract more patients, 
                and build sustainable recurring revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  See Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-xl transition-all"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Growth-Focused Results
              </h2>
              <p className="text-xl text-green-100">
                See the impact of our practice growth features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xl text-green-100 font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-green-200">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features Sticky Section */}
        <PlatformFeaturesStickySection />

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Accelerate Your Practice Growth?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how these features can transform your practice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl">
                  Book Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
