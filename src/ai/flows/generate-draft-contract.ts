'use server';

/**
 * @fileOverview Flow to generate a draft contract document based on user input and AI legal review.
 *
 * - generateDraftContract - A function that generates the draft contract.
 * - GenerateDraftContractInput - The input type for the generateDraftContract function.
 * - GenerateDraftContractOutput - The return type for the generateDraftContract function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDraftContractInputSchema = z.object({
  contractDetails: z
    .string()
    .describe('The details of the contract to be generated.'),
  legalReview: z
    .string()
    .describe('The AI legal review of the contract details.'),
});
export type GenerateDraftContractInput = z.infer<
  typeof GenerateDraftContractInputSchema
>;

const GenerateDraftContractOutputSchema = z.object({
  draftContract: z.string().describe('The generated draft contract document.'),
});
export type GenerateDraftContractOutput = z.infer<
  typeof GenerateDraftContractOutputSchema
>;

export async function generateDraftContract(
  input: GenerateDraftContractInput
): Promise<GenerateDraftContractOutput> {
  return generateDraftContractFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDraftContractPrompt',
  input: {schema: GenerateDraftContractInputSchema},
  output: {schema: GenerateDraftContractOutputSchema},
  prompt: `You are an expert in drafting legal contracts under Dutch law.
Based on the contract details and the legal review provided, generate a draft contract document.

Contract Details:
{{contractDetails}}

Legal Review:
{{legalReview}}

Draft Contract:
`,
});

const generateDraftContractFlow = ai.defineFlow(
  {
    name: 'generateDraftContractFlow',
    inputSchema: GenerateDraftContractInputSchema,
    outputSchema: GenerateDraftContractOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
