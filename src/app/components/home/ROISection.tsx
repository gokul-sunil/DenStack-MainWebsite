'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Clock, DollarSign } from 'lucide-react';

const metrics = [
  { value: '35%', label: 'Revenue Growth', description: 'Average increase in first year', icon: TrendingUp },
  { value: '15hrs', label: 'Time Saved', description: 'Per week on admin tasks', icon: Clock },
  { value: '40%', label: 'Fewer No-Shows', description: 'With automated reminders', icon: Sparkles },
  { value: '<6mo', label: 'ROI Timeline', description: 'Typical payback period', icon: DollarSign },
];

type Particle = {
  left: string;
  top: string;
  duration: number;
  delay: number;
};

export function ROISection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center space-x-2 px-5 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-100 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Proven Results</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Measurable Impact on{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Your Practice
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 -z-10 rounded blur-sm"
              />
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of practices that have transformed their operations and profitability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center group-hover:border-white/40 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xl text-blue-100 mb-1 font-semibold">{metric.label}</div>
                  <div className="text-sm text-blue-200 opacity-90">{metric.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl" />
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl">
            <blockquote className="text-xl lg:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed text-center mb-6">
              "Within 4 months of implementing DentaCare, we saw a{' '}
              <span className="text-cyan-300 font-bold">28% increase in revenue</span> and our team
              productivity improved dramatically."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                SM
              </div>
              <div className="text-left">
                <div className="text-blue-100 font-semibold">Dr. Sarah Martinez, DDS</div>
                <div className="text-blue-200 text-sm">Martinez Dental Group</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles - only rendered client-side after mount */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </section>
  );
}