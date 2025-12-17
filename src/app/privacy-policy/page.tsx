import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CodeCEF",
  description:
    "Learn how CodeCEF collects, uses, and protects your data when you use our software development and digital services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 dark:bg-black md:py-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-base text-body-color dark:text-body-color-dark">
            This Privacy Policy explains how CodeCEF (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, and protects information in connection with our software development and related services.
          </p>
        </div>

        <div className="space-y-8 text-base text-body-color dark:text-body-color-dark">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              We collect information that you provide directly to us and information that is generated when you use our services.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-medium">Contact details</span> such as your name, email address, phone number, and business information.
              </li>
              <li>
                <span className="font-medium">Project information</span> such as requirements, specifications, and content you share with us for software delivery.
              </li>
              <li>
                <span className="font-medium">Usage data</span> related to how you interact with our website, forms, and communication channels.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use the collected information to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide, operate, and improve our software and digital services.</li>
              <li>Communicate with you about enquiries, proposals, and ongoing projects.</li>
              <li>Send important service-related updates, invoices, and transactional communication.</li>
              <li>Maintain security, prevent fraud, and comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              3. Data Sharing
            </h2>
            <p className="mb-2">
              We do not sell your personal information. We may share information with trusted third parties only when necessary to:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Deliver our services (for example, cloud hosting, email, or analytics providers).</li>
              <li>Comply with applicable laws, regulations, or legal processes.</li>
              <li>Protect the rights, property, or safety of CodeCEF, our clients, or others.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              4. Data Security
            </h2>
            <p>
              We implement reasonable technical and organisational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              5. Data Retention
            </h2>
            <p>
              We retain your information only for as long as necessary to fulfil the purposes described in this policy or as required by law, accounting, or regulatory requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              6. Your Rights
            </h2>
            <p className="mb-2">
              Depending on applicable laws, you may have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us using the details provided on our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              7. Third-Party Links
            </h2>
            <p>
              Our website or delivered software may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please reach out to us through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


