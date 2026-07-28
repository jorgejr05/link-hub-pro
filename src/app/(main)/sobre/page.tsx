import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Sobre | Jorge Gomes Jr.",
  description: "Arquiteto de Soluções de IA e Engenheiro Full-Stack.",
};

export default function SobreMim() {
  return (
    <main className="w-full min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container/30 selection:text-white overflow-hidden relative">
      
      {/* 01. HERO */}
      <section className="relative pt-32 pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden mb-10 shadow-2xl">
            <img src="/jorge-trabalhando.jpg" alt="Jorge Gomes Jr." className="w-full h-full object-cover" />
          </div>
          

          
          <h1 className="font-headline-xl text-headline-xl md:text-display-lg text-primary uppercase mb-8 leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {"Jorge "}
            <span className="neon-text">{"Júnior"}</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {"Arquiteto de Soluções de IA e Engenheiro Full-Stack construindo a próxima geração de ecossistemas digitais."}
          </p>
        </div>
      </section>

      {/* 02. A NARRATIVA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop relative border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Manifesto */}
          <div className="glass-panel p-8 md:p-12 rounded-[2rem]">
            <span className="material-symbols-outlined neon-text text-4xl mb-6 block">terminal</span>
            <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-primary uppercase mb-6 tracking-tight">O Fim do Atrito</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                A tecnologia só atinge seu potencial máximo quando se torna invisível para o usuário final. Meu trabalho como Arquiteto de Soluções foca exatamente nisso: conectar pontas soltas, orquestrar sistemas complexos e envelopar tudo em uma inteligência que <strong className="text-primary font-semibold">antecipa demandas e automatiza a complexidade.</strong>
              </p>
              <p>
                Não construo apenas sites ou aplicativos. Eu desenvolvo ecossistemas inteiros onde Inteligência Artificial, dados em tempo real e arquitetura de alta performance trabalham em harmonia para gerar conversão e eficiência.
              </p>
            </div>
          </div>

          {/* Expertise 1: IA & Sistemas Distribuídos */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">IA & Arquitetura</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Orquestrando o caos com engenharia robusta e inteligência de ponta.
              </p>
            </div>
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 space-y-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                No coração do que construo hoje, está o <strong className="text-primary font-semibold">Plugeefy</strong>. Uma plataforma SaaS multi-tenant que rompe a barreira entre catálogos de e-commerce e assistentes de IA (ChatGPT, Gemini, Perplexity).
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Para tornar isso possível, implementei servidores <strong className="text-primary font-semibold">MCP nativos (Protocolo de Contexto de Modelo)</strong>, permitindo que a IA consulte estoques reais em tempo real. Orquestro fluxos de venda complexos de B2C no WhatsApp utilizando agentes de estado com <strong className="text-primary font-semibold">LangGraph</strong>.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Lidar com alta volumetria exige infraestrutura séria. Utilizo <strong className="text-primary font-semibold">BullMQ + Redis</strong> para gerenciar webhooks assíncronos em múltiplas filas independentes. Zero perda de dados e retentativas inteligentes. Tudo apoiado por <strong className="text-primary font-semibold">Supabase (RLS)</strong>, garantindo isolamento absoluto de dados.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['LangGraph', 'MCP', 'Supabase', 'BullMQ', 'Hono', 'Docker'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container border border-white/10 font-label-caps text-[10px] text-primary-container uppercase tracking-widest rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise 2: Frontend & Experiência */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">Frontend Premium</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Onde o design moderno encontra a performance instantânea.
              </p>
            </div>
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 space-y-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A beleza de uma interface não está apenas nas cores, mas em como ela responde ao toque. Projetos como o <strong className="text-primary font-semibold">Link-Hub Pro</strong> e o <strong className="text-primary font-semibold">Ju AI</strong> são provas de que podemos aliar altíssima performance a um design de cair o queixo.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Utilizo <strong className="text-primary font-semibold">Next.js</strong> para renderização ultrarrápida, SEO impecável e roteamento robusto. A estilização fica por conta do <strong className="text-primary font-semibold">Tailwind CSS</strong>, garantindo sistemas de design consistentes, dark modes elegantes e glassmorphism refinado.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Com o <strong className="text-primary font-semibold">Framer Motion</strong>, adiciono as microinterações e transições fluidas que dão vida à aplicação e elevam a percepção de valor do usuário final a outro patamar.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Shadcn'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container border border-white/10 font-label-caps text-[10px] text-primary-container uppercase tracking-widest rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise 3: Integrações & Automações */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">Integrações Globais</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Conectando softwares e derrubando silos corporativos.
              </p>
            </div>
            <div className="md:col-span-7 glass-panel rounded-3xl p-8 space-y-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Para um sistema ser verdadeiramente útil, ele precisa falar com o mundo. Venho construindo pipelines de integração pesados e altamente disponíveis.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Integrações maduras com <strong className="text-primary font-semibold">Bling ERP</strong>, onde gerencio sincronização bidirecional de catálogos e logística. Automatizo pagamentos via <strong className="text-primary font-semibold">Asaas e PagarMe</strong>. Mantenho a comunicação real-time vibrante com <strong className="text-primary font-semibold">Evolution API, WhatsApp Cloud e Instagram/Meta</strong>.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Bling ERP', 'WhatsApp API', 'Asaas', 'PagarMe', 'Webhooks'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container border border-white/10 font-label-caps text-[10px] text-primary-container uppercase tracking-widest rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 03. PROJETOS RECENTES */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop border-t border-white/5 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-primary uppercase mb-4 tracking-tight">O que eu já construí</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Ecossistemas que estão rodando em produção agora.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Plugeefy",
                url: "plugeefy.cloud",
                desc: "Plataforma SaaS multi-tenant que expõe catálogos de e-commerce para LLMs via servidor MCP nativo. Pipeline assíncrono com BullMQ e agente IA LangGraph.",
                icon: "hub",
              },

              {
                title: "Ju AI",
                url: "ju-ai2026.vercel.app",
                desc: "Assistente de Inteligência Artificial para curadoria de conteúdo, estratégia de SEO e produtividade para criadores.",
                icon: "smart_toy",
              },
              {
                title: "GravaPro AI",
                url: "gravaproai.vercel.app",
                desc: "Plataforma de IA para criadores de conteúdo com setup automatizado de vídeo e processamento de áudio via ffmpeg na nuvem.",
                icon: "movie",
              },
            ].map((proj, i) => (
              <div key={i} className="group glass-panel rounded-3xl p-8 hover:neon-glow transition-all duration-300 flex flex-col items-start cursor-default">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-primary-container/20 bg-primary-container/5 mb-6 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined neon-text">{proj.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary uppercase mb-2">{proj.title}</h3>
                <a href={`https://${proj.url}`} target="_blank" rel="noreferrer" className="font-mono text-[13px] text-on-surface-variant hover:neon-text mb-5 transition-colors">
                  {proj.url}
                </a>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-auto">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. FOOTER / CONTATO */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-primary uppercase mb-6 tracking-tight">Vamos construir juntos?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Se você está buscando estruturar um projeto escalável, integrar IA de verdade na sua operação ou criar interfaces que convertem, eu posso te ajudar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm tracking-widest uppercase transition-all hover:neon-glow hover:-translate-y-1">
              Chamar no WhatsApp
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
