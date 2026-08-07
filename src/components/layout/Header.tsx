"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
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
            <span className="font-display-lg text-base md:text-lg font-bold tracking-tight text-primary">
              Jorge Jr.
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-label-md text-sm uppercase tracking-widest">
            <Link
              href="/"
              className={`transition-colors duration-300 ${pathname === "/" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
            >
              Perfil
            </Link>
            <Link
              href="/projetos"
              className={`transition-colors duration-300 ${pathname.startsWith("/projetos") ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
            >
              Projetos
            </Link>

            <Link
              href="/blog"
              className={`transition-colors duration-300 ${pathname.startsWith("/blog") ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
            >
              Novidades
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
          <div className={`absolute top-0 left-0 w-full bg-[#0a0a0b] border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col md:hidden z-40 ${isMenuOpen ? "max-h-[400px] py-24 opacity-100 shadow-2xl" : "max-h-0 py-0 opacity-0 pointer-events-none"}`}>
            <nav className="flex flex-col items-center gap-6 font-label-md text-sm uppercase tracking-widest">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-300 ${pathname === "/" ? "text-primary" : "text-on-surface-variant"}`}
              >
                Perfil
              </Link>
              <Link
                href="/projetos"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-300 ${pathname.startsWith("/projetos") ? "text-primary" : "text-on-surface-variant"}`}
              >
                Projetos
              </Link>

              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-300 ${pathname.startsWith("/blog") ? "text-primary" : "text-on-surface-variant"}`}
              >
                Novidades
              </Link>
              
              <div className="w-12 h-[1px] bg-white/10 my-4"></div>
              
              {/* Social Icons Mobile */}
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/ojorge.jr" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#30D158]/10 border border-[#30D158]/30 flex items-center justify-center text-[#30D158] hover:bg-[#30D158]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
