import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About CodeCEF"
        description=""
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-black dark:text-white">
            CodeCEF (Creative Engineering Framework) is a registered MSME under the Government of India (UDYAM).
            <br />
              UDYAM Registration No: UDYAM-BR-23-0108377
            </p>
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed dark:text-body-color-dark">
              CodeCEF is a software delivery company focused on building real-world, production-grade systems for startups, SaaS products, and growing businesses. Our experienced engineering team designs and ships scalable, secure, and maintainable solutions that can handle real users, real data, and real business complexity.
            </p>
            <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed dark:text-body-color-dark">
              We emphasise clean, well-structured code, rigorous testing, and performance optimisation at every stage of the development lifecycle. From architecture and implementation to deployment and long-term support, we solve problems with a business-first mindset so your software remains reliable, fast, and easy to evolve.
            </p>

            <ul className="mb-8 grid gap-3 text-base text-body-color dark:text-body-color-dark sm:grid-cols-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Custom software development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Web &amp; backend systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>API &amp; cloud-ready architecture</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Performance optimisation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Secure and scalable solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
