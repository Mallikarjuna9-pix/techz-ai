'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function AIAssistantButton() {
  return (
    <Link
      href="/ai"
      className="fixed bottom-8 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 shadow-2xl shadow-violet-500/40 transition hover:scale-110 hover:shadow-violet-500/60 sm:bottom-10 sm:right-10"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Link>
  );
}
