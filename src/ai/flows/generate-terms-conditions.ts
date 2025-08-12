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

  Generate a comprehensive Terms and Conditions template for the application {{appName}} owned by {{companyName}}. 

  The terms should be consistent with the following policies.

  **Privacy Policy Key Points:**
  - Information Collection: We collect user-provided data (name, email, content) and automatically collected data (usage, device info).
  - Use of Information: Data is used to provide and improve the service, for communication (including marketing), and for security.
  - Data Sharing: Information may be shared with service providers, during business transfers, for legal reasons, or with user consent.
  - User Rights: Users have rights to access, rectify, and erase their data.

  **Marketing Policy Key Points:**
  - Communication: We may engage in digital advertising and email marketing (opt-in).
  - User-Generated Content: We will obtain explicit permission before using user content in marketing.
  - Compliance: All marketing adheres to CAN-SPAM, TCPA, and data privacy laws like CCPA and GDPR.

  The template should include sections on:
    *   Acceptable use of the service.
    *   User responsibilities, including safeguarding their account.
    *   User-Generated Content and intellectual property rights over it.
    *   Our rights to use user-generated content for marketing (with permission).
    *   Details on subscription models, including language for monthly and lifetime plans.
    *   Intellectual property rights for the app itself.
    *   A section that references the Privacy Policy and how user data is handled.
    *   Limitation of liability and disclaimers.
    *   Governing law and dispute resolution.`,
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

    