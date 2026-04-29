'use client';

import { useState } from 'react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { motion } from 'motion/react';
import { Check, Calendar, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceName: string;
  practiceType: string;
  numberOfLocations: string;
  currentSoftware: string;
  message: string;
}

const benefits = [
  {
    icon: Calendar,
    title: 'Personalized Demo',
    description: 'Get a tailored walkthrough based on your practice needs',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Learn from our dental software specialists',
  },
  {
    icon: TrendingUp,
    title: 'ROI Analysis',
    description: 'See how DenStack can improve your bottom line',
  },
  {
    icon: Shield,
    title: 'No Obligation',
    description: 'Free consultation with no commitment required',
  },
];

const stats = [
  { value: '10,000+', label: 'Dental Practices' },
  { value: '50+', label: 'Countries Worldwide' },
  { value: '4.8/5', label: 'Customer Rating' },
  { value: '24/7', label: 'Support Available' },
];

export function BookDemoPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceType: '',
    numberOfLocations: '1',
    currentSoftware: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceName: '',
        practiceType: '',
        numberOfLocations: '1',
        currentSoftware: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] font-['Inter',sans-serif]">
      <Header />

      <main className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#e8e5e0] via-[#ebe8e3] to-[#e8e5e0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 sm:mb-8 shadow-sm">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Schedule Your Free Demo Today</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-4">
                See DenStack in Action
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                Discover how our all-in-one cloud platform can transform your dental practice. Book a personalized demo with our experts and learn how DenStack can help you:
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 justify-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-lime-500 flex-shrink-0" />
                  <span>Increase revenue by 30%</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 justify-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-lime-500 flex-shrink-0" />
                  <span>Reduce no-shows by 40%</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 justify-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-lime-500 flex-shrink-0" />
                  <span>Save 10+ hours per week</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative py-8 sm:py-12 bg-white border-y border-gray-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              {/* Left Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.62 }}
                className="relative"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What to Expect from Your Demo
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Our product specialists will guide you through a personalized demonstration tailored to your practice's specific needs and challenges.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Trusted by Thousands</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Join over 10,000 dental practices worldwide who trust DenStack to run their operations efficiently.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-lime-500 flex-shrink-0" />
                    <span>Average demo takes 30-45 minutes</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.62 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 relative"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Book Your Free Demo</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Check className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We've received your request. Our team will contact you within 24 hours to schedule your personalized demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder="john.smith@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Practice Name */}
                    <div>
                      <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Name *
                      </label>
                      <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        value={formData.practiceName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder="Smile Dental Care"
                      />
                    </div>

                    {/* Practice Type */}
                    <div>
                      <label htmlFor="practiceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Type *
                      </label>
                      <select
                        id="practiceType"
                        name="practiceType"
                        value={formData.practiceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      >
                        <option value="">Select practice type</option>
                        <option value="general">General Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                        <option value="periodontics">Periodontics</option>
                        <option value="endodontics">Endodontics</option>
                        <option value="oral-surgery">Oral Surgery</option>
                        <option value="multi-specialty">Multi-Specialty</option>
                        <option value="dso">DSO/Multi-Location</option>
                      </select>
                    </div>

                    {/* Number of Locations */}
                    <div>
                      <label htmlFor="numberOfLocations" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Locations *
                      </label>
                      <select
                        id="numberOfLocations"
                        name="numberOfLocations"
                        value={formData.numberOfLocations}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                      >
                        <option value="1">1 Location</option>
                        <option value="2-5">2-5 Locations</option>
                        <option value="6-10">6-10 Locations</option>
                        <option value="11-25">11-25 Locations</option>
                        <option value="26+">26+ Locations</option>
                      </select>
                    </div>

                    {/* Current Software */}
                    <div>
                      <label htmlFor="currentSoftware" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Software (Optional)
                      </label>
                      <input
                        type="text"
                        id="currentSoftware"
                        name="currentSoftware"
                        value={formData.currentSoftware}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                        placeholder="e.g., Dentrix, Eaglesoft, Open Dental"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your practice needs or any specific questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Schedule My Free Demo'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-lime-600 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-lime-600 hover:underline">
                        Terms of Service
                      </a>
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62 }}
              className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-gray-200 text-center"
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "The demo showed us exactly how DenStack could solve our biggest challenges. Within 6 months of implementation, we increased our revenue by 35% and reduced administrative time by half."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">DS</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Smile Dental Group, California</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
