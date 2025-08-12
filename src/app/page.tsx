import { AppStoreBadge } from "@/components/icons/app-store-badge";
import { GooglePlayBadge } from "@/components/icons/google-play-badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 via-transparent to-transparent">
      <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Unlock Off-Market Real Estate Deals
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The ultimate proptech tool for finding off-market properties, generating comps, and managing deals.
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
  );
}
