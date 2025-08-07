'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { generateImage } from '@/app/actions';

const formSchema = z.object({
  prompt: z.string().min(1, { message: 'Please enter a prompt.' }),
});

export function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setImageUrl(null);
    try {
      const result = await generateImage(values.prompt);
      if (result.imageUrl) {
        setImageUrl(result.imageUrl);
      } else {
        // Handle error case, maybe show a toast
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Generate an Image</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., A majestic lion in a futuristic city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="animate-spin" /> : 'Generate'}
            </Button>
          </form>
        </Form>
        <div className="mt-8">
          {isLoading && (
            <div className="flex justify-center items-center aspect-square w-full rounded-md border border-dashed">
              <div className="text-center text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin" />
                <p className="mt-2">Generating your image...</p>
              </div>
            </div>
          )}
          {imageUrl && (
            <div className="aspect-square relative w-full rounded-md overflow-hidden border">
              <Image src={imageUrl} alt="Generated image" layout="fill" objectFit="contain" />
            </div>
          )}
          {!isLoading && !imageUrl && (
            <div className="flex justify-center items-center aspect-square w-full rounded-md border border-dashed">
              <div className="text-center text-muted-foreground">
                <ImageIcon className="h-12 w-12" />
                <p className="mt-2">Your generated image will appear here.</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
