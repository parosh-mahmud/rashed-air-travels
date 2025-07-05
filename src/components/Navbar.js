"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Building2, User } from "lucide-react";

const Logo = () => (
  <span className="text-2xl font-bold text-cyan-500">
    Rashed<span className="text-pink-500">Travels</span>
  </span>
);

const MedycityHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact Us" },
    {
      name: "login",
      label: "Login",
      hasDropdown: true,
      dropdownItems: [
        { href: "/user-login", label: "User Login" },
        { href: "/agent-login", label: "Agent Login" },
        { href: "/doctor-login", label: "Doctor Login" },
        { href: "/hospital-login", label: "Hospital Login" },
      ],
    },
    { href: "/blog", label: "Blog" },
    {
      name: "language",
      label: "EN",
      hasDropdown: true,
      dropdownItems: [
        { href: "/lang/en", label: "English" },
        { href: "/lang/bn", label: "Bengali" },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm">
      <div className="bg-teal-500 h-1.5 w-full"></div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- DESKTOP VIEW --- */}
        {/* Parent container is now 'relative' to act as a positioning context */}
        <div className="relative flex items-center justify-between h-20">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Center: Navigation Links - POSITIONED ABSOLUTELY */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                ref={link.name === openDropdown ? dropdownRef : null}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                      openDropdown === link.name
                        ? "text-cyan-500"
                        : "text-gray-600 hover:text-cyan-500"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      pathname === link.href
                        ? "text-cyan-500"
                        : "text-gray-600 hover:text-cyan-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {/* Dropdown Menu with Transition */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full mt-4 w-48 bg-white rounded-md shadow-lg py-2 z-20 origin-top transition-all duration-200 ease-out ${
                      openDropdown === link.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Contact & Login */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <div className="flex items-center gap-3">
              <Building2 className="text-gray-400" size={32} />
              <div>
                <p className="text-xs text-gray-500">Contact</p>
                <p className="font-semibold text-sm">+88 01715963847</p>
              </div>
            </div>
            <Link
              href="/signup"
              className="border border-orange-400 text-orange-500 font-bold text-sm px-4 py-2 rounded-md hover:bg-orange-400 hover:text-white transition-colors"
            >
              LOGIN / SIGNUP
            </Link>
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu className="text-cyan-500" size={32} />
            </button>
            <Link href="/">
              <Logo />
            </Link>
            <Link href="/profile" className="bg-gray-200 p-2 rounded-full">
              <User className="text-cyan-500" size={24} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDENAV --- */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* ... Sidenav code remains the same ... */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="relative w-4/5 max-w-sm h-full bg-blue-600 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="text-white" size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      className="w-full flex items-center justify-between text-white text-lg font-medium py-2"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openDropdown === link.name ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 pt-2 pb-2 flex flex-col gap-3">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="text-white/80 text-base"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-white text-lg font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MedycityHeader;
