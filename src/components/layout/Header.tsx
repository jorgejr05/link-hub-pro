import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 ease-in-out"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-4 group">
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
        <nav className="hidden md:flex items-center gap-8 font-label-md text-label-md">
          <Link
            to="/"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 [&.active]:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:pb-1"
          >
            Início
          </Link>
          <Link
            to="/blog"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 [&.active]:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:pb-1"
          >
            Blog
          </Link>
          <Link
            to="/architecture"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 [&.active]:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:pb-1"
          >
            Arquitetura
          </Link>
          <Link
            to="/case-study/plugeefy"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 [&.active]:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:pb-1"
          >
            Case Study
          </Link>
          <Link
            to="/curriculo"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 [&.active]:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:pb-1"
          >
            Currículo
          </Link>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="https://www.tiktok.com/@jorgejr.ai"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </nav>
        <button className="hidden md:inline-flex bg-primary-container text-on-primary-container font-label-md px-6 py-2 rounded-full hover:neon-glow transition-all duration-300 uppercase tracking-widest">
          Acesso VIP <span className="material-symbols-outlined align-middle ml-1 text-sm">arrow_outward</span>
        </button>
      </div>
    </motion.header>
  );
}
