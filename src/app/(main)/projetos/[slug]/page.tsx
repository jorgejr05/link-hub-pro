import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

// Next.js 15 requires params to be a Promise
export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col items-center">
      {/* 01. NAVIGATION BAR */}
      <div className="w-full max-w-4xl px-6 pt-12 pb-6 flex items-center justify-between z-10 relative">
        <Link 
          href="/projetos"
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label-md uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Voltar ao Hub
        </Link>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase px-4 py-2 rounded-lg transition-colors"
          >
            Acessar Sistema
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        )}
      </div>

      {/* 02. HERO DO PROJETO */}
      <section className="w-full max-w-4xl px-6 py-12 flex flex-col relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${project.bg} flex items-center justify-center`}>
            <span className={`material-symbols-outlined text-4xl ${project.color}`}>{project.icon}</span>
          </div>
          <div>
            <h1 className="font-display-lg text-4xl md:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-primary font-medium text-lg mt-1">{project.subtitle}</p>
          </div>
        </div>
        
        {/* Informações Básicas */}
        <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6 mt-2 relative z-10">
          <div className="bg-surface-container px-4 py-2 rounded-xl flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Período</span>
            <span className="text-sm font-medium text-white">{project.dateStart} — {project.dateLastDeploy}</span>
          </div>
          <div className="bg-surface-container px-4 py-2 rounded-xl flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Categoria</span>
            <span className="text-sm font-medium text-white">{project.tag}</span>
          </div>
        </div>
      </section>

      {/* 03. O ESTUDO DE CASO NARRATIVO */}
      <section className="w-full max-w-4xl px-6 pb-32 space-y-16 relative z-10">
        
        {/* A Gênese */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
            Contexto e Gênese
          </h2>
          <p className="text-on-surface font-body-lg text-lg leading-relaxed text-justify opacity-90">
            {project.genesis}
          </p>
        </div>

        {/* O Desafio */}
        <div className="space-y-4 bg-red-500/5 border border-red-500/10 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/30"></div>
          <h2 className="text-2xl font-bold text-red-400 flex items-center gap-3">
            <span className="material-symbols-outlined">warning</span>
            O Desafio Estrutural
          </h2>
          <p className="text-on-surface font-body-lg text-lg leading-relaxed text-justify opacity-90">
            {project.challenge}
          </p>
        </div>

        {/* A Solução */}
        <div className="space-y-4 bg-primary/5 border border-primary/10 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40"></div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
            <span className="material-symbols-outlined">verified</span>
            A Solução Construída
          </h2>
          <p className="text-on-surface font-body-lg text-lg leading-relaxed text-justify opacity-90">
            {project.solution}
          </p>
        </div>

        {/* Decisões de Arquitetura */}
        <div className="space-y-6 pt-8 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-400">architecture</span>
            Decisões de Arquitetura
          </h2>
          <ul className="space-y-4">
            {project.techDecisions.map((decision, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5">
                <span className="material-symbols-outlined text-blue-400 mt-0.5">check_circle</span>
                <span className="text-on-surface font-body-md text-base leading-relaxed">{decision}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack Final */}
        <div className="space-y-6 pt-8 border-t border-white/5">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest text-sm flex items-center gap-3">
            <span className="material-symbols-outlined opacity-50">code</span>
            Stack Tecnológico Utilizado
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((stack, idx) => (
              <span key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium text-white shadow-sm hover:border-primary/50 transition-colors">
                {stack}
              </span>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

// Opcional: Gerar as rotas estáticas no build
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
