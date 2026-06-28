import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function BottomNavBar() {
  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 w-[90%] rounded-full z-50 md:hidden bg-surface-container border border-white/10 shadow-[0_-10px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="flex justify-around items-center p-2">
        <Link
          to="/"
          className="flex flex-col items-center gap-1 p-3 text-on-surface-variant hover:text-primary transition-colors [&.active]:text-primary-container"
        >
          <span className="material-symbols-outlined" data-icon="home">home</span>
        </Link>
        <Link
          to="/blog"
          className="flex flex-col items-center gap-1 p-3 text-on-surface-variant hover:text-primary transition-colors [&.active]:text-primary-container"
        >
          <span className="material-symbols-outlined" data-icon="article">article</span>
        </Link>
        <Link
          to="/admin"
          className="flex flex-col items-center gap-1 p-3 text-on-surface-variant hover:text-primary transition-colors [&.active]:text-primary-container"
        >
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
        </Link>
      </div>
    </motion.nav>
  );
}
