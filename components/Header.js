'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-paper/80 dark:bg-ink/80 border-b border-ink/10 dark:border-paper/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Forma<span className="text-amber">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-amber transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-forest text-paper text-sm font-medium hover:bg-amber hover:text-ink transition-colors"
          >
            Start a project
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full bg-forest text-paper text-sm font-medium"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
