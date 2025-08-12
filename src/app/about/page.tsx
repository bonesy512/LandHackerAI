import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Card className="w-full bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary font-headline">
            Our Mission: Empowering Real Estate Innovators
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center">
            LandHacker.ai was founded by a team of veteran real estate investors and expert software developers who saw a gap in the market. We were tired of juggling multiple, outdated systems to find and analyze deals. We knew there had to be a better way to access property data and connect with sellers.
          </p>
          
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary text-center">Built for the Modern Investor</h3>
            <p className="text-muted-foreground text-center">
              Our platform is the solution we always wished we had. It combines comprehensive, nationwide property data with a powerful suite of analytics and communication tools. We are dedicated to building intuitive, user-friendly technology that saves you time, reduces your risk, and gives you a critical edge in a competitive market.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
