import { createFileRoute } from "@tanstack/react-router";
import { MessageCircleMore, Music2 } from "lucide-react";
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
  title: string;
  subtitle?: string;
  href: string;
  variant: "primary" | "ghost";
};

const links: LinkItem[] = [
  {
    title: "Organize sua rotina com IA",
    subtitle: "Crie disciplina e consistência no seu dia",
    href: "https://ju-ai2026.vercel.app/",
    variant: "primary",
  },
  {
    title: "Melhore sua comunicação",
    subtitle: "Grave vídeos com confiança e clareza",
    href: "https://gravaproai.vercel.app/",
    variant: "primary",
  },
];

const socialLinks = [
  {
    title: "Ver meus conteúdos",
    href: "https://www.tiktok.com/@jorgejr.ai?_r=1&_t=ZS-95QriY32Il7",
    icon: Music2,
  },
  {
    title: "Falar comigo",
    href: "https://wa.me/5518981697905",
    icon: MessageCircleMore,
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
        <div
          className="animate-fade-in-up animate-pulse-glow inline-flex rounded-full p-[3px]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <img
            src={jorgeAvatar}
            alt="Jorge Junior"
            className="block h-28 w-28 rounded-full object-cover"
            style={{ objectPosition: "50% 25%" }}
          />
        </div>

        <h1
          className="animate-fade-in-up mt-6 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          style={{ animationDelay: "80ms" }}
        >
          Jorge Jr
        </h1>

        <p
          className="animate-fade-in-up mt-2 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
          style={{ animationDelay: "240ms" }}
        >
          Criando Projetos de IA que me ajudam diariamente.
        </p>

        <div className="animate-fade-in-up mt-8 w-full" style={{ animationDelay: "300ms" }}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
            Projetos
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="btn-link animate-fade-in-up group block rounded-2xl p-[1.5px]"
              style={{
                animationDelay: `${320 + i * 90}ms`,
                background: "var(--gradient-brand)",
              }}
            >
              <div className="rounded-[14px] bg-background/40 px-5 py-4 text-center backdrop-blur-md transition-colors group-hover:bg-background/20">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  {link.title}
                </p>
                {link.subtitle && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{link.subtitle}</p>
                )}
              </div>
            </a>
          ))}

          {socialLinks.map((link, i) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-link animate-fade-in-up group flex items-center justify-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-center backdrop-blur-md transition-colors hover:bg-accent"
                style={{ animationDelay: `${500 + i * 90}ms` }}
              >
                <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {link.title}
                </span>
              </a>
            );
          })}
        </div>

        <p
          className="animate-fade-in-up mt-12 text-center text-xs italic text-muted-foreground/80"
          style={{ animationDelay: "900ms" }}
        >
          A mente que se expande, jamais voltará ao seu estado original.
        </p>
      </div>
    </main>
  );
}