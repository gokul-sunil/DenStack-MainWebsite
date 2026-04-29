'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
const uaeFlagIcon = '/assets/9136fe1bd28fb7be513083775423e1518682dfab.png';
const indiaFlagIcon = '/assets/2f5773e9e694ae10ab21271e6c2630d57fddbeb0.png';
const denAlignLogo = '/assets/51132c9e1a264f6426509e988a49c2be42c8646c.png';
const denSmileLogo = '/assets/a4649c8551c3b1acc7d432cb5caa962af9b3cd51.png';

interface NavItem {
  label: string;
  page?: string;
  children?: { label: string; page: string; description?: string; badge?: string }[];
  megaMenu?: boolean;
  isImage?: boolean;
  imageSrc?: string;
}

const navigation: NavItem[] = [
  { label: 'Home', page: 'home', isImage: true, imageSrc: denAlignLogo },
  {
    label: 'Product',
    megaMenu: true,
  },
  {
    label: 'Features',
    megaMenu: true,
  },
  { label: 'Integrations', page: 'integrations' },
  { label: 'DenAlign', page: 'aligners', isImage: true, imageSrc: denAlignLogo },
  { label: 'DenSmile', page: 'densmile', isImage: true, imageSrc: denSmileLogo },
  { label: 'Who We Serve', megaMenu: true },
  { label: 'Community', megaMenu: true },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', page: 'blog' },
      { label: 'Case Studies', page: 'case-studies' },
      { label: 'Whitepapers', page: 'whitepapers' },
      { label: 'FAQs', page: 'faqs' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', page: 'about' },
      { label: 'Careers', page: 'careers' },
      { label: 'Contact', page: 'contact' },
      { label: 'Partners', page: 'partners' },
    ],
  },
];

// Product Mega Menu Structure
const productMegaMenu = {
  leftColumn: {
    title: 'PRACTICE MANAGEMENT SOFTWARE',
    items: [
      { label: 'Features', page: 'practice-management' },
      { label: 'Case Studies', page: 'case-studies' },
      { label: 'Reviews', page: 'reviews' },
      { label: 'Onboarding', page: 'practice-management' },
      { label: 'Integrations', page: 'integrations' },
      { label: 'Comparison', page: 'practice-management' },
      { label: 'FAQs', page: 'faqs' },
      { label: 'Aligners', page: 'aligners' },
    ]
  },
  rightColumn: {
    title: 'ENHANCED GROWTH SOLUTIONS',
    items: [
      { label: 'VoiceStack™', page: 'patient-management' },
      { label: 'Aeka™', page: 'ai-capabilities', badge: 'NEW' },
      { label: 'CS Pay™', page: 'billing-revenue' },
      { label: 'ACE DSN™', page: 'analytics' },
      { label: 'CareRevenue™', page: 'revenue-cycle' },
      { label: 'VirtualAssistant™', page: 'ai-capabilities' },
      { label: 'CS Membership™', page: 'patient-management' },
    ]
  },
  footer: [
    { label: 'Contact Us', page: 'contact' },
    { label: 'Support', page: 'faqs' },
    { label: 'Become a Partner', page: 'partners' },
  ]
};

// Features Mega Menu Structure
const featuresMegaMenu = {
  columns: [
    {
      title: 'PRACTICE GROWTH',
      items: [
        { label: 'Powerful Multi-location Scheduling', page: 'multi-location' },
        { label: 'Membership Plans', page: 'patient-management' },
        { label: 'Built-in Patient Notifications', page: 'patient-experience' },
        { label: 'AI-Driven Telephony Integrations', page: 'ai-capabilities' },
        { label: 'Text & Email Payment Reminders', page: 'revenue-cycle' },
        { label: 'Built-in Reputation Management', page: 'practice-growth' },
      ]
    },
    {
      title: 'PATIENT EXPERIENCE',
      items: [
        { label: 'Built-in Appointment Reminders', page: 'patient-experience' },
        { label: 'Two-way Patient Texting', page: 'patient-experience' },
        { label: 'Online Self-service Scheduling', page: 'patient-experience' },
        { label: 'Patient Portal for Forms and Payments', page: 'patient-experience' },
      ]
    },
    {
      title: 'CLINICAL WORKFLOWS',
      items: [
        { label: 'Treatment Planning with E-signatures', page: 'clinical-workflows' },
        { label: 'General and Perio Clinical Charting', page: 'clinical-workflows' },
        { label: 'Dental Electronic Prescriptions', page: 'clinical-workflows' },
        { label: 'Clinical Notes with Templates', page: 'clinical-workflows' },
        { label: 'Digital Imaging Integrations', page: 'clinical-workflows' },
        { label: 'Always-On Backups', page: 'clinical-workflows' },
      ]
    },
    {
      title: 'REVENUE & MANAGEMENT',
      items: [
        { label: 'Clinic Accounting & Finance', page: 'billing-revenue' },
        { label: 'Clinic Finance & Payroll Management', page: 'clinic-finance-payroll' },
      ]
    },
    {
      title: 'ANALYTICS AND REPORTING',
      items: [
        { label: 'Configurable Reports & Dashboards', page: 'analytics-reporting' },
        { label: 'Lab Case Management', page: 'analytics-reporting' },
        { label: 'Remote Access', page: 'analytics-reporting' },
        { label: 'Implant Tracker', page: 'analytics-reporting' },
        { label: 'Patient Referral Management', page: 'analytics-reporting' },
      ]
    }
  ],
  footer: [
    { label: 'View All Features', page: 'features-overview' },
    { label: 'Get Advanced AI Solutions', page: 'ai-capabilities' },
    { label: 'Contact Us', page: 'contact' },
    { label: 'Support', page: 'faqs' },
    { label: 'Become a Partner', page: 'partners' },
  ]
};

// Who We Serve Mega Menu Structure
const whoWeServeMegaMenu = {
  sectors: [
    { label: 'Dental Practices', page: 'solo-practice' },
    { label: 'Dental Startups', page: 'dental-startups' },
    { label: "Groups & DSO's", page: 'dso' },
    { label: 'Mobile Dentistry', page: 'mobile-dentistry' },
    { label: 'Specialists', page: 'specialty-clinics' },
  ],
  specialties: [
    { label: 'Implant & Oral Surgeons', page: 'implant-surgeons' },
    { label: 'Orthodontists', page: 'orthodontists' },
    { label: 'Pediatric Dentists', page: 'pediatric-dentists' },
    { label: 'Periodontists', page: 'periodontists' },
    { label: 'Endodontists', page: 'endodontists' },
  ],
  footer: [
    { label: 'Contact Us', page: 'contact' },
    { label: 'Support', page: 'faqs' },
    { label: 'Become a Partner', page: 'partners' },
  ]
};

// Community Mega Menu Structure
const communityMegaMenu = {
  mainLinks: [
    { label: 'Resources Hub', page: 'resources', description: 'Browse all resources' },
    { label: 'Partners Directory', page: 'partners', description: 'Find trusted partners' },
    { label: 'Events & Webinars', page: 'events', description: 'Join upcoming events' },
    { label: 'DenAlign Podcast', page: 'podcasts', description: 'Listen & learn' },
  ],
  featured: {
    title: 'Inner Circle 2026',
    description: 'Join our exclusive community of dental leaders. Get early access to new features, premium content, and networking opportunities.',
    badge: 'NEW',
  },
  footer: [
    { label: 'Contact Us', page: 'contact' },
    { label: 'Support', page: 'faqs' },
    { label: 'Become a Partner', page: 'partners' },
  ]
};

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<'UAE' | 'India'>('UAE');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    router.push(`/${page}`);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className={`hidden lg:block border-b border-gray-200/30 transition-all duration-300 ${
        isScrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Left side - Contact */}
            <a 
              href="tel:+14076338123" 
              className="text-xs text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Talk to an expert: (407) 633-8123</span>
            </a>

            {/* Right side - Links */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleNavClick('faqs')}
                className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
              >
                Support
              </button>
              <a 
                href="https://developers.denstack.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
              >
                Developers
              </a>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
              >
                Company
              </button>
              
              {/* Country Selector */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                >
                  <img src={selectedCountry === 'UAE' ? uaeFlagIcon : indiaFlagIcon} alt="Flag" className="w-7 h-7 object-cover rounded-sm border border-gray-200" />
                  <span>{selectedCountry}</span>
                </button>
                {isCountryDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                    <button
                      className="w-full text-left block px-5 py-2.5 hover:bg-blue-50 transition-colors group"
                      onClick={() => {
                        setSelectedCountry('UAE');
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <img src={uaeFlagIcon} alt="UAE Flag" className="w-6 h-6 object-cover rounded-sm border border-gray-200" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            UAE
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">United Arab Emirates</div>
                        </div>
                      </div>
                    </button>
                    <button
                      className="w-full text-left block px-5 py-2.5 hover:bg-blue-50 transition-colors group"
                      onClick={() => {
                        setSelectedCountry('India');
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <img src={indiaFlagIcon} alt="India Flag" className="w-6 h-6 object-cover rounded-sm border border-gray-200" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            India
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">भारत</div>
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Center Navigation Container */}
          <div className="flex-1 flex items-center justify-center">
            {/* Desktop Navigation - Only show on large screens */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children || item.megaMenu ? setOpenDropdown(item.label) : null}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.page ? (
                    <button 
                      onClick={() => handleNavClick(item.page!)}
                      className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap flex items-center"
                    >
                      {item.isImage && item.imageSrc ? (
                        <img 
                          src={item.imageSrc} 
                          alt={item.label} 
                          className={item.label === 'Home' ? 'h-8 w-auto object-contain' : 'h-5 w-auto object-contain'} 
                        />
                      ) : (
                        item.label
                      )}
                    </button>
                  ) : (
                    <button className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 whitespace-nowrap">
                      <span>{item.label}</span>
                      {(item.children || item.megaMenu) && <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                  {/* Product Mega Menu */}
                  {item.label === 'Product' && item.megaMenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            {productMegaMenu.leftColumn.title}
                          </h3>
                          <div className="space-y-1">
                            {productMegaMenu.leftColumn.items.map((menuItem) => (
                              <button
                                key={menuItem.label}
                                onClick={() => handleNavClick(menuItem.page)}
                                className="w-full text-left block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                {menuItem.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Right Column */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            {productMegaMenu.rightColumn.title}
                          </h3>
                          <div className="space-y-1">
                            {productMegaMenu.rightColumn.items.map((menuItem) => (
                              <button
                                key={menuItem.label}
                                onClick={() => handleNavClick(menuItem.page)}
                                className="w-full text-left flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <span>{menuItem.label}</span>
                                {menuItem.badge && (
                                  <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">
                                    {menuItem.badge}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Links */}
                      <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between">
                        {productMegaMenu.footer.map((footerItem) => (
                          <button
                            key={footerItem.label}
                            onClick={() => handleNavClick(footerItem.page)}
                            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {footerItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features Mega Menu */}
                  {item.label === 'Features' && item.megaMenu && openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-[1000px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 max-h-[80vh] overflow-y-auto">
                      <div className="grid grid-cols-5 gap-4">
                        {featuresMegaMenu.columns.map((column) => (
                          <div key={column.title}>
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">
                              {column.title}
                            </h3>
                            <div className="space-y-0.5">
                              {column.items.map((menuItem) => (
                                <button
                                  key={menuItem.label}
                                  onClick={() => handleNavClick(menuItem.page)}
                                  className="w-full text-left block px-2 py-1.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  {menuItem.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer Links */}
                      <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between flex-wrap gap-2">
                        {featuresMegaMenu.footer.map((footerItem) => (
                          <button
                            key={footerItem.label}
                            onClick={() => handleNavClick(footerItem.page)}
                            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {footerItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Who We Serve Mega Menu */}
                  {item.label === 'Who We Serve' && item.megaMenu && openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Left Column - Sectors */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            SECTORS WE SERVE
                          </h3>
                          <div className="space-y-1">
                            {whoWeServeMegaMenu.sectors.map((menuItem) => (
                              <button
                                key={menuItem.label}
                                onClick={() => handleNavClick(menuItem.page)}
                                className="w-full text-left block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                {menuItem.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Middle Column - Specialties */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            SPECIALITIES
                          </h3>
                          <div className="space-y-1">
                            {whoWeServeMegaMenu.specialties.map((menuItem) => (
                              <button
                                key={menuItem.label}
                                onClick={() => handleNavClick(menuItem.page)}
                                className="w-full text-left flex items-start space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z" />
                                </svg>
                                <span>{menuItem.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Why DenStack */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                          <h3 className="text-base font-bold text-gray-900 mb-2">
                            Why DenStack
                          </h3>
                          <p className="text-xs text-gray-700 mb-3">
                            Transforming average dental practice into systemized cloud-based excellence.
                          </p>
                          <button
                            onClick={() => handleNavClick('about')}
                            className="inline-flex items-center px-3 py-2 bg-white border border-green-300 text-xs font-medium text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            Learn More
                          </button>
                          <div className="mt-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-4 text-center">
                            <div className="text-xs text-green-700 font-semibold">
                              Trusted by 1000+ Practices
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Links */}
                      <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between">
                        {whoWeServeMegaMenu.footer.map((footerItem) => (
                          <button
                            key={footerItem.label}
                            onClick={() => handleNavClick(footerItem.page)}
                            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {footerItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Community Mega Menu */}
                  {item.label === 'Community' && item.megaMenu && openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Column - Main Links */}
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            EXPLORE
                          </h3>
                          <div className="space-y-1">
                            {communityMegaMenu.mainLinks.map((menuItem) => (
                              <button
                                key={menuItem.label}
                                onClick={() => handleNavClick(menuItem.page)}
                                className="w-full text-left block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                              >
                                <div className="font-medium">{menuItem.label}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{menuItem.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right Column - Featured */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-200">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-bold text-gray-900">
                              {communityMegaMenu.featured.title}
                            </h3>
                            <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
                              {communityMegaMenu.featured.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-700 mb-3">
                            {communityMegaMenu.featured.description}
                          </p>
                          <button
                            onClick={() => handleNavClick('contact')}
                            className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-medium text-white hover:from-purple-700 hover:to-indigo-700 rounded-lg transition-colors shadow-lg"
                          >
                            Join Now
                          </button>
                        </div>
                      </div>

                      {/* Footer Links */}
                      <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between">
                        {communityMegaMenu.footer.map((footerItem) => (
                          <button
                            key={footerItem.label}
                            onClick={() => handleNavClick(footerItem.page)}
                            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {footerItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown */}
                  {item.children && !item.megaMenu && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.page)}
                          className="w-full text-left block px-5 py-2.5 hover:bg-blue-50 transition-colors group"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6 pr-3 sm:pr-6 lg:pr-8">
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <Button 
              onClick={() => handleNavClick('book-demo')}
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-5 py-2 text-sm font-medium rounded-xl shadow-lg"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button - VISIBLE ON MOBILE & TABLET */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all rounded-lg shadow-lg flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-1">
              {/* Product Mega Menu - Mobile */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="px-3 sm:px-4 py-3 text-gray-900 font-bold text-sm sm:text-base">Product</div>
                
                <div className="ml-2 sm:ml-4 mt-2 space-y-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 sm:px-4 py-2">
                    Practice Management Software
                  </div>
                  {productMegaMenu.leftColumn.items.map((menuItem) => (
                    <button
                      key={menuItem.label}
                      onClick={() => handleNavClick(menuItem.page)}
                      className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      {menuItem.label}
                    </button>
                  ))}

                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 sm:px-4 py-2 mt-4">
                    Enhanced Growth Solutions
                  </div>
                  {productMegaMenu.rightColumn.items.map((menuItem) => (
                    <button
                      key={menuItem.label}
                      onClick={() => handleNavClick(menuItem.page)}
                      className="w-full text-left flex items-center justify-between px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <span>{menuItem.label}</span>
                      {menuItem.badge && (
                        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">
                          {menuItem.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features Mega Menu - Mobile */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="px-3 sm:px-4 py-3 text-gray-900 font-bold text-sm sm:text-base">Features</div>
                
                <div className="ml-2 sm:ml-4 mt-2 space-y-2">
                  {featuresMegaMenu.columns.map((column) => (
                    <div key={column.title}>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 sm:px-4 py-2 mt-3">
                        {column.title}
                      </div>
                      {column.items.map((menuItem) => (
                        <button
                          key={menuItem.label}
                          onClick={() => handleNavClick(menuItem.page)}
                          className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          {menuItem.label}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Serve Mega Menu - Mobile */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="px-3 sm:px-4 py-3 text-gray-900 font-bold text-sm sm:text-base">Who We Serve</div>
                
                <div className="ml-2 sm:ml-4 mt-2 space-y-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 sm:px-4 py-2">
                    SECTORS
                  </div>
                  {whoWeServeMegaMenu.sectors.map((menuItem) => (
                    <button
                      key={menuItem.label}
                      onClick={() => handleNavClick(menuItem.page)}
                      className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      {menuItem.label}
                    </button>
                  ))}

                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 sm:px-4 py-2 mt-4">
                    SPECIALTIES
                  </div>
                  {whoWeServeMegaMenu.specialties.map((menuItem) => (
                    <button
                      key={menuItem.label}
                      onClick={() => handleNavClick(menuItem.page)}
                      className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      {menuItem.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Community Mega Menu - Mobile */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="px-3 sm:px-4 py-3 text-gray-900 font-bold text-sm sm:text-base">Community</div>
                
                <div className="ml-2 sm:ml-4 mt-2 space-y-2">
                  {communityMegaMenu.mainLinks.map((menuItem) => (
                    <button
                      key={menuItem.label}
                      onClick={() => handleNavClick(menuItem.page)}
                      className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <div className="font-medium text-gray-900">{menuItem.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{menuItem.description}</div>
                    </button>
                  ))}

                  {/* Featured Inner Circle - Mobile */}
                  <div className="mt-3 bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-gray-900">{communityMegaMenu.featured.title}</h4>
                      <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
                        {communityMegaMenu.featured.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{communityMegaMenu.featured.description}</p>
                    <button
                      onClick={() => handleNavClick('contact')}
                      className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-medium text-white hover:from-purple-700 hover:to-indigo-700 rounded-lg"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Other Navigation Items */}
              {navigation.slice(2).map((item) => (
                <div key={item.label}>
                  {item.page ? (
                    <button
                      onClick={() => handleNavClick(item.page!)}
                      className="w-full text-left block px-3 sm:px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg text-sm sm:text-base"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <div className="px-3 sm:px-4 py-3 text-gray-700 font-medium text-sm sm:text-base">
                      {item.label}
                    </div>
                  )}
                  {item.children && (
                    <div className="ml-2 sm:ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.page)}
                          className="w-full text-left block px-3 sm:px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => handleNavClick('pricing')}
                  className="w-full text-left block px-3 sm:px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg text-sm sm:text-base font-medium"
                >
                  Pricing
                </button>
                <Button 
                  onClick={() => handleNavClick('book-demo')}
                  className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-5 py-2 text-sm font-medium rounded-xl shadow-lg"
                >
                  Book Free Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
