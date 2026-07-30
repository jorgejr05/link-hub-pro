import React from "react";
import Link from "next/link";

const whatsappUrl = "https://wa.me/5518988183746";

export const metadata = {
  title: "Laboratório de Engenharia | Jorge Gomes Jr.",
  description: "A Plugeefy nasceu quando estávamos tentando responder uma única pergunta: Como uma empresa pode continuar vendendo quando ninguém está trabalhando?",
};

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-background text-on-background selection:bg-primary-container/30 selection:text-white pt-24 pb-24 md:pt-32">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          
          {/* HEADER / INTRO */}
          <header className="mb-20 md:mb-32">
            <h1 className="font-headline-xl text-4xl md:text-5xl text-primary leading-tight tracking-tight mb-8">
              A Plugeefy nasceu quando estávamos tentando responder uma única pergunta.
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium">
              Como uma empresa pode continuar vendendo quando ninguém está trabalhando?
            </p>
          </header>

          {/* O PROBLEMA INICIAL */}
          <section className="mb-12 md:mb-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Tudo começou com um problema simples.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>O atendimento parava quando o expediente terminava.</p>
              <p>Durante as noites, finais de semana e feriados, clientes continuavam chegando pelo WhatsApp e Instagram, mas a equipe comercial já não estava disponível. Não faltavam vendedores. Faltava uma operação que continuasse funcionando quando as pessoas saíssem da empresa.</p>
              <p className="pt-4">Rapidamente percebemos que responder perguntas era apenas uma pequena parte do problema.</p>
              <p>Para vender de verdade, um agente precisava conhecer toda a operação da empresa.</p>
            </div>
          </section>
        </article>

        {/* Fluxograma Escuro Premium (Pipeline 7 Steps) */}
        <div className="w-full max-w-[1000px] mx-auto px-4 mb-16 md:mb-24">
          <div className="relative w-full">
            <div className="overflow-x-auto custom-scrollbar pb-10">
              <div className="min-w-max relative z-10 px-4 py-4">
                <div className="flex items-start justify-between gap-8 relative">
                  
                  {/* Linha conectora de fundo com pontilhados/glow */}
                  <div className="absolute top-8 left-10 right-10 h-[2px] border-t-2 border-dashed border-white/10 -z-10 flex items-center justify-between px-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] shadow-[0_0_8px_#5E5CE6]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#30D158] shadow-[0_0_8px_#30D158]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] shadow-[0_0_8px_#5E5CE6]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] shadow-[0_0_8px_#5E5CE6]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] shadow-[0_0_8px_#5E5CE6]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E5CE6] shadow-[0_0_8px_#5E5CE6]"></div>
                  </div>

                  {/* 01. Cliente */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">person</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">01</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">Cliente</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">O cliente inicia a conversa</p>
                  </div>

                  {/* 02. WhatsApp (Glow Verde) */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-[#30D158]/50 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15),inset_0_0_15px_rgba(48,209,88,0.1)] backdrop-blur-md relative">
                      <div className="absolute inset-0 rounded-full bg-[#30D158]/5 animate-pulse"></div>
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#30D158]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[9px] font-bold px-3 py-1 rounded-md mb-2">02</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">WhatsApp</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">Recebe a mensagem nos canais</p>
                  </div>

                  {/* 03. Agente */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">smart_toy</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">03</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">Agente</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">IA compreende e inicia o atendimento</p>
                  </div>

                  {/* 04. ERP */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">database</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">04</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">ERP</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">Consulta dados e informações</p>
                  </div>

                  {/* 05. Estoque */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">inventory_2</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">05</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">Estoque</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">Verifica disponibilidade de produtos</p>
                  </div>

                  {/* 06. Frete */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">local_shipping</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">06</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">Frete</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">Calcula o melhor frete e prazo</p>
                  </div>

                  {/* 07. Pedido */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">shopping_bag</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">07</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[12px] text-white mb-1">Pedido</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed">Cria o pedido e acompanha o processo</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          <div className="font-body-md text-base text-on-surface-variant leading-relaxed border-l-2 border-primary/50 pl-6 italic mb-16 md:mb-24">
            <p>Foi nesse momento que percebemos que o problema nunca foi o atendimento.</p>
            <p>O problema era a operação inteira.</p>
          </div>

          {/* O EFEITO DOMINÓ */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">Cada resposta revelou uma pergunta ainda maior.</h3>
            
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p>Integramos o ERP.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                <p>Descobrimos que precisávamos da logística.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                <p>A logística revelou os pagamentos.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <p>Os pagamentos nos levaram ao CRM.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <p>O CRM nos levou aos canais da Meta.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <p>Os canais nos levaram aos LLMs (Modelos de Linguagem).</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                <p>Os LLMs nos levaram ao AI Commerce.</p>
              </div>
            </div>
          </section>

          {/* O CLÍMAX */}
          <section className="mb-12 md:mb-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Uma nova forma de descoberta.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>Enquanto resolvíamos um problema operacional... o comportamento dos consumidores também estava mudando.</p>
              <p>Pela primeira vez, percebemos que as pessoas estavam deixando de navegar por categorias de um e-commerce. Elas começaram a simplesmente perguntar:</p>
              
              <ul className="pl-6 space-y-2 italic text-on-surface/80 border-l border-white/10 my-6 py-2">
                <li>"Qual creatina vocês recomendam?"</li>
                <li>"Onde encontro esse medicamento?"</li>
                <li>"Qual protetor solar é melhor para pele oleosa?"</li>
              </ul>

              <p>Se a descoberta passaria a acontecer dentro de assistentes inteligentes, nossa infraestrutura também precisava estar preparada para isso.</p>
              
              <div className="bg-surface-container border border-white/5 p-6 rounded-2xl mt-8">
                <p className="text-primary font-medium">
                  Foi nesse momento que a Plugeefy deixou de resolver apenas atendimento. Ela passou a conectar empresas à próxima geração do comércio digital.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Arquitetura Elegante (Design Novo: 4 Ícones Dark) */}
        <div className="w-full max-w-[800px] mx-auto px-4 mb-16 md:mb-24">
          <div className="relative w-full">
            <div className="overflow-x-auto custom-scrollbar pb-10">
              <div className="min-w-max relative z-10 px-4 py-4">
                
                {/* Linha conectora de fundo com pontilhados/glow */}
                <div className="absolute top-10 left-20 right-20 h-[2px] border-t-2 border-dashed border-white/10 -z-10 flex items-center justify-between px-12">
                  <div className="w-2 h-2 rounded-full bg-[#5E5CE6] shadow-[0_0_10px_#5E5CE6]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]"></div>
                </div>

                <div className="flex items-start justify-between gap-12 relative">
                  
                  {/* 01. ERP */}
                  <div className="flex flex-col items-center text-center w-[150px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#5E5CE6]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(94,92,230,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">database</span>
                    </div>
                    <span className="bg-[#5E5CE6]/20 text-[#5E5CE6] text-[10px] font-bold px-3 py-1 rounded-md mb-2">01</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">ERP</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Dados, produtos, estoque e clientes</p>
                  </div>

                  {/* 02. PLUGEEFY (Main Highlight) */}
                  <div className="flex flex-col items-center text-center w-[170px] shrink-0">
                    <div className="w-24 h-24 -mt-2 rounded-full bg-gradient-to-br from-[#5E5CE6] to-[#30D158]/20 border border-[#5E5CE6]/60 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(94,92,230,0.4),inset_0_0_15px_rgba(255,255,255,0.2)] backdrop-blur-md relative">
                      {/* Glow extra no fundo */}
                      <div className="absolute inset-0 rounded-full bg-[#5E5CE6] opacity-30 animate-pulse blur-[10px]"></div>
                      <span className="material-symbols-outlined text-[36px] text-white relative z-10 drop-shadow-lg">layers</span>
                      {/* Detalhes ao redor do anel estilo orbital */}
                      <div className="absolute inset-[-12px] border border-[#5E5CE6]/40 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-[-12px] border border-transparent rounded-full flex items-center justify-between animate-[spin_12s_linear_infinite_reverse]">
                         <div className="w-1.5 h-5 bg-[#5E5CE6] rounded-full -ml-1 shadow-[0_0_8px_#5E5CE6]"></div>
                         <div className="w-1.5 h-5 bg-[#5E5CE6] rounded-full -mr-1 shadow-[0_0_8px_#5E5CE6]"></div>
                      </div>
                    </div>
                    <span className="bg-[#5E5CE6]/20 text-[#5E5CE6] text-[10px] font-bold px-3 py-1 rounded-md mb-2">02</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">Plugeefy</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Infraestrutura inteligente e integração nativa</p>
                  </div>

                  {/* 03. LLMS */}
                  <div className="flex flex-col items-center text-center w-[150px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#30D158]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">memory</span>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[10px] font-bold px-3 py-1 rounded-md mb-2">03</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">LLMs</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Modelos de IA acessando dados em tempo real</p>
                  </div>

                  {/* 04. CLIENTE */}
                  <div className="flex flex-col items-center text-center w-[150px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#30D158]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">person</span>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[10px] font-bold px-3 py-1 rounded-md mb-2">04</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">Cliente</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Descoberta, atendimento e compra assistida</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          {/* O PROJETO HOJE */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Hoje, resolvemos o mesmo problema, só que em outra escala.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>A <strong className="text-primary font-semibold">Plugeefy</strong> conecta ERPs, canais de atendimento, logística, pagamentos, modelos de IA e mecanismos de descoberta semântica em uma única infraestrutura coesa.</p>
            </div>
            <div className="mt-8">
              <a 
                href="https://plugeefy.site" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container border border-white/10 hover:border-primary/50 text-on-surface font-label-md text-xs uppercase tracking-widest rounded-full transition-all"
              >
                Ver Projeto Plugeefy
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </section>

          {/* TIMELINE (Jornada) */}
          <section className="mb-24 md:mb-32 border-l border-white/10 pl-6 md:pl-8 space-y-12 py-4">
            <div className="relative">
              <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-background border-2 border-primary-container rounded-full"></div>
              <h4 className="text-sm font-label-caps text-on-surface-variant uppercase tracking-widest mb-4">A Jornada da Arquitetura</h4>
              <ul className="space-y-3 font-body-md text-on-surface text-base">
                <li>O Problema</li>
                <li className="text-white/20">↓</li>
                <li>O Primeiro Agente</li>
                <li className="text-white/20">↓</li>
                <li>A Primeira Integração de ERP</li>
                <li className="text-white/20">↓</li>
                <li>O Primeiro Pedido Automatizado</li>
                <li className="text-white/20">↓</li>
                <li>O Primeiro Cliente Atendido 24h</li>
                <li className="text-white/20">↓</li>
                <li>Homologação Meta Tech Provider</li>
                <li className="text-white/20">↓</li>
                <li>O Primeiro Servidor MCP</li>
                <li className="text-white/20">↓</li>
                <li>AI Commerce</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-background border-2 border-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
              <h4 className="text-sm font-label-caps text-primary uppercase tracking-widest mb-2">Hoje</h4>
              <p className="font-body-sm text-on-surface-variant text-sm">Infraestrutura rodando em produção.</p>
            </div>
          </section>

          {/* CONCLUSÕES */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">O que aprendemos construindo em produção.</h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  IA não resolve processos ruins. Ela apenas acelera o caos.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  Bons agentes dependem de bons dados.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  A inteligência está muito mais na arquitetura do que no modelo.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  A experiência começa antes da IA responder. Ela começa quando todos os sistemas conseguem conversar entre si.
                </p>
              </div>
            </div>
          </section>

          {/* REFLEXÕES PESSOAIS */}
          <section className="mb-24 md:mb-32 border-t border-white/5 pt-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">Notas do Arquiteto</h3>
            <div className="space-y-6 text-on-surface-variant font-body-md italic border-l-4 border-white/10 pl-6">
              <p>"Antes eu acreditava que integrar sistemas era a parte difícil. Hoje, acredito que entender o processo de negócio que roda nesses sistemas é muito mais complexo."</p>
              <p>"Descobri que a IA não veio para substituir pessoas de alto nível. Ela existe para eliminar o atrito entre pessoas e sistemas legados."</p>
              <p>"A arquitetura certa reduz muito mais custo e dor de cabeça do que simplesmente trocar para o modelo de linguagem mais recente."</p>
              <p className="pt-4 font-label-md not-italic text-sm text-primary uppercase tracking-widest">— Jorge Júnior</p>
            </div>
          </section>

          {/* O NÃO-CTA */}
          <section className="mb-24 bg-surface-container-lowest border border-white/5 p-10 md:p-16 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-headline-lg text-2xl text-primary mb-6">Se essa história parece familiar...</h3>
              <div className="font-body-md text-on-surface-variant leading-relaxed space-y-4">
                <p>...talvez sua empresa esteja enfrentando desafios parecidos.</p>
                <p>Nós passamos os últimos dezoito meses transformando problemas operacionais em uma arquitetura que hoje funciona em produção.</p>
                <p>Se você acredita que sua operação também pode evoluir dessa forma, vamos conversar.</p>
                <p className="text-sm">Sem apresentações comerciais. Sem discursos prontos. Apenas uma conversa entre pessoas que gostam de resolver problemas difíceis.</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors whitespace-nowrap"
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
