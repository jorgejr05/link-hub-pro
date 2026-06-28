"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-full z-50 md:hidden bg-surface-container border border-white/10 shadow-[0_-10px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="flex justify-around items-center p-2">
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 p-3 transition-colors ${pathname === "/" ? "text-primary-container" : "text-on-surface-variant hover:text-primary"}`}
        >
          <span className="material-symbols-outlined" data-icon="home">home</span>
        </Link>
        <Link
          href="/blog"
          className={`flex flex-col items-center gap-1 p-3 transition-colors ${pathname.startsWith("/blog") ? "text-primary-container" : "text-on-surface-variant hover:text-primary"}`}
        >
          <span className="material-symbols-outlined" data-icon="article">article</span>
        </Link>
        <Link
          href="/admin"
          className={`flex flex-col items-center gap-1 p-3 transition-colors ${pathname.startsWith("/admin") ? "text-primary-container" : "text-on-surface-variant hover:text-primary"}`}
        >
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
        </Link>
      </div>
    </nav>
  );
}
