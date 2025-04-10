import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: '/team/sarah-johnson.jpg',
    bio: 'With over 15 years of experience in business strategy and innovation, Sarah has helped numerous companies transform their operations and achieve sustainable growth.',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Strategy',
    image: '/team/michael-chen.jpg',
    bio: 'Michael brings a decade of experience in digital transformation and strategic planning, specializing in helping businesses adapt to rapidly changing markets.',
    linkedin: 'https://linkedin.com/in/michael-chen',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Innovation Director',
    image: '/team/emma-rodriguez.jpg',
    bio: 'Emma is passionate about driving innovation and has successfully led numerous product development and market expansion initiatives.',
    linkedin: 'https://linkedin.com/in/emma-rodriguez',
  },
];

export default function About() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Mission Statement Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About InnoStrategy
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At InnoStrategy, we believe that every business has the potential to innovate and grow.
                Our mission is to help organizations navigate the complexities of modern business
                landscapes and transform challenges into opportunities for sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are guided by our commitment to:
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Innovation',
                description: 'Embracing new ideas and technologies to drive business transformation.',
              },
              {
                name: 'Integrity',
                description: 'Building trust through honest and transparent partnerships.',
              },
              {
                name: 'Impact',
                description: 'Delivering measurable results that create lasting value.',
              },
            ].map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team Section */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experts who will guide your business transformation journey.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                  width={300}
                  height={200}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-green-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                >
                  <FaLinkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
} 