'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Smile, Calendar, Scan, Package, TrendingUp, CheckCircle2, ArrowRight, Camera, BarChart, Clock } from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Digital Scanning Integration',
    description: 'Seamlessly integrate intraoral scanners for precise aligner treatment planning'
  },
  {
    icon: Calendar,
    title: 'Aligner Delivery Tracking',
    description: 'Track aligner sets, delivery schedules, and patient compliance in real-time'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Manage aligner inventory with automated reordering and expiration tracking'
  },
  {
    icon: TrendingUp,
    title: 'Treatment Progress Monitoring',
    description: 'Visual progress tracking with automated milestone alerts and patient engagement'
  }
];

const alignerBenefits = [
  'Complete aligner treatment workflow management',
  'Digital treatment planning with 3D visualization',
  'Automated patient reminder system for aligner changes',
  'Photo documentation and progress comparison',
  'Insurance pre-authorization for clear aligner therapy',
  'Refinement tracking and re-treatment management',
  'Patient compliance monitoring with check-in alerts',
  'Multi-vendor aligner brand support (Invisalign, SureSmile, etc.)'
];

export function AlignersPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full mb-6 border border-cyan-200">
                <Smile className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">Clear Aligner Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Clear Aligner{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Practice Management
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Streamline your clear aligner workflows with specialized tools for treatment planning, patient tracking, and outcome optimization
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl">
                  View Features
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Patient-Focused 3D Aligner Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-blue-50/30" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Patient Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
                  <Smile className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm font-semibold text-cyan-700">For Patients</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Your Journey to a{' '}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Perfect Smile
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-10">
                  Experience the future of orthodontics with clear aligners—virtually invisible, comfortable, and designed to fit your lifestyle
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Invisible Treatment',
                      description: 'Straighten your teeth discreetly without metal brackets or wires',
                      icon: '👁️'
                    },
                    {
                      title: 'Removable Convenience',
                      description: 'Eat your favorite foods and maintain perfect oral hygiene easily',
                      icon: '🦷'
                    },
                    {
                      title: 'Comfortable & Safe',
                      description: 'Smooth, custom-made aligners with no sharp edges or irritation',
                      icon: '✨'
                    },
                    {
                      title: 'Predictable Results',
                      description: 'See your final smile before treatment even begins with 3D visualization',
                      icon: '📊'
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                    >
                      <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg">
                    Start Your Smile Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </motion.div>

              {/* Right: 3D Aligner Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative">
                  {/* Decorative background elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
                  
                  {/* Main image container */}
                  <div className="relative bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-cyan-100">
                    <motion.img
                      src="https://images.unsplash.com/photo-1534593963832-01c3595183bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMGRlbnRhbCUyMGFsaWduZXIlMjAzZCUyMHRyYW5zcGFyZW50fGVufDF8fHx8MTc2OTU4MzY3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="3D Clear Aligner Visualization"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    />
                    
                    {/* Floating stats */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-8 left-8 bg-white rounded-xl shadow-xl p-4 border border-cyan-200"
                    >
                      <div className="text-3xl font-bold text-cyan-600">12-18</div>
                      <div className="text-sm text-gray-600 font-medium">Months Average</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-4 border border-blue-200"
                    >
                      <div className="text-3xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                    </motion.div>
                  </div>
                </div>

                {/* Treatment timeline indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700">Treatment Progress</span>
                    <span className="text-sm font-bold text-cyan-600">On Track</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Week 1</span>
                    <span>Week 26</span>
                    <span>Week 52</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full mb-6"
              >
                <Package className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">Comprehensive Solution</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Purpose-Built for Clear Aligner Practices
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage clear aligner treatments from initial consultation to final retention
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-cyan-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Aligner-Specific Features */}
        <section className="relative py-24 bg-gradient-to-br from-cyan-50 to-blue-50" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Aligner Treatment Workflow
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From digital impressions to final retention, manage every step of the clear aligner journey
                </p>
                <div className="space-y-4">
                  {alignerBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Aligner Treatment Metrics</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">35%</div>
                    <p className="text-gray-700 font-semibold mb-1">Faster Case Acceptance</p>
                    <p className="text-sm text-gray-600">With digital treatment visualization</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                    <p className="text-gray-700 font-semibold mb-1">Patient Compliance Rate</p>
                    <p className="text-sm text-gray-600">With automated reminders</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">20hrs</div>
                    <p className="text-gray-700 font-semibold mb-1">Time Saved Monthly</p>
                    <p className="text-sm text-gray-600">On aligner case management</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aligner Workflow */}
        <section className="relative py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Streamlined Aligner Workflow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Manage every stage of aligner treatment with automated workflows and intelligent tracking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: 'Initial Records & Scanning',
                  description: 'Capture intraoral scans, photos, and X-rays with seamless digital integration',
                  color: 'from-cyan-500 to-cyan-600'
                },
                {
                  icon: Scan,
                  title: 'Treatment Planning',
                  description: 'Create detailed aligner treatment plans with 3D simulation and patient education',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: Calendar,
                  title: 'Aligner Delivery Schedule',
                  description: 'Automated scheduling for aligner pick-ups and progress check appointments',
                  color: 'from-indigo-500 to-indigo-600'
                },
                {
                  icon: Clock,
                  title: 'Progress Monitoring',
                  description: 'Track patient compliance and treatment progression with photo documentation',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  icon: BarChart,
                  title: 'Refinement Tracking',
                  description: 'Manage refinement cases with detailed tracking and revision history',
                  color: 'from-pink-500 to-pink-600'
                },
                {
                  icon: CheckCircle2,
                  title: 'Retention Protocol',
                  description: 'Automated retention reminders and long-term patient follow-up scheduling',
                  color: 'from-green-500 to-green-600'
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 rounded-2xl hover:border-cyan-300 hover:shadow-xl transition-all"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-cyan-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Multi-Vendor Aligner Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Seamlessly work with all major clear aligner brands and digital impression systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Invisalign®',
                'SureSmile®',
                'ClearCorrect®',
                'Spark® Aligners',
                'iTero Scanner',
                '3Shape TRIOS',
                'Medit Scanner',
                'Planmeca Emerald'
              ].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
                >
                  <div className="text-lg font-bold text-white">{brand}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Plus integrations with 50+ imaging, practice management, and diagnostic tools
              </p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                View All Integrations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Aligner Practice?
                </h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of practices using DenStack to deliver exceptional clear aligner treatments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Schedule Demo
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
      <StickyCTA />
    </div>
  );
}
