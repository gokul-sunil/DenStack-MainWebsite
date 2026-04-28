'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = ['All', 'Product Updates', 'Best Practices', 'Industry News', 'Customer Stories'];

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: '10 Ways to Reduce No-Shows and Improve Patient Attendance',
    excerpt: 'Discover proven strategies to minimize missed appointments and maximize chair time utilization.',
    category: 'Best Practices',
    author: 'Dr. Sarah Martinez',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    image: '#3b82f6',
  },
  {
    title: 'Introducing AI-Powered Scheduling: The Future is Here',
    excerpt: 'Learn how our new AI scheduling assistant can optimize your practice schedule automatically.',
    category: 'Product Updates',
    author: 'Product Team',
    date: 'Jan 12, 2026',
    readTime: '4 min read',
    image: '#06b6d4',
  },
  {
    title: 'How Martinez Dental Group Increased Revenue by 35%',
    excerpt: 'A deep dive into one practice\'s journey to transforming their operations and profitability.',
    category: 'Customer Stories',
    author: 'Marketing Team',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    image: '#10b981',
  },
  {
    title: 'The Complete Guide to HIPAA Compliance for Dental Practices',
    excerpt: 'Everything you need to know about maintaining HIPAA compliance in your practice.',
    category: 'Best Practices',
    author: 'Compliance Team',
    date: 'Jan 8, 2026',
    readTime: '10 min read',
    image: '#8b5cf6',
  },
  {
    title: 'DSO Growth Trends: What to Expect in 2026',
    excerpt: 'Industry analysis and predictions for dental service organizations this year.',
    category: 'Industry News',
    author: 'Research Team',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    image: '#f59e0b',
  },
  {
    title: 'New Integration: Connect with Dexis Imaging Systems',
    excerpt: 'We\'re excited to announce seamless integration with Dexis imaging platforms.',
    category: 'Product Updates',
    author: 'Product Team',
    date: 'Jan 3, 2026',
    readTime: '3 min read',
    image: '#ef4444',
  },
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Resources
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Blog & Insights</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Expert advice, product updates, and industry insights for dental practices
              </p>

              {/* Search */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-600"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  >
                    {/* Image */}
                    <div
                      className="h-48 flex items-center justify-center text-white text-4xl font-bold"
                      style={{ backgroundColor: post.image }}
                    >
                      {post.title.charAt(0)}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>

                      <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <button
                          onClick={() => router.push('/blog/reduce-no-shows')}
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-xl border-2"
                >
                  Load More Articles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest articles and updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-6 text-lg rounded-xl border-0"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-blue-200">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
