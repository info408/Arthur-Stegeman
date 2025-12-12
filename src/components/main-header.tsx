import Link from "next/link";
import Logo from "./logo";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm no-print">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-10" />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Future navigation or user profile could go here */}
        </div>
      </div>
    </header>
  );
}
