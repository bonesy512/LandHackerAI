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
        <CardContent className="space-y-4 prose dark:prose-invert max-w-none text-muted-foreground">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the LandHacker.ai mobile application (the "Service") operated by LandHacker.ai ("us", "we", or "our").
          </p>
          
          <h3 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h3 className="text-xl font-semibold text-primary">2. Subscription Services</h3>
          <p>
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription. At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or LandHacker.ai cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting LandHacker.ai customer support team.
          </p>

          <h3 className="text-xl font-semibold text-primary">3. User Conduct</h3>
          <p>
            You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the business of LandHacker.ai, or any user of the Service. This includes, but is not limited to, decompiling, reverse engineering, or disassembling any aspect of the Service, or attempting to derive the source code of the Service.
          </p>
          
        </CardContent>
      </Card>
    </div>
  );
}
