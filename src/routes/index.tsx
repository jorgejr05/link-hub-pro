import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Index() {
  const whatsappMsg = encodeURIComponent("Olá, Jorge! Gostaria de agendar um diagnóstico de IA para minha empresa.");
  const whatsappUrl = `https://wa.me/5518988183746?text=${whatsappMsg}`;

  return (
    <main className="pt-32 pb-24 overflow-hidden">
      {/* ── Hero Section (Consultoria C-Level) ────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <div className="absolute inset-0 bg-gradient-aurora z-[-1]"></div>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="text-center max-w-5xl mx-auto relative z-10"
        >

          
          <motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[72px] mb-6 leading-tight uppercase">
            <span className="text-primary">Inteligência Artificial</span>
            <br />
            <span className="neon-text">Sob Medida</span> para o seu negócio.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-3xl mx-auto">
            Receba um diagnóstico completo da sua operação, com análise de casos de uso, arquitetura de IA, estimativa de custos com LLMs e um plano estratégico para implementação de soluções inteligentes. Elimine integrações engessadas e escale sua empresa com uma infraestrutura de IA.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm font-bold uppercase tracking-widest hover:neon-glow transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
              Agendar Diagnóstico Gratuito
            </a>
            <a 
              href="#cases" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full glass-panel text-primary font-label-md text-sm font-bold uppercase tracking-widest hover:text-primary-container hover:neon-border transition-all duration-300"
            >
              Ver Casos de Sucesso
            </a>
          </motion.div>
        </motion.div>


      </section>

      {/* ── Section 01: Dores Universais & Solução ─────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">O Cenário Atual</span>
            <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2 mb-6">
              A complexidade de <span className="neon-text">implementar IA</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Empresas de todos os tamanhos sabem que precisam de Inteligência Artificial para não ficarem para trás. O problema é a <strong>falta de clareza tecnológica</strong>.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: "close", text: "Gargalos operacionais com tarefas repetitivas e manuais." },
                { icon: "close", text: "Dúvidas sobre qual modelo usar (ChatGPT, Gemini, Claude)." },
                { icon: "close", text: "Medo de custos ocultos e escalabilidade não planejada." },
                { icon: "close", text: "Dificuldade em integrar IA com ERPs e sistemas legados." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-red-400 text-lg flex-shrink-0" data-icon={item.icon}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="glass-panel rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-container neon-glow" />
            <span className="material-symbols-outlined text-4xl text-primary-container mb-6 block" data-icon="architecture">architecture</span>
            <h3 className="font-headline-md text-xl text-primary font-bold mb-4">Como trabalhamos</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Projetamos soluções de IA escaláveis para resolver problemas reais de negócio. Combinamos arquitetura de software, integrações corporativas e automação inteligente para construir plataformas resilientes, preparadas para crescer junto com sua empresa.
            </p>
            <div className="flex items-center gap-2 text-primary-container font-label-caps text-[11px] uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
              ROI Maximizado & Riscos Minimizados
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Section 02: Nossa Metodologia ────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">Como Trabalhamos</span>
          <h2 className="font-headline-xl text-headline-xl text-primary uppercase mt-2">
            Metodologia <span className="neon-text">Consultiva</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              step: "01",
              title: "Diagnóstico & Descoberta",
              desc: "Mergulhamos na sua operação para entender gargalos, processos e fluxos de dados. Identificamos os casos de uso onde a IA trará o maior Retorno sobre Investimento (ROI) no menor tempo.",
              icon: "search_insights"
            },
            {
              step: "02",
              title: "Seleção & Arquitetura",
              desc: "Desenhamos a solução sob medida. Escolhemos o LLM ideal para o seu caso (custo vs. performance) e arquitetamos os padrões corretos (RAG, Agentes Autônomos, MCP Servers, Integrações).",
              icon: "design_services"
            },
            {
              step: "03",
              title: "Desenvolvimento & Integração",
              desc: "Mão na massa. Construímos a solução utilizando as stacks mais modernas, conectamos com seu banco de dados e sistemas (ERPs, CRMs) e entregamos uma operação autônoma e escalável.",
              icon: "terminal"
            }
          ].map((item) => (
            <motion.div key={item.step} variants={fadeInUp} className="glass-panel glass-panel-hover rounded-2xl p-8 relative group transition-all duration-300">
              <div className="text-primary-container/20 font-display-lg text-6xl absolute top-4 right-4 font-bold group-hover:text-primary-container/40 transition-colors">{item.step}</div>
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-container" data-icon={item.icon}>{item.icon}</span>
              </div>
              <h3 className="text-primary font-headline-md text-lg font-bold mb-3 relative z-10">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 03: Casos de Sucesso (Portfólio Validador) ────────── */}
      <section id="cases" className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32 scroll-mt-24">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest">Prova Técnica</span>
          <h2 className="font-headline-xl text-headline-xl text-primary mt-2 mb-4 uppercase">
            O que já <span className="neon-text">construímos</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Nosso ecossistema proprietário comprova nossa capacidade de projetar e executar arquiteturas complexas em diferentes nichos e modelos de negócio.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Plugeefy Card (Destacado) */}
          <motion.div variants={fadeInUp} className="md:col-span-12 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-12 relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container border border-primary-container/30 font-label-caps text-[10px] uppercase tracking-widest">
                    Ecossistema/Saas B2B
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-white/5 font-label-caps text-[10px] uppercase tracking-widest">
                    Em Produção 🟢
                  </span>
                </div>
                <h3 className="font-headline-lg text-4xl text-primary font-bold mb-4 uppercase">Plugeefy AI Commerce</h3>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed max-w-lg">
                  É uma infraestrutura de IA voltada ao comércio digital. Sua arquitetura integra ERPs, modelos globais de LLM, um servidor MCP proprietário, canais de atendimento, logística e gateways de pagamento, permitindo que Agentes de IA executem jornadas completas de suporte, vendas e pós-venda. O ecossistema também fornece dashboards analíticos em tempo real para apoiar decisões estratégicas e otimizar operações comerciais.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/case-study/plugeefy"
                    className="inline-flex items-center gap-2 font-label-md bg-primary-container text-on-primary-container px-6 py-3 rounded-full hover:neon-glow transition-all uppercase tracking-widest text-[11px]"
                  >
                    Ver Caso de Uso <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  </Link>
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-2 font-label-md glass-panel text-primary px-6 py-3 rounded-full hover:neon-border transition-all uppercase tracking-widest text-[11px]"
                  >
                    Ver Arquitetura
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-center items-end opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Abstração Visual do Plugeefy */}
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-surface/50 p-8 font-mono text-sm text-primary-container leading-relaxed">
                  <div className="mb-2 text-outline">{"// JSON-RPC Request (MCP Server)"}</div>
                  <div>{"{"}</div>
                  <div className="pl-4">"method": "tools/call",</div>
                  <div className="pl-4">"params": {"{"} "name": "search_catalog" {"}"}</div>
                  <div>{"}"}</div>
                  <div className="mt-4 text-outline">{"// Agent State Transition"}</div>
                  <div className="text-green-400">[Bling ERP] → [Melhor Envio] → [AppMax]</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ju AI Card */}
          <motion.div variants={fadeInUp} className="md:col-span-8 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-12 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-headline-lg text-3xl text-primary font-bold uppercase">Ju AI</h3>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant border border-white/5 font-label-caps text-[10px] uppercase tracking-widest">
                  Content & SEO
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 max-w-md">
                Assistente inteligente para curadoria de conteúdo e estratégias de SEO estruturado. Otimiza o posicionamento de marcas combinando análises profundas de dados e geração de linguagem natural.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-md text-primary-container uppercase tracking-widest text-[11px] hover:text-primary transition-colors"
                href="https://ju-ai2026.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Explorar Solução <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </motion.div>

          {/* GravaPro AI Card */}
          <motion.div variants={fadeInUp} className="md:col-span-4 glass-panel glass-panel-hover rounded-[32px] p-8 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary-container/5 rounded-full blur-[60px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-4xl text-primary-container mb-6 block"
                data-icon="mic"
              >
                mic
              </span>
              <h3 className="font-headline-md text-2xl text-primary font-bold mb-3 uppercase">GravaPro AI</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">
                Plataforma voltada para automação audiovisual. Setup perfeito e edição inteligente utilizando processamento distribuído.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-md text-outline uppercase tracking-widest text-[10px] hover:text-primary transition-colors mt-auto"
                href="https://gravaproai.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Ver Plataforma <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Section 04: Final CTA ────────────────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="glass-panel rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-aurora opacity-10 mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-primary-container/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="font-headline-xl text-[32px] md:text-[56px] text-primary uppercase mb-6 leading-tight">
              Qual <span className="neon-text">desafio</span> vamos<br className="hidden md:block"/> resolver juntos?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Toda empresa possui gargalos que limitam seu crescimento. Nosso trabalho é identificar esses desafios e projetar uma arquitetura de IA capaz de automatizar processos, integrar sistemas e gerar resultados mensuráveis para o seu negócio.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary-container text-on-primary-container font-label-md text-base font-bold uppercase tracking-widest hover:neon-glow hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined" data-icon="chat">chat</span>
              Agendar Diagnóstico
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}