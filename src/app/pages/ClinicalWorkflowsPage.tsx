'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { FileText, Activity, Pill, Shield, ClipboardList, Image, Workflow, Database } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ParallaxFeatureGrid } from '@/app/components/shared/ParallaxFeatureGrid';
import { PlatformFeaturesStickySection } from '@/app/components/home/PlatformFeaturesStickySection';

const features = [
  {
    icon: FileText,
    title: 'Treatment Planning with E-signatures',
    description: 'Create comprehensive treatment plans and get patient approval with digital signatures.',
  },
  {
    icon: Activity,
    title: 'General and Perio Clinical Charting',
    description: 'Comprehensive charting tools for all dental specialties with intuitive interfaces.',
  },
  {
    icon: Pill,
    title: 'Dental Electronic Prescriptions',
    description: 'Send prescriptions electronically to pharmacies with full medication history tracking.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'All clinical workflows meet stringent HIPAA compliance requirements for data security.',
  },
  {
    icon: ClipboardList,
    title: 'Clinical Notes with Templates',
    description: 'Streamline documentation with customizable templates and voice-to-text options.',
  },
  {
    icon: Image,
    title: 'Digital Imaging Integrations',
    description: 'Seamlessly integrate with X-ray, intraoral cameras, and other imaging equipment.',
  },
  {
    icon: Workflow,
    title: 'Periodontal Charting',
    description: 'Advanced perio charting with automated probing depth tracking and visual indicators.',
  },
  {
    icon: Database,
    title: 'Always-On Backups',
    description: 'Automatic cloud backups ensure your clinical data is always secure and recoverable.',
  },
];

export function ClinicalWorkflowsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Streamlined{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Clinical Workflows
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powerful clinical tools designed by dentists for dentists. Enhance care delivery while reducing administrative burden.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl shadow-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl">
                View Clinical Features
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <ParallaxFeatureGrid features={features} />
        </section>

        {/* Benefits Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Clinical Excellence Made Easy
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our clinical workflow tools are designed to help you focus on what matters most—delivering exceptional patient care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Reduce Documentation Time</h3>
                    <p className="text-gray-600">Templates and automation cut charting time by 40%</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Improve Clinical Accuracy</h3>
                    <p className="text-gray-600">Digital workflows reduce errors and improve record quality</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ensure Compliance</h3>
                    <p className="text-gray-600">Built-in HIPAA compliance and security features</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Trusted by Leading Practices</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <p className="text-green-50">Clinician satisfaction rate</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <p className="text-green-50">Reduction in charting time</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-green-50">HIPAA compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Sticky Section */}
        <PlatformFeaturesStickySection />

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how our clinical workflow tools can transform your practice operations.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl shadow-lg">
              Schedule Your Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
