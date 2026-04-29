'use client';

import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useRouter } from 'next/navigation';

const footerLinks = {
  product: [
    { label: 'Practice Management', page: 'practice-management' },
    { label: 'Patient Management', page: 'patient-management' },
    { label: 'Clinical Tools', page: 'clinical-tools' },
    { label: 'Billing & Revenue', page: 'billing-revenue' },
    { label: 'Analytics', page: 'analytics' },
    { label: 'AI Capabilities', page: 'ai-capabilities' },
  ],
  solutions: [
    { label: 'Solo Dental Practices', page: 'solo-practice' },
    { label: 'Specialty Clinics', page: 'specialty-clinics' },
    { label: 'Multi-Location Groups', page: 'multi-location' },
    { label: 'DSOs', page: 'dso' },
  ],
  resources: [
    { label: 'Blog', page: 'blog' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Whitepapers', page: 'whitepapers' },
    { label: 'FAQs', page: 'faqs' },
  ],
  company: [
    { label: 'About Us', page: 'about' },
    { label: 'Careers', page: 'careers' },
    { label: 'Contact', page: 'contact' },
    { label: 'Partners', page: 'partners' },
  ],
  legal: [
    { label: 'Privacy Policy', page: 'privacy' },
    { label: 'Terms of Service', page: 'terms' },
    { label: 'Security', page: 'security' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#111827] text-gray-400 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">DenStack</span>
            </button>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-xs">
              The all-in-one platform built to power modern dental practices with intelligent technology.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => router.push(`/${link.page}`)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => router.push(`/${link.page}`)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => router.push(`/${link.page}`)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => router.push(`/${link.page}`)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} DenStack. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.label}
                  onClick={() => router.push(`/${link.page}`)}
                  className="text-xs sm:text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
