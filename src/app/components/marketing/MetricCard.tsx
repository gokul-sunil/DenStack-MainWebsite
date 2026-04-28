'use client';

import { motion } from 'motion/react';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
}

export function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{value}</div>
      <div className="text-xl text-blue-100 mb-1">{label}</div>
      {description && <div className="text-sm text-blue-200 opacity-90">{description}</div>}
    </motion.div>
  );
}

