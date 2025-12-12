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
import { initiateEmailSignUp, initiateEmailSignIn, initiateGoogleSignIn } from '@/firebase/non-blocking-login';
import { Loader, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Separator } from './ui/separator';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthFormProps = {
  isSignUp?: boolean;
  isAdmin?: boolean;
  isAdminOnly?: boolean;
};

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

export function AuthForm({ isSignUp = false, isAdmin = false, isAdminOnly = false }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
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

  const handleAuthSuccess = (userCredential: any) => {
    const user = userCredential.user;
    if (user) {
        if (isAdmin || isAdminOnly) {
            if (user.email !== 'info@kingkongmovers.nl') {
                toast({
                    variant: 'destructive',
                    title: 'Access Denied',
                    description: 'This email is not authorized for admin access.',
                });
                auth.signOut();
                return;
            }
        }

        // This is a simplified user/role creation for demo purposes
        // In a real app, you'd have more robust user profile creation and role management
        const userDocRef = doc(firestore, "users", user.uid);
        
        // Use setDoc with merge:true to create or update user data
        setDoc(userDocRef, {
            id: user.uid,
            email: user.email,
            role: (isAdmin || isAdminOnly) ? 'Admin' : 'Freelancer',
            firstName: user.displayName?.split(' ')[0] || '',
            lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
        }, { merge: true }).then(() => {
            if (isAdmin || isAdminOnly) {
                // If it's an admin, add them to the admin roles collection
                const adminRoleRef = doc(firestore, "roles_admin", user.uid);
                setDoc(adminRoleRef, { userId: user.uid });
            }
        }).catch(err => console.error("Error setting user document:", err));

        toast({ title: isSignUp ? 'Account created!' : 'Signed in successfully!', description: "You've been logged in." });
        router.push((isAdmin || isAdminOnly) ? '/admin' : '/freelancer/demo-contract-123');
    }
};

  const handleAuthError = (error: any) => {
    console.error(error);
    toast({
      variant: 'destructive',
      title: 'Authentication Error',
      description: error.message || 'An unexpected error occurred.',
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const authFn = isSignUp ? initiateEmailSignUp : initiateEmailSignIn;
      const userCredential = await authFn(auth, values.email, values.password);
      handleAuthSuccess(userCredential);
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onGoogleSignIn() {
    setIsGoogleLoading(true);
    try {
        const userCredential = await initiateGoogleSignIn(auth);
        handleAuthSuccess(userCredential);
    } catch(error) {
        handleAuthError(error);
    } finally {
        setIsGoogleLoading(false);
    }
  }

  const effectiveAdmin = isAdmin || isAdminOnly;
  const title = isAdminOnly ? 'Admin Login' : (isSignUp ? 'Create an Account' : 'Freelancer Login');
  const description = isAdminOnly ? 'Log in with your administrator Google account.' : (isSignUp ? 'Enter your email and password to create an account.' : 'Enter your credentials to access your portal.');
  const buttonText = isSignUp ? 'Sign Up' : 'Login';
  const footerLink = isSignUp ? '/login' : '/signup';
  const footerText = isSignUp ? 'Already have an account?' : "Don't have an account?";
  const footerLinkText = isSignUp ? 'Login' : 'Sign Up';

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              
                {!isAdminOnly && (
                  <>
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
                  
                    <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
                      {isLoading ? <Loader className="animate-spin" /> : <LogIn className="mr-2"/>}
                      {buttonText}
                    </Button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                  </>
                )}

              <Button variant="outline" type="button" className="w-full" onClick={onGoogleSignIn} disabled={isLoading || isGoogleLoading}>
                {isGoogleLoading ? <Loader className="animate-spin" /> : <GoogleIcon />}
                Sign in with Google
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
               {!effectiveAdmin && (
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
