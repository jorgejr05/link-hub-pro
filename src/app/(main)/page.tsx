import React from "react";
import Link from "next/link";

const whatsappUrl = "https://wa.me/5518988183746";

export const metadata = {
  title: "Laboratório de Engenharia | Jorge Gomes Jr.",
  description: "Construindo a próxima geração do comércio digital. Como problemas operacionais nos levaram a criar infraestruturas inteligentes.",
};

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-background text-on-background selection:bg-primary-container/30 selection:text-white pt-24 pb-24 md:pt-32">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-0">
          
          {/* HEADER / INTRO */}
          <header className="mb-20 md:mb-32">
            <h1 className="font-headline-xl text-4xl md:text-5xl text-primary leading-tight tracking-tight mb-8">
              Não começamos criando uma empresa de Inteligência Artificial.
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Tudo começou com uma pergunta que acreditávamos definir o futuro do comércio digital.
              A empresa, a arquitetura e a inteligência nasceram como uma consequência rigorosa dessa busca.
            </p>
          </header>

          {/* CAPÍTULO 1 */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Tudo começou com um problema simples.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>O atendimento parava quando o expediente terminava.</p>
              <p>Durante as noites, finais de semana e feriados, clientes continuavam chegando pelo WhatsApp e Instagram, mas a equipe comercial já não estava disponível. Não faltavam vendedores. Faltava uma operação que continuasse funcionando quando as pessoas saíssem da empresa.</p>
            </div>
          </section>

          {/* CAPÍTULO 2 */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Descobrimos que responder era a parte fácil.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>Quando começamos a automatizar o atendimento, percebemos que um agente não vende apenas respondendo perguntas.</p>
              <p>Ele precisa saber quem é o cliente, se já possui cadastro, consultar o ERP, encontrar o produto correto, calcular o frete, criar os pedidos e acompanhar todo o processo comercial.</p>
              <p>Foi nesse momento que a ficha caiu: não estávamos construindo um chatbot. Estávamos conectando toda a operação da empresa.</p>
            </div>
            
            {/* Fluxograma CSS: ERP -> Agent -> Cliente */}
            <div className="mt-8 border border-white/10 rounded-2xl bg-surface-container/30 p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 bg-surface-container border border-white/5 p-4 rounded-xl text-center">
                  <span className="block text-primary-container font-headline-md text-lg mb-1">Bling ERP</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Estoque & Clientes</span>
                </div>
                <div className="hidden md:flex text-primary-container/50 animate-pulse">
                  <span className="material-symbols-outlined">sync_alt</span>
                </div>
                <div className="flex-1 bg-primary-container/10 border border-primary-container/30 p-4 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary-container/5 animate-pulse"></div>
                  <span className="block text-primary font-headline-md text-lg mb-1 relative z-10">Agente Autônomo</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary-container relative z-10">LangGraph (Estado)</span>
                </div>
                <div className="hidden md:flex text-primary-container/50 animate-pulse">
                  <span className="material-symbols-outlined">sync_alt</span>
                </div>
                <div className="flex-1 bg-surface-container border border-white/5 p-4 rounded-xl text-center">
                  <span className="block text-[#25D366] font-headline-md text-lg mb-1">WhatsApp</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Cliente Final</span>
                </div>
              </div>
            </div>
          </section>

          {/* CAPÍTULO 3 */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Cada integração revelou um novo desafio.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>A integração com o Bling nos levou à logística.</p>
              <p>A logística nos levou aos pagamentos.</p>
              <p>Os pagamentos nos levaram ao CRM.</p>
              <p>O CRM nos levou aos canais de atendimento (WhatsApp e Instagram).</p>
              <p>Os canais nos tornaram Tech Providers oficiais da Meta.</p>
              <p>E a necessidade de interpretar todos esses dados nos levou aos Modelos de IA.</p>
              <p>Sem perceber, um simples projeto de automação havia se transformado em uma infraestrutura arquitetural completa.</p>
            </div>
          </section>

          {/* CAPÍTULO 4 */}
          <section className="mb-16 md:mb-24">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Uma nova forma de descoberta.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>Enquanto resolvíamos o atendimento, um novo comportamento começou a surgir no mercado.</p>
              <p>As pessoas deixaram de procurar produtos navegando em páginas de categorias de e-commerces. Elas começaram a perguntar diretamente para assistentes como ChatGPT, Gemini, e o AI Mode do Google.</p>
              <p>Se a IA se tornaria a nova porta de entrada para a compra, ela precisaria conversar nativamente com os dados reais das empresas. Foi aí que consolidamos o conceito de AI Commerce e criamos nosso servidor MCP (Model Context Protocol) nativo.</p>
            </div>

            {/* Terminal Log CSS */}
            <div className="mt-8 border border-white/10 rounded-2xl bg-[#0a0a0a] p-6 font-mono text-[11px] md:text-xs text-on-surface-variant overflow-x-auto shadow-inner">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-1">
                <p><span className="text-primary-container">➜</span> <span className="text-white">~/plugeefy</span> <span className="text-primary">npm run</span> mcp-server</p>
                <p className="text-white/40">[INFO] Iniciando Servidor MCP...</p>
                <p className="text-white/40">[INFO] Conectando ao cluster de banco de dados...</p>
                <p className="text-green-400">[SUCCESS] ERP Bling sincronizado (4.302 produtos)</p>
                <p className="text-white/40">[INFO] Expondo tools para Claude 3.5 Sonnet:</p>
                <p className="text-primary">  - get_product_stock(sku: string)</p>
                <p className="text-primary">  - create_order(customer_id: string, items: array)</p>
                <p className="text-green-400">[SUCCESS] Servidor rodando na porta 3001. Aguardando requests via LLM.</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </section>

          {/* CAPÍTULO 5 */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">Hoje, resolvemos o mesmo problema, só que em outra escala.</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>A <strong className="text-primary font-semibold">Plugeefy</strong> conecta ERPs, canais de atendimento, logística, pagamentos, modelos de IA e mecanismos de descoberta semântica em uma única infraestrutura coesa.</p>
              <p>O objetivo continua sendo o mesmo do primeiro dia: permitir que uma empresa continue vendendo, atendendo e crescendo, mesmo quando ninguém estiver operando as máquinas.</p>
            </div>
          </section>

          {/* TIMELINE (Minimalista) */}
          <section className="mb-24 md:mb-32 border-l border-white/10 pl-6 md:pl-8 space-y-12 py-4">
            <div className="relative">
              <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-background border-2 border-primary-container rounded-full"></div>
              <h4 className="text-sm font-label-caps text-on-surface-variant uppercase tracking-widest mb-4">A Evolução em 2025</h4>
              <ul className="space-y-3 font-body-md text-on-surface text-base">
                <li>Começamos estudando gargalos de AI Commerce</li>
                <li className="text-white/20">↓</li>
                <li>Primeiras integrações complexas com ERPs (Bling)</li>
                <li className="text-white/20">↓</li>
                <li>Sincronização de catálogo e estoques em tempo real</li>
                <li className="text-white/20">↓</li>
                <li>Tornamo-nos Tech Provider homologado da Meta</li>
                <li className="text-white/20">↓</li>
                <li>Implementação do primeiro Servidor MCP próprio</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[29px] md:-left-[37px] top-1 w-3 h-3 bg-background border-2 border-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
              <h4 className="text-sm font-label-caps text-primary uppercase tracking-widest mb-4">O Presente em 2026</h4>
              <ul className="space-y-3 font-body-md text-on-surface text-base">
                <li>Arquitetura em produção preparada para o AI Mode do Google</li>
                <li>Estrutura hibrida (Humanos + Agentes Autônomos via LangGraph)</li>
              </ul>
            </div>
          </section>

          {/* CONCLUSÕES */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-3xl text-primary mb-10">O que aprendemos construindo em produção.</h3>
            
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-2xl">
                <h4 className="font-label-md text-primary-container uppercase tracking-widest text-sm mb-3">1. IA não resolve processos ruins.</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Automatizar um gargalo apenas faz o erro acontecer mais rápido. Antes de escrever qualquer linha de código ou prompt, mapeamos como a operação realmente funciona. O modelo de IA é apenas uma peça do quebra-cabeça.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <h4 className="font-label-md text-primary-container uppercase tracking-widest text-sm mb-3">2. O maior desafio não é responder. É acessar os dados.</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Na prática, o verdadeiro desafio da Engenharia de IA está na qualidade dos dados, na estabilidade das integrações corporativas e na arquitetura que conecta tudo isso com segurança e isolamento.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <h4 className="font-label-md text-primary-container uppercase tracking-widest text-sm mb-3">3. A experiência começa muito antes da resposta.</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Uma arquitetura inteligente reduz atritos, organiza informações silenciosamente e permite que humanos e agentes artificiais trabalhem juntos no mesmo processo sem quebrar o fluxo da operação.
                </p>
              </div>
            </div>
          </section>

          {/* PESQUISA APLICADA */}
          <section className="mb-24 md:mb-32">
            <h3 className="font-headline-lg text-2xl text-primary mb-6">O que estamos explorando agora</h3>
            <div className="font-body-md text-base text-on-surface-variant leading-relaxed space-y-4">
              <p>Atualmente nossa pesquisa principal se debruça sobre como LLMs podem se tornar o <strong className="text-primary font-semibold">novo e definitivo canal de descoberta para produtos</strong>, permitindo que empresas e estoques sejam encontrados e transacionados diretamente dentro de assistentes conversacionais, sem precisar passar pela jornada de e-commerce tradicional.</p>
            </div>
          </section>

          {/* REFLEXÕES PESSOAIS */}
          <section className="mb-24 md:mb-32 border-t border-white/5 pt-16">
            <h3 className="font-headline-lg text-2xl text-primary mb-8">Notas do Arquiteto</h3>
            <div className="space-y-6 text-on-surface-variant font-body-md italic border-l-4 border-white/10 pl-6">
              <p>"Antes eu acreditava que integrar sistemas era a parte difícil. Hoje, acredito que entender o processo de negócio que roda nesses sistemas é muito mais complexo."</p>
              <p>"Descobri que a IA não veio para substituir pessoas de alto nível. Ela existe para eliminar o atrito entre pessoas e sistemas legados."</p>
              <p>"A arquitetura certa reduz muito mais custo e dor de cabeça do que simplesmente trocar para o modelo de linguagem mais recente."</p>
              <p className="pt-4 font-label-md not-italic text-sm text-primary uppercase tracking-widest">— Jorge Gomes Júnior</p>
            </div>
          </section>

          {/* O NÃO-CTA */}
          <section className="mb-24 bg-surface-container-lowest border border-white/5 p-10 md:p-16 rounded-[2rem] text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="font-headline-lg text-2xl text-primary mb-4">Está construindo algo parecido?</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-0">
                Ou acredita que a sua empresa já passou da hora de se beneficiar dessa nova infraestrutura de descoberta digital?
              </p>
            </div>
            <div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              >
                Vamos conversar
              </a>
              <p className="text-center text-[10px] text-on-surface-variant mt-3 uppercase tracking-widest">Sem compromisso.</p>
            </div>
          </section>

        </article>
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-10 border-t border-white/5 pt-10 flex justify-center items-center gap-6 relative z-10">
        <a href="https://www.instagram.com/ojorge.jr?igsh=MWdvejY1YXZ6aWpiag==" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-[#E1306C] transition-colors" title="Instagram">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-[#25D366] transition-colors" title="WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </footer>
    </>
  );
}
