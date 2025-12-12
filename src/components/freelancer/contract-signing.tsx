'use client';
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Download, Print, Check, PartyPopper } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';

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

export default function ContractSigning({ contractContent }: { contractContent: string }) {
  const contractContentRef = useRef<HTMLDivElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);
  const { toast } = useToast();

  const handleSign = () => {
    setSigned(true);
    toast({
        title: "Contract Signed!",
        description: "Thank you! The administrator has been notified.",
        action: <PartyPopper className="text-accent" />,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Review Your Contract</CardTitle>
        <CardDescription>Please review the agreement below carefully before signing.</CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={contractContentRef} className="bg-white rounded-lg p-6 border shadow-sm max-h-[60vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl font-headline font-bold text-primary">Freelance Overeenkomst</h2>
                    <p className="text-muted-foreground">Gebr. Stegeman Verhuizingen & Transport</p>
                </div>
                <Logo className="h-12" />
            </div>
            {renderFormattedText(contractContent)}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} disabled={signed}/>
            <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I have read and agree to the terms of this contract.
            </Label>
        </div>
        <Button onClick={handleSign} disabled={!agreed || signed} className="w-full sm:w-auto ml-auto">
            <Check className="mr-2 h-4 w-4" />
            {signed ? 'Agreement Signed' : 'Sign Agreement'}
        </Button>
      </CardFooter>
    </Card>
  );
}
