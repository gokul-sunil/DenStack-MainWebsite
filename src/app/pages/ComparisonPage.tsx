'use client';

import { useState } from 'react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { motion } from 'motion/react';
import { Check, X, AlertTriangle } from 'lucide-react';

type ComparisonTab = 'operational' | 'growth' | 'experience';

interface ComparisonFeature {
  feature: string;
  carestack: 'advanced' | 'partial' | 'none';
  dentrix: 'check' | 'x' | 'warning' | 'dollar';
  eaglesoft: 'check' | 'x' | 'warning' | 'dollar';
  openDental: 'check' | 'x' | 'warning' | 'dollar';
}

const comparisonData: Record<ComparisonTab, { title: string; description: string; features: ComparisonFeature[] }> = {
  operational: {
    title: 'Operational Efficiency',
    description: 'Discover why DenStack is better to run the daily operational activities at your practice, including scheduling, Charting and claims management.',
    features: [
      { feature: 'Online Scheduling', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'check' },
      { feature: 'Multi-Location schedule management', carestack: 'advanced', dentrix: 'warning', eaglesoft: 'warning', openDental: 'x' },
      { feature: 'Configurable Dashboards for Reporting & Analytics', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Clinical & Perio Charting with Electronically Signed Notes', carestack: 'advanced', dentrix: 'warning', eaglesoft: 'warning', openDental: 'warning' },
      { feature: 'Case Acceptance & Presentation via Tablet, Mobile, Text, and Email', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Integrated Payment Processing with Card-on-File', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
    ],
  },
  growth: {
    title: 'Practice Growth',
    description: 'When compared to other softwares, DenStack offers better solutions for practice growth, including membership plans, online reputation management, auto-debit for credit cards, and more.',
    features: [
      { feature: 'Built-in Payment Plans with Auto Debit', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Integrated Membership Plans', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Online Reputation Management', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Deeply Integrated AI-Driven Phone System', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Built-in Teledentistry Features', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Automated Patient Follow-up Communication', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'warning' },
    ],
  },
  experience: {
    title: 'Patient Experience',
    description: 'With modern tools like online scheduling, digital forms and digital payments, DenStack helps your practice offer a better patient experience.',
    features: [
      { feature: 'Digital Treatment Plan Presentation with electronic signatures', carestack: 'advanced', dentrix: 'warning', eaglesoft: 'warning', openDental: 'warning' },
      { feature: 'Check-in Kiosks', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'x' },
      { feature: 'Pay-By-Text & Pay-By-Email', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'warning' },
      { feature: 'Electronic Patient Statements with Scan-To-Pay', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'warning' },
      { feature: 'Integrated Patient Portal', carestack: 'advanced', dentrix: 'x', eaglesoft: 'x', openDental: 'check' },
      { feature: 'Configurable Online Forms and Medical History', carestack: 'advanced', dentrix: 'warning', eaglesoft: 'warning', openDental: 'check' },
    ],
  },
};

function IconCell({ type }: { type: 'check' | 'x' | 'warning' | 'dollar' }) {
  switch (type) {
    case 'check':
      return <Check className="w-5 h-5 text-green-600" />;
    case 'x':
      return <X className="w-5 h-5 text-red-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-gray-400" />;
    case 'dollar':
      return <span className="text-gray-600 font-medium text-base">$</span>;
  }
}

export function ComparisonPage() {
  const [selectedTab, setSelectedTab] = useState<ComparisonTab>('operational');
  const currentData = comparisonData[selectedTab];

  return (
    <div className="min-h-screen bg-[#ebe8e3] font-['Inter',sans-serif]">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-[#ebe8e3]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62 }}
            >
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                HOW DENSTACK COMPARES
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
                One Cloud Platform to Simplify All Your Dental Software Needs
              </h1>
              <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Choosing dental software can be confusing. But with DenStack, it's easy to see the many advantages of our all-in-one, cloud-based software. Many of DenStack's integrated features would be paid upgrades under other practice management software. (Or, even worse, would require 3rd party add-on software to achieve the same functionality.)
              </p>

              {/* Tab Buttons */}
              <div className="inline-flex items-center gap-0 bg-white rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setSelectedTab('operational')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedTab === 'operational'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-lime-400'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Operational Efficiency
                </button>
                <button
                  onClick={() => setSelectedTab('growth')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedTab === 'growth'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-lime-400'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Practice Growth
                </button>
                <button
                  onClick={() => setSelectedTab('experience')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedTab === 'experience'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-lime-400'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Patient Experience
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="pb-20">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden p-12"
            >
              {/* Section Title and Description */}
              <div className="flex justify-between items-start mb-12">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentData.title}</h2>
                  <p className="text-gray-600 max-w-2xl">{currentData.description}</p>
                </div>
                <button className="ml-8 px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-lg shadow hover:shadow-lg transition-all whitespace-nowrap">
                  Book Free Demo
                </button>
              </div>

              {/* Table */}
              <div>
                {/* Table Header */}
                <div className="grid grid-cols-[2fr,1.2fr,1fr,1fr,1fr] gap-4 mb-6 items-end">
                  <div className="text-sm font-semibold text-gray-900 pb-3 border-b-2 border-gray-900">
                    Features
                  </div>
                  <div className="pb-3 border-b-2 border-green-600">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">DenStack</span>
                    </div>
                  </div>
                  <div className="text-center text-sm font-semibold text-gray-900 pb-3 border-b-2 border-gray-900">
                    Dentrix
                  </div>
                  <div className="text-center text-sm font-semibold text-gray-900 pb-3 border-b-2 border-gray-900">
                    Eaglesoft
                  </div>
                  <div className="text-center text-sm font-semibold text-gray-900 pb-3 border-b-2 border-gray-900">
                    Open Dental
                  </div>
                </div>

                {/* Table Body */}
                <div className="space-y-3">
                  {currentData.features.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="grid grid-cols-[2fr,1.2fr,1fr,1fr,1fr] gap-4 items-center py-3"
                    >
                      <div className="text-gray-700 text-sm pr-4">
                        {item.feature}
                      </div>
                      <div className="bg-green-50 rounded-lg py-2.5 px-4 flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">Advanced</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <IconCell type={item.dentrix} />
                      </div>
                      <div className="flex items-center justify-center">
                        <IconCell type={item.eaglesoft} />
                      </div>
                      <div className="flex items-center justify-center">
                        <IconCell type={item.openDental} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Advanced</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-600" />
                        <span>Does not exist</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-gray-400" />
                        <span>Limited Capabilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-600">$</span>
                        <span>Third Party Integration Cost</span>
                      </div>
                    </div>
                    <div className="text-gray-500 italic">
                      *Data from 3rd Party Services
                    </div>
                  </div>
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
