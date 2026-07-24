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
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O comportamento mudou.</h2>
          <p className="text-xl text-slate-500 font-light">Hoje o cliente não começa comprando. Ele começa perguntando.</p>
          
          <div className="mt-16 text-left border-l-4 border-slate-900 pl-8 md:pl-12 py-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">O Problema</h3>
            <p className="text-lg text-slate-600 mb-8">Todos os dias, milhares de pessoas pegam o celular e pesquisam:</p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-md"><p className="text-sm font-medium text-slate-700">"qual remédio para dor de garganta"</p></div>
              <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-md"><p className="text-sm font-medium text-slate-700">"farmácia aberta agora"</p></div>
              <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-md"><p className="text-sm font-medium text-slate-700">"onde comprar creatina"</p></div>
              <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-md"><p className="text-sm font-medium text-slate-700">"farmácia entrega no meu bairro"</p></div>
            </div>

            <p className="text-lg font-medium text-slate-900">
              Mas a Farmácia Princesa só participa da conversa quando o cliente <span className="underline decoration-slate-300 underline-offset-4 font-bold">já decidiu</span> entrar em contato.
            </p>
            <p className="text-xl font-bold text-slate-500 mt-4">
              Estamos deixando oportunidades na mesa.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03. HOJE VS AMANHÃ ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O Fim do Atrito</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">A evolução natural da jornada de compra.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* HOJE */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm opacity-50">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Como é Hoje</div>
              <div className="flex flex-col gap-4">
                {["Pessoa", "Google", "Lê vários sites", "Liga na farmácia", "Pergunta preço", "Espera resposta", "Compra"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-400">{i+1}</div>
                    <div className="text-slate-500 font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AMANHÃ */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-900 shadow-sm relative">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Como vai ser Amanhã</div>
              <div className="flex flex-col gap-5">
                {["Pessoa", "ChatGPT / Gemini / Perplexity", "Recomendação Estruturada", "Checkout Rápido", "Entrega"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-sm font-bold text-white">{i+1}</div>
                    <div className="text-slate-900 font-semibold">{step}</div>
                  </div>
                ))}
              </div>
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
