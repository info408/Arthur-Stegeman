'use client';
import Link from "next/link";
import Logo from "./logo";
import { useAuth, useUser } from "@/firebase";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function MainHeader() {
  const auth = useAuth();
  const { user } = useUser();

  const getInitials = (email: string | null | undefined) => {
    if (!email) return '...';
    return email.substring(0, 2).toUpperCase();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm no-print">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-10" />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {user && (
            <>
               <Avatar>
                <AvatarFallback>{getInitials(user.email)}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={() => auth.signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
