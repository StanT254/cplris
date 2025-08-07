'use server';

import { productInquiryChatbot } from "@/ai/flows/product-inquiry-chatbot";

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
