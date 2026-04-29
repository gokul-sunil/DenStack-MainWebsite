'use client';

import { CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { Button } from '@/app/components/ui/button';
import { TestimonialCard } from '@/app/components/marketing/TestimonialCard';
import { motion } from 'motion/react';

const challenges = [
  {
    challenge: 'Limited Administrative Staff',
    solution: 'Automated scheduling, reminders, and workflows reduce admin burden by 70%',
  },
  {
    challenge: 'Tight Budget Constraints',
    solution: 'Affordable pricing with no hidden fees. ROI typically achieved in under 4 months',
  },
  {
    challenge: 'Time Management',
    solution: 'Spend 15+ hours less per week on paperwork and focus on patient care',
  },
  {
    challenge: 'Patient Retention',
    solution: 'Automated engagement and recall systems improve retention by 30%',
  },
];

const features = [
  'Online appointment booking',
  'Automated SMS & email reminders',
  'Digital patient forms',
  'Electronic health records',
  'Payment processing',
  'Insurance verification',
  'Treatment planning tools',
  'Patient communication portal',
  'Basic reporting & analytics',
  'Mobile app access',
  'HIPAA-compliant security',
  'Free data migration',
];

const stats = [
  { value: '5,000+', label: 'Solo Practices Using DenStack' },
  { value: '15hrs', label: 'Average Time Saved Per Week' },
  { value: '40%', label: 'Reduction in No-Shows' },
  { value: '$299', label: 'Starting at per month' },
];

export function SoloPracticeSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Solutions for Solo Practitioners
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Built for the Independent Dentist
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Run your practice efficiently without a large administrative team. DenStack
                  automates the busy work so you can focus on what matters most - your patients.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
                  >
                    Book Demo
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                  <Stethoscope className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Your Challenges, Our Solutions"
              title="We understand the unique needs of solo practitioners"
              centered
            />

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.challenge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-lg sm:text-xl">!</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {item.challenge}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4 pl-16">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Everything You Need"
              title="Complete practice management in one affordable platform"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-500/30 border border-blue-400/30 text-blue-100 rounded-full text-sm font-medium mb-6">
                Success Story
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                How Dr. Chen Transformed His Practice
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                "As a solo practitioner, I was spending more time on paperwork than patient care.
                DenStack automated everything - scheduling, reminders, billing - and gave me back
                15 hours a week. My no-show rate dropped by half, and patient satisfaction is at an
                all-time high."
              </blockquote>

              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Michael Chen, DDS</div>
                  <div className="text-gray-600">Chen Family Dentistry, San Francisco</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15hrs</div>
                  <div className="text-sm text-gray-600">Time Saved Per Week</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">50%</div>
                  <div className="text-sm text-gray-600">Fewer No-Shows</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">25%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="What Our Customers Say"
              title="Trusted by thousands of solo practitioners"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="DenStack pays for itself just in the time it saves. Best investment I've made in my practice."
                author="Dr. Sarah Martinez"
                role="Owner"
                practice="Martinez Dental"
              />
              <TestimonialCard
                quote="Setup was incredibly easy. I was up and running in less than a week with all my patient data migrated."
                author="Dr. James Wilson"
                role="Solo Practitioner"
                practice="Wilson Dentistry"
              />
              <TestimonialCard
                quote="My patients love the online booking. It's brought in so many new patients who prefer to book after hours."
                author="Dr. Amanda Foster"
                role="Owner"
                practice="Foster Dental Care"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Simplify Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 5,000+ solo practitioners who trust DenStack
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 px-8 py-6 text-lg rounded-xl"
              >
                See Pricing
              </Button>
            </div>
            <p className="mt-6 text-gray-600">
              No credit card required • Free data migration • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
