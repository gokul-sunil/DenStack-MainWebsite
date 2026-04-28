'use client';

import { Building2, Stethoscope, Users, Building } from 'lucide-react';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

const audiences = [
  {
    icon: Stethoscope,
    title: 'Solo Practitioners',
    description: 'Perfect for individual dentists looking to streamline their practice and focus on patient care.',
    page: 'solo-practice',
  },
  {
    icon: Building2,
    title: 'Multi-Location Groups',
    description: 'Manage multiple practices with centralized control, reporting, and standardized workflows.',
    page: 'multi-location',
  },
  {
    icon: Users,
    title: 'Specialty Clinics',
    description: 'Tailored features for orthodontics, endodontics, periodontics, and oral surgery practices.',
    page: 'specialty-clinics',
  },
  {
    icon: Building,
    title: 'DSOs',
    description: 'Enterprise-grade tools for dental service organizations managing large practice networks.',
    page: 'dso',
  },
];

export function WhoItsForSection() {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for practices of all sizes"
          description="From solo practitioners to multi-location DSOs"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.button
                key={audience.title}
                onClick={() => router.push(`/${audience.page}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
                className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full cursor-pointer transition-all text-left"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
