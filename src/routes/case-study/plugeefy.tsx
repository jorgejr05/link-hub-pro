import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/case-study/plugeefy")({
  component: CaseStudyPlugeefy,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const integrations = [
  { name: "Bling ERP", type: "OAuth 2.0 + Webhooks", icon: "inventory_2", desc: "Sync catálogo, estoque, pedidos, clientes, logística" },
  { name: "Evolution API", type: "REST + Webhooks", icon: "chat", desc: "WhatsApp Business self-hosted" },
  { name: "Instagram / Meta", type: "Webhooks", icon: "photo_camera", desc: "Direct Messages e verificação de webhook" },
  { name: "WhatsApp Cloud", type: "API Oficial Meta", icon: "phone_iphone", desc: "Canal alternativo ao Evolution" },
  { name: "Asaas", type: "REST + Webhooks", icon: "payments", desc: "Cobranças, PIX, cartão de crédito" },
  { name: "PagarMe", type: "REST", icon: "credit_card", desc: "Gateway de pagamento alternativo" },
  { name: "AppMax", type: "REST + Webhooks", icon: "point_of_sale", desc: "Gateway de pagamento" },
  { name: "Melhor Envio", type: "REST", icon: "local_shipping", desc: "Cálculo de frete e emissão de etiquetas" },
  { name: "Cloudflare R2", type: "AWS SDK S3-compat.", icon: "cloud_upload", desc: "Object Storage para assets e uploads" },
  { name: "Google Gemini", type: "REST API", icon: "auto_awesome", desc: "Processamento de linguagem natural" },
  { name: "OpenAI GPT-4o", type: "REST API", icon: "psychology", desc: "Agente de IA e análise semântica" },
  { name: "Pusher", type: "WebSocket", icon: "wifi", desc: "Chat em tempo real no CRM" },
  { name: "Google Search Console", type: "googleapis v173", icon: "search", desc: "Métricas AEO e busca orgânica" },
  { name: "Bing Webmaster", type: "REST", icon: "analytics", desc: "Complemento de métricas de AEO" },
  { name: "Supabase", type: "BaaS", icon: "database", desc: "PostgreSQL, Auth SSR, Storage, RLS" },
];

const adrs = [
  {
    id: "ADR-001",
    title: "Hono sobre Express",
    decision: "Edge-ready, TypeScript nativo, zero-overhead middleware.",
    tradeoff: "Menor ecossistema vs. 40% mais performance.",
    icon: "bolt",
  },
  {
    id: "ADR-002",
    title: "BullMQ + Redis",
    decision: "Eventos enfileirados, retry exponencial, 5 workers paralelos.",
    tradeoff: "Complexidade operacional vs. zero perda de dados.",
    icon: "stacked_line_chart",
  },
  {
    id: "ADR-003",
    title: "MCP Server Nativo",
    decision: "JSON-RPC 2.0, standard adotado pela Anthropic/OpenAI.",
    tradeoff: "Adoção antecipada vs. vantagem de first-mover.",
    icon: "hub",
  },
  {
    id: "ADR-004",
    title: "LangGraph para Agente",
    decision: "State machine determinística para fluxo de venda.",
    tradeoff: "Acoplamento de framework vs. zero alucinações em criação de pedidos.",
    icon: "account_tree",
  },
  {
    id: "ADR-005",
    title: "erp_source no Schema",
    decision: "Extensível para Omie, Tiny, TOTVS sem migration.",
    tradeoff: "Complexidade marginal vs. zero custo de migração futuro.",
    icon: "schema",
  },
  {
    id: "ADR-006",
    title: "Supabase + RLS",
    decision: "Isolamento multi-tenant garantido em nível de banco.",
    tradeoff: "Vendor lock-in parcial vs. 3-5x velocidade de dev.",
    icon: "security",
  },
];

const flowSteps = [
  { label: "Usuário envia mensagem", sub: "WhatsApp ou Instagram" },
  { label: "Webhook recebido", sub: "Hono API Gateway" },
  { label: "Evento enfileirado", sub: "BullMQ (whatsapp-messages)" },
  { label: "Worker processa", sub: "5 concorrentes, retry 3x" },
  { label: "Agente LangGraph ativado", sub: "State machine stateful" },
  { label: "Busca cliente no Bling", sub: "Tool: getCustomer(cpf)" },
  { label: "Pesquisa catálogo", sub: "Supabase fulltext search" },
  { label: "Calcula frete", sub: "Tool: calculateFrete(cep, kg)" },
  { label: "Confirma e cria pedido", sub: "POST /api/bling/orders/create" },
  { label: "Resposta enviada", sub: "Evolution API → WhatsApp" },
];

function CaseStudyPlugeefy() {
  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-12 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest text-[11px]"
      >
        <Link to="/" className="hover:text-primary transition-colors">Início</Link>
        <span>/</span>
        <Link to="/architecture" className="hover:text-primary transition-colors">Arquitetura</Link>
        <span>/</span>
        <span className="text-primary-container">Plugeefy</span>
      </motion.div>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 font-label-caps text-[10px] text-primary-container uppercase tracking-widest">
            Case Study
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container border border-white/5 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
            SaaS · AI Commerce · Multi-tenant
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container border border-white/5 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
            Em Produção 🟢
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="font-headline-xl text-headline-xl text-primary uppercase mb-4 leading-tight">
          Plugeefy — <span className="neon-text">AI Commerce</span> Platform
        </motion.h1>
        <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-10">
          Plataforma SaaS multi-tenant que torna e-commerces visíveis e recomendáveis por LLMs
          (ChatGPT, Gemini, Perplexity) através de um servidor MCP nativo, pipeline de eventos
          assíncronos e agente de IA stateful para automação de vendas via WhatsApp.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <a
            href="https://plugeefy.cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-6 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
          >
            Ver Plataforma
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
          <a
            href="https://plugeefy.site"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass-panel text-primary font-label-md px-6 py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest"
          >
            Landing Page
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Numbers */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
      >
        {[
          { num: "15+", label: "Integrações" },
          { num: "4", label: "Filas BullMQ" },
          { num: "3", label: "Tools MCP" },
          { num: "24+", label: "API Routes" },
        ].map((item) => (
          <motion.div key={item.label} variants={fadeInUp} className="glass-panel rounded-2xl p-6 text-center">
            <p className="font-headline-xl text-headline-xl neon-text text-4xl font-bold mb-1">{item.num}</p>
            <p className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Problem */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">01 — O Problema</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            E-commerces <span className="neon-text">Invisíveis</span> para IAs
          </h2>
        </motion.div>
        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
          <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-8">
            <span className="material-symbols-outlined text-3xl text-outline mb-4 block" data-icon="visibility_off">visibility_off</span>
            <h3 className="text-primary font-headline-md text-xl mb-3">Antes da Plugeefy</h3>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Loja existe apenas no Google</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Catálogo em HTML não estruturado</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Estoque desatualizado nas IAs</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Atendimento manual via WhatsApp</li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span> Sem métricas de AEO</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
            <span className="material-symbols-outlined text-3xl text-primary-container mb-4 block" data-icon="visibility">visibility</span>
            <h3 className="text-primary font-headline-md text-xl mb-3">Com a Plugeefy</h3>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li className="flex items-start gap-2"><span className="text-primary-container mt-0.5">✓</span> Loja citada e recomendada por IAs</li>
              <li className="flex items-start gap-2"><span className="text-primary-container mt-0.5">✓</span> Catálogo em Schema.org + MCP Protocol</li>
              <li className="flex items-start gap-2"><span className="text-primary-container mt-0.5">✓</span> Sincronização em tempo real (Bling Webhook)</li>
              <li className="flex items-start gap-2"><span className="text-primary-container mt-0.5">✓</span> Agente de IA cria pedidos automaticamente</li>
              <li className="flex items-start gap-2"><span className="text-primary-container mt-0.5">✓</span> Dashboard de métricas AEO</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* MCP Highlight */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">02 — O Diferencial</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            Servidor <span className="neon-text">MCP Nativo</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
            Model Context Protocol (JSON-RPC 2.0) — o padrão lançado pela Anthropic e adotado pela
            OpenAI para integração de sistemas externos com agentes de IA. A Plugeefy implementa um
            servidor MCP próprio, tornando as lojas <strong className="text-primary">diretamente consultáveis</strong> por qualquer LLM.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-8 font-mono text-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 font-label-caps text-[10px] text-outline uppercase tracking-widest">POST /mcp</span>
          </div>
          <pre className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">
<span className="text-outline">{"// ChatGPT pergunta: 'Tem tênis Nike disponível na Loja X?'"}</span>{"\n"}
<span className="text-primary-container">{"{"}</span>{"\n"}
{"  "}<span className="text-primary">"jsonrpc"</span>{": "}<span className="text-on-surface">"2.0"</span>{",\n"}
{"  "}<span className="text-primary">"method"</span>{": "}<span className="text-on-surface">"tools/call"</span>{",\n"}
{"  "}<span className="text-primary">"params"</span>{": {"}{"\n"}
{"    "}<span className="text-primary">"name"</span>{": "}<span className="text-primary-container">"search_catalog"</span>{",\n"}
{"    "}<span className="text-primary">"arguments"</span>{": {"}{"\n"}
{"      "}<span className="text-primary">"store_slug"</span>{": "}<span className="text-on-surface">"loja-x"</span>{",\n"}
{"      "}<span className="text-primary">"query"</span>{": "}<span className="text-on-surface">"tênis nike"</span>{"\n"}
{"    }"}{"\n"}
{"  }"}{"\n"}
<span className="text-primary-container">{"}"}</span>{"\n\n"}
<span className="text-outline">{"// Plugeefy responde em tempo real com estoque e links"}</span>{"\n"}
<span className="text-primary-container">{"→ 3 modelos disponíveis · R$ 299 · Link direto para compra"}</span>
          </pre>
        </motion.div>
        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { tool: "get_store_context", desc: "Contexto completo da loja: contatos, horário, nicho, canais" },
            { tool: "search_catalog", desc: "Busca produtos com estoque, preço e link direto de compra" },
            { tool: "get_product_details", desc: "Detalhes completos + link de checkout + WhatsApp da loja" },
          ].map((t) => (
            <motion.div key={t.tool} variants={fadeInUp} className="rounded-xl border border-primary-container/20 bg-primary-container/5 p-5">
              <p className="font-mono text-sm text-primary-container mb-2">{t.tool}</p>
              <p className="text-on-surface-variant text-xs">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Agent Flow */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">03 — Agente de IA</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            Fluxo de Venda <span className="neon-text">Automatizado</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
            LangGraph state machine que gerencia todo o funil de venda via WhatsApp —
            do "Olá" ao pedido criado no ERP, sem intervenção humana.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-8">
          <div className="flex flex-col items-start gap-0">
            {flowSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-primary-container/15 border border-primary-container/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-container font-bold text-[11px]">{i + 1}</span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-primary-container/30 to-transparent my-1" />
                  )}
                </div>
                <div className="pb-2 pt-1">
                  <p className="text-primary text-sm font-medium">{step.label}</p>
                  <p className="text-on-surface-variant text-xs">{step.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Integrations */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">04 — Integrações</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            <span className="neon-text">15+</span> Serviços em Produção
          </h2>
        </motion.div>
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.map((intg) => (
            <motion.div
              key={intg.name}
              variants={fadeInUp}
              className="group glass-panel glass-panel-hover rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center flex-shrink-0 group-hover:neon-border transition-all">
                <span className="material-symbols-outlined text-primary-container text-lg" data-icon={intg.icon}>
                  {intg.icon}
                </span>
              </div>
              <div>
                <p className="text-primary text-sm font-medium">{intg.name}</p>
                <p className="text-primary-container/60 text-[10px] font-mono uppercase tracking-wide">{intg.type}</p>
                <p className="text-on-surface-variant text-xs mt-1">{intg.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ADRs compact */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">05 — Decisões</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-4">
            Architecture <span className="neon-text">Decisions</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adrs.map((adr) => (
            <motion.div
              key={adr.id}
              variants={fadeInUp}
              className="group glass-panel glass-panel-hover rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary-container text-xl" data-icon={adr.icon}>
                  {adr.icon}
                </span>
                <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest">{adr.id}</span>
              </div>
              <h3 className="text-primary font-medium text-sm mb-2">{adr.title}</h3>
              <p className="text-on-surface-variant text-xs mb-3">{adr.decision}</p>
              <div className="border-t border-white/5 pt-3">
                <p className="text-outline text-[11px] italic">{adr.tradeoff}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-6 text-center">
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 text-primary-container font-label-caps text-[11px] uppercase tracking-widest hover:neon-text transition-colors"
          >
            Ver ADRs completos na página de Arquitetura
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Stack */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">06 — Stack</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2">
            Tecnologias <span className="neon-text">Utilizadas</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "API Server (plugeefy-api)",
              items: ["Hono ^4.7.11", "Node.js 20 Alpine", "BullMQ ^5.56.0", "Redis", "TypeScript ^5.0", "@google/generative-ai ^0.24.1", "openai ^5.22.0", "node-cron ^4.4.1", "Docker + VPS"],
            },
            {
              title: "Dashboard (plugeefy)",
              items: ["Next.js 16.0.10", "React ^19.2.3", "LangChain + LangGraph ^1.1.5", "@google/genai ^1.25.0", "Supabase SSR ^0.7.0", "Pusher ^5.3.2", "Framer Motion ^12.23", "Zustand ^5.0.9", "Recharts ^2.15.3"],
            },
            {
              title: "Landing Page (plugeefylp)",
              items: ["Vite ^5.4.19", "React ^18.3.1", "React Router DOM ^6.30.1", "Shadcn/ui + Radix UI", "Tailwind CSS ^3.4.17", "TypeScript ^5.8.3", "Vercel Deploy"],
            },
          ].map((col) => (
            <motion.div key={col.title} variants={fadeInUp} className="glass-panel rounded-xl p-6">
              <p className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-4">{col.title}</p>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span key={item} className="px-2 py-1 rounded bg-surface-container border border-white/5 text-on-surface-variant text-xs font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Nav footer */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-between gap-6 glass-panel rounded-2xl p-8"
      >
        <div>
          <p className="font-label-caps text-[11px] text-outline uppercase tracking-widest mb-1">Próximo passo</p>
          <p className="text-primary font-headline-md text-xl">Veja a Arquitetura Interativa</p>
        </div>
        <Link
          to="/architecture"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-6 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
        >
          Página de Arquitetura
          <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </motion.div>
    </main>
  );
}
