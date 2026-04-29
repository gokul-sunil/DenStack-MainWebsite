'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { motion } from 'motion/react';
import { 
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'Getting Started',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How long does it take to implement DenStack?',
        answer: 'Implementation time varies by practice size. Solo practices typically go live in 2-4 weeks, while multi-location groups may take 2-3 months. Our dedicated onboarding team works with you to ensure a smooth transition with minimal disruption.'
      },
      {
        question: 'Do you offer data migration from our current system?',
        answer: 'Yes! We provide complimentary data migration services for all new customers. Our team will migrate your patient records, appointments, treatment history, and other critical data from your existing practice management system.'
      },
      {
        question: 'What training and support do you provide?',
        answer: 'We offer comprehensive training including live onboarding sessions, video tutorials, detailed documentation, and ongoing support. All plans include email support, with higher tiers offering phone support and dedicated account managers.'
      },
      {
        question: 'Can I try DenStack before committing?',
        answer: 'Absolutely! We offer a 30-day free trial with full access to all features in your selected plan. No credit card required to start. We also provide personalized demos to show you how DenStack works for your specific practice needs.'
      }
    ]
  },
  {
    category: 'Features & Functionality',
    icon: HelpCircle,
    faqs: [
      {
        question: 'Does DenStack integrate with digital imaging systems?',
        answer: 'Yes, DenStack integrates with all major digital imaging systems including Dexis, Schick, Carestream, and others. Images are stored securely and accessible directly within the patient record for easy viewing during appointments.'
      },
      {
        question: 'Can patients book appointments online?',
        answer: 'Yes! Our patient portal allows patients to book, reschedule, and cancel appointments 24/7 from any device. You have full control over which appointment types are available for online booking and can set rules for scheduling.'
      },
      {
        question: 'How does the automated reminder system work?',
        answer: 'Our intelligent reminder system sends multi-channel notifications (email, SMS, phone) based on your preferences. You can customize timing, frequency, and messaging. The system automatically reduces no-shows by up to 40%.'
      },
      {
        question: 'Is there a mobile app for providers and staff?',
        answer: 'Yes, we offer native iOS and Android apps for both providers and patients. Providers can access schedules, patient records, and treatment notes on the go. Patients can book appointments, view records, and communicate with the practice.'
      }
    ]
  },
  {
    category: 'Pricing & Billing',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What is included in the monthly price?',
        answer: 'Our monthly subscription includes access to the platform, unlimited users at your location, data storage, automatic updates, email support, and regular feature enhancements. Higher tier plans include additional features like advanced analytics and dedicated support.'
      },
      {
        question: 'Are there any setup fees or long-term contracts?',
        answer: 'We charge a one-time setup fee for Enterprise plans that includes custom configuration and dedicated onboarding. Starter and Growth plans have no setup fees. All plans are month-to-month with no long-term contracts required.'
      },
      {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we will prorate any adjustments. Our team can help you determine the right plan for your needs.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) and ACH bank transfers. Enterprise customers can also request invoice billing with net-30 payment terms.'
      }
    ]
  },
  {
    category: 'Security & Compliance',
    icon: HelpCircle,
    faqs: [
      {
        question: 'Is DenStack HIPAA compliant?',
        answer: 'Yes, DenStack is fully HIPAA compliant. We implement comprehensive administrative, physical, and technical safeguards to protect patient health information. All customers receive a Business Associate Agreement (BAA) as part of their subscription.'
      },
      {
        question: 'Where is my data stored and backed up?',
        answer: 'Your data is stored in secure, HIPAA-compliant data centers with enterprise-grade encryption at rest and in transit. We perform automatic daily backups with 30-day retention and maintain geographic redundancy for disaster recovery.'
      },
      {
        question: 'What certifications do you have?',
        answer: 'DenStack maintains SOC 2 Type II certification, HIPAA compliance, and follows industry best practices for security. We undergo annual third-party security audits and penetration testing to ensure the highest level of data protection.'
      },
      {
        question: 'Who has access to my patient data?',
        answer: 'Only authorized users in your practice have access to patient data. You control user permissions with role-based access. DenStack employees cannot access your data unless you explicitly grant permission for support purposes, and all access is logged.'
      }
    ]
  },
  {
    category: 'Technical & Support',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What are the system requirements?',
        answer: 'DenStack is cloud-based and works on any device with a modern web browser (Chrome, Firefox, Safari, Edge). No special hardware or software installation required. For optimal performance, we recommend a high-speed internet connection.'
      },
      {
        question: 'What happens if I lose internet connection?',
        answer: 'DenStack is cloud-based and requires internet connectivity. However, we offer offline mode for critical functions like viewing the schedule and patient notes. Data syncs automatically when connection is restored. We recommend having a backup internet connection.'
      },
      {
        question: 'How often do you release updates?',
        answer: 'We release new features and improvements continuously throughout the year. Major updates are announced in advance and deployed during off-hours to minimize disruption. All updates are automatic and included in your subscription at no extra cost.'
      },
      {
        question: 'What support channels are available?',
        answer: 'We offer multiple support channels: email support (all plans), phone support (Growth and Enterprise), live chat, comprehensive knowledge base, video tutorials, and webinars. Enterprise customers get a dedicated account manager and priority support with <15 minute response times.'
      }
    ]
  }
];

export function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Help Center
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about DenStack
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.category}-${index}`}
                          className="bg-white border-2 border-gray-200 rounded-xl px-6 hover:border-blue-300 transition-colors"
                        >
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pt-2 pb-6 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100">
                Our team is here to help. Reach out through any of these channels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: 'Live Chat',
                  description: 'Chat with our team',
                  action: 'Start Chat',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: Phone,
                  title: 'Phone Support',
                  description: '1-800-DENTCARE',
                  action: 'Call Now',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: Mail,
                  title: 'Email Support',
                  description: 'connect@denstack.in',
                  action: 'Send Email',
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                    <p className="text-blue-100 mb-4">{channel.description}</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full">
                      {channel.action}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

