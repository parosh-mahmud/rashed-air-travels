import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// A consistent Logo component
const Logo = () => (
  <Link href="/" className="inline-block">
    {/* In a real project, you would use next/image here */}
    <span className="text-2xl font-bold text-cyan-400">
      Medy<span className="text-pink-400">City</span>
      <span className="block text-xs font-normal text-gray-400 tracking-wider">
        YOUR GLOBAL HEALTHCARE PARTNER
      </span>
    </span>
  </Link>
);

const Footer = () => {
  // Data for the link columns to keep the JSX clean
  const linksColumn1 = [
    { href: "/about", label: "About Us" },
    { href: "/user-login", label: "User Login" },
    { href: "/user-register", label: "User Register" },
    { href: "/agent-registration", label: "Agent Registration" },
    { href: "/doctor-registration", label: "Doctor Registration" },
    { href: "/hospital-registration", label: "Hospital Registration" },
  ];

  const linksColumn2 = [
    { href: "/doctor-appointment", label: "Doctor Appointment" },
    { href: "/visa-invitation-letter", label: "Visa Invitation Letter" },
    { href: "/subscription-packages", label: "Subscription Packages" },
    { href: "/visa-assistance", label: "Visa Assistance" },
    { href: "/passport-assistance", label: "Passport Assistance" },
  ];

  // Using dynamic year for copyright is a best practice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-6">
            <Logo />
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="text-gray-400 hover:text-white"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-start-2">
            <ul className="space-y-3">
              {linksColumn1.map((link) => (
                <li
                  key={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-cyan-400">&raquo;</span>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <ul className="space-y-3">
              {linksColumn2.map((link) => (
                <li
                  key={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-cyan-400">&raquo;</span>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin
                  size={24}
                  className="text-cyan-400 flex-shrink-0 mt-1"
                />
                <span>
                  Boshpara,Meherpur Sadar Meherpur Head Office-7100,Meherpur,
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                <span>+88 01670200220</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-400 flex-shrink-0" />
                <span>info@medycity.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Medycity. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link href="/policy" className="hover:text-white">
              Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
