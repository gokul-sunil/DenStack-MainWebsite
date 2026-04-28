'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { CheckCircle, Calendar, MessageSquare, Video, CreditCard, Smartphone, Monitor, UserCheck, MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';

const features = [
  {
    icon: Calendar,
    title: 'Built-in Appointment Reminders',
    description: 'Automated SMS and email reminders reduce no-shows and keep your schedule full.',
  },
  {
    icon: MessageSquare,
    title: 'Two-way Patient Texting',
    description: 'Engage patients with secure, HIPAA-compliant text messaging directly from your platform.',
  },
  {
    icon: Calendar,
    title: 'Online Self-service Scheduling',
    description: 'Let patients book, reschedule, and cancel appointments 24/7 from any device.',
  },
  {
    icon: Monitor,
    title: 'Online Forms for Patient Convenience',
    description: 'Digital intake forms patients can complete from home before their appointment.',
  },
  {
    icon: Video,
    title: 'Built-in Teledentistry',
    description: 'Conduct virtual consultations and follow-ups without additional software.',
  },
  {
    icon: UserCheck,
    title: 'Patient Portal for Forms and Payments',
    description: 'Secure portal where patients can access records, complete forms, and make payments.',
  },
  {
    icon: Smartphone,
    title: 'Patient Kiosk for Easy Self Check-in',
    description: 'Streamline front desk operations with tablet-based self check-in solutions.',
  },
  {
    icon: MapPin,
    title: 'Curbside Check-in',
    description: 'Allow patients to check in from their car for added convenience and safety.',
  },
  {
    icon: CreditCard,
    title: 'Online Patient Payments',
    description: 'Accept payments online with flexible options including credit cards and payment plans.',
  },
];

export function PatientExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Patient Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Modern tools that make it easier for patients to interact with your practice—from booking to payment and everything in between.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl shadow-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl">
                View All Features
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
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Why Patient Experience Matters</h2>
              <p className="text-xl text-blue-50 mb-8">
                Today's patients expect convenience and digital-first experiences. Our tools help you meet and exceed those expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Reduce No-Shows</h3>
                    <p className="text-blue-50">Automated reminders cut no-show rates by up to 40%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Improve Satisfaction</h3>
                    <p className="text-blue-50">Self-service options increase patient satisfaction scores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Save Staff Time</h3>
                    <p className="text-blue-50">Reduce phone calls and administrative overhead</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Increase Revenue</h3>
                    <p className="text-blue-50">Online payments improve collection rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Sticky Section */}
        <PlatformFeaturesStickySection />

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Patient Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how our patient experience tools can help you attract and retain more patients.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl shadow-lg">
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
