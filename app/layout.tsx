import { PostHogProvider } from '@/providers/posthog-provider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fredrik Pettersson',
  description: 'Resume of Fredrik Pettersson',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className="bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 fill-zinc-800 dark:fill-zinc-300 border-zinc-300 dark:border-zinc-800 px-1">
      <main>
        <PostHogProvider>{children}</PostHogProvider>
      </main>
    </body>
  </html>
);

export default RootLayout;
