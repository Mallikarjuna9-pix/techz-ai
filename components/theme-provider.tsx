import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('techz-theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    }
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
