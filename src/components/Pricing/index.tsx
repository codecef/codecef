"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute("data-card-id") || "0");
            setVisibleCards((prev) => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="pricing" className="relative z-10 py-16 bg-gray-50 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            Simple & Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark sm:text-lg">
            No hidden charges. No surprises. Pick a plan or let&apos;s build something custom.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Static Website */}
          <div
            data-card-id={1}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                🔥 Limited Offer
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Static Website & Design
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Perfect for individuals, startups & small businesses wanting a professional online presence
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ₹5,000 – ₹25,000
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="line-through">₹15,000 – ₹40,000</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Up to 15 pages
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Responsive design
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Modern UI
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Contact form
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Basic SEO setup
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Fast delivery
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%27m%20interested%20in%20Static%20Website%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                💬 WhatsApp Us
              </Link>
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20a%20quote%20for%20Static%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-center text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Card 2 - Dynamic Website (Most Popular) */}
          <div
            data-card-id={2}
            className={`relative rounded-xl border-2 border-blue-500 bg-gray-900 p-8 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-dark ${
              visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ boxShadow: "0 0 30px rgba(79,142,247,0.25)" }}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-xs font-semibold text-white">
                ⭐ Most Popular
              </span>
            </div>

            {/* Top-right badge */}
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                🔥 Limited Offer
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                Dynamic Website & Database Systems
              </h3>
              <p className="text-sm text-gray-300">
                Best for businesses needing login systems, admin panels, databases & dynamic features
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-2xl font-bold text-white">
                ₹25,000 – ₹70,000
              </div>
              <div className="text-sm text-gray-400">
                <span className="line-through">₹40,000 – ₹99,000</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Backend + database integration
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Admin dashboard
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Authentication system
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                API integration
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Scalable architecture
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Deployment support
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%27m%20interested%20in%20Dynamic%20Website%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                💬 WhatsApp Us
              </Link>
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-white/20 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                📅 Book Free Demo
              </Link>
            </div>
          </div>

          {/* Card 3 - Custom Software */}
          <div
            data-card-id={3}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
                🚀 Enterprise
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Custom Software & MVP Development
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Tailored solutions for startups, SaaS products and businesses with unique requirements
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-2xl font-bold text-black dark:text-white">
                Custom Pricing
              </div>
              <div className="text-sm text-body-color dark:text-body-color-dark">
                Based on project scope and complexity
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                Starting from ₹70,000
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                MVP development
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                SaaS platforms
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Custom dashboards
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Automation systems
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                API & cloud architecture
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Long-term scalability planning
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20discuss%20a%20Custom%20Software%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                💬 Discuss Project
              </Link>
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-center text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                📅 Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="mt-12 rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-dark">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-body-color dark:text-body-color-dark sm:gap-8">
            <span className="flex items-center">
              🔒 Secure Payment
            </span>
            <span className="flex items-center">
              📋 Signed Contract
            </span>
            <span className="flex items-center">
              🔄 Free Revisions
            </span>
            <span className="flex items-center">
              ✅ On-Time Delivery
            </span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Not sure which plan fits you? Let&apos;s talk — it&apos;s free.
          </p>
          <Link
            href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20help%20choosing%20the%20right%20plan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            💬 WhatsApp to Discuss
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
