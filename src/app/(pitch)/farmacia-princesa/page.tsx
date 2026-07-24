import React from "react";
import Link from "next/link";

export default function FarmaciaPrincesaPitch() {
  return (
    <main className="w-full bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* ── 01. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
          Transformando buscas <br className="hidden md:block" /> em clientes.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 font-light">
          A aquisição de clientes para a Farmácia Princesa através do Google, motores de buscas e modelos de IAs.
        </p>
      </section>

      {/* ── 02. O COMPORTAMENTO MUDOU & O PROBLEMA ───────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              O comportamento mudou<span className="text-red-500">.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-2 font-medium">Hoje o cliente não começa comprando.</p>
            <p className="text-xl font-bold text-indigo-500 relative inline-block">
              Ele começa perguntando.
              <svg className="absolute -bottom-3 left-0 w-full h-3 text-indigo-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Column: O Problema */}
            <div className="lg:col-span-4 bg-[#fff9f9] border border-red-100 rounded-3xl p-8 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-red-700">report</span>
                <h3 className="text-2xl font-bold text-red-800">O Problema</h3>
              </div>
              <p className="text-slate-600 mb-8 font-medium">Todos os dias, milhares de pessoas pegam o celular e pesquisam antes de comprar.</p>
              
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "qual remédio para dor de garganta",
                  "farmácia aberta agora",
                  "onde comprar creatina",
                  "farmácia entrega no meu bairro"
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                    <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                    <span className="text-xs font-medium text-slate-600">"{q}"</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-sm text-slate-600 font-medium mb-4">
                  Mas a Farmácia Princesa só participa da conversa quando o cliente <span className="text-red-700 font-bold underline decoration-red-300 underline-offset-4">já decidiu</span> entrar em contato.
                </p>
                <p className="text-base font-bold text-red-700">
                  Estamos deixando oportunidades na mesa.
                </p>
              </div>
            </div>

            {/* Right Column: Jornada atual */}
            <div className="lg:col-span-8 bg-white border border-slate-200 border-dashed rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-12">
                <span className="material-symbols-outlined text-indigo-500 text-sm">person</span>
                <span className="text-sm font-semibold text-slate-700">Jornada atual do cliente</span>
              </div>

              <div className="relative">
                {/* Flowchart container */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-20 relative z-10">
                  {/* Arrows connecting boxes (desktop) */}
                  <div className="hidden md:flex absolute top-[35%] left-[20%] w-[60%] items-center justify-between -z-10 text-slate-400">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                  
                  {[
                    { step: 1, icon: "smartphone", title: "1. Surge a dúvida", desc: "O cliente tem uma necessidade ou sintoma.", color: "bg-[#f8f9ff] border-indigo-100", iconColor: "text-indigo-500 bg-white border-indigo-100" },
                    { step: 2, icon: "search", title: "2. Ele pesquisa", desc: "Vai ao Google e busca respostas, soluções e lojas.", color: "bg-[#f8f9ff] border-indigo-100", iconColor: "text-indigo-500 bg-white border-indigo-100" },
                    { step: 3, icon: "chat_bubble", title: "3. Compara opções", desc: "Analisa informações, preços, avaliações e locais.", color: "bg-[#f8f9ff] border-indigo-100", iconColor: "text-indigo-500 bg-white border-indigo-100" },
                    { step: 4, icon: "shopping_bag", title: "4. Decide e compra", desc: "Escolhe onde comprar e só então entra em contato ou visita.", color: "bg-[#fff9f9] border-red-100", iconColor: "text-red-500 bg-white border-red-100" },
                  ].map((item, i) => (
                    <div key={i} className={`flex-1 rounded-2xl border p-5 ${item.color} shadow-sm bg-opacity-80 backdrop-blur-sm z-10`}>
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-4 ${item.iconColor}`}>
                        <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Connection Lines Down */}
                <div className="hidden md:block absolute top-[110px] left-[15%] w-[45%] h-24 border-b border-l border-r border-dashed border-amber-300 rounded-b-xl -z-10"></div>
                <div className="hidden md:block absolute top-[110px] left-[37.5%] w-0 h-24 border-l border-dashed border-amber-300 -z-10"></div>

                {/* Onde estamos perdendo Box */}
                <div className="max-w-xl mx-auto bg-[#fffbf2] border border-[#fce6a8] rounded-xl p-4 flex items-start gap-4 shadow-sm relative z-10">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white flex items-center justify-center border border-amber-200 mt-1">
                    <span className="material-symbols-outlined text-amber-500 text-sm">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm mb-1">Onde estamos perdendo:</h4>
                    <p className="text-[12px] text-amber-800 font-medium">Se não estamos presentes nas etapas 1, 2 e 3, o cliente nem sabe que a Farmácia Princesa existe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Nossa Oportunidade */}
          <div className="mt-6 bg-[#f2fbf6] border border-[#d1f4e0] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 w-full md:w-5/12">
              <div className="w-12 h-12 rounded-full bg-[#a7f3d0] flex flex-shrink-0 items-center justify-center border border-[#6ee7b7]">
                <span className="material-symbols-outlined text-2xl text-emerald-700">adjust</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-800 mb-0.5">Nossa oportunidade</h3>
                <p className="text-[12px] text-slate-600 font-medium">Estar presente nas buscas, responder com autoridade e ser a escolha óbvia quando ele decidir comprar.</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-emerald-200/50 hidden md:block"></div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between w-full md:w-6/12">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 bg-white border border-emerald-100 p-1.5 rounded-full text-[16px]">search</span>
                <span className="text-[11px] font-semibold text-slate-600 leading-tight">Aparecer nas<br/>buscas certas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 bg-white border border-emerald-100 p-1.5 rounded-full text-[16px]">chat</span>
                <span className="text-[11px] font-semibold text-slate-600 leading-tight">Responder com<br/>conteúdo útil</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 bg-white border border-emerald-100 p-1.5 rounded-full text-[16px]">group</span>
                <span className="text-[11px] font-semibold text-slate-600 leading-tight">Construir confiança<br/>e relacionamento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. HOJE VS AMANHÃ ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              O Fim do Atrito<span className="text-emerald-500">.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">A evolução natural da jornada de compra.</p>
            
            {/* Top decorative icons with dashed line */}
            <div className="flex items-center justify-center mt-12 gap-8 max-w-sm mx-auto relative">
              <div className="absolute top-1/2 left-0 w-full h-px border-b border-dashed border-slate-300 -z-10 -translate-y-1/2"></div>
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-slate-400 text-sm">shopping_cart</span>
              </div>
              <div className="flex-1"></div>
              <div className="w-10 h-10 bg-white border border-emerald-200 rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
              </div>
              <div className="flex-1"></div>
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="material-symbols-outlined text-white">favorite</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* COMO É HOJE */}
            <div className="bg-white rounded-[32px] border border-slate-200 p-8 flex flex-col shadow-sm relative">
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Como é Hoje</h3>
                <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-slate-500 text-sm">schedule</span>
                  <span className="text-[11px] font-semibold text-slate-600">Jornada longa e com atrito</span>
                </div>
              </div>

              <div className="relative flex-1 mb-8">
                {/* Vertical dashed line */}
                <div className="absolute top-4 bottom-4 left-4 w-px border-l border-dashed border-slate-200 -z-10"></div>
                
                <div className="flex flex-col gap-5">
                  {[
                    { i: 1, icon: "person", title: "Pessoa", desc: "Início da necessidade", iconColor: "text-slate-600" },
                    { i: 2, icon: "search", title: "Google", desc: "Busca por informações", iconColor: "text-blue-500" },
                    { i: 3, icon: "language", title: "Lê vários sites", desc: "Muitas abas e conteúdos", iconColor: "text-slate-600" },
                    { i: 4, icon: "location_on", title: "Liga na farmácia", desc: "Tempo de espera", iconColor: "text-slate-600" },
                    { i: 5, icon: "payments", title: "Pergunta preço", desc: "Falta de clareza", iconColor: "text-slate-600" },
                    { i: 6, icon: "schedule", title: "Espera resposta", desc: "Mais tempo perdido", iconColor: "text-slate-600" },
                    { i: 7, icon: "local_mall", title: "Compra", desc: "Processo cansativo", iconColor: "text-slate-600" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white pr-2">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 flex-shrink-0">
                        {step.i}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className={`material-symbols-outlined text-[20px] ${step.iconColor}`}>{step.icon}</span>
                      </div>
                      <div className="flex-1 flex justify-between items-center text-sm">
                        <span className="font-bold text-slate-800">{step.title}</span>
                        <span className="text-[11px] text-slate-400 font-medium text-right">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red Warning Box */}
              <div className="mt-auto bg-[#fff9f9] border border-red-100 rounded-xl p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 bg-white rounded-full text-[20px] shadow-sm">error</span>
                <div>
                  <h4 className="font-bold text-red-800 text-sm mb-0.5">Muitas fricções. Mais abandono.</h4>
                  <p className="text-[11px] text-red-600 font-medium">Cada etapa é uma chance de o cliente desistir.</p>
                </div>
              </div>
            </div>

            {/* COMO VAI SER AMANHÃ */}
            <div className="bg-white rounded-[32px] border-2 border-emerald-400 p-8 flex flex-col shadow-[0_8px_30px_rgba(16,185,129,0.1)] relative">
              <div className="mb-8">
                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Como Vai Ser Amanhã</h3>
                <div className="inline-flex items-center gap-2 bg-[#f2fbf6] border border-[#d1f4e0] px-4 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-emerald-500 text-sm">bolt</span>
                  <span className="text-[11px] font-semibold text-emerald-700">Jornada fluida e sem atrito</span>
                </div>
              </div>

              <div className="relative flex-1 mb-8">
                {/* Vertical solid line */}
                <div className="absolute top-4 bottom-4 left-4 w-px bg-emerald-200 -z-10"></div>
                
                <div className="flex flex-col justify-between h-full py-2">
                  {[
                    { i: 1, icon: "person", title: "Pessoa", desc: "A necessidade continua sendo o ponto de partida.", badge: "Foco no que importa", badgeIcon: "target", iconColor: "text-blue-500" },
                    { i: 2, icon: "auto_awesome", title: "ChatGPT / Gemini / Perplexity", desc: "O cliente já recebe respostas na conversa.", badge: "Resposta imediata", badgeIcon: "bolt", iconColor: "text-indigo-500" },
                    { i: 3, icon: "star", title: "Recomendação Estruturada", desc: "Opções personalizadas e confiáveis.", badge: "Confiança e clareza", badgeIcon: "verified_user", iconColor: "text-blue-600" },
                    { i: 4, icon: "shopping_cart", title: "Checkout Rápido", desc: "Poucos cliques para finalizar.", badge: "Agilidade total", badgeIcon: "rocket_launch", iconColor: "text-emerald-500" },
                    { i: 5, icon: "local_shipping", title: "Entrega", desc: "Rápida, rastreável e sem complicação.", badge: "Satisfação garantida", badgeIcon: "favorite", iconColor: "text-emerald-500" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white pr-2 my-2">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-600 flex-shrink-0">
                        {step.i}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className={`material-symbols-outlined text-[20px] ${step.iconColor}`}>{step.icon}</span>
                      </div>
                      <div className="flex-1 flex justify-between items-center text-sm gap-2">
                        <div className="w-48">
                          <div className="font-bold text-slate-800 leading-tight">{step.title}</div>
                          <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{step.desc}</div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full text-[10px] font-bold text-emerald-700 whitespace-nowrap">
                          <span className="material-symbols-outlined text-[12px]">{step.badgeIcon}</span>
                          {step.badge}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Green Success Box */}
              <div className="mt-auto bg-[#f2fbf6] border border-[#d1f4e0] rounded-xl p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-white bg-emerald-400 rounded-full text-[20px] shadow-sm p-1">star</span>
                <div>
                  <h4 className="font-bold text-emerald-800 text-sm mb-0.5">Menos atrito. Mais conexão.</h4>
                  <p className="text-[11px] text-emerald-600 font-medium">Uma jornada simples, inteligente e feita para o cliente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Resultado */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 w-full md:w-5/12">
              <div className="w-12 h-12 rounded-full bg-[#f2fbf6] border border-[#d1f4e0] flex flex-shrink-0 items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-emerald-500">trending_up</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-emerald-800 mb-0.5">Resultado: mais conversão, mais fidelização.</h3>
                <p className="text-[11px] text-slate-500 font-medium">Menos barreiras, mais valor em cada etapa da jornada.</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-slate-200 hidden md:block"></div>

            <div className="flex justify-between w-full md:w-6/12 gap-2">
              {[
                { icon: "person", title: "Experiência\nque encanta" },
                { icon: "schedule", title: "Tempo\nque importa" },
                { icon: "verified_user", title: "Confiança\nque permanece" },
                { icon: "bar_chart", title: "Resultados\nque crescem" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined bg-[#f2fbf6] border border-[#d1f4e0] p-1.5 rounded-full text-[14px] text-emerald-600">{item.icon}</span>
                  <span className="text-[9px] font-bold text-slate-600 leading-tight whitespace-pre-line">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. POSICIONAMENTO ESTRATÉGICO ───────────────────────────────────── */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight font-serif">
            "Enquanto outras farmácias disputam clientes apenas quando eles já decidiram onde comprar, a Farmácia Princesa poderá estar presente no momento exato em que a necessidade surge: durante a busca por informações e recomendações em IAs."
          </h2>
        </div>
      </section>

      {/* ── 05. A OPORTUNIDADE ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">A Oportunidade</h2>
          <div className="text-5xl md:text-7xl font-black text-slate-200 mb-6">
            Milhares de pesquisas
          </div>
          <p className="text-xl md:text-2xl font-light text-slate-600 mb-8 max-w-2xl mx-auto">
            relacionadas a medicamentos, saúde e farmácias acontecem todos os dias em Araçatuba e Birigui.
          </p>
          <div className="inline-block px-6 py-3 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider text-sm">
            Hoje, praticamente NENHUMA é convertida por recomendação estratégica.
          </div>
        </div>
      </section>

      {/* ── 06. O PROJETO PILOTO ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O Projeto Piloto</h2>
            <p className="text-lg text-slate-500 font-light">Execução dividida em 4 etapas claras.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Etapa 1", title: "Posicionamento", items: ["SEO Estruturado", "GEO (Engine Optimization)", "AI Commerce Setup"] },
              { step: "Etapa 2", title: "Catálogo", items: ["Integração com ERP", "Sincronização", "Normalização de Dados"] },
              { step: "Etapa 3", title: "Recomendação", items: ["Integração ChatGPT", "Indexação Gemini/Claude", "Busca Semântica"] },
              { step: "Etapa 4", title: "Checkout", items: ["Link de Pagamento", "Logística Automatizada", "Métricas"] }
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{card.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07. POR QUE A FARMÁCIA PRINCESA? ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Por que começar pela Farmácia Princesa?</h2>
            <p className="text-lg text-slate-500 font-light">O momento exato para capturar a liderança tecnológica local.</p>
          </div>
          
          <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
            <ul className="space-y-6">
              {[
                "Marca consolidada na região",
                "Presença física em Araçatuba e Birigui",
                "Capacidade logística já existente",
                "Estoque amplo e diversificado",
                "Potencial para se tornar referência nacional em aquisição de clientes através de IA"
              ].map((reason, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  </div>
                  <span className="text-xl md:text-2xl text-slate-800 font-light leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 08. DASHBOARD MOCKUPS ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-widest">Painel de Métricas (Projeção)</h2>
              <p className="text-sm text-slate-500 max-w-2xl font-light">Exemplo ilustrativo para demonstrar o potencial estratégico de dados. Acompanhe demanda, conversão e origem.</p>
            </div>
          </div>

          {/* Top KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 opacity-70 pointer-events-none">
            <div className="bg-white p-5 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Total de Buscas (IA)</div>
              <div className="text-3xl font-bold text-slate-900">4.208</div>
            </div>
            <div className="bg-white p-5 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Bairro Mais Quente</div>
              <div className="text-xl font-bold text-slate-900 mt-2">Jardim Nova York</div>
            </div>
            <div className="bg-white p-5 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Taxa de Conversão</div>
              <div className="text-3xl font-bold text-slate-900">12.4%</div>
            </div>
            <div className="bg-slate-900 p-5 border border-slate-900 text-white">
              <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Canal Principal</div>
              <div className="text-2xl font-bold mt-1">WhatsApp (68%)</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6 opacity-70 pointer-events-none">
            <div className="bg-white p-6 border border-slate-200 flex flex-col col-span-3">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Top Medicamentos (Recomendados por IA)</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { name: "Dipirona Monoidratada 1g", stock: "145 unid.", tag: "Alta Recomendação" },
                  { name: "Neosoro Solução Nasal", stock: "89 unid.", tag: "Alta Recomendação" },
                  { name: "Vitamina C Targifor C", stock: "32 unid.", tag: "Média Recomendação" },
                  { name: "Creatina Creapure 300g", stock: "12 unid.", tag: "Ticket Alto" },
                ].map((prod, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-sm font-bold text-slate-800">{prod.name}</div>
                        <div className="text-[10px] text-slate-500">Estoque: {prod.stock}</div>
                      </div>
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-sm">
                      {prod.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search Log Table */}
          <div className="bg-white border border-slate-200 overflow-hidden opacity-70 pointer-events-none">
            <div className="p-5 border-b border-slate-100">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Intenções de Busca em Tempo Real</div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs text-slate-400 uppercase font-medium">
                  <tr>
                    <th className="px-6 py-4 border-b border-slate-100">Pergunta do Usuário</th>
                    <th className="px-6 py-4 border-b border-slate-100">Motor</th>
                    <th className="px-6 py-4 border-b border-slate-100">Intenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {[
                    { q: `"farmácia aberta agora entrega no Jd. Nova York"`, engine: "ChatGPT", int: "Urgência (Checkout)" },
                    { q: `"qual o genérico do roacutan tem em estoque?"`, engine: "Gemini", int: "Informativa" },
                    { q: `"comprar fralda pampers tamanho M promoção"`, engine: "Google AI", int: "Preço / Oferta" },
                    { q: `"remédio para cólica bebê mais recomendado"`, engine: "Perplexity", int: "Recomendação" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 font-medium text-slate-800">{row.q}</td>
                      <td className="px-6 py-4">{row.engine}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-slate-400 uppercase">{row.int}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── 09. ARQUITETURA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">A Arquitetura</h2>
            <p className="text-lg text-slate-500 font-light">Como os dados fluem do ERP até a recomendação.</p>
          </div>

          <div className="border border-slate-200 p-8 md:p-12 overflow-x-auto bg-slate-50">
            <div className="flex flex-col items-center min-w-[700px]">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white border border-slate-300 px-6 py-4 text-center w-48">
                  <span className="text-sm font-bold text-slate-800 block mb-1">ERP da Farmácia</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Catálogo Base</span>
                </div>
                <div className="w-8 h-px bg-slate-400"></div>
                <div className="bg-slate-900 text-white px-6 py-4 text-center w-48">
                  <span className="text-sm font-bold block mb-1">Banco de Dados</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Tempo Real</span>
                </div>
              </div>

              <div className="flex flex-col items-center mb-8">
                <div className="w-px h-8 bg-slate-400"></div>
                <div className="w-[300px] h-px bg-slate-400"></div>
                <div className="flex justify-between w-[300px]">
                  <div className="w-px h-8 bg-slate-400"></div>
                  <div className="w-px h-8 bg-slate-400"></div>
                </div>
                
                <div className="flex justify-between w-[400px]">
                  <div className="bg-white border border-slate-300 px-4 py-3 text-center w-40">
                    <span className="text-sm font-bold text-slate-800 block">Motores de Busca</span>
                  </div>
                  <div className="bg-white border border-slate-300 px-4 py-3 text-center w-40">
                    <span className="text-sm font-bold text-slate-800 block">Assistentes IA</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex justify-between w-[200px]">
                  <div className="w-px h-8 bg-slate-400"></div>
                  <div className="w-px h-8 bg-slate-400"></div>
                </div>
                <div className="w-[200px] h-px bg-slate-400"></div>
                <div className="w-px h-8 bg-slate-400"></div>
                
                <div className="bg-slate-100 border-2 border-slate-900 px-8 py-4 text-center w-64">
                  <span className="text-sm font-bold text-slate-900 block mb-1">Cliente Final</span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest">Recomendação & Venda</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 10. APRESENTAÇÃO DO JORGE ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-left border-l-4 border-slate-500 pl-8 md:pl-12">
            <div className="text-3xl font-bold text-white mb-2">Jorge Junior</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Head de Inteligência Artificial</div>
            
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Responsável pela estratégia, arquitetura tecnológica, inteligência artificial e evolução contínua do projeto.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
