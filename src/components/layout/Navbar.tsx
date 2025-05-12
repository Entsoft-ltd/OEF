
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import OEFLogo from "@/components/oef-logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/annual-reports", label: "Annual Reports" },
  { href: "/board-of-trustees", label: "Board of Trustees" },
  { href: "/community-forum", label: "Community Forum" },
  { href: "/contact-resources", label: "Contact & Resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <OEFLogo className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium",
                // Common hover state for all items
                "hover:bg-primary hover:text-primary-foreground",
                pathname === item.href
                  ? "text-primary" // Active (non-hover)
                  : "text-foreground" // Inactive (non-hover)
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium",
                      // Common hover state for all items
                      "hover:bg-primary hover:text-primary-foreground",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground" // Active (non-hover & hover)
                        : "text-foreground" // Inactive (non-hover)
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
