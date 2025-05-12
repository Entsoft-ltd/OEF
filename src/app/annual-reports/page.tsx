
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Banknote, BarChart3, CalendarCheck2, FileText, Gift, Users, Video, CheckSquare, ArrowRight } from "lucide-react";

const reportSections2021 = [
  {
    title: "Incorporation of OEF",
    content: "A significant progress has been made to register OEF with the Corporate Affairs Commission (CAC). This will enable OEF become a legal entity so that it can open account in its name and other benefits. Hopefully, the process will be completed by the end of first quarter of 2022.",
  },
  {
    title: "Virtual Community Interaction 2021",
    content: "The Virtual Community Interaction (VCI) was a huge success. It was the first public-facing programme of OEF. It was held virtually over Zoom, as well as physically at two centres in Onicha - Onicha Model Technical School and Presbyterian Church of Nigeria, Egunkwo. Over 160 persons attended, and feedbacks collected has led to improvements in how OEF can serve the community better.",
    youtubeLink: "https://youtu.be/0QKV2ZdBsSQ",
  },
  {
    title: "OEF Final Year Research Grant",
    content: [
      "In 2021, applications were invited from qualified Undergraduate or Postgraduate students to conduct the following research as their final year project or master’s project: \"Mapping of Educational Resources in Primary and Secondary Schools in Onicha Community\".",
      "The project would map the human and non-human resources available in schools in Onicha to facilitate governmental and non-governmental interventions. OEF will pay the student a one-off grant of N150,000.00.",
      "Eligibility: From Onicha Community, good CGPA, preferably Education faculty but open to Arts/Social Sciences. Penultimate year students encouraged.",
      "Benefits: Improve educational development, support from supervisors, presentation opportunities, mentorship.",
      "Application Process: Email interest -> Application form -> ZOOM Interview -> Award.",
      "Deadlines: Expression of Interest (Dec 31, 2021), Full Application (Jan 31, 2022), Interviews (Feb 10-15, 2022), Winner Announcement (Feb 25, 2022).",
      "Contact: onichaedufoundation@gmail.com or Dr. Nathaniel Obasi on 08034499155."
    ],
  },
  {
    title: "OEF-Students' End of the Year Hangout",
    content: "So far, there is lack of interests or low engagement of young people from Onicha in educational activities. OEF designed the Hangout to engage them and try to understand how they can be supported effectively. OEF encouraged students to complete a form to enable OEF understand how to support them from their perspective.",
    youtubeLink: "https://youtu.be/4m9bYrqr-W4",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScCj0zsk17DrDAQMGVatUYI7xxd5hxvR1OSo6jieudbe_IOlw/viewform",
  },
  {
    title: "Organisational Development",
    content: "Major feedback from the Virtual Community Interaction 2021 was that OEF should make efforts to interface with the community and the students. OEF created a forum (OEF-Community Forum) to facilitate such interface.",
  },
];

const acknowledgements = [
  "All the BoT members for volunteering countless number of hours and committing their professional and financial resources.",
  "OEF members for their participation, ideas, financial contributions and commitments.",
  "Onicha Model Technical School for hosting Virtual Community Interaction 2021.",
  "Presbyterian Church of Nigeria, Egunkwo for hosting Virtual Community Interaction 2021.",
  "All speakers in Virtual Community Interaction 2021: Professor Wilberforce Oti, Professor Anthony Okorie Ani, Professor Steve Egbo, Dr Maxwell Omabe, Dr Eni Oko, Dr David Okoroafor, and Barr Chidinma Nwankwo.",
  "Professor Michael Akawa Ngwu for his generous donation and pledge.",
  "Dr Maxwell Omabe for the pledge to donate N100,000 for the next 10 years.",
  "Engr Benison Chukwu Nwovoke for a significant donation of N200,000.",
  "Engr Humphrey Okereke for a significant pledge of N220,000.",
  "Engr Chukwuma Ogbonnaya for a pledge of N100,000 for 10 years.",
  "Barr. Chukwuma Nwosu for his efforts in OEF incorporation.",
  "Mrs. Mary Chukwuma for a donation of N50,000 in 2021 and pledge for \"Scholarship for the Girl child\".",
  "2021 donors: Dr Kenneth Omabe, Engr Chigozie Uneke, Engr Humphrey Okereke, Engr Chukwuma Ogbonnaya, Engr Benison Nwovoke, Dr Nathaniel Obasi, Dr Ejike Chukwu, Engr Abaa Nnnanna, Engr Shadrach Uchenna Edward.",
  "Pastor Emmanuel Nwachi, Mr. Edward Okereke and Engr Ikechukwu Onwe for organizing VCI 2021 activities at home.",
  "Engr Samuel A. Mba for preparing the OEF Annual report.",
];

export default function AnnualReportsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          OEF Annual Reports
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Reviewing Our Progress and Envisioning Our Future
        </p>
      </header>

      {/* Philanthropy Section */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-primary/10 via-yellow-100 to-secondary/10 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-3xl text-primary"><Gift className="h-8 w-8" /> Philanthropy Shines Through</CardTitle>
            <CardDescription className="text-lg">
              In a time of uncertainty, your generosity made a difference.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-primary">₦520,000</p>
              <p className="mt-1 text-muted-foreground">Total Dues & Donations in 2021</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center shadow-md">
              <p className="text-3xl font-bold text-primary">₦470,000</p>
              <p className="mt-1 text-muted-foreground">From Members</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center shadow-md">
              <p className="text-3xl font-bold text-primary">₦50,000</p>
              <p className="mt-1 text-muted-foreground">External Donations</p>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* 2021 Reports */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-semibold text-primary">2021 Report Details</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {reportSections2021.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="rounded-lg border bg-card shadow">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                <span className="flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> {section.title}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {typeof section.content === 'string' ? (
                  <p className="text-card-foreground">{section.content}</p>
                ) : (
                  <ul className="list-disc space-y-2 pl-5 text-card-foreground">
                    {section.content.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                )}
                {section.youtubeLink && (
                  <Button asChild variant="link" className="mt-4 px-0 text-accent">
                    <Link href={section.youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Video className="h-4 w-4" /> Watch on YouTube <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {section.googleFormLink && (
                  <Button asChild variant="link" className="mt-4 px-0 text-accent">
                    <Link href={section.googleFormLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                       <CheckSquare className="h-4 w-4" /> Access Form <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Financial Report & 2022 Budget */}
      <section className="mb-12 grid gap-8 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary"><Banknote className="h-7 w-7" /> Financial Summary 2021</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-card-foreground">
            <p>Dues and donations from members: <span className="font-semibold">₦470,000</span></p>
            <p>External donation: <span className="font-semibold">₦50,000</span></p>
            <p className="font-bold">Total dues and donations: <span className="text-primary">₦520,000</span></p>
            <p>Total expenditure: <span className="font-semibold">₦288,000</span></p>
            <p className="font-bold">Balance and accrued interest: <span className="text-primary">₦231,913</span></p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary"><BarChart3 className="h-7 w-7" /> 2022 Budget & Projections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-card-foreground">
            <p>Balance from 2021: <span className="font-semibold">₦231,913</span></p>
            <p>Dues and donations from members: <span className="font-semibold">₦600,000</span></p>
            <p>Significant donations from members: <span className="font-semibold">₦320,000</span></p>
            <p>Pledge from external donors: <span className="font-semibold">₦150,000</span></p>
            <p className="font-bold">Total Estimated Income: <span className="text-primary">₦1,201,913</span></p>
            <p>Total Planned Expenditure: <span className="font-semibold">₦900,000</span></p>
             <p className="font-bold">Balance to be carried forward to 2023: <span className="text-primary">₦401,913</span></p>
            <Accordion type="single" collapsible className="w-full pt-2">
              <AccordionItem value="budget-details">
                <AccordionTrigger className="hover:no-underline">View 2022 Budgeted Projects</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Final Year Research Grant: ₦150,000</li>
                    <li>Two OEF ICT and Resources hub: ₦400,000</li>
                    <li>Marydez scholarship for the girl child: ₦100,000</li>
                    <li>Virtual Community Interaction 2022: ₦150,000</li>
                    <li>Contingencies (bursary & Scholarships): ₦100,000</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Acknowledgements */}
      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary"><Users className="h-7 w-7" /> Acknowledgements</CardTitle>
            <CardDescription>Our heartfelt thanks to those who supported OEF in 2021.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-5 text-card-foreground">
              {acknowledgements.map((ack, index) => (
                <li key={index}>{ack}</li>
              ))}
            </ul>
            <p className="mt-4 italic">We understand that we need finances to achieve our projects and programmes, but we sincerely value non-financial inputs, as well as financial supports. So, we thank everyone who provided financial and non-financial supports, that may not have been mentioned here.</p>
          </CardContent>
        </Card>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary"><CalendarCheck2 className="h-7 w-7" /> Conclusion & The Path Ahead</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground">
            <p>This annual report 2021 has provided insights into the activities of OEF in the last one year. The progress of OEF is due to the altruistic nature of members and donors. OEF value any tangible and intangible efforts by anyone from Onicha Community and beyond. Each annual report will always recognize and acknowledge such goodwill.</p>
            <p>The summary of the budget for 2022 has been outlined. The budget was conservative because members prefer 100% performance. We hope to achieve the 2022 programmes.</p>
            <p>We appeal to members to continue supporting OEF. We appeal to wealthy individuals in Onicha to institute scholarships and bursaries in their names. OEF will use competitive process or the criteria of the donor to ensure that the scholarships get to the pupils and students.</p>
            <p className="font-semibold">Together, we will create a sustainable foundation for community development based on education.</p>
             <Image 
              src="https://picsum.photos/800/300?random=2" 
              alt="Future development" 
              width={800} 
              height={300} 
              className="mt-4 rounded-md object-cover"
              data-ai-hint="students learning future"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
