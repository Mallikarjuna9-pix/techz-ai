'use client';

import Link from 'next/link';
import { Home, BookOpen, Zap, Brain, User } from 'lucide-react';

const mobileLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'VTU', href: '/vtu', icon: BookOpen },
  { name: 'Skills', href: '/skills', icon: Zap },
  { name: 'AI', href: '/ai', icon: Brain },
  { name: 'Profile', href: '/profile', icon: User },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl sm:hidden">
      <div className="flex items-center justify-around gap-1">
        {mobileLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-1 flex-col items-center gap-1 rounded-t-2xl px-3 py-3 text-xs font-medium text-slate-400 transition hover:bg-slate-900 hover:text-violet-300"
            >
              <Icon className="h-5 w-5" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
