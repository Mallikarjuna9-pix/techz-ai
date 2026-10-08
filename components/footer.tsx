import Link from 'next/link';
import { Brain } from 'lucide-react';

const footerLinks = [
  { name: 'VTU 2025', href: '/vtu' },
  { name: 'Skills', href: '/skills' },
  { name: 'Coding', href: '/coding' },
  { name: 'Projects', href: '/projects' },
  { name: 'Placement', href: '/placement' },
  { name: 'Mock Interview', href: '/mock-interview' },
  { name: 'AI Assistant', href: '/ai' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-black text-white">
              <div className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 px-2.5 py-1.5 text-sm">⚡</div>
              <span>TECHZ AI</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">Learn • Practice • Prepare • Get Hired</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Learning</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/vtu" className="transition hover:text-white">VTU 2025</Link></li>
              <li><Link href="/youtube" className="transition hover:text-white">YouTube Classes</Link></li>
              <li><Link href="/skills" className="transition hover:text-white">Skills Hub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Practice</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/coding" className="transition hover:text-white">Coding Problems</Link></li>
              <li><Link href="/projects" className="transition hover:text-white">Projects</Link></li>
              <li><Link href="/mock-interview" className="transition hover:text-white">Mock Interviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Placement</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/placement" className="transition hover:text-white">Placement Hub</Link></li>
              <li><Link href="/ai" className="transition hover:text-white">AI Assistant</Link></li>
              <li><a href="#" className="transition hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 TECHZ AI. Built for engineering excellence. MGS.AJIET</p>
        </div>
      </div>
    </footer>
  );
}
