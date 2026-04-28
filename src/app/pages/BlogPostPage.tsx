'use client';

import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Share2,
  Bookmark,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts: Record<string, any> = {
  'reduce-no-shows': {
    title: '10 Ways to Reduce No-Shows and Improve Patient Attendance',
    category: 'Best Practices',
    author: {
      name: 'Dr. Sarah Martinez',
      role: 'Dental Practice Consultant',
      avatar: 'SM',
      bio: 'Dr. Sarah Martinez has over 15 years of experience in dental practice management and has helped hundreds of practices optimize their operations.'
    },
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    excerpt: 'Discover proven strategies to minimize missed appointments and maximize chair time utilization.',
    content: `
      <p class="lead">No-shows can significantly impact your practice's revenue and efficiency. Studies show that the average dental practice experiences a 5-8% no-show rate, which can cost thousands of dollars in lost revenue each month.</p>

      <p>In this comprehensive guide, we'll explore ten proven strategies to reduce no-shows and improve patient attendance at your dental practice.</p>

      <h2>1. Implement Automated Appointment Reminders</h2>
      <p>The most effective way to reduce no-shows is through automated reminders. Send multiple touchpoints:</p>
      <ul>
        <li>Email confirmation immediately after booking</li>
        <li>SMS reminder 48 hours before appointment</li>
        <li>Phone call or text 24 hours before appointment</li>
        <li>Final text reminder 2 hours before appointment</li>
      </ul>
      <p>Practices that implement this multi-channel approach see no-show rates drop by up to 40%.</p>

      <h2>2. Make Rescheduling Easy</h2>
      <p>Patients are more likely to reschedule than simply not show up if you make it convenient. Provide:</p>
      <ul>
        <li>Online self-service rescheduling</li>
        <li>Text-to-reschedule options</li>
        <li>Mobile app booking capabilities</li>
      </ul>
      <p>When patients can reschedule with one click, they're 3x more likely to notify you in advance.</p>

      <h2>3. Implement a Clear Cancellation Policy</h2>
      <p>A well-communicated cancellation policy sets expectations. Consider:</p>
      <ul>
        <li>24-48 hour cancellation notice requirement</li>
        <li>Fee for late cancellations or no-shows</li>
        <li>Credit card on file for appointments</li>
      </ul>
      <p>Make sure patients acknowledge your policy when booking and include it in reminders.</p>

      <h2>4. Optimize Your Scheduling</h2>
      <p>Strategic scheduling can minimize the impact of no-shows:</p>
      <ul>
        <li>Schedule chronic no-show patients at less busy times</li>
        <li>Double-book historically unreliable time slots</li>
        <li>Maintain a waitlist for last-minute openings</li>
        <li>Block popular times for new patients who typically show up</li>
      </ul>

      <h2>5. Send Personalized Communication</h2>
      <p>Generic reminders are easy to ignore. Make yours stand out:</p>
      <ul>
        <li>Use the patient's name</li>
        <li>Reference their specific treatment</li>
        <li>Include the provider's name</li>
        <li>Add value (e.g., "We've reserved your favorite hygienist")</li>
      </ul>

      <h2>6. Offer Convenient Appointment Times</h2>
      <p>No-shows often occur because appointments aren't at convenient times. Consider:</p>
      <ul>
        <li>Early morning appointments (7-8 AM)</li>
        <li>Evening hours (after 5 PM)</li>
        <li>Saturday availability</li>
        <li>Lunch-hour appointments</li>
      </ul>
      <p>Flexibility in scheduling can reduce no-shows by 25% or more.</p>

      <h2>7. Build Strong Patient Relationships</h2>
      <p>Patients who feel connected to your practice are less likely to no-show:</p>
      <ul>
        <li>Remember personal details about patients</li>
        <li>Follow up after major treatments</li>
        <li>Send birthday and holiday greetings</li>
        <li>Create a welcoming office environment</li>
      </ul>

      <h2>8. Use Waitlist Management</h2>
      <p>Turn cancellations into opportunities:</p>
      <ul>
        <li>Maintain an active waitlist</li>
        <li>Send automated alerts when slots open</li>
        <li>Offer incentives for last-minute appointments</li>
        <li>Fill same-day cancellations with hygiene appointments</li>
      </ul>

      <h2>9. Track and Analyze No-Show Patterns</h2>
      <p>Use data to identify and address patterns:</p>
      <ul>
        <li>Which patients frequently no-show?</li>
        <li>What times have highest no-show rates?</li>
        <li>Which appointment types are most likely to be missed?</li>
        <li>Are there seasonal patterns?</li>
      </ul>
      <p>Analytics can help you proactively address problem areas.</p>

      <h2>10. Reward Good Attendance</h2>
      <p>Positive reinforcement works. Consider:</p>
      <ul>
        <li>Loyalty programs for consistent attendance</li>
        <li>Small gifts or discounts for perfect attendance</li>
        <li>Priority scheduling for reliable patients</li>
        <li>Recognition in patient communications</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track these key metrics to evaluate your no-show reduction efforts:</p>
      <ul>
        <li><strong>No-show rate:</strong> Target 3% or lower</li>
        <li><strong>Same-day cancellation rate:</strong> Target 5% or lower</li>
        <li><strong>Chair time utilization:</strong> Target 85% or higher</li>
        <li><strong>Revenue per available chair hour:</strong> Track month-over-month growth</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Reducing no-shows requires a multi-faceted approach combining technology, policy, and personal touch. By implementing these ten strategies, you can significantly improve patient attendance, maximize revenue, and create a more efficient practice.</p>
      
      <p>Start with automated reminders and a clear cancellation policy, then gradually implement the other strategies. Monitor your results and adjust based on what works best for your unique patient population.</p>

      <p class="callout">Remember: Every percentage point reduction in no-shows can translate to thousands of dollars in additional annual revenue for your practice.</p>
    `,
    tags: ['Patient Management', 'Best Practices', 'Revenue Optimization', 'Scheduling'],
    relatedPosts: [
      {
        title: 'How to Build a Patient-First Dental Practice',
        category: 'Patient Experience',
        slug: 'patient-first-practice'
      },
      {
        title: 'Maximizing Revenue Through Better Scheduling',
        category: 'Practice Growth',
        slug: 'revenue-scheduling'
      },
      {
        title: 'The Complete Guide to Dental Practice Analytics',
        category: 'Technology',
        slug: 'practice-analytics'
      }
    ]
  }
};

export function BlogPostPage({ slug }: { slug: string }) {
  const router = useRouter();
  const post = blogPosts[slug] || blogPosts['reduce-no-shows']; // Default to first post

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      
      <main>
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32">
          <button
            onClick={() => router.push('/blog')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pb-8 mb-8 border-b border-gray-200">
              <Button variant="outline" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Bookmark className="w-4 h-4" />
                <span>Save</span>
              </Button>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Article Featured Image</p>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-semibold
                [&_.lead]:text-xl [&_.lead]:text-gray-600 [&_.lead]:mb-8 [&_.lead]:leading-relaxed
                [&_.callout]:bg-blue-50 [&_.callout]:border-l-4 [&_.callout]:border-blue-600 
                [&_.callout]:p-6 [&_.callout]:my-8 [&_.callout]:rounded-r-lg [&_.callout]:font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  About {post.author.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map((related: any, index: number) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all hover:shadow-lg cursor-pointer group"
                  onClick={() => router.push('/blog')}
                >
                  <div className="text-sm text-blue-600 font-semibold mb-3">
                    {related.category}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                See how DentaCare can help you reduce no-shows and grow your practice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                  View Pricing
                </Button>
              </div>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

