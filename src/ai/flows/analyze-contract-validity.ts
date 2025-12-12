'use server';

/**
 * @fileOverview Analyzes contract details against Dutch transport law to identify potential legal issues.
 *
 * - analyzeContractValidity - A function that analyzes the contract details.
 * - AnalyzeContractValidityInput - The input type for the analyzeContractValidity function.
 * - AnalyzeContractValidityOutput - The return type for the analyzeContractValidity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContractValidityInputSchema = z.object({
  contractDetails: z
    .string()
    .describe('The contract details to be analyzed, including scope, terms, and conditions.'),
});
export type AnalyzeContractValidityInput = z.infer<typeof AnalyzeContractValidityInputSchema>;

const AnalyzeContractValidityOutputSchema = z.object({
  legalIssues: z
    .string()
    .describe('Potential legal issues identified in the contract details.'),
  areasNeedingAdjustment: z
    .string()
    .describe('Areas in the contract that may need adjustment to comply with Dutch transport law.'),
  advice: z.string().describe('Advice on how to adjust the contract to be legally sound.'),
});
export type AnalyzeContractValidityOutput = z.infer<typeof AnalyzeContractValidityOutputSchema>;

export async function analyzeContractValidity(
  input: AnalyzeContractValidityInput
): Promise<AnalyzeContractValidityOutput> {
  return analyzeContractValidityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContractValidityPrompt',
  input: {schema: AnalyzeContractValidityInputSchema},
  output: {schema: AnalyzeContractValidityOutputSchema},
  prompt: `You are an expert in Dutch transport law.

You will analyze the contract details provided by the user and identify potential legal issues, areas needing adjustment, and provide advice on how to adjust the contract to be legally sound.

Contract Details: {{{contractDetails}}}`,
});

const analyzeContractValidityFlow = ai.defineFlow(
  {
    name: 'analyzeContractValidityFlow',
    inputSchema: AnalyzeContractValidityInputSchema,
    outputSchema: AnalyzeContractValidityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
