import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/architecture")({
  component: Architecture,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const adrs = [
  {
    id: "ADR-001",
    title: "Hono sobre Express/Fastify",
    context: "Necessidade de processar webhooks de alta frequência (WhatsApp + Bling) com latência mínima e type-safety total.",
    decision: "Hono é edge-ready, tem zero dependências desnecessárias, middleware pipeline nativo em TypeScript e performance superior.",
    tradeoff: "Menor ecossistema de plugins vs. performance 40% superior e code size reduzido.",
    icon: "bolt",
  },
  {
    id: "ADR-002",
    title: "BullMQ + Redis para Webhooks",
    context: "Webhooks do Bling e WhatsApp chegam em rajadas. Processar sincronamente causa timeout e perda de eventos críticos.",
    decision: "Enfileirar todos os eventos no BullMQ com retentativas exponenciais. Workers processam de forma assíncrona com concorrência de 5.",
    tradeoff: "Complexidade operacional adicional vs. zero perda de dados e retry automático em falhas.",
    icon: "stacked_line_chart",
  },
  {
    id: "ADR-003",
    title: "MCP Protocol Nativo",
    context: "ChatGPT, Claude e Gemini estão adotando o Model Context Protocol como padrão de integração com sistemas externos.",
    decision: "Implementar servidor MCP nativo (JSON-RPC 2.0) expondo 3 tools: get_store_context, search_catalog, get_product_details.",
    tradeoff: "Risco de adoção antecipada vs. vantagem de ser first-mover e integração nativa com todos os LLMs principais.",
    icon: "hub",
  },
  {
    id: "ADR-004",
    title: "LangGraph para Agente de Vendas",
    context: "O fluxo de venda via WhatsApp tem múltiplos estados (buscar cliente, escolher produto, calcular frete, confirmar, criar pedido).",
    decision: "State machine explícita via LangGraph com transições determinísticas. Elimina alucinações em etapas críticas como criação de pedido no Bling.",
    tradeoff: "Acoplamento ao framework vs. prevenção total de alucinações em fluxos financeiros críticos.",
    icon: "account_tree",
  },
  {
    id: "ADR-005",
    title: "Campo erp_source no Schema",
    context: "Hoje o único ERP suportado é o Bling. Amanhã podem ser Omie, Tiny, TOTVS — cada um com APIs e formatos diferentes.",
    decision: "Campo erp_source = 'bling' desde o primeiro commit. Extensão para novos ERPs sem breaking change no banco.",
    tradeoff: "Complexidade marginal no schema vs. zero custo de migração no futuro.",
    icon: "schema",
  },
  {
    id: "ADR-006",
    title: "Supabase + Row Level Security",
    context: "SaaS multi-tenant exige isolamento rigoroso entre dados de diferentes merchants. Time solo, prazo curto.",
    decision: "Supabase BaaS com RLS nativo: cada merchant acessa apenas seus dados via auth.uid() = user_id. Zero código de filtro na aplicação.",
    tradeoff: "Vendor lock-in parcial vs. velocidade de desenvolvimento 3-5x maior e segurança garantida em nível de banco.",
    icon: "security",
  },
];

const techDomains = [
  {
    name: "AI & Orquestração",
    color: "text-primary-container",
    border: "border-primary-container/30",
    bg: "bg-primary-container/5",
    items: ["LangChain", "LangGraph", "Google Gemini 2.0", "OpenAI GPT-4o", "MCP Protocol", "Prompt Engineering"],
  },
  {
    name: "Backend & API",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5",
    items: ["Hono", "Node.js 20", "TypeScript", "JSON-RPC 2.0", "OAuth 2.0", "Webhooks", "Zod"],
  },
  {
    name: "Filas & Cache",
    color: "text-on-surface",
    border: "border-white/10",
    bg: "bg-white/5",
    items: ["BullMQ", "Redis (self-hosted)", "Worker Threads", "Exponential Backoff", "Dead Letter Queue"],
  },
  {
    name: "Banco & Storage",
    color: "text-primary-container",
    border: "border-primary-container/30",
    bg: "bg-primary-container/5",
    items: ["Supabase PostgreSQL", "Row Level Security", "Cloudflare R2", "AWS SDK S3", "Migrations SQL"],
  },
  {
    name: "Frontend & UX",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5",
    items: ["Next.js 16", "React 19", "TanStack Router", "Tailwind CSS v4", "Framer Motion", "Shadcn/ui", "Pusher WebSocket"],
  },
  {
    name: "Integrações (15+)",
    color: "text-on-surface",
    border: "border-white/10",
    bg: "bg-white/5",
    items: ["Bling ERP", "Evolution API", "WhatsApp Cloud", "Instagram/Meta", "Asaas", "PagarMe", "Melhor Envio", "Google Search Console"],
  },
];

// SVG Architecture Diagram nodes and connections
const layers = [
  {
    label: "CANAIS DE ENTRADA",
    nodes: ["WhatsApp (Evolution API)", "Instagram (Meta)", "Web Catalog"],
    color: "#caf300",
    y: 0,
  },
  {
    label: "API GATEWAY",
    nodes: ["Hono + Node.js · Docker · VPS"],
    color: "#a0c020",
    y: 1,
  },
  {
    label: "QUEUE LAYER",
    nodes: ["BullMQ + Redis · 4 Filas · Retry Exponencial"],
    color: "#78a010",
    y: 2,
  },
  {
    label: "AI LAYER",
    nodes: ["LangGraph Agent", "Gemini 2.0 · GPT-4o", "MCP Server (JSON-RPC 2.0)"],
    color: "#caf300",
    y: 3,
  },
  {
    label: "DATA LAYER",
    nodes: ["Supabase PostgreSQL + RLS", "Cloudflare R2"],
    color: "#a0c020",
    y: 4,
  },
  {
    label: "ERP & PAYMENTS",
    nodes: ["Bling ERP (OAuth 2.0)", "Asaas · PagarMe · AppMax", "Melhor Envio"],
    color: "#78a010",
    y: 5,
  },
];

function Architecture() {
  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-container neon-glow" />
          <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
            Solution Architecture Portfolio
          </span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="font-headline-xl text-headline-xl text-primary uppercase mb-6 leading-tight">
          Como Eu <span className="neon-text">Projeto</span> Sistemas
        </motion.h1>
        <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-10">
          Não me limito a escrever código. Projeto arquiteturas que resolvem problemas de negócio reais —
          com decisões conscientes de trade-offs, escalabilidade e manutenibilidade em mente desde o primeiro commit.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <Link
            to="/case-study/plugeefy"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-6 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
          >
            Ver Case Study: Plugeefy
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </Link>
          <a
            href="https://plugeefy.cloud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass-panel text-primary font-label-md px-6 py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest"
          >
            Ver Projeto ao Vivo
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Animated Architecture Diagram */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-3">
            Arquitetura <span className="neon-text">Plugeefy</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Diagrama interativo do ecossistema completo — clique em cada camada para saber mais.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="glass-panel rounded-[32px] p-8 md:p-12 overflow-x-auto"
        >
          <div className="flex flex-col items-center gap-0 min-w-[340px]">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center w-full"
              >
                {/* Node */}
                <div className="group w-full max-w-2xl">
                  <div
                    className="border rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(202,243,0,0.12)]"
                    style={{ borderColor: layer.color + "44", background: layer.color + "08" }}
                  >
                    <p
                      className="font-label-caps text-[10px] tracking-widest uppercase mb-2"
                      style={{ color: layer.color }}
                    >
                      {layer.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.nodes.map((node) => (
                        <span
                          key={node}
                          className="px-3 py-1 rounded-full text-xs font-medium border"
                          style={{ color: layer.color, borderColor: layer.color + "33", background: layer.color + "10" }}
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < layers.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <div className="w-px h-6 bg-gradient-to-b from-primary-container/40 to-primary-container/10" />
                    <span className="material-symbols-outlined text-primary-container/40 text-sm" data-icon="arrow_downward">
                      arrow_downward
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ADRs — Architecture Decision Records */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-3">
            Architecture <span className="neon-text">Decisions</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
            Cada decisão técnica tem um contexto, uma razão e um trade-off consciente.
            Isso é o que separa um arquiteto de um desenvolvedor.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adrs.map((adr) => (
            <motion.div
              key={adr.id}
              variants={fadeInUp}
              className="group glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-4 transition-all duration-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center flex-shrink-0 group-hover:neon-border transition-all">
                  <span className="material-symbols-outlined text-primary-container text-xl" data-icon={adr.icon}>
                    {adr.icon}
                  </span>
                </div>
                <span className="font-label-caps text-[10px] text-primary-container/60 uppercase tracking-widest mt-1">
                  {adr.id}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary text-lg leading-tight">
                {adr.title}
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-1">CONTEXTO</p>
                  <p className="text-on-surface-variant leading-relaxed">{adr.context}</p>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-primary-container/80 uppercase tracking-widest mb-1">DECISÃO</p>
                  <p className="text-on-surface leading-relaxed">{adr.decision}</p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <p className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-1">TRADE-OFF</p>
                  <p className="text-on-surface-variant text-xs leading-relaxed italic">{adr.tradeoff}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Tech Stack by Domain */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-3">
            Stack por <span className="neon-text">Domínio</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Tecnologias organizadas por responsabilidade — não por popularidade.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techDomains.map((domain) => (
            <motion.div
              key={domain.name}
              variants={fadeInUp}
              className={`rounded-2xl p-6 border ${domain.bg} ${domain.border}`}
            >
              <h3 className={`font-label-caps text-[11px] uppercase tracking-widest mb-4 ${domain.color}`}>
                {domain.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs text-on-surface-variant bg-surface-container border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-panel rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-container neon-glow" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px]" />
        <span className="material-symbols-outlined text-primary-container text-5xl mb-4 block" data-icon="architecture">
          architecture
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-4">
          Veja o Case <span className="neon-text">Completo</span>
        </h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl mx-auto mb-8">
          Problema, arquitetura, decisões técnicas e resultados — tudo documentado
          no padrão de um Solutions Architect da AWS.
        </p>
        <Link
          to="/case-study/plugeefy"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-8 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
        >
          Abrir Case Study: Plugeefy
          <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </motion.section>
    </main>
  );
}
