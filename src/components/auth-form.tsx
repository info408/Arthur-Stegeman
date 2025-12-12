'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { initiateEmailSignUp, initiateEmailSignIn } from '@/firebase/non-blocking-login';
import { Loader, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthFormProps = {
  isSignUp?: boolean;
  isAdmin?: boolean;
};

export function AuthForm({ isSignUp = false, isAdmin = false }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (isSignUp) {
        const userCredential = await initiateEmailSignUp(auth, values.email, values.password);
        
        // This is a simplified user/role creation for demo purposes
        // In a real app, you'd have more robust user profile creation and role management
        if (userCredential && userCredential.user) {
          const user = userCredential.user;
          // Create user document
          await setDocumentNonBlocking(doc(firestore, "users", user.uid), {
            id: user.uid,
            email: user.email,
            role: isAdmin ? 'Admin' : 'Freelancer',
            firstName: '',
            lastName: '',
           });

          // If it's an admin signing up, add them to the admin roles collection
          if (isAdmin) {
             await setDocumentNonBlocking(doc(firestore, "roles_admin", user.uid), {
                userId: user.uid
             });
          }
        }
        
        toast({ title: 'Account created!', description: "You've been signed in." });
        router.push(isAdmin ? '/admin' : '/freelancer/demo-contract-123');

      } else {
        await initiateEmailSignIn(auth, values.email, values.password);
        toast({ title: 'Signed in successfully!' });
        router.push(isAdmin ? '/admin' : '/freelancer/demo-contract-123');
      }
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const title = isSignUp ? (isAdmin ? 'Admin Sign Up' : 'Create an Account') : (isAdmin ? 'Admin Login' : 'Freelancer Login');
  const description = isSignUp ? 'Enter your email and password to create an account.' : 'Enter your credentials to access your portal.';
  const buttonText = isSignUp ? 'Sign Up' : 'Login';
  const footerLink = isSignUp ? '/login' : '/signup';
  const footerText = isSignUp ? 'Already have an account?' : "Don't have an account?";
  const footerLinkText = isSignUp ? 'Login' : 'Sign Up';

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader className="animate-spin" /> : <LogIn className="mr-2"/>}
                {buttonText}
              </Button>
               {!isAdmin && (
                <p className="text-sm text-muted-foreground">
                    {footerText}{' '}
                    <Button variant="link" asChild className="p-0">
                        <Link href={footerLink}>{footerLinkText}</Link>
                    </Button>
                </p>
               )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
