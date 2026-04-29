'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Handshake,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Award,
  Target,
  DollarSign
} from 'lucide-react';

const partnerTypes = [
  {
    icon: Handshake,
    title: 'Technology Partners',
    description: 'Integrate your dental technology with DenStack to provide seamless workflows for practices.',
    color: 'from-blue-500 to-blue-600',
    benefits: [
      'Access to 10,000+ dental practices',
      'Co-marketing opportunities',
      'Technical integration support',
      'Revenue sharing program'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Reseller Partners',
    description: 'Become an authorized reseller and help dental practices in your region adopt DenStack.',
    color: 'from-green-500 to-green-600',
    benefits: [
      'Competitive margins and incentives',
      'Sales and marketing support',
      'Training and certification',
      'Dedicated partner portal'
    ]
  },
  {
    icon: Users,
    title: 'Referral Partners',
    description: 'Refer dental practices to DenStack and earn commission on every successful sale.',
    color: 'from-purple-500 to-purple-600',
    benefits: [
      '15-20% commission on sales',
      'No technical requirements',
      'Marketing materials provided',
      'Monthly payouts'
    ]
  }
];

const existingPartners = [
  { name: 'Dexis Imaging', category: 'Digital Imaging', logo: 'DX' },
  { name: 'Schick Technologies', category: 'Sensors & Software', logo: 'ST' },
  { name: 'Carestream Dental', category: 'Imaging Solutions', logo: 'CD' },
  { name: 'Henry Schein', category: 'Dental Supplies', logo: 'HS' },
  { name: 'Patterson Dental', category: 'Equipment & Supplies', logo: 'PD' },
  { name: 'Benco Dental', category: 'Distribution', logo: 'BD' },
  { name: 'Invisalign', category: 'Clear Aligners', logo: 'IV' },
  { name: 'DentalXChange', category: 'Insurance Claims', logo: 'DX' }
];

const partnerBenefits = [
  {
    icon: Target,
    title: 'Market Access',
    description: 'Reach thousands of dental practices actively looking for solutions'
  },
  {
    icon: Zap,
    title: 'Technical Support',
    description: 'Dedicated integration team to help you build and maintain connections'
  },
  {
    icon: DollarSign,
    title: 'Revenue Growth',
    description: 'New revenue streams through our partner program'
  },
  {
    icon: Award,
    title: 'Co-Marketing',
    description: 'Joint marketing campaigns and success stories'
  }
];

export function PartnersPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Partnership Opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Partner with DenStack
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join our ecosystem of technology providers, resellers, and referral partners 
                helping dental practices succeed.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Partnership Programs
              </h2>
              <p className="text-xl text-gray-600">
                Choose the partnership model that fits your business
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {type.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Partner with DenStack?
              </h2>
              <p className="text-xl text-gray-600">
                Join a thriving ecosystem serving thousands of dental practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Existing Partners */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Partner Ecosystem
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by leading dental technology and services companies
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {existingPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{partner.logo}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50+', label: 'Technology Partners' },
                { value: '200+', label: 'Reseller Partners' },
                { value: '10,000+', label: 'Practices Served' },
                { value: '$5M+', label: 'Partner Revenue Generated' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
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
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's explore how we can grow together and serve dental practices better
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                  Apply to Partner Program
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  Download Partner Guide
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

