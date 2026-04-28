'use client';

import { motion } from 'motion/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Award, 
  TrendingUp, 
  Users,
  Download,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Blog Articles',
    description: 'Expert insights and best practices',
    count: '150+',
    color: 'from-blue-500 to-cyan-500',
    page: 'blog',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real success stories from practices',
    count: '45+',
    color: 'from-purple-500 to-pink-500',
    page: 'case-studies',
  },
  {
    icon: Download,
    title: 'Whitepapers',
    description: 'In-depth research and analysis',
    count: '30+',
    color: 'from-green-500 to-emerald-500',
    page: 'whitepapers',
  },
  {
    icon: Video,
    title: 'Webinars',
    description: 'Live and recorded training sessions',
    count: '60+',
    color: 'from-orange-500 to-red-500',
    page: 'events',
  },
];

const featuredResources = [
  {
    id: 1,
    type: 'Whitepaper',
    title: 'The Complete Guide to Practice Growth in 2026',
    description: 'Comprehensive strategies for scaling your dental practice with modern technology and patient-centric approaches.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    downloadCount: '5.2K',
    badge: 'Popular',
  },
  {
    id: 2,
    type: 'Case Study',
    title: 'How Summit Dental Increased Revenue by 40%',
    description: 'Learn how this multi-location practice transformed their operations and patient experience.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80',
    downloadCount: '3.8K',
    badge: 'New',
  },
  {
    id: 3,
    type: 'Guide',
    title: 'AI Implementation: A Practical Roadmap',
    description: 'Step-by-step guide to integrating AI tools into your dental practice workflow.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    downloadCount: '4.5K',
    badge: 'Trending',
  },
];

const recentArticles = [
  {
    id: 1,
    title: '10 Ways to Reduce Patient No-Shows',
    category: 'Patient Management',
    readTime: '5 min read',
    date: 'Jan 20, 2026',
  },
  {
    id: 2,
    title: 'Mastering Multi-Location Practice Management',
    category: 'Practice Growth',
    readTime: '8 min read',
    date: 'Jan 18, 2026',
  },
  {
    id: 3,
    title: 'Revenue Cycle Optimization: Best Practices',
    category: 'Finance',
    readTime: '6 min read',
    date: 'Jan 15, 2026',
  },
  {
    id: 4,
    title: 'Building a Patient-Centric Digital Experience',
    category: 'Technology',
    readTime: '7 min read',
    date: 'Jan 12, 2026',
  },
];

export function ResourcesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 lg:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptMCAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Knowledge Center</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Resources Hub
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Everything you need to grow your practice, improve patient care, and stay ahead of industry trends.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, guides, case studies..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-600">
                Find the resources that matter most to your practice
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => router.push(`/${category.page}`)}
                    className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-500">{category.count} resources</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600">
                Most popular downloads from the DentaCare community
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        resource.badge === 'Popular' ? 'bg-yellow-400 text-gray-900' :
                        resource.badge === 'New' ? 'bg-green-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {resource.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloadCount} downloads
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      <Download className="mr-2 w-4 h-4" />
                      Download Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Recent Articles
                </h2>
                <p className="text-xl text-gray-600">
                  Latest insights from industry experts
                </p>
              </motion.div>
              
              <Button variant="outline" className="hidden sm:flex">
                <Filter className="mr-2 w-4 h-4" />
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => router.push('/blog')}>
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { icon: FileText, value: '250+', label: 'Resources' },
                { icon: Users, value: '50K+', label: 'Downloads' },
                { icon: Award, value: '4.9/5', label: 'Avg Rating' },
                { icon: TrendingUp, value: '95%', label: 'Satisfaction' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-100">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 lg:p-16 text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with Fresh Resources
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest guides, case studies, and insights delivered to your inbox every week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <Button size="lg">
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
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

