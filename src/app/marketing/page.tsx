import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MarketingPolicyPage() {
  const marketingPolicyText = `
LandHacker App Marketing Policy
Effective Date: August 7, 2025
1. Purpose and Scope
This Marketing Policy governs all marketing, advertising, and promotional activities for the LandHacker application (the "App"), a product of Land AI LLC ("we," "us," or "our"). The purpose of this policy is to ensure that our marketing efforts are strategic, professional, compliant with all applicable laws and regulations, and consistent with our brand identity.
This policy applies to all employees, contractors, and partners involved in the marketing of the LandHacker App.
2. Guiding Principles
All marketing activities shall be:
* Honest and Transparent: We will not make false or misleading claims about our App or its capabilities.
* Value-Driven: Our marketing will focus on the value and benefits the LandHacker App provides to our users.
* Respectful: We will respect the privacy and preferences of our audience.
* Compliant: We will adhere to all relevant legal and ethical standards in advertising and data use.
3. Target Audience & Personas
Our marketing efforts will be directed at a core set of professional personas. All content and campaigns should be tailored to address the specific needs and pain points of these groups:
* Persona A: The Real Estate Investor / Developer
   * Needs: Rapid deal analysis, site selection, due diligence automation, market trend data.
   * Pain Points: Time-consuming manual research, inaccurate data from multiple sources, missing out on off-market deals.
   * Marketing Focus: Emphasize ROI, efficiency gains, data accuracy, and competitive advantage.
* Persona B: The Land Broker / Agent
   * Needs: Tools for property valuation, client presentation materials, lead generation for land listings.
   * Pain Points: Difficulty in valuing unique land parcels, creating compelling marketing packages, finding qualified buyers.
   * Marketing Focus: Highlight tools that enhance client service, close deals faster, and showcase their expertise.
* Persona C: The Land Services Professional (e.g., Surveyors, Engineers)
   * Needs: Access to reliable parcel data, topographical information, zoning regulations.
   * Pain Points: Fragmented public records, outdated maps, navigating complex municipal codes.
   * Marketing Focus: Position the App as an essential tool for preliminary research and project feasibility.
4. Marketing Channels & Content Pillars
Our strategy will be executed across several key channels, guided by core content pillars:
a) Channels:
* Digital Advertising: Targeted PPC campaigns (Google Ads, LinkedIn Ads) focused on keywords related to land investment, real estate development, and property data analysis.
* Content Marketing: Blog posts, white papers, case studies, and webinars that provide expert insights into the land industry.
* Email Marketing: Nurture campaigns for leads and informational newsletters for users. All email marketing must be opt-in and comply with the CAN-SPAM Act.
* Social Media: Professional presence on platforms like LinkedIn to share industry news, expert analysis, and App updates.
* Partnerships: Collaborations with industry associations, influencers, and complementary technology providers.
b) Content Pillars:
* Pillar 1: Data-Driven Insights: Content that showcases how data can unlock land value (e.g., "Using AI to Predict Zoning Changes").
* Pillar 2: Efficiency & Automation: Content focused on saving time and resources (e.g., "Automate Your Due Diligence Checklist").
* Pillar 3: Market Expertise: Thought leadership content that establishes LandHacker as an authority in the land market (e.g., "Quarterly Report: Emerging Land Markets").
* Pillar 4: User Success Stories: Case studies and testimonials demonstrating tangible results achieved with the App.
5. Compliance and Data Usage
a) Regulatory Compliance:
All marketing materials and campaigns must comply with regulations including, but not limited to:
* CAN-SPAM Act: All commercial emails must include an unsubscribe link, our physical address, and clear identification that the message is an advertisement.
* TCPA (Telephone Consumer Protection Act): We will obtain prior express written consent before sending marketing text messages.
* CCPA/CPRA & GDPR: Where applicable, we will honor user rights regarding their data and provide clear disclosures about how personal information is used for marketing purposes.
b) Use of User Data in Marketing:
* We will only use personal information for marketing purposes in accordance with our Privacy Policy and with user consent where required.
* User data will be used to personalize marketing messages and offers, ensuring relevance and value.
* We will never sell user lists or personal data to third-party marketers.
6. Testimonials and User-Generated Content
We may use testimonials, reviews, or user-generated content in our marketing materials. We will obtain explicit written permission from the user before featuring their name, photo, or content. The user will be informed of where and how their contribution will be used.
7. Policy Review
This Marketing Policy will be reviewed annually by company leadership to ensure it remains relevant, effective, and compliant with evolving regulations and business strategy.
8. Contact Information
For any questions regarding this Marketing Policy, please contact:
Land AI LLC
Attn: Marketing Department
621 Saddle Forrest
Cibolo, TX, 78108
Email: [Insert Marketing Email Address, e.g., marketing@landhacker.ai]
`;

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-headline">Marketing Policy</CardTitle>
          <CardDescription>Last updated: August 7, 2025</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[60vh] rounded-md border p-4">
                 <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {marketingPolicyText}
                 </div>
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
