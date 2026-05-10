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
        <h2 className="font-headline-md text-headline-md text-primary tracking-widest uppercase mb-4">
          Jorge Jr.
        </h2>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 font-label-caps text-label-caps uppercase tracking-widest">
          <a
            className="text-outline hover:text-primary transition-colors duration-300"
            href="#"
          >
            Manifesto
          </a>
          <a
            className="text-outline hover:text-primary transition-colors duration-300"
            href="#"
          >
            Privacidade
          </a>
          <a
            className="text-outline hover:text-primary transition-colors duration-300"
            href="#"
          >
            Termos de Uso
          </a>
          <a
            className="text-outline hover:text-primary transition-colors duration-300"
            href="#"
          >
            Contato
          </a>
        </nav>
        <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant text-center opacity-60">
          © 2026 Jorge Jr. - Todos os Direitos Reservados.
        </p>
      </div>
    </motion.footer>
  );
}
