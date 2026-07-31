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
      <main className="w-full min-h-screen bg-background text-on-background selection:bg-primary-container/30 selection:text-white pt-24 pb-24 md:pt-32 overflow-hidden">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          
          {/* HEADER / INTRO */}
          <header className="mb-20 md:mb-32">
            <h1 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl text-primary leading-tight tracking-tight mb-8">
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
        <div className="w-full max-w-[960px] mx-auto mb-16 md:mb-24">
          <div className="relative w-full">
            {/* Margens negativas no mobile para o scroll ir de ponta a ponta na tela sem encavalar */}
            <div className="overflow-x-auto custom-scrollbar pt-8 pb-12 w-full">
              <div className="w-fit min-w-max relative z-10 py-4 flex md:mx-auto">
                
                {/* Spacer Left Invisível - Força o respiro esquerdo */}
                <div className="w-6 md:w-12 shrink-0"></div>
                
                <div className="flex items-start justify-between gap-6 relative">
                  
                  {/* Linha conectora de fundo com pontilhados/glow */}
                  <div className="absolute top-8 left-8 right-8 h-[2px] border-t-2 border-dashed border-white/10 -z-10 flex items-center justify-between px-4">
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
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">Cliente</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">O cliente inicia a conversa</p>
                  </div>

                  {/* 02. WhatsApp (Glow Verde) */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-[#30D158]/50 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15),inset_0_0_15px_rgba(48,209,88,0.1)] backdrop-blur-md relative">
                      <div className="absolute inset-0 rounded-full bg-[#30D158]/5 animate-pulse"></div>
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#30D158]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[9px] font-bold px-3 py-1 rounded-md mb-2">02</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">WhatsApp</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">Recebe a mensagem nos canais</p>
                  </div>

                  {/* 03. Agente */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">smart_toy</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">03</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">Agente</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">IA compreende e inicia o atendimento</p>
                  </div>

                  {/* 04. ERP */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">database</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">04</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">ERP</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">Consulta dados e informações</p>
                  </div>

                  {/* 05. Estoque */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">inventory_2</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">05</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">Estoque</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">Verifica disponibilidade de produtos</p>
                  </div>

                  {/* 06. Frete */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">local_shipping</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">06</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">Frete</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">Calcula o melhor frete e prazo</p>
                  </div>

                  {/* 07. Pedido */}
                  <div className="flex flex-col items-center text-center w-28 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[24px] text-white/80">shopping_bag</span>
                    </div>
                    <span className="bg-white/10 text-white/60 text-[9px] font-bold px-3 py-1 rounded-md mb-2">07</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[11px] text-white mb-1">Pedido</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed px-1">Cria pedido e acompanha processo</p>
                  </div>

                </div>
                
                {/* Spacer Right Invisível - Força o respiro direito IMPEDINDO O CORTE */}
                <div className="w-10 md:w-16 shrink-0"></div>
                
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          <div className="font-body-md text-base text-on-surface-variant leading-relaxed border-l-2 border-primary/50 pl-6 italic mb-16 md:mb-24">
            <p>No começo acreditávamos que estávamos construindo um agente.</p>
            <p>Depois de alguns meses percebemos que o agente era apenas a ponta visível.</p>
            <p className="font-semibold text-primary">O verdadeiro produto sempre foi a arquitetura.</p>
          </div>

          {/* O EFEITO DOMINÓ */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">Cada resposta revelou uma pergunta ainda maior.</h3>
            
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-6">
              Toda vez que resolvíamos um problema, descobríamos outro que estava escondido atrás dele.
            </p>
            
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p>Automatizar o atendimento exigiu integrar o ERP.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                <p>Integrar o ERP revelou que vender também dependia do cálculo de frete.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                <p>O frete nos obrigou a entender pagamentos.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <p>Os pagamentos exigiram CRM.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <p>O CRM aproximou todos os canais de atendimento.</p>
              </div>
              <div className="pl-1 text-white/20 text-xs">↓</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                  <p>E, quando tudo finalmente estava conectado, percebemos que o próximo canal já não era mais o WhatsApp.</p>
                </div>
                <p className="pl-6 font-medium text-primary">Eram os próprios modelos de IA.</p>
              </div>
            </div>
          </section>

          {/* O CLÍMAX */}
          <section className="mb-12 md:mb-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Uma nova forma de descoberta.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>Enquanto construíamos a arquitetura, o comportamento dos consumidores também estava mudando.</p>
              <p>Pela primeira vez, percebemos que as pessoas estavam deixando de navegar por categorias de um e-commerce. Elas começaram a simplesmente perguntar:</p>
              
              <ul className="pl-6 space-y-2 italic text-on-surface/80 border-l border-white/10 my-6 py-2">
                <li>"Qual creatina vocês recomendam?"</li>
                <li>"Onde encontro esse medicamento?"</li>
                <li>"Qual protetor solar é melhor para pele oleosa?"</li>
              </ul>

              <p>Se a descoberta passaria a acontecer dentro de assistentes inteligentes, nossa infraestrutura também precisava estar preparada para isso.</p>
              
              <div className="bg-surface-container border border-white/5 p-6 md:p-8 rounded-2xl mt-10 text-center">
                <p className="text-xl md:text-2xl font-headline-lg text-white mb-4">
                  A Plugeefy nunca foi criada para vender software.
                </p>
                <p className="text-primary font-medium text-lg leading-relaxed">
                  Ela é o laboratório onde investigamos como empresas irão operar na era da Inteligência Artificial.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* Arquitetura Elegante (Design Novo: 4 Ícones Dark) */}
        <div className="w-full max-w-[960px] mx-auto mb-16 md:mb-24">
          <div className="relative w-full">
            <div className="overflow-x-auto custom-scrollbar pt-12 pb-16 w-full">
              <div className="w-fit min-w-max relative z-10 py-4 flex md:mx-auto">
                
                {/* Spacer Left Invisível */}
                <div className="w-6 md:w-16 shrink-0"></div>

                <div className="flex items-start justify-between gap-10 md:gap-14 relative">
                  
                  {/* Linha conectora de fundo com pontilhados/glow */}
                  <div className="absolute top-10 left-16 right-16 h-[2px] border-t-2 border-dashed border-white/10 -z-10 flex items-center justify-between px-10">
                    <div className="w-2 h-2 rounded-full bg-[#5E5CE6] shadow-[0_0_10px_#5E5CE6]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]"></div>
                  </div>

                  {/* 01. ERP */}
                  <div className="flex flex-col items-center text-center w-[160px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#5E5CE6]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(94,92,230,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">database</span>
                    </div>
                    <span className="bg-[#5E5CE6]/20 text-[#5E5CE6] text-[10px] font-bold px-3 py-1 rounded-md mb-2">01</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">ERP</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Dados, produtos, estoque e clientes</p>
                  </div>

                  {/* 02. PLUGEEFY (Main Highlight) */}
                  <div className="flex flex-col items-center text-center w-[180px] shrink-0">
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
                  <div className="flex flex-col items-center text-center w-[160px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#30D158]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">memory</span>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[10px] font-bold px-3 py-1 rounded-md mb-2">03</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">LLMs</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Modelos de IA acessando dados em tempo real</p>
                  </div>

                  {/* 04. CLIENTE */}
                  <div className="flex flex-col items-center text-center w-[160px] shrink-0">
                    <div className="w-20 h-20 rounded-full bg-black/40 border border-[#30D158]/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(48,209,88,0.15)] backdrop-blur-md relative">
                      <span className="material-symbols-outlined text-[28px] text-white/80">person</span>
                    </div>
                    <span className="bg-[#30D158]/20 text-[#30D158] text-[10px] font-bold px-3 py-1 rounded-md mb-2">04</span>
                    <h4 className="font-label-caps uppercase tracking-widest text-[13px] text-white mb-1">Cliente</h4>
                    <p className="text-[11px] text-white/50 leading-relaxed px-2">Descoberta, atendimento e compra assistida</p>
                  </div>

                </div>

                {/* Spacer Right Invisível - Força o respiro direito IMPEDINDO O CORTE */}
                <div className="w-12 md:w-20 shrink-0"></div>

              </div>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          {/* O PROJETO HOJE */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Hoje continuamos resolvendo exatamente o mesmo problema do primeiro dia.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>A diferença é que, em vez de automatizar apenas um atendimento, construímos uma infraestrutura capaz de conectar toda a operação comercial de uma empresa à nova geração da Inteligência Artificial.</p>
              
              <div className="pt-6">
                <p className="mb-4 text-white font-medium">O diferencial nunca foi IA. IA qualquer um chama via API.</p>
                <p className="mb-4">O difícil de verdade foi orquestrar os bastidores de um negócio em tempo real:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-[11px] uppercase tracking-widest text-primary/80 mt-6">
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Sincronização de Estoque</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Concorrência</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Sistemas de Filas</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Webhooks Nativos</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Autenticação</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Compliance LGPD</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Isolamento Multi-tenant</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Criação de Pedidos</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Recuperação de Falhas</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Múltiplos Canais</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Infraestrutura Meta</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Clusters de ERP</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Servidores MCP</div>
                  <div className="bg-surface-container border border-white/5 px-3 py-2 rounded">Sincronização de Catálogo</div>
                </div>
              </div>
            </div>
          </section>

          {/* CONCLUSÕES */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">O que dezoito meses em produção nos ensinaram.</h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  A IA nunca foi o gargalo. Os dados eram.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  Modelos mudam todos os meses. Arquiteturas duram anos.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  Automatizar um processo ruim apenas faz o problema acontecer mais rápido.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  Toda integração parece simples até precisar funcionar às três da manhã de um domingo.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-4 py-1">
                <p className="font-body-md text-on-surface leading-relaxed font-medium">
                  Quanto mais inteligente o agente, mais importante se torna a qualidade dos dados que ele recebe.
                </p>
              </div>
            </div>
          </section>

          {/* REFLEXÕES PESSOAIS */}
          <section className="mb-24 md:mb-32 border-t border-white/5 pt-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">Algumas conclusões depois de construir tudo isso.</h3>
            <div className="space-y-8 text-on-surface-variant font-body-md italic border-l-4 border-white/10 pl-6">
              <p>"Integrar sistemas nunca foi a parte mais difícil. Difícil é entender o negócio que existe entre eles."</p>
              <div className="w-12 h-[1px] bg-white/10"></div>
              <p>"Hoje acredito que IA não substitui profissionais. Ela elimina o atrito entre processos."</p>
              <div className="w-12 h-[1px] bg-white/10"></div>
              <p>"A arquitetura certa economiza muito mais dinheiro do que escolher o modelo de linguagem mais recente."</p>
            </div>
          </section>

          {/* O NÃO-CTA */}
          <section className="mb-24 bg-surface-container-lowest border border-white/5 p-10 md:p-16 rounded-[2rem] flex flex-col items-center text-center gap-10">
            <div className="max-w-2xl font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-6">
              <p>Nós passamos os últimos dezoito meses transformando problemas operacionais em uma arquitetura que hoje funciona em produção.</p>
              <p className="text-primary font-medium">Se você quer e acredita que sua operação também pode evoluir dessa forma, clique no botão abaixo.</p>
            </div>
            <div className="flex flex-col items-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors shadow-lg whitespace-nowrap"
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
