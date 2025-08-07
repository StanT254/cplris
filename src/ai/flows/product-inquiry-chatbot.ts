'use server';

/**
 * @fileOverview An AI chatbot for answering user questions about products.
 *
 * - productInquiryChatbot - A function that handles the product inquiry process.
 * - ProductInquiryChatbotInput - The input type for the productInquiryChatbot function.
 * - ProductInquiryChatbotOutput - The return type for the productInquiryChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductInquiryChatbotInputSchema = z.object({
  productInquiry: z.string().describe('The user\u2019s question about the products offered on the website.'),
});
export type ProductInquiryChatbotInput = z.infer<typeof ProductInquiryChatbotInputSchema>;

const ProductInquiryChatbotOutputSchema = z.object({
  answer: z.string().describe('The chatbot\u2019s answer to the user\u2019s question.'),
});
export type ProductInquiryChatbotOutput = z.infer<typeof ProductInquiryChatbotOutputSchema>;

export async function productInquiryChatbot(input: ProductInquiryChatbotInput): Promise<ProductInquiryChatbotOutput> {
  return productInquiryChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productInquiryChatbotPrompt',
  input: {schema: ProductInquiryChatbotInputSchema},
  output: {schema: ProductInquiryChatbotOutputSchema},
  prompt: `You are an AI chatbot that answers questions about the products offered on the Centennial Polaris Limited website.

  The products are:

  1. Startup Branding Kit
  Type: Design Templates (Figma, Canva, PSD)
  Description:
A ready-made branding bundle for startups \u2014 includes logos, typography, social post templates, and color palettes.
Price: $19

  2. Notion Business OS
  Type: Productivity Template (Notion)
  Description:
A complete Notion dashboard for solopreneurs and small teams to manage clients, tasks, invoices, and content.
Price: $12

  3. AI Voiceover App
  Type: Android Mobile App (APK)
  Description:
An AI-powered app that converts text to natural-sounding voiceovers \u2014 perfect for YouTube, courses, and audiobooks.
Price: Free (with in-app upgrades)

  Answer the following question about the products:

  {{productInquiry}}`,
});

const productInquiryChatbotFlow = ai.defineFlow(
  {
    name: 'productInquiryChatbotFlow',
    inputSchema: ProductInquiryChatbotInputSchema,
    outputSchema: ProductInquiryChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
