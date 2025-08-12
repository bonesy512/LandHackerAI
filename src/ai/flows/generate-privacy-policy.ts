'use server';

/**
 * @fileOverview Flow to generate a comprehensive Privacy Policy template for a mobile application.
 *
 * - generatePrivacyPolicy - A function that generates the privacy policy.
 * - GeneratePrivacyPolicyInput - The input type for the generatePrivacyPolicy function (currently empty).
 * - GeneratePrivacyPolicyOutput - The return type for the generatePrivacyPolicy function (the privacy policy text).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePrivacyPolicyInputSchema = z.object({});
export type GeneratePrivacyPolicyInput = z.infer<typeof GeneratePrivacyPolicyInputSchema>;

const GeneratePrivacyPolicyOutputSchema = z.object({
  privacyPolicy: z.string().describe('A comprehensive privacy policy for a mobile application.'),
});
export type GeneratePrivacyPolicyOutput = z.infer<typeof GeneratePrivacyPolicyOutputSchema>;

export async function generatePrivacyPolicy(input: GeneratePrivacyPolicyInput): Promise<GeneratePrivacyPolicyOutput> {
  return generatePrivacyPolicyFlow(input);
}

const privacyPolicyPrompt = ai.definePrompt({
  name: 'privacyPolicyPrompt',
  input: {schema: GeneratePrivacyPolicyInputSchema},
  output: {schema: GeneratePrivacyPolicyOutputSchema},
  prompt: `You are an expert legal consultant specializing in generating privacy policies for mobile applications. Generate a comprehensive privacy policy template suitable for a mobile application, ensuring it covers all topics required by app stores for compliance, including data collection, usage, sharing, security, user rights, and data retention policies. Do not include any introduction or conclusion. Just generate the policy itself.

Consider these guidelines for mobile applications:
- Data Collection: Specify what data is collected (e.g., user registration info, location data, usage statistics).
- Data Usage: Explain how the collected data is used.
- Data Sharing: Detail with whom the data is shared (e.g., third-party services).
- Data Security: Describe the security measures implemented to protect user data.
- User Rights: Outline users' rights regarding their data (e.g., access, modification, deletion).
- Data Retention: Explain the data retention policies.

Ensure the privacy policy is thorough, easy to understand, and compliant with privacy regulations.`, // Updated prompt content here
});

const generatePrivacyPolicyFlow = ai.defineFlow(
  {
    name: 'generatePrivacyPolicyFlow',
    inputSchema: GeneratePrivacyPolicyInputSchema,
    outputSchema: GeneratePrivacyPolicyOutputSchema,
  },
  async input => {
    const {output} = await privacyPolicyPrompt(input);
    return output!;
  }
);
