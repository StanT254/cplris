'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, X } from 'lucide-react';
import { ChatDialog } from './chat-dialog';

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setOpen(!open)}
        aria-label="Toggle chatbot"
      >
        {open ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
      </Button>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
