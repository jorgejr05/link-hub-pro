import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-3xl border-b border-white/10 shadow-[0_0_40px_rgba(115,46,228,0.1)] transition-all duration-500 ease-in-out"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
            <img
              alt="Jorge Jr. Professional Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQlZKtJasO00jioHp00qUcdoTPsTGOg1WGvlIgaxUVMuukzvDJNch1_tRH3Ec3pV59h7zBb-XfptGEuTv4YaI9HrGtlKpDGGTTAtElrROr1eGiC71rHIHuz6Et3_R0anK2z1pIdqaHatkP6zcDdpV9bR5TAAxyXDq2H3GSSjf2tI0Nid4ZXHtmG9euSbN5VI1zRN5CcRlZlqxo9HrhmCsD1MdejJLR7lJh9HblyqlB1fzbXs2Vokv_jt8J_cYhoHme050PyA8TQD0"
            />
          </div>
          <span className="font-display-lg text-headline-md font-bold tracking-tighter text-on-surface">
            Jorge Jr.
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300 [&.active]:text-primary [&.active]:font-semibold"
          >
            Início
          </Link>
          <Link
            to="/blog"
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300 [&.active]:text-primary [&.active]:font-semibold"
          >
            Blog
          </Link>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300"
            href="#"
          >
            Projetos
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300"
            href="https://www.tiktok.com/@jorgejr.ai"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </nav>
        <button className="glass-panel px-6 py-2 rounded-full font-label-caps text-label-caps text-primary hover:text-secondary transition-all duration-300 border border-primary/30 hover:border-secondary/50">
          Acesso VIP
        </button>
      </div>
    </motion.header>
  );
}
