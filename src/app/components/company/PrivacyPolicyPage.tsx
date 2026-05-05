'use client';

import { Shield, Eye, Lock, Share2, UserCheck, ExternalLink, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { motion } from 'motion/react';

const sections = [
  {
    icon: Eye,
    id: 'information-we-collect',
    title: 'Information We Collect',
    subsections: [
      {
        subtitle: 'Personal Information',
        content:
          'We may collect personal information such as your name, email address, phone number, clinic details, and any other information you provide while creating an account, contacting us, or using our services.',
      },
      {
        subtitle: 'Usage Data',
        content:
          'We may automatically collect information about how you access and use our website, including your IP address, browser type, browser version, pages visited, date and time of visits, time spent on pages, device identifiers, and other diagnostic data.',
      },
      {
        subtitle: 'Cookies and Tracking Technologies',
        content:
          'We use cookies and similar tracking technologies to enhance your experience, improve website functionality, and analyze website traffic. You may choose to disable cookies through your browser settings; however, some features of the website may not function properly.',
      },
      {
        subtitle: 'Payment Information',
        content:
          'When you make payments for our services, we may collect billing-related information. All payment transactions are securely processed through trusted third-party payment gateways, and we do not store your complete card or banking details on our servers.',
      },
    ],
  },
  {
    icon: Shield,
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content:
      'We use the information collected for the following purposes:',
    list: [
      'To provide, operate, and improve our services',
      'To personalize user experience and customer support',
      'To process transactions and manage subscriptions or payments',
      'To send important updates, notifications, and promotional communications (with your consent)',
      'To analyze website usage and improve platform performance',
      'To maintain security, prevent fraud, and comply with legal obligations',
    ],
  },
  {
    icon: Share2,
    id: 'data-sharing',
    title: 'Data Sharing and Disclosure',
    content:
      'We do not sell, rent, or trade your personal information to third parties. However, we may share information in the following situations:',
    subsections: [
      {
        subtitle: 'Service Providers',
        content:
          'We may work with trusted third-party vendors and partners who assist us in operating our platform, such as cloud hosting providers, payment gateways, analytics providers, and communication services. These parties are authorized to use your information only as necessary to provide services on our behalf.',
      },
      {
        subtitle: 'Legal Compliance',
        content:
          'We may disclose information if required by law, regulation, legal process, or governmental request.',
      },
      {
        subtitle: 'Business Transfers',
        content:
          'In case of a merger, acquisition, restructuring, or sale of company assets, your information may be transferred as part of the business transaction. Users will be notified of any significant changes affecting their data.',
      },
    ],
  },
  {
    icon: Lock,
    id: 'data-security',
    title: 'Data Security',
    content:
      'We implement reasonable technical, administrative, and physical security measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure. While we strive to use commercially acceptable methods to protect your data, no online system or method of electronic storage is completely secure.',
  },
  {
    icon: UserCheck,
    id: 'your-rights',
    title: 'Your Rights and Choices',
    subsections: [
      {
        subtitle: 'Access and Update Information',
        content:
          'You may review and update your personal information by accessing your account or contacting us directly.',
      },
      {
        subtitle: 'Marketing Communications',
        content:
          'You may opt out of promotional emails or communications at any time by using the unsubscribe option provided in the communication or by contacting us.',
      },
    ],
  },
  {
    icon: ExternalLink,
    id: 'third-party-links',
    title: 'Third-Party Links',
    content:
      'Our website may contain links to external websites or services that are not operated by Denstack. We are not responsible for the privacy practices or content of third-party websites. We encourage users to review the privacy policies of those websites before providing any personal information.',
  },
  {
    icon: RefreshCw,
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    content:
      'Denstack may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or our business operations. Any updates will be posted on this page along with the revised effective date.',
  },
];

const quickLinks = [
  { label: 'Information We Collect', href: '#information-we-collect' },
  { label: 'How We Use Your Information', href: '#how-we-use' },
  { label: 'Data Sharing and Disclosure', href: '#data-sharing' },
  { label: 'Data Security', href: '#data-security' },
  { label: 'Your Rights and Choices', href: '#your-rights' },
  { label: 'Third-Party Links', href: '#third-party-links' },
  { label: 'Changes to This Policy', href: '#changes' },
];

export function PrivacyPolicyPage() {
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
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We value your privacy and are committed to protecting your personal information.
                Learn how we collect, use, and safeguard your data.
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
                    <Shield className="w-8 h-8 mb-3 text-blue-200" />
                    <h3 className="text-base font-semibold mb-2">Questions about your data?</h3>
                    <p className="text-sm text-blue-100 mb-4">
                      Reach out to us and we'll address your privacy concerns.
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

              {/* Policy Content */}
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
                    Welcome to Denstack. We value your privacy and are committed to protecting your personal
                    information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your data when you visit our website at{' '}
                    <a href="https://denstack.in" className="text-blue-600 hover:underline">
                      denstack.in
                    </a>{' '}
                    and use our services. By accessing or using our website and services, you agree to the
                    terms outlined in this Privacy Policy.
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
                    If you have any questions, concerns, or requests regarding this Privacy Policy or
                    your personal data, please reach out to us.
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