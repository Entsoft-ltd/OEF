
import OEFLogo from "@/components/oef-logo";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center">
            <OEFLogo className="h-7 w-auto mr-2" />
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Onicha Education Foundation. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/contact-resources#contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
            {/* Add social media links here if available */}
          </div>
        </div>
      </div>
    </footer>
  );
}
