'use client';

import { useState } from 'react';
import { Calendar, Stethoscope, DollarSign, BarChart3, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import { motion } from 'motion/react';

const productTabs = [
  {
    id: 'scheduling',
    label: 'Scheduling',
    icon: Calendar,
    features: [
      'Intelligent appointment booking',
      'Automated reminders & confirmations',
      'Online patient self-scheduling',
      'Multi-location calendar management',
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical',
    icon: Stethoscope,
    features: [
      'Digital charting & treatment planning',
      'Clinical notes & documentation',
      'Image management & perio charts',
      'Integrated imaging systems',
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: DollarSign,
    features: [
      'Automated insurance verification',
      'Streamlined claims processing',
      'Payment processing & plans',
      'Revenue cycle optimization',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    features: [
      'Real-time performance dashboards',
      'Custom reports & insights',
      'Production & collection tracking',
      'Patient retention analytics',
    ],
  },
];

export function ProductOverviewSection() {
  const [activeTab, setActiveTab] = useState('scheduling');

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Overview"
          title="Everything you need to run a thriving practice"
          description="Powerful features that work together seamlessly"
          centered
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-transparent mb-8 sm:mb-12 h-auto">
            {productTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-white border border-gray-200 rounded-xl p-3 sm:p-4 h-auto flex flex-col items-center space-y-1.5 sm:space-y-2 hover:border-blue-300 transition-all"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-medium text-sm sm:text-base">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {productTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{tab.label}</h3>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {tab.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-3 bg-white p-3 sm:p-4 rounded-xl border border-gray-200"
                        >
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* UI Preview */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200"
                  >
                    {/* Mock UI */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          <span className="font-semibold text-sm sm:text-base text-gray-900">{tab.label} Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-xs sm:text-sm text-gray-600">Live</span>
                        </div>
                      </div>

                      {/* Content Cards */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl"
                          >
                            <div className="h-2 w-12 sm:w-16 bg-blue-300 rounded mb-2" />
                            <div className="h-5 sm:h-6 w-10 sm:w-12 bg-blue-600 rounded mb-1" />
                            <div className="h-2 w-16 sm:w-20 bg-blue-200 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Chart */}
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                        <div className="h-32 sm:h-40 flex items-end justify-between space-x-2">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                              style={{ height: `${Math.random() * 60 + 40}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
