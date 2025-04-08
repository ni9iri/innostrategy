import MainLayout from '@/components/layout/MainLayout';
import ContactForm from '@/components/sections/ContactForm';
import { HiMail, HiPhone, HiOfficeBuilding } from 'react-icons/hi';

const contactInfo = [
  {
    name: 'Email',
    description: 'info@innovativestrategysolutions.com',
    icon: HiMail,
  },
  {
    name: 'Phone',
    description: '+1 (XXX) XXX-XXXX',
    icon: HiPhone,
  },
  {
    name: 'Office',
    description: 'Available for virtual meetings and in-person consultations by appointment',
    icon: HiOfficeBuilding,
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to transform your business or personal finances? We're here to help you achieve your goals.
                Reach out to us for a consultation or to learn more about our services.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <strong className="font-semibold text-gray-900">{item.name}:</strong>{' '}
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
} 