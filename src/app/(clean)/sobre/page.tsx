import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Sobre | Jorge Gomes Jr.",
  description: "Arquiteto de Soluções de IA e Engenheiro Full-Stack.",
};

export default function SobreMim() {
  return (
    <main className="w-full min-h-screen bg-[#040810] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* 01. HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-[0_0_60px_rgba(79,70,229,0.2)] mb-10 border-2 border-slate-800">
            <img src="/jorge-junior.jpg" alt="Jorge Gomes Jr." className="w-full h-full object-cover object-top" />
          </div>
          <p className="text-indigo-500 text-sm md:text-base font-bold uppercase tracking-widest mb-6 animate-in fade-in duration-500">
            {"Conheça o criador"}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {"Jorge "}
            <span className="text-indigo-500">{"Júnior"}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {"Arquiteto de Soluções de IA e Engenheiro Full-Stack construindo a próxima geração de ecossistemas digitais."}
          </p>
        </div>
      </section>

      {/* 02. A NARRATIVA */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Manifesto */}
          <div className="p-8 md:p-12 rounded-[2rem] bg-slate-900/50 border border-slate-800 backdrop-blur-md shadow-xl">
            <span className="material-symbols-outlined text-indigo-500 text-4xl mb-6 block">terminal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">O Fim do Atrito</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                A tecnologia só atinge seu potencial máximo quando se torna invisível para o usuário final. Meu trabalho como Arquiteto de Soluções foca exatamente nisso: conectar pontas soltas, orquestrar sistemas complexos e envelopar tudo em uma inteligência que <strong>antecipa demandas e automatiza a complexidade.</strong>
              </p>
              <p>
                Não construo apenas sites ou aplicativos. Eu desenvolvo ecossistemas inteiros onde Inteligência Artificial, dados em tempo real e arquitetura de alta performance trabalham em harmonia para gerar conversão e eficiência.
              </p>
            </div>
          </div>

          {/* Expertise 1: IA & Sistemas Distribuídos */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="text-2xl font-bold text-white mb-4">IA & Arquitetura de Software</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Orquestrando o caos com engenharia robusta e inteligência de ponta.
              </p>
            </div>
            <div className="md:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 space-y-6 shadow-lg">
              <p className="text-slate-400 leading-relaxed">
                No coração do que construo hoje, está o <strong>Plugeefy</strong>. Uma plataforma SaaS multi-tenant que rompe a barreira entre catálogos de e-commerce e assistentes de IA (ChatGPT, Gemini, Perplexity).
              </p>
              <p className="text-slate-400 leading-relaxed">
                Para tornar isso possível, implementei servidores <strong>MCP nativos (Protocolo de Contexto de Modelo)</strong>, permitindo que a IA consulte estoques reais em tempo real. Orquestro fluxos de venda complexos de B2C no WhatsApp utilizando agentes de estado com <strong>LangGraph</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Lidar com alta volumetria exige infraestrutura séria. Utilizo <strong>BullMQ + Redis</strong> para gerenciar webhooks assíncronos em múltiplas filas independentes. Zero perda de dados e retentativas inteligentes. Tudo apoiado por <strong>Supabase (RLS)</strong>, garantindo isolamento absoluto de dados entre clientes.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['LangGraph', 'MCP', 'Supabase', 'BullMQ', 'Hono', 'Docker'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-mono rounded border border-indigo-500/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise 2: Frontend & Experiência */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="text-2xl font-bold text-white mb-4">Interfaces & Perfomance</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Onde o design moderno encontra a performance instantânea.
              </p>
            </div>
            <div className="md:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 space-y-6 shadow-lg">
              <p className="text-slate-400 leading-relaxed">
                A beleza de uma interface não está apenas nas cores, mas em como ela responde ao toque. Projetos como o <strong>Link-Hub Pro</strong> e o <strong>Ju AI</strong> são provas de que podemos aliar altíssima performance a um design de cair o queixo.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Utilizo <strong>Next.js</strong> para renderização ultrarrápida, SEO impecável e roteamento robusto. A estilização fica por conta do <strong>Tailwind CSS</strong>, garantindo sistemas de design (Design Systems) consistentes, dark modes elegantes e glassmorphism refinado.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Com o <strong>Framer Motion</strong>, adiciono as microinterações e transições fluidas que dão vida à aplicação e elevam a percepção de valor do usuário final a outro patamar.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Shadcn/ui'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded border border-emerald-500/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise 3: Integrações & Automações */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 pt-2 md:sticky md:top-24">
              <h3 className="text-2xl font-bold text-white mb-4">Integrações Globais</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Conectando softwares e derrubando silos corporativos.
              </p>
            </div>
            <div className="md:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 space-y-6 shadow-lg">
              <p className="text-slate-400 leading-relaxed">
                Para um sistema ser verdadeiramente útil, ele precisa falar com o mundo. Venho construindo pipelines de integração pesados e altamente disponíveis.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Integrações maduras com <strong>Bling ERP</strong>, onde gerencio sincronização bidirecional de catálogos e logística. Automatizo pagamentos via <strong>Asaas e PagarMe</strong>. Mantenho a comunicação real-time vibrante com <strong>Evolution API, WhatsApp Cloud e Instagram/Meta</strong>.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Bling ERP', 'WhatsApp API', 'Asaas', 'PagarMe', 'Melhor Envio', 'Webhooks'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-mono rounded border border-amber-500/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 03. PROJETOS RECENTES */}
      <section className="py-24 px-6 bg-[#03060c] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">O que eu já construí</h2>
            <p className="text-slate-500 text-lg">Ecossistemas que estão rodando em produção agora.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Plugeefy",
                url: "plugeefy.cloud",
                desc: "Plataforma SaaS multi-tenant que expõe catálogos de e-commerce para LLMs via servidor MCP nativo. Pipeline assíncrono com BullMQ e agente IA LangGraph.",
                icon: "hub",
                color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
              },
              {
                title: "Link-Hub Pro",
                url: "jorgejr.site",
                desc: "Plataforma centralizadora de links e branding digital de altíssima conversão, com interfaces ultra modernas e animações fluidas.",
                icon: "link",
                color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
              },
              {
                title: "Ju AI",
                url: "ju-ai2026.vercel.app",
                desc: "Assistente de Inteligência Artificial para curadoria de conteúdo, estratégia de SEO e produtividade para criadores.",
                icon: "smart_toy",
                color: "text-violet-500 bg-violet-500/10 border-violet-500/20",
              },
              {
                title: "GravaPro AI",
                url: "gravaproai.vercel.app",
                desc: "Plataforma de IA para criadores de conteúdo com setup automatizado de vídeo e processamento de áudio via ffmpeg na nuvem.",
                icon: "movie",
                color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
              },
            ].map((proj, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:bg-slate-800/40 transition-colors flex flex-col items-start shadow-md">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 transition-transform group-hover:scale-110 ${proj.color}`}>
                  <span className="material-symbols-outlined">{proj.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                <a href={`https://${proj.url}`} target="_blank" rel="noreferrer" className="text-sm font-mono text-slate-500 hover:text-indigo-400 mb-5 transition-colors">
                  {proj.url}
                </a>
                <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. FOOTER / CONTATO */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Vamos construir juntos?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light">
            Se você está buscando estruturar um projeto escalável, integrar IA de verdade na sua operação ou criar interfaces que convertem, eu posso te ajudar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-widest uppercase transition-colors shadow-[0_0_40px_rgba(79,70,229,0.4)]">
              Chamar no WhatsApp
            </a>
            <a href="https://github.com/jorgejr05" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-widest uppercase transition-colors border border-slate-700">
              Ver GitHub
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
