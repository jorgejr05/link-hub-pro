import React from "react";
import Link from "next/link";

export default function ProjetosPage() {
  const cases = [
    {
      title: "Infraestrutura de Busca para Varejo",
      tag: "Arquitetura & Dados",
      pain: "O varejo físico possui um catálogo valioso, mas totalmente invisível para a nova geração de motores de busca guiados por IA (ChatGPT, Google AI). Isso resulta na perda diária de tráfego de altíssima intenção de compra.",
      solution: "Desenvolvimento de uma camada de governança (SEO para IA) que normaliza estoques, estrutura dados via Schema.org e permite que assistentes autônomos recomendem e direcionem usuários locais diretamente para a compra, respeitando regras comerciais e sanitárias.",
      tech: ["Node.js", "PostgreSQL", "Integração ERP", "IA/LLMs"],
      icon: "storefront",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Logística Urbana & Marketplace Local",
      tag: "Sistemas Complexos",
      pain: "Comerciantes locais perdem margem de lucro para grandes apps de delivery, enquanto sofrem para gerenciar entregadores independentes e unificar múltiplos canais de venda (WhatsApp, Instagram, Balcão).",
      solution: "Criação de um sistema centralizado de ponta a ponta: vitrine digital nativa para os lojistas, painel de roteirização e despacho inteligente de motoboys, reduzindo o atrito da última milha e mantendo o lucro na economia local.",
      tech: ["Next.js", "Supabase", "Rotas Inteligentes", "WebSockets"],
      icon: "local_shipping",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Alta Conversão para Clínicas Médicas",
      tag: "Engenharia de Produto",
      pain: "Clínicas de estética e saúde investem pesado em tráfego pago, mas perdem a conversão porque suas páginas não transmitem confiança (Premium) e o agendamento manual no WhatsApp esfria o lead.",
      solution: "Engenharia de Landing Pages de ultra performance com design imersivo. Integração nativa de agendamento diretamente na página, captura de leads em banco de dados e disparo automatizado de follow-up, dobrando a conversão de pacientes High-Ticket.",
      tech: ["Next.js", "TailwindCSS", "Integração CRM", "Figma"],
      icon: "spa",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Agentes Autônomos (SDR e Atendimento)",
      tag: "Inteligência Artificial",
      pain: "Gargalo no atendimento humano: leads demoram para ser respondidos fora do horário comercial, a qualificação é inconsistente e oportunidades de vendas são perdidas simplesmente pela demora ou falta de personalização.",
      solution: "Implementação de Agentes Autônomos conectados diretamente ao WhatsApp e Instagram. Capazes de manter memória de contexto, consultar bancos de dados (RAG) em tempo real, qualificar o lead e realizar o agendamento ou venda 24/7 sem intervenção humana.",
      tech: ["n8n", "LangChain", "Dify", "WhatsApp API"],
      icon: "smart_toy",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    }
  ];

  return (
    <main className="w-full flex-1 flex flex-col items-center">
      
      {/* 01. HERO */}
      <section className="w-full py-24 md:py-32 px-6 relative flex flex-col items-center text-center mt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <p className="text-primary text-sm md:text-base font-label-md tracking-widest uppercase mb-6">
            Projetos & Cases de Sucesso
          </p>
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Não escrevo código.<br className="hidden md:block"/> Construo soluções para problemas reais.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body-lg leading-relaxed font-light max-w-2xl">
            Por razões de confidencialidade e LGPD, não expomos as interfaces, bancos de dados ou URLs diretas dos nossos clientes. Abaixo apresentamos a arquitetura dos problemas resolvidos e o impacto gerado.
          </p>
        </div>
      </section>

      {/* 02. CASES GRID */}
      <section className="w-full pb-32 px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {cases.map((project, idx) => (
            <div key={idx} className="bg-surface border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col group hover:border-white/10 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">
              
              {/* Header do Card */}
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl ${project.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined text-3xl ${project.color}`}>{project.icon}</span>
                </div>
                <div className="bg-[#111113] border border-white/5 px-3 py-1.5 rounded-full">
                  <span className="text-xs font-label-sm text-on-surface uppercase tracking-wider">{project.tag}</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                {project.title}
              </h2>

              <div className="space-y-6 flex-1">
                {/* A Dor */}
                <div className="bg-[#0a0a0b] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/20"></div>
                  <h3 className="text-sm font-label-md uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    A Dor
                  </h3>
                  <p className="text-on-surface text-sm md:text-base font-body-md leading-relaxed">
                    {project.pain}
                  </p>
                </div>

                {/* A Solução */}
                <div className="bg-[#0a0a0b] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40"></div>
                  <h3 className="text-sm font-label-md uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    A Solução
                  </h3>
                  <p className="text-on-surface text-sm md:text-base font-body-md leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Stack Footer */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-label-sm text-on-surface-variant bg-white/5 px-3 py-1.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Pronto para resolver o próximo problema estrutural do seu negócio?</h3>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-white transition-colors duration-300">
            Descobrir a Jornada
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
