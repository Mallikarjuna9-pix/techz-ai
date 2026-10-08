import Link from 'next/link';

const quickCards = [
  { name: 'VTU 2025', href: '/vtu' },
  { name: 'YouTube Classes', href: '/youtube' },
  { name: 'Skills', href: '/skills' },
  { name: 'Coding Practice', href: '/coding' },
  { name: 'Projects', href: '/projects' },
  { name: 'Placements', href: '/placement' },
  { name: 'Mock Interview', href: '/mock-interview' },
  { name: 'Techz AI', href: '/ai' },
];

const stats = [
  { label: 'VTU subjects', value: '120+' },
  { label: 'Video resources', value: '350+' },
  { label: 'Projects', value: '80+' },
  { label: 'Interview drills', value: '24/7' },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-violet-500/25 bg-slate-900/70 p-6 shadow-glow backdrop-blur-xl sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.20),_transparent_25%)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Learn • Practice • Prepare • Get Hired
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Engineering Journey,
              <span className="block bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
              Learn VTU 2025 Scheme subjects, build real-world skills, practice coding, prepare for placements and get interview-ready with AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/vtu" className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/40 transition hover:scale-[1.02]">
                Explore VTU 2025
              </Link>
              <Link href="/mock-interview" className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200">
                Start AI Interview
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute inset-6 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative aspect-square w-full rounded-[30px] border border-violet-400/30 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex h-full flex-col justify-between rounded-[24px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/40 p-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">AI mentor</div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                </div>
                <div className="space-y-4 py-6">
                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3 text-sm text-cyan-100">
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">Branch</div>
                    <div className="mt-2 text-xl font-bold">CSE</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Semester</div>
                      <div className="mt-2 text-lg font-semibold">5</div>
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</div>
                      <div className="mt-2 text-lg font-semibold">AI</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-3">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-violet-200">
                      <span>Study progress</span>
                      <span>65%</span>
                    </div>
                    <div className="mt-3 h-2.5 w-full rounded-full bg-slate-800">
                      <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-3 text-sm text-slate-300">
                  <div className="font-semibold text-white">Next up</div>
                  <div className="mt-2">Data Structures & Algorithms • 25 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-lg">
        <label className="block text-sm font-medium text-slate-300">Global search</label>
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3">
          <span className="text-slate-400">⌕</span>
          <input
            className="w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
            placeholder="Search subjects, topics, skills, projects, coding problems..."
          />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickCards.map((card) => (
          <Link
            key={card.name}
            href={card.href}
            className="group rounded-[26px] border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-slate-900"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-lg text-violet-200">
              ✦
            </div>
            <div className="text-xl font-semibold text-white">{card.name}</div>
            <div className="mt-3 text-sm text-slate-400">Open learning flow</div>
          </Link>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-5">
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
