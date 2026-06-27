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

// ─── DIAGRAM CONFIG ───────────────────────────────────────────────────────────
const W = 960;
const H = 665;

interface DiagramNode {
  id: string;
  x: number; y: number; w: number; h: number;
  label: string; sub: string;
  tier: "primary" | "bright" | "secondary" | "dim";
  icon?: string;
}

const NODES: DiagramNode[] = [
  // Row 1
  { id: "lp",         x:  20, y:  18, w: 218, h: 64, label: "plugeefy.site",         sub: "Landing Page · Vite + React",            tier: "secondary", icon: "web" },
  { id: "dashboard",  x: 548, y:  18, w: 292, h: 64, label: "plugeefy.cloud",         sub: "Dashboard SaaS · Next.js 16 · Vercel",   tier: "primary",   icon: "dashboard" },
  // Row 2
  { id: "api",        x:  18, y: 162, w: 265, h: 74, label: "plugeefy-api",           sub: "Hono + Node.js · Docker · VPS",          tier: "primary",   icon: "api" },
  { id: "supabase",   x: 553, y: 162, w: 287, h: 74, label: "Supabase BaaS",          sub: "PostgreSQL + Auth + RLS por user_id",    tier: "secondary", icon: "storage" },
  // Row 3 — integrations
  { id: "bling",      x:  18, y: 332, w: 132, h: 56, label: "Bling ERP",              sub: "OAuth 2.0 + Webhooks",                   tier: "dim",       icon: "inventory_2" },
  { id: "whatsapp",   x: 163, y: 332, w: 130, h: 56, label: "WhatsApp Cloud",          sub: "Cloud API Oficial · Meta",              tier: "dim",       icon: "chat" },
  { id: "instagram",  x: 306, y: 332, w: 120, h: 56, label: "Instagram",              sub: "Meta Webhooks",                          tier: "dim",       icon: "photo_camera" },
  { id: "asaas",      x: 439, y: 332, w: 108, h: 56, label: "AppMax",                sub: "Gateway de Pagamento",                   tier: "dim",       icon: "payments" },
  // Row 4 — queue
  { id: "bullmq",     x: 108, y: 448, w: 258, h: 62, label: "Redis + BullMQ",         sub: "4 Filas · 5 Workers · Retry Exponencial",tier: "bright",    icon: "stacked_line_chart" },
  // Row 5 — AI
  { id: "mcp",        x:  18, y: 576, w: 165, h: 56, label: "MCP Server",             sub: "JSON-RPC 2.0",                          tier: "primary",   icon: "hub" },
  { id: "langgraph",  x: 196, y: 576, w: 174, h: 56, label: "LangGraph Agent",        sub: "State Machine",                          tier: "primary",   icon: "account_tree" },
  { id: "gemini",     x: 383, y: 576, w: 178, h: 56, label: "Gemini 2.0 · GPT-4o",   sub: "AI Processing",                          tier: "primary",   icon: "auto_awesome" },
  // Right column
  { id: "r2",         x: 682, y: 332, w: 258, h: 42, label: "Cloudflare R2",          sub: "Storage · Assets",                      tier: "dim",       icon: "cloud_upload" },
  { id: "freight",    x: 682, y: 385, w: 258, h: 42, label: "Melhor Envio",           sub: "Frete · Logística",                     tier: "dim",       icon: "local_shipping" },
  { id: "gsc",        x: 682, y: 438, w: 258, h: 42, label: "Search Console · Bing", sub: "AEO Metrics",                           tier: "dim",       icon: "search" },
  { id: "pusher",     x: 682, y: 491, w: 258, h: 42, label: "Pusher WebSocket",       sub: "Real-time Chat",                        tier: "dim",       icon: "wifi" },
  { id: "bing2",      x: 682, y: 544, w: 258, h: 42, label: "LangChain + LangGraph",  sub: "Agent Orchestration",                   tier: "dim",       icon: "psychology" },
];

interface DiagramEdge {
  id: string;
  d: string;
  dim?: boolean;
  label?: string;
  bidirectional?: boolean;
  delay?: number;
}

const EDGES: DiagramEdge[] = [
  // LP → Dashboard
  { id: "lp-dash",   d: "M 238 50 L 548 50",                              label: "CTA", delay: 0 },
  // Dashboard → plugeefy-api
  { id: "dash-api",  d: "M 694 82 C 694 128 150 128 150 162",             delay: 0.1 },
  // plugeefy-api ↔ Supabase (REST bidirecional)
  { id: "api-supa",  d: "M 283 199 L 553 199", bidirectional: true, label: "REST", delay: 0.15 },
  // plugeefy-api → Integrações externas
  { id: "api-bling", d: "M 84 236 L 84 332",                              delay: 0.2 },
  { id: "api-wa",    d: "M 152 236 C 152 285 228 285 228 332",            delay: 0.22 },
  { id: "api-insta", d: "M 200 236 C 200 285 366 285 366 332",            delay: 0.24 },
  { id: "api-asaas", d: "M 248 236 C 248 285 493 285 493 332",            delay: 0.26 },
  // Integrações → Redis + BullMQ
  { id: "bling-q",   d: "M 84 388 C 84 422 172 422 172 448",              delay: 0.3 },
  { id: "wa-q",      d: "M 228 388 C 228 422 222 422 222 448",            delay: 0.32 },
  { id: "insta-q",   d: "M 366 388 C 366 422 272 422 272 448",            delay: 0.34 },
  { id: "asaas-q",   d: "M 493 388 C 493 422 330 422 330 448",            delay: 0.36 },
  // Redis + BullMQ → Camada de IA
  { id: "q-mcp",     d: "M 178 510 C 178 548 101 548 101 576",            delay: 0.4 },
  { id: "q-lg",      d: "M 237 510 C 237 548 283 548 283 576",            delay: 0.42 },
  { id: "q-gem",     d: "M 318 510 C 318 548 472 548 472 576",            delay: 0.44 },
];

const TIER_STYLE = {
  primary:   { border: "#caf300", bg: "rgba(202,243,0,0.07)",  labelColor: "#caf300",  subColor: "#8a9060" },
  bright:    { border: "#caf300", bg: "rgba(202,243,0,0.13)",  labelColor: "#caf300",  subColor: "#8a9060" },
  secondary: { border: "rgba(255,255,255,0.14)", bg: "rgba(255,255,255,0.04)", labelColor: "#dae2fd", subColor: "#6b7280" },
  dim:       { border: "rgba(255,255,255,0.07)", bg: "rgba(255,255,255,0.02)", labelColor: "#9ca3af", subColor: "#4b5563" },
};

// ─── SVG DIAGRAM ─────────────────────────────────────────────────────────────
function PlugeefyDiagram() {
  return (
    <div className="relative w-full overflow-x-auto">
      <div style={{ minWidth: `${W}px`, height: `${H}px`, position: "relative" }}>

        {/* SVG edges layer */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <defs>
            <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="rgba(202,243,0,0.6)" />
            </marker>
            <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto-start-reverse">
              <polygon points="0 0, 8 3, 0 6" fill="rgba(202,243,0,0.6)" />
            </marker>
            <marker id="arrow-end-dim" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="rgba(202,243,0,0.25)" />
            </marker>
          </defs>

          {EDGES.map((edge) => (
            <motion.path
              key={edge.id}
              d={edge.d}
              fill="none"
              stroke={edge.dim ? "rgba(202,243,0,0.2)" : "rgba(202,243,0,0.45)"}
              strokeWidth={edge.dim ? 1 : 1.5}
              strokeDasharray="6 3"
              markerEnd={edge.dim ? "url(#arrow-end-dim)" : "url(#arrow-end)"}
              markerStart={edge.bidirectional ? "url(#arrow-start)" : undefined}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: edge.delay ?? 0, ease: "easeInOut" }}
            />
          ))}

          {/* Edge labels */}
          {EDGES.filter((e) => e.label).map((edge) => {
            const parts = edge.d.match(/M\s*([\d.]+)\s*([\d.]+)/);
            const ex = parts ? parseFloat(parts[1]) : 0;
            const ey = parts ? parseFloat(parts[2]) : 0;
            const labelX = edge.id === "lp-dash" ? (ex + 155) : ex + 30;
            const labelY = edge.id === "lp-dash" ? ey - 8 : ey - 8;
            return (
              <motion.text
                key={`${edge.id}-lbl`}
                x={labelX}
                y={labelY}
                fill="rgba(202,243,0,0.5)"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="1"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (edge.delay ?? 0) + 0.5 }}
              >
                {edge.label}
              </motion.text>
            );
          })}
        </svg>

        {/* HTML Nodes */}
        {NODES.map((node, i) => {
          const style = TIER_STYLE[node.tier];
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              style={{
                position: "absolute",
                left: node.x,
                top: node.y,
                width: node.w,
                height: node.h,
                border: `1px solid ${style.border}`,
                background: style.bg,
                borderRadius: "12px",
                padding: "8px 12px",
                cursor: "default",
                backdropFilter: "blur(4px)",
                transition: "box-shadow 0.2s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2px",
              }}
              className="group hover:shadow-[0_0_20px_rgba(202,243,0,0.15)]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {node.icon && (
                  <span
                    className="material-symbols-outlined"
                    data-icon={node.icon}
                    style={{ fontSize: "14px", color: style.labelColor, opacity: 0.8, flexShrink: 0 }}
                  >
                    {node.icon}
                  </span>
                )}
                <p
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 700,
                    fontSize: node.tier === "dim" ? "11px" : "13px",
                    color: style.labelColor,
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                  }}
                >
                  {node.label}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  color: style.subColor,
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                  paddingLeft: node.icon ? "20px" : "0",
                }}
              >
                {node.sub}
              </p>
            </motion.div>
          );
        })}

        {/* Section labels */}
        {[
          { x: 556, y: 338, text: "INTEGRAÇÕES ADICIONAIS" },
          { x: 20, y: 318, text: "INTEGRAÇÕES EXTERNAS" },
          { x: 108, y: 434, text: "QUEUE LAYER" },
          { x: 18, y: 562, text: "AI LAYER" },
        ].map((lbl) => (
          <div
            key={lbl.text}
            style={{
              position: "absolute",
              left: lbl.x,
              top: lbl.y,
              fontFamily: "Inter, sans-serif",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(202,243,0,0.35)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {lbl.text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ADRs ─────────────────────────────────────────────────────────────────────
const adrs = [
  { id: "ADR-001", title: "Hono sobre Express/Fastify", context: "Necessidade de processar webhooks de alta frequência com latência mínima e type-safety total.", decision: "Hono é edge-ready, zero dependências desnecessárias, middleware pipeline nativo em TypeScript e performance superior.", tradeoff: "Menor ecossistema de plugins vs. performance ~40% superior e code size reduzido.", icon: "bolt" },
  { id: "ADR-002", title: "BullMQ + Redis para Webhooks", context: "Webhooks do Bling e WhatsApp chegam em rajadas. Processar sincronamente causa timeout e perda de eventos críticos.", decision: "Enfileirar todos os eventos no BullMQ com retentativas exponenciais. Workers processam de forma assíncrona com concorrência de 5.", tradeoff: "Complexidade operacional adicional vs. zero perda de dados e retry automático em falhas.", icon: "stacked_line_chart" },
  { id: "ADR-003", title: "MCP Protocol Nativo", context: "ChatGPT, Claude e Gemini estão adotando o Model Context Protocol como padrão de integração com sistemas externos.", decision: "Servidor MCP nativo (JSON-RPC 2.0) expondo 3 tools: get_store_context, search_catalog, get_product_details.", tradeoff: "Risco de adoção antecipada vs. vantagem de first-mover e integração nativa com todos os LLMs.", icon: "hub" },
  { id: "ADR-004", title: "LangGraph para Agente de Vendas", context: "O fluxo de venda via WhatsApp tem múltiplos estados (buscar cliente, produto, calcular frete, criar pedido).", decision: "State machine explícita via LangGraph com transições determinísticas. Elimina alucinações em etapas críticas.", tradeoff: "Acoplamento ao framework vs. prevenção total de alucinações em fluxos financeiros críticos.", icon: "account_tree" },
  { id: "ADR-005", title: "Campo erp_source no Schema", context: "Hoje o único ERP suportado é o Bling. Amanhã podem ser Omie, Tiny, TOTVS — cada um com APIs diferentes.", decision: "Campo erp_source = 'bling' desde o primeiro commit. Extensão para novos ERPs sem breaking change no banco.", tradeoff: "Complexidade marginal no schema vs. zero custo de migração no futuro.", icon: "schema" },
  { id: "ADR-006", title: "Supabase + Row Level Security", context: "SaaS multi-tenant exige isolamento rigoroso entre dados de diferentes merchants. Time solo, prazo curto.", decision: "Supabase BaaS com RLS nativo: auth.uid() = user_id. Zero código de filtro na aplicação.", tradeoff: "Vendor lock-in parcial vs. velocidade de desenvolvimento 3-5x maior e segurança em nível de banco.", icon: "security" },
];

const techDomains = [
  { name: "AI & Orquestração",    color: "text-primary-container", border: "border-primary-container/30", bg: "bg-primary-container/5",  items: ["LangChain", "LangGraph", "Google Gemini 2.0", "OpenAI GPT-4o", "MCP Protocol", "Prompt Engineering"] },
  { name: "Backend & API",         color: "text-primary",           border: "border-primary/20",           bg: "bg-primary/5",            items: ["Hono", "Node.js 20", "TypeScript", "JSON-RPC 2.0", "OAuth 2.0", "Webhooks", "Zod"] },
  { name: "Filas & Cache",         color: "text-on-surface",        border: "border-white/10",             bg: "bg-white/5",              items: ["BullMQ", "Redis self-hosted", "5 Workers", "Exponential Backoff", "4 Filas Independentes"] },
  { name: "Banco & Storage",       color: "text-primary-container", border: "border-primary-container/30", bg: "bg-primary-container/5",  items: ["Supabase PostgreSQL", "Row Level Security", "Cloudflare R2", "AWS SDK S3", "Migrations SQL"] },
  { name: "Frontend & UX",         color: "text-primary",           border: "border-primary/20",           bg: "bg-primary/5",            items: ["Next.js 16", "React 19", "TanStack Router", "Tailwind CSS v4", "Framer Motion", "Shadcn/ui", "Pusher"] },
  { name: "Integrações (15+)",     color: "text-on-surface",        border: "border-white/10",             bg: "bg-white/5",              items: ["Bling ERP", "Evolution API", "WhatsApp Cloud", "Instagram/Meta", "Asaas", "PagarMe", "Melhor Envio", "Google Search Console"] },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Architecture() {
  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Botão Voltar */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-xs md:text-sm mb-8 md:mb-12">
          <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
          Voltar para a Home
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.section initial="hidden" animate="show" variants={staggerContainer} className="mb-16 md:mb-24">
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-container neon-glow" />
          <span className="font-label-caps text-[10px] md:text-label-caps text-primary-container uppercase tracking-widest">Solution Architecture Portfolio</span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="font-headline-xl text-2xl md:text-4xl lg:text-5xl text-primary uppercase mb-4 md:mb-6 leading-tight">
          Como Eu <span className="neon-text">Projeto</span> Sistemas
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-3xl mb-6 md:mb-10 leading-relaxed">
          Não me limito a escrever código. Projeto arquiteturas que resolvem problemas de negócio reais —
          com decisões conscientes de trade-offs, escalabilidade e manutenibilidade em mente desde o primeiro commit.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 md:gap-4">
          <Link to="/case-study/plugeefy" className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest text-[10px] md:text-sm">
            Ver Case Study: Plugeefy
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </Link>
          <a href="https://plugeefy.cloud" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass-panel text-primary font-label-md px-5 py-2 md:px-6 md:py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest text-[10px] md:text-sm">
            Ver Projeto ao Vivo
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Architecture Diagram */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-16 md:mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
          <h2 className="font-headline-xl text-2xl md:text-3xl lg:text-4xl text-primary uppercase mb-2 md:mb-3">
            Ecossistema <span className="neon-text">Plugeefy</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
            Diagrama completo de todos os serviços, conexões e fluxos de dados — da Landing Page ao ERP.
            Cada seta representa uma integração real em produção.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="glass-panel rounded-[24px] md:rounded-[32px] p-4 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
          <div className="absolute -top-32 right-0 w-80 h-80 bg-primary-container/3 rounded-full blur-[100px]" />
          {/* Wrapper para scroll horizontal em telas menores */}
          <div className="overflow-x-auto overflow-y-hidden pb-2">
            <div className="min-w-[700px]">
              <PlugeefyDiagram />
            </div>
          </div>
          <p className="text-center text-outline text-[10px] uppercase tracking-widest mt-3 md:hidden">← Arraste para explorar →</p>
        </motion.div>
      </motion.section>

      {/* AI Agent Architecture */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mb-16 md:mb-24"
      >
        <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
          <h2 className="font-headline-xl text-2xl md:text-3xl lg:text-4xl text-primary uppercase mb-2 md:mb-3">
            Arquitetura do <span className="neon-text">Agente de IA</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
            Como o LangGraph orquestra o fluxo completo de venda via WhatsApp —
            do "Olá" ao pedido criado no Bling ERP, com state machine determinística.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="glass-panel rounded-[24px] md:rounded-[32px] p-4 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
          <div className="absolute -top-32 left-0 w-80 h-80 bg-primary-container/3 rounded-full blur-[100px]" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10">

            {/* Left — vertical flow */}
            <div className="flex flex-col items-center gap-0 flex-1 min-w-0">

              {[
                { icon: "person",           label: "Usuário (WhatsApp / CRM)",              sub: "Cliente envia mensagem em linguagem natural",                             bright: false, accent: false },
                { icon: "webhook",          label: "Webhook recebe mensagem",                sub: "Hono API Gateway · validação e parse do payload",                        bright: false, accent: false },
                { icon: "stacked_line_chart",label: "BullMQ Queue — whatsapp-messages",     sub: "Evento enfileirado · retry exponencial (3×) · removeOnComplete: 100",    bright: true,  accent: false },
                { icon: "engineering",      label: "Worker processa job",                    sub: "5 workers concorrentes · processamento assíncrono isolado",               bright: false, accent: false },
              ].map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center w-full"
                >
                  <div
                    className="w-full max-w-lg rounded-2xl px-5 py-4 flex items-start gap-3 border"
                    style={{
                      borderColor: step.bright ? "rgba(202,243,0,0.5)" : "rgba(255,255,255,0.10)",
                      background:  step.bright ? "rgba(202,243,0,0.10)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="material-symbols-outlined text-xl flex-shrink-0 mt-0.5" data-icon={step.icon}
                      style={{ color: step.bright ? "#caf300" : "#9ca3af" }}>
                      {step.icon}
                    </span>
                    <div>
                      <p style={{ fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:"13px", color: step.bright ? "#caf300" : "#dae2fd" }}>
                        {step.label}
                      </p>
                      <p style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", color:"#6b7280", marginTop:"2px" }}>
                        {step.sub}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-5 bg-gradient-to-b from-primary-container/40 to-primary-container/10" />
                    <span className="material-symbols-outlined text-primary-container/30 text-sm" data-icon="arrow_downward">arrow_downward</span>
                  </div>
                </motion.div>
              ))}

              {/* State Machine */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.44 }}
                className="w-full max-w-lg"
              >
                <div className="rounded-2xl border border-primary-container/50 overflow-hidden" style={{ background: "rgba(202,243,0,0.06)" }}>
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-primary-container/20" style={{ background: "rgba(202,243,0,0.09)" }}>
                    <span className="material-symbols-outlined text-primary-container text-xl" data-icon="account_tree">account_tree</span>
                    <div>
                      <p style={{ fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:"13px", color:"#caf300" }}>agentRouter.ts — State Machine</p>
                      <p style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", color:"#8a9060" }}>LangGraph · src/agent/agentRouter.ts</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex flex-col gap-2.5">
                    {[
                      { state: "coletarCpf",                desc: "busca cliente no Bling ERP por CPF/CNPJ" },
                      { state: "buscarProdutos",            desc: "search fulltext no catálogo Supabase" },
                      { state: "selecionarProduto",         desc: "adiciona item ao carrinho com quantidade" },
                      { state: "perguntaContinuarAdicionar",desc: "aguarda intenção do usuário" },
                      { state: "calcularFrete",             desc: "tool: calculateBlingFrete(cep, peso)" },
                      { state: "confirmarTotal",            desc: "exibe resumo: produtos, frete e total ao cliente" },
                      { state: "processarPagamento",        desc: "tool: appmax.gerarCobranca(PIX | Cartão de Crédito)" },
                      { state: "pedidoCriado",              desc: "pagamento confirmado · criarPedidoBling(payload) + confirmação" },
                    ].map((s, i) => (
                      <motion.div
                        key={s.state}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(202,243,0,0.6)" }} />
                          {i < 6 && <div className="w-px h-4 mt-0.5" style={{ background: "rgba(202,243,0,0.15)" }} />}
                        </div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                          <span style={{ fontFamily:"monospace", fontSize:"12px", color:"#caf300", fontWeight:600 }}>{s.state}</span>
                          <span style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", color:"#6b7280" }}>→ {s.desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-5 bg-gradient-to-b from-primary-container/40 to-primary-container/10" />
                <span className="material-symbols-outlined text-primary-container/30 text-sm" data-icon="arrow_downward">arrow_downward</span>
              </div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="w-full max-w-lg"
              >
                <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-white/8">
                    <span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="build">build</span>
                    <div>
                      <p style={{ fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:"13px", color:"#dae2fd" }}>Tools disponíveis</p>
                      <p style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", color:"#6b7280" }}>src/agent/tools/</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex flex-col gap-3">
                    {[
                      { fn: "getCustomer(cpf/cnpj)",         target: "Bling API",          icon: "person_search" },
                      { fn: "getAddressByCep(cep)",         target: "ViaCEP API",          icon: "location_on" },
                      { fn: "calculateFrete(cep, peso)",    target: "Melhor Envio API",    icon: "local_shipping" },
                      { fn: "appmax.gerarCobranca(payload)",target: "AppMax · PIX / Cartão",icon: "payments" },
                    ].map((tool, i) => (
                      <motion.div
                        key={tool.fn}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.05 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg border border-white/8 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
                          <span className="material-symbols-outlined text-outline text-sm" data-icon={tool.icon}>{tool.icon}</span>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span style={{ fontFamily:"monospace", fontSize:"12px", color:"#9ca3af" }}>{tool.fn}</span>
                          <span style={{ fontFamily:"Inter,sans-serif", fontSize:"10px", color:"#4b5563" }}>→ {tool.target}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Final connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-5 bg-gradient-to-b from-primary-container/40 to-primary-container/10" />
                <span className="material-symbols-outlined text-primary-container/30 text-sm" data-icon="arrow_downward">arrow_downward</span>
              </div>

              {/* Output */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="w-full max-w-lg"
              >
                <div className="rounded-2xl px-5 py-4 flex items-start gap-3 border border-primary-container/50" style={{ background: "rgba(202,243,0,0.10)" }}>
                  <span className="material-symbols-outlined text-primary-container text-xl flex-shrink-0 mt-0.5" data-icon="send">send</span>
                  <div>
                    <p style={{ fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:"13px", color:"#caf300" }}>
                      Resposta enviada via Evolution API
                    </p>
                    <p style={{ fontFamily:"Inter,sans-serif", fontSize:"11px", color:"#8a9060", marginTop:"2px" }}>
                      WhatsApp Cloud · mensagem de confirmação do pedido ao cliente
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — context panel */}
            <div className="lg:w-64 flex-shrink-0 flex flex-col gap-4">
              <div className="rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="font-label-caps text-[10px] text-primary-container uppercase tracking-widest mb-3">Por que LangGraph?</p>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  Um agente simples de LLM alucinaria na hora de criar pedidos no ERP.
                  O LangGraph força <strong className="text-primary">transições determinísticas</strong> — o cliente não pode pular etapas,
                  e o agente nunca cria pedido sem confirmação explícita.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="font-label-caps text-[10px] text-primary-container uppercase tracking-widest mb-3">Stack do Agente</p>
                <div className="flex flex-col gap-1.5">
                  {["LangChain ^1.1.5","LangGraph ^1.1.5","@google/genai ^1.25.0","openai ^5.22.0","TypeScript ^5.0","Zod (validação)"].map((item) => (
                    <span key={item} className="font-mono text-[11px] text-on-surface-variant px-2 py-1 rounded border border-white/5" style={{ background: "rgba(255,255,255,0.03)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-primary-container/20 p-5" style={{ background: "rgba(202,243,0,0.04)" }}>
                <p className="font-label-caps text-[10px] text-primary-container uppercase tracking-widest mb-3">Fluxo real</p>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  O agente lida com ambiguidade — frases como <em className="text-primary">"quero 2 daquele tênis"</em> são resolvidas via contexto de sessão mantido no estado LangGraph.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ADRs */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="mb-24">
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
            <motion.div key={adr.id} variants={fadeInUp} className="group glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-4 transition-all duration-500">
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center flex-shrink-0 group-hover:neon-border transition-all">
                  <span className="material-symbols-outlined text-primary-container text-xl" data-icon={adr.icon}>{adr.icon}</span>
                </div>
                <span className="font-label-caps text-[10px] text-primary-container/60 uppercase tracking-widest mt-1">{adr.id}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary text-lg leading-tight">{adr.title}</h3>
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

      {/* Tech Stack */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="mb-24">
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-3">
            Stack por <span className="neon-text">Domínio</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md">Tecnologias organizadas por responsabilidade — não por popularidade.</p>
        </motion.div>
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techDomains.map((domain) => (
            <motion.div key={domain.name} variants={fadeInUp} className={`rounded-2xl p-6 border ${domain.bg} ${domain.border}`}>
              <h3 className={`font-label-caps text-[11px] uppercase tracking-widest mb-4 ${domain.color}`}>{domain.name}</h3>
              <div className="flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full text-xs text-on-surface-variant bg-surface-container border border-white/5">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="glass-panel rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-container neon-glow" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px]" />
        <span className="material-symbols-outlined text-primary-container text-5xl mb-4 block" data-icon="architecture">architecture</span>
        <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-4">
          Veja o Case <span className="neon-text">Completo</span>
        </h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl mx-auto mb-8">
          Problema, arquitetura, decisões técnicas e resultados — tudo documentado no padrão de um Solutions Architect da AWS.
        </p>
        <Link to="/case-study/plugeefy" className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md px-8 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest">
          Abrir Case Study: Plugeefy
          <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </motion.section>
    </main>
  );
}
