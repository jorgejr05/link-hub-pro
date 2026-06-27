import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/curriculo")({
  component: Curriculo,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const skills = {
  "Nuvem & Infra": ["Docker", "Vercel Edge", "VPS / EasyPanel", "Cloudflare R2", "Supabase", "Node.js 20"],
  "IA & Agentes": ["LangChain", "LangGraph", "Gemini 2.0", "GPT-4o", "Groq", "Protocolo MCP", "Prompt Engineering", "RAG"],
  "Backend & APIs": ["Hono", "Next.js Routes", "REST", "OAuth 2.0", "Webhooks", "JSON-RPC 2.0", "TypeScript", "Zod"],
  "Banco & Filas": ["PostgreSQL", "Supabase RLS", "Redis", "BullMQ", "Migrations SQL"],
  "Frontend": ["Next.js 16", "React 19", "Vite", "TanStack Router", "Tailwind CSS v4", "Framer Motion", "Shadcn/ui"],
  "Integrações": ["Bling ERP", "Evolution API", "WhatsApp Cloud", "Instagram/Meta", "Asaas", "PagarMe", "Melhor Envio", "Google Search Console"],
};

const adrs = [
  { id: "ADR-001", title: "Hono vs Express", detail: "Ingestão de webhooks de alta frequência — menos plugins, 40% mais performance." },
  { id: "ADR-002", title: "BullMQ + Redis", detail: "Rajadas de eventos exigem fila assíncrona — zero perda de dados, retry automático." },
  { id: "ADR-003", title: "Servidor MCP", detail: "Padrão Anthropic/OpenAI — lojas consultáveis nativamente por qualquer LLM." },
  { id: "ADR-004", title: "LangGraph", detail: "State machine determinística — zero alucinações em criação de pedidos no ERP." },
  { id: "ADR-005", title: "erp_source no Schema", detail: "Multi-ERP desde o início — Bling hoje, Omie/Tiny amanhã, sem migration." },
  { id: "ADR-006", title: "Supabase + RLS", detail: "Isolamento multi-tenant garantido em banco — 3-5x mais velocidade de desenvolvimento." },
];

function Curriculo() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const content = {
    pt: {
      title: "Arquiteto de Soluções de IA & Engenheiro Full-Stack",
      location: "Araçatuba-SP, Brasil",
      summaryLabel: "Resumo Profissional",
      summary: "Arquiteto de Soluções especializado em plataformas alimentadas por IA, sistemas distribuídos e integrações corporativas. Construí e lancei a Plugeefy — plataforma SaaS multi-tenant que expõe catálogos de e-commerce para LLMs (ChatGPT, Gemini, Perplexity) via servidor MCP nativo, pipeline de webhooks assíncronos com BullMQ + Redis e agente de IA LangGraph para automação de vendas via WhatsApp.",
      expLabel: "Experiência",
      jobs: [
        {
          role: "Fundador & Arquiteto de Soluções de IA",
          company: "Plugeefy",
          period: "2025 – Presente",
          url: "plugeefy.cloud",
          bullets: [
            "Implementei servidor MCP nativo (JSON-RPC 2.0) — ChatGPT, Claude e Gemini consultam catálogos de lojas em tempo real via tools: search_catalog, get_store_context, get_product_details.",
            "Pipeline de webhooks orientado a eventos com BullMQ + Redis em 4 filas independentes — 5 workers concorrentes, retry exponencial (5 tentativas), zero perda de dados.",
            "Agente de IA stateful com LangGraph orquestrando fluxo completo de venda via WhatsApp: busca CPF/CNPJ no Bling → carrinho → frete (Melhor Envio) → criação de pedido no ERP.",
            "Integração OAuth 2.0 completa com Bling ERP — 20+ endpoints de sincronização (produtos, clientes, pedidos, logística) com atualização em tempo real via webhooks.",
            "Cron diário às 03:00 sincronizando Google Search Console e Bing Webmaster Tools para métricas de AEO no dashboard.",
            "15+ integrações em produção: Asaas, PagarMe, AppMax (pagamentos), Evolution API + WhatsApp Cloud + Instagram/Meta (canais), Cloudflare R2 (storage), Pusher (real-time).",
          ],
        },
        {
          role: "Fundador & Engenheiro de Produto",
          company: "Ju AI",
          period: "2026 – Presente",
          url: "ju-ai2026.vercel.app",
          bullets: [
            "Assistente de IA para curadoria de conteúdo, SEO e produtividade para criadores e empreendedores.",
            "Stack: Next.js, Supabase, Groq API, Tailwind CSS, Framer Motion, PWA.",
          ],
        },
        {
          role: "Fundador & Engenheiro de Produto",
          company: "GravaPro AI",
          period: "2025 – Presente",
          url: "gravaproai.vercel.app",
          bullets: [
            "Plataforma de IA para criadores de conteúdo com setup automatizado de vídeo e processamento de áudio via ffmpeg e Cloudflare R2.",
          ],
        },
      ],
      skillsLabel: "Competências Técnicas",
      adrLabel: "Decisões de Arquitetura (ADRs)",
      eduLabel: "Formação",
      edu: "Tecnologia da Informação (em andamento) — Foco em Arquitetura de Software, Sistemas Distribuídos e IA.",
      langLabel: "Idiomas",
      langs: ["Português (Nativo)", "Inglês (Profissional — leitura/escrita técnica)"],
      download: "Baixar PDF",
      print: "Imprimir",
    },
    en: {
      title: "AI Solutions Architect & Full-Stack Engineer",
      location: "Araçatuba-SP, Brazil",
      summaryLabel: "Professional Summary",
      summary: "Solutions Architect specializing in AI-powered platforms, distributed systems, and enterprise integrations. Built and shipped Plugeefy — a multi-tenant SaaS platform that exposes e-commerce catalogs to AI systems (ChatGPT, Gemini, Perplexity) via native MCP server, async webhook pipeline with BullMQ + Redis, and a LangGraph AI agent for automated WhatsApp sales.",
      expLabel: "Experience",
      jobs: [
        {
          role: "Founder & AI Solutions Architect",
          company: "Plugeefy",
          period: "2025 – Present",
          url: "plugeefy.cloud",
          bullets: [
            "Implemented native MCP server (JSON-RPC 2.0) — ChatGPT, Claude and Gemini query store catalogs in real time via tools: search_catalog, get_store_context, get_product_details.",
            "Event-driven webhook pipeline with BullMQ + Redis across 4 independent queues — 5 concurrent workers, exponential backoff retry (5 attempts), zero data loss.",
            "Stateful LangGraph AI agent orchestrating complete WhatsApp B2C sales flow: CPF/CNPJ lookup in Bling ERP → cart → freight calculation (Melhor Envio) → automated order creation.",
            "Full OAuth 2.0 integration with Bling ERP — 20+ sync endpoints (products, customers, orders, logistics) with real-time updates via webhooks.",
            "Daily cron at 03:00 syncing Google Search Console and Bing Webmaster Tools for AEO metrics in the dashboard.",
            "15+ integrations in production: Asaas, PagarMe, AppMax (payments), Evolution API + WhatsApp Cloud + Instagram/Meta (channels), Cloudflare R2 (storage), Pusher (real-time).",
          ],
        },
        {
          role: "Founder & Product Engineer",
          company: "Ju AI",
          period: "2026 – Present",
          url: "ju-ai2026.vercel.app",
          bullets: [
            "AI assistant platform for content curation, SEO strategy and productivity for creators and entrepreneurs.",
            "Stack: Next.js, Supabase, Groq API, Tailwind CSS, Framer Motion, PWA.",
          ],
        },
        {
          role: "Founder & Product Engineer",
          company: "GravaPro AI",
          period: "2025 – Present",
          url: "gravaproai.vercel.app",
          bullets: [
            "AI platform for content creators with automated video setup and audio processing via ffmpeg and Cloudflare R2.",
          ],
        },
      ],
      skillsLabel: "Technical Skills",
      adrLabel: "Architecture Decision Records (ADRs)",
      eduLabel: "Education",
      edu: "Information Technology (in progress) — Focus on Software Architecture, Distributed Systems and AI.",
      langLabel: "Languages",
      langs: ["Portuguese (Native)", "English (Professional — technical reading/writing)"],
      download: "Download PDF",
      print: "Print",
    },
  };

  const c = content[lang];

  const handlePrint = () => window.print();

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-area { background: white !important; color: black !important; max-width: 100% !important; padding: 20px !important; }
          .glass-panel { background: white !important; border: 1px solid #e5e7eb !important; }
        }
      `}</style>

      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
        {/* Controls — no-print */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="no-print flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
        >
          <motion.div variants={fadeInUp}>
            <p className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-1">Currículo · Resume</p>
            <h1 className="font-headline-xl text-headline-xl text-primary uppercase">
              Jorge <span className="neon-text">Gomes Jr.</span>
            </h1>
          </motion.div>

          {/* Controls */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
            {/* Language toggle */}
            <div className="flex rounded-full border border-white/10 overflow-hidden bg-surface-container-low">
              <button
                onClick={() => setLang("pt")}
                className={`px-5 py-2 font-label-caps text-[11px] uppercase tracking-widest transition-all ${lang === "pt" ? "bg-primary-container text-on-primary-container" : "text-on-surface-variant hover:text-primary"}`}
              >
                PT-BR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-2 font-label-caps text-[11px] uppercase tracking-widest transition-all ${lang === "en" ? "bg-primary-container text-on-primary-container" : "text-on-surface-variant hover:text-primary"}`}
              >
                EN
              </button>
            </div>

            {/* Print/Download */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md text-sm px-5 py-2 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
              {c.download}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 glass-panel text-primary font-label-caps text-[11px] px-5 py-2 rounded-full hover:neon-border transition-all uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm" data-icon="print">print</span>
              {c.print}
            </button>
          </motion.div>
        </motion.div>

        {/* CV Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="print-area"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="glass-panel rounded-[32px] p-8 md:p-12 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
            <div className="absolute -top-20 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-primary uppercase mb-1">Jorge Gomes Jr.</h2>
              <p className="font-body-lg text-body-lg text-primary-container mb-5">{c.title}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-on-surface-variant text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-outline" data-icon="location_on">location_on</span>
                  {c.location}
                </span>
                <a href="https://jorgejr.site" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-outline" data-icon="language">language</span>
                  jorgejr.site
                </a>
                <a href="https://github.com/jorgejr05" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-outline" data-icon="code">code</span>
                  github.com/jorgejr05
                </a>
                <a href="https://wa.me/5518988183746" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-outline" data-icon="phone_iphone">phone_iphone</span>
                  +55 (18) 98818-3746
                </a>
              </div>
            </div>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Summary */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-4">{c.summaryLabel}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.summary}</p>
              </motion.div>

              {/* Experience */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-6">{c.expLabel}</h3>
                <div className="flex flex-col gap-8">
                  {c.jobs.map((job, i) => (
                    <div key={i} className={i > 0 ? "pt-8 border-t border-white/5" : ""}>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="text-primary font-medium text-base">{job.role}</h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-primary-container text-sm font-medium">{job.company}</span>
                            <span className="text-outline text-xs">·</span>
                            <a href={`https://${job.url}`} target="_blank" rel="noreferrer" className="text-outline text-xs hover:text-primary transition-colors">
                              {job.url}
                            </a>
                          </div>
                        </div>
                        <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-white/5">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-on-surface-variant text-sm leading-relaxed">
                            <span className="text-primary-container mt-1.5 flex-shrink-0 text-xs">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ADRs */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-5">{c.adrLabel}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {adrs.map((adr) => (
                    <div key={adr.id} className="rounded-xl border border-white/5 bg-surface-container-low p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] text-primary-container/60">{adr.id}</span>
                        <span className="text-primary text-xs font-medium">{adr.title}</span>
                      </div>
                      <p className="text-on-surface-variant text-xs leading-relaxed">{adr.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Skills */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-5">{c.skillsLabel}</h3>
                <div className="flex flex-col gap-5">
                  {Object.entries(skills).map(([domain, items]) => (
                    <div key={domain}>
                      <p className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-2">{domain}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span key={item} className="px-2 py-0.5 rounded text-[11px] text-on-surface-variant bg-surface-container border border-white/5 font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-4">{c.eduLabel}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.edu}</p>
              </motion.div>

              {/* Languages */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7">
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-4">{c.langLabel}</h3>
                <div className="flex flex-col gap-2">
                  {c.langs.map((l) => (
                    <div key={l} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-glow flex-shrink-0" />
                      <span className="text-on-surface-variant text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
                <h3 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-4">Links</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Portfólio", url: "https://jorgejr.site", icon: "language" },
                    { label: "Arquitetura", url: "https://jorgejr.site/architecture", icon: "schema" },
                    { label: "Case Study: Plugeefy", url: "https://jorgejr.site/case-study/plugeefy", icon: "cases" },
                    { label: "GitHub", url: "https://github.com/jorgejr05", icon: "code" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary-container transition-colors group"
                    >
                      <span className="material-symbols-outlined text-base text-outline group-hover:text-primary-container transition-colors" data-icon={link.icon}>
                        {link.icon}
                      </span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
