import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

const whatsappUrl = "https://wa.me/5518988183746";

// Next.js 15 requires params to be a Promise
export default async function ProjectJornadaPage({
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
    <>
      <main className="w-full min-h-screen bg-background text-on-background selection:bg-primary-container/30 selection:text-white pt-32 pb-8 md:pt-48 overflow-hidden">
        
        {/* BACK BUTTON */}
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-0 mb-12">
          <Link 
            href="/projetos"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label-md uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Voltar ao Hub
          </Link>
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg transition-colors ml-6"
            >
              Acessar Sistema Vivo
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          )}
        </div>

        <article className="max-w-4xl mx-auto px-margin-mobile md:px-0">
          
          {/* HEADER / INTRO */}
          <header className="mb-20 md:mb-32">
            <h1 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl text-primary leading-tight tracking-tight mb-8">
              {project.heroTitle}
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium">
              {project.heroSubtitle}
            </p>
          </header>

          {/* O PROBLEMA INICIAL */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">{project.problemTitle}</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              {project.problemParagraphs.map((paragraph, i) => (
                <p key={i} className={i === 2 ? "pt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* O EFEITO DOMINÓ */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">{project.dominoTitle}</h3>
            
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-6">
              {project.dominoSubtitle}
            </p>
            
            <div className="space-y-4 font-body-md text-on-surface-variant">
              {project.dominoSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4">
                    {/* Calcula a opacidade da bolinha dinamicamente com base no index */}
                    <div className="w-2 h-2 rounded-full bg-primary" style={{ opacity: Math.max(0.2, 1 - (i * 0.15)) }}></div>
                    <p>{step}</p>
                  </div>
                  {/* Seta ligando ao próximo */}
                  {i < project.dominoSteps.length - 1 && (
                    <div className="pl-1 text-white/20 text-xs">↓</div>
                  )}
                </React.Fragment>
              ))}
              
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex flex-col gap-2 border-l-2 border-primary/50 pl-6 italic mt-4">
                <p className="font-medium text-primary">{project.dominoConclusion}</p>
              </div>
            </div>
          </section>

          {/* O CLÍMAX */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">{project.climaxTitle}</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              {project.climaxParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              
              {project.climaxList && project.climaxList.length > 0 && (
                <ul className="pl-6 space-y-2 italic text-on-surface/80 border-l border-white/10 my-6 py-2">
                  {project.climaxList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              
              <div className="bg-surface-container border border-white/5 p-6 md:p-8 rounded-2xl mt-10 text-center">
                <p className="text-xl md:text-2xl font-headline-lg text-white mb-4">
                  {project.climaxHighlightTitle}
                </p>
                <p className="text-primary font-medium text-lg leading-relaxed">
                  {project.climaxHighlightText}
                </p>
              </div>
            </div>
          </section>

          {/* STACK TECNOLÓGICO */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">A orquestração técnica nos bastidores.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>O difícil de verdade foi orquestrar a arquitetura e os dados em tempo real:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-[11px] uppercase tracking-widest text-primary/80 mt-6">
                {project.techGrid.map((tech, i) => (
                  <div key={i} className="bg-surface-container border border-white/5 px-3 py-2 rounded flex items-center justify-center text-center h-full min-h-[40px]">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONCLUSÕES */}
          <section className="mb-24 md:mb-32 border-t border-white/5 pt-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">{project.learningsTitle}</h3>
            
            <div className="space-y-4">
              {project.learnings.map((learning, i) => (
                <div key={i} className="border-l-2 border-white/10 pl-4 py-1">
                  <p className="font-body-md text-on-surface leading-relaxed font-medium">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* O CTA FINAL PADRÃO */}
          <section className="mb-0 bg-surface-container-lowest border border-white/5 p-10 md:p-16 rounded-[2rem] flex flex-col items-center text-center gap-10">
            <div className="max-w-2xl font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-6">
              <p>Nós transformamos gargalos operacionais e desafios arquiteturais complexos em soluções de engenharia que rodam em produção.</p>
              <p className="text-primary font-medium">Se você acredita que sua operação também precisa evoluir para esse nível técnico, clique no botão abaixo.</p>
            </div>
            <div className="flex flex-col items-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary-container text-[#131313] font-bold font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(202,243,0,0.2)] whitespace-nowrap"
              >
                Vamos conversar
              </a>
              <p className="text-[10px] text-on-surface-variant mt-3 uppercase tracking-widest">Sem compromisso.</p>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}

// Generate the static routes for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
