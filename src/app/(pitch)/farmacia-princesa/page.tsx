import React from "react";
import Link from "next/link";

export default function FarmaciaPrincesaPitch() {
  return (
    <main className="w-full bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* ── 01. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
          A Farmácia Princesa pode se tornar a <span className="text-indigo-600">primeira farmácia da região</span> preparada para a era da Inteligência Artificial
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 font-light">
          A próxima geração de clientes não pesquisa no Google. Ela pergunta para uma IA.
        </p>
      </section>

      {/* ── 02. O COMPORTAMENTO MUDOU & O PROBLEMA ───────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              O comportamento mudou
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
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm mb-1">Onde estamos perdendo:</h4>
                    <p className="text-[12px] text-amber-800 font-medium">Se não estamos presentes nas etapas 1, 2 e 3, o cliente tende a ir para a concorrência.</p>
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
                    { i: 3, icon: "tips_and_updates", title: "Recomendação Estruturada", desc: "Opções personalizadas e confiáveis.", badge: "Confiança e clareza", badgeIcon: "verified_user", iconColor: "text-blue-600" },
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
      <section className="py-24 px-6 bg-[#0B0F19] border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          {/* Main quote box */}
          <div className="border border-purple-900/50 rounded-[32px] p-8 md:p-16 mb-16 relative bg-[#0B0F19] shadow-[0_0_60px_-15px_rgba(147,51,234,0.15)] mt-8">
            {/* Top floating quote icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-[#0B0F19] shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              <span className="text-4xl text-white font-serif leading-none mt-2">"</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif text-slate-300 text-center leading-relaxed max-w-4xl mx-auto font-medium mt-4">
              "Enquanto outras farmácias disputam clientes apenas quando eles já decidiram onde comprar, a Farmácia Princesa poderá estar presente <span className="text-indigo-400 font-bold">no momento exato</span> em que a <span className="text-indigo-400 font-bold">necessidade surge</span>: durante a busca por informações e recomendações."
            </h2>
          </div>

          {/* Label: O QUE ISSO SIGNIFICA? */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#1e1b4b] border border-[#312e81] text-indigo-300 text-xs font-bold px-6 py-2 rounded-full tracking-widest uppercase shadow-sm">
              O que isso significa?
            </div>
          </div>

          {/* Flow Cards */}
          <div className="flex flex-col lg:flex-row gap-4 mb-16 relative">
            {/* Arrows */}
            <div className="hidden lg:flex absolute top-1/2 left-0 w-full justify-between px-16 -z-10 -translate-y-1/2">
              <span className="material-symbols-outlined text-indigo-500/50">arrow_forward</span>
              <span className="material-symbols-outlined text-indigo-500/50">arrow_forward</span>
              <span className="material-symbols-outlined text-teal-500/50">arrow_forward</span>
              <span className="material-symbols-outlined text-green-500/50">arrow_forward</span>
            </div>

            {[
              { icon: "search", title: "Necessidade\nsurge", desc: "O cliente sente algo e começa a buscar por respostas.", color: "text-purple-400", bg: "bg-[#2e1065]", cardBorder: "border-[#4c1d95]" },
              { icon: "chat", title: "Busca por\ninformações", desc: "Ele pesquisa em Google, ChatGPT, Gemini e outras IAs.", color: "text-blue-400", bg: "bg-[#1e3a8a]", cardBorder: "border-[#1e40af]" },
              { icon: "auto_awesome", title: "Recomendações\nem IAs", desc: "As IAs apresentam opções, comparações e sugestões.", color: "text-teal-400", bg: "bg-[#134e4a]", cardBorder: "border-[#0f766e]" },
              { icon: "location_on", title: "Decisão de\ncompra", desc: "O cliente já decide onde comprar com segurança.", color: "text-green-400", bg: "bg-[#14532d]", cardBorder: "border-[#166534]" },
              { icon: "shopping_bag", title: "Farmácia\nPrincesa presente", desc: "Estamos lá desde o início, sendo a escolha natural.", color: "text-fuchsia-400", bg: "bg-[#701a75]", cardBorder: "border-[#86198f]" }
            ].map((card, i) => (
              <div key={i} className={`flex-1 bg-[#131722] border-t-2 ${card.cardBorder} rounded-xl p-6 shadow-lg border-x border-b border-x-slate-800 border-b-slate-800`}>
                <div className={`w-12 h-12 ${card.bg} rounded-full flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${card.color} text-[24px]`}>{card.icon}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-3 whitespace-pre-line leading-tight">{card.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#151a28] border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
            <div className="flex items-center gap-5 lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-[#064e3b] flex flex-shrink-0 items-center justify-center border border-[#059669]">
                <span className="material-symbols-outlined text-3xl text-emerald-400">adjust</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Menos concorrência. Mais relevância. Mais escolha.</h3>
                <p className="text-xs text-slate-400 font-medium">Estar presente no momento certo é o que transforma buscas em clientes fiéis.</p>
              </div>
            </div>
            
            <div className="w-px h-16 bg-slate-800 hidden lg:block"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:w-1/2">
              {[
                { icon: "groups", title: "Mais visibilidade\nnas buscas" },
                { icon: "verified_user", title: "Mais confiança\ne autoridade" },
                { icon: "trending_up", title: "Mais vendas\ne fidelização" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-400 text-[24px]">{item.icon}</span>
                  <span className="text-[11px] font-medium text-slate-300 leading-tight whitespace-pre-line">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. OS DADOS CONFIRMAM ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-indigo-500 text-sm">bar_chart</span>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">O Mercado Já Mudou</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
              Os dados confirmam: a jornada de compra já mudou
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Os consumidores utilizam mecanismos de busca e IA para decidir o que comprar antes mesmo de entrar em uma farmácia.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
            {[
              { title: "5 Trilhões", subtitle: "de buscas por ano", desc: "A descoberta de produtos continua começando pela busca — agora ampliada por IA.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              { title: "87%", subtitle: "abertos a novas marcas", desc: "Consumidores no Google/YouTube estão propensos a descobrir novos estabelecimentos.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { title: "82%", subtitle: "já utilizam IA", desc: "A grande maioria dos brasileiros já usa Inteligência Artificial na jornada de compra.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { title: "300 mil+", subtitle: "habitantes na região", desc: "Um mercado regional (Araçatuba e Birigui), com milhares de descobertas diárias.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" }
            ].map((card, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 border ${card.border} shadow-sm flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform`}>
                <h3 className={`text-4xl lg:text-5xl font-black mb-2 tracking-tight ${card.color}`}>{card.title}</h3>
                <p className="text-sm font-bold text-slate-700 whitespace-pre-line mb-4">{card.subtitle}</p>
                <div className="w-8 h-1 bg-slate-200 rounded-full mb-4"></div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed mt-auto">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Quebra visual */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              O consumidor não procura mais apenas uma farmácia. <br className="hidden md:block" />
              <span className="text-indigo-600">Ele pergunta:</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Onde encontro creatina perto de mim?",
                "Qual vitamina C é melhor?",
                "Farmácia aberta agora",
                "Dipirona infantil em Araçatuba",
                "Melhor protetor solar para pele oleosa"
              ].map((query, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-full shadow-sm text-sm font-medium text-slate-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">search</span>
                  "{query}"
                </div>
              ))}
            </div>
            
            <div className="bg-indigo-600 text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
              <h4 className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                Cada uma dessas pesquisas é uma oportunidade para a Farmácia Princesa ser <span className="font-bold text-white">encontrada, recomendada e escolhida</span> antes mesmo que o cliente decida onde comprar.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. O POTENCIAL DA REGIÃO ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">O Potencial da Região</h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Dados extraídos do Google Keyword Planner para <span className="text-blue-600 font-bold">Araçatuba e Birigui</span> comprovam a demanda existente.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Tabela com gráfico de barras */}
            <div className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Buscas Mensais</h3>
                  <div className="text-3xl font-black text-slate-800">≈ 64.000</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">bar_chart</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Farmácia", vol: "18.200", percent: 100, color: "bg-blue-600" },
                  { name: "Dipirona", vol: "12.400", percent: 68, color: "bg-blue-500" },
                  { name: "Vitamina C", vol: "8.900", percent: 49, color: "bg-teal-500" },
                  { name: "Creatina", vol: "7.600", percent: 42, color: "bg-emerald-500" },
                  { name: "Fraldas", vol: "6.300", percent: 35, color: "bg-indigo-400" },
                  { name: "Perfumes", vol: "5.900", percent: 32, color: "bg-purple-400" },
                  { name: "Protetor Solar", vol: "4.700", percent: 26, color: "bg-pink-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-28 text-xs font-bold text-slate-700">{item.name}</div>
                    <div className="flex-1 h-6 bg-slate-50 rounded-full overflow-hidden flex items-center">
                      <div className={`h-full ${item.color} rounded-r-full flex items-center px-2`} style={{ width: `${item.percent}%` }}>
                      </div>
                    </div>
                    <div className="w-16 text-right text-xs font-medium text-slate-500">{item.vol}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Copy e Funil */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#0B0F19] text-white p-8 rounded-[2rem] shadow-xl">
                <h4 className="text-xl font-bold mb-4">A oportunidade não é hipotética. <br/>É mensurável.</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  Todos os meses, dezenas de milhares de pesquisas relacionadas aos produtos e serviços da Farmácia Princesa são realizadas na região.
                </p>
                <div className="w-full h-px bg-slate-800 mb-6"></div>
                <p className="text-sm font-medium text-blue-400 leading-relaxed">
                  Nosso objetivo é garantir que essas buscas resultem em descoberta, recomendação e novos clientes para a marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. O PROJETO PILOTO ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">O Projeto Piloto</h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Execução dividida em 4 etapas claras para transformar <br/> a Farmácia Princesa em uma <span className="text-blue-600 font-bold">operação preparada para IA.</span>
            </p>
          </div>

          <div className="relative mb-16">
            {/* Connecting Line with numbers */}
            <div className="hidden lg:flex absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-blue-100 items-center justify-between -z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid lg:grid-cols-4 gap-6 pt-4 lg:pt-0">
              {[
                { step: "01", icon: "explore", title: "Posicionamento", items: ["SEO Estruturado", "GEO (Engine Optimization)", "Setup de Curadoria"], result: "A farmácia passa a ser compreendida por motores de buscas e inteligências artificiais.", color: "text-blue-600", bgIcon: "bg-blue-50 border-blue-100", checkColor: "text-blue-500", resultBg: "bg-[#f4f7ff]", giantNumber: "01" },
                { step: "02", icon: "database", title: "Produtos", items: ["Integração com ERP", "Sincronização", "Normalização de Dados"], result: "Todos os produtos ficam organizados, atualizados e prontos para IA.", color: "text-emerald-500", bgIcon: "bg-emerald-50 border-emerald-100", checkColor: "text-emerald-500", resultBg: "bg-[#f2fbf6]", giantNumber: "02" },
                { step: "03", icon: "auto_awesome", title: "Recomendação", items: ["Integração em tempo real", "Indexação motores de buscas", "Busca Semântica por modelos de IA"], result: "Clientes recebem recomendações inteligentes e respostas mais precisas em tempo real.", color: "text-purple-500", bgIcon: "bg-purple-50 border-purple-100", checkColor: "text-purple-500", resultBg: "bg-[#f9f5ff]", giantNumber: "03" },
                { step: "04", icon: "credit_card", title: "Compra", items: ["Link para pedido personalizado", "Pedido integrado ao sistema", "logística inteligente"], result: "Compra concluída com eficiência, logística integrada e dados para decisões melhores.", color: "text-amber-500", bgIcon: "bg-amber-50 border-amber-100", checkColor: "text-amber-500", resultBg: "bg-[#fffbf2]", giantNumber: "04" }
              ].map((card, i) => (
                <div key={i} className="flex flex-col relative mt-8 lg:mt-0 group hover:-translate-y-1 transition-transform">
                  {/* Step bubble top */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm z-20">
                    <span className="text-base font-bold text-blue-600">{card.step}</span>
                  </div>

                  <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col flex-1 relative overflow-hidden pt-10">
                    {/* Giant background number */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-slate-50 pointer-events-none select-none">
                      {card.giantNumber}
                    </div>

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${card.bgIcon} mb-8 relative z-10`}>
                      <span className={`material-symbols-outlined text-[24px] ${card.color}`}>{card.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-6">{card.title}</h3>
                    
                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                      {card.items.map((item, j) => (
                        <li key={j} className="text-[13px] font-medium text-slate-600 flex items-start gap-3">
                          <span className={`material-symbols-outlined text-[16px] ${card.checkColor} mt-0.5`}>check_circle</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`${card.resultBg} rounded-2xl p-5 mt-auto relative z-10`}>
                      <div className={`text-xs font-bold ${card.color} flex items-center gap-1.5 mb-2`}>
                        Resultado
                      </div>
                      <p className="text-[12px] font-medium text-slate-700 leading-relaxed">{card.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-full p-4 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-blue-600 text-2xl">track_changes</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-900 mb-0.5">Foco em resultado</h4>
              <p className="text-[11px] text-slate-500 font-medium">Metodologia validada, execução rápida e mensuração contínua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. POR QUE A FARMÁCIA PRINCESA? ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Por que começar pela<br className="hidden md:block"/>Farmácia Princesa?</h2>
              <p className="text-lg text-slate-500 font-medium">O momento exato para capturar a <span className="text-blue-600 font-bold">liderança tecnológica local.</span></p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col divide-y divide-slate-50">
              {[
                { icon: "emoji_events", title: "Marca consolidada\nna região", desc: "Reconhecimento e confiança construídos ao longo\ndo tempo pela excelência no atendimento.", iconBg: "bg-blue-50", iconColor: "text-blue-600", checkColor: "text-blue-500" },
                { icon: "location_on", title: "Presença física em\nAraçatuba e Birigui", desc: "Atuação estratégica em duas cidades-chave,\ncom forte conexão com a comunidade local.", iconBg: "bg-teal-50", iconColor: "text-teal-500", checkColor: "text-teal-500" },
                { icon: "local_shipping", title: "Capacidade logística\njá existente", desc: "Estrutura pronta para atender com agilidade\ne eficiência em toda a região.", iconBg: "bg-purple-50", iconColor: "text-purple-600", checkColor: "text-purple-500" },
                { icon: "inventory_2", title: "Estoque amplo e\ndiversificado", desc: "Variedade de produtos que atende diferentes\nnecessidades e perfis de clientes.", iconBg: "bg-orange-50", iconColor: "text-orange-500", checkColor: "text-orange-500" },
                { icon: "trending_up", title: "Potencial para se tornar\nreferência regional em\naquisição de clientes\natravés de motores de busca e IA", desc: "Adoção antecipada de Inteligência Artificial para\nliderar uma nova era no varejo farmacêutico.", iconBg: "bg-blue-50", iconColor: "text-blue-600", checkColor: "text-blue-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center py-6 gap-6 group hover:bg-slate-50/50 transition-colors px-4 rounded-xl">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                    <span className={`material-symbols-outlined text-2xl ${item.iconColor}`}>{item.icon}</span>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="text-base font-bold text-slate-800 whitespace-pre-line leading-tight">{item.title}</h3>
                    <p className="text-[13px] font-medium text-slate-500 whitespace-pre-line leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-slate-50 items-center justify-center shadow-sm flex-shrink-0">
                    <span className={`material-symbols-outlined text-[16px] ${item.checkColor}`}>check</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09. DASHBOARD MOCKUPS ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-blue-600 text-3xl">bar_chart</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1 uppercase tracking-widest">Painel de Métricas (Projeção)</h2>
              <p className="text-sm text-slate-500 font-medium">Exemplo ilustrativo para demonstrar o potencial estratégico de dados.<br/><span className="text-blue-600 font-bold">Acompanhe demanda, conversão e origem.</span></p>
            </div>
          </div>

          {/* Featured KPI: WhatsApp */}
          <div className="bg-[#0f172a] rounded-[2rem] p-8 md:p-10 shadow-2xl border border-slate-800 mb-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Principal Canal de Vendas</div>
                  <div className="text-3xl md:text-4xl font-black text-white">WhatsApp <span className="text-emerald-400">(68%)</span></div>
                </div>
              </div>
              <div className="bg-emerald-900/40 border border-emerald-800/50 rounded-xl p-4 max-w-xs">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  Insight de IA
                </div>
                <p className="text-xs text-emerald-100/70 font-medium leading-relaxed">
                  A maioria dos clientes descobertos por IA prefere finalizar o pedido rapidamente via WhatsApp com a loja física.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">search</span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Total de Buscas (IA)</div>
              <div className="text-4xl font-bold text-blue-700 mb-3">4.208</div>
              <div className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +23% vs. período anterior
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-teal-600">location_on</span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Bairro Mais Quente</div>
              <div className="text-2xl font-bold text-slate-800 mb-3 leading-tight">Jardim Nova<br/>York</div>
              <div className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md self-start uppercase tracking-wider">
                Alta demanda local
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600">trending_up</span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Taxa de Conversão</div>
              <div className="text-4xl font-bold text-purple-700 mb-3">12.4%</div>
              <div className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +3.2pp vs. período anterior
              </div>
            </div>
          </div>

          {/* Top Medicamentos Tabela */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500 text-[18px]">star</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800">Top Medicamentos (Recomendados por IA)</h3>
              </div>
              <button className="text-[11px] font-bold text-slate-500 flex items-center gap-1 hover:text-blue-600 transition-colors">
                Ver todos <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { name: "Dipirona Monoidratada 1g", stock: "145 unid.", tag: "Alta Recomendação", tagColor: "text-emerald-600", color: "bg-blue-600", shortName: "DIP" },
                { name: "Neosoro Solução Nasal", stock: "89 unid.", tag: "Alta Recomendação", tagColor: "text-emerald-600", color: "bg-sky-400", shortName: "NEO" },
                { name: "Vitamina C Targifor C", stock: "32 unid.", tag: "Média Recomendação", tagColor: "text-blue-600", color: "bg-yellow-400", shortName: "VIT" },
                { name: "Creatina Creapure 300g", stock: "12 unid.", tag: "Ticket Alto", tagColor: "text-red-500", color: "bg-slate-900", shortName: "CRE" },
              ].map((prod, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-[10px] shadow-sm ${prod.color}`}>
                      {prod.shortName}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{prod.name}</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">Estoque: {prod.stock}</div>
                    </div>
                  </div>
                  <div className={`text-[9px] font-bold uppercase tracking-wider ${prod.tagColor}`}>
                    {prod.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Log Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500 text-[18px]">search</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800">Intenções de Busca em Tempo Real</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white text-[10px] text-slate-400 uppercase font-bold tracking-widest border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-bold w-[45%]">Pergunta do Usuário</th>
                    <th className="px-6 py-4 font-bold w-[25%]">Motor</th>
                    <th className="px-6 py-4 font-bold w-[30%]">Intenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-slate-600 bg-white">
                  {[
                    { q: `"farmácia aberta agora entrega no Jd. Nova York"`, engine: "ChatGPT", engineIcon: "auto_awesome", engineColor: "text-emerald-500", int: "Urgência (Checkout)", intIcon: "bolt", intColor: "text-red-500 bg-red-50 border-red-100" },
                    { q: `"qual o genérico do roacutan tem em estoque?"`, engine: "Gemini", engineIcon: "temp_preferences_custom", engineColor: "text-blue-500", int: "Informativa", intIcon: "info", intColor: "text-blue-500 bg-blue-50 border-blue-100" },
                    { q: `"comprar fralda pampers tamanho M promoção"`, engine: "Google AI", engineIcon: "travel_explore", engineColor: "text-orange-500", int: "Preço / Oferta", intIcon: "sell", intColor: "text-orange-500 bg-orange-50 border-orange-100" },
                    { q: `"remédio para cólica bebê mais recomendado"`, engine: "Perplexity", engineIcon: "adjust", engineColor: "text-purple-500", int: "Recomendação", intIcon: "thumb_up", intColor: "text-emerald-500 bg-emerald-50 border-emerald-100" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 text-[13px] font-medium text-slate-700">{row.q}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className={`material-symbols-outlined text-[16px] ${row.engineColor}`}>{row.engineIcon}</span>
                          <span className="text-[13px] font-semibold text-slate-700">{row.engine}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${row.intColor}`}>
                          <span className="material-symbols-outlined text-[14px]">{row.intIcon}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider">{row.int}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── 10. ARQUITETURA ──────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#0B0F19] border-y border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-900/30 border border-indigo-500/20 px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-indigo-400 text-sm">account_tree</span>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Fluxo de Dados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">A Arquitetura de IA</h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">Como os sistemas se comunicam em <span className="text-white font-medium">tempo real</span>, conectando o estoque físico à decisão de compra online.</p>
          </div>

          <div className="relative mt-24 max-w-5xl mx-auto">
            {/* Minimalist Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-800 via-indigo-500/50 to-slate-800 -z-10"></div>
            <div className="block lg:hidden absolute top-[10%] bottom-[10%] left-1/2 w-px bg-gradient-to-b from-slate-800 via-indigo-500/50 to-slate-800 -translate-x-1/2 -z-10"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 relative z-10">
              
              {/* Step 1: ERP */}
              <div className="flex flex-col items-center w-full lg:w-56 group">
                <div className="w-24 h-24 rounded-full bg-[#0a0f1c] border border-slate-800 flex items-center justify-center mb-6 relative group-hover:border-blue-500/50 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-blue-400 transition-colors">storefront</span>
                  <div className="absolute -bottom-3 bg-[#0B0F19] px-2 text-xs font-bold text-slate-500">01</div>
                </div>
                <h3 className="text-lg font-bold text-slate-200 mb-2 text-center">ERP da Farmácia</h3>
                <p className="text-[13px] text-slate-500 text-center leading-relaxed">Centraliza estoque, preços e produtos da loja física.</p>
              </div>

              {/* Step 2: Database */}
              <div className="flex flex-col items-center w-full lg:w-56 group mt-8 lg:mt-0">
                <div className="w-24 h-24 rounded-full bg-[#0a0f1c] border border-slate-800 flex items-center justify-center mb-6 relative group-hover:border-purple-500/50 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.05)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-purple-400 transition-colors">database</span>
                  <div className="absolute -bottom-3 bg-[#0B0F19] px-2 text-xs font-bold text-slate-500">02</div>
                </div>
                <h3 className="text-lg font-bold text-slate-200 mb-2 text-center">Base de Conhecimento</h3>
                <p className="text-[13px] text-slate-500 text-center leading-relaxed">Alimentada em tempo real com dados estruturados.</p>
              </div>

              {/* Step 3: IA */}
              <div className="flex flex-col items-center w-full lg:w-56 group mt-8 lg:mt-0">
                <div className="w-24 h-24 rounded-full bg-[#0a0f1c] border border-slate-800 flex items-center justify-center mb-6 relative group-hover:border-teal-500/50 transition-colors shadow-[0_0_30px_rgba(20,184,166,0.05)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                  <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-teal-400 transition-colors">auto_awesome</span>
                  <div className="absolute -bottom-3 bg-[#0B0F19] px-2 text-xs font-bold text-slate-500">03</div>
                </div>
                <h3 className="text-lg font-bold text-slate-200 mb-2 text-center">Motores & IA</h3>
                <p className="text-[13px] text-slate-500 text-center leading-relaxed">Google, ChatGPT e Gemini indexam e recomendam.</p>
              </div>

              {/* Step 4: Client */}
              <div className="flex flex-col items-center w-full lg:w-56 group mt-8 lg:mt-0">
                <div className="w-24 h-24 rounded-full bg-indigo-600 border-4 border-[#0B0F19] flex items-center justify-center mb-6 relative shadow-[0_0_40px_rgba(79,70,229,0.3)]">
                  <span className="material-symbols-outlined text-4xl text-white">sentiment_satisfied</span>
                  <div className="absolute -bottom-3 bg-[#0B0F19] px-2 text-xs font-bold text-indigo-400">04</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">Cliente Final</h3>
                <p className="text-[13px] text-slate-400 text-center leading-relaxed">Recebe recomendações precisas e decide a compra.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. APRESENTAÇÃO DO JORGE ────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#040810] text-white relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          {/* Avatar / Visual */}
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-[3rem] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-1.5 rotate-3 shadow-[0_0_80px_rgba(79,70,229,0.3)] flex-shrink-0 group hover:rotate-0 transition-all duration-500">
            <div className="w-full h-full rounded-[2.8rem] bg-[#040810] flex items-center justify-center overflow-hidden border-4 border-[#040810]">
              <img src="/jorge-junior.jpg" alt="Jorge Junior" className="w-full h-full object-cover -rotate-3 group-hover:rotate-0 transition-transform duration-500 scale-105" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Jorge Júnior</h2>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-sm font-bold uppercase tracking-widest text-slate-300 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-500 text-sm">memory</span>
              Head de IA & Arquitetura
            </div>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-2xl">
              Responsável por liderar a estratégia de Inteligência Artificial, arquitetura tecnológica e evolução contínua do projeto, conectando dados, automação e software para posicionar a Farmácia Princesa como <span className="text-white font-medium">referência em inovação digital no varejo farmacêutico</span>.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {["IA", "Arquitetura", "Dados", "Automação", "Estratégia Digital"].map((tag, i) => (
                <div key={i} className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. A VISÃO (12 MESES) & FECHAMENTO ────────────────────────────── */}
      <section className="py-32 px-6 bg-indigo-600 text-white border-t border-indigo-700 relative overflow-hidden">
        {/* Padrão de fundo discreto */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Onde a Farmácia Princesa estará em 12 meses?</h2>
          </div>

          <div className="bg-indigo-700/50 border border-indigo-500/50 rounded-[2rem] p-8 md:p-12 mb-20 shadow-2xl backdrop-blur-sm">
            <ul className="space-y-6">
              {[
                "Catálogo de produtos 100% indexado e compreendido por assistentes de Inteligência Artificial.",
                "Motor de recomendação ativo, respondendo dúvidas de saúde com indicação direta de produtos da loja.",
                "Checkout simplificado via WhatsApp integrado à jornada de busca, sem fricções.",
                "Posição de liderança regional consolidada como a farmácia mais inovadora e acessível digitalmente."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <span className="material-symbols-outlined text-white text-[18px]">done</span>
                  </div>
                  <p className="text-lg md:text-xl text-indigo-50 font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Fechamento Emocional / Liderança */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-indigo-300 text-5xl mb-6">format_quote</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              "Quem liderar essa transformação primeiro não estará apenas vendendo mais. Estará definindo como os consumidores encontrarão farmácias na <span className="text-indigo-200">próxima década</span>."
            </h3>
            <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
