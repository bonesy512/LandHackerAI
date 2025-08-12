'use server';

/**
 * @fileOverview Terms and Conditions generator flow.
 *
 * - generateTermsConditions - A function that generates a Terms and Conditions template.
 * - GenerateTermsConditionsInput - The input type for the generateTermsConditions function.
 * - GenerateTermsConditionsOutput - The return type for the generateTermsConditions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTermsConditionsInputSchema = z.object({
  appName: z.string().describe('The name of the application.'),
  companyName: z.string().describe('The name of the company.'),
});

export type GenerateTermsConditionsInput = z.infer<typeof GenerateTermsConditionsInputSchema>;

const GenerateTermsConditionsOutputSchema = z.object({
  termsAndConditions: z.string().describe('The generated Terms and Conditions template.'),
});

export type GenerateTermsConditionsOutput = z.infer<typeof GenerateTermsConditionsOutputSchema>;

export async function generateTermsConditions(input: GenerateTermsConditionsInput): Promise<GenerateTermsConditionsOutput> {
  return generateTermsConditionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTermsConditionsPrompt',
  input: {schema: GenerateTermsConditionsInputSchema},
  output: {schema: GenerateTermsConditionsOutputSchema},
  prompt: `You are a legal expert specializing in generating Terms and Conditions templates for mobile applications.

  Generate a comprehensive Terms and Conditions template for the application {{appName}} owned by {{companyName}}. The template should include sections on:
    *   Acceptable use of the service.
    *   User responsibilities.
    *   Details on subscription models, including language for monthly and lifetime plans.
    *   Intellectual property rights.
    *   Limitation of liability and disclaimers.`,
});

const generateTermsConditionsFlow = ai.defineFlow(
  {
    name: 'generateTermsConditionsFlow',
    inputSchema: GenerateTermsConditionsInputSchema,
    outputSchema: GenerateTermsConditionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
