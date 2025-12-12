'use client';

import React, { useState } from 'react';
import ChatSection from '@/components/admin/chat-section';
import ContractPreview from '@/components/admin/contract-preview';
import type { ChatMessage, LegalAnalysis } from '@/lib/types';

export default function NewContractPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [legalAnalysis, setLegalAnalysis] = useState<LegalAnalysis | null>(null);
  const [draftContract, setDraftContract] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
       <div className="text-center mb-8">
          <h1 className="text-3xl font-headline font-bold text-primary">Create New Contract</h1>
          <p className="text-muted-foreground">Use the AI assistant to draft a legally sound contract.</p>
        </div>
      <div className="grid lg:grid-cols-2 gap-8 h-full">
        <ChatSection
          messages={messages}
          setMessages={setMessages}
          setLegalAnalysis={setLegalAnalysis}
          setDraftContract={setDraftContract}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <ContractPreview
          legalAnalysis={legalAnalysis}
          draftContract={draftContract}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
