'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  TrendingUp,
  Users,
  Stethoscope,
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Calendar,
  Bell,
  MessageSquare,
  CreditCard,
  FileText,
  Shield
} from 'lucide-react';
import { PlatformFeaturesSection } from '@/app/components/home/PlatformFeaturesSection';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';
import { PlatformFeaturesCarousel } from '@/app/components/home/PlatformFeaturesCarousel';

export function FeaturesOverviewPage() {
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
                Complete Feature Suite
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Everything You Need to Run a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Modern Practice
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive features across practice growth, patient experience, clinical workflows, 
                revenue management, and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  View Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features Section */}
        <PlatformFeaturesSection />

        {/* Platform Features Sticky Section */}
        <PlatformFeaturesStickySection />

        {/* Platform Features Carousel */}
        <PlatformFeaturesCarousel />

        {/* Revenue Management Section */}
        <section className="relative py-20 bg-white">
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="relative bg-[#f5f6f7] rounded-[24px] p-12 border border-[#e5e7eb]">
              <div className="relative grid lg:grid-cols-[32%_68%] gap-12 items-center">
                {/* Left Content */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-[16px] flex items-center justify-center mb-6 shadow-lg">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-[32px] font-bold text-[#0B1220] mb-4 leading-tight">
                      Revenue Management
                    </h2>
                    <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                      Streamline billing, collections, and payment processing. Automated claims and smart billing ensure you get paid faster.
                    </p>
                    <Button className="bg-[#4CAF50] hover:bg-[#43A047] text-white px-6 py-3 rounded-[10px] font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Visual - Features Grid */}
                <div className="relative">
                  <div className="relative grid md:grid-cols-2 gap-4">
                    {[
                      { icon: DollarSign, title: 'Automated Claims Processing', desc: 'Submit and track claims electronically' },
                      { icon: CreditCard, title: 'Payment Plans & Financing', desc: 'Flexible payment options for patients' },
                      { icon: TrendingUp, title: 'Collections Management', desc: 'Automated follow-ups and reminders' },
                      { icon: FileText, title: 'EOB Reconciliation', desc: 'Match payments with claims instantly' },
                      { icon: CheckCircle2, title: 'Smart Billing Engine', desc: 'Intelligent billing automation' },
                      { icon: CreditCard, title: 'Stripe & Square Integration', desc: 'Seamless payment processing' },
                      { icon: BarChart3, title: 'Aging Reports', desc: 'Track outstanding payments' },
                      { icon: DollarSign, title: 'Bulk Payment Processing', desc: 'Process multiple payments at once' }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative bg-white rounded-[16px] p-6 border border-[#e5e7eb] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-[10px] flex items-center justify-center mb-4">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1220] mb-2">{feature.title}</h3>
                        <p className="text-[13px] text-[#64748B]">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Workflows Section */}
        <section className="relative py-20 bg-[#f5f6f7]">
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="relative bg-white rounded-[24px] p-12 border border-[#e5e7eb]">
              <div className="relative grid lg:grid-cols-[32%_68%] gap-12 items-center">
                {/* Left Content */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-[16px] flex items-center justify-center mb-6 shadow-lg">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-[32px] font-bold text-[#0B1220] mb-4 leading-tight">
                      Clinical Workflows
                    </h2>
                    <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                      Comprehensive clinical tools for digital charting, imaging, and e-prescriptions. Built for modern dental practices.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-[10px] font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Visual - Features Grid */}
                <div className="relative">
                  <div className="relative grid md:grid-cols-2 gap-4">
                    {[
                      { icon: FileText, title: 'Treatment Planning', desc: 'E-signatures for treatment plans' },
                      { icon: CheckCircle2, title: 'Clinical Charting', desc: 'General and perio charting tools' },
                      { icon: FileText, title: 'Electronic Prescriptions', desc: 'Digital prescription management' },
                      { icon: Shield, title: 'HIPAA Compliant', desc: 'Secure patient data protection' },
                      { icon: FileText, title: 'Clinical Notes', desc: 'Templates for efficient documentation' },
                      { icon: Calendar, title: 'Digital Imaging', desc: 'Seamless imaging integrations' },
                      { icon: Stethoscope, title: 'Periodontal Charting', desc: 'Comprehensive perio tracking' },
                      { icon: Shield, title: 'Always-On Backups', desc: 'Automatic data protection' }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative bg-[#f5f6f7] rounded-[16px] p-6 border border-[#e5e7eb] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-[10px] flex items-center justify-center mb-4">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1220] mb-2">{feature.title}</h3>
                        <p className="text-[13px] text-[#64748B]">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Management Section */}
        <section className="relative py-20 bg-white">
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="relative bg-[#f5f6f7] rounded-[24px] p-12 border border-[#e5e7eb]">
              <div className="relative grid lg:grid-cols-[32%_68%] gap-12 items-center">
                {/* Left Content */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[16px] flex items-center justify-center mb-6 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-[32px] font-bold text-[#0B1220] mb-4 leading-tight">
                      Patient Management
                    </h2>
                    <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                      Engage patients with smart scheduling, automated reminders, and seamless communication tools.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-[10px] font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Visual - Features Grid */}
                <div className="relative">
                  <div className="relative grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Calendar, title: 'Smart Appointment Scheduling', desc: 'Intelligent scheduling automation' },
                      { icon: Bell, title: 'Automated Reminders', desc: 'SMS and email confirmations' },
                      { icon: Users, title: 'Patient Portal Access', desc: 'Self-service for patients' },
                      { icon: Shield, title: 'Insurance Verification', desc: 'Real-time eligibility checks' },
                      { icon: MessageSquare, title: 'Two-Way Messaging', desc: 'Secure patient communication' },
                      { icon: Calendar, title: 'Online Booking Widget', desc: 'Web-based appointment booking' },
                      { icon: Users, title: 'Waitlist Management', desc: 'Fill cancellations automatically' },
                      { icon: FileText, title: 'Patient Forms & Intake', desc: 'Digital forms and signatures' }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative bg-white rounded-[16px] p-6 border border-[#e5e7eb] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[10px] flex items-center justify-center mb-4">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1220] mb-2">{feature.title}</h3>
                        <p className="text-[13px] text-[#64748B]">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Analytics Section */}
        <section className="relative py-20 bg-[#f5f6f7]">
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="relative bg-white rounded-[24px] p-12 border border-[#e5e7eb]">
              <div className="relative grid lg:grid-cols-[32%_68%] gap-12 items-center">
                {/* Left Content */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[16px] flex items-center justify-center mb-6 shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-[32px] font-bold text-[#0B1220] mb-4 leading-tight">
                      Practice Analytics
                    </h2>
                    <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                      Make informed decisions with real-time dashboards, performance metrics, and predictive analytics.
                    </p>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-[10px] font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Visual - Features Grid */}
                <div className="relative">
                  <div className="relative grid md:grid-cols-2 gap-4">
                    {[
                      { icon: BarChart3, title: 'Real-Time Revenue Dashboard', desc: 'Live financial performance tracking' },
                      { icon: TrendingUp, title: 'Provider Performance Metrics', desc: 'Track provider productivity' },
                      { icon: Users, title: 'Patient Acquisition Reports', desc: 'Analyze patient growth trends' },
                      { icon: CheckCircle2, title: 'Treatment Acceptance Tracking', desc: 'Monitor case acceptance rates' },
                      { icon: Star, title: 'Predictive Analytics', desc: 'AI-powered forecasting tools' },
                      { icon: FileText, title: 'Custom Report Builder', desc: 'Build custom reports easily' },
                      { icon: BarChart3, title: 'Benchmark Comparisons', desc: 'Compare against industry standards' },
                      { icon: FileText, title: 'Export to Excel/PDF', desc: 'Download reports in any format' }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative bg-[#f5f6f7] rounded-[16px] p-6 border border-[#e5e7eb] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[10px] flex items-center justify-center mb-4">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0B1220] mb-2">{feature.title}</h3>
                        <p className="text-[13px] text-[#64748B]">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete Platform, Proven Results
              </h2>
              <p className="text-xl text-blue-100">
                Join thousands of practices using our complete feature suite
              </p>
            </div>

            <div className="relative grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '36+', label: 'Core Features' },
                { value: '10,000+', label: 'Practices' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
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
                Experience All Features with a Free Trial
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                30 days free. No credit card required. Full platform access.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
