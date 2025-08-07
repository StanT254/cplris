'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a high-quality, photorealistic image based on the following description. Do not include any text in the image. Description: ${prompt}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
        throw new Error("Image generation failed");
    }

    return media.url;
  }
);
