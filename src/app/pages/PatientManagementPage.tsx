'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Bell, 
  CreditCard, 
  FileText,
  Heart,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Mail,
  Star
} from 'lucide-react';
import { ParallaxFeatureGrid } from '@/app/components/shared/ParallaxFeatureGrid';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered appointment booking with automated reminders and confirmations',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Two-Way Messaging',
    description: 'HIPAA-compliant messaging system for secure patient communication',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Reduce no-shows by 40% with SMS, email, and push notifications',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FileText,
    title: 'Digital Forms',
    description: 'Paperless intake forms that patients can complete before their visit',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: CreditCard,
    title: 'Online Payments',
    description: 'Accept payments online with automated payment plans and reminders',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Heart,
    title: 'Patient Portal',
    description: 'Self-service portal for appointment booking, records, and communication',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '40%',
    label: 'Reduction in No-Shows',
    description: 'Automated reminders keep patients engaged'
  },
  {
    stat: '3x',
    label: 'Faster Check-In',
    description: 'Digital forms completed before arrival'
  },
  {
    stat: '95%',
    label: 'Patient Satisfaction',
    description: 'Convenient online booking and communication'
  },
  {
    stat: '60%',
    label: 'Less Admin Time',
    description: 'Automated workflows reduce manual tasks'
  }
];

const capabilities = [
  'Online appointment booking 24/7',
  'Automated appointment reminders (SMS/Email)',
  'Two-way patient messaging (HIPAA-compliant)',
  'Digital intake forms and consent',
  'Treatment plan presentations',
  'Insurance verification',
  'Online payment processing',
  'Patient review management',
  'Recall and recare campaigns',
  'Family account management',
  'Patient education library',
  'Mobile app for patients'
];

export function PatientManagementPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6 border border-blue-200"
                >
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Patient Engagement</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Engage & Retain More{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Patients
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Build lasting patient relationships with automated communication, online booking, 
                  and a patient portal that puts care at their fingertips.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    View Features
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Patient Dashboard</div>
                        <div className="text-sm text-gray-500">Real-time engagement</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Calendar, label: 'Appointments Today', value: '24', color: 'blue' },
                      { icon: Bell, label: 'Reminders Sent', value: '156', color: 'green' },
                      { icon: MessageSquare, label: 'Messages', value: '12', color: 'purple' }
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                          </div>
                          <span className="font-medium text-gray-700">{item.label}</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold">Mobile Ready</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Key Features</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need to Engage Patients
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive tools to improve patient communication and satisfaction
              </p>
            </div>

            <ParallaxFeatureGrid features={features} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-blue-100">
                See the impact on patient engagement and practice efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-xl text-blue-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-blue-200">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Patient Engagement Suite
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Everything you need to communicate with patients, reduce no-shows, 
                  and create exceptional experiences.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                  <div className="space-y-6">
                    {[
                      { icon: Smartphone, title: 'Mobile App', desc: 'iOS & Android apps for patients' },
                      { icon: Mail, title: 'Email Campaigns', desc: 'Automated recall reminders' },
                      { icon: MessageSquare, title: 'Text Messaging', desc: 'Two-way SMS communication' },
                      { icon: Calendar, title: 'Online Booking', desc: '24/7 appointment scheduling' }
                    ].map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Patient Engagement?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  See how DentaCare can help you engage more patients and grow your practice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    View Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
