import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-card border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">About LandHacker.ai</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Empowering Real Estate Professionals Through Technology</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Team working on LandHacker.ai" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-md border-2 border-primary/30"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              <p className="text-muted-foreground">
                Our mission is to revolutionize the real estate industry by providing professionals with the most advanced, intuitive, and powerful tools to succeed. We believe that by simplifying access to critical property data and streamlining deal management, we can unlock new opportunities and drive unparalleled growth for our users.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary text-center">Our Story</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center">
              Founded by Thomas Schustereit, a visionary in the proptech space, LandHacker.ai was born from a simple yet powerful idea: to democratize access to real estate data and empower professionals to find and close deals faster than ever before. Frustrated by the fragmented and inefficient tools available, Thomas assembled a team of seasoned real estate experts and brilliant software engineers to build the solution they always wished they had.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center">
              Today, LandHacker.ai is the culmination of that vision—a comprehensive platform dedicated to serving the modern real estate investor, agent, and wholesaler. We are committed to continuous innovation, guided by the real-world needs of our community, as we build the future of property technology together.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
