'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { LegalAnalysis } from '@/lib/types';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Download, Print, FileText, AlertTriangle, BadgeInfo, ChevronsRight } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

interface ContractPreviewProps {
  legalAnalysis: LegalAnalysis | null;
  draftContract: string;
  isLoading: boolean;
}

const renderFormattedText = (text: string | undefined) => {
    if (!text) return null;
    const blocks = text.split(/\n\s*\n/);
    return blocks.map((block, i) => {
        const lines = block.split('\n').filter(line => line.trim() !== '');
        if (lines.every(line => line.trim().startsWith('*'))) {
            return (
                <ul key={i} className="list-disc pl-6 my-4 space-y-1">
                    {lines.map((line, j) => (
                        <li key={j}>{line.replace(/^\s*\*\s*/, '')}</li>
                    ))}
                </ul>
            );
        }
        return (
            <div key={i} className="my-2 space-y-1">
                {lines.map((line, j) => {
                    if (line.match(/^Dienstniveau [A-Z]/) || line.match(/Algemeen:/)) {
                        return <h3 key={j} className="text-lg font-headline font-semibold text-primary mt-4 mb-2">{line}</h3>;
                    }
                    if (line.match(/Tariefrange:/)) {
                        return <p key={j} className="font-semibold text-base">{line}</p>;
                    }
                    if (line.match(/Vereist:|De dienst omvat:|Toepassing range:|Inclusief:|Exclusief:/)) {
                        return <h4 key={j} className="font-semibold mt-3 mb-1 text-primary/80">{line}</h4>;
                    }
                    return <p key={j} className="text-sm">{line}</p>;
                })}
            </div>
        );
    });
};


export default function ContractPreview({ legalAnalysis, draftContract, isLoading }: ContractPreviewProps) {
  const contractContentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=800,width=800');
    if (printWindow && contractContentRef.current) {
      printWindow.document.write('<html><head><title>Contract</title>');
      const styles = Array.from(document.styleSheets)
        .map(s => `<link rel="stylesheet" href="${s.href}">`)
        .join('');
      printWindow.document.write(styles);
      printWindow.document.write('<style>body { padding: 40px; } @page { size: A4; margin: 20mm; } </style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(contractContentRef.current.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      setTimeout(() => { // Allow content to load
        printWindow.print();
      }, 500)
    }
  };

  const handleDownload = () => {
    if (contractContentRef.current) {
      const content = contractContentRef.current.innerHTML;
      const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Contract</title></head><body>`;
      const footer = "</body></html>";
      const sourceHTML = header + content + footer;

      const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      const fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'contract.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    }
  };

  return (
    <Card className="h-[75vh] flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">Contract Preview & Analysis</CardTitle>
        <CardDescription>Review the AI-generated analysis and draft contract.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <Tabs defaultValue="draft" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="draft"><FileText className="mr-2 h-4 w-4" />Draft</TabsTrigger>
            <TabsTrigger value="analysis"><AlertTriangle className="mr-2 h-4 w-4" />Legal Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="draft" className="flex-1 overflow-hidden py-4">
            <div id="contract-print-area" ref={contractContentRef} className="bg-white rounded-lg p-6 border shadow-sm h-full overflow-y-auto">
                {isLoading && !draftContract ? (
                     <div className="space-y-4">
                        <Skeleton className="h-12 w-1/3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-8 w-1/4 mt-4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                     </div>
                ) : draftContract ? (
                    <>
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-2xl font-headline font-bold text-primary">Freelance Overeenkomst</h2>
                                <p className="text-muted-foreground">Gebr. Stegeman Verhuizingen & Transport</p>
                            </div>
                            <Logo className="h-12" />
                        </div>
                        {renderFormattedText(draftContract)}
                    </>
                ) : (
                    <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                        <FileText className="h-12 w-12 mb-4" />
                        <p>The draft contract will appear here once generated.</p>
                    </div>
                )}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="flex-1 overflow-hidden py-4">
            <div className="bg-white rounded-lg p-6 border shadow-sm h-full overflow-y-auto">
                {isLoading && !legalAnalysis ? (
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-1/3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-8 w-1/4 mt-4" />
                        <Skeleton className="h-4 w-full" />
                     </div>
                ): legalAnalysis ? (
                    <Accordion type="single" collapsible defaultValue="issues" className="w-full">
                    <AccordionItem value="issues">
                        <AccordionTrigger><AlertTriangle className="mr-2 h-4 w-4 text-destructive"/> Potential Legal Issues</AccordionTrigger>
                        <AccordionContent>{legalAnalysis.legalIssues}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="adjustments">
                        <AccordionTrigger><ChevronsRight className="mr-2 h-4 w-4 text-blue-500"/> Areas for Adjustment</AccordionTrigger>
                        <AccordionContent>{legalAnalysis.areasNeedingAdjustment}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="advice">
                        <AccordionTrigger><BadgeInfo className="mr-2 h-4 w-4 text-green-500"/> AI's Advice</AccordionTrigger>
                        <AccordionContent>{legalAnalysis.advice}</AccordionContent>
                    </AccordionItem>
                    </Accordion>
                ) : (
                     <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                        <AlertTriangle className="h-12 w-12 mb-4" />
                        <p>Legal analysis will be displayed here.</p>
                    </div>
                )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 no-print">
        <Button variant="outline" onClick={handlePrint} disabled={!draftContract}><Print className="mr-2 h-4 w-4" /> Print / PDF</Button>
        <Button onClick={handleDownload} disabled={!draftContract}><Download className="mr-2 h-4 w-4" /> Download .doc</Button>
      </CardFooter>
    </Card>
  );
}
