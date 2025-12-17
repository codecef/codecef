import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Refund Policy | CodeCEF",
  description:
    "Understand CodeCEF's refund and cancellation terms for software development and digital services engagements.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Breadcrumb
        pageName="Refund Policy"
        description="Our refund and cancellation terms for software development and digital service engagements with CodeCEF."
      />
      <section className="relative z-10 overflow-hidden bg-white py-16 dark:bg-black md:py-24">
        <div className="container">
          <div className="space-y-8 text-base text-body-color dark:text-body-color-dark">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                1. Nature of Our Services
              </h2>
              <p>
                CodeCEF provides customised software development, design, integration, and related digital services. As our work is project-based and often tailored specifically to each client, refunds are evaluated on a case-by-case basis as described below.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                2. Project Initiation &amp; Advance Payments
              </h2>
              <p>
                Once an advance payment or initial milestone payment has been made and the project has commenced (for example, discovery, planning, or initial design/development), such payments are generally non-refundable as they cover time and resources already allocated to your project.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                3. Milestone-Based Payments
              </h2>
              <p className="mb-2">
                For engagements structured around milestones, payment is typically due upon completion or delivery of each agreed milestone. If you are not satisfied with a delivered milestone:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>We will work with you to address reasonable change requests aligned with the agreed scope.</li>
                <li>Refunds for completed milestones are generally not provided once work has been delivered and approved.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                4. Change of Scope or Cancellation by Client
              </h2>
              <p className="mb-2">
                If you choose to cancel the project or significantly change the scope after work has started:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>We will invoice for work completed and resources allocated up to the date of cancellation.</li>
                <li>Any unused portion of advance payments, if applicable, may be adjusted against outstanding invoices at our discretion.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                5. Delivery Issues
              </h2>
              <p className="mb-2">
                In the unlikely event that we are unable to deliver a project or a specific milestone due to reasons attributable solely to CodeCEF:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>We may, at our discretion, offer a partial or full refund for the undelivered portion of the work.</li>
                <li>Alternatively, we may provide additional work or support to reasonably resolve the issue.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                6. Third-Party Costs
              </h2>
              <p>
                Fees paid towards third-party services such as domain registrations, hosting, cloud services, software licences, or APIs are non-refundable, as these are governed by the respective third-party providers.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                7. Support &amp; Maintenance
              </h2>
              <p>
                For ongoing support, maintenance, or retainer-based arrangements, refunds are generally not provided for the current billing cycle once services have begun. Future renewals can be cancelled in advance with prior written notice as per the agreed terms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                8. How to Request a Refund
              </h2>
              <p>
                To discuss any refund-related concern, please contact us with your project details, invoice information, and a brief explanation of your request. We will review the matter in good faith and respond within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
                9. Updates to This Policy
              </h2>
              <p>
                CodeCEF may update this Refund Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
