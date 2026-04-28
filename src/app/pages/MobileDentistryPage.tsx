'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Truck, Wifi, Smartphone, Cloud, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud-Based Access',
    description: 'Access patient records and practice data from anywhere with internet connectivity'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Optimized',
    description: 'Fully responsive interface works perfectly on tablets and mobile devices'
  },
  {
    icon: Wifi,
    title: 'Offline Mode',
    description: 'Continue working even without internet, syncs automatically when connected'
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'Track service locations and manage routes efficiently'
  }
];

export function MobileDentistryPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
                <Truck className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">For Mobile Dentistry</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Practice Management{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  On the Go
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Cloud-based solutions designed specifically for mobile dental practices
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Mobile Practices
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to run your practice from the road
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
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-cyan-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
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
        <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Mobile Practices Love DentaCare
                </h2>
                <div className="space-y-4">
                  {[
                    'Real-time patient data sync across all devices',
                    'Secure HIPAA-compliant cloud storage',
                    'Digital charting and treatment planning',
                    'Mobile payment processing',
                    'Route optimization and scheduling',
                    'Equipment inventory tracking'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-cyan-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">Mobile Dental Vans</h4>
                    <p className="text-sm text-gray-600">Complete practice management on wheels</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">Community Outreach</h4>
                    <p className="text-sm text-gray-600">Serve underserved communities efficiently</p>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">Corporate Programs</h4>
                    <p className="text-sm text-gray-600">On-site dental services for businesses</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">School Programs</h4>
                    <p className="text-sm text-gray-600">Manage multiple school locations</p>
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
              Take Your Practice Mobile
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start serving patients wherever they are
            </p>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
              Get Started Today
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

