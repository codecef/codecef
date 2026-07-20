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
    <section id="pricing" className="relative z-10 py-16 bg-gray-50 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            Flexible Engagement Models
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Every project is unique. We tailor our engagement based on your business goals, technical complexity, and timeline. The prices below represent typical starting points.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - AI Automation */}
          <div
            data-card-id={1}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                🤖 AI Automation
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Automate repetitive business operations using AI-powered workflows that reduce manual work, improve efficiency, and increase productivity.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $1,000 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Workflow Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                CRM Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                WhatsApp Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Email Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Document Processing
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Reporting
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book Discovery Call
              </Link>
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%27m%20interested%20in%20AI%20Automation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-center text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Request Proposal
              </Link>
            </div>
          </div>

          {/* Card 2 - AI Agents */}
          <div
            data-card-id={2}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                🧠 AI Agents
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Build intelligent AI agents capable of understanding requests, retrieving knowledge, using external tools, and completing business tasks.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $2,000 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Agents
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                RAG Applications
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Knowledge Assistants
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Tool Integrations
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Multi-Agent Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Enterprise AI
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Discuss Your AI Agent
              </Link>
            </div>
          </div>

          {/* Card 3 - AI Product Development */}
          <div
            data-card-id={3}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                🚀 AI Product Development
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Transform AI ideas into scalable production-ready software.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $3,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI SaaS
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Chatbots
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Search
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Copilots
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                API Integrations
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Cloud Deployment
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Build My AI Product
              </Link>
            </div>
          </div>

          {/* Card 4 - Startup MVP Development */}
          <div
            data-card-id={4}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                🚀 Startup MVP Development
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Launch a scalable MVP designed for rapid validation and future growth.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $5,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Product Strategy
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Authentication
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Payments
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Admin Dashboard
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Deployment
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Production Architecture
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Launch My Startup
              </Link>
            </div>
          </div>

          {/* Card 5 - Vertical AI SaaS */}
          <div
            data-card-id={5}
            className={`relative rounded-xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-dark dark:border-gray-800 ${
              visibleCards.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                🏢 Vertical AI SaaS
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Industry-specific AI software built for a single business domain.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starting from
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $7,500 USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-body-color dark:text-body-color-dark">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Multi-Tenant SaaS
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                AI Features
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Billing
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Dashboards
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                APIs
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                Enterprise Security
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start My AI SaaS
              </Link>
            </div>
          </div>

          {/* Card 6 - Enterprise Software Solutions */}
          <div
            data-card-id={6}
            className={`relative rounded-xl border-2 border-blue-500 bg-gray-900 p-8 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-dark ${
              visibleCards.includes(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ boxShadow: "0 0 30px rgba(79,142,247,0.25)" }}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-xs font-semibold text-white">
                💼 Enterprise
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                Enterprise Software Solutions
              </h3>
              <p className="text-sm text-gray-300">
                Enterprise-grade software platforms designed for long-term business growth.
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-2xl font-bold text-white">
                Custom Quote
              </div>
              <div className="text-sm text-gray-400">
                Projects generally start from
              </div>
              <div className="text-sm text-blue-400">
                $10,000+ USD
              </div>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Enterprise Platforms
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                ERP
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                CRM
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Internal Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Cloud Architecture
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✅</span>
                Long-Term Support
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Let's Build Together
              </Link>
            </div>
          </div>
        </div>

        {/* Reassurance Strip */}
        <div className="mt-12 rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-dark">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-body-color dark:text-body-color-dark sm:gap-8">
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
          <p className="mb-4 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Every project is unique. Book a free discovery call and we'll recommend the best engagement model based on your business goals, timeline, and technical requirements.
          </p>
          <Link
            href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Book Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
