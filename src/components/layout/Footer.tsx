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
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          <a
            className="font-body-md text-body-md text-outline hover:text-secondary underline decoration-secondary/30 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Manifesto
          </a>
          <a
            className="font-body-md text-body-md text-outline hover:text-secondary underline decoration-secondary/30 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Privacidade
          </a>
          <a
            className="font-body-md text-body-md text-outline hover:text-secondary underline decoration-secondary/30 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Termos de Uso
          </a>
          <a
            className="font-body-md text-body-md text-outline hover:text-secondary underline decoration-secondary/30 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Contato
          </a>
        </nav>
        <p className="font-body-md text-body-md text-outline-variant text-center">
          © 2024 JORGE JR. HUB DE AUTORIDADE. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </motion.footer>
  );
}
