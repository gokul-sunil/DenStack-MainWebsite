'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  FileText,
  Download,
  Star,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Zap
} from 'lucide-react';

const whitepapers = [
  {
    title: 'The Complete Guide to Dental Practice Revenue Optimization',
    description: 'Learn proven strategies to maximize collections, reduce overhead, and increase profitability in your dental practice.',
    pages: '24 pages',
    category: 'Revenue Growth',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    highlights: [
      'Revenue cycle management best practices',
      'Patient payment optimization strategies',
      'Insurance claim efficiency tips',
      'ROI calculation frameworks'
    ],
    featured: true
  },
  {
    title: 'HIPAA Compliance in Modern Dental Practices',
    description: 'Everything you need to know about maintaining HIPAA compliance with digital practice management systems.',
    pages: '18 pages',
    category: 'Compliance & Security',
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    highlights: [
      'HIPAA requirements overview',
      'Digital security best practices',
      'Staff training guidelines',
      'Compliance audit checklist'
    ],
    featured: false
  },
  {
    title: 'Building a Patient-First Dental Practice',
    description: 'Discover how to create exceptional patient experiences that drive loyalty, referrals, and practice growth.',
    pages: '20 pages',
    category: 'Patient Experience',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    highlights: [
      'Patient journey mapping',
      'Communication strategies',
      'Technology for engagement',
      'Measuring patient satisfaction'
    ],
    featured: false
  },
  {
    title: 'Data-Driven Decisions: Analytics for Dental Practices',
    description: 'Harness the power of practice analytics to make informed decisions and improve operational efficiency.',
    pages: '22 pages',
    category: 'Analytics',
    icon: BarChart3,
    color: 'from-cyan-500 to-cyan-600',
    highlights: [
      'Key performance indicators (KPIs)',
      'Dashboard setup and usage',
      'Predictive analytics applications',
      'ROI measurement strategies'
    ],
    featured: true
  },
  {
    title: 'AI and Automation in Dental Practices',
    description: 'Explore how artificial intelligence and automation are transforming dental practice management.',
    pages: '16 pages',
    category: 'Technology',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    highlights: [
      'AI use cases in dentistry',
      'Automation opportunities',
      'Implementation roadmap',
      'Future trends and predictions'
    ],
    featured: false
  },
  {
    title: 'Scaling Your Dental Practice: A Growth Guide',
    description: 'Strategic insights for expanding from a single location to a multi-location dental group.',
    pages: '26 pages',
    category: 'Practice Growth',
    icon: TrendingUp,
    color: 'from-pink-500 to-pink-600',
    highlights: [
      'Growth readiness assessment',
      'Multi-location management',
      'Standardization strategies',
      'Technology infrastructure'
    ],
    featured: false
  }
];

export function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Industry Insights
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Expert Whitepapers & Guides
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth research, industry insights, and practical guides to help you 
                optimize your dental practice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => {
                const Icon = paper.icon;
                return (
                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all ${
                      paper.featured ? 'border-blue-300 shadow-xl' : 'border-gray-200 shadow-lg'
                    }`}
                  >
                    {paper.featured && (
                      <div className="absolute -top-3 -right-3">
                        <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${paper.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-2">
                          {paper.category}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                          {paper.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {paper.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Inside:</h4>
                      <ul className="space-y-2">
                        {paper.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start space-x-2 text-sm text-gray-700">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-green-600 rounded-full" />
                            </div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FileText className="w-4 h-4" />
                        <span>{paper.pages}</span>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Free Resources to Help You Succeed
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                All our whitepapers are completely free. No email required, no strings attached.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-blue-100">Pages of Content</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Expert</div>
                  <div className="text-blue-100">Industry Insights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Actionable</div>
                  <div className="text-blue-100">Strategies & Tips</div>
                </div>
              </div>
            </motion.div>
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
                Want to See These Strategies in Action?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Book a demo to see how DenStack brings these best practices to life
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Schedule Your Demo
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

