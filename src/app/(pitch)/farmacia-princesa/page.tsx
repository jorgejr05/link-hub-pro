import React from "react";

export default function FarmaciaPrincesaPitch() {
  return (
    <main className="w-full bg-white text-slate-900 font-sans selection:bg-slate-200">

      {/* 01. HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-12 md:pt-20 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {"Todos os dias, milhares de pessoas procuram "}
          <span className="text-indigo-600">{"exatamente o que a Farmácia Princesa vende."}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {"O objetivo deste projeto é garantir que essas pesquisas resultem em novos clientes para a Farmácia Princesa."}
        </p>
        <div className="mt-20 flex flex-col items-center animate-in fade-in duration-700 delay-500">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-300"></div>
        </div>
      </section>

      {/* 02. O MERCADO */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6 text-center">
            {"O mercado da Farmácia Princesa"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight tracking-tight">
            {"Existe uma demanda acontecendo todos os dias em Araçatuba e Birigui."}
          </h2>

          <div className="flex flex-col items-center max-w-lg mx-auto mb-20">
            {[
              { number: "300 mil+", label: "habitantes na região de atuação", featured: false },
              { number: "64 mil+", label: "buscas mensais pelos principais produtos vendidos pela Farmácia Princesa", featured: false },
              { number: "1.800", label: "pesquisas por dia relacionadas ao que a farmácia vende", featured: true },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className={`w-full text-center py-8 px-6 rounded-2xl border ${item.featured ? "bg-indigo-600 border-indigo-500 shadow-[0_0_60px_rgba(79,70,229,0.3)]" : "bg-slate-900 border-slate-800"}`}>
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${item.featured ? "text-white" : "text-indigo-400"}`}>{item.number}</div>
                  <p className={`text-sm font-medium leading-snug ${item.featured ? "text-indigo-100" : "text-slate-400"}`}>{item.label}</p>
                </div>
                {i < 2 && (
                  <div className="flex flex-col items-center py-3">
                    <div className="w-px h-6 bg-slate-700"></div>
                    <span className="material-symbols-outlined text-slate-600 text-2xl">keyboard_arrow_down</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              {"Hoje essas buscas podem terminar na concorrência. "}
              <span className="text-white font-semibold">{"Nosso objetivo é fazer com que terminem na Farmácia Princesa."}</span>
            </p>
          </div>

          <div className="border-t border-slate-800 pt-16">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center mb-8">
              {"Todos os dias, pessoas em Araçatuba e Birigui pesquisam por isso"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Farmácia aberta", "Dipirona", "Creatina", "Vitamina C",
                "Fralda Pampers", "Roacutan", "Ozempic", "Perfume importado",
                "Protetor Solar", "Teste de Dengue", "Entrega farmácia",
                "Farmácia Araçatuba", "Farmácia Birigui", "Whey protein",
                "Ibuprofeno", "Paracetamol", "Suplemento", "Mounjaro"
              ].map((term, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
                  {term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. A VENDA COMEÇA ANTES DA COMPRA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-6">
                {"A jornada do cliente"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
                {"A venda começa antes da compra."}
              </h2>
              <div className="flex flex-col">
                {[
                  { label: "Necessidade surge", featured: false },
                  { label: "Pesquisa", featured: false },
                  { label: "Compara", featured: false },
                  { label: "Escolhe onde comprar", featured: false },
                  { label: "Compra", featured: true },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${step.featured ? "bg-indigo-600 ring-4 ring-indigo-100" : "bg-slate-200"}`}></div>
                      {i < 4 && <div className="w-px h-8 bg-slate-100"></div>}
                    </div>
                    <p className={`text-base ${step.featured ? "font-bold text-indigo-600" : "text-slate-500 font-medium"}`}>
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-500 text-xl">arrow_downward</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-snug">
                  {"Hoje a Farmácia Princesa entra tarde demais na decisão."}
                </h3>
                <div className="space-y-3">
                  {[
                    "O consumidor já pesquisou.",
                    "Já comparou.",
                    "Já criou confiança com outra marca.",
                    "Já decidiu.",
                    "Só então entra em contato.",
                  ].map((line, i) => (
                    <p key={i} className={`text-base font-medium ${i === 4 ? "font-bold text-red-600" : "text-slate-500"}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-5 bg-indigo-600 text-white rounded-2xl px-7 py-5">
                <p className="text-base md:text-lg font-semibold leading-snug">
                  {"Quem conquista a etapa da busca conquista a oportunidade de vender."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. O POTENCIAL DA REGIÃO */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {"Quanto dinheiro passa pela frente da Farmácia Princesa todos os dias?"}
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              {"Dados do Google Keyword Planner para "}
              <span className="text-blue-600 font-bold">{"Araçatuba e Birigui"}</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{"Buscas Mensais — Região"}</h3>
                  <div className="text-4xl font-black text-slate-900">{"64.000"}</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">{"1.800 por dia"}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">{"Fonte: Google Keyword Planner"}</div>
                  <div className="text-xs text-slate-400 font-medium">{"Araçatuba + Birigui"}</div>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Farmácia", vol: "18.200", percent: 100, color: "bg-indigo-600" },
                  { name: "Dipirona", vol: "12.400", percent: 68, color: "bg-indigo-500" },
                  { name: "Vitamina C", vol: "8.900", percent: 49, color: "bg-violet-500" },
                  { name: "Creatina", vol: "7.600", percent: 42, color: "bg-purple-500" },
                  { name: "Fraldas", vol: "6.300", percent: 35, color: "bg-blue-500" },
                  { name: "Perfumes", vol: "5.900", percent: 32, color: "bg-sky-500" },
                  { name: "Protetor Solar", vol: "4.700", percent: 26, color: "bg-teal-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-28 text-sm font-bold text-slate-700 flex-shrink-0">{item.name}</div>
                    <div className="flex-1 h-7 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                    <div className="w-16 text-right text-sm font-semibold text-slate-500">{item.vol}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                <h4 className="text-xl font-bold mb-4 leading-snug">{"A oportunidade não é hipotética. É mensurável."}</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
                  {"Todos os meses, dezenas de milhares de pesquisas relacionadas aos produtos da Farmácia Princesa acontecem na região."}
                </p>
                <div className="w-full h-px bg-slate-800 mb-5"></div>
                <p className="text-sm font-semibold text-indigo-400 leading-relaxed">
                  {"Nosso objetivo é fazer com que essas buscas resultem em descoberta, recomendação e novos clientes."}
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
                <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-widest">{"A conta simples"}</p>
                <p className="text-3xl font-black text-indigo-700 mb-1">{"1.800 / dia"}</p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {"Pesquisas diárias de intenção de compra na área de atuação da Farmácia Princesa."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. PROJETO DESCOBERTA */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-4">{"Como vamos fazer"}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {"Indexação nos motores de buscas e IA"}
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
              {"Aquisição orgânica de clientes por busca e IA. "}
              <span className="text-slate-800 font-semibold">{"4 etapas. Execução focada em resultado."}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Posicionamento",
                desc: "A farmácia passa a ser compreendida e citada por motores de busca e assistentes de IA.",
                items: ["SEO Estruturado", "GEO (Generative Engine Optimization)", "Curadoria de Conteúdo"],
                topColor: "border-t-indigo-500",
                dotColor: "bg-indigo-500",
              },
              {
                step: "02",
                title: "Produtos",
                desc: "Catálogo organizado, atualizado e pronto para ser encontrado e recomendado por IA.",
                items: ["Integração com ERP", "Sincronização de Dados", "Normalização de Catálogo"],
                topColor: "border-t-emerald-500",
                dotColor: "bg-emerald-500",
              },
              {
                step: "03",
                title: "Recomendação",
                desc: "Clientes recebem recomendações precisas com produtos reais da farmácia, em tempo real.",
                items: ["Indexação por IA", "Busca Semântica", "Integração com ChatGPT e Gemini"],
                topColor: "border-t-violet-500",
                dotColor: "bg-violet-500",
              },
              {
                step: "04",
                title: "Compra",
                desc: "Da recomendação à compra: rápido, simples e integrado ao fluxo já existente.",
                items: ["Link de pedido personalizado", "Integração com sistema", "Fechamento via WhatsApp"],
                topColor: "border-t-amber-500",
                dotColor: "bg-amber-500",
              },
            ].map((card, i) => (
              <div key={i} className={`bg-white rounded-[2rem] border-t-4 ${card.topColor} border-x border-b border-slate-100 p-8 shadow-sm hover:-translate-y-1 transition-transform flex flex-col`}>
                <div className="text-5xl font-black text-slate-50 mb-4 -ml-1">{card.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{card.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs font-semibold text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${card.dotColor} mt-1.5 flex-shrink-0`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. POR QUE A FARMÁCIA PRINCESA */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-4">{"Por que agora"}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {"Por que começar pela Farmácia Princesa?"}
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              {"O momento exato para "}
              <span className="text-indigo-600 font-bold">{"Liderar a Recomendação local."}</span>
            </p>
            <div className="mt-8 bg-slate-100 border border-slate-200 text-slate-600 p-5 rounded-2xl max-w-2xl mx-auto text-left flex items-start gap-4">
              <span className="material-symbols-outlined text-indigo-500 text-2xl">insights</span>
              <p className="text-sm font-medium leading-relaxed">
                {"Os concorrentes ainda não entenderam esse lado do jogo. Quem estruturar essa presença primeiro se consolida e ganha a preferência."}
              </p>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-slate-100">
            {[
              { icon: "emoji_events", title: "Marca consolidada na região", desc: "Reconhecimento e confiança construídos ao longo do tempo. A Farmácia Princesa já tem autoridade local — falta presença digital.", iconColor: "bg-indigo-50 text-indigo-600" },
              { icon: "location_on", title: "Presença física em Araçatuba e Birigui", desc: "Atuação estratégica nas duas cidades onde estão os 64 mil+ buscas mensais que mapeamos.", iconColor: "bg-teal-50 text-teal-600" },
              { icon: "inventory_2", title: "Estoque amplo e diversificado", desc: "Variedade de produtos que responde a praticamente qualquer busca de saúde, beleza e bem-estar.", iconColor: "bg-amber-50 text-amber-600" },
              { icon: "local_shipping", title: "Capacidade logística já existente", desc: "Estrutura pronta para converter a demanda capturada em entrega rápida e eficiente.", iconColor: "bg-purple-50 text-purple-600" },
              { icon: "trending_up", title: "Potencial para liderar a aquisição digital na região", desc: "Adoção antecipada garante vantagem competitiva. Quem estruturar isso primeiro define o padrão regional.", iconColor: "bg-blue-50 text-blue-600" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center py-7 gap-5 hover:bg-white transition-colors px-4 rounded-xl -mx-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full bg-slate-50 items-center justify-center flex-shrink-0 border border-slate-100">
                  <span className="material-symbols-outlined text-indigo-400 text-[16px]">check</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. JORGE JÚNIOR */}
      <section className="py-32 px-6 bg-[#040810] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 relative z-10 text-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl flex-shrink-0 border-4 border-[#040810]">
            <img src="/jorge-junior.jpg" alt="Jorge Junior" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{"Jorge Júnior"}</h2>
            <p className="text-indigo-400 text-sm md:text-base font-bold uppercase tracking-widest mb-8">
              {"Head de IA e Arquitetura"}
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              {"Responsável por liderar a estratégia de Inteligência Artificial, arquitetura tecnológica e evolução contínua do projeto, conectando dados, automação e software para posicionar a Farmácia Princesa como "}
              <span className="text-white font-medium">{"referência em inovação digital no varejo farmacêutico"}</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 08. FECHAMENTO */}
      <section className="py-32 px-6 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              {"Onde a Farmácia Princesa estará nos próximos meses?"}
            </h2>
          </div>
          <div className="bg-indigo-700/50 border border-indigo-500/50 rounded-[2rem] p-8 md:p-12 mb-24 shadow-2xl backdrop-blur-sm">
            <ul className="space-y-6">
              {[
                "Produtos indexados e compreendidos por assistentes de Inteligência Artificial e motores de buscas.",
                "Ser recomendado quando alguém pesquisa sobre produtos relacionados na região.",
                "Convertendo clientes de forma orgânica desde a busca até a compra.",
                "Posicionamento estratégico escalando o alcance em Araçatuba e Birigui.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-white text-[18px]">done</span>
                  </div>
                  <p className="text-lg md:text-xl text-indigo-50 font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center max-w-3xl mx-auto">

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {"Quem liderar essa transformação primeiro não estará apenas vendendo mais. Estará definindo como os consumidores encontrarão a farmácia nos "}
              <span className="text-indigo-200">{"próximos anos."}</span>
            </h3>
            <div className="w-20 h-1 bg-indigo-400/60 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}