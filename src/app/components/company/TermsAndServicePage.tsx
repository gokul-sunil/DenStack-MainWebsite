'use client';

import { FileText, Users, CreditCard, ShieldAlert, Ban, Scale, RefreshCw, Globe, Mail, Phone, MapPin, AlertTriangle, Handshake, ScrollText } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { motion } from 'motion/react';

const sections = [
  {
    icon: Users,
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content:
      'By accessing or using the Denstack platform, website, or any associated services, you confirm that you are at least 18 years of age, have read and understood these Terms of Service, and agree to be bound by them. If you are using Denstack on behalf of a clinic, organization, or business entity, you represent that you have the authority to bind that entity to these Terms.',
  },
  {
    icon: ScrollText,
    id: 'use-of-services',
    title: 'Use of Services',
    content: 'You agree to use Denstack only for lawful purposes and in accordance with these Terms. Specifically, you agree not to:',
    list: [
      'Use the platform in any way that violates applicable local, national, or international laws or regulations',
      'Transmit any unsolicited or unauthorized advertising or promotional material',
      'Impersonate any person or entity or misrepresent your affiliation with any person or entity',
      'Attempt to gain unauthorized access to any part of the platform or its related systems',
      'Use the platform to store or transmit malicious code, viruses, or disruptive data',
      'Reverse engineer, decompile, or disassemble any part of the software',
      'Use automated tools (bots, scrapers, crawlers) to access or interact with the platform without our written consent',
    ],
  },
  {
    icon: FileText,
    id: 'accounts',
    title: 'Accounts and Registration',
    subsections: [
      {
        subtitle: 'Account Creation',
        content:
          'To access certain features of Denstack, you must register for an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.',
      },
      {
        subtitle: 'Account Security',
        content:
          'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at info@denstack.in if you suspect any unauthorized use of your account.',
      },
      {
        subtitle: 'Account Termination',
        content:
          'We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these Terms, engaged in fraudulent activity, or if your account poses a risk to other users or the integrity of the platform.',
      },
    ],
  },
  {
    icon: CreditCard,
    id: 'billing',
    title: 'Billing and Payments',
    subsections: [
      {
        subtitle: 'Subscription Plans',
        content:
          'Denstack offers various subscription plans. By selecting a plan, you agree to pay all applicable fees as described on our pricing page. All fees are in the currency indicated at the time of purchase.',
      },
      {
        subtitle: 'Payment Processing',
        content:
          'Payments are processed through trusted third-party payment gateways. By providing payment information, you authorize us to charge the applicable fees to your selected payment method.',
      },
      {
        subtitle: 'Refunds and Cancellations',
        content:
          'Subscription fees are non-refundable except where required by applicable law. You may cancel your subscription at any time; however, you will retain access to the platform until the end of the current billing period.',
      },
      {
        subtitle: 'Price Changes',
        content:
          'We reserve the right to modify our pricing at any time. We will provide at least 30 days\' notice before any price changes take effect. Continued use of the service after a price change constitutes acceptance of the new pricing.',
      },
    ],
  },
  {
    icon: Handshake,
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content:
      'All content, features, functionality, software, and materials available on the Denstack platform — including but not limited to text, graphics, logos, icons, images, and code — are the exclusive property of Denstack (operated by Shamily Ventures Pvt Ltd) or its licensors and are protected by applicable intellectual property laws.',
    subsections: [
      {
        subtitle: 'Limited License',
        content:
          'We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the platform solely for your internal business purposes in accordance with these Terms.',
      },
      {
        subtitle: 'Your Content',
        content:
          'You retain ownership of all data and content you upload to the platform ("Your Content"). By uploading content, you grant Denstack a limited license to store, process, and display Your Content solely for the purpose of providing the services to you.',
      },
    ],
  },
  {
    icon: ShieldAlert,
    id: 'disclaimers',
    title: 'Disclaimers and Limitation of Liability',
    subsections: [
      {
        subtitle: 'No Warranty',
        content:
          'The Denstack platform is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      },
      {
        subtitle: 'Limitation of Liability',
        content:
          'To the maximum extent permitted by law, Denstack and its affiliates, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use the platform.',
      },
      {
        subtitle: 'Service Availability',
        content:
          'We do not guarantee that the platform will be available at all times, uninterrupted, or error-free. We may perform maintenance, updates, or modifications that temporarily affect availability.',
      },
    ],
  },
  {
    icon: Ban,
    id: 'prohibited',
    title: 'Prohibited Activities',
    content: 'In addition to the restrictions outlined above, the following activities are strictly prohibited on the Denstack platform:',
    list: [
      'Uploading or sharing patient data without proper consent in violation of applicable healthcare privacy laws',
      'Using the platform to conduct or facilitate any form of fraud, money laundering, or financial crime',
      'Sharing your account credentials with unauthorized third parties',
      'Attempting to probe, scan, or test the vulnerability of the platform or any connected systems',
      'Interfering with or disrupting the integrity or performance of the platform',
      'Collecting or harvesting any personally identifiable information from the platform without authorization',
    ],
  },
  {
    icon: Globe,
    id: 'governing-law',
    title: 'Governing Law and Disputes',
    content:
      'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Trivandrum, Kerala, India.',
    subsections: [
      {
        subtitle: 'Dispute Resolution',
        content:
          'Before initiating any legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at info@denstack.in. We will make reasonable efforts to resolve the dispute within 30 days of receiving notice.',
      },
    ],
  },
  {
    icon: Scale,
    id: 'indemnification',
    title: 'Indemnification',
    content:
      'You agree to indemnify, defend, and hold harmless Denstack, Shamily Ventures Pvt Ltd, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way connected with your access to or use of the platform, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.',
  },
  {
    icon: RefreshCw,
    id: 'changes',
    title: 'Changes to These Terms',
    content:
      'We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or a prominent notice on our platform at least 14 days before the changes take effect. Your continued use of Denstack after the effective date of any changes constitutes your acceptance of the revised Terms.',
  },
];

const quickLinks = [
  { label: 'Acceptance of Terms', href: '#acceptance' },
  { label: 'Use of Services', href: '#use-of-services' },
  { label: 'Accounts and Registration', href: '#accounts' },
  { label: 'Billing and Payments', href: '#billing' },
  { label: 'Intellectual Property', href: '#intellectual-property' },
  { label: 'Disclaimers & Liability', href: '#disclaimers' },
  { label: 'Prohibited Activities', href: '#prohibited' },
  { label: 'Governing Law', href: '#governing-law' },
  { label: 'Indemnification', href: '#indemnification' },
  { label: 'Changes to These Terms', href: '#changes' },
];

export function TermsAndServicePage() {
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
                Legal
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using Denstack. By accessing our platform,
                you agree to be bound by the conditions outlined below.
              </p>
              <p className="mt-4 text-sm text-gray-500">Effective Date: January 1, 2025</p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">

              {/* Sticky Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-28">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Quick Navigation
                    </h3>
                    <nav className="space-y-1">
                      {quickLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Contact Card */}
                  <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                    <AlertTriangle className="w-8 h-8 mb-3 text-blue-200" />
                    <h3 className="text-base font-semibold mb-2">Questions about our Terms?</h3>
                    <p className="text-sm text-blue-100 mb-4">
                      Our team is happy to clarify any part of these Terms of Service.
                    </p>
                    <a
                      href="mailto:info@denstack.in"
                      className="inline-block text-sm font-medium bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </motion.aside>

              {/* Terms Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 space-y-10"
              >
                {/* Introduction */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Denstack, a dental practice management platform operated by{' '}
                    <span className="font-medium text-gray-800">Shamily Ventures Pvt Ltd</span>. These
                    Terms of Service ("Terms") govern your access to and use of our website at{' '}
                    <a href="https://denstack.in" className="text-blue-600 hover:underline">
                      denstack.in
                    </a>{' '}
                    and all associated products and services. By using Denstack, you agree to these Terms
                    in full. If you do not agree, please discontinue use of our platform immediately.
                  </p>
                </div>

                {/* Sections */}
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.07 }}
                      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center space-x-4 mb-5">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>

                      {section.content && (
                        <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                      )}

                      {section.list && (
                        <ul className="space-y-2 mb-4">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                              <span className="text-gray-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.subsections && (
                        <div className="space-y-5 mt-4">
                          {section.subsections.map((sub, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5">
                              <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {sub.subtitle}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-sm">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
                >
                  <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                  <p className="text-blue-100 mb-6">
                    If you have any questions or concerns about these Terms of Service, please don't
                    hesitate to reach out to our team.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+918714032321"
                      className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>+91 87140 32321</span>
                    </a>
                    <a
                      href="mailto:info@denstack.in"
                      className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>info@denstack.in</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100">
                        Shamily Ventures Pvt Ltd, Thriuvonam Building, Trivandrum, Kerala - 695573, India
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}