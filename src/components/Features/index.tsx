import Link from "next/link";

const Features = () => {
  const services = [
    {
      id: 1,
      icon: "🚀",
      title: "Startup & MVP Development",
      description: "Got an idea? We'll turn it into a working product fast — with the right architecture to scale when you're ready.",
      badge: "🔥 Most Requested",
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%27m%20interested%20in%20MVP%20Development"
    },
    {
      id: 2,
      icon: "💻",
      title: "Custom Software Development",
      description: "We build exactly what your business needs — no bloat, no templates. Clean, reliable software built for you.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20Custom%20Software"
    },
    {
      id: 3,
      icon: "🌐",
      title: "Web Application Development",
      description: "Fast, modern, scalable web apps that your users will love and your team can manage with ease.",
      badge: "🔥 Most Requested",
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20a%20Web%20Application"
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile App Development",
      description: "Android & iOS apps that feel native, perform fast, and keep your users coming back.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20a%20Mobile%20App"
    },
    {
      id: 5,
      icon: "🔌",
      title: "API Integration & Development",
      description: "Connect your tools, automate workflows, and make your systems talk to each other seamlessly.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20API%20Integration"
    },
    {
      id: 6,
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Move to the cloud or optimize what you have — we handle migration, deployment, and infrastructure.",
      badge: null,
      whatsappLink: "https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20need%20Cloud%20Solutions"
    }
  ];

  return (
    <>
      <section id="features" className="py-16 bg-white dark:bg-gray-dark md:py-20 lg:py-28">
        <div className="container">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              What We Build For You
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark sm:text-lg">
              From idea to launch — we cover every layer of your product
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-dark"
              >
                {/* Icon and Badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10 text-2xl">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="rounded-sm bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white sm:text-xl">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80 group-hover:text-primary"
                >
                  Discuss This Service →
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
