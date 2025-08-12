import { type Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

// SEO and Open Graph Metadata
export const metadata: Metadata = {
  title: "Terms & Conditions | LandHacker.ai",
  description: "Read the Terms and Conditions for using the LandHacker.ai mobile application and services, including subscriptions, acceptable use, and user responsibilities.",
  openGraph: {
    title: "Terms & Conditions | LandHacker.ai",
    description: "Read the Terms and Conditions for using the LandHacker.ai mobile application and services.",
    url: "https://landhacker.ai/terms",
    siteName: "LandHacker.ai",
    images: [
      {
        url: "/og-image-legal.png", // A generic branded OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

// Page Component
export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Card className="bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary font-headline">
            Terms & Conditions
          </CardTitle>
          <CardDescription className="text-muted-foreground">Last Updated: August 12, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 prose dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the LandHacker.ai mobile application (the "Service") operated by Land AI LLC ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          
          <section>
            <h3 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h3>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">2. Privacy Policy</h3>
            <p>
              Your use of the Service is also governed by our Privacy Policy, which is incorporated here by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">3. Subscription Services</h3>
            <p>
              Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or lifetime basis, depending on the type of subscription plan you select when purchasing a Subscription.
            </p>
            <p>
              At the end of each monthly Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Land AI LLC cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team. A valid payment method is required to process the payment for your Subscription.
            </p>
             <p>
              A lifetime subscription plan, if offered, consists of a one-time upfront payment that grants you access to the Service for as long as it is commercially available.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">4. User Responsibilities and Conduct</h3>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            <p>
              You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the business of Land AI LLC, or any other user. Prohibited activities include, but are not limited to, attempting to reverse engineer the application, introducing viruses or malicious code, or scraping data in a manner that violates these terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">5. User-Generated Content</h3>
            <p>
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("User-Generated Content"). You are responsible for the User-Generated Content that you post to the Service, including its legality, reliability, and appropriateness. By posting User-Generated Content, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any User-Generated Content you submit.
            </p>
            <p>
              As outlined in our Marketing Policy, we will obtain your explicit permission before using your User-Generated Content in any of our marketing materials.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">6. Intellectual Property</h3>
            <p>
              The Service and its original content (excluding User-Generated Content), features, and functionality are and will remain the exclusive property of Land AI LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Land AI LLC.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-primary">7. Limitation of Liability</h3>
            <p>
             In no event shall Land AI LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">8. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
            </p>
          </section>

           <section>
            <h3 className="text-xl font-semibold text-primary">9. Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary">10. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us through the information provided on our Contact Us page.
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
