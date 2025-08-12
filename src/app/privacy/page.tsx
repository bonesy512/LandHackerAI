import { generatePrivacyPolicy } from '@/ai/flows/generate-privacy-policy';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";

export const revalidate = 3600; // Revalidate once per hour

export default async function PrivacyPolicyPage() {
  let privacyPolicyText = "Could not generate privacy policy at this time. Please try again later.";
  try {
    const { privacyPolicy } = await generatePrivacyPolicy({});
    privacyPolicyText = privacyPolicy;
  } catch (error) {
    console.error("Failed to generate privacy policy:", error);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-headline">Privacy Policy</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[60vh] rounded-md border p-4">
                 <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {privacyPolicyText}
                 </div>
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
