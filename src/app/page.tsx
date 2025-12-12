import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/logo';
import { ArrowRight, UserCheck, ShieldCheck, LogIn } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <div className="mb-12">
          <Logo className="h-20 w-auto mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
          MoveLegally
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Your Partner in Legally Sound Transport Agreements. Draft, analyze, and sign contracts with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <Button asChild>
                <Link href="/admin-login">Admin Login <LogIn className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="secondary">
                <Link href="/login">Freelancer Login <LogIn className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-left">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">For Administrators</CardTitle>
                  <CardDescription>Manage your freelance workforce.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>Use our AI-powered tool to draft legally compliant contracts under Dutch law and streamline your onboarding process.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow text-left">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">For Freelancers</CardTitle>
                  <CardDescription>Secure your agreements.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>Access your dedicated portal to review contracts, manage compliance documents, and execute agreements digitally.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="w-full text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Gebr. Stegeman. All rights reserved.</p>
      </footer>
    </div>
  );
}
