'use server';
/**
 * @fileOverview A flow to update an image source in a component file.
 *
 * - updateImageSource - The function that performs the update.
 * - UpdateImageSourceInput - The input type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { promises as fs } from 'fs';
import path from 'path';

export const UpdateImageSourceInputSchema = z.object({
  targetId: z.string().describe('The data-ai-id of the image to replace.'),
  newImageUrl: z.string().url().describe('The new URL for the image source.'),
});
export type UpdateImageSourceInput = z.infer<typeof UpdateImageSourceInputSchema>;

const UpdateImageSourceOutputSchema = z.object({
  filePath: z.string().describe('The path to the file that was modified.'),
  status: z.string().describe('The status of the operation.'),
});

// This is a map of target IDs to the files they are located in.
// In a real application, this might come from a database or a more dynamic source.
const targetFileMap: Record<string, string> = {
    'logo': 'src/components/logo.tsx',
    'product-1': 'src/components/sections/products.tsx',
    'product-2': 'src/components/sections/products.tsx',
    'product-3': 'src/components/sections/products.tsx',
};

async function getFileContent(filePath: string): Promise<string> {
    const fullPath = path.join(process.cwd(), filePath);
    return await fs.readFile(fullPath, 'utf-8');
}

async function setFileContent(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(process.cwd(), filePath);
    await fs.writeFile(fullPath, content, 'utf-8');
}


const updateImageSourceTool = ai.defineTool(
  {
    name: 'updateImageSourceInFile',
    description: 'Updates the src attribute of an Image component with a specific data-ai-id in a given file content.',
    inputSchema: z.object({
        fileContent: z.string(),
        targetId: z.string(),
        newImageUrl: z.string().url(),
    }),
    outputSchema: z.string().describe('The updated file content.'),
  },
  async ({ fileContent, targetId, newImageUrl }) => {
    // Regex to find the Image component with the matching data-ai-id and capture its src attribute.
    // This is a simplified regex and might need to be more robust for complex cases.
    const regex = new RegExp(`(<Image[^>]*data-ai-id="${targetId}"[^>]*src=)("[^"]*")([^>]*>)`, 's');
    
    if (!regex.test(fileContent)) {
        throw new Error(`Could not find an Image component with data-ai-id="${targetId}".`);
    }

    const updatedContent = fileContent.replace(regex, `$1"${newImageUrl}"$3`);
    return updatedContent;
  }
);


const updateImageSourceFlow = ai.defineFlow(
  {
    name: 'updateImageSourceFlow',
    inputSchema: UpdateImageSourceInputSchema,
    outputSchema: UpdateImageSourceOutputSchema,
  },
  async ({ targetId, newImageUrl }) => {
    const filePath = targetFileMap[targetId];
    if (!filePath) {
      throw new Error(`Invalid target ID: ${targetId}`);
    }

    const currentContent = await getFileContent(filePath);

    const updatedContent = await updateImageSourceTool({
        fileContent: currentContent,
        targetId,
        newImageUrl,
    });
    
    await setFileContent(filePath, updatedContent);

    return {
      filePath,
      status: 'success',
    };
  }
);

export async function updateImageSource(input: UpdateImageSourceInput) {
    return await updateImageSourceFlow(input);
}
