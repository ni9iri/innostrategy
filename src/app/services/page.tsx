import MainLayout from '@/components/layout/MainLayout';
import { HiLightBulb, HiChartBar, HiCube, HiSparkles, HiUserGroup, HiGlobe } from 'react-icons/hi';
import Link from 'next/link';

const services = [
  {
    name: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your goals and market opportunities.',
    icon: HiLightBulb,
    benefits: [
      'Clear roadmap for growth',
      'Competitive advantage analysis',
      'Risk mitigation strategies',
      'Performance metrics definition',
    ],
  },
  {
    name: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and process optimization.',
    icon: HiCube,
    benefits: [
      'Technology stack assessment',
      'Digital workflow optimization',
      'Cloud migration strategy',
      'Digital capability building',
    ],
  },
  {
    name: 'Market Expansion',
    description: 'Identify and capitalize on new market opportunities while minimizing risks.',
    icon: HiGlobe,
    benefits: [
      'Market analysis and sizing',
      'Entry strategy development',
      'Partner identification',
      'Growth roadmap creation',
    ],
  },
  {
    name: 'Innovation Management',
    description: 'Foster a culture of innovation and implement effective innovation processes.',
    icon: HiSparkles,
    benefits: [
      'Innovation framework design',
      'Idea management systems',
      'Innovation metrics tracking',
      'Culture transformation',
    ],
  },
  {
    name: 'Performance Optimization',
    description: 'Enhance operational efficiency and improve business performance metrics.',
    icon: HiChartBar,
    benefits: [
      'Process optimization',
      'KPI development',
      'Resource allocation',
      'Efficiency improvements',
    ],
  },
  {
    name: 'Change Management',
    description: 'Guide your organization through transformational changes with minimal disruption.',
    icon: HiUserGroup,
    benefits: [
      'Change readiness assessment',
      'Stakeholder management',
      'Communication planning',
      'Training program development',
    ],
  },
];

export default function Services() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer comprehensive consulting services designed to help your business
                innovate, grow, and succeed in today's competitive landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-x-4">
                  <service.icon className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                      <span className="text-green-600">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-50 my-16">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Get in touch with our team to discuss how we can help you achieve your business goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Contact Us
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 