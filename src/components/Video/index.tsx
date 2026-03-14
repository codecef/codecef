"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Video = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [counters, setCounters] = useState({
    projects: 0,
    requests: 0,
    faster: 0,
    weeks: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visibleStats) {
            setVisibleStats(true);
            // Start counter animations
            animateCounter('projects', 20, 1500);
            animateCounter('requests', 10, 2000);
            animateCounter('faster', 80, 1800);
            animateCounter('weeks', 3, 1200);
          }
          
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute("data-step-id") || "0");
            if (stepId && !visibleSteps.includes(stepId)) {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, stepId]);
              }, stepId * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe stats section
    const statsSection = document.querySelector("[data-stats-section]");
    if (statsSection) observer.observe(statsSection);

    // Observe step cards
    const steps = document.querySelectorAll("[data-step-id]");
    steps.forEach((step) => observer.observe(step));

    return () => {
      if (statsSection) observer.unobserve(statsSection);
      steps.forEach((step) => observer.unobserve(step));
    };
  }, [visibleStats, visibleSteps]);

  const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
    }, 16);
  };

  const steps = [
    {
      id: 1,
      icon: "💬",
      title: "Free Demo Call",
      description: "Tell us your idea. We listen, ask the right questions, and suggest the best approach — completely free."
    },
    {
      id: 2,
      icon: "📋",
      title: "Architecture & Plan",
      description: "We map out your full tech stack, database design, and project roadmap before writing a single line of code."
    },
    {
      id: 3,
      icon: "⚙️",
      title: "Build & Update",
      description: "You get regular updates throughout. No ghosting. No surprises. Just clean, tested, documented code."
    },
    {
      id: 4,
      icon: "🚀",
      title: "Launch & Support",
      description: "We deploy your product and stay available post-launch for fixes, updates, and scaling support."
    }
  ];

  return (
    <>
      <section id="process" className="relative z-10 py-16 bg-[#0d1526] md:py-20 lg:py-28">
        <div className="container">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Turning Ideas into Impact
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-gray-300 sm:text-lg">
              From your first WhatsApp message to a live product — here&apos;s how we work
            </p>
          <p className="mx-auto max-w-[600px] text-base text-gray-300 sm:text-lg">
            From your first WhatsApp message to a live product — here&apos;s how we work
          </p>
        </div>

        {/* Part 1 - Stats Bar */}
        <div 
          data-stats-section
          className="mb-16 rounded-lg bg-gray-900 p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-[#4f8ef7] sm:text-4xl md:text-5xl">
                {visibleStats ? `${counters.projects}+` : "0+"}
              </div>
              <div className="text-sm font-medium text-gray-400 sm:text-base">
                Projects Delivered
              </div>
            </div>
            
            <div className="text-center border-l border-gray-700">
              <div className="mb-2 text-3xl font-bold text-[#4f8ef7] sm:text-4xl md:text-5xl">
                {visibleStats ? `${counters.requests}M+` : "0M+"}
              </div>
              <div className="text-sm font-medium text-gray-400 sm:text-base">
                Requests /day
              </div>
            </div>
            
            <div className="text-center border-l border-gray-700">
              <div className="mb-2 text-3xl font-bold text-[#4f8ef7] sm:text-4xl md:text-5xl">
                {visibleStats ? `${counters.faster}%` : "0%"}
              </div>
              <div className="text-sm font-medium text-gray-400 sm:text-base">
                Faster APIs
              </div>
            </div>
            
            <div className="text-center border-l border-gray-700">
              <div className="mb-2 text-3xl font-bold text-[#4f8ef7] sm:text-4xl md:text-5xl">
                {visibleStats ? `${counters.weeks} Weeks` : "0 Weeks"}
              </div>
              <div className="text-sm font-medium text-gray-400 sm:text-base">
                Avg MVP Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 - How We Work Process */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            Our Simple 4-Step Process
          </h3>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              
              <div className="relative grid grid-cols-4 gap-8">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    data-step-id={step.id}
                    className={`text-center transition-all duration-700 ${
                      visibleSteps.includes(step.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {/* Step Circle */}
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {step.id}
                    </div>
                    
                    {/* Step Card */}
                    <div className="rounded-lg bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                      <div className="mb-3 text-2xl">{step.icon}</div>
                      <h4 className="mb-2 text-lg font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              
              <div className="space-y-8">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    data-step-id={step.id}
                    className={`relative flex transition-all duration-700 ${
                      visibleSteps.includes(step.id)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    {/* Step Circle */}
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {step.id}
                    </div>
                    
                    {/* Step Card */}
                    <div className="flex-1 rounded-lg bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                      <div className="mb-3 text-2xl">{step.icon}</div>
                      <h4 className="mb-2 text-lg font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 - CTA */}
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
            Ready to start your project?
          </h3>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              📅 Book Free Demo Call
            </Link>
            <Link
              href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20start%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-green-500 px-6 py-3 text-base font-semibold text-green-500 transition-colors hover:bg-green-500 hover:text-white"
            >
              💬 Chat on WhatsApp
            </Link>
          </div>
          
          <p className="mt-4 text-sm text-gray-400">
            ⚡ Usually reply within 1 hour
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Video;
