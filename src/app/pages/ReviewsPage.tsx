'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { WhoWeServeDetailSection } from '@/app/components/home/WhoWeServeDetailSection';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, TrendingUp, Users, Award, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
const videoThumb1 = '/assets/bc46820ddc02c4acf60f9008cd069e2f4e33d8f9.png';

const reviews = [
  {
    name: 'Dr. Sarah Mitchell',
    practice: 'Smile Dental Care',
    location: 'Austin, TX',
    rating: 5,
    text: 'CareStack has completely transformed how we manage our practice. The integrated billing and patient management features have saved us countless hours every week.',
    image: null,
    role: 'Practice Owner'
  },
  {
    name: 'Dr. James Chen',
    practice: 'Bright Smiles Orthodontics',
    location: 'Seattle, WA',
    rating: 5,
    text: 'The AI-powered analytics have given us insights we never had before. We\'ve increased our revenue by 30% in just six months.',
    image: null,
    role: 'Orthodontist'
  },
  {
    name: 'Dr. Maria Rodriguez',
    practice: 'Family Dental Group',
    location: 'Miami, FL',
    rating: 5,
    text: 'Best decision we ever made! The patient experience features have dramatically improved our online reviews and patient retention.',
    image: null,
    role: 'Lead Dentist'
  },
  {
    name: 'Dr. Michael Thompson',
    practice: 'Elite Dental Partners',
    location: 'Chicago, IL',
    rating: 5,
    text: 'Managing multiple locations was a nightmare before CareStack. Now everything is streamlined and our team is more productive than ever.',
    image: null,
    role: 'DSO Director'
  },
  {
    name: 'Dr. Emily Watson',
    practice: 'Pediatric Smiles',
    location: 'Portland, OR',
    rating: 5,
    text: 'The clinical tools are intuitive and powerful. Our entire team was up and running in less than a week with minimal training.',
    image: null,
    role: 'Pediatric Dentist'
  },
  {
    name: 'Dr. Robert Kim',
    practice: 'Advanced Implant Center',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The support team is incredible. Any time we have a question, they respond quickly with helpful solutions. Highly recommend!',
    image: null,
    role: 'Implant Surgeon'
  }
];

const stats = [
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Users, value: '5,000+', label: 'Dental Practices' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' },
  { icon: Award, value: '15+', label: 'Industry Awards' }
];

const videoTestimonials = [
  {
    name: 'Neel Patel',
    title: 'COO, ROOT - Periodontal and Implant Centers',
    quote: 'Being able to drill down and see the referrals across locations, that level of detail is hot.',
    logo: 'ROOT',
    thumbnail: videoThumb1
  },
  {
    name: 'Dr. Alex & Tim Otto',
    title: 'Founders, Kids Tooth Team',
    quote: 'We love the ability to contact and schedule patients from one tool.',
    logo: 'Kids Tooth Team',
    thumbnail: videoThumb1
  },
  {
    name: 'Tim Hill',
    title: 'CTO, Espire Dental',
    quote: 'We have made 27,000,000+ API calls with CareStack to consolidate data from multiple systems.',
    logo: 'ESPIRE',
    thumbnail: videoThumb1
  },
  {
    name: 'Nathan Suter, DDS',
    title: 'Chief Innovation Officer, Enable Dental',
    quote: 'CareStack simplifies our daily operations by enabling efficient multitasking for the entire team.',
    logo: 'Enable Dental',
    thumbnail: videoThumb1
  },
  {
    name: 'Dr. Bruce Gooin',
    title: 'Owner, Arrowhead Dental Associates',
    quote: 'CareStack\'s clinical tools make treatment planning easy and efficient.',
    logo: 'Arrowhead',
    thumbnail: videoThumb1
  }
];

export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Reviews Introduction Section */}
        <WhoWeServeDetailSection />

        {/* Stats Section */}
        <section className="relative py-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2">
                WHAT DENTISTS SAY ABOUT CARESTACK
              </p>
            </motion.div>

            {/* Horizontal Scrollable Cards with Auto-scroll Animation */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll-left">
                {/* Render testimonials twice for seamless loop */}
                {[...videoTestimonials, ...videoTestimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-[280px] group cursor-pointer"
                  >
                    {/* Video Card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 h-[380px] p-6 flex flex-col justify-between">
                      
                      {/* Play Button */}
                      <div className="flex items-center justify-center flex-1">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-white/30 transition-all duration-280"
                        >
                          <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </motion.div>
                      </div>

                      {/* Logo Badge */}
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <span className="text-xs font-bold text-gray-900">{testimonial.logo}</span>
                      </div>

                      {/* Content */}
                      <div className="text-white">
                        {/* Quote */}
                        <p className="text-sm font-medium leading-snug mb-3 line-clamp-3">
                          "{testimonial.quote}"
                        </p>
                        
                        {/* Name & Title */}
                        <div className="border-t border-white/20 pt-3">
                          <p className="font-bold text-xs">{testimonial.name}</p>
                          <p className="text-xs text-white/80 mt-1">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="relative py-20 bg-[#f5f6f7]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from real dental professionals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    "{review.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 mb-6" />

                  {/* Reviewer Info */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.role}</div>
                      <div className="text-sm text-gray-500">{review.practice}</div>
                      <div className="text-sm text-gray-400">{review.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="relative py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Verified Reviews</h3>
                <p className="text-gray-700">
                  All reviews are from verified CareStack customers who use our platform daily.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
              >
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Award Winning</h3>
                <p className="text-gray-700">
                  Recognized by industry leaders for innovation and customer satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
              >
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-700">
                  Our customers see an average 30% increase in practice efficiency within 6 months.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Thousands of Happy Practices
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                See why dental professionals across the country trust CareStack
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg font-semibold">
                  Book Free Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
                >
                  Watch Video
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
