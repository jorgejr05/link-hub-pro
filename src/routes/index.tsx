import { createFileRoute } from "@tanstack/react-router";
import jorgeAvatar from "@/assets/jorge-avatar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jorge Junior — Organização, Comunicação e IA" },
      {
        name: "description",
        content:
          "Te ajudo a sair do zero e se posicionar na internet usando IA. Organização, comunicação e consistência.",
      },
      { property: "og:title", content: "Jorge Junior" },
      {
        property: "og:description",
        content: "Consistência constrói. Comunicação escala.",
      },
    ],
  }),
});

type LinkItem = {
  emoji: string;
  title: string;
  subtitle?: string;
  href: string;
  variant: "primary" | "ghost";
};

const links: LinkItem[] = [
  {
    emoji: "🧠",
    title: "Organize sua rotina com IA",
    subtitle: "Crie disciplina e consistência no seu dia",
    href: "#",
    variant: "primary",
  },
  {
    emoji: "🎥",
    title: "Melhore sua comunicação",
    subtitle: "Grave vídeos com confiança e clareza",
    href: "#",
    variant: "primary",
  },
  {
    emoji: "🎬",
    title: "Ver meus conteúdos",
    href: "#",
    variant: "ghost",
  },
  {
    emoji: "💬",
    title: "Falar comigo",
    href: "#",
    variant: "ghost",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-12 sm:py-16">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
        {/* Avatar */}
        <div
          className="animate-fade-in-up animate-pulse-glow rounded-full p-[3px]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <img
            src={jorgeAvatar}
            alt="Jorge Junior"
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        {/* Identidade */}
        <h1
          className="animate-fade-in-up mt-6 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          style={{ animationDelay: "80ms" }}
        >
          Jorge Junior
        </h1>

        <p
          className="animate-fade-in-up mt-3 max-w-xs text-center text-base text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          Te ajudo a sair do zero e se posicionar na internet usando IA
        </p>

        <p
          className="animate-fade-in-up mt-2 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
          style={{ animationDelay: "240ms" }}
        >
          Organização • Comunicação • Consistência
        </p>

        {/* Links */}
        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.href}
              className={
                link.variant === "primary"
                  ? "btn-link animate-fade-in-up group block rounded-2xl p-[1.5px]"
                  : "btn-link animate-fade-in-up group block rounded-2xl border border-border bg-card backdrop-blur-md"
              }
              style={{
                animationDelay: `${320 + i * 90}ms`,
                ...(link.variant === "primary"
                  ? { background: "var(--gradient-brand)" }
                  : {}),
              }}
            >
              <div
                className={
                  link.variant === "primary"
                    ? "rounded-[14px] bg-background/40 px-5 py-4 backdrop-blur-md transition-colors group-hover:bg-background/20"
                    : "rounded-[14px] px-5 py-4"
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.emoji}</span>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      {link.title}
                    </p>
                    {link.subtitle && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {link.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p
          className="animate-fade-in-up mt-12 text-center text-xs italic text-muted-foreground/80"
          style={{ animationDelay: "900ms" }}
        >
          Consistência constrói. Comunicação escala.
        </p>
      </div>
    </main>
  );
}
