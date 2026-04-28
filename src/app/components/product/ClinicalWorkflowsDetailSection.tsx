'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { ClipboardList, CheckCircle2, ArrowRight, Sparkles, FileText, Image, Pill } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface WorkflowCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: typeof ClipboardList;
  imageUrl: string;
  badgeText: string;
  badgeColor: string;
  quickLinks: { text: string; highlighted?: boolean }[];
}

const workflowCards: WorkflowCard[] = [
  {
    id: 1,
    title: 'Clinical Workflows',
    subtitle: 'Streamline your practice',
    description: 'Complete clinical management tools designed for modern dental practices. From treatment planning to prescriptions, everything you need in one place.',
    features: [
      'Treatment planning with e-signatures',
      'Clinical notes with templates',
      'Digital imaging integrations',
      'HIPAA compliant documentation'
    ],
    icon: ClipboardList,
    imageUrl: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwd29ya2luZyUyMHBhdGllbnQlMjBkZW50YWwlMjBjYXJlfGVufDF8fHx8MTc3MDM1MTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badgeText: 'Smart Analysis',
    badgeColor: 'bg-green-500/90',
    quickLinks: [
      { text: 'Treatment Planning with E-signatures' },
      { text: 'Clinical Notes with Templates', highlighted: true },
      { text: 'General and Perio Clinical Charting' },
      { text: 'Digital Imaging Integrations', highlighted: true },
      { text: 'Electronic Prescriptions' },
      { text: 'Periodontal Charting' },
      { text: 'HIPAA Compliant' },
      { text: 'Always-On Backups' }
    ]
  },
  {
    id: 2,
    title: 'Patient Records',
    subtitle: 'Comprehensive data management',
    description: 'Centralized patient information system with intelligent search, automated updates, and seamless integration across all practice touchpoints.',
    features: [
      'Digital patient records & history',
      'Smart search and filtering',
      'Automated appointment reminders',
      'Secure cloud storage'
    ],
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1559439226-08cc38293b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwYXRpZW50JTIwcmVjb3JkcyUyMGNoYXJ0fGVufDF8fHx8MTc3MDM1MTMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badgeText: 'Cloud Sync',
    badgeColor: 'bg-blue-500/90',
    quickLinks: [
      { text: 'Patient Demographics' },
      { text: 'Medical History Records', highlighted: true },
      { text: 'Insurance Verification' },
      { text: 'Document Management', highlighted: true },
      { text: 'Family Accounts' },
      { text: 'Treatment History' },
      { text: 'Consent Forms' },
      { text: 'Photo Gallery' }
    ]
  },
  {
    id: 3,
    title: 'Digital Imaging',
    subtitle: 'Advanced diagnostic tools',
    description: 'Integrated imaging solutions with AI-powered analysis, instant sharing capabilities, and comprehensive annotation tools for precise diagnosis.',
    features: [
      'X-ray & 3D scan integration',
      'AI-assisted image analysis',
      'Instant image sharing',
      'Built-in annotation tools'
    ],
    icon: Image,
    imageUrl: 'https://images.unsplash.com/photo-1729870992116-5f1f59feb4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB4cmF5JTIwaW1hZ2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMzUxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badgeText: 'AI Powered',
    badgeColor: 'bg-purple-500/90',
    quickLinks: [
      { text: 'Intraoral Camera' },
      { text: 'Panoramic X-Rays', highlighted: true },
      { text: '3D CBCT Scans' },
      { text: 'Cephalometric Analysis', highlighted: true },
      { text: 'Image Enhancements' },
      { text: 'Before/After Comparisons' },
      { text: 'Cloud Storage' },
      { text: 'Patient Sharing Portal' }
    ]
  },
  {
    id: 4,
    title: 'E-Prescriptions',
    subtitle: 'Digital prescription management',
    description: 'Streamlined electronic prescribing system with drug interaction checks, insurance verification, and direct pharmacy integration for faster care.',
    features: [
      'Electronic prescription sending',
      'Drug interaction alerts',
      'Pharmacy network integration',
      'Prescription history tracking'
    ],
    icon: Pill,
    imageUrl: 'https://images.unsplash.com/photo-1550572017-54b7f54d1f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJlc2NyaXB0aW9uJTIwZWxlY3Ryb25pYyUyMHRhYmxldHxlbnwxfHx8fDE3NzAzNTEzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badgeText: 'Instant Send',
    badgeColor: 'bg-orange-500/90',
    quickLinks: [
      { text: 'Controlled Substances' },
      { text: 'Medication Templates', highlighted: true },
      { text: 'Allergy Checks' },
      { text: 'Pharmacy Finder', highlighted: true },
      { text: 'Refill Management' },
      { text: 'Drug Database' },
      { text: 'Insurance Coverage' },
      { text: 'Patient Instructions' }
    ]
  }
];

export function ClinicalWorkflowsDetailSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Calculate which card should be active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardIndex = Math.min(
        Math.floor(latest * workflowCards.length),
        workflowCards.length - 1
      );
      setActiveCard(cardIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentCard = workflowCards[activeCard];
  const Icon = currentCard.icon;

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#f5f6f7]"
      style={{ height: `${workflowCards.length * 100}vh`, position: 'relative' }}
    >
      <div className="sticky top-0 h-screen py-24 overflow-hidden" style={{ position: 'sticky' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full" style={{ position: 'relative' }}>
          <div className="grid lg:grid-cols-[32%_68%] gap-12 items-center h-full">
            {/* Left Content - 32% FIXED */}
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                key={`badge-${activeCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.28 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700"
              >
                <span className="text-blue-600">▶</span>
                Platform Features
              </motion.div>

              {/* Heading - Animated on card change */}
              <motion.h2
                key={`title-${activeCard}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                {currentCard.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                key={`subtitle-${activeCard}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl font-semibold text-blue-600"
              >
                {currentCard.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                key={`desc-${activeCard}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-gray-600 leading-relaxed"
              >
                {currentCard.description}
              </motion.p>

              {/* Features List */}
              <div className="space-y-3">
                {currentCard.features.map((feature, index) => (
                  <motion.div
                    key={`${activeCard}-${feature}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                key={`button-${activeCard}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl font-semibold text-base shadow-lg flex items-center gap-2 group">
                  Explore Features
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </motion.div>

              {/* Progress Indicator */}
              <div className="flex gap-2 pt-4">
                {workflowCards.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeCard 
                        ? 'bg-blue-600 w-12' 
                        : 'bg-gray-300 w-8'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Visual - 68% CHANGES WITH SCROLL */}
            <motion.div
              key={`visual-${activeCard}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62 }}
              className="relative"
            >
              {/* Main Card Container */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    key={`icon-${activeCard}`}
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-400">{currentCard.title}</h3>
                </div>

                {/* Image with Overlay Badge */}
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    key={`img-${activeCard}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={currentCard.imageUrl}
                    alt={currentCard.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Badge */}
                  <motion.div
                    key={`badge-overlay-${activeCard}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className={`absolute bottom-4 right-4 ${currentCard.badgeColor} backdrop-blur-sm rounded-xl p-4 shadow-lg`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">{currentCard.badgeText}</span>
                    </div>
                    <div className="space-y-1 text-white/90 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Real-time data</span>
                        <span className="text-white/70">•</span>
                        <span className="font-medium">AI-powered</span>
                      </div>
                      <div className="text-white/80">HIPAA access</div>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Links Grid */}
                <div className="bg-gray-100/80 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {currentCard.quickLinks.map((link, index) => (
                      <motion.div
                        key={`${activeCard}-link-${index}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.04 }}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer group ${
                          link.highlighted
                            ? 'bg-white/80 hover:bg-white shadow-sm'
                            : 'bg-gray-200/50 hover:bg-white/60'
                        }`}
                      >
                        <span className="text-sm text-gray-700 font-medium">{link.text}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          link.highlighted ? 'text-gray-600' : 'text-gray-400'
                        }`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
