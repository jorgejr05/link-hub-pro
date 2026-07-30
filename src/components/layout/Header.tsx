"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_0_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-6 md:px-12 h-20 max-w-[1440px] mx-auto relative">
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
            <img
              alt="Jorge Jr. Professional Portrait"
              className="w-full h-full object-cover"
              src="/jorge-junior.jpg"
            />
          </div>
          <span className="font-display-lg text-lg md:text-xl font-bold tracking-tight text-primary">
            Jorge Jr.
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-label-md text-sm uppercase tracking-widest">
          <Link
            href="/"
            className={`transition-colors duration-300 ${pathname === "/" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
          >
            Início
          </Link>
          <Link
            href="/blog"
            className={`transition-colors duration-300 ${pathname.startsWith("/blog") ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button (Innovative staggered lines) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          aria-label="Toggle Menu"
        >
          <div className={`h-[2px] bg-white transition-all duration-300 ease-out ${isMenuOpen ? "w-6 translate-y-[7px] rotate-45" : "w-6 group-hover:w-5"}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-300 ease-out ${isMenuOpen ? "w-0 opacity-0" : "w-4 self-end group-hover:w-6"}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-300 ease-out ${isMenuOpen ? "w-6 -translate-y-[7px] -rotate-45" : "w-6 group-hover:w-4 self-start"}`}></div>
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-0 left-0 w-full bg-[#0a0a0b] border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col md:hidden ${isMenuOpen ? "max-h-[400px] py-24 opacity-100 shadow-2xl" : "max-h-0 py-0 opacity-0 pointer-events-none"}`}>
          <nav className="flex flex-col items-center gap-6 font-label-md text-sm uppercase tracking-widest">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors duration-300 ${pathname === "/" ? "text-primary" : "text-on-surface-variant"}`}
            >
              Início
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors duration-300 ${pathname.startsWith("/blog") ? "text-primary" : "text-on-surface-variant"}`}
            >
              Blog
            </Link>
            
            <div className="w-12 h-[1px] bg-white/10 my-4"></div>
            
            {/* Social Icons Mobile */}
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/ojorge.jr" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#30D158]/10 border border-[#30D158]/30 flex items-center justify-center text-[#30D158] hover:bg-[#30D158]/20 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
