'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SectionHeading } from '@/app/components/marketing/SectionHeading';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

const videoTestimonials = [
  {
    quote: "Being able to drill down and see the referrals across locations, that helps us a lot.",
    author: 'Neel Patel',
    role: 'CEO, ROOT - Periodontal and Implant Centers',
    image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwbWFsZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTU3NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'ROOT',
    bgColor: 'rgba(54, 120, 154, 0.85)',
    hasPlayButton: false,
  },
  {
    quote: "We love the ability to contact and schedule patients from one tool.",
    author: 'Dr. Alex & Tim Otto',
    role: 'Founders, Kids Tooth Team',
    image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlbnRpc3QlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njk1NzYzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'Kids Tooth Team',
    bgColor: 'rgba(140, 140, 140, 0.85)',
    hasPlayButton: false,
  },
  {
    quote: "We have made 27,000,000+ API calls with DenStack to consolidate data from multiple systems.",
    author: 'Tim Hill',
    role: 'CEO, Espire Dental',
    image: 'https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTQ4NjA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'ESPIRE dental',
    bgColor: 'rgba(80, 80, 80, 0.85)',
    hasPlayButton: true,
  },
  {
    quote: "DenStack simplifies our daily operations by enabling efficient multitasking for our entire team.",
    author: 'Nathan Suter, DDS',
    role: 'Chief Innovation Officer, Enable Dental',
    image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBoZWFkc2hvdCUyMHNtaWxlfGVufDF8fHx8MTc2OTU3NjM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'Enable Dental',
    bgColor: 'rgba(145, 120, 105, 0.85)',
    hasPlayButton: true,
  },
  {
    quote: "DenStack's clinical tools make treatment planning easy and efficient.",
    author: 'Dr. Bruce Gouin',
    role: 'Owner, Arrowhead Dental Associates',
    image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njk0ODA4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    logo: 'Arrowhead',
    bgColor: 'rgba(40, 40, 40, 0.85)',
    hasPlayButton: false,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by dental practices nationwide"
          description="See what our customers have to say"
          centered
        />

        <div className="relative mt-12">
          {/* Desktop/Tablet: Show all cards in a row with horizontal scroll */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {videoTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex-shrink-0 w-[240px] h-[420px] rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                    {/* Solid Color Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{ backgroundColor: testimonial.bgColor }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col p-5 text-white">
                    {/* Logo and Play Button */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-sm font-bold tracking-wide uppercase">
                        {testimonial.logo}
                      </div>
                      {testimonial.hasPlayButton && (
                        <Play className="w-4 h-4 fill-white" />
                      )}
                    </div>

                    {/* Quote */}
                    <div className="flex-1 flex items-start">
                      <p className="text-[13px] leading-[1.4] font-normal">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-auto pt-3">
                      <p className="text-sm font-semibold">{testimonial.author}</p>
                      <p className="text-[11px] opacity-90 mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Show 1 card at a time */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[300px] mx-auto h-[400px] rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={videoTestimonials[currentIndex].image}
                  alt={videoTestimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ backgroundColor: videoTestimonials[currentIndex].bgColor }}
                />
              </div>

              <div className="absolute inset-0 flex flex-col p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-base font-bold tracking-wide uppercase">
                    {videoTestimonials[currentIndex].logo}
                  </div>
                  {videoTestimonials[currentIndex].hasPlayButton && (
                    <Play className="w-5 h-5 fill-white" />
                  )}
                </div>

                <div className="flex-1 flex items-start">
                  <p className="text-[15px] leading-[1.5] font-normal">
                    "{videoTestimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <p className="text-base font-semibold">{videoTestimonials[currentIndex].author}</p>
                  <p className="text-sm opacity-90 mt-1">{videoTestimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="w-10 h-10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-2">
                {videoTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="w-10 h-10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
