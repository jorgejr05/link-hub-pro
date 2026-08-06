import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProjetosHubPage() {
  return (
    <main className="w-full flex-1 flex flex-col items-center">
      
      {/* 01. HERO */}
      <section className="w-full py-24 md:py-32 px-6 relative flex flex-col items-center text-center mt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Engenharia e Arquitetura<br className="hidden md:block"/> Aplicadas a Problemas Reais.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body-lg leading-relaxed font-light max-w-2xl">
            Abaixo estão nossos principais ecossistemas, ferramentas e infraestruturas criadas. Selecione um projeto para entender as decisões arquiteturais e o gargalo que resolvemos.
          </p>
        </div>
      </section>

      {/* 02. CASES GRID */}
      <section className="w-full pb-32 px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {projectsData.map((project, idx) => (
            <div key={idx} className="bg-surface border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col group hover:border-white/10 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">
              
              {/* Header do Card */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${project.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined text-3xl ${project.color}`}>{project.icon}</span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="bg-[#111113] border border-white/5 px-3 py-1.5 rounded-full">
                    <span className="text-xs font-label-sm text-on-surface uppercase tracking-wider">{project.tag}</span>
                  </div>
                  <div className="text-xs font-medium text-on-surface-variant opacity-70">
                    {project.dateStart} - {project.dateLastDeploy}
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-primary mb-8">{project.subtitle}</p>

              <div className="space-y-6 flex-1">
                {/* A Dor Resumida */}
                <div className="bg-[#0a0a0b] border border-white/5 rounded-2xl p-6 relative overflow-hidden h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/20"></div>
                  <h3 className="text-sm font-label-md uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    O Problema Central
                  </h3>
                  <p className="text-on-surface text-sm font-body-md leading-relaxed">
                    {project.shortPain}
                  </p>
                </div>
              </div>

              {/* Botão de Ver Estudo */}
              <div className="mt-8 pt-6">
                <Link 
                  href={`/projetos/${project.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-xl transition-colors duration-300 group-hover:border-primary/50"
                >
                  VER JORNADA
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
