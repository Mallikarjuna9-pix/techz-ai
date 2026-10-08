'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'VTU 2025', href: '/vtu' },
  { name: 'Skills', href: '/skills' },
  { name: 'Coding', href: '/coding' },
  { name: 'Projects', href: '/projects' },
  { name: 'Placement', href: '/placement' },
  { name: 'Mock Interview', href: '/mock-interview' },
  { name: 'AI Assistant', href: '/ai' },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-black text-white">
          <div className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 px-2.5 py-1.5 text-sm">⚡</div>
          <span className="text-lg">TECHZ AI</span>
        </Link>

        <div className="hidden gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="hidden rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 sm:flex">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            href="/profile"
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
          >
            Profile
          </Link>
          <button className="rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-400 transition hover:bg-slate-800 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
