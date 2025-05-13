
import type {Metadata} from 'next';
import { Inter as FontSans } from "next/font/google"
import './globals.css';
import { cn } from "@/lib/utils";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Onicha Education Foundation',
  description: 'Empowering the Onicha-Igboeze community through education and training.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen font-sans antialiased", // Removed bg-background
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
