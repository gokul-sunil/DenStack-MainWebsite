'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Star
} from 'lucide-react';

const caseStudies = [
  {
    company: 'Martinez Dental Group',
    location: 'Austin, TX',
    type: 'Multi-Location Practice',
    logo: 'MDG',
    color: 'from-blue-500 to-blue-600',
    image: '#3b82f6',
    challenge: 'Managing 5 locations with disconnected systems led to data silos, scheduling conflicts, and revenue leakage.',
    solution: 'Implemented DenStack across all locations with centralized management, unified scheduling, and integrated billing.',
    results: [
      { metric: '35%', label: 'Revenue Increase', description: 'First year growth' },
      { metric: '60%', label: 'Admin Time Saved', description: 'Through automation' },
      { metric: '40%', label: 'Fewer No-Shows', description: 'With automated reminders' },
      { metric: '98%', label: 'Patient Satisfaction', description: 'Net promoter score' }
    ],
    testimonial: {
      quote: 'DenStack transformed our operations. We went from managing chaos to having complete visibility and control across all our locations.',
      author: 'Dr. Sarah Martinez',
      role: 'Owner & Lead Dentist'
    },
    implementation: '3 months',
    roi: '6 months',
    featured: true
  },
  {
    company: 'Pacific Orthodontics',
    location: 'Seattle, WA',
    type: 'Specialty Practice',
    logo: 'PO',
    color: 'from-purple-500 to-purple-600',
    image: '#8b5cf6',
    challenge: 'Manual treatment tracking and patient communication led to inefficiencies and lower case acceptance rates.',
    solution: 'Deployed specialty-specific workflows with automated treatment progress tracking and patient engagement tools.',
    results: [
      { metric: '45%', label: 'Higher Acceptance', description: 'Treatment plan acceptance' },
      { metric: '50%', label: 'Faster Check-In', description: 'Digital intake forms' },
      { metric: '30%', label: 'More Referrals', description: 'Patient referral increase' },
      { metric: '4.9★', label: 'Rating', description: 'Online reviews' }
    ],
    testimonial: {
      quote: 'The specialty-focused features have been game-changing. Our patients love the progress tracking and we have seen treatment acceptance soar.',
      author: 'Dr. Michael Chen',
      role: 'Board Certified Orthodontist'
    },
    implementation: '6 weeks',
    roi: '4 months',
    featured: false
  },
  {
    company: 'Bright Smiles DSO',
    location: 'Nationwide',
    type: 'Dental Service Organization',
    logo: 'BS',
    color: 'from-green-500 to-green-600',
    image: '#10b981',
    challenge: 'Inconsistent processes across 50+ locations created compliance risks and prevented data-driven decision making.',
    solution: 'Enterprise deployment with standardized workflows, centralized analytics, and role-based access control.',
    results: [
      { metric: '$2.4M', label: 'Annual Savings', description: 'Operational efficiency' },
      { metric: '100%', label: 'Compliance', description: 'HIPAA & SOC 2' },
      { metric: '75%', label: 'Faster Reporting', description: 'Real-time dashboards' },
      { metric: '50+', label: 'Locations', description: 'Unified platform' }
    ],
    testimonial: {
      quote: 'DenStack gave us the enterprise-grade infrastructure we needed to scale efficiently while maintaining quality across all locations.',
      author: 'James Williams',
      role: 'Chief Operations Officer'
    },
    implementation: '6 months',
    roi: '8 months',
    featured: true
  }
];

export function CaseStudiesPage() {
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
                Customer Success Stories
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Real Results from Real Practices
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how dental practices of all sizes are using DenStack to transform 
                their operations and grow their business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative ${study.featured ? 'lg:-mx-12' : ''}`}
                >
                  {study.featured && (
                    <div className="absolute -top-4 left-8 z-10">
                      <div className="flex items-center space-x-2 px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Featured Case Study</span>
                      </div>
                    </div>
                  )}

                  <div className={`bg-white rounded-2xl border-2 overflow-hidden ${
                    study.featured ? 'border-blue-300 shadow-2xl' : 'border-gray-200 shadow-lg'
                  }`}>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column - Company Info */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                            {study.logo}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{study.company}</h2>
                            <p className="text-gray-600">{study.location}</p>
                          </div>
                        </div>

                        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
                          {study.type}
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">The Challenge</h3>
                            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                              <Clock className="w-5 h-5 text-blue-600 mb-2" />
                              <div className="text-sm text-gray-600">Implementation</div>
                              <div className="font-bold text-gray-900">{study.implementation}</div>
                            </div>
                            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                              <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
                              <div className="text-sm text-gray-600">ROI Timeline</div>
                              <div className="font-bold text-gray-900">{study.roi}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Results */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Results</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {study.results.map((result, i) => (
                            <motion.div
                              key={result.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-white p-6 rounded-xl shadow-md text-center"
                            >
                              <div className="text-4xl font-bold text-blue-600 mb-2">
                                {result.metric}
                              </div>
                              <div className="font-semibold text-gray-900 mb-1">
                                {result.label}
                              </div>
                              <div className="text-sm text-gray-600">
                                {result.description}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Users className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 italic leading-relaxed mb-3">
                                "{study.testimonial.quote}"
                              </p>
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {study.testimonial.author}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {study.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Trusted by Thousands of Practices
              </h2>
              <p className="text-xl text-blue-100">
                Join the growing community of successful dental practices
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '10,000+', label: 'Practices Using DenStack' },
                { value: '35%', label: 'Average Revenue Increase' },
                { value: '4.9/5', label: 'Customer Satisfaction' },
                { value: '99.9%', label: 'Platform Uptime' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how DenSack can transform your practice like it has for thousands of others
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  Download Full Case Studies
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

