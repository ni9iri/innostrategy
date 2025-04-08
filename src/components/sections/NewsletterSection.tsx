'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to receive updates',
  }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setError(null);
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      setIsSuccess(true);
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Informed
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Sign up for expert insights, tips, and updates on digital strategy, personal finance, and business growth.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-10 max-w-md"
        >
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  {...register('consent')}
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="consent" className="font-medium text-gray-900">
                  Newsletter subscription
                </label>
                <p className="text-gray-500">
                  I agree to receive updates from Innovative Strategy Solutions
                </p>
                {errors.consent && (
                  <p className="mt-2 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {isSuccess && (
            <p className="mt-4 text-sm text-green-600 text-center">
              Thank you for subscribing! We'll be in touch soon.
            </p>
          )}
          {error && (
            <p className="mt-4 text-sm text-red-600 text-center">
              {error}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
} 