
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { generateImage, updateImageSource } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const imageTargets = [
    { id: 'logo', label: 'Website Logo', prompt: 'A modern, minimalist logo of a north star, symbolizing guidance. Clean lines, deep blue and silver colors.' },
    { id: 'product-1', label: 'Product: Startup Branding Kit', prompt: 'A professional branding kit for a startup, showcasing a logo, color palette, and typography on various mockups like business cards and social media posts. Modern and clean design.' },
    { id: 'product-2', label: 'Product: Notion Business OS', prompt: 'An elegant and organized Notion dashboard for a business, showing task management, client lists, and project timelines. Clean, functional, and visually appealing.' },
    { id: 'product-3', label: 'Product: AI Voiceover App', prompt: 'A sleek smartphone screen displaying an AI voiceover app interface. The design should be modern and intuitive, with audio waveforms and text-to-speech controls visible.' },
] as const;

type ImageTargetId = typeof imageTargets[number]['id'];

const formSchema = z.object({
  target: z.custom<ImageTargetId>((val) => imageTargets.map(t => t.id).includes(val as ImageTargetId), {
    message: 'Please select a target image to replace.',
  }),
});

export function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  
  const selectedTarget = form.watch('target');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setImageUrl(null);

    const target = imageTargets.find(t => t.id === values.target);
    if (!target) {
        toast({
            variant: "destructive",
            title: "Invalid Target",
            description: "Please select a valid target to generate an image for.",
        });
        setIsLoading(false);
        return;
    }

    try {
      const result = await generateImage(target.prompt);
      if (result.imageUrl) {
        setImageUrl(result.imageUrl);
      } else {
        toast({
            variant: "destructive",
            title: "Image Generation Failed",
            description: result.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
       toast({
            variant: "destructive",
            title: "Error",
            description: "An unexpected error occurred during image generation.",
        });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAuthorize() {
    if (!imageUrl || !selectedTarget) return;

    setIsAuthorizing(true);
    try {
        const result = await updateImageSource({targetId: selectedTarget, newImageUrl: imageUrl});
        if (result.success) {
            toast({
                title: "Image Updated!",
                description: "The new image has been applied successfully. The page will now reload.",
            });
            // Give the toast a moment to show before reloading
            setTimeout(() => window.location.reload(), 2000);
        } else {
             toast({
                variant: "destructive",
                title: "Update Failed",
                description: result.error || "Could not update the image source.",
            });
        }
    } catch (error) {
         toast({
            variant: "destructive",
            title: "Error",
            description: "An unexpected error occurred while updating the image.",
        });
        console.error(error);
    } finally {
        setIsAuthorizing(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Generate & Replace Website Images</CardTitle>
        <CardDescription>Select a target image, and the AI will generate a new version based on a predefined prompt. Authorize it to update the live site.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
               <FormField
                  control={form.control}
                  name="target"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Image</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an image to replace" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {imageTargets.map(target => (
                            <SelectItem key={target.id} value={target.id}>{target.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
             <div className="flex gap-2 justify-end">
                <Button 
                    type="submit" 
                    disabled={isLoading || isAuthorizing || !form.formState.isValid}
                    variant="secondary"
                >
                {isLoading ? <><Loader2 className="animate-spin" /> Generating...</> : 'Generate Image'}
                </Button>
            </div>
          </form>
        </Form>
        <div className="mt-8">
            <div className="flex justify-center items-center aspect-square w-full rounded-md border border-dashed bg-muted/50">
                {isLoading ? (
                    <div className="text-center text-muted-foreground">
                        <Loader2 className="h-12 w-12 animate-spin mx-auto" />
                        <p className="mt-2 font-semibold">Generating your image...</p>
                        <p className="text-sm">This can take a few moments.</p>
                    </div>
                ) : imageUrl ? (
                     <div className="aspect-square relative w-full rounded-md overflow-hidden">
                        <Image src={imageUrl} alt="Generated image" fill={true} objectFit="contain" />
                    </div>
                ) : (
                    <div className="text-center text-muted-foreground p-4">
                        <ImageIcon className="h-12 w-12 mx-auto" />
                        <p className="mt-2 font-semibold">Your generated image will appear here</p>
                         <p className="text-sm">Select a target to start.</p>
                    </div>
                )}
            </div>
        </div>
         <div className="mt-4 flex justify-end gap-2">
            <Button 
                onClick={form.handleSubmit(onSubmit)} 
                variant="outline"
                disabled={!form.formState.isValid || isLoading || isAuthorizing || !imageUrl}
            >
                Regenerate
            </Button>
            <Button 
                onClick={handleAuthorize} 
                disabled={!imageUrl || isLoading || isAuthorizing}
            >
                {isAuthorizing ? <><Loader2 className="animate-spin" /> Authorizing...</> : 'Authorize & Use Image'}
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
