'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Brain,
  Sparkles,
  Zap,
  MessageSquare,
  Image,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Bot,
  Lightbulb,
  Shield,
  Star,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Image,
    title: 'AI Diagnosis Assistant',
    description: 'Advanced image analysis to detect cavities, bone loss, and other conditions',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-optimized appointment booking that maximizes chair time and minimizes gaps',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbot',
    description: '24/7 AI assistant for patient questions, appointment booking, and support',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Treatment Recommendations',
    description: 'Evidence-based treatment suggestions powered by machine learning',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast revenue, patient behavior, and practice trends with AI models',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Bot,
    title: 'Automated Workflows',
    description: 'AI-powered automation for recalls, reminders, and routine tasks',
    color: 'from-pink-500 to-pink-600'
  }
];

const benefits = [
  {
    stat: '98%',
    label: 'Detection Accuracy',
    description: 'AI cavity and pathology detection'
  },
  {
    stat: '40%',
    label: 'Time Saved',
    description: 'On administrative tasks'
  },
  {
    stat: '24/7',
    label: 'Patient Support',
    description: 'AI chatbot availability'
  },
  {
    stat: '3x',
    label: 'Faster Diagnosis',
    description: 'With AI-assisted imaging analysis'
  }
];

const aiCapabilities = [
  'Automated cavity detection in X-rays',
  'Bone loss measurement and tracking',
  'Pathology screening and alerts',
  'Treatment outcome prediction',
  'Intelligent appointment optimization',
  'Patient risk assessment',
  'Voice-to-text clinical notes',
  'Automated insurance verification',
  'Smart patient communications',
  'Recall campaign optimization',
  'Revenue forecasting',
  'Anomaly detection and alerts'
];

export function AICapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 xl:pt-40 xl:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl"
          />
          
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 rounded-full mb-4 sm:mb-6 border border-purple-200"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                  <span className="text-xs sm:text-sm font-semibold text-purple-700">Powered by AI</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  AI That Elevates{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Clinical Excellence
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Harness the power of artificial intelligence to improve diagnosis accuracy, 
                  automate workflows, and deliver better patient outcomes.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg group w-full sm:w-auto justify-center">
                    <span className="flex items-center justify-center">
                      See AI in Action
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button variant="outline" className="border-2 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto justify-center">
                    Learn More
                  </Button>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">HIPAA Compliant AI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">FDA Cleared</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6">
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">AI Analysis</h3>
                      <div className="flex items-center space-x-2 px-2 sm:px-3 py-1 bg-purple-100 rounded-full">
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                        <span className="text-[10px] sm:text-xs font-semibold text-purple-700">Processing</span>
                      </div>
                    </div>
                    
                    {/* X-ray Visualization */}
                    <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl mb-3 sm:mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                          {/* Simulated tooth */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40" />
                          
                          {/* AI Detection Markers */}
                          {[
                            { top: '20%', left: '30%', color: 'red' },
                            { top: '60%', left: '50%', color: 'yellow' },
                            { top: '40%', left: '70%', color: 'green' }
                          ].map((marker, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 1 + i * 0.3 }}
                              className="absolute"
                              style={{ top: marker.top, left: marker.left }}
                            >
                              <div className={`w-6 h-6 sm:w-8 sm:h-8 border-2 border-${marker.color}-500 rounded-full animate-pulse`}>
                                <div className={`absolute inset-0 bg-${marker.color}-500 opacity-30 rounded-full`} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Findings */}
                    <div className="space-y-2">
                      {[
                        { finding: 'Cavity detected - Tooth #14', severity: 'High', color: 'red' },
                        { finding: 'Minor bone loss - Posterior', severity: 'Medium', color: 'yellow' },
                        { finding: 'Healthy structure - Anterior', severity: 'Low', color: 'green' }
                      ].map((item, i) => (
                        <motion.div
                          key={item.finding}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 + i * 0.2 }}
                          className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-xs sm:text-sm text-gray-900">{item.finding}</span>
                          <span className={`text-[10px] sm:text-xs font-semibold px-2 py-1 bg-${item.color}-100 text-${item.color}-700 rounded`}>
                            {item.severity}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-4 border border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold">98% Accurate</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">AI-Powered Features</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Artificial Intelligence Across Your Practice
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced AI capabilities designed specifically for dental practices
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
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition-all hover:shadow-xl"
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
        <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Floating AI particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                AI-Driven Clinical Excellence
              </h2>
              <p className="text-xl text-purple-100">
                Measurable improvements in diagnosis, efficiency, and patient care
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
                  <div className="text-xl text-purple-100 font-semibold mb-2">{benefit.label}</div>
                  <div className="text-sm text-purple-200">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Comprehensive AI Suite
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From clinical diagnosis to practice automation - AI working for you 24/7 
                  to improve outcomes and efficiency.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {aiCapabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Learning & Improvement</h3>
                <div className="space-y-6">
                  {[
                    { phase: 'Data Collection', progress: 100, desc: 'Gathering clinical data' },
                    { phase: 'Model Training', progress: 100, desc: 'Training neural networks' },
                    { phase: 'Validation', progress: 95, desc: 'Testing accuracy' },
                    { phase: 'Deployment', progress: 85, desc: 'Live in production' },
                    { phase: 'Continuous Learning', progress: 'Active', desc: 'Always improving' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">{item.phase}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                        <span className="text-purple-600 font-bold">
                          {typeof item.progress === 'number' ? `${item.progress}%` : item.progress}
                        </span>
                      </div>
                      {typeof item.progress === 'number' && (
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Self-Improving AI</div>
                      <div className="text-sm text-gray-600">Models get smarter with every use</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Experience the Future of AI-Powered Dentistry
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  See how artificial intelligence can transform your clinical practice
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    See AI Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    Contact AI Experts
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
