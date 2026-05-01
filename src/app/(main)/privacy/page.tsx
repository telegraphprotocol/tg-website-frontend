import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Telegraph Protocol collects, uses, and protects your information. Our comprehensive privacy policy covers data collection, blockchain interactions, security measures, and your privacy rights.",
  openGraph: {
    title: "Privacy Policy | Telegraph Protocol",
    description:
      "Learn how Telegraph Protocol collects, uses, and protects your information. Comprehensive privacy policy covering data collection and security measures.",
    url: `${baseUrl}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Telegraph Protocol",
    description:
      "Learn how Telegraph Protocol collects, uses, and protects your information.",
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 lg:py-28 py-16 max-w-4xl">
      <h1 className="text-3xl font-medium mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground">
            Telegraph Protocol ("we," "our," or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our Service.
            Please read this Privacy Policy carefully. If you do not agree with
            the terms of this Privacy Policy, please do not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-muted-foreground mb-2">
            We may collect information about you in a variety of ways. The
            information we may collect on the Service includes:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
              <p className="text-muted-foreground">
                Personally identifiable information, such as your name, email
                address, and telephone number, that you voluntarily give to us
                when you register with the Service or when you choose to
                participate in various activities related to the Service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
              <p className="text-muted-foreground">
                Information our servers automatically collect when you access
                the Service, such as your IP address, your browser type, your
                operating system, your access times, and the pages you have
                viewed directly before and after accessing the Service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Financial Data</h3>
              <p className="text-muted-foreground">
                Financial information, such as data related to your payment
                method (e.g., valid credit card number, card brand, expiration
                date) that we may collect when you purchase, order, return,
                exchange, or request information about our services from the
                Service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Data</h3>
              <p className="text-muted-foreground">
                When you interact with our blockchain-based services, we may
                collect wallet addresses, transaction hashes, and other on-chain
                data that is publicly available on the blockchain.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Use of Your Information
          </h2>
          <p className="text-muted-foreground mb-2">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Service to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Create and manage your account</li>
            <li>Process your transactions and send you related information</li>
            <li>Email you regarding your account or order</li>
            <li>
              Fulfill and manage purchases, orders, payments, and other
              transactions related to the Service
            </li>
            <li>
              Generate a personal profile about you to make future visits more
              personalized
            </li>
            <li>Increase the efficiency and operation of the Service</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Service
            </li>
            <li>Notify you of updates to the Service</li>
            <li>Perform other business activities as needed</li>
            <li>
              Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Disclosure of Your Information
          </h2>
          <p className="text-muted-foreground mb-2">
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                By Law or to Protect Rights
              </h3>
              <p className="text-muted-foreground">
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Third-Party Service Providers
              </h3>
              <p className="text-muted-foreground">
                We may share your information with third parties that perform
                services for us or on our behalf, including payment processing,
                data analysis, email delivery, hosting services, customer
                service, and marketing assistance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Transfers</h3>
              <p className="text-muted-foreground">
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Blockchain Networks
              </h3>
              <p className="text-muted-foreground">
                When you interact with blockchain-based features of our Service,
                certain information, including wallet addresses and transaction
                data, may be publicly visible on the blockchain and cannot be
                deleted.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Security of Your Information
          </h2>
          <p className="text-muted-foreground">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse. Any
            information disclosed online is vulnerable to interception and
            misuse by unauthorized parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="text-muted-foreground">
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies on the Service to help customize the Service and
            improve your experience. When you access the Service, your personal
            information is not collected through the use of tracking technology.
            Most browsers are set to accept cookies by default. You can remove
            or reject cookies, but be aware that such action could affect the
            availability and functionality of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Your Privacy Rights
          </h2>
          <p className="text-muted-foreground mb-2">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              The right to access – You have the right to request copies of your
              personal data
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data
            </li>
            <li>
              The right to object to processing – You have the right to object
              to our processing of your personal data
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
          <p className="text-muted-foreground">
            We will retain your information for as long as your account is
            active or as needed to provide you services. We will retain and use
            your information to the extent necessary to comply with our legal
            obligations, resolve disputes, and enforce our policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Policy for Children
          </h2>
          <p className="text-muted-foreground">
            We do not knowingly solicit information from or market to children
            under the age of 18. If we learn that we have collected personal
            information from a child under age 18 without verification of
            parental consent, we will delete that information as quickly as
            possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time in order to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the
            new Privacy Policy on this page and updating the "Last updated"
            date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions or comments about this Privacy Policy, please
            contact us through our website or support channels.
          </p>
        </section>
      </div>
    </div>
  );
}
