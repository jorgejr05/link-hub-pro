import React from "react";
import Link from "next/link";

export default function FarmaciaPrincesaPitch() {
  return (
    <main className="w-full">
      {/* ── 00. HEADER MINIMALISTA ────────────────────────────────────────────── */}
      <header className="w-full px-6 py-6 flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <span className="font-semibold tracking-tight text-slate-800">Farmácia Princesa</span>
        </div>
        <div className="text-xs font-medium text-slate-400 tracking-widest uppercase">
          Projeto Estratégico
        </div>
      </header>

      {/* ── 01. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            Araçatuba • Birigui
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Farmácia Princesa <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
            + Inteligência Artificial
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          O primeiro ecossistema farmacêutico verdadeiramente preparado para a era da IA no interior paulista.
        </p>
      </section>

      {/* ── 02. O COMPORTAMENTO MUDOU ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O comportamento mudou.</h2>
          <p className="text-lg text-slate-500">Hoje o cliente não começa comprando. Ele começa perguntando.</p>
        </div>

        {/* Balões flutuantes */}
        <div className="relative max-w-3xl mx-auto h-[400px]">
          <div className="absolute top-0 left-[10%] bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl rounded-bl-sm shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[100ms]">
            <p className="text-sm font-medium text-slate-700">"qual remédio para dor de garganta"</p>
          </div>
          <div className="absolute top-[25%] right-[5%] bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl rounded-br-sm shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[300ms]">
            <p className="text-sm font-medium text-slate-700">"farmácia aberta agora"</p>
          </div>
          <div className="absolute top-[50%] left-[5%] bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl rounded-bl-sm shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[500ms]">
            <p className="text-sm font-medium text-slate-700">"onde comprar creatina"</p>
          </div>
          <div className="absolute top-[75%] right-[15%] bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl rounded-br-sm shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[700ms]">
            <p className="text-sm font-medium text-slate-700">"qual farmácia entrega agora"</p>
          </div>
          
          {/* Funil Central */}
          <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-1000 delay-[1000ms]">
            <div className="w-[1px] h-[300px] bg-gradient-to-b from-transparent via-emerald-300 to-emerald-500 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. HOJE VS AMANHÃ ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O Fim do Atrito</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">A comparação que vende praticamente sozinha.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* HOJE */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Como é Hoje</div>
              <div className="flex flex-col gap-4">
                {["Pessoa", "Google", "Lê vários sites", "Liga na farmácia", "Pergunta preço", "Espera resposta", "Compra"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-400">{i+1}</div>
                    <div className="text-slate-600 font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AMANHÃ */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-8">Como vai ser Amanhã</div>
              <div className="flex flex-col gap-5">
                {["Pessoa", "ChatGPT / Gemini / Perplexity", "Recomendação Estruturada", "Checkout Rápido", "Entrega"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-600 shadow-sm">{i+1}</div>
                    <div className="text-slate-800 font-semibold">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. A OPORTUNIDADE ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] border-[1px] border-emerald-500 rounded-full"></div>
          <div className="absolute w-[600px] h-[600px] border-[1px] border-emerald-400 rounded-full"></div>
          <div className="absolute w-[400px] h-[400px] border-[1px] border-emerald-300 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="material-symbols-outlined text-4xl text-emerald-400 mb-6">location_on</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Nossa Oportunidade</h2>
          <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6">
            10.000+
          </div>
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-4 max-w-2xl mx-auto">
            Pesquisas por medicamentos e sintomas acontecem todos os dias em Araçatuba e Birigui.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
            Hoje, praticamente NENHUMA é convertida através de IA.
          </div>
        </div>
      </section>

      {/* ── 05. O PROJETO PILOTO ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O Projeto Piloto</h2>
            <p className="text-lg text-slate-500">Execução cirúrgica dividida em 4 etapas claras.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Etapa 1", title: "Posicionamento", items: ["SEO Estruturado", "GEO (Generative Engine Optimization)", "AI Commerce Setup"], icon: "travel_explore" },
              { step: "Etapa 2", title: "Catálogo Inteligente", items: ["Integração com ERP", "Sincronização de Estoque", "Normalização de Produtos"], icon: "database" },
              { step: "Etapa 3", title: "Recomendação IA", items: ["Integração ChatGPT", "Indexação Gemini/Claude", "Busca Semântica"], icon: "smart_toy" },
              { step: "Etapa 4", title: "Checkout e Escala", items: ["Link de Pagamento", "Logística Automatizada", "Dashboard de Métricas"], icon: "shopping_cart_checkout" }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-slate-700 text-xl">{card.icon}</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{card.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. ARQUITETURA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">A Arquitetura de IA</h2>
            <p className="text-lg text-slate-500">Como os sistemas se comunicam em tempo real.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="flex flex-col items-center gap-2 w-full md:w-1/5">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">store</span>
                </div>
                <span className="text-xs font-bold text-slate-600">ERP da Farmácia</span>
              </div>

              <span className="material-symbols-outlined text-slate-300 md:rotate-270">arrow_right_alt</span>

              <div className="flex flex-col items-center gap-2 w-full md:w-1/5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-600">api</span>
                </div>
                <span className="text-xs font-bold text-emerald-700">Plugeefy MCP</span>
              </div>

              <span className="material-symbols-outlined text-slate-300 md:rotate-270">arrow_right_alt</span>

              <div className="flex flex-col items-center gap-2 w-full md:w-1/5">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-indigo-600">forum</span>
                </div>
                <span className="text-xs font-bold text-indigo-700">ChatGPT / Gemini</span>
              </div>

              <span className="material-symbols-outlined text-slate-300 md:rotate-270">arrow_right_alt</span>

              <div className="flex flex-col items-center gap-2 w-full md:w-1/5">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">person</span>
                </div>
                <span className="text-xs font-bold text-slate-800">Cliente (Checkout)</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 07. FEATURES & ROADMAP ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">O que será desenvolvido</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Catálogo Inteligente", "Busca Semântica", "Recomendação IA", "Dashboard Customizado", 
                "Métricas Avançadas", "Analytics", "Atendimento Integrado", "WhatsApp Automático", 
                "Observabilidade", "Automações Internas", "SEO Técnico", "GEO (AI Optimization)", 
                "AI Discovery", "Indexação Semântica", "Monitoramento Contínuo", "Relatórios de ROI"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[12px] text-emerald-700 font-bold">check</span>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Roadmap de Execução</h2>
            <div className="space-y-6">
              {[
                { month: "Mês 1", title: "Infraestrutura Base", desc: "Integração do catálogo e setup do MCP Server." },
                { month: "Mês 2", title: "Indexação e Visibilidade", desc: "Configuração SEO/GEO e submissão aos motores de busca." },
                { month: "Mês 3", title: "Atendimento IA", desc: "Testes e implementação do agente via WhatsApp." },
                { month: "Mês 4", title: "Otimizações e Escala", desc: "Análise de métricas, conversões e redução do CAC." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1"></div>
                    {i !== 3 && <div className="w-px h-full bg-slate-200 mt-2"></div>}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{step.month}</div>
                    <div className="text-lg font-bold text-slate-800 mb-1">{step.title}</div>
                    <div className="text-sm text-slate-500">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 08. DASHBOARD MOCKUPS ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Dashboard de Resultados</h2>
            <p className="text-lg text-slate-500">Métricas que realmente importam para o negócio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* KPI Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-emerald-500 mb-4">trending_up</span>
              <div className="text-sm font-medium text-slate-500 mb-1">Aquisição via IA</div>
              <div className="text-3xl font-black text-slate-900">+42%</div>
            </div>
            {/* KPI Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-blue-500 mb-4">shopping_bag</span>
              <div className="text-sm font-medium text-slate-500 mb-1">Medicamentos mais buscados</div>
              <div className="text-lg font-bold text-slate-900">1. Dipirona M. <br/>2. Neosoro</div>
            </div>
            {/* KPI Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-purple-500 mb-4">query_stats</span>
              <div className="text-sm font-medium text-slate-500 mb-1">Origem do Tráfego IA</div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between text-xs font-medium text-slate-600"><span>ChatGPT</span> <span>65%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-slate-800 h-1.5 rounded-full" style={{width: '65%'}}></div></div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-600 mt-2"><span>Gemini</span> <span>35%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '35%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09. POSICIONAMENTO E FECHAMENTO ──────────────────────────────────── */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-5xl text-emerald-400 mb-8 opacity-80">psychology</span>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 tracking-tight">
            Enquanto outras farmácias disputam clientes apenas quando eles já decidiram onde comprar, a <span className="text-emerald-400">Farmácia Princesa</span> poderá estar presente no momento em que a necessidade surge: durante a busca por informações, recomendações e soluções em assistentes de IA.
          </h2>

          <div className="w-px h-24 bg-gradient-to-b from-emerald-500 to-transparent mx-auto mb-12"></div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl inline-block text-left max-w-lg w-full backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-emerald-500 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Jorge Junior</div>
                <div className="text-sm font-medium text-emerald-400">Head de Inteligência Artificial</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Responsável pela estratégia, arquitetura de software e evolução contínua do ecossistema de IA da Farmácia Princesa. Não sou apenas um desenvolvedor; sou o arquiteto que fará essa visão se tornar realidade operacional.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
