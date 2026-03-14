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
            ? "bg-[#0a0f1e] backdrop-blur-[16px] border-b border-[rgba(79,142,247,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex h-[72px] md:h-[72px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className={`flex items-center text-[22px] font-bold transition-all duration-300 hover:text-[#4f8ef7] hover:drop-shadow-[0_0_20px_rgba(79,142,247,0.5)] ${
                  sticky ? "text-white" : "text-[#4f8ef7]"
                }`}
                onClick={() => scrollToSection("home")}
              >
                <span className="text-[#4f8ef7] mr-1">&lt;</span>
                CodeCEF
                <span className="text-[#4f8ef7] ml-1">/&gt;</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-9">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.section ? (
                    <button
                      onClick={() => scrollToSection(link.section!)}
                      className={`relative text-[15px] font-[400] tracking-[0.3px] transition-all duration-300 hover:text-white ${
                        isActive(link)
                          ? sticky ? "text-white" : "text-black"
                          : sticky ? "text-[#cbd5e1]" : "text-black"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300 origin-left ${
                          isActive(link) ? "scale-x-100 bg-[#4f8ef7]" : "scale-x-0 bg-[#4f8ef7] hover:scale-x-100"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-[15px] font-[400] tracking-[0.3px] transition-all duration-300 hover:text-white ${
                        isActive(link)
                          ? sticky ? "text-white" : "text-black"
                          : sticky ? "text-[#cbd5e1]" : "text-black"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300 origin-left ${
                          isActive(link) ? "scale-x-100 bg-[#4f8ef7]" : "scale-x-0 bg-[#4f8ef7] hover:scale-x-100"
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
                className="bg-gradient-to-r from-[#4f8ef7] to-[#6366f1] text-white px-5 py-2.5 rounded-lg text-[14px] font-[600] shadow-[0_4px_15px_rgba(79,142,247,0.35)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(79,142,247,0.45)] hover:scale-[1.03]"
              >
                Book Free Demo
              </Link>
              
              <div className="relative group">
                <Link
                  href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-[#25D366] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
                </Link>
                
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Chat on WhatsApp
                  <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors ${
                sticky ? "text-white" : "text-black"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 ${
                    navbarOpen ? "top-2 rotate-45" : "top-0"
                  } ${sticky ? "bg-white" : "bg-black"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 top-2 ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  } ${sticky ? "bg-white" : "bg-black"}`}
                />
                <span
                  className={`absolute h-0.5 w-6 transition-all duration-300 ${
                    navbarOpen ? "top-2 -rotate-45" : "top-4"
                  } ${sticky ? "bg-white" : "bg-black"}`}
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
            className={`absolute right-0 top-0 h-full w-80 max-w-full bg-[#0a0f1e] shadow-xl transform transition-transform duration-300 ${
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
                  className="flex items-center text-[22px] font-bold text-white"
                  onClick={() => {
                    scrollToSection("home");
                    setNavbarOpen(false);
                  }}
                >
                  <span className="text-[#4f8ef7] mr-1">&lt;</span>
                  CodeCEF
                  <span className="text-[#4f8ef7] ml-1">/&gt;</span>
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
                          className={`block w-full text-left text-lg font-medium transition-colors hover:text-white py-4 ${
                            isActive(link) ? "text-white" : "text-[#cbd5e1]"
                          }`}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block text-lg font-medium transition-colors hover:text-white py-4 ${
                            isActive(link) ? "text-white" : "text-[#cbd5e1]"
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
                  className="block w-full bg-gradient-to-r from-[#4f8ef7] to-[#6366f1] text-white px-6 py-3 rounded-lg text-center text-[14px] font-[600] transition-all duration-300"
                  onClick={() => setNavbarOpen(false)}
                >
                  Book Free Demo
                </Link>
                <Link
                  href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white px-6 py-3 rounded-lg text-center text-[14px] font-[600] transition-all duration-300"
                  onClick={() => setNavbarOpen(false)}
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div className="h-[72px] md:h-[72px]" />
    </>
  );
};

export default Header;
