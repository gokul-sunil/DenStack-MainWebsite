'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Building2, 
  Rocket, 
  Users, 
  Truck, 
  Stethoscope,
  Drill,
  Smile,
  Baby,
  Heart,
  Activity,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const sectors = [
  {
    icon: Building2,
    title: 'Dental Practices',
    description: 'Complete solutions for general dental practices of all sizes',
    page: 'solo-practice'
  },
  {
    icon: Rocket,
    title: 'Dental Startups',
    description: 'Get your new practice up and running with the right tools',
    page: 'solo-practice'
  },
  {
    icon: Users,
    title: "Groups & DSO's",
    description: 'Enterprise solutions for multi-location dental organizations',
    page: 'dso'
  },
  {
    icon: Truck,
    title: 'Mobile Dentistry',
    description: 'Cloud-based tools designed for mobile dental services',
    page: 'multi-location'
  },
  {
    icon: Stethoscope,
    title: 'Specialists',
    description: 'Specialized workflows for all dental specialties',
    page: 'specialty-clinics'
  }
];

const specialties = [
  {
    icon: Drill,
    title: 'Implant & Oral Surgeons',
    description: 'Advanced surgical planning and case management',
    page: 'specialty-clinics'
  },
  {
    icon: Smile,
    title: 'Orthodontists',
    description: 'Treatment planning and progress tracking tools',
    page: 'specialty-clinics'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentists',
    description: 'Child-friendly features and parent communication',
    page: 'specialty-clinics'
  },
  {
    icon: Heart,
    title: 'Periodontists',
    description: 'Comprehensive perio charting and monitoring',
    page: 'specialty-clinics'
  },
  {
    icon: Activity,
    title: 'Endodontists',
    description: 'Root canal workflow and treatment documentation',
    page: 'specialty-clinics'
  }
];

export function WhoWeServePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Built for Every{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dental Professional
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tailored solutions for practices of all types and specialties
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Two Columns */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Sectors We Serve */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
                    SECTORS WE SERVE
                  </h2>
                  
                  <div className="space-y-4">
                    {sectors.map((sector, index) => {
                      const Icon = sector.icon;
                      return (
                        <motion.button
                          key={sector.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onClick={() => router.push(`/${sector.page}`)}
                          className="w-full text-left group"
                        >
                          <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all border-2 border-transparent hover:border-blue-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                {sector.title}
                              </h3>
                              <p className="text-gray-600 text-sm">{sector.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-1" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Specialties */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
                    SPECIALITIES
                  </h2>
                  
                  <div className="space-y-4">
                    {specialties.map((specialty, index) => {
                      const Icon = specialty.icon;
                      return (
                        <motion.button
                          key={specialty.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onClick={() => router.push(`/${specialty.page}`)}
                          className="w-full text-left group"
                        >
                          <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all border-2 border-transparent hover:border-purple-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                                {specialty.title}
                              </h3>
                              <p className="text-gray-600 text-sm">{specialty.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all mt-1" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why CareStack CTA Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why DentaCare
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Transforming average dental practice into systemized cloud-based excellence.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Unified Platform</h3>
                      <p className="text-gray-600">All your practice tools in one integrated system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Cloud-Based</h3>
                      <p className="text-gray-600">Access your practice data anywhere, anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Proven Results</h3>
                      <p className="text-gray-600">Join 10,000+ practices growing with DentaCare</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => router.push('/about')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Right - Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-100 p-8 border border-green-200">
                  <div className="space-y-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Practice Performance</h3>
                        <div className="text-xs text-green-600 font-semibold px-3 py-1 bg-green-100 rounded-full">
                          Live Dashboard
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">$125,400</div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                      <div className="mt-4 h-32 bg-gradient-to-t from-green-200 to-green-100 rounded-lg"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-green-600">1,247</div>
                        <div className="text-xs text-gray-600">Active Patients</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-xs text-gray-600">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Links */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <button 
                onClick={() => router.push('/contact')}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Contact Us
              </button>
              <button 
                onClick={() => router.push('/faqs')}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Support
              </button>
              <button 
                onClick={() => router.push('/partners')}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

