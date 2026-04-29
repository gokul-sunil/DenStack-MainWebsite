'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight, Video } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'DenStack Summit 2026',
    type: 'Conference',
    date: 'March 15-17, 2026',
    location: 'Las Vegas, NV',
    format: 'In-Person',
    attendees: '2,500+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Join industry leaders for three days of innovation, networking, and learning at our flagship annual conference.',
    featured: true,
  },
  {
    id: 2,
    title: 'AI in Dentistry Webinar',
    type: 'Webinar',
    date: 'February 10, 2026',
    location: 'Online',
    format: 'Virtual',
    attendees: '500+',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    description: 'Discover how AI is transforming dental practices and improving patient outcomes.',
    featured: false,
  },
  {
    id: 3,
    title: 'Practice Growth Workshop',
    type: 'Workshop',
    date: 'February 25, 2026',
    location: 'Chicago, IL',
    format: 'Hybrid',
    attendees: '150+',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
    description: 'Hands-on workshop focused on scaling your dental practice with modern technology.',
    featured: false,
  },
  {
    id: 4,
    title: 'DSO Leadership Forum',
    type: 'Forum',
    date: 'March 5, 2026',
    location: 'New York, NY',
    format: 'In-Person',
    attendees: '300+',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Exclusive event for DSO executives to discuss challenges and opportunities in multi-location management.',
    featured: false,
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'DenStack Summit 2025',
    date: 'March 2025',
    attendees: '2,200+',
    recording: true,
  },
  {
    id: 6,
    title: 'Patient Experience Masterclass',
    date: 'November 2025',
    attendees: '800+',
    recording: true,
  },
  {
    id: 7,
    title: 'Revenue Optimization Workshop',
    date: 'September 2025',
    attendees: '450+',
    recording: true,
  },
];

export function EventsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 lg:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptMCAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Connect & Learn</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                DenStack Events
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Join us at industry-leading conferences, workshops, and webinars designed to help you grow your practice and stay ahead of the curve.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                >
                  View Upcoming Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Watch Past Recordings
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Event */}
        {upcomingEvents.filter(e => e.featured).map((event, index) => (
          <section key={event.id} className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                        Featured Event
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {event.type}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
                      {event.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-semibold text-gray-900">{event.date}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-semibold text-gray-900">{event.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Expected</div>
                          <div className="font-semibold text-gray-900">{event.attendees}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Video className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Format</div>
                          <div className="font-semibold text-gray-900">{event.format}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="flex-1 sm:flex-none">
                        Register Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="flex-1 sm:flex-none">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Upcoming Events */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss these opportunities to connect with peers and learn from industry experts.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(e => !e.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        {event.attendees} expected
                      </div>
                    </div>
                    
                    <Button className="w-full group-hover:bg-blue-700 transition-colors">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Missed an event? Watch recordings and access resources from our past sessions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {event.title}
                    </h3>
                    <Video className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attended
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Watch Recording
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming events and exclusive opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Subscribe
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

