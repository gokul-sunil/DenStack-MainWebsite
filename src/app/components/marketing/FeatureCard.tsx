'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({ icon: Icon, title, description, href }: FeatureCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
      className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full cursor-pointer transition-all"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
