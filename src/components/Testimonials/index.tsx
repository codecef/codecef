"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechStart India 🇮🇳",
      rating: 5,
      initials: "RS",
      avatarColor: "bg-blue-500",
      review: "CodeCEF built our entire MVP in just 3 weeks. The architecture was clean, scalable and exactly what we needed to pitch to investors. Highly recommended!",
      tag: "MVP Development"
    },
    {
      id: 2,
      name: "James Mitchell",
      company: "LaunchPad UK 🇬🇧",
      rating: 5,
      initials: "JM",
      avatarColor: "bg-purple-500",
      review: "Working with CodeCEF was seamless despite the timezone difference. Professional communication, clean code delivery, and they genuinely understood our product vision.",
      tag: "Web Application"
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "ShopEase India 🇮🇳",
      rating: 5,
      initials: "PP",
      avatarColor: "bg-green-500",
      review: "Our e-commerce platform handles 500+ orders daily without a single issue. CodeCEF delivered beyond our expectations and on time.",
      tag: "E-commerce"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "SaaS Ventures USA 🇺🇸",
      rating: 5,
      initials: "DT",
      avatarColor: "bg-orange-500",
      review: "I've worked with many dev agencies — CodeCEF stands out. They don't just code, they think about your business goals. Will definitely work again.",
      tag: "SaaS Development"
    },
    {
      id: 5,
      name: "Amit Verma",
      company: "FinTrack India 🇮🇳",
      rating: 5,
      initials: "AV",
      avatarColor: "bg-red-500",
      review: "The mobile app they built for us has 4.8 stars on Play Store. Users love the UI and the performance is outstanding.",
      tag: "Mobile App"
    },
    {
      id: 6,
      name: "Sarah Collins",
      company: "EduTech Australia 🇦🇺",
      rating: 5,
      initials: "SC",
      avatarColor: "bg-teal-500",
      review: "CodeCEF helped us migrate to the cloud and integrate 3 third-party APIs. Zero downtime, great documentation, and super responsive team.",
      tag: "Cloud + API"
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-sm">⭐</span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Real feedback from startups and businesses we've worked with across India and internationally
          </p>
        </div>

        {/* Star Rating Bar */}
        <div className="mb-12 rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-dark">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-body-color dark:text-body-color-dark sm:gap-8 sm:text-base">
            <span className="flex items-center">
              {renderStars(5)} 5.0 Rating
            </span>
            <span>20+ Happy Clients</span>
            <span>🌍 India & International</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              data-card-id={testimonial.id}
              className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-dark ${
                visibleCards.includes(testimonial.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Star Rating */}
              <div className="mb-4 flex items-center">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="mb-6 text-base italic leading-relaxed text-body-color dark:text-body-color-dark">
                "{testimonial.review}"
              </blockquote>

              {/* Tag Badge */}
              <div className="mb-4">
                <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
                  {testimonial.tag}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.avatarColor} text-white font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-body-color dark:text-body-color-dark">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Ready to be our next success story?
          </h3>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg"
            >
              📅 Book Free Demo
            </Link>
            <Link
              href="https://wa.me/917470668602"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:shadow-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </Link>
            <Link
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border-2 border-[#0077b5] px-6 py-3 text-base font-semibold text-[#0077b5] bg-transparent duration-300 ease-in-out hover:bg-[#0077b5] hover:text-white"
            >
              🔗 LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
