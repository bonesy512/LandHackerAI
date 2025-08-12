import { type Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, Search, Smartphone, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// SEO and Open Graph Metadata
export const metadata: Metadata = {
  title: "LandHacker.ai: Find Off-Market Real Estate Deals",
  description: "The all-in-one proptech platform for real estate investors. Access property data, generate comps, and connect with sellers to find your next deal.",
  openGraph: {
    title: "LandHacker.ai: Find Off-Market Real Estate Deals",
    description: "The all-in-one proptech platform for real estate investors. Access property data, generate comps, and connect with sellers to find your next deal.",
    url: "https://landhacker.ai",
    siteName: "LandHacker.ai",
    images: [
      {
        url: "/og-image-home.png", // Placeholder for a specific OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const features = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Find Hidden Gems",
    description: "Access our massive database of off-market properties, including pre-foreclosures and vacant lots, complete with detailed property data.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Analyze Instantly",
    description: "Generate accurate, real-time comparable sales (\"comps\") on the fly to understand a property's true potential and make smarter offers.",
  },
  {
    icon: <CircuitBoard className="h-10 w-10 text-primary" />,
    title: "Connect & Close",
    description: "Use our integrated chat and deal management tools to contact property owners and close deals faster.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-card text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-primary font-headline">
            Find Your Next Real Estate Deal Before Anyone Else.
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-6">
            LandHacker.ai is the all-in-one proptech platform for real estate investors, agents, and wholesalers. Get access to comprehensive property data, generate instant comps, and connect with motivated sellers—all in one place.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Download on the App Store</Button>
            <Button size="lg" variant="outline">Get it on Google Play</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
            Why Choose LandHacker.ai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <Card key={index} className="text-center bg-card border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                    {feature.icon}
                    </div>
                    <CardTitle className="text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
