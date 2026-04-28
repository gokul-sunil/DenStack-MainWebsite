'use client';

import { useRef } from 'react';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { Button } from '@/app/components/ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { WhoWeServeDetailSection } from '@/app/components/home/WhoWeServeDetailSection';
import { ClinicalWorkflowsDetailSection } from '@/app/components/product/ClinicalWorkflowsDetailSection';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
  benefits: string[];
}

interface ProductPageProps {
  title: string;
  features: Feature[];
  useCases: UseCase[];
  benefits: string[];
}

export function ProductPageTemplate({
  title,
  features,
  useCases,
  benefits,
}: ProductPageProps) {
  const useCasesRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: useCasesRef,
    offset: ['start end', 'end start']
  });

  // Heading parallax
  const headingY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  // Use case cards parallax with varying speeds for depth
  const card1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Shared opacity and scale transforms for all cards
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  // Array of card Y transforms for easy mapping
  const cardYTransforms = [card1Y, card2Y, card3Y];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Features Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Key Features"
              title="Everything you need in one place"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <WhoWeServeDetailSection />

        {/* Clinical Workflows Section */}
        <ClinicalWorkflowsDetailSection />

        {/* Use Cases Section */}
        <section className="relative py-24 bg-gray-50" ref={useCasesRef} style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              className="relative"
              style={{ y: headingY, opacity: headingOpacity, position: 'relative' }}
            >
              <SectionHeading
                eyebrow="Use Cases"
                title="See how it works for your practice"
                centered
              />
            </motion.div>

            <div className="space-y-12 mt-16">
              {useCases.map((useCase, index) => {
                // Get the correct parallax value for each card
                const cardY = cardYTransforms[index];
                
                return (
                  <motion.div
                    key={useCase.title}
                    className="relative bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                    style={{ 
                      y: cardY,
                      opacity: cardOpacity,
                      scale: cardScale,
                      position: 'relative'
                    }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-lg text-gray-700 mb-6">{useCase.description}</p>
                    <div className="space-y-3" style={{ position: 'relative' }}>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700" style={{ position: 'relative' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose {title}?
              </h2>
              <p className="text-xl text-blue-100">The benefits that matter most</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a demo and see how {title} can transform your practice
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
