export interface ServiceLevel {
  level: string;
  title: string;
  rate: string;
  services: string[];
  requirements: string[];
  rangeApplication: string[];
  includes?: string[];
  excludes?: string[];
}

export interface Contract {
  id: string;
  freelancerName: string;
  status: 'Draft' | 'Sent' | 'Signed';
  createdAt: Date;
  content?: string;
}

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export type LegalAnalysis = {
  legalIssues: string;
  areasNeedingAdjustment: string;
  advice: string;
};
