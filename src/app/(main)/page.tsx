import Link from "next/link";

export default function Home() {
  const whatsappMsg = encodeURIComponent("Olá, Jorge! Gostaria de agendar um diagnóstico de IA para minha empresa.");
  const whatsappUrl = `https://wa.me/5518988183746?text=${whatsappMsg}`;

  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* ── Hero Section ────────────────────────── */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32">
        <div className="absolute inset-0 bg-gradient-aurora z-[-1]"></div>
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 md:mb-6 leading-[1.1] uppercase tracking-tight">
            Sua empresa <span className="neon-text">já tem dados.</span><br />
            Nós os transformamos em vantagem competitiva.
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-on-surface-variant mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Ajudamos empresas a crescer utilizando Inteligência Artificial aplicada aos seus processos. Identificamos onde a IA realmente gera retorno e construímos soluções integradas ao seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 sm:px-0">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-xs md:text-sm font-bold uppercase tracking-widest hover:neon-glow transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-base md:text-xl" data-icon="rocket_launch">rocket_launch</span>
              Solicitar Diagnóstico Estratégico
            </a>
            <a 
              href="#cases" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full glass-panel text-primary font-label-md text-xs md:text-sm font-bold uppercase tracking-widest hover:text-primary-container hover:neon-border transition-all duration-300"
            >
              Ver Casos de Sucesso
            </a>
          </div>
        </div>
      </section>

      {/* ── Section Nova: Posicionamento e Transformação ─────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-headline-md text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
            Não vendemos ferramentas de IA. Projetamos <span className="neon-text">arquiteturas personalizadas</span> que resolvem problemas reais de negócio, integrando dados, sistemas e processos para gerar retorno mensurável.
          </p>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-primary uppercase leading-tight">
            A IA só faz sentido quando <br className="hidden md:block" /> resolve um <span className="neon-text">problema real</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Redução de Custos", icon: "trending_down", desc: "Automatização de tarefas repetitivas que drenam tempo e dinheiro." },
            { title: "Automação Operacional", icon: "precision_manufacturing", desc: "Processos escaláveis operando 24/7 sem intervenção humana." },
            { title: "Aumento de Receita", icon: "payments", desc: "Vendas ativas, catálogo inteligente e conversão automatizada." },
            { title: "Decisões Inteligentes", icon: "lightbulb", desc: "Integração do seu ERP com IA para insights estratégicos reais." },
          ].map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 md:p-8 hover:neon-glow transition-all duration-300 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon={item.icon}>{item.icon}</span>
              <h3 className="font-headline-md text-base text-primary font-bold mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 01: Dores Universais & Solução ─────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <span className="font-label-caps text-[10px] md:text-[11px] text-primary-container uppercase tracking-widest">O Cenário Atual</span>
            <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-primary uppercase mt-2 mb-4 md:mb-6 leading-tight">
              Por que tantos projetos de IA <span className="neon-text">fracassam?</span>
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Muitas empresas compram ferramentas genéricas de Inteligência Artificial esperando milagres, mas acabam com <strong>soluções desconectadas</strong> que não falam com seus sistemas internos e não geram retorno financeiro.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                { icon: "close", text: "Gargalos operacionais com tarefas repetitivas e manuais." },
                { icon: "close", text: "Dúvidas sobre qual modelo usar (ChatGPT, Gemini, Claude)." },
                { icon: "close", text: "Medo de custos ocultos e escalabilidade não planejada." },
                { icon: "close", text: "Dificuldade em integrar IA com ERPs e sistemas legados." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-on-surface-variant text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-400 text-base md:text-lg flex-shrink-0" data-icon={item.icon}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-container neon-glow" />
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-container mb-4 md:mb-6 block" data-icon="architecture">architecture</span>
            <h3 className="font-headline-md text-lg md:text-xl text-primary font-bold mb-3 md:mb-4">Como trabalhamos</h3>
            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Projetamos soluções de IA escaláveis para resolver problemas reais de negócio. Combinamos arquitetura de software, integrações corporativas e automação inteligente para construir plataformas resilientes, preparadas para crescer junto com sua empresa.
            </p>
            <div className="flex items-center gap-2 text-primary-container font-label-caps text-[10px] md:text-[11px] uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
              ROI Maximizado &amp; Riscos Minimizados
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 02: Nossa Metodologia ────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32">
        <div className="text-center mb-10 md:mb-16">
          <span className="font-label-caps text-[10px] md:text-[11px] text-primary-container uppercase tracking-widest">Como Trabalhamos</span>
          <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-primary uppercase mt-2">
            Metodologia <span className="neon-text">Consultiva</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              step: "01",
              title: "Diagnóstico e Descoberta",
              desc: "Mergulhamos na sua operação para entender gargalos, processos e fluxos de dados. Identificamos os casos de uso onde a IA trará o maior ROI no menor tempo.",
              icon: "search_insights"
            },
            {
              step: "02",
              title: "Seleção e Arquitetura",
              desc: "Desenhamos a solução sob medida. Escolhemos o LLM ideal para o seu caso (custo vs. performance) e arquitetamos os padrões corretos (RAG, Agentes, MCP Servers, Integrações).",
              icon: "design_services"
            },
            {
              step: "03",
              title: "Desenvolvimento e Integração",
              desc: "Mão na massa. Construímos a solução com stacks modernas, conectamos com seus sistemas (ERPs, CRMs) e entregamos uma operação autônoma e escalável.",
              icon: "terminal"
            }
          ].map((item) => (
            <div key={item.step} className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 relative group transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary-container text-lg md:text-xl" data-icon={item.icon}>{item.icon}</span>
              </div>
              <h3 className="text-primary font-headline-md text-base md:text-lg font-bold mb-2 md:mb-3 relative z-10">{item.title}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Prova Social / Números ────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-0 bg-primary-container/5 blur-3xl"></div>
          
          <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0">
            <span className="text-4xl md:text-5xl lg:text-6xl text-primary-container font-headline-xl font-bold mb-2">3</span>
            <span className="text-on-surface-variant font-label-caps uppercase tracking-widest text-xs md:text-sm">Produtos Proprietários</span>
          </div>

          <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pl-8">
            <span className="text-4xl md:text-5xl lg:text-6xl text-primary-container font-headline-xl font-bold mb-2">12+</span>
            <span className="text-on-surface-variant font-label-caps uppercase tracking-widest text-xs md:text-sm">Integrações</span>
          </div>

          <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center md:items-start md:pl-8">
            <span className="text-4xl md:text-5xl lg:text-6xl text-primary-container font-headline-xl font-bold mb-2">100%</span>
            <span className="text-on-surface-variant font-label-caps uppercase tracking-widest text-xs md:text-sm">Arquiteturas Personalizadas</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-70">
          {["Especialista em:", "IA Generativa", "LLMs", "Protocolo MCP", "Sistemas RAG", "Integrações ERP", "Automação B2B", "Search & SEO"].map((tag, i) => (
            <span key={i} className={`text-xs md:text-sm ${i === 0 ? 'text-on-surface-variant font-semibold' : 'px-3 py-1 bg-surface-container border border-white/5 rounded-full text-on-surface'}`}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Section 03: Casos de Sucesso ────────── */}
      <section id="cases" className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <div className="mb-10 md:mb-16">
          <span className="font-label-caps text-[10px] md:text-[11px] text-primary-container uppercase tracking-widest">Prova Técnica</span>
          <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-primary mt-2 mb-3 md:mb-4 uppercase">
            O que já <span className="neon-text">construímos</span>
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Nosso ecossistema proprietário comprova nossa capacidade de projetar e executar arquiteturas complexas em diferentes nichos e modelos de negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Plugeefy Card (Destacado) */}
          <div className="md:col-span-12 glass-panel glass-panel-hover rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-12 relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-container/5 rounded-full blur-[100px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
              <div className="flex flex-col h-full justify-center">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 rounded-full bg-primary-container/10 text-primary-container border border-primary-container/30 font-label-caps text-[9px] md:text-[10px] uppercase tracking-widest">
                    Ecossistema/Saas B2B
                  </span>
                  <span className="px-2 md:px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-white/5 font-label-caps text-[9px] md:text-[10px] uppercase tracking-widest">
                    Em Produção 🟢
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-primary font-bold mb-3 md:mb-4 uppercase">Plugeefy AI Commerce</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-lg">
                  É uma infraestrutura de IA voltada ao comércio digital. Sua arquitetura integra ERPs, modelos globais de LLM, um servidor MCP proprietário, canais de atendimento, logística e gateways de pagamento, permitindo que Agentes de IA executem jornadas completas de suporte, vendas e pós-venda.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/case-study/plugeefy"
                    className="inline-flex items-center gap-2 font-label-md bg-primary-container text-on-primary-container px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest text-[10px] md:text-[11px]"
                  >
                    Ver Caso de Uso <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  </Link>
                  <Link
                    href="/architecture"
                    className="inline-flex items-center gap-2 font-label-md glass-panel text-primary px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest text-[10px] md:text-[11px]"
                  >
                    Ver Arquitetura
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-center items-end opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-surface/50 p-6 lg:p-8 text-xs md:text-sm leading-relaxed">
                  <div className="mb-4">
                    <h4 className="font-headline-md text-primary mb-3 text-sm uppercase tracking-widest">Escopo de Solução</h4>
                    <ul className="space-y-2 text-on-surface-variant">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> ERP integrado bidirecionalmente</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> Catálogo inteligente consultável via LLMs</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> Atendimento e suporte automatizado</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> IA autônoma para jornadas de vendas</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-headline-md text-primary mb-2 text-sm uppercase tracking-widest">Resultado Esperado</h4>
                    <p className="text-primary-container font-bold text-sm">Redução drástica de processos manuais. Escalabilidade comercial sem aumento de equipe. Estoque preparado para a era da IA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ju AI Card */}
          <div className="md:col-span-8 glass-panel glass-panel-hover rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-12 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary-container/5 rounded-full blur-[80px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 md:mb-12">
                <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-primary font-bold uppercase">Ju AI</h3>
                <span className="px-2 md:px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-white/5 font-label-caps text-[9px] md:text-[10px] uppercase tracking-widest">
                  Content &amp; SEO
                </span>
              </div>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-5 md:mb-8 max-w-md">
                Assistente inteligente para curadoria de conteúdo e estratégias de SEO estruturado. Otimiza o posicionamento de marcas combinando análises profundas de dados e geração de linguagem natural.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-md text-primary-container uppercase tracking-widest text-[10px] md:text-[11px] hover:text-primary transition-colors"
                href="https://ju-ai2026.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Explorar Solução <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* GravaPro AI Card */}
          <div className="md:col-span-4 glass-panel glass-panel-hover rounded-[24px] md:rounded-[32px] p-6 md:p-8 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-primary-container/5 rounded-full blur-[60px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-3xl md:text-4xl text-primary-container mb-4 md:mb-6 block"
                data-icon="mic"
              >
                mic
              </span>
              <h3 className="font-headline-md text-base md:text-xl text-primary font-bold mb-2 md:mb-3 uppercase">GravaPro AI</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                Plataforma voltada para automação audiovisual. Setup perfeito e edição inteligente utilizando processamento distribuído.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-md text-outline uppercase tracking-widest text-[10px] hover:text-primary transition-colors mt-auto"
                href="https://gravaproai.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Ver Plataforma <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 04: Final CTA ────────────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="glass-panel rounded-[28px] md:rounded-[40px] p-8 md:p-14 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-aurora opacity-10 mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-primary-container/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-primary uppercase mb-4 md:mb-6 leading-tight">
              Qual <span className="neon-text">desafio</span> vamos<br className="hidden sm:block"/> resolver juntos?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-on-surface-variant mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Toda empresa possui gargalos que limitam seu crescimento. Nosso trabalho é identificar esses desafios e projetar uma arquitetura de IA capaz de automatizar processos, integrar sistemas e gerar resultados mensuráveis para o seu negócio.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 px-7 py-4 md:px-10 md:py-5 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm md:text-base font-bold uppercase tracking-widest hover:neon-glow hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg md:text-xl" data-icon="search_insights">search_insights</span>
              Receber Diagnóstico da Operação
            </a>
          </div>
        </div>
      </section>

    </main>
      
      {/* ── Footer ────────────────────────────────────── */}
      <footer className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-10 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-on-surface-variant text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Jorge Júnior. Todos os direitos reservados.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/jorgejr05" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm uppercase tracking-widest font-label-md">GitHub</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm uppercase tracking-widest font-label-md">WhatsApp</a>
          <a href="mailto:contato@jorgejr.site" className="text-on-surface-variant hover:text-primary transition-colors text-xs md:text-sm uppercase tracking-widest font-label-md">E-mail</a>
        </div>
      </footer>
    </>
  );
}
