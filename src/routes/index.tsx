import { createFileRoute } from "@tanstack/react-router";
import { MessageCircleMore, Music2, Brain, Video, ArrowUpRight, Sparkles } from "lucide-react";
import jorgeAvatar from "@/assets/jorge-avatar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jorge Junior — IA, Performance e Consistência" },
      {
        name: "description",
        content:
          "Estrategista de IA focado em transformar caos em rotinas de alto desempenho e comunicação de escala.",
      },
      { property: "og:title", content: "Jorge Junior | IA & Performance" },
    ],
  }),
});

function Index() {
  const projects = [
    {
      title: "Ju AI",
      tag: "Mente & Rotina",
      description: "A assistente de IA mais humanizada do mundo. Gerencie sua mente, rotina e finanças por voz.",
      href: "https://ju-ai2026.vercel.app/",
      icon: Brain,
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "GravaPro AI",
      tag: "Comunicação",
      description: "Destrave sua comunicação em vídeo. Tenha clareza, confiança e estrutura guiada por IA.",
      href: "https://gravaproai.vercel.app/",
      icon: Video,
      color: "from-blue-500/20 to-indigo-500/20",
    },
  ];

  const socials = [
    {
      title: "TikTok — Build in Public",
      subtitle: "Acompanhe a construção dos projetos",
      href: "https://www.tiktok.com/@jorgejr.ai",
      icon: Music2,
    },
    {
      title: "WhatsApp — Networking",
      subtitle: "Fale diretamente comigo",
      href: "https://wa.me/5518981697905",
      icon: MessageCircleMore,
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-16 sm:py-24">
      {/* Header Section */}
      <header className="flex flex-col items-center text-center">
        <div className="glow-avatar">
          <img
            src={jorgeAvatar}
            alt="Jorge Junior"
            className="h-32 w-32 rounded-full border-2 border-background object-cover"
            style={{ objectPosition: "50% 25%" }}
          />
        </div>
        
        <div className="animate-in-up mt-8" style={{ animationDelay: "100ms" }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3 w-3" />
            Estrategista de IA
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Jorge Jr
          </h1>
          <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground/80 sm:text-base">
            Criando sistemas de Inteligência Artificial <br className="hidden sm:block" /> 
            que transformam o caos em clareza diária.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="mt-16 space-y-6">
        <div className="animate-in-up flex items-center gap-4" style={{ animationDelay: "200ms" }}>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
            Ecossistema de Soluções
          </h2>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <div className="grid gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card animate-in-up group p-6"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl bg-gradient-to-br ${project.color} p-3 transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
                <div className="mt-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                    {project.tag}
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Social Hub */}
      <section className="mt-12 space-y-4">
        <div className="grid gap-3">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card animate-in-up flex items-center gap-4 p-4 hover:bg-white/[0.08]"
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
                <div className="rounded-lg bg-white/5 p-2.5">
                  <Icon className="h-5 w-5 text-foreground/80" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-foreground">{social.title}</h4>
                  <p className="text-[11px] text-muted-foreground">{social.subtitle}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/20" />
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer Manifesto */}
      <footer className="animate-in-up mt-20 text-center" style={{ animationDelay: "800ms" }}>
        <p className="text-xs font-medium italic tracking-wide text-muted-foreground/40">
          "A mente que se expande, jamais voltará ao seu estado original."
        </p>
        <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/20">
          Jorge Jr © 2026
        </div>
      </footer>
    </div>
  );
}