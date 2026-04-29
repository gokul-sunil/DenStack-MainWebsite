'use client';

import { Target, Users, Award, TrendingUp, Heart, Shield } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { motion } from 'motion/react';

const values = [
  {
    icon: Heart,
    title: 'Patient-First Mindset',
    description: 'Everything we build is designed to improve patient care and experience.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of data security and HIPAA compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We never stop improving and evolving our platform to meet your needs.',
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to your growth.',
  },
];

const stats = [
  { value: '2018', label: 'Founded' },
  { value: '10,000+', label: 'Practices Served' },
  { value: '250+', label: 'Team Members' },
  { value: '50+', label: 'Countries' },
];

const team = [
  {
    name: 'Michael Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former dentist with 15 years of practice experience',
    initial: 'MC',
    color: '#3b82f6',
  },
  {
    name: 'Sarah Martinez',
    role: 'CTO & Co-Founder',
    bio: 'Healthcare tech veteran, previously at Epic Systems',
    initial: 'SM',
    color: '#06b6d4',
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    bio: 'Product leader with background in healthcare SaaS',
    initial: 'DK',
    color: '#8b5cf6',
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'VP of Customer Success',
    bio: 'Dedicated to ensuring every practice thrives',
    initial: 'JR',
    color: '#10b981',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Empowering Dental Practices to Thrive
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to transform dental practice management through innovative
                technology that puts practitioners and patients first.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 bg-white border-y border-gray-200" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe that dental practices should spend less time managing software and more
                  time caring for patients. That's why we built DenStack - an all-in-one platform
                  that simplifies practice management while delivering enterprise-grade capabilities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2018 by a former dentist and a healthcare technology veteran, we
                  understand the unique challenges dental practices face. Our team combines deep
                  industry expertise with cutting-edge technology to create solutions that truly
                  make a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white"
              >
                <Award className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">🏆</span>
                    <span>Best Dental Practice Management Software 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⭐</span>
                    <span>Highest Customer Satisfaction Rating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔒</span>
                    <span>SOC 2 Type II Certified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>HIPAA Compliant Platform</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-24 bg-gray-50" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Values"
              title="What Drives Us Every Day"
              centered
            />

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-gray-200"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="relative py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Leadership"
              title="Meet Our Team"
              description="Experienced leaders dedicated to your success"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals passionate about healthcare technology
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/company/careers"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/company/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
