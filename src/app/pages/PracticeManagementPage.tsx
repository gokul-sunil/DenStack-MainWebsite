'use client';

import {
  Calendar,
  Users,
  FileText,
  BarChart3,
  Bell,
  Clock,
  Smartphone,
  Zap,
} from 'lucide-react';
import { ProductPageTemplate } from '@/app/components/product/ProductPageTemplate';

const features = [
  {
    icon: Calendar,
    title: 'Intelligent Scheduling',
    description: 'AI-powered appointment booking that optimizes your schedule and reduces gaps.',
  },
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Complete patient records, history, and communication in one centralized system.',
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Reduce no-shows with SMS and email reminders sent automatically.',
  },
  {
    icon: FileText,
    title: 'Digital Forms',
    description: 'Paperless patient intake with customizable digital forms and e-signatures.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track practice performance, utilization, and key metrics in real-time.',
  },
  {
    icon: Clock,
    title: 'Waitlist Management',
    description: 'Automatically fill cancellations from your waitlist to maximize revenue.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Manage your practice on the go with our native iOS and Android apps.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and free up staff time for patient care.',
  },
];

const useCases = [
  {
    title: 'Solo Practice',
    description:
      'A single-provider practice uses DentaCare to automate scheduling, reminders, and patient communication, saving 10+ hours per week on administrative tasks.',
    benefits: [
      'Online booking increases new patient acquisition by 25%',
      'Automated reminders reduce no-shows from 15% to 6%',
      'Digital forms eliminate paper clutter and speed up intake',
      'Real-time dashboard shows daily production at a glance',
    ],
  },
  {
    title: 'Multi-Provider Practice',
    description:
      'A 4-provider practice coordinates multiple schedules, manages a large patient base, and optimizes chair utilization across the practice.',
    benefits: [
      'Centralized scheduling prevents double-bookings',
      'Provider-specific templates ensure proper appointment allocation',
      'Team communication tools keep everyone aligned',
      'Advanced reporting shows per-provider productivity',
    ],
  },
  {
    title: 'Growing Practice',
    description:
      'A practice expanding from 1 to 3 locations uses DentaCare to maintain consistency and control as they scale.',
    benefits: [
      'Multi-location view shows all practice activity',
      'Standardized workflows ensure consistent patient experience',
      'Centralized patient database accessible across locations',
      'Consolidated reporting for ownership visibility',
    ],
  },
];

const benefits = [
  'Save 15+ hours per week on administrative tasks',
  'Increase patient retention by 30%',
  'Reduce no-shows by 40% with automated reminders',
  'Improve team productivity and coordination',
  'Scale seamlessly from 1 to 100+ locations',
  'Access your practice data anywhere, anytime',
];

export function PracticeManagementPage() {
  return (
    <ProductPageTemplate
      title="Practice Management"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
}
