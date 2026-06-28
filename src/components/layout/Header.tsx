"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 w-full z-50 bg-surface border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
    >
      <div className="flex items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto relative">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:neon-border transition-colors">
            <img
              alt="Jorge Jr. Professional Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQlZKtJasO00jioHp00qUcdoTPsTGOg1WGvlIgaxUVMuukzvDJNch1_tRH3Ec3pV59h7zBb-XfptGEuTv4YaI9HrGtlKpDGGTTAtElrROr1eGiC71rHIHuz6Et3_R0anK2z1pIdqaHatkP6zcDdpV9bR5TAAxyXDq2H3GSSjf2tI0Nid4ZXHtmG9euSbN5VI1zRN5CcRlZlqxo9HrhmCsD1MdejJLR7lJh9HblyqlB1fzbXs2Vokv_jt8J_cYhoHme050PyA8TQD0"
            />
          </div>
          <span className="font-display-lg text-headline-md font-bold tracking-tighter text-primary">
            Jorge Jr.
          </span>
        </Link>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-label-md text-label-md">
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

          <Link
            href="/curriculo"
            className={`transition-colors duration-300 ${pathname === "/curriculo" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
          >
            Currículo
          </Link>
        </nav>
      </div>
    </header>
  );
}
