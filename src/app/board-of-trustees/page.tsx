
import type { Trustee } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { UserCircle2 } from "lucide-react";

const trustees: Trustee[] = [
  { id: 1, name: "Engr Chukwuma Ogbonnaya", role: "The Coordinator" },
  { id: 2, name: "Dr Kenneth Omabe", role: "Lead, Finance and Accounting" },
  { id: 3, name: "Chukwuma Nwosu Eke Esq.", role: "Lead, Legal Services" },
  { id: 4, name: "Engr Humphrey P. Okereke", role: "Lead, Organisational Development" },
  { id: 5, name: "Dr Nathaniel Obasi", role: "Lead, Research developments" },
  { id: 6, name: "Dr Ejike Chukwu", role: "Lead, Information Technology Infrastructures" },
  { id: 7, name: "Engr Ikechukwu Onwe", role: "Lead, Community Relations" },
  { id: 8, name: "Engr Benison C. Ovoke", role: "Lead, Career, Scholarships and Overseas Opportunities" },
  { id: 9, name: "Engr Chigozie Uneke", role: "Lead, Equality, Diversity and Inclusion" },
];

export default function BoardOfTrusteesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Board of Trustees
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Meet the dedicated individuals guiding Onicha Education Foundation.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trustees.map((trustee) => (
          <Card key={trustee.id} className="flex flex-col items-center p-6 text-center shadow-lg transition-all hover:shadow-xl">
            <div className="mb-4">
              {trustee.imageUrl ? (
                <Image
                  src={trustee.imageUrl}
                  alt={trustee.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  data-ai-hint="person portrait"
                />
              ) : (
                 <Image
                  src={`https://picsum.photos/seed/${trustee.id}/100/100`}
                  alt={trustee.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  data-ai-hint="person professional"
                />
              )}
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold text-primary">{trustee.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-1">
              <p className="text-sm text-muted-foreground">{trustee.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
