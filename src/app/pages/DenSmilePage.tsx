'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Smile, Sparkles, Camera, Users, TrendingUp, CheckCircle2, ArrowRight, Star, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Digital Smile Design',
    description: 'Advanced smile analysis and digital design tools for predictable cosmetic outcomes'
  },
  {
    icon: Sparkles,
    title: 'Treatment Simulation',
    description: 'Show patients their future smile with realistic before/after visualizations'
  },
  {
    icon: Users,
    title: 'Patient Engagement',
    description: 'Interactive smile galleries and treatment options that boost case acceptance'
  },
  {
    icon: TrendingUp,
    title: 'Cosmetic Analytics',
    description: 'Track cosmetic case performance, conversion rates, and revenue growth'
  }
];

const smileBenefits = [
  'AI-powered smile analysis and facial aesthetics evaluation',
  'Virtual smile makeover with real-time preview',
  'Cosmetic treatment planning for veneers, bonding, and whitening',
  'Photo management with standardized smile photography protocols',
  'Before/after comparison galleries for patient education',
  'Integrated shade matching and tooth color analysis',
  'Treatment proposal builder with financing options',
  'Patient smile journey tracking and milestone documentation'
];

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    practice: 'Smile Design Studio',
    quote: 'DenSmile transformed how we present cosmetic cases. Our acceptance rate increased by 45%.',
    rating: 5
  },
  {
    name: 'Dr. James Chen',
    practice: 'Premier Aesthetics Dental',
    quote: 'The visualization tools are incredible. Patients can see their future smile before we even start.',
    rating: 5
  },
  {
    name: 'Dr. Emily Rodriguez',
    practice: 'Radiant Smiles Dentistry',
    quote: 'Finally, a comprehensive smile design solution that integrates perfectly with our workflow.',
    rating: 5
  }
];

export function DenSmilePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6 border border-pink-200">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-semibold text-pink-700">Digital Smile Design Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Smiles with{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  DenSmile
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Revolutionize your cosmetic dentistry practice with AI-powered smile design, patient visualization tools, and comprehensive aesthetic treatment planning
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-pink-600" />
                  <span>Award-Winning Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span>5,000+ Happy Practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Smile Transformations
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to design, present, and deliver stunning smile makeovers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comprehensive Benefits */}
        <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                  <Smile className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-semibold text-pink-700">Complete Smile Solution</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need in{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    One Platform
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  DenSmile combines cutting-edge technology with intuitive design to streamline your cosmetic dentistry workflow from consultation to final delivery.
                </p>

                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl">
                  Explore All Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid gap-4"
              >
                {smileBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-pink-300 transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Loved by{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Dental Professionals
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                See what cosmetic dentists are saying about DenSmile
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.practice}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-pink-600 to-purple-600 relative overflow-hidden" style={{ position: 'relative' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Heart className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Smiles?
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Join thousands of dental practices using DenSmile to grow their cosmetic dentistry services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
