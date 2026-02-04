import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Telegraph",
  description: "Terms and Conditions for Telegraph Protocol",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using Telegraph Protocol ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-2">
            Permission is granted to temporarily access the materials on Telegraph Protocol's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on Telegraph Protocol's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
          <p className="text-muted-foreground">
            Telegraph Protocol provides a platform that unlocks real AI on-chain, allowing users to turn live signals into tradeable assets. The Service includes access to signals, nodes, and marketplace functionality. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <p className="text-muted-foreground mb-2">
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of the Service complies with all applicable laws and regulations</li>
            <li>Not using the Service for any illegal or unauthorized purpose</li>
            <li>Not interfering with or disrupting the Service or servers connected to the Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-muted-foreground">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Telegraph Protocol and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Telegraph Protocol's website are provided on an 'as is' basis. Telegraph Protocol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Telegraph Protocol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Telegraph Protocol's website, even if Telegraph Protocol or a Telegraph Protocol authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Risk Disclosure</h2>
          <p className="text-muted-foreground">
            Trading and investing in digital assets involves substantial risk of loss and is not suitable for every investor. The value of digital assets can be volatile and you may lose your entire investment. You should carefully consider whether trading or investing in digital assets is suitable for you in light of your circumstances, knowledge, and financial resources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
          <p className="text-muted-foreground">
            Telegraph Protocol may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms and Conditions, please contact us through our website or support channels.
          </p>
        </section>
      </div>
    </div>
  );
}

