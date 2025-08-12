import Link from "next/link";
import { Logo } from "@/components/icons/logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-6 w-6 hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year} LandHacker.ai. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/marketing" className="hover:text-primary transition-colors">
            Marketing Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
