'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Stethoscope,
  FileText,
  ClipboardList,
  Image,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Camera,
  Activity,
  Brain,
  Star
} from 'lucide-react';
import { ClinicalWorkflowsShowcase } from '@/app/components/product/ClinicalWorkflowsShowcase';

const features = [
  {
    icon: FileText,
    title: 'Digital Charting',
    description: 'Comprehensive clinical notes with customizable templates and voice-to-text',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Image,
    title: 'Imaging Integration',
    description: 'Seamlessly integrate with digital X-rays, intraoral cameras, and CBCT',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ClipboardList,
    title: 'Treatment Planning',
    description: 'Visual treatment plans with cost estimates and alternative options',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Brain,
    title: 'AI Diagnosis Support',
    description: 'AI-powered insights to assist with diagnosis and treatment planning',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Activity,
    title: 'Perio Charting',
    description: 'Complete periodontal charting with visual indicators and tracking',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Camera,
    title: 'Intraoral Photos',
    description: 'Capture, store, and annotate clinical photos directly in patient records',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '50%',
    label: 'Faster Charting',
    description: 'Streamlined templates and voice input'
  },
  {
    stat: '100%',
    label: 'Digital Records',
    description: 'Paperless clinical documentation'
  },
  {
    stat: '3x',
    label: 'Treatment Acceptance',
    description: 'Visual plans increase acceptance'
  },
  {
    stat: '30min',
    label: 'Time Saved Daily',
    description: 'Per provider with automation'
  }
];

const clinicalCapabilities = [
  'Comprehensive clinical charting',
  'Odontogram with visual tooth charts',
  'Periodontal charting and tracking',
  'Treatment plan creation and management',
  'Digital imaging integration (X-rays, CBCT)',
  'Intraoral camera integration',
  'Voice-to-text clinical notes',
  'Medical history management',
  'Prescription writing and e-prescribing',
  'Clinical alerts and reminders',
  'Lab case tracking',
  'Referral management'
];

export function ClinicalToolsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-cyan-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6 border border-green-200"
                >
                  <Stethoscope className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Clinical Excellence</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Advanced Clinical Tools for{' '}
                  <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    Modern Dentistry
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive digital charting, imaging integration, and AI-powered tools 
                  to deliver exceptional patient care.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                    Explore Features
                  </Button>
                </div>

                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">AI-Powered</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Clinical Chart</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Image className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Tooth Chart Visualization */}
                    <div className="grid grid-cols-8 gap-1 mb-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.03 }}
                          className={`aspect-square rounded-lg ${
                            i % 3 === 0 
                              ? 'bg-gradient-to-br from-blue-100 to-blue-200' 
                              : i % 4 === 0
                              ? 'bg-gradient-to-br from-green-100 to-green-200'
                              : 'bg-gray-100'
                          } flex items-center justify-center text-xs font-bold text-gray-700`}
                        >
                          {i + 1}
                        </motion.div>
                      ))}
                    </div>

                    {/* Clinical Notes */}
                    <div className="space-y-2">
                      {[
                        { label: 'Procedure', value: 'Composite Restoration', color: 'blue' },
                        { label: 'Tooth', value: '#14 (Upper Right 1st Molar)', color: 'green' },
                        { label: 'Surface', value: 'MOD', color: 'purple' }
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm text-gray-600">{item.label}</span>
                          <span className={`text-sm font-semibold text-${item.color}-600`}>{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold">AI Assisted</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clinical Workflows Showcase Section */}
        <ClinicalWorkflowsShowcase />

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Comprehensive Tools</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need for Clinical Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced tools designed to streamline clinical workflows and improve patient outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 transition-all hover:shadow-xl"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-green-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Measurable Clinical Impact
              </h2>
              <p className="text-xl text-green-100">
                See how modern clinical tools improve efficiency and care quality
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
                  <div className="text-xl text-green-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-green-200">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Clinical Workflow Solution
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From charting to imaging to treatment planning - everything you need 
                  to deliver exceptional clinical care.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {clinicalCapabilities.map((capability, index) => (
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
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Insights</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Cavity Detection', accuracy: '98%', color: 'blue' },
                    { title: 'Bone Loss Analysis', accuracy: '96%', color: 'green' },
                    { title: 'Treatment Suggestions', accuracy: '94%', color: 'purple' },
                    { title: 'Risk Assessment', accuracy: '97%', color: 'orange' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{item.title}</span>
                        <span className={`text-${item.color}-600 font-bold`}>{item.accuracy}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.accuracy }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">AI Learning</div>
                      <div className="text-sm text-gray-600">Continuously improving with your practice data</div>
                    </div>
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
              className="bg-gradient-to-br from-green-600 to-cyan-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Experience the Future of Clinical Dentistry
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  See how our advanced clinical tools can transform your practice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    Contact Sales
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
