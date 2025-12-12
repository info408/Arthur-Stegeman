'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Loader, Send, User } from 'lucide-react';
import type { ChatMessage, LegalAnalysis } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface ChatSectionProps {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  setLegalAnalysis: React.Dispatch<React.SetStateAction<LegalAnalysis | null>>;
  setDraftContract: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChatSection({
  messages,
  setMessages,
  setLegalAnalysis,
  setDraftContract,
  isLoading,
  setIsLoading,
}: ChatSectionProps) {
  const [input, setInput] = useState('');
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // AI functionality is temporarily disabled to fix build issues.
      const analysisResult: LegalAnalysis = {
        legalIssues: "AI analysis is temporarily disabled.",
        areasNeedingAdjustment: "AI analysis is temporarily disabled.",
        advice: "Please proceed with manual contract drafting.",
      };
      const assistantAnalysisMessage: ChatMessage = { role: 'assistant', content: "AI functionality is temporarily disabled. We will generate a boilerplate contract." };
      
      setMessages((prev) => [...prev, assistantAnalysisMessage]);
      setLegalAnalysis(analysisResult);
      
      const draftResult = { draftContract: "This is a boilerplate contract. AI generation is currently offline." };
      const draftText = `Here is the draft contract based on our discussion:\n\n${draftResult.draftContract}`;
      const assistantDraftMessage: ChatMessage = { role: 'assistant', content: draftText };

      setMessages((prev) => [...prev, assistantDraftMessage]);
      setDraftContract(draftResult.draftContract);

    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { role: 'system', content: 'An error occurred. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col h-[75vh]">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Bot className="text-primary" /> AI Contract Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                    <p>Start by describing the contract details in the text box below. For example: "Draft a contract for a freelancer for a moving job in Amsterdam..."</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role !== 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={message.role === 'assistant' ? 'bg-primary text-primary-foreground' : 'bg-destructive text-destructive-foreground'}>
                      <Bot size={16} />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap font-body ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                   <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={16} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3">
                 <Avatar className="h-8 w-8">
                    <AvatarFallback className='bg-primary text-primary-foreground'>
                      <Loader size={16} className="animate-spin" />
                    </AvatarFallback>
                  </Avatar>
                <div className="rounded-lg px-4 py-2 bg-muted">
                    <p className="animate-pulse">Analyzing and drafting...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the contract details..."
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
