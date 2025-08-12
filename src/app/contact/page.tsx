import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline">Contact Us</CardTitle>
          <CardDescription className="text-lg">
            We&apos;d love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
          <div className="mt-8 text-center text-muted-foreground">
            <p>You can also reach us directly via email:</p>
            <a href="mailto:admin@landhacker.ai" className="flex items-center justify-center gap-2 mt-2 font-medium text-primary hover:underline">
              <Mail className="h-4 w-4" />
              admin@landhacker.ai
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
