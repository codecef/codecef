"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  // Sticky Navbar with glass effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/", section: "home" },
    { name: "Services", href: "/#features", section: "features" },
    { name: "Portfolio", href: "/#portfolio", section: "portfolio" },
    { name: "About", href: "/about", section: null },
  ];

  const isActive = (link: any) => {
    if (typeof window === 'undefined') return false;
    
    if (link.section) {
      return pathname === "/" && window.scrollY < 200 && link.section === "home";
    }
    return pathname === link.href;
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          sticky
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-black/50 backdrop-blur-sm"
        }`}
      >
        {/* Glowing blue line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="container">
          <nav className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className={`flex items-center text-xl font-bold transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(74,108,247,0.5)] ${
                  sticky ? "text-black" : "text-white"
                }`}
                onClick={() => scrollToSection("home")}
              >
                <span className="text-primary mr-1">&lt;</span>
                CodeCEF
                <span className="text-primary ml-1">/&gt;</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.section ? (
                    <button
                      onClick={() => scrollToSection(link.section!)}
                      className={`relative text-base font-medium transition-all duration-300 hover:text-primary ${
                        isActive(link)
                          ? "text-primary"
                          : sticky ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300 ${
                          isActive(link) ? "scale-x-100 bg-primary" : "scale-x-0 bg-primary"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-base font-medium transition-all duration-300 hover:text-primary ${
                        isActive(link)
                          ? "text-primary"
                          : sticky ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300 ${
                          isActive(link) ? "scale-x-100 bg-primary" : "scale-x-0 bg-primary"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/25"
              >
                📅 Book Free Demo
              </Link>
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green-500 px-6 py-2.5 text-base font-semibold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                💬 WhatsApp
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors ${
                sticky ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 ${
                    navbarOpen ? "top-2 rotate-45" : "top-0"
                  } ${sticky ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 top-2 ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  } ${sticky ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 ${
                    navbarOpen ? "top-2 -rotate-45" : "top-4"
                  } ${sticky ? "bg-black" : "bg-white"}`}
                />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            navbarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
              navbarOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setNavbarOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-80 max-w-full bg-[#0f172a] shadow-xl transform transition-transform duration-300 ${
              navbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="text-white/60 hover:text-white transition-colors p-2"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Logo */}
              <div className="mb-8">
                <Link
                  href="/"
                  className="flex items-center text-xl font-bold text-white"
                  onClick={() => {
                    scrollToSection("home");
                    setNavbarOpen(false);
                  }}
                >
                  <span className="text-primary mr-1">&lt;</span>
                  CodeCEF
                  <span className="text-primary ml-1">/&gt;</span>
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.section ? (
                        <button
                          onClick={() => scrollToSection(link.section!)}
                          className={`block w-full text-left text-lg font-medium transition-colors hover:text-primary ${
                            isActive(link) ? "text-primary" : "text-gray-200"
                          }`}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block text-lg font-medium transition-colors hover:text-primary ${
                            isActive(link) ? "text-primary" : "text-gray-200"
                          }`}
                          onClick={() => setNavbarOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 mt-8">
                <Link
                  href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-opacity-90"
                  onClick={() => setNavbarOpen(false)}
                >
                  📅 Book Free Demo
                </Link>
                <Link
                  href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-green-500 px-6 py-3 text-center text-base font-semibold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
                  onClick={() => setNavbarOpen(false)}
                >
                  💬 WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;
