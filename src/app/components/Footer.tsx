'use client'

import { motion } from 'motion/react'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'API'],
  Legal: ['Privacy', 'Terms', 'HIPAA', 'Compliance']
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' }
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0a2614] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl text-white mb-4 inline-block"
            >
              <span className="bg-gradient-to-r from-[#9FE870] to-[#7dd84a] bg-clip-text text-transparent">
                DenStack
              </span>
            </motion.div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              The future of dental practice management. Enterprise-grade platform trusted by thousands.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-[#9FE870]/10 border border-white/10 hover:border-[#9FE870]/30 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-4 h-4 text-neutral-400 hover:text-[#9FE870]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-[#9FE870] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 DenStack. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-[#9FE870] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#9FE870] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#9FE870] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
