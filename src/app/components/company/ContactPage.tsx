'use client';

import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { motion } from 'motion/react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri 8am-8pm EST',
    detail: '1-800-DENTCARE',
    href: 'tel:1-800-DENTCARE',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We\'ll respond within 24 hours',
    detail: 'connect@denstack.in',
    href: 'mailto:connect@denstack.in',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    detail: 'Start a conversation',
    href: '#',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters',
    detail: '123 Healthcare Blvd, San Francisco, CA',
    href: '#',
  },
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Healthcare Blvd, Suite 200',
    phone: '+1 (415) 555-0100',
    type: 'Headquarters',
  },
  {
    city: 'New York',
    address: '456 Madison Ave, 15th Floor',
    phone: '+1 (212) 555-0100',
    type: 'East Coast Office',
  },
  {
    city: 'Austin',
    address: '789 Tech Drive, Building C',
    phone: '+1 (512) 555-0100',
    type: 'Support Center',
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Get in Touch
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions? We're here to help. Reach out to our team and we'll get back to you
                as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                    <p className="text-blue-600 font-medium group-hover:underline">{method.detail}</p>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Form & Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border-gray-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border-gray-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border-gray-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border-gray-200 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Office Locations</h2>
                <p className="text-gray-600 mb-8">
                  Visit one of our offices or schedule a virtual meeting.
                </p>

                <div className="space-y-6 mb-8">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {office.type}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-5 h-5 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-blue-500">
                    <p className="text-sm text-blue-100">
                      For urgent support inquiries, please contact our 24/7 emergency line for
                      Enterprise customers.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-0 bg-gray-100">
          <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
