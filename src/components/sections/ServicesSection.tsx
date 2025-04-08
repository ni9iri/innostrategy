'use client';

import { motion } from 'framer-motion';
import { HiGlobeAlt, HiCurrencyDollar, HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';

const services = [
  {
    name: 'Digital Consultancy',
    description: 'Tailored digital strategies to help your business thrive in the ever-evolving online world.',
    icon: HiGlobeAlt,
    href: '/services/digital-consultancy',
  },
  {
    name: 'Personal Finance Coaching',
    description: 'Master your finances with expert guidance that empowers you to take control of your financial future.',
    icon: HiCurrencyDollar,
    href: '/services/personal-finance',
  },
  {
    name: 'Business Mentoring',
    description: 'Personalized mentoring for entrepreneurs and businesses to accelerate growth and achieve long-term success.',
    icon: HiLightningBolt,
    href: '/services/business-mentoring',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive solutions tailored to your needs, whether you're looking to grow your business,
            master your finances, or accelerate your success.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-gray-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 