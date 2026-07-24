import Link from "next/link";

export default function CaseStudyPlugeefy() {
  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Botão Voltar */}
      <div className="mb-8 md:mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-xs md:text-sm">
          <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
          Voltar para a Home
        </Link>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="mb-16 md:mb-24">
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="px-2 md:px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 font-label-caps text-[9px] md:text-[10px] text-primary-container uppercase tracking-widest">
            Case Study
          </span>
          <span className="px-2 md:px-3 py-1 rounded-full bg-surface-container border border-white/5 font-label-caps text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest">
            SaaS · AI Commerce · Multi-tenant
          </span>
          <span className="px-2 md:px-3 py-1 rounded-full bg-surface-container border border-white/5 font-label-caps text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest">
            Em Produção 🟢
          </span>
        </div>

        <h1 className="font-headline-xl text-2xl md:text-4xl lg:text-5xl text-primary uppercase mb-3 md:mb-4 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          Plugeefy — <span className="neon-text">AI Commerce</span> Platform
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-3xl mb-3 md:mb-4 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          Uma plataforma SaaS multi-tenant que resolve um problema crítico e invisível:
          <strong className="text-primary"> e-commerces brasileiros não existem para as IAs.</strong>
        </p>
        <p className="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-3xl mb-6 md:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          A Plugeefy torna cada loja <strong className="text-primary">nativamente consultável</strong> por ChatGPT, Gemini e Perplexity
          via servidor MCP próprio — e automatiza vendas via WhatsApp com um agente de IA stateful que vai do "Olá"
          ao pedido criado no ERP, sem intervenção humana.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <a href="https://plugeefy.cloud" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest text-[10px] md:text-sm">
            Ver Plataforma
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
          <a href="https://plugeefy.site" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 glass-panel text-primary font-label-md px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest text-[10px] md:text-sm">
            Landing Page
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
        </div>
      </section>

      {/* ── 01 — Problema ──────────────────────────────────────────────────────── */}
      <section className="mb-16 md:mb-24">
        <div className="mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="font-label-caps text-[10px] md:text-[11px] text-primary-container uppercase tracking-widest">01 — O Problema</span>
          <h2 className="font-headline-xl text-2xl md:text-3xl lg:text-4xl text-primary uppercase mt-2 mb-3 md:mb-4 leading-tight">
            E-commerces <span className="neon-text">Invisíveis</span> para IAs
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
            Quando um consumidor pergunta ao ChatGPT <em>"onde comprar tênis Nike em Araçatuba?"</em>,
            nenhuma loja local é citada — mesmo que tenha estoque. O problema não é o produto.
            É que as lojas não falam a língua das IAs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <span className="material-symbols-outlined text-3xl text-outline mb-4 block" data-icon="visibility_off">visibility_off</span>
            <h3 className="text-primary font-headline-md text-xl mb-4">Antes da Plugeefy</h3>
            <ul className="space-y-3 text-on-surface-variant text-sm">
              {[
                "Loja existe apenas no Google — invisível para IAs",
                "Catálogo em HTML não estruturado — LLMs não conseguem ler",
                "Estoque desatualizado nas respostas de IA",
                "Atendimento manual 100% via WhatsApp",
                "Sem métricas de AEO (Answer Engine Optimization)",
                "ChatGPT, Gemini e Perplexity nunca recomendam a loja",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
            <span className="material-symbols-outlined text-3xl text-primary-container mb-4 block" data-icon="visibility">visibility</span>
            <h3 className="text-primary font-headline-md text-xl mb-4">Com a Plugeefy</h3>
            <ul className="space-y-3 text-on-surface-variant text-sm">
              {[
                "Loja citada e recomendada por ChatGPT, Gemini e Perplexity",
                "Catálogo em Schema.org + MCP Protocol — legível por qualquer LLM",
                "Sincronização em tempo real via webhook do Bling ERP",
                "Agente de IA cria pedidos automaticamente via WhatsApp",
                "Dashboard de métricas AEO (Search Console + Bing)",
                "MCP Server próprio: lojas consultáveis nativamente por IAs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary-container mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02 — MCP Server (O diferencial) ───────────────────────────────────── */}
      <section className="mb-16 md:mb-24">
        <div className="mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="font-label-caps text-[10px] md:text-[11px] text-primary-container uppercase tracking-widest">02 — O Diferencial</span>
          <h2 className="font-headline-xl text-2xl md:text-3xl lg:text-4xl text-primary uppercase mt-2 mb-3 md:mb-4 leading-tight">
            Servidor <span className="neon-text">MCP Nativo</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
            Model Context Protocol (JSON-RPC 2.0) — o padrão lançado pela Anthropic, adotado pela OpenAI e Google.
            A Plugeefy implementa um servidor MCP próprio por loja, tornando cada e-commerce
            <strong className="text-primary"> diretamente consultável</strong> por qualquer LLM em tempo real.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 font-mono text-sm overflow-x-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 font-label-caps text-[10px] text-outline uppercase tracking-widest font-sans">POST /mcp — JSON-RPC 2.0</span>
          </div>
          <pre className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">
<span className="text-outline">{"// ChatGPT: 'Tem tênis Nike disponível na Loja X?'"}</span>{"\n"}
<span className="text-primary-container">{"{"}</span>{"\n"}
{"  "}<span className="text-primary">"method"</span>{": "}<span className="text-on-surface">"tools/call"</span>{",\n"}
{"  "}<span className="text-primary">"params"</span>{": { "}<span className="text-primary">"name"</span>{": "}<span className="text-primary-container">"search_catalog"</span>{",\n"}
{"    "}<span className="text-primary">"arguments"</span>{": { "}<span className="text-primary">"store_slug"</span>{": "}<span className="text-on-surface">"loja-x"</span>{", "}<span className="text-primary">"query"</span>{": "}<span className="text-on-surface">"tênis nike"</span>{" } }\n"}
<span className="text-primary-container">{"}"}</span>{"\n\n"}
<span className="text-outline">{"// Plugeefy responde em tempo real:"}</span>{"\n"}
<span className="text-primary-container">{"→ 3 modelos disponíveis · R$ 299 · Link direto para compra"}</span>
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {[
            { tool: "get_store_context",   desc: "Contexto completo da loja: contatos, horário, nicho, canais de atendimento" },
            { tool: "search_catalog",      desc: "Busca produtos com estoque em tempo real, preço atualizado e link de compra" },
            { tool: "get_product_details", desc: "Detalhes completos do produto + link de checkout + WhatsApp da loja" },
          ].map((t) => (
            <div key={t.tool} className="rounded-xl border border-primary-container/20 bg-primary-container/5 p-5">
              <p className="font-mono text-sm text-primary-container mb-2">{t.tool}</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* AEO */}
        <div className="mt-6 glass-panel rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-primary font-medium text-base mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-xl" data-icon="search">search</span>
                Answer Engine Optimization (AEO)
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Além do MCP Server, a Plugeefy gera automaticamente <strong className="text-primary">Schema.org</strong> estruturado
                (Product, Store, Offer) para cada loja, e monitora diariamente a visibilidade nos motores de busca
                via Google Search Console e Bing Webmaster Tools — mostrando no dashboard quantas vezes a loja
                foi citada em respostas de IA.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-primary font-medium text-base mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-xl" data-icon="sync">sync</span>
                Sincronização em Tempo Real
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Webhook do Bling ERP atualiza estoque, preços e produtos em tempo real via pipeline BullMQ.
                Quando uma IA consulta o MCP Server da loja, os dados são sempre os mais recentes —
                não há cache desatualizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — Recomendação & Checkout ───────────────────────────────────────── */}
      <section className="mb-24">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">03 — Jornada AI Commerce</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            Da Recomendação ao <span className="neon-text">Checkout Inteligente</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
            A Plugeefy não apenas torna a loja visível, mas cria uma jornada de compra sem atritos. Os modelos
            (ChatGPT, Gemini) processam os dados estruturados, recomendam produtos e encaminham o cliente
            para o checkout ou atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Flow steps */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col h-full">
            <p className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-8">Jornada do Consumidor</p>
            <div className="flex flex-col gap-0 flex-1">
              {[
                { step: "Busca na IA",                  sub: "Usuário pesquisa produtos no ChatGPT/Gemini" },
                { step: "Consulta via MCP Server",      sub: "IA lê dados estruturados da loja em tempo real" },
                { step: "Recomendação Estruturada",     sub: "IA exibe produtos com preço, estoque e detalhes" },
                { step: "Encaminhamento de Canal",      sub: "IA sugere o WhatsApp ou Instagram oficial da loja" },
                { step: "Link de Checkout Personalizado",sub: "IA gera link direto para o carrinho com os itens" },
                { step: "Cálculo de Logística",         sub: "Frete calculado nativamente via Melhor Envio" },
                { step: "Pagamento Transparente",       sub: "Conversão rápida no gateway AppMax (PIX/Cartão)" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary-container/15 border border-primary-container/40 flex items-center justify-center">
                      <span className="text-primary-container font-bold text-[10px]">{i + 1}</span>
                    </div>
                    {i < 6 && <div className="w-px h-12 bg-gradient-to-b from-primary-container/30 to-transparent" />}
                  </div>
                  <div className="pb-6 pt-0.5">
                    <p className="text-primary text-sm font-medium">{item.step}</p>
                    <p className="text-on-surface-variant text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value props */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "data_object",
                title: "Dados 100% Estruturados",
                desc: "Os catálogos são expostos em um formato que os LLMs entendem perfeitamente. Variações de cor, tamanho e estoque ficam claros, evitando alucinações nas respostas.",
              },
              {
                icon: "support_agent",
                title: "Direcionamento Inteligente",
                desc: "Em vez de apenas informar que o produto existe, a IA direciona o lead quente diretamente para o WhatsApp ou Instagram da loja para fechar a venda.",
              },
              {
                icon: "local_shipping",
                title: "Logística Nativa",
                desc: "Integração profunda com Melhor Envio, permitindo que a IA informe estimativas de frete baseadas na localização do usuário antes mesmo do checkout.",
              },
              {
                icon: "payments",
                title: "Checkout AppMax",
                desc: "Links de pagamento gerados dinamicamente com os produtos corretos, garantindo uma transição fluida da janela da IA (ex: ChatGPT) direto para o gateway de pagamento seguro.",
              },
            ].map((card) => (
              <div key={card.title} className="group glass-panel glass-panel-hover rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center flex-shrink-0 group-hover:neon-border transition-all">
                    <span className="material-symbols-outlined text-primary-container text-xl" data-icon={card.icon}>{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-primary font-medium text-sm mb-1">{card.title}</h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 glass-panel rounded-2xl p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
        <div>
          <p className="font-label-caps text-[11px] text-outline uppercase tracking-widest mb-1">Quer ver o ecossistema completo?</p>
          <p className="text-primary font-headline-md text-xl">Arquitetura, ADRs e Stack Técnico</p>
          <p className="text-on-surface-variant text-sm mt-1">
            Diagrama de todos os serviços, decisões de arquitetura e tecnologias utilizadas.
          </p>
        </div>
        <Link
          href="/architecture"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-6 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest flex-shrink-0"
        >
          Ver Arquitetura Completa
          <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </div>

    </main>
  );
}
