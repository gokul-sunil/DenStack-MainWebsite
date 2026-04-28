'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { Mic, Play, Clock, Calendar, TrendingUp, Star, Headphones, ArrowRight } from 'lucide-react';

const featuredEpisode = {
  id: 1,
  title: 'The Future of AI in Dental Practices',
  number: 'Episode 42',
  date: 'January 15, 2026',
  duration: '45 min',
  description: 'Join us as we explore how artificial intelligence is revolutionizing patient care, practice management, and diagnostic accuracy. Our guest, Dr. Sarah Chen, shares insights from implementing AI tools in her multi-location practice.',
  guest: 'Dr. Sarah Chen',
  guestTitle: 'Founder, Modern Dental Group',
  image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
  topics: ['AI Technology', 'Practice Innovation', 'Patient Care'],
  featured: true,
};

const episodes = [
  {
    id: 2,
    title: 'Scaling Your Dental Practice: From Solo to DSO',
    number: 'Episode 41',
    date: 'January 8, 2026',
    duration: '38 min',
    guest: 'Dr. Michael Rodriguez',
    guestTitle: 'CEO, Summit Dental Partners',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    topics: ['Growth Strategy', 'DSO', 'Leadership'],
  },
  {
    id: 3,
    title: 'Patient Experience Excellence: Creating Loyalty',
    number: 'Episode 40',
    date: 'January 1, 2026',
    duration: '42 min',
    guest: 'Amanda Foster',
    guestTitle: 'Patient Experience Consultant',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    topics: ['Patient Care', 'Customer Service', 'Retention'],
  },
  {
    id: 4,
    title: 'Revenue Optimization: Maximizing Your Bottom Line',
    number: 'Episode 39',
    date: 'December 25, 2025',
    duration: '50 min',
    guest: 'David Thompson',
    guestTitle: 'Dental Practice Financial Advisor',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    topics: ['Finance', 'Revenue', 'Business Strategy'],
  },
  {
    id: 5,
    title: 'Digital Marketing for Dental Practices in 2026',
    number: 'Episode 38',
    date: 'December 18, 2025',
    duration: '35 min',
    guest: 'Lisa Park',
    guestTitle: 'Healthcare Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
    topics: ['Marketing', 'Social Media', 'Patient Acquisition'],
  },
  {
    id: 6,
    title: 'The Art of Team Building and Culture',
    number: 'Episode 37',
    date: 'December 11, 2025',
    duration: '44 min',
    guest: 'Dr. Jennifer Martinez',
    guestTitle: 'Practice Management Expert',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    topics: ['Team Management', 'Culture', 'HR'],
  },
];

const categories = [
  { name: 'Practice Growth', count: 15, icon: TrendingUp },
  { name: 'Patient Care', count: 12, icon: Star },
  { name: 'Technology', count: 10, icon: Mic },
  { name: 'Leadership', count: 8, icon: Headphones },
];

export function PodcastsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 py-16 lg:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptMCAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Mic className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Listen & Learn</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                The DentaCare Podcast
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8">
                Insights, strategies, and stories from leading dental professionals and industry experts to help you build a thriving practice.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Play Latest Episode
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Subscribe on Spotify
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">42</div>
                  <div className="text-sm text-indigo-200">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">50K+</div>
                  <div className="text-sm text-indigo-200">Listeners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">4.9</div>
                  <div className="text-sm text-indigo-200">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredEpisode.image}
                    alt={featuredEpisode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        FEATURED
                      </div>
                      <div className="text-sm opacity-90">{featuredEpisode.number}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Latest Episode</div>
                      <div className="text-sm text-gray-500">{featuredEpisode.number}</div>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {featuredEpisode.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredEpisode.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {featuredEpisode.guest.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredEpisode.guest}</div>
                        <div className="text-sm text-gray-600">{featuredEpisode.guestTitle}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredEpisode.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredEpisode.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredEpisode.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="flex-1 sm:flex-none bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      <Play className="mr-2 w-5 h-5" />
                      Play Episode
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 sm:flex-none">
                      Show Notes
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600">
                Find episodes that match your interests
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 text-left hover:shadow-lg transition-all group"
                  >
                    <Icon className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.count} episodes</p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Episodes */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Recent Episodes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Catch up on the latest conversations with industry leaders and innovators
              </p>
            </motion.div>

            <div className="space-y-6">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid md:grid-cols-[200px,1fr] lg:grid-cols-[280px,1fr] gap-0">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-purple-600 ml-1" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-sm text-gray-500 mb-2">{episode.number}</div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {episode.title}
                          </h3>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex-shrink-0 ml-4"
                        >
                          <Play className="w-5 h-5" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {episode.guest.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{episode.guest}</div>
                          <div className="text-sm text-gray-600">{episode.guestTitle}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {episode.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {episode.duration}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic) => (
                          <span
                            key={topic}
                            className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Episodes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-purple-600" />
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Never Miss an Episode
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Subscribe to The DentaCare Podcast on your favorite platform and get notified when new episodes drop.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Subscribe on Apple Podcasts
                </Button>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Subscribe on Spotify
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  RSS Feed
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

