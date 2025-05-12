
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Target, ListChecks, MessageSquare, ArrowRightCircle, Workflow } from "lucide-react";
import Image from "next/image";

export default function CommunityForumPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
         <Image 
          src="https://picsum.photos/1200/300?random=3" 
          alt="Community Forum" 
          width={1200} 
          height={300} 
          className="mb-6 rounded-md object-cover"
          data-ai-hint="community meeting discussion"
        />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          OEF Community Forum (OEFCF)
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Bridging Communication and Fostering Collaboration for Educational Development.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-primary"><MessageSquare className="h-7 w-7" /> Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-card-foreground">
              <p>
                "OEF-Community Forum" is a focused group platform designed to bridge communications and
                interactions between OEF and critical Onicha stakeholders. The Forum is not open to
                everyone but selected people who have direct or indirect contributions to the
                realization of the goals and objectives of OEF.
              </p>
              <p>
                The contributions of people on the OEFCF platform could range from sharing
                experiences/ideas/advice, facilitating awareness of OEF objectives in their
                organisation, linking OEF to governmental and non-governmental organisations,
                volunteering in person or resources up to financial contributions.
              </p>
              <p>
                The idea to create physical viewing centres in Onicha for the 2021 Virtual Community
                Interaction (VCI) was from Dr Maxwell Omabe. This idea was adopted and
                implemented, and its impact was that those in Onicha who did not have access could participate. OEF
                is a Foundation for Onicha people, and it provides a platform for individuals, families,
                businesses, etc. to impact the community by making diverse contributions.
              </p>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="w-full space-y-6">
            <Card className="shadow-lg">
              <AccordionItem value="goals" className="border-none">
                <AccordionTrigger className="px-6 py-4 text-xl font-medium text-primary hover:no-underline">
                  <span className="flex items-center gap-2"><Target className="h-6 w-6" /> Specific Goals</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="list-disc space-y-2 pl-5 text-card-foreground">
                    <li>To implement a bottom-up approach to solving problems of educational development in the community. This means that teachers, pastors, and community leaders who interact with the children would be able to contribute to OEF strategies, programmes, projects, and events.</li>
                    <li>Create a pool of human resources that can help advance the objectives of OEF.</li>
                    <li>Create opportunity for awareness of the activities of OEF. Create a platform that can be used to publicize the activities of OEF.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Card>

            <Card className="shadow-lg">
               <AccordionItem value="modus-operandi" className="border-none">
                <AccordionTrigger className="px-6 py-4 text-xl font-medium text-primary hover:no-underline">
                  <span className="flex items-center gap-2"><Workflow className="h-6 w-6" /> Modus Operandi</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="list-disc space-y-2 pl-5 text-card-foreground">
                    <li>All members will be added to a WhatsApp group (OEF-Community Forum) after obtaining their consent.</li>
                    <li>OEFCF WhatsApp is strictly for issues within the domain of OEFCF concerns. All other matters of OEF will be posted and discussed in the existing WhatsApp groups. Members should please avoid posting spams, adverts and things that fall outside the scope of OEF.</li>
                    <li>Examples of matters that can be announced include: key projects of OEF, programmes, competition, scholarships, etc.</li>
                    <li>No adverts and commercials will be allowed, and the Group admins can remove non-compliant members. Membership is voluntary.</li>
                    <li>Ideas/suggestions generated from the OEFCF platform will be considered in OEF meetings for adoption and implementation.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Card>
          </Accordion>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary"><Users className="h-6 w-6" /> Potential Members</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-card-foreground">
                <li>Head teachers at all primary schools in Onicha Community.</li>
                <li>Deputy head teachers at all primary schools in Onicha Community.</li>
                <li>Principals & Vice-Principals of all secondary schools in Onicha Community.</li>
                <li>Retired teachers from Primary and Secondary schools.</li>
                <li>SPs and DSPs of secondary schools in Onicha.</li>
                <li>Pastors of churches in Onicha.</li>
                <li>Public and civil servants.</li>
                <li>Politicians.</li>
                <li>Successful businesspeople.</li>
                <li>BOT and Management members of OEF.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary"><ArrowRightCircle className="h-6 w-6" /> Next Steps & Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-card-foreground">
              <p>
                For more information or to get involved with the OEF-Community Forum, please contact Mr. Edward Okereke (OEF-Community Coordinator) or send emails to:
              </p>
              <a href="mailto:onichaedufoundation@gmail.com" className="mt-2 inline-block font-medium text-accent hover:underline">
                onichaedufoundation@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
