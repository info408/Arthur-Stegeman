import ServiceLevels from "@/components/freelancer/service-levels";
import DocumentUpload from "@/components/freelancer/document-upload";
import ContractSigning from "@/components/freelancer/contract-signing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookUser, FileUp, Gavel } from "lucide-react";

export default function FreelancerPortalPage({ params }: { params: { id: string } }) {

  const mockContractContent = `
Dienstniveau C – Verhuizer (volwaardig)
Tariefrange: € 29,00 – € 32,00 p/u

De dienst omvat:
* zelfstandige uitvoering van verhuiswerkzaamheden;
* volledige demontage en montage van meubilair;
* inpakken van verhuisdozen (breekbare en niet-breekbare goederen) conform EV-/ISO-normen;

Vereist:
* SAVAM / Inboedelverhuizer diploma of aantoonbare gelijkwaardige praktijkervaring;
* VCA Basis;

Dit is een demo contract. De content wordt normaal gesproken gegenereerd door de AI.
`;

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-primary">Freelancer Portal</h1>
        <p className="text-muted-foreground">Welcome, freelancer. Here's your onboarding portal.</p>
        <p className="text-sm text-muted-foreground mt-1">Contract ID: {params.id}</p>
      </div>

      <Tabs defaultValue="contract" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contract"><Gavel className="mr-2 h-4 w-4"/>Contract</TabsTrigger>
          <TabsTrigger value="documents"><FileUp className="mr-2 h-4 w-4"/>Documents</TabsTrigger>
          <TabsTrigger value="services"><BookUser className="mr-2 h-4 w-4"/>Service Levels</TabsTrigger>
        </TabsList>
        <TabsContent value="contract">
            <ContractSigning contractContent={mockContractContent} />
        </TabsContent>
        <TabsContent value="documents">
            <DocumentUpload />
        </TabsContent>
        <TabsContent value="services">
           <ServiceLevels />
        </TabsContent>
      </Tabs>
    </div>
  );
}
