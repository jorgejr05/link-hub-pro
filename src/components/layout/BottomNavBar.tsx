import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function BottomNavBar() {
  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 w-[90%] rounded-full z-50 md:hidden bg-surface-container/90 backdrop-blur-2xl border border-white/10 shadow-[0_-10px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="flex justify-around items-center p-2">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary w-16 h-14 [&.active]:bg-primary-container/10 [&.active]:text-primary-container [&.active]:rounded-full transition-colors"
        >
          <span className="material-symbols-outlined mb-1" data-icon="home">
            home
          </span>
          <span className="font-label-caps text-label-caps text-[10px]">
            Início
          </span>
        </Link>
        <Link
          to="/blog"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary w-16 h-14 [&.active]:bg-primary-container/10 [&.active]:text-primary-container [&.active]:rounded-full transition-colors"
        >
          <span className="material-symbols-outlined mb-1" data-icon="article">
            article
          </span>
          <span className="font-label-caps text-label-caps text-[10px]">
            Blog
          </span>
        </Link>
        <Link
          to="/architecture"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary w-16 h-14 [&.active]:bg-primary-container/10 [&.active]:text-primary-container [&.active]:rounded-full transition-colors"
        >
          <span className="material-symbols-outlined mb-1" data-icon="architecture">
            architecture
          </span>
          <span className="font-label-caps text-label-caps text-[10px]">
            Arquit.
          </span>
        </Link>

      </div>
    </motion.nav>
  );
}
