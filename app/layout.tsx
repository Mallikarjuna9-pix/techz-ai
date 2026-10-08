import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { AIAssistantButton } from '@/components/ai-assistant-button';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'TECHZ AI',
  description: 'Learn • Practice • Prepare • Get Hired',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-violet-500/30 selection:text-white">
        <ThemeProvider>
          <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_20%)]">
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6 lg:px-8">{children}</main>
            <AIAssistantButton />
            <MobileNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
