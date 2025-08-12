import { AppStoreBadge } from "@/components/icons/app-store-badge";
import { GooglePlayBadge } from "@/components/icons/google-play-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, LineChart, Link2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Find Hidden Gems",
    description: "Access our massive database of off-market properties, including pre-foreclosures and vacant lots, complete with detailed property data.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Analyze Instantly",
    description: "Generate accurate, real-time comparable sales (\"comps\") on the fly to understand a property's true potential and make smarter offers.",
  },
  {
    icon: <Link2 className="h-10 w-10 text-primary" />,
    title: "Connect & Close",
    description: "Use our integrated chat and deal management tools to contact property owners and close deals faster.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 via-transparent to-transparent">
        <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
            Find Your Next Real Estate Deal Before Anyone Else.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            LandHacker.ai is the all-in-one proptech platform for real estate investors, agents, and wholesalers. Get access to comprehensive property data, generate instant comps, and connect with motivated sellers—all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#" aria-label="Download on the App Store">
              <AppStoreBadge className="h-12 md:h-14" />
            </Link>
            <Link href="#" aria-label="Get it on Google Play">
              <GooglePlayBadge className="h-12 md:h-14" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Why Choose LandHacker.ai?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
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
