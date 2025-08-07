'use server';
/**
 * @fileOverview A flow to update an image source in the inventory file.
 *
 * - updateImageSource - The function that performs the update.
 * - UpdateImageSourceInput - The input type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { promises as fs } from 'fs';
import path from 'path';

const UpdateImageSourceInputSchema = z.object({
  targetId: z.string().describe('The id of the image to replace in the inventory.'),
  newImageUrl: z.string().url().describe('The new URL for the image source.'),
});
export type UpdateImageSourceInput = z.infer<typeof UpdateImageSourceInputSchema>;

const UpdateImageSourceOutputSchema = z.object({
  filePath: z.string().describe('The path to the file that was modified.'),
  status: z.string().describe('The status of the operation.'),
});

const INVENTORY_FILE_PATH = 'src/data/inventory.ts';

async function getFileContent(filePath: string): Promise<string> {
    const fullPath = path.join(process.cwd(), filePath);
    try {
        return await fs.readFile(fullPath, 'utf-8');
    } catch (e) {
        throw new Error(`Could not read file at ${filePath}.`);
    }
}

async function setFileContent(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(process.cwd(), filePath);
    await fs.writeFile(fullPath, content, 'utf-8');
}

const updateImageSourceFlow = ai.defineFlow(
  {
    name: 'updateImageSourceFlow',
    inputSchema: UpdateImageSourceInputSchema,
    outputSchema: UpdateImageSourceOutputSchema,
  },
  async ({ targetId, newImageUrl }) => {
    const inventoryPath = INVENTORY_FILE_PATH;
    const currentContent = await getFileContent(inventoryPath);
    
    // This regex looks for an object property (image or avatar or src) 
    // associated with a specific id, and replaces its value.
    // It's designed to work for products, testimonials, and the logo.
    const regex = new RegExp(`(id: ['"]${targetId}['"],\\s*.*?\\s*(?:image|avatar|src):\\s*['"])([^'"]+)(['"])`, 's');
    
    if (!regex.test(currentContent)) {
        throw new Error(`Could not find an entry with id="${targetId}" in ${inventoryPath}.`);
    }

    const updatedContent = currentContent.replace(regex, `$1${newImageUrl}$3`);
    
    await setFileContent(inventoryPath, updatedContent);

    return {
      filePath: inventoryPath,
      status: 'success',
    };
  }
);

export async function updateImageSource(input: UpdateImageSourceInput) {
    return await updateImageSourceFlow(input);
}
