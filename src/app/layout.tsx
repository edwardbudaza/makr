import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/providers/theme-provider';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Makr',
  description: 'All in one Agency Solution - Manage your business in one place',
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
