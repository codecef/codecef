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
      observer.disconnect();
    };
  }, []);

  return (
    <section id="pricing" className="relative z-10 py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold tracking-wider text-blue-400">
            FLEXIBLE ENGAGEMENT MODELS
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Powerful Solutions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Real Impact.</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-gray-400 sm:text-lg">
            Every project is unique. We tailor our engagement based on your business goals, technical complexity, and timeline.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - AI Automation */}
          <div
            data-card-id={1}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 ${
              visibleCards.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-blue-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                AI Automation
              </h3>
              <p className="text-sm text-gray-400">
                Automate repetitive business operations using AI-powered workflows.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xs text-gray-500">
                Starting from
              </div>
              <div className="text-2xl font-bold text-green-400">
                $1,000 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI Workflow Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                CRM Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                WhatsApp Automation
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-blue-600"
            >
              Book Discovery Call
            </Link>
          </div>

          {/* Card 2 - AI Agents */}
          <div
            data-card-id={2}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 ${
              visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Star Badge */}
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
              <span className="text-sm text-white">⭐</span>
            </div>

            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <span className="text-2xl">🧠</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-purple-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                AI Agents
              </h3>
              <p className="text-sm text-gray-400">
                Build intelligent AI agents capable of understanding requests and completing business tasks.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xs text-gray-500">
                Starting from
              </div>
              <div className="text-2xl font-bold text-purple-400">
                $2,000 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI Agents
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                RAG Applications
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Knowledge Assistants
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-purple-500 hover:to-purple-600"
            >
              Discuss Your AI Agent
            </Link>
          </div>

          {/* Card 3 - AI Product Development */}
          <div
            data-card-id={3}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:-translate-y-1 ${
              visibleCards.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Star Badge */}
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
              <span className="text-sm text-white">⭐</span>
            </div>

            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20">
                <span className="text-2xl">🚀</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-orange-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                AI Product Development
              </h3>
              <p className="text-sm text-gray-400">
                Transform AI ideas into scalable production-ready software.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xs text-gray-500">
                Starting from
              </div>
              <div className="text-2xl font-bold text-orange-400">
                $3,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI SaaS
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI Chatbots
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI Search
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-orange-500 hover:to-orange-600"
            >
              Build My AI Product
            </Link>
          </div>

          {/* Card 4 - Startup MVP Development */}
          <div
            data-card-id={4}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 ${
              visibleCards.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <span className="text-2xl">🚀</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-blue-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                Startup MVP Development
              </h3>
              <p className="text-sm text-gray-400">
                Launch a scalable MVP designed for rapid validation and future growth.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xs text-gray-500">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-400">
                $5,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Product Strategy
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Authentication
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Payments
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-blue-600"
            >
              Launch My Startup
            </Link>
          </div>

          {/* Card 5 - Vertical AI SaaS */}
          <div
            data-card-id={5}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-1 ${
              visibleCards.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Star Badge */}
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
              <span className="text-sm text-white">⭐</span>
            </div>

            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <span className="text-2xl">🏢</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-cyan-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                Vertical AI SaaS
              </h3>
              <p className="text-sm text-gray-400">
                Industry-specific AI software built for a single business domain.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xs text-gray-500">
                Starting from
              </div>
              <div className="text-2xl font-bold text-cyan-400">
                $7,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Multi-Tenant SaaS
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                AI Features
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Billing
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-cyan-500 hover:to-cyan-600"
            >
              Start My AI SaaS
            </Link>
          </div>

          {/* Card 6 - Enterprise Software Solutions */}
          <div
            data-card-id={6}
            className={`group relative overflow-hidden rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-900/30 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-400 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:-translate-y-1 ${
              visibleCards.includes(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                Enterprise
              </span>
            </div>

            {/* Icon */}
            <div className="mb-4 flex items-center justify-between pt-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30">
                <span className="text-2xl">💼</span>
              </div>
              <span className="text-gray-500 transition-colors group-hover:text-blue-400">→</span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                Enterprise Software Solutions
              </h3>
              <p className="text-sm text-gray-400">
                Enterprise-grade software platforms designed for long-term business growth.
              </p>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-xl font-bold text-white">
                Custom Quote
              </div>
              <div className="text-xs text-gray-500">
                Projects generally start from
              </div>
              <div className="text-sm font-semibold text-blue-400">
                $10,000+ USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-xs text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Enterprise Platforms
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                ERP
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                CRM
              </li>
            </ul>

            {/* Button */}
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-blue-600"
            >
              Let&apos;s Build Together
            </Link>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-400 sm:gap-8">
            <span className="flex items-center">
              🔒 NDA Available
            </span>
            <span className="flex items-center">
              📋 Milestone-Based Payments
            </span>
            <span className="flex items-center">
              🚀 Agile Development
            </span>
            <span className="flex items-center">
              🤝 Long-Term Partnership
            </span>
            <span className="flex items-center">
              🌍 Global Delivery
            </span>
            <span className="flex items-center">
              💬 Direct Founder Communication
            </span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-base text-gray-400 sm:text-lg">
            Every project is unique. Book a free discovery call and we&apos;ll recommend the best engagement model based on your business goals, timeline, and technical requirements.
          </p>
          <Link
            href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-base font-semibold text-white transition-all hover:from-blue-500 hover:to-blue-600"
          >
            Book Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
