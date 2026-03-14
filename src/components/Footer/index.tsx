"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* PART 1 - Pre-Footer CTA Strip */}
      <div className="w-full bg-[#1e293b] border-t-2 border-[#4f8ef7]">
        <div className="container py-12 md:py-16">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Got a Project in Mind?
            </h2>
            <p className="mb-8 text-base text-gray-300 md:text-lg">
              Let&apos;s build something great together. Free demo call — no commitment required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#4f8ef7] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#3d7be6]"
              >
                📅 Book Free Demo
              </Link>
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20start%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#128C7E]"
              >
                💬 WhatsApp Us
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmad-raza-8b496b1b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-[#4f8ef7] px-6 py-3 text-base font-semibold text-[#4f8ef7] transition-colors hover:bg-[#4f8ef7] hover:text-white"
              >
                🔗 Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 - Main Footer */}
      <footer className="relative z-10 bg-[#0a0f1e] border-t border-[#4f8ef7]/15">
        <div className="container py-20 md:py-16 sm:py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* COLUMN 1: Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="mb-4 inline-block">
                  <span className="flex items-center text-2xl font-bold text-white transition-all duration-300 hover:text-[#4f8ef7] hover:drop-shadow-[0_0_20px_rgba(79,142,247,0.5)]">
                    <span className="text-[#4f8ef7] mr-1">&lt;</span>
                    CodeCEF
                    <span className="text-[#4f8ef7] ml-1">/&gt;</span>
                  </span>
                </Link>
              </div>
              
              <p className="mb-6 text-sm leading-relaxed text-[#94a3b8]">
                We build fast, scalable web & mobile apps for startups and businesses worldwide.
              </p>
              
              <div className="mb-6 flex flex-wrap gap-4 text-xs text-[#94a3b8]">
                <span className="flex items-center">
                  🚀 20+ Projects
                </span>
                <span className="flex items-center">
                  🌍 International Clients
                </span>
                <span className="flex items-center">
                  ⚡ 10M+ req/day systems
                </span>
              </div>
              
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/in/ahmad-raza-8b496b1b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-[#4f8ef7]/20 text-[#94a3b8] transition-all duration-200 hover:border-[#4f8ef7] hover:text-[#4f8ef7]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-[#4f8ef7]/20 text-[#94a3b8] transition-all duration-200 hover:border-[#4f8ef7] hover:text-[#4f8ef7]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-.908 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/917470668602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-[#4f8ef7]/20 text-[#94a3b8] transition-all duration-200 hover:border-[#4f8ef7] hover:text-[#4f8ef7]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.885-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c.003 5.45-4.433 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-[#4f8ef7]/20 text-[#94a3b8] transition-all duration-200 hover:border-[#4f8ef7] hover:text-[#4f8ef7]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.205 0 3.584.011 4.849.07 3.26.149 4.77 1.699 4.919 4.92.058 1.265.07 1.645.07 4.849 0 3.203-.012 3.583-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-2.358.1-3.633 1.356-3.732 3.732-.058 1.28-.07 1.689-.07 4.947 0 3.259.014 3.668.072 4.947.099 2.358 1.357 3.623 3.732 3.732 1.28.058 1.689.07 4.947.07 3.259 0 3.668-.014 4.947-.072 2.358-.099 3.623-1.357 3.732-3.732.058-1.28.07-1.689.07-4.947 0-3.259-.014-3.667-.07-4.947-.099-2.358-1.357-3.623-3.732-3.732-1.28-.058-1.69-.07-4.947-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 0 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-[#4f8ef7]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Services */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-[#4f8ef7]">
                What We Build
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Web Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → MVP Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → API Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                  >
                    → Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: Contact & Support */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-[#4f8ef7]">
                Get In Touch
              </h3>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-center text-sm text-[#94a3b8]">
                  <span className="mr-2">📍</span>
                  <span>India (Remote Worldwide)</span>
                </div>
                <Link
                  href="tel:+917470668602"
                  className="flex items-center text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white"
                >
                  <span className="mr-2">📞</span>
                  <span>+91 7470668602</span>
                </Link>
                <Link
                  href="mailto:hello@codecef.com"
                  className="flex items-center text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white"
                >
                  <span className="mr-2">✉️</span>
                  <span>hello@codecef.com</span>
                </Link>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-xs font-medium uppercase text-[#94a3b8]">
                  Support
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                    >
                      → Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                    >
                      → Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-policy"
                      className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-white hover:underline"
                    >
                      → Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                <div className="flex items-center">
                  <div className="relative mr-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-white">🟢 Available for new projects</div>
                    <div className="text-[#94a3b8]">Usually reply in 1hr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3 - Bottom Bar */}
        <div className="border-t border-[#4f8ef7]/10">
          <div className="container py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-[#475569]">
                © 2025 CodeCEF. All rights reserved.
              </p>
              <p className="text-xs text-[#475569]">
                Built with ❤️ in India 🇮🇳
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
