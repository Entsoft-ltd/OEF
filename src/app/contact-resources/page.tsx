
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Mail, FileText, Users, ExternalLink } from "lucide-react";

export default function ContactResourcesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <Image 
          src="https://picsum.photos/1200/300?random=4" 
          alt="Contact OEF" 
          width={1200} 
          height={300} 
          className="mb-6 rounded-md object-cover"
          data-ai-hint="contact us help support"
        />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact & Resources
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Get in touch with us and explore helpful resources.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Information Card */}
        <Card className="shadow-lg" id="contact">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Mail className="h-7 w-7" /> Get In Touch
            </CardTitle>
            <CardDescription>
              We welcome your questions, suggestions, and partnership inquiries.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-card-foreground">Email Us:</h3>
              <a
                href="mailto:onichaedufoundation@gmail.com"
                className="text-accent hover:underline"
              >
                onichaedufoundation@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Community Forum Coordinator:</h3>
              <p className="text-card-foreground">Mr. Edward Okereke</p>
            </div>
             <div>
              <h3 className="font-semibold text-card-foreground">Research Grant Enquiries:</h3>
              <p className="text-card-foreground">Dr. Nathaniel Obasi - 08034499155</p>
            </div>
            {/* Placeholder for a contact form if needed in the future */}
            {/* <p className="text-sm text-muted-foreground">
              Alternatively, you can fill out our contact form (coming soon).
            </p> */}
          </CardContent>
        </Card>

        {/* Resources Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <FileText className="h-7 w-7" /> Our Resources
            </CardTitle>
            <CardDescription>
              Access key documents and learn more about OEF's strategy.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-1 font-semibold text-card-foreground">OEF Strategy Document</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                Dive deeper into the mission, vision, and strategic framework of the Onicha Education Foundation.
              </p>
              <Button asChild variant="outline">
                <Link
                  href="https://destinychukwuma.com/2021/07/31/onichaeducation-foundation-oef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Read Strategy Document <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div>
              <h3 className="mb-1 font-semibold text-card-foreground">OEF-Student Hangout 2021 Recording</h3>
               <p className="mb-2 text-sm text-muted-foreground">
                Watch the recorded session of our 2021 student engagement event.
              </p>
              <Button asChild variant="outline">
                <Link
                  href="https://youtu.be/4m9bYrqr-W4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Watch Video <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-card-foreground">Virtual Community Interaction 2021</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                View the recording of our first public-facing programme.
              </p>
              <Button asChild variant="outline">
                <Link
                  href="https://youtu.be/0QKV2ZdBsSQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Watch Video <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Placeholder for social media links */}
            {/* <div>
              <h3 className="font-semibold text-card-foreground">Follow Us:</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <Users className="h-5 w-5" /> Facebook (Coming Soon)
                </Button>
                 <Button variant="outline" size="icon" disabled>
                  <Users className="h-5 w-5" /> Twitter (Coming Soon)
                </Button>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
