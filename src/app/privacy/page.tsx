import { type Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';

// SEO and Open Graph Metadata
export const metadata: Metadata = {
  title: "Privacy Policy | LandHacker.ai",
  description: "Learn how LandHacker.ai collects, uses, and protects your personal data. Our privacy policy details our commitment to your data security and user rights.",
  openGraph: {
    title: "Privacy Policy | LandHacker.ai",
    description: "Learn how LandHacker.ai collects, uses, and protects your personal data.",
    url: "https://landhacker.ai/privacy",
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
export default function PrivacyPolicyPage() {
  const privacyPolicyText = `
LandHacker App Privacy Policy
Effective Date: August 7, 2025

1. Introduction
This Privacy Policy outlines the practices of Land AI LLC ("we," "us," or "our") concerning the collection, use, and disclosure of information for our mobile application, LandHacker (the "App"). We are committed to protecting the privacy of our users ("you" or "your") and handling your data with transparency and care.
Our registered business address is:
Land AI LLC
621 Saddle Forrest
Cibolo, TX, 78108
This policy applies to all information collected through the App and any related services, sales, marketing, or events. By downloading, accessing, or using the LandHacker App, you signify your acceptance of this Privacy Policy.

2. Information We Collect
We may collect several types of information from and about users of our App, including:
a) Personal Information You Provide to Us:
* Account Information: When you register for an account, we may collect your name, email address, phone number, and password.
* User Content: Information you provide for use in the App, such as property details, notes, photos, and project data.
* Communications: If you contact us directly for support or other inquiries, we may receive additional information about you, such as the contents of your message and any attachments.
b) Information Collected Automatically:
* Usage Data: We automatically collect information about your interactions with the App, such as the features you use, the pages you view, the actions you take, and the time, frequency, and duration of your activities.
* Device Information: We collect information about the mobile device you use to access the App, including the hardware model, operating system and version, unique device identifiers, and mobile network information.
* Location Information: With your permission, we may collect information about the precise location of your device. You can change the permissions for this in your device's settings.
c) Information from Third Parties:
We may receive information about you from third-party services, such as data providers or public databases, to supplement the information we collect. This is often related to land and property data to enhance the App's functionality.

3. How We Use Your Information
We use the information we collect for various business purposes, including to:
* Provide, operate, and maintain the LandHacker App.
* Improve, personalize, and expand the App's features and functionality.
* Understand and analyze how you use our App to develop new products, services, and features.
* Process your transactions and manage your account.
* Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the App, and for marketing and promotional purposes.
* Detect and prevent fraud and security issues.
* Comply with legal obligations and enforce our terms and policies.

4. How We Share Your Information
We do not sell your personal information. We may share the information we collect in the following circumstances:
* With Service Providers: We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer support. These service providers are contractually obligated to protect your information and are restricted from using it for any other purpose.
* For Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.
* For Legal Reasons: We may disclose your information if we are required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent or investigate possible wrongdoing in connection with the App, or protect the personal safety of users or the public.
* With Your Consent: We may disclose your personal information for any other purpose with your consent.

5. Data Security
We implement a variety of security measures designed to protect the security of your personal information. We use administrative, technical, and physical security measures to help protect your personal information. However, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

6. Data Retention
We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

7. Your Data Protection Rights
Depending on your location, you may have the following rights regarding your personal information:
* The right to access – You have the right to request copies of your personal data.
* The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
* The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
* The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
* The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
* The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
To exercise any of these rights, please contact us at the address provided below.

8. Children's Privacy
LandHacker is not intended for use by individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information from our files.

9. Changes to This Privacy Policy
We may update this PrivacyPolicy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.

10. Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please do not hesitate to contact us.
Land AI LLC
Attn: Privacy Officer
621 Saddle Forrest
Cibolo, TX, 78108
Email: privacy@landhacker.ai
Phone: 210-288-4266
`;

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Card className="bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary font-headline">
            Privacy Policy
          </CardTitle>
          <CardDescription className="text-muted-foreground">Last Updated: August 12, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] rounded-md border border-primary/20 p-4">
              <div className="whitespace-pre-wrap text-sm text-muted-foreground prose dark:prose-invert max-w-none">
                {privacyPolicyText}
              </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
