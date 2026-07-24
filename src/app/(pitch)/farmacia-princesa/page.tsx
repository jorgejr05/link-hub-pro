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
            + de 10.000
          </div>
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-4 max-w-2xl mx-auto">
            Pesquisas por medicamentos e sintomas acontecem todos os dias em Araçatuba e Birigui.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
            Hoje, praticamente NENHUMA é convertida por recomendação estratégica.
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

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm overflow-x-auto">
            <div className="flex flex-col items-center min-w-[800px]">
              
              {/* Nível 1: ERP -> DB */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex flex-col items-center gap-2 w-40">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-slate-500">store</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 text-center">ERP da Farmácia<br/><span className="font-normal text-[10px]">Catálogo Primário</span></span>
                </div>
                <span className="material-symbols-outlined text-slate-300">arrow_right_alt</span>
                <div className="flex flex-col items-center gap-2 w-40">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-emerald-600">database</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 text-center">Banco de Dados<br/><span className="font-normal text-[10px]">Sincronização em Tempo Real</span></span>
                </div>
              </div>

              {/* Nível 2: Bifurcação (Indexação e IA) */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="w-[400px] h-px bg-slate-200"></div>
                <div className="flex justify-between w-[400px]">
                  <div className="w-px h-8 bg-slate-200"></div>
                  <div className="w-px h-8 bg-slate-200"></div>
                </div>
                
                <div className="flex justify-between w-[560px]">
                  <div className="flex flex-col items-center gap-2 w-40">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-blue-600">travel_explore</span>
                    </div>
                    <span className="text-xs font-bold text-blue-700 text-center">Motores de Busca<br/><span className="font-normal text-[10px]">Google, Bing (SEO/GEO)</span></span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-40">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-indigo-600">forum</span>
                    </div>
                    <span className="text-xs font-bold text-indigo-700 text-center">Inteligências Artificiais<br/><span className="font-normal text-[10px]">ChatGPT, Gemini (MCP)</span></span>
                  </div>
                </div>
              </div>

              {/* Nível 3: Cliente Final */}
              <div className="flex flex-col items-center">
                <div className="flex justify-between w-[400px]">
                  <div className="w-px h-8 bg-slate-200"></div>
                  <div className="w-px h-8 bg-slate-200"></div>
                </div>
                <div className="w-[400px] h-px bg-slate-200"></div>
                <div className="w-px h-8 bg-slate-200"></div>
                
                <div className="flex flex-col items-center gap-2 w-64">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-emerald-400">shopping_bag</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 text-center">Cliente Final<br/><span className="font-normal text-[10px] text-slate-500">Recomendação & Checkout Rápido</span></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* ── 08. DASHBOARD MOCKUPS ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Demanda em IAs <span className="inline-block px-2 py-1 bg-indigo-600 text-white text-[10px] uppercase tracking-wider rounded-md ml-2 align-middle">Tempo Real</span></h2>
              <p className="text-sm text-slate-500 max-w-2xl">Descubra exatamente como a farmácia está sendo recomendada pelos motores de IA, quais bairros lideram a demanda e quais canais convertem mais.</p>
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span> Todos Motores (IA)
              </div>
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span> Araçatuba / Birigui
              </div>
            </div>
          </div>

          {/* Top KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-500 font-medium mb-1 flex justify-between">Total de Buscas (IA) <span className="material-symbols-outlined text-indigo-500 text-[16px]">query_stats</span></div>
              <div className="text-3xl font-bold text-slate-900">4.208</div>
              <div className="text-xs text-emerald-500 mt-1 font-medium flex items-center"><span className="material-symbols-outlined text-[14px]">trending_up</span> +34% este mês</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-500 font-medium mb-1 flex justify-between">Bairro Mais Quente <span className="material-symbols-outlined text-orange-500 text-[16px]">local_fire_department</span></div>
              <div className="text-xl font-bold text-slate-900 mt-2">Jardim Nova York</div>
              <div className="text-xs text-slate-400 mt-1">Araçatuba, SP</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-500 font-medium mb-1 flex justify-between">Taxa de Conversão (IA) <span className="material-symbols-outlined text-blue-500 text-[16px]">ads_click</span></div>
              <div className="text-3xl font-bold text-slate-900">12.4%</div>
              <div className="text-xs text-slate-400 mt-1">Acima da média do varejo</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-emerald-500">
              <div className="text-xs text-slate-500 font-medium mb-1 flex justify-between">Canal Mais Acionado <span className="material-symbols-outlined text-emerald-500 text-[16px]">forum</span></div>
              <div className="text-2xl font-bold text-emerald-600 mt-1">WhatsApp</div>
              <div className="text-xs text-emerald-600 mt-1 font-medium">68% das conversões</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Chart placeholder / Map */}
            <div className="md:col-span-2 bg-slate-900 rounded-xl border border-slate-800 shadow-sm p-6 relative overflow-hidden h-[400px]">
              <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center gap-2 text-white font-medium mb-1"><span className="material-symbols-outlined text-emerald-400">location_on</span> Mapa de Calor Local</div>
                <div className="text-xs text-slate-400">Concentração de pesquisas convertidas por região.</div>
              </div>
              
              {/* Abstract Map Nodes */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className="relative w-[300px] h-[200px]">
                  {/* Araçatuba Center */}
                  <div className="absolute top-[40%] left-[30%] w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-[45%] left-[35%] w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399] border-2 border-slate-900"></div>
                  <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf] border-2 border-slate-900"></div>
                  
                  {/* Birigui Center */}
                  <div className="absolute top-[60%] right-[20%] w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
                  <div className="absolute top-[65%] right-[25%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] border-2 border-slate-900"></div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 300 200">
                    <path d="M110,95 L140,75 L215,130" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex gap-4 text-[10px] uppercase font-bold text-slate-400">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Alta Demanda</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-400"></div> Demanda Média</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Expansão</div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 font-medium text-slate-900 mb-1">
                <span className="material-symbols-outlined text-indigo-500 text-[18px]">inventory_2</span>
                Top Medicamentos
              </div>
              <div className="text-xs text-slate-500 mb-6">Mais mencionados em respostas do ChatGPT e Gemini.</div>
              
              <div className="flex flex-col gap-4 flex-1">
                {[
                  { name: "Dipirona Monoidratada 1g", stock: "145 unid.", price: "R$ 8,90", tag: "Alta Recomendação" },
                  { name: "Neosoro Solução Nasal", stock: "89 unid.", price: "R$ 6,50", tag: "Alta Recomendação" },
                  { name: "Vitamina C Targifor C", stock: "32 unid.", price: "R$ 24,90", tag: "Média Recomendação" },
                  { name: "Creatina Creapure 300g", stock: "12 unid.", price: "R$ 119,90", tag: "Ticket Alto" },
                ].map((prod, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="text-xs font-bold text-slate-400 mt-0.5">{i+1}.</div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">{prod.name}</div>
                        <div className="text-[10px] text-slate-500">Estoque: {prod.stock} • {prod.price}</div>
                      </div>
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md whitespace-nowrap">
                      {prod.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search Log Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 font-medium text-slate-900 mb-1">
                  <span className="material-symbols-outlined text-purple-500 text-[18px]">search_insights</span>
                  Intenções de Busca em Tempo Real
                </div>
                <div className="text-xs text-slate-500">Lista detalhada das perguntas que acionaram a farmácia.</div>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input type="text" placeholder="Filtrar intenção..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 w-64" />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-medium">
                  <tr>
                    <th className="px-6 py-4 border-b border-slate-100">Pergunta do Usuário (IA)</th>
                    <th className="px-6 py-4 border-b border-slate-100">Motor / IA</th>
                    <th className="px-6 py-4 border-b border-slate-100">Bairro</th>
                    <th className="px-6 py-4 border-b border-slate-100 text-right">Impressões</th>
                    <th className="px-6 py-4 border-b border-slate-100">Intenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { q: `"farmácia aberta agora entrega no Jd. Nova York"`, engine: "ChatGPT", loc: "Araçatuba (Nova York)", imp: 142, int: "Urgência (Checkout)" },
                    { q: `"qual o genérico do roacutan tem em estoque?"`, engine: "Gemini", loc: "Birigui (Centro)", imp: 89, int: "Informativa" },
                    { q: `"comprar fralda pampers tamanho M promoção"`, engine: "Google AI", loc: "Araçatuba (Ipanema)", imp: 215, int: "Preço / Oferta" },
                    { q: `"remédio para cólica bebê mais recomendado"`, engine: "Perplexity", loc: "Birigui (Silvares)", imp: 56, int: "Recomendação" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-700">{row.q}</td>
                      <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${row.engine === 'ChatGPT' ? 'bg-emerald-500' : row.engine === 'Gemini' ? 'bg-blue-500' : row.engine === 'Perplexity' ? 'bg-slate-800' : 'bg-red-500'}`}></div>
                        {row.engine}
                      </td>
                      <td className="px-6 py-4 text-slate-500">{row.loc}</td>
                      <td className="px-6 py-4 text-slate-600 text-right font-mono">{row.imp}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] uppercase font-bold tracking-wider">{row.int}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
