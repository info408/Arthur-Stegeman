'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileCheck2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type DocumentStatus = 'pending' | 'uploading' | 'uploaded';
type DocumentState = {
    kvk: DocumentStatus;
    id: DocumentStatus;
    insurance: DocumentStatus;
};

export default function DocumentUpload() {
    const [statuses, setStatuses] = useState<DocumentState>({
        kvk: 'pending',
        id: 'pending',
        insurance: 'pending',
    });
    const { toast } = useToast();

    const handleFileUpload = (docType: keyof DocumentState, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setStatuses(prev => ({ ...prev, [docType]: 'uploading' }));
            // Simulate upload
            setTimeout(() => {
                setStatuses(prev => ({ ...prev, [docType]: 'uploaded' }));
                toast({
                    title: `Document Uploaded`,
                    description: `${docType.toUpperCase()} has been successfully uploaded.`,
                })
            }, 1500);
        }
    }

    const renderStatusIcon = (status: DocumentStatus) => {
        if (status === 'uploaded') {
            return <FileCheck2 className="h-5 w-5 text-green-500" />;
        }
        return <UploadCloud className="h-5 w-5 text-muted-foreground" />;
    };

    const docConfig = [
        { id: 'kvk', label: 'KvK Uittreksel', description: 'Recent extract from the Chamber of Commerce.' },
        { id: 'id', label: 'ID Document', description: 'Valid passport or ID card (front and back).' },
        { id: 'insurance', label: 'Liability Insurance', description: 'Proof of business liability insurance.' },
    ] as const;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Compliance Documents</CardTitle>
                <CardDescription>Please upload the following required documents to complete your profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {docConfig.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                            {renderStatusIcon(statuses[doc.id])}
                            <div>
                                <h3 className="font-semibold">{doc.label}</h3>
                                <p className="text-sm text-muted-foreground">{doc.description}</p>
                            </div>
                        </div>
                        <Button asChild size="sm" variant="outline" disabled={statuses[doc.id] === 'uploaded'}>
                            <Label htmlFor={doc.id}>
                                {statuses[doc.id] === 'uploaded' ? 'Uploaded' : 'Upload File'}
                            </Label>
                        </Button>
                        <Input 
                            id={doc.id} 
                            type="file" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload(doc.id, e)}
                            disabled={statuses[doc.id] === 'uploaded'}
                        />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
