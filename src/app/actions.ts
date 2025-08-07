'use server';

import { productInquiryChatbot } from "@/ai/flows/product-inquiry-chatbot";
import { generateImageFlow } from '@/ai/flows/generate-image-flow';
import { updateImageSource as updateImageSourceFlow, UpdateImageSourceInput } from '@/ai/flows/update-image-source-flow';

export async function askChatbot(inquiry: string) {
  if (!inquiry) {
    return { error: "Please enter a question." };
  }
  try {
    const response = await productInquiryChatbot({ productInquiry: inquiry });
    return { answer: response.answer };
  } catch (e) {
    console.error(e);
    return { error: "Sorry, I couldn't process your request. Please try again." };
  }
}

export async function generateImage(prompt: string) {
  if (!prompt) {
    return { error: 'Please enter a prompt.' };
  }
  try {
    const response = await generateImageFlow(prompt);
    return { imageUrl: response };
  } catch (e) {
    console.error(e);
    return { error: "Sorry, I couldn't generate the image. Please try again." };
  }
}

export async function updateImageSource(input: UpdateImageSourceInput) {
    try {
        await updateImageSourceFlow(input);
        return { success: true };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: `Failed to update image source: ${errorMessage}` };
    }
}
