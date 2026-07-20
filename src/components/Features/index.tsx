import Link from "next/link";

const Features = () => {
  const services = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Automation",
      description: "Automate repetitive business operations using AI-powered workflows that reduce manual work, improve efficiency, and increase productivity.",
      badge: "🔥 Featured",
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%27m%20interested%20in%20AI%20Automation",
      cta: "Automate My Business →"
    },
    {
      id: 2,
      icon: "🧠",
      title: "AI Agents",
      description: "Build intelligent AI agents capable of understanding requests, retrieving knowledge, using external tools, and completing business tasks with minimal human intervention.",
      badge: "🔥 Featured",
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20Build%20AI%20Agent",
      cta: "Build AI Agent →"
    },
    {
      id: 3,
      icon: "🚀",
      title: "AI Product Development",
      description: "Transform your AI idea into a production-ready application with scalable architecture, modern user experience, and enterprise-grade reliability.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20Build%20AI%20Product",
      cta: "Build AI Product →"
    },
    {
      id: 4,
      icon: "🚀",
      title: "Startup MVP Development",
      description: "Launch your startup faster with an MVP designed for rapid validation, scalability, and future growth.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20Launch%20My%20Startup",
      cta: "Launch My Startup →"
    },
    {
      id: 5,
      icon: "🏢",
      title: "Vertical AI SaaS",
      description: "Build industry-specific AI software tailored to solve real business problems within a single domain.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20Start%20My%20AI%20SaaS",
      cta: "Start My AI SaaS →"
    },
    {
      id: 6,
      icon: "💼",
      title: "Enterprise Software Solutions",
      description: "Develop secure, scalable software platforms that streamline operations and support long-term business growth.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20Let%27s%20Build%20Together",
      cta: "Let's Build Together →"
    }
  ];

  return (
    <>
      <section id="features" className="py-16 bg-gray-900 md:py-20 lg:py-28">
        <div className="container">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold tracking-wider text-blue-400">
              OUR SERVICES
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Powerful Solutions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Real Impact.</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-gray-400 sm:text-lg">
              From AI automation and intelligent agents to scalable SaaS platforms, we help businesses innovate, automate operations, and accelerate growth.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1"
              >
                {/* Icon and Badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 text-xs font-medium text-white">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
