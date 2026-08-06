"use client";

import React, { useState, useEffect } from "react";

// Simple Typewriter component
function Typewriter({ 
  text, 
  delay = 30, 
  startDelay = 0, 
  className,
  onComplete,
  showCursor = true
}: { 
  text: string, 
  delay?: number, 
  startDelay?: number, 
  className?: string,
  onComplete?: () => void,
  showCursor?: boolean
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setFinished(true);
        if (onComplete) onComplete();
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay, started]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !finished && <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle animate-pulse"></span>}
    </span>
  );
}

export default function PerfilPage() {
  const [stage, setStage] = useState(0);

  return (
    <main className="w-full flex-1 flex flex-col items-center">
      
      {/* 01. HERO (Layout lado a lado no Desktop, Imagem acima no Mobile) */}
      <section className="w-full max-w-7xl mx-auto py-24 md:py-32 px-6 flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Imagem (Aparece primeiro no Mobile -> order-1, Lado Direito no Desktop -> order-2) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative">
          {/* Background glow sutil atrás da imagem */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen -z-10"></div>
          
          <div 
            className="w-full max-w-[400px] md:max-w-[500px] aspect-[3/4] opacity-90"
            style={{
              backgroundImage: "url('/jorge-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              maskImage: "radial-gradient(ellipse at center 40%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center 40%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)"
            }}
          ></div>
        </div>
        
        {/* Texto (Aparece em baixo no Mobile -> order-2, Lado Esquerdo no Desktop -> order-1) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 relative z-10 -mt-12 md:mt-0">
          
          <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-tight text-white mb-6 min-h-[1.2em] leading-tight">
            <Typewriter 
              text="Jorge Jr." 
              delay={80} 
              onComplete={() => setStage(1)} 
              showCursor={stage === 0}
            />
          </h1>
          
          <p className="text-primary text-sm md:text-base font-label-md tracking-widest uppercase mb-8 min-h-[1.5em]">
            {stage >= 1 && (
              <Typewriter 
                text="Arquiteto de Soluções em IA" 
                delay={40} 
                onComplete={() => setStage(2)} 
                showCursor={stage === 1}
              />
            )}
          </p>
          
          <p className="text-on-surface text-lg md:text-xl font-body-lg leading-relaxed font-light max-w-2xl min-h-[4em]">
            {stage >= 2 && (
              <Typewriter 
                text="Unindo engenharia de software e inteligência artificial para construir ecossistemas escaláveis. De interfaces imersivas a agentes autônomos que resolvem problemas reais de negócios." 
                delay={20} 
                showCursor={stage === 2}
              />
            )}
          </p>
          
        </div>
      </section>

      {/* 02. TIMELINE (A JORNADA) */}
      <section className="w-full py-20 px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-white mb-4">Trajetória</h2>
          <p className="text-on-surface font-body-md text-base md:text-lg max-w-2xl mx-auto">
            A evolução contínua da criação visual para a engenharia de dados e autonomia.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 lg:ml-12 space-y-12 pb-12">
          
          {/* 2023 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Início de 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">O Front-End e o Mercado Digital</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              O início da jornada. Criação de Landing Pages, VSLs e sites de alta performance para a venda de infoprodutos como afiliado, onde o foco em conversão e resultados ditava a regra.
            </p>
          </div>

          {/* 2023-2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">2023 - 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia e Low-Code</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              A necessidade de estruturas mais robustas levou a um aprofundamento técnico. A entrada no desenvolvimento de software tradicional e no low-code (com FlutterFlow) permitiu escalar a complexidade das soluções entregues.
            </p>
          </div>

          {/* Final 2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">Final de 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">O Boom dos Agentes Autônomos</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              Imersão profunda na nova geração de aplicações. Integração de ecossistemas com n8n, Dify e LLMs, consolidando uma vasta base de certificações em Inteligência Artificial e automação extrema.
            </p>
          </div>

          {/* Atualmente */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b] shadow-[0_0_15px_rgba(202,243,0,0.5)]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Atualmente</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia de Software (FIAP)</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              Cursando o 2º ciclo de Engenharia de Software pela FIAP. O objetivo é coroar a bagagem técnica, as certificações e a experiência prática com uma base acadêmica sólida, formando-se como Engenheiro de Software.
            </p>
          </div>

        </div>
      </section>



      {/* 04. DOMÍNIO TÉCNICO E COMPETÊNCIAS */}
      <section className="w-full py-24 px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-white mb-4">Competências Técnicas</h2>
          <p className="text-on-surface font-body-md text-base md:text-lg max-w-2xl mx-auto">
            Mais de 35 credenciais oficiais sintetizadas em capacidades reais de engenharia e negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Categoria: Inteligência Artificial */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="16" x="4" y="4" rx="2"/>
                <rect width="6" height="6" x="9" y="9" rx="1"/>
                <path d="M15 2v2"/>
                <path d="M15 20v2"/>
                <path d="M2 15h2"/>
                <path d="M2 9h2"/>
                <path d="M20 15h2"/>
                <path d="M20 9h2"/>
                <path d="M9 2v2"/>
                <path d="M9 20v2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Inteligência Artificial & Agentes</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Desenvolvimento de arquiteturas RAG (Retrieval-Augmented Generation) para conversar com bases de dados e documentos.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Construção de Agentes Autônomos especializados (SDR, Vendas, Atendimento) com tomada de decisão.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Engenharia de Prompts avançada e orquestração de modelos (LLMs) usando Dify e LangChain.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Implementação de agentes conversacionais de voz e automação de vídeos UGC (User-Generated Content).</li>
            </ul>
          </div>

          {/* Categoria: Automações e Backend */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automação & Backend</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Orquestração de APIs e automação de fluxos de dados complexos em larga escala utilizando n8n.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Arquitetura e modelagem de banco de dados relacionais (PostgreSQL / Supabase).</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Implementação de segurança avançada através de Row Level Security (RLS) e permissões granulares.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Automação completa de pagamentos, cobranças financeiras e integrações nativas com WhatsApp/Instagram.</li>
            </ul>
          </div>

          {/* Categoria: Mobile e Produtos */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Software & Mobile</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Desenvolvimento Full-Stack de aplicativos móveis e sistemas web complexos.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Integração fluida entre design de interfaces (UI/UX) imersivas e lógicas de backend (BaaS).</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Criação de arquiteturas modulares voltadas a alta performance, escalabilidade e manutenibilidade.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Processo ponta a ponta: do levantamento de requisitos de produto até a geração de builds e publicação nas Lojas.</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
