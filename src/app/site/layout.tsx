import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import { Navigation } from '@/components/site/navigation';

type Props = {
  children: React.ReactNode;
};
const SiteLayout = ({ children }: Props) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default SiteLayout;
