import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Rashed Air Travels",
  description: "Reach out to Rashed Air Travels anytime for support.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          We&apos;re here to help with your travel needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <ContactItem
            icon={<MapPin className="h-5 w-5 text-teal-600" />}
            title="Address"
            text="Jashore, Khulna, Bangladesh"
          />
          <ContactItem
            icon={<Phone className="h-5 w-5 text-teal-600" />}
            title="Phone"
            text="+88 01715 963847"
            href="tel:+8801715963847"
          />
          <ContactItem
            icon={<Mail className="h-5 w-5 text-teal-600" />}
            title="Email"
            text="contact@rashedairtravels.com"
            href="mailto:contact@rashedairtravels.com"
          />
          <ContactItem
            icon={<Clock className="h-5 w-5 text-teal-600" />}
            title="Hours"
            text="Sat - Thu: 10AM - 7PM, Fri: Closed"
          />
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-gray-50 p-6 rounded-md shadow">
          <Input label="Full Name" name="name" />
          <Input label="Email" name="email" type="email" />
          <Textarea label="Message" name="message" />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

// Reusable Components
const ContactItem = ({ icon, title, text, href }) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      {href ? (
        <a href={href} className="text-gray-600 hover:text-teal-600">
          {text}
        </a>
      ) : (
        <p className="text-gray-600">{text}</p>
      )}
    </div>
  </div>
);

const Input = ({ label, name, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-600 focus:border-teal-600"
      required
    />
  </div>
);

const Textarea = ({ label, name }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows={3}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-600 focus:border-teal-600"
      required
    />
  </div>
);
