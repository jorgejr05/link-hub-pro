import React from "react";
import { Viewport } from "next";
import { ContextMenuBlocker } from "./ContextMenuBlocker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function FarmaciaPrincesaPitch() {
  return (
    <main className="w-full bg-white text-slate-900 font-sans selection:bg-transparent select-none">
      <ContextMenuBlocker />

      {/* 01. HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-12 md:pt-20 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {"Todos os dias, milhares de pessoas procuram "}
          <span className="text-indigo-600">{"exatamente o que a Farmácia Princesa vende."}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {"O objetivo é garantir que essas pesquisas resultem em novos clientes para a Farmácia Princesa."}
        </p>
        <div className="mt-20 flex flex-col items-center animate-in fade-in duration-700 delay-500">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-300"></div>
        </div>
      </section>

      {/* 02. O MERCADO (DASHBOARD) */}
      <section className="py-24 px-6 bg-slate-950 text-white border-y border-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              DADOS REAIS DO GOOGLE
            </p>
            <h2 className="text-2xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              O mercado já está procurando.<br />
              A pergunta é: <span className="text-indigo-500">quem está sendo encontrado?</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-medium">
              Levantamento feito com dados do Google Keyword Planner<br className="hidden md:block" />
              para Araçatuba e Birigui nos últimos 12 meses.
            </p>
          </div>

          {/* Cards Superiores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "group", value: "300 mil+", label: "habitantes", sub: "Araçatuba + Birigui", source: "IBGE 2026" },
              { icon: "search", value: "64 mil+", label: "buscas por mês", sub: "pelos principais produtos vendidos pela Farmácia Princesa", source: "Google Keyword Planner" },
              { icon: "trending_up", value: "1.800+", label: "pesquisas por dia", sub: "é a média de pessoas buscando soluções que sua farmácia vende", source: "Google Keyword Planner" },
              { icon: "ads_click", value: "Alta intenção", label: "de compra", sub: "Buscas com intenção comercial pronta para comprar", source: "Google Keyword Planner" },
            ].map((card, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-indigo-500/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
                </div>
                <div className="text-3xl font-black text-white mb-1">{card.value}</div>
                <div className="text-base font-semibold text-slate-300 mb-4">{card.label}</div>
                <p className="text-xs text-slate-500 mb-6 flex-1 leading-relaxed">{card.sub}</p>
                <div className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold mt-auto">
                  Fonte: {card.source}
                </div>
              </div>
            ))}
          </div>

          {/* Duas Colunas Centrais */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            
            {/* Esquerda: Top buscas mensais */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h3 className="text-base md:text-lg font-bold">Top buscas mensais na região</h3>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full uppercase tracking-widest font-bold self-start md:self-auto">Dados do Google</span>
              </div>
              
              <div className="flex text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                <div className="flex-1">Termo de busca</div>
                <div className="w-24 md:w-32 text-right">Buscas / mês</div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { name: "Farmácia", vol: "18.200", p: 100 },
                  { name: "Dipirona", vol: "12.400", p: 68 },
                  { name: "Creatina", vol: "8.600", p: 47 },
                  { name: "Vitamina C", vol: "7.900", p: 43 },
                  { name: "Fralda Pampers", vol: "6.300", p: 34 },
                  { name: "Paracetamol", vol: "6.000", p: 32 },
                  { name: "Protetor Solar", vol: "4.700", p: 25 },
                  { name: "Ozempic", vol: "3.900", p: 21 },
                  { name: "Perfume importado", vol: "3.600", p: 19 },
                  { name: "Teste de Dengue", vol: "3.200", p: 17 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-32 md:w-36 text-xs md:text-sm text-slate-300 font-medium truncate pr-2">{item.name}</div>
                    <div className="w-16 text-right text-xs md:text-sm text-slate-400 font-medium mr-4">{item.vol}</div>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${item.p}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="text-sm font-bold text-indigo-400">Total de buscas mensais</div>
                <div className="text-2xl font-black text-indigo-400">64.800+</div>
              </div>
              <p className="text-[10px] text-slate-600 mt-4">
                Fonte: Google Keyword Planner • Região: Araçatuba e Birigui • Período: Últimos 12 meses
              </p>
            </div>

            {/* Direita: Distribuição e Crescimento */}
            <div className="flex flex-col gap-6">
              
              {/* Distribuição por Categoria */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex-1">
                <h3 className="text-base md:text-lg font-bold mb-8">Distribuição das buscas por categoria</h3>
                
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                  {/* Gráfico Donut (CSS) */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ background: 'conic-gradient(#6366f1 0% 32%, #4f46e5 32% 52%, #06b6d4 52% 68%, #22c55e 68% 80%, #eab308 80% 90%, #f97316 90% 100%)' }}>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-full flex flex-col items-center justify-center text-center">
                      <div className="text-xl md:text-2xl font-black text-white">64 mil+</div>
                      <div className="text-[10px] md:text-xs font-semibold text-slate-400">buscas<br/>por mês</div>
                    </div>
                  </div>

                  {/* Legenda */}
                  <div className="flex-1 space-y-3 w-full">
                    {[
                      { label: "Medicamentos", val: "32%", color: "bg-indigo-500" },
                      { label: "Suplementos", val: "20%", color: "bg-indigo-600" },
                      { label: "Higiene e Cuidados", val: "16%", color: "bg-cyan-500" },
                      { label: "Infantil", val: "12%", color: "bg-green-500" },
                      { label: "Beleza / Dermo", val: "10%", color: "bg-yellow-500" },
                      { label: "Serviços e Testes", val: "10%", color: "bg-orange-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="text-xs md:text-sm text-slate-300 font-medium">{item.label}</span>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-400">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Crescimento em 12 meses */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-300 mb-2">Crescimento das buscas em 12 meses</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-green-400">+27%</div>
                    <div className="text-[10px] text-slate-500 leading-tight">
                      Aumento no volume total de buscas<br/>
                      em comparação ao período anterior.
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-600 mt-4 font-medium uppercase tracking-widest">Fonte: Google Trends</div>
                </div>
                {/* Linha simulada do gráfico */}
                <div className="hidden md:flex items-end h-16 w-32 relative">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-green-500/20 to-transparent opacity-50"></div>
                  <svg viewBox="0 0 100 40" className="w-full h-full text-green-400 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="0,35 10,32 20,34 30,28 40,29 50,22 60,25 70,15 80,18 90,8 100,5" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* O Desafio */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 text-center md:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-indigo-400">search</span>
            </div>
            <div>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed font-light mb-2">
                Todos os dias, <span className="text-white font-medium">milhares de pessoas em Araçatuba e Birigui</span> pesquisam por produtos, medicamentos e soluções que a Farmácia Princesa oferece.
              </p>
              <h3 className="text-lg md:text-2xl font-bold text-indigo-400">
                O desafio não é criar demanda. É capturá-la.
              </h3>
            </div>
          </div>

          {/* Exemplos de buscas */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-slate-300 font-bold mb-6">Exemplos de buscas que acontecem todos os dias na região</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                "farmácia aberta agora", "dipirona", "creatina", "vitamina c", "fralda pampers", "roacutan",
                "ozempic", "perfume importado", "protetor solar", "teste de dengue", "teste covid",
                "farmácia entrega", "remédio para dor", "paracetamol", "whey protein", "ibuprofeno"
              ].map((term, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors">
                  <span className="material-symbols-outlined text-[14px] md:text-[16px]">search</span>
                  {term}
                </div>
              ))}
            </div>
          </div>

          {/* Botton Callout */}
          <div className="bg-indigo-600 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 shadow-2xl">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-2xl md:text-3xl text-white">ads_click</span>
            </div>
            <h3 className="text-lg md:text-3xl font-bold text-white max-w-2xl text-center md:text-left leading-tight">
              Nosso objetivo é garantir que essas buscas terminem na <span className="text-indigo-200">Farmácia Princesa</span>.
            </h3>
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

      {/* Seção 'O Potencial' deletada para evitar redundância com o Dashboard acima */}

      {/* 04. GOVERNANÇA E REGULAMENTAÇÃO */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-4">
              {"Segurança e Regulamentação"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {"O papel da Inteligência Artificial não é substituir o farmacêutico."}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {"Os modelos de IA não realizam diagnósticos nem prescrevem medicamentos. Seu papel é compreender a intenção do consumidor, apresentar informações públicas e conectar o usuário a empresas capazes de realizar o atendimento adequado."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {"Arquitetura preparada para operar em conformidade com as diretrizes do setor farmacêutico."}
              </h3>
              <ul className="space-y-4">
                {[
                  "Consulta informações oficiais e bulas.",
                  "Diferencia medicamentos sujeitos à prescrição (RX) dos isentos (MIP).",
                  "Respeita restrições regulatórias sanitárias e comerciais.",
                  "Utiliza dados estruturados (Schema.org).",
                  "Permite descoberta segura em mecanismos de IA.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-indigo-600 text-[14px] font-bold">check</span>
                    </div>
                    <span className="text-sm md:text-base text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {"Uma camada de governança para IA"}
              </h3>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                {"Nossa proposta prepara a Farmácia Princesa para que seus produtos, serviços e informações possam ser compreendidos por esses mecanismos, respeitando as regulamentações vigentes e direcionando o consumidor ao atendimento da equipe farmacêutica quando necessário."}
              </p>
              
              <div className="bg-indigo-600 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <span className="material-symbols-outlined text-indigo-300 text-3xl mb-4">security</span>
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  {"Não estamos automatizando recomendações médicas. Estamos preparando a Farmácia Princesa para ser encontrada quando um consumidor procura, de forma legítima, por produtos, serviços e orientação farmacêutica dentro da nova geração de mecanismos de busca."}
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
            <img src="/jorge-junior.jpg" alt="Jorge Junior" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{"Jorge Júnior"}</h2>
            <p className="text-indigo-400 text-sm md:text-base font-bold uppercase tracking-widest mb-8">
              {"Arquiteto de soluções em IA"}
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              {"Responsável por liderar a estratégia de Inteligência Artificial, arquitetura tecnológica e evolução contínua, conectando dados, automação e software para posicionar a Farmácia Princesa como "}
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
              {"Liderar essa transformação não estará apenas vendendo mais. Estará definindo como os consumidores encontrarão a farmácia nos "}
              <span className="text-indigo-200">{"próximos anos."}</span>
            </h3>
            <div className="w-20 h-1 bg-indigo-400/60 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}