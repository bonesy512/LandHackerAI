import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, Search, Smartphone, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="relative isolate overflow-hidden bg-background">
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
            Find Your Next Real Estate Deal Before Anyone Else.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            LandHacker.ai is the all-in-one proptech platform for real estate investors, agents, and wholesalers. Get access to comprehensive property data, generate instant comps, and connect with motivated sellers—all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#">
                <Smartphone className="mr-2 h-5 w-5" />
                Download The App
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">Why Choose LandHacker.ai?</h2>
        <div className="grid gap-8 md:grid-cols-3">
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
    </>
  );
}
