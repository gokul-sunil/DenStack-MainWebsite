'use client';

import { motion } from 'motion/react';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'per month',
    description: 'Perfect for solo practitioners',
    features: [
      'Up to 500 active patients',
      'Online appointment scheduling',
      'Basic patient management',
      'Digital charting',
      'Payment processing',
      'Email support',
      'Mobile app access',
    ],
    notIncluded: [
      'Advanced analytics',
      'Multi-location support',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$599',
    period: 'per month',
    description: 'For growing practices',
    features: [
      'Unlimited active patients',
      'Advanced scheduling & reminders',
      'Complete patient management',
      'Clinical workflows & imaging',
      'Revenue cycle management',
      'Advanced analytics & reporting',
      'Multi-user access',
      'Priority phone & email support',
      'API access',
      'Custom forms & templates',
    ],
    notIncluded: [
      'Multi-location support',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For DSOs and multi-location groups',
    features: [
      'Everything in Growth, plus:',
      'Multi-location management',
      'Custom integrations',
      'Advanced security & compliance',
      'Dedicated account manager',
      'Custom onboarding & training',
      'SLA guarantees',
      '24/7 phone support',
      'White-label options',
      'Custom development',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Scheduling',
    features: [
      { name: 'Online booking', starter: true, growth: true, enterprise: true },
      { name: 'Automated reminders', starter: true, growth: true, enterprise: true },
      { name: 'Waitlist management', starter: false, growth: true, enterprise: true },
      { name: 'Multi-location scheduling', starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: 'Clinical',
    features: [
      { name: 'Digital charting', starter: true, growth: true, enterprise: true },
      { name: 'Treatment planning', starter: true, growth: true, enterprise: true },
      { name: 'Image management', starter: false, growth: true, enterprise: true },
      { name: 'Clinical workflows', starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: 'Billing',
    features: [
      { name: 'Payment processing', starter: true, growth: true, enterprise: true },
      { name: 'Insurance verification', starter: false, growth: true, enterprise: true },
      { name: 'Claims management', starter: false, growth: true, enterprise: true },
      { name: 'Revenue cycle analytics', starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    features: [
      { name: 'Basic reports', starter: true, growth: true, enterprise: true },
      { name: 'Advanced analytics', starter: false, growth: true, enterprise: true },
      { name: 'Custom dashboards', starter: false, growth: true, enterprise: true },
      { name: 'Multi-location reporting', starter: false, growth: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 30-day free trial with full access to all features in your selected plan. No credit card required to start.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any billing adjustments.',
  },
  {
    question: 'What is included in onboarding?',
    answer: 'All plans include guided setup, data migration assistance, and training resources. Enterprise customers receive dedicated onboarding with a customer success manager.',
  },
  {
    question: 'Do you charge per provider or per location?',
    answer: 'Our pricing is per location for Starter and Growth plans. Enterprise pricing is customized based on your number of locations and specific needs.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We are fully HIPAA compliant with enterprise-grade security, including encryption at rest and in transit, regular security audits, and SOC 2 Type II certification.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We integrate with major imaging systems, labs, insurance clearinghouses, and payment processors. Enterprise plans include custom integration development.',
  },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Transparent Pricing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Choose the Perfect Plan for Your Practice
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Start with a 30-day free trial. No credit card required. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    plan.popular
                      ? 'border-blue-600 shadow-2xl scale-105'
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period !== 'contact us' && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    {plan.period === 'contact us' && (
                      <p className="text-sm text-gray-500">{plan.period}</p>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-8 py-6 rounded-xl font-semibold text-base ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3 opacity-40">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading title="Detailed Feature Comparison" centered />

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Starter</th>
                      <th className="text-center p-6 font-semibold text-gray-900 bg-blue-50">Growth</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.flatMap((category) => [
                      <tr key={`category-${category.category}`} className="bg-gray-50">
                        <td colSpan={4} className="p-4 font-semibold text-gray-900">
                          {category.category}
                        </td>
                      </tr>,
                      ...category.features.map((feature) => (
                        <tr key={`${category.category}-${feature.name}`} className="border-b border-gray-100">
                          <td className="p-4 text-gray-700">{feature.name}</td>
                          <td className="p-4 text-center">
                            {feature.starter ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center bg-blue-50/50">
                            {feature.growth ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))
                    ])}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              centered
            />

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you find the perfect plan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-xl font-semibold transition-all"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
