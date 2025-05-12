
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, Target, Gem, Handshake, HandHelping, Briefcase, Users, Sparkles, Scale, HeartHandshake, CheckCircle, Lightbulb, Trophy } from "lucide-react";

const coreValues = [
  { letter: "O", value: "Oneness", icon: <Users className="h-5 w-5 text-primary" /> },
  { letter: "N", value: "Networking", icon: <Handshake className="h-5 w-5 text-primary" /> },
  { letter: "I", value: "Integrity", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
  { letter: "C", value: "Collaborative", icon: <HandHelping className="h-5 w-5 text-primary" /> },
  { letter: "H", value: "Humility", icon: <HeartHandshake className="h-5 w-5 text-primary" /> },
  { letter: "A", value: "Actions", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { letter: "I", value: "Interdependence", icon: <Users className="h-5 w-5 text-primary" /> },
  { letter: "G", value: "Gratitude", icon: <Sparkles className="h-5 w-5 text-primary" /> },
  { letter: "B", value: "Believe", icon: <Lightbulb className="h-5 w-5 text-primary" /> },
  { letter: "O", value: "Organized", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { letter: "E", value: "Excellence", icon: <Trophy className="h-5 w-5 text-primary" /> },
  { letter: "Z", value: "Zeal", icon: <Sparkles className="h-5 w-5 text-primary" /> },
  { letter: "E", value: "Equity", icon: <Scale className="h-5 w-5 text-primary" /> },
];

const objectives = [
  "Mobilize Onicha-Igboeze sons and daughters from all works of life to collaborate in building a progressive community in which everyone is fulfilled.",
  "Create systems for educational, career and training support.",
  "Support the education and training of the less privileged in the community.",
  "Use the platform to engage individuals, governments, NGOs, and other entities for positive educational development outcomes for Onicha-Igboeze people.",
  "Create support systems for mentorships at primary, secondary, undergraduate, and postgraduate levels.",
  "Create a trans-generational system of community support system in form of a registered foundation.",
  "Create a platform for networking amongst Onicha people for personal and community development.",
  "Carry out projects that improve the quality of education and public good of the community.",
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mt-0 mb-8 mx-4 md:mx-8 rounded-lg overflow-hidden bg-primary text-primary-foreground md:min-h-[400px] flex flex-col md:flex-row items-center shadow-xl">
        {/* Text Content on Left for Desktop, Top for Mobile */}
        <div className="w-full md:basis-3/4 p-6 md:p-12 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Onicha Education Foundation
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
            Empowering our community through education by providing learning opportunities, vocational training, 
            and personal development programs that uplift individuals and strengthen the fabric of our society.
          </p>
          <Link href="/contact-resources#contact" passHref>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full text-lg font-semibold transition-transform duration-300 ease-in-out hover:translate-y-[-2px]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        {/* Image on Right for Desktop, Bottom for Mobile */}
        <div className="relative order-1 md:order-2 h-64 md:h-auto md:self-stretch w-full md:basis-1/4">
          <Image
            src="/images/creativity.png" 
            alt="Students learning and being creative"
            layout="fill"
            objectFit="cover"
            className="md:rounded-r-lg"
            data-ai-hint="education students"
            priority
          />
        </div>
      </section>

      {/* Welcome Message */}
      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">From The Coordinator's Desk</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground">
          <p>
  At Onicha Education Foundation, we believe education is the cornerstone of lasting change.
  Our mission is to provide accessible learning opportunities, vocational training, and personal
  development programs that uplift individuals and strengthen our entire community.
</p>
<p>
  From sponsoring school fees and distributing educational materials to organizing skill-based
  workshops and mentorship programs, we're committed to building a brighter, more self-reliant
  future for Onicha and beyond.
</p>
<p>
  Join us as we invest in the next generation of leaders, thinkers, and innovators.
</p>
            <p>
              I invite all of us from Onicha to own this organisation and support it to reposition
              education and educational empowerment in the community.
            </p>
            <p className="font-semibold">
              God bless OEF. God bless Onicha community.
            </p>
            <p className="text-right font-medium">
              Chukwuma Ogbonnaya, BEng, PGDE, MSc, FHEA, MNSE, MIET.
              <br />
              Coordinator, Onicha Education Foundation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* About OEF Overview */}
      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold text-primary">About OEF</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Target className="h-6 w-6 text-primary" /> Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mobilize Onicha-Igboeze sons and daughters from all works of life to collaborate in building a progressive community in which everyone is fulfilled...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Building className="h-6 w-6 text-primary" /> Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>To give every child from Onicha-Igboeze the opportunity to reach their full potential through inspiration, education, and training.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Gem className="h-6 w-6 text-primary" /> Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We must change ourselves first to cause changes in others; and the real change happens inside out. We strongly believe that education should not be a luxury...</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Core Values & Objectives */}
      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Core Values (ONICHA-IGBOEZE)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {coreValues.map(cv => (
                <li key={cv.value} className="flex items-center gap-3">
                  {cv.icon}
                  <span><span className="font-bold">{cv.letter}</span> - {cv.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="objectives">
                <AccordionTrigger className="text-lg hover:no-underline">View Our Key Objectives</AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    {objectives.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

       {/* About Onicha-Igboeze */}
       <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Understanding Onicha-Igboeze</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground">
            <p>Onicha-Igboeze is in Onicha Local Government Area, Ebonyi State, Nigeria. Over the years, the community has produced many sons and daughters that have shown brilliance in different fields of human endeavour. A careful examination of the previous generations and the current older generation appear to suggest that education is a critical enabler in their reaching their full potential.</p>
            <p>There was a remarkable resurgence of commitment towards educational development through personal efforts in 1990s and 2000s in the community. This reality is behind the motivation to create OEF... Currently, it appears that there is no forward-looking focus on educational development in Onicha-Igboeze, resulting in some young people embarking on antisocial activities.</p>
            <p>To reverse the current downward trend and create a better future for the community, there is a need to create a sustainable culture of using “education as a tool”... Consequently, Onicha Education Foundation (OEF) seeks to create a sustainable system that will urgently mobilize communal and extra-communal actions to transform the talents and human resources in Onicha to enable them to live out their full potentials and impact the world around them starting from Onicha-Igboeze community.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
