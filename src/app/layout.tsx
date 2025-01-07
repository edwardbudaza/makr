import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/providers/theme-provider';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Makr',
<<<<<<< HEAD
  description: 'All in one Agency Solution - Manage your business in one place',
=======
  description: 'All in one Agency Solution',
>>>>>>> 202334358bd108c540327803271185364a548104
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
