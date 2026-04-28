'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  color?: string;
}

interface ParallaxFeatureGridProps {
  features: Feature[];
}

export function ParallaxFeatureGrid({ features }: ParallaxFeatureGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ position: 'relative' }}>
      {features.map((feature, index) => {
        // Different scroll speeds for parallax effect
        const speed = 1 - (index % 4) * 0.1;
        
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [100 * speed, -100 * speed]
        );
        
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.2, 0.8, 1],
          [0.6, 1, 1, 0.6]
        );
        
        const scale = useTransform(
          scrollYProgress,
          [0, 0.3, 0.7, 1],
          [0.95, 1, 1, 0.95]
        );

        return (
          <motion.div
            key={feature.title}
            style={{
              y,
              opacity,
              scale
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${feature.color || 'from-green-500 to-blue-500'} rounded-xl flex items-center justify-center mb-6`}>
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
