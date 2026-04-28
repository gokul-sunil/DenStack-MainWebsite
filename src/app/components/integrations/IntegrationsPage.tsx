'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Image, Activity, DollarSign, MessageSquare, BarChart, ChevronDown, Star } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Input } from '@/app/components/ui/input';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Category menu items
const categoryMenuItems = [
  { icon: Image, label: 'Dental Imaging' },
  { icon: Activity, label: 'Clinical' },
  { icon: DollarSign, label: 'Revenue Cycle Management' },
  { icon: MessageSquare, label: 'Patient Engagement' },
  { icon: BarChart, label: 'Analytics' },
];

interface Integration {
  name: string;
  category: string;
  description: string;
  status: 'available' | 'coming-soon';
  logo: string; // Color for placeholder logo
  bgColor?: string;
  textColor?: string;
}

const integrations: Integration[] = [
  {
    name: 'Aeka',
    category: 'Dental Imaging',
    description: 'Digital imaging platform',
    status: 'available',
    logo: '🦷',
    bgColor: '#000000',
    textColor: '#ffffff',
  },
  {
    name: 'SOTA Cloud',
    category: 'Dental Imaging',
    description: 'Cloud-based imaging solution',
    status: 'available',
    logo: 'S',
    bgColor: '#1E90FF',
    textColor: '#ffffff',
  },
  {
    name: 'Apteryx Imaging',
    category: 'Dental Imaging',
    description: 'Comprehensive imaging software',
    status: 'available',
    logo: 'X',
    bgColor: '#000080',
    textColor: '#ffffff',
  },
  {
    name: 'Carestream',
    category: 'Dental Imaging',
    description: 'Connect with Carestream dental imaging',
    status: 'available',
    logo: 'C',
    bgColor: '#FF6B35',
    textColor: '#ffffff',
  },
  {
    name: 'Dentaleye',
    category: 'Dental Imaging',
    description: 'Advanced imaging technology',
    status: 'available',
    logo: '👁',
    bgColor: '#87CEEB',
    textColor: '#ffffff',
  },
  {
    name: 'Dexis',
    category: 'Dental Imaging',
    description: 'Seamless integration with Dexis imaging systems',
    status: 'available',
    logo: '◉',
    bgColor: '#2F4F4F',
    textColor: '#FF6347',
  },
  {
    name: 'Dolphin',
    category: 'Dental Imaging',
    description: 'Orthodontic imaging software',
    status: 'available',
    logo: '🐬',
    bgColor: '#4169E1',
    textColor: '#ffffff',
  },
  {
    name: 'DTX Studio',
    category: 'Dental Imaging',
    description: 'Implant planning software',
    status: 'available',
    logo: '✦',
    bgColor: '#20B2AA',
    textColor: '#ffffff',
  },
  {
    name: 'Mi Pacs',
    category: 'Dental Imaging',
    description: 'PACS image management',
    status: 'available',
    logo: 'M',
    bgColor: '#1E90FF',
    textColor: '#ffffff',
  },
  {
    name: 'Newtom',
    category: 'Dental Imaging',
    description: 'CBCT imaging solutions',
    status: 'available',
    logo: 'N',
    bgColor: '#000000',
    textColor: '#00CED1',
  },
  {
    name: 'OnePix',
    category: 'Dental Imaging',
    description: 'Digital radiography platform',
    status: 'available',
    logo: '□',
    bgColor: '#5F9EA0',
    textColor: '#ffffff',
  },
  {
    name: 'Sidexis',
    category: 'Dental Imaging',
    description: 'Sirona imaging software',
    status: 'available',
    logo: '⬡',
    bgColor: '#FF8C00',
    textColor: '#ffffff',
  },
  {
    name: 'SOTA Desktop',
    category: 'Dental Imaging',
    description: 'Desktop imaging application',
    status: 'available',
    logo: 'S',
    bgColor: '#1E90FF',
    textColor: '#ffffff',
  },
  {
    name: 'TigerView',
    category: 'Dental Imaging',
    description: 'Image viewing software',
    status: 'available',
    logo: '🐅',
    bgColor: '#D2691E',
    textColor: '#ffffff',
  },
  {
    name: 'VixWin',
    category: 'Dental Imaging',
    description: 'Gendex imaging software',
    status: 'available',
    logo: 'V',
    bgColor: '#000080',
    textColor: '#ffffff',
  },
  {
    name: 'XDR',
    category: 'Dental Imaging',
    description: 'Digital radiography solution',
    status: 'available',
    logo: 'X',
    bgColor: '#8B0000',
    textColor: '#ffffff',
  },
  {
    name: 'Patterson',
    category: 'Dental Imaging',
    description: 'Patterson imaging integration',
    status: 'available',
    logo: 'P',
    bgColor: '#003366',
    textColor: '#ffffff',
  },
  {
    name: 'Cliniview Imaging',
    category: 'Dental Imaging',
    description: 'Clinical imaging platform',
    status: 'available',
    logo: 'i',
    bgColor: '#191970',
    textColor: '#ffffff',
  },
  // Clinical
  {
    name: 'Schick',
    category: 'Clinical',
    description: 'Integrate Schick digital radiography',
    status: 'available',
    logo: '🏥',
    bgColor: '#8b5cf6',
    textColor: '#ffffff',
  },
  // Revenue Cycle Management
  {
    name: 'LabCorp',
    category: 'Revenue Cycle Management',
    description: 'Direct lab order management',
    status: 'available',
    logo: 'L',
    bgColor: '#10b981',
    textColor: '#ffffff',
  },
  {
    name: 'Glidewell',
    category: 'Revenue Cycle Management',
    description: 'Streamlined Glidewell lab orders',
    status: 'available',
    logo: 'G',
    bgColor: '#f59e0b',
    textColor: '#ffffff',
  },
  {
    name: 'Stripe',
    category: 'Revenue Cycle Management',
    description: 'Secure payment processing',
    status: 'available',
    logo: 'S',
    bgColor: '#6366f1',
    textColor: '#ffffff',
  },
  {
    name: 'Square',
    category: 'Revenue Cycle Management',
    description: 'Accept payments with Square',
    status: 'available',
    logo: '□',
    bgColor: '#000000',
    textColor: '#ffffff',
  },
  {
    name: 'DentalXChange',
    category: 'Revenue Cycle Management',
    description: 'Insurance clearinghouse integration',
    status: 'available',
    logo: 'D',
    bgColor: '#3b82f6',
    textColor: '#ffffff',
  },
  {
    name: 'NEA',
    category: 'Revenue Cycle Management',
    description: 'National Electronic Attachments',
    status: 'available',
    logo: 'N',
    bgColor: '#06b6d4',
    textColor: '#ffffff',
  },
  {
    name: 'QuickBooks',
    category: 'Revenue Cycle Management',
    description: 'Accounting software integration',
    status: 'coming-soon',
    logo: 'Q',
    bgColor: '#2ca01c',
    textColor: '#ffffff',
  },
  // Patient Engagement
  {
    name: 'Twilio',
    category: 'Patient Engagement',
    description: 'SMS and voice communications',
    status: 'available',
    logo: 'T',
    bgColor: '#ef4444',
    textColor: '#ffffff',
  },
  {
    name: 'Mailchimp',
    category: 'Patient Engagement',
    description: 'Email marketing automation',
    status: 'available',
    logo: 'M',
    bgColor: '#ffe01b',
    textColor: '#000000',
  },
  {
    name: 'Weave',
    category: 'Patient Engagement',
    description: 'Patient communication platform',
    status: 'available',
    logo: 'W',
    bgColor: '#4f46e5',
    textColor: '#ffffff',
  },
  // Analytics
  {
    name: 'Dentrix Ascend',
    category: 'Analytics',
    description: 'Dentrix cloud-based system',
    status: 'coming-soon',
    logo: 'D',
    bgColor: '#7c3aed',
    textColor: '#ffffff',
  },
];

// FAQ Content Component
function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I connect a new integration?',
      answer: 'You can connect a new integration by navigating to the specific integration card and clicking on the "Connect" button. Our support team will guide you through the setup process to ensure seamless integration with your existing systems.',
    },
    {
      question: 'Are all integrations included in my plan?',
      answer: 'Most integrations are included in all plans, but some premium integrations may require an upgraded plan or additional fees. Please contact our sales team to learn more about specific integration requirements.',
    },
    {
      question: 'How long does it take to set up an integration?',
      answer: 'Setup times vary depending on the integration. Most integrations can be configured within 15-30 minutes. More complex integrations involving data migration or custom workflows may take 1-2 business days with assistance from our implementation team.',
    },
    {
      question: 'Can I request a new integration?',
      answer: 'Absolutely! We regularly add new integrations based on customer feedback. You can submit integration requests through your account dashboard or by contacting our support team. We prioritize integrations based on demand and feasibility.',
    },
    {
      question: 'What happens to my data during integration?',
      answer: 'Your data security is our top priority. All integrations use encrypted connections and follow industry best practices. Data is synchronized securely between systems, and you maintain full control over what information is shared.',
    },
    {
      question: 'Do integrations require technical expertise?',
      answer: 'Most integrations are designed to be user-friendly and require minimal technical knowledge. We provide step-by-step guides, video tutorials, and live support to help you through the process. For more complex integrations, our team can handle the setup for you.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="bg-[#f5f6f7] rounded-2xl overflow-hidden border border-[#e5e7eb]"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-900 pr-8">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-280 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Dental Imaging');
  const [searchQuery, setSearchQuery] = useState('');

  // Create refs for each category section
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.getAttribute('data-category');
          if (category) {
            setSelectedCategory(category);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle sidebar click to scroll to section
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const section = sectionRefs.current[category];
    if (section) {
      const yOffset = -120; // Offset for fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Filter integrations by search query only
  const getFilteredIntegrations = (category: string) => {
    return integrations.filter((integration) => {
      const matchesCategory = integration.category === category;
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  // Get category description
  const getCategoryDescriptionByName = (category: string) => {
    switch (category) {
      case 'Dental Imaging':
        return 'CareStack integrates with all the popular imaging platforms and sensors, so that you can continue using your favorite applications without any need for change management.';
      case 'Clinical':
        return 'Connect with leading clinical systems to streamline patient care and improve treatment outcomes.';
      case 'Revenue Cycle Management':
        return 'Integrate with payment processors, insurance clearinghouses, and accounting software for seamless financial operations.';
      case 'Patient Engagement':
        return 'Enhance patient communication and engagement with integrated messaging and marketing platforms.';
      case 'Analytics':
        return 'Gain deeper insights into your practice performance with integrated analytics and reporting tools.';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-['Inter',sans-serif] relative">
      <Header />

      <main className="relative">
        {/* Hero - Scrolls Normally */}
        <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-gray-200">
          {/* Full Width Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[300px] lg:h-[400px] mb-8"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29ubmVjdGlvbnMlMjBuZXR3b3JrJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzcwOTYwMDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Integration Network"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Integrations
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Connect Your Existing Tools
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Seamlessly integrate with the software and hardware you already use
              </p>

              {/* Search */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-600"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section with Sidebar */}
        <section className="py-16 bg-[#f8f9fb] min-h-screen">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex gap-12 relative">
              {/* Sidebar Navigation - Sticky (scrolls with content end) */}
              <div className="w-[340px] flex-shrink-0">
                <div className="sticky top-[120px] w-[340px] z-30">
                  {/* Category Menu */}
                  <div className="space-y-2 mb-8">
                    {categoryMenuItems.map((item, index) => {
                      const Icon = item.icon;
                      const isSelected = selectedCategory === item.label;
                      return (
                        <motion.button
                          key={item.label}
                          onClick={() => handleCategoryClick(item.label)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left transition-all relative group"
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${
                            isSelected ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                          }`} />
                          <span className={`font-normal text-[15px] transition-colors ${
                            isSelected ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
                          }`}>
                            {item.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-[15px]"
                  >
                    Book Free Demo
                  </motion.button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 pl-4">
                {/* Render all categories as scrollable sections */}
                {categoryMenuItems.map((categoryItem) => {
                  const categoryIntegrations = getFilteredIntegrations(categoryItem.label);
                  const description = getCategoryDescriptionByName(categoryItem.label);
                  
                  return (
                    <div
                      key={categoryItem.label}
                      ref={(el) => { sectionRefs.current[categoryItem.label] = el; }}
                      data-category={categoryItem.label}
                      className="mb-20 scroll-mt-32"
                    >
                      {/* Category Header */}
                      <div className="mb-12">
                        <div className="flex items-baseline justify-between mb-4">
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                              {categoryItem.label}
                            </h2>
                            <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
                              {description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-6">
                            <p className="text-sm text-gray-500">
                              {categoryIntegrations.length} Integration{categoryIntegrations.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Integrations Grid */}
                      {categoryIntegrations.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-600 text-lg">No integrations found matching your criteria</p>
                        </div>
                      ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {categoryIntegrations.map((integration, index) => (
                            <motion.div
                              key={integration.name}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-100px' }}
                              transition={{ duration: 0.5, delay: index * 0.05 }}
                              className="bg-white rounded-xl p-5 hover:shadow-md transition-all cursor-pointer group border border-gray-200"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base shadow-sm flex-shrink-0"
                                  style={{ backgroundColor: integration.bgColor, color: integration.textColor }}
                                >
                                  {integration.logo}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                                    {integration.name}
                                  </h3>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Trust Section - Above FAQ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62 }}
            className="text-center"
          >
            {/* 5 Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by 3000+ Dental Practices
            </h2>

            {/* Subtitle */}
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-16">
              CareStack's cloud dental software provides efficient practice management, world-class support, and modern tools and technology.
            </p>

            {/* Logo Grid */}
            <div className="relative w-full overflow-hidden">
              {/* Scrolling container */}
              <motion.div
                className="flex gap-16 opacity-60"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                <div className="flex gap-16 flex-shrink-0">
                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">IDPM</div>
                  </div>
                  
                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-serif text-3xl italic">H</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-medium text-xl">NationalDental</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">wilmar</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 text-sm">
                      <div className="font-bold">Alabama</div>
                      <div className="text-xs">FAMILY DENTISTRY</div>
                    </div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">ROOT</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 text-sm">
                      <div className="font-bold">ToothHQ</div>
                      <div className="text-xs bg-gray-400 text-white px-1">Dental Consulting</div>
                    </div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-xl">MUMAY</div>
                  </div>
                </div>

                {/* Second set of logos (duplicate for seamless loop) */}
                <div className="flex gap-16 flex-shrink-0">
                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">IDPM</div>
                  </div>
                  
                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-serif text-3xl italic">H</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-medium text-xl">NationalDental</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">wilmar</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 text-sm">
                      <div className="font-bold">Alabama</div>
                      <div className="text-xs">FAMILY DENTISTRY</div>
                    </div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-2xl">ROOT</div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 text-sm">
                      <div className="font-bold">ToothHQ</div>
                      <div className="text-xs bg-gray-400 text-white px-1">Dental Consulting</div>
                    </div>
                  </div>

                  <div className="h-12 flex items-center flex-shrink-0">
                    <div className="text-gray-400 font-bold text-xl">MUMAY</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Above Footer */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our integrations
            </p>
          </motion.div>

          <FAQContent />

          {/* CTA at bottom of FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button className="px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
