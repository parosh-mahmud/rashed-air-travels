import { Mail, Phone, MapPin, Building, Clock } from "lucide-react";

// Metadata for this specific page
export const metadata = {
  title: "Contact Us | Rashed Air Travels",
  description:
    "Get in touch with Rashed Air Travels. We are here to help you with all your travel needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Our Team
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We're here to help you with your travel plans. Reach out to us
            anytime.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin
                    className="h-6 w-6 text-teal-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Our Office
                  </p>
                  <p className="mt-1 text-gray-600">
                    Jashore, Khulna Division, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:+8801715963847"
                    className="mt-1 text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    +88 01715 963847
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:contact@rashedairtravels.com"
                    className="mt-1 text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    contact@rashedairtravels.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Office Hours
                  </p>
                  <p className="mt-1 text-gray-600">
                    Saturday - Thursday: 10:00 AM - 7:00 PM
                  </p>
                  <p className="mt-1 text-gray-600">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    placeholder="How can we help you today?"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-6">
            Find Us On The Map
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117929.5160293401!2d89.14253134335937!3d23.167822900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d6559a727%3A0x475359247167998!2sJashore!5e0!3m2!1sen!2sbd!4v1720454244581!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
