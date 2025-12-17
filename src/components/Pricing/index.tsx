import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple & Transparent Pricing"
          paragraph="Flexible pricing tailored for Indian startups, businesses, and founders. Choose a plan or contact us for custom solutions."
          center
          width="700px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Static Website &amp; Design
                </h3>
                <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                  Perfect for individuals, startups, and small businesses looking for a professional online presence.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-500/10">
                🔥 Limited Offer
              </span>
            </div>

            <div className="mb-6">
              <div className="text-xs font-medium uppercase tracking-wide text-body-color dark:text-body-color-dark">
                Offer Price
              </div>
              <div className="mt-1 text-2xl font-bold text-black dark:text-white">
                ₹5,000 – ₹25,000
              </div>
              <div className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                <span className="line-through">₹15,000 – ₹40,000</span>
              </div>
            </div>

            <ul className="mb-8 space-y-2 text-sm text-body-color dark:text-body-color-dark">
              <li>Up to 5 pages</li>
              <li>Responsive design</li>
              <li>Modern UI</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
              <li>Fast delivery</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Contact Now
              </a>
              <a
                href="/contact"
                className="rounded-sm border border-black/10 px-6 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                Get Quote
              </a>
            </div>
          </div>

          <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Dynamic Website &amp; Database Systems
                </h3>
                <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                  Best for businesses that need login systems, admin panels, databases, and dynamic features.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-500/10">
                🔥 Limited Offer
              </span>
            </div>

            <div className="mb-6">
              <div className="text-xs font-medium uppercase tracking-wide text-body-color dark:text-body-color-dark">
                Offer Price
              </div>
              <div className="mt-1 text-2xl font-bold text-black dark:text-white">
                ₹25,000 – ₹70,000
              </div>
              <div className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                <span className="line-through">₹40,000 – ₹99,000</span>
              </div>
            </div>

            <ul className="mb-8 space-y-2 text-sm text-body-color dark:text-body-color-dark">
              <li>Backend + database integration</li>
              <li>Admin dashboard</li>
              <li>Authentication system</li>
              <li>API integration</li>
              <li>Scalable architecture</li>
              <li>Deployment support</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Contact Now
              </a>
              <a
                href="/contact"
                className="rounded-sm border border-black/10 px-6 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                Discuss Project
              </a>
            </div>
          </div>

          <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Custom Software &amp; MVP Development
                </h3>
                <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                  Tailored solutions for startups, SaaS products, and businesses with unique requirements.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10">
                Custom Pricing
              </span>
            </div>

            <div className="mb-6">
              <div className="text-xs font-medium uppercase tracking-wide text-body-color dark:text-body-color-dark">
                Pricing
              </div>
              <div className="mt-1 text-2xl font-bold text-black dark:text-white">
                Custom pricing
              </div>
              <div className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                Based on project scope and complexity
              </div>
            </div>

            <ul className="mb-8 space-y-2 text-sm text-body-color dark:text-body-color-dark">
              <li>MVP development</li>
              <li>SaaS platforms</li>
              <li>Custom dashboards</li>
              <li>Automation systems</li>
              <li>API &amp; cloud architecture</li>
              <li>Long-term scalability planning</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Contact Now
              </a>
              <a
                href="/contact"
                className="rounded-sm border border-black/10 px-6 py-3 text-sm font-semibold text-black duration-300 ease-in-out hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
