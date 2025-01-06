import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ModeToggle } from '@/components/global/mode-toggle';

type Props = {
  user?: null | User;
};

export const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image src="/assets/makr.svg" alt="Makr logo" width={40} height={40} />
        <span className="text-xl font-bold">Makr.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/agency"
              className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
            >
              Login
            </Link>
          </SignedOut>
        </ClerkLoaded>
        <ModeToggle />
      </aside>
    </div>
  );
};
