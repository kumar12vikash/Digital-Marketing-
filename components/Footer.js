import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-ink text-paper/70">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-paper">
          Forma<span className="text-amber">.</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Forma Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/weboin/reel/DZpZNuZT-gi/" aria-label="Instagram" className="hover:text-amber transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/company/weboin/?originalSubdomain=in" aria-label="LinkedIn" className="hover:text-amber transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://www.facebook.com/weboin/" aria-label="Facebook" className="hover:text-amber transition-colors">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
