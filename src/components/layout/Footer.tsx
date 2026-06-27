import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative mt-32 bg-surface-container-lowest border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 flex flex-col items-center gap-8">

        <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant text-center opacity-60">
          © 2026 Jorge Jr. - Todos os Direitos Reservados.
        </p>
      </div>
    </motion.footer>
  );
}
