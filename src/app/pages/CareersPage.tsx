'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Award,
  Coffee
} from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Senior',
    description: 'Build scalable features for our cloud-based dental practice management platform using React, Node.js, and AWS.'
  },
  {
    title: 'Product Manager - Clinical Workflows',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Mid-Senior',
    description: 'Define and execute product strategy for our clinical charting and treatment planning features.'
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Mid-Level',
    description: 'Help dental practices maximize value from DenStack through onboarding, training, and ongoing support.'
  },
  {
    title: 'Senior UX Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    description: 'Create intuitive, beautiful experiences for dental professionals and their patients.'
  },
  {
    title: 'Implementation Specialist',
    department: 'Professional Services',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Mid-Level',
    description: 'Lead practice implementation projects including data migration, system configuration, and staff training.'
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Austin, TX',
    type: 'Full-time',
    level: 'Entry-Level',
    description: 'Generate qualified leads and build relationships with dental practices interested in DenStack.'
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance for you and your family',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Growth & Development',
    description: 'Annual learning budget, conference attendance, and career development programs',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Unlimited PTO, flexible hours, and remote-first culture',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Equity & Bonuses',
    description: 'Competitive equity packages and performance-based bonuses',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with talented, passionate people who care about making a difference',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Latest Tools',
    description: 'MacBook Pro, top-tier software, and whatever else you need to do your best work',
    color: 'from-yellow-500 to-orange-500'
  }
];

const values = [
  {
    title: 'Patient-First',
    description: 'We build with dental practices and their patients at the center of every decision.'
  },
  {
    title: 'Excellence',
    description: 'We set high standards and continuously improve our product, processes, and ourselves.'
  },
  {
    title: 'Collaboration',
    description: 'We work together across teams and with our customers to achieve great outcomes.'
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to solve hard problems in creative ways.'
  }
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium mb-4">
                We're Hiring!
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Join Us in Transforming Dental Care
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Help us build the platform that powers thousands of dental practices 
                and improves healthcare for millions of patients.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '150+', label: 'Team Members' },
                { value: '10,000+', label: 'Practices Served' },
                { value: '$50M', label: 'Series B Funding' },
                { value: '4.8/5', label: 'Glassdoor Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work at DenStack?
              </h2>
              <p className="text-xl text-gray-600">
                We believe in taking care of our team so they can take care of our customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600">
                Find your next opportunity at DenStack
              </p>
            </div>

            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {job.level}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl group-hover:translate-x-1 transition-transform">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Don't see the perfect role? We're always looking for talented people.
              </p>
              <Button variant="outline" className="border-2 px-8 py-4 text-lg rounded-xl">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

