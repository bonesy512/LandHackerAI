import { generateTermsConditions } from '@/ai/flows/generate-terms-conditions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";

export const revalidate = 3600; // Revalidate once per hour

export default async function TermsAndConditionsPage() {
  let termsAndConditionsText = "Could not generate terms and conditions at this time. Please try again later.";
  try {
    const { termsAndConditions } = await generateTermsConditions({
      appName: 'LandHacker.ai',
      companyName: 'LandHacker.ai',
    });
    termsAndConditionsText = termsAndConditions;
  } catch (error) {
    console.error("Failed to generate terms and conditions:", error);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-4xl font-headline text-primary">Terms & Conditions</CardTitle>
          <CardDescription className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[60vh] rounded-md border border-primary/20 p-4">
                 <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {termsAndConditionsText}
                 </div>
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
