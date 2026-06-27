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
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <div className="absolute inset-0 bg-gradient-aurora z-[-1]"></div>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8 border-primary-container/20">
            <span
              className="w-2 h-2 rounded-full bg-primary-container animate-pulse neon-glow"
            ></span>
            <span className="font-label-caps text-label-caps text-primary-container tracking-widest uppercase">
              Premium Mode Activated
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[72px] mb-6 leading-tight uppercase">
            <span className="text-primary">IA para quem busca consistência,</span>
            <br />
            <span className="neon-text">não desculpas.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Hub de alta performance focado em ecossistemas de IA, automação de
            conteúdo e construção de autoridade real.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm font-bold uppercase tracking-widest hover:neon-glow transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Acessar Ecossistema
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-primary font-label-md text-sm font-bold uppercase tracking-widest hover:text-primary-container hover:neon-border transition-all duration-300">
              Ver Projetos
            </button>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            Descobrir
          </span>
          <span
            className="material-symbols-outlined text-on-surface animate-bounce"
            data-icon="keyboard_arrow_down"
          >
            keyboard_arrow_down
          </span>
        </motion.div>
      </section>

      {/* Ecosystem Section (Bento Grid) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase">
            Ecossistema <span className="neon-text">Proprietário</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Ferramentas e plataformas construídas para escalar sua autoridade digital.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Ju AI Card */}
          <motion.div variants={fadeInUp} className="md:col-span-8 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-12 relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">Ju AI</h3>
                <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container border border-primary-container/30 font-label-caps text-label-caps uppercase tracking-widest">
                  Beta Exclusivo
                </span>
              </div>
              <div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
                  Assistente de inteligência artificial otimizada para curadoria de conteúdo e estratégias de SEO high-end.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-label-md text-primary-container uppercase tracking-widest hover:text-primary transition-colors"
                  href="https://ju-ai2026.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explorar <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* GravaPro AI Card */}
          <motion.div variants={fadeInUp} className="md:col-span-4 glass-panel glass-panel-hover rounded-[32px] p-8 relative overflow-hidden group transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container/5 rounded-full blur-[60px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-primary-container mb-4"
                  data-icon="mic"
                  data-weight="fill"
                >
                  mic
                </span>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">GravaPro AI</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Setup perfeito e edição automatizada para criadores exigentes.
                </p>
              </div>
              <a
                className="text-outline hover:text-primary-container transition-colors mt-auto self-start"
                href="https://gravaproai.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined" data-icon="open_in_new">
                  open_in_new
                </span>
              </a>
            </div>
          </motion.div>

          {/* Plugeefy Card — Architecture Portfolio */}
          <motion.div variants={fadeInUp} className="md:col-span-12 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-12 relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container neon-glow" />
            <div className="absolute -top-20 right-0 w-72 h-72 bg-primary-container/5 rounded-full blur-[80px] group-hover:bg-primary-container/8 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row gap-10">
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="material-symbols-outlined text-primary-container" data-icon="extension">extension</span>
                  <h3 className="font-headline-lg text-headline-lg text-primary font-bold">Plugeefy</h3>
                  <span className="px-2 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/30 font-label-caps text-[10px] text-primary-container uppercase tracking-widest">Em Produção 🟢</span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-3 max-w-xl">
                  Plataforma SaaS multi-tenant que torna e-commerces visíveis para LLMs (ChatGPT, Gemini, Perplexity) via servidor <strong className="text-primary">MCP nativo</strong>, pipeline de webhooks assíncronos com BullMQ + Redis e agente de IA LangGraph para automação de vendas via WhatsApp.
                </p>
                {/* Architecture tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["MCP Protocol", "BullMQ + Redis", "LangGraph", "Hono API", "Next.js 16", "Supabase RLS", "15+ Integrações"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-caps text-[10px] border border-white/5 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/case-study/plugeefy"
                    className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-md text-sm px-5 py-2.5 rounded-full hover:neon-glow transition-all uppercase tracking-widest"
                  >
                    Ver Case Study
                    <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  </Link>
                  <a
                    href="https://plugeefy.cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-label-caps text-[11px] uppercase tracking-widest hover:text-primary-container transition-colors"
                  >
                    plugeefy.cloud
                    <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                  </a>
                </div>
              </div>
              {/* Right: Architecture mini-diagram */}
              <div className="relative z-10 w-full md:w-72 flex-shrink-0">
                <div className="rounded-2xl border border-white/10 bg-surface-container-lowest p-5 font-mono text-xs">
                  <p className="text-primary-container/60 text-[10px] uppercase tracking-widest mb-3 font-sans">Arquitetura</p>
                  {[
                    { label: "WhatsApp · Instagram", color: "#caf30044" },
                    { label: "Hono API Gateway", color: "#caf30022" },
                    { label: "BullMQ + Redis", color: "#caf30033" },
                    { label: "LangGraph Agent + MCP", color: "#caf30055" },
                    { label: "Supabase + Bling ERP", color: "#caf30022" },
                  ].map((row, i) => (
                    <div key={row.label} className="flex flex-col items-center">
                      <div
                        className="w-full rounded-lg px-3 py-1.5 text-center"
                        style={{ background: row.color, color: "#caf300", borderColor: row.color }}
                      >
                        {row.label}
                      </div>
                      {i < 4 && (
                        <div className="h-3 w-px bg-primary-container/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase">
              Autoridade em <span className="neon-text">Foco</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Insights profundos sobre tráfego orgânico, IA e crescimento em plataformas de vídeo curtos.
            </p>
          </div>
          <a
            className="glass-panel px-6 py-2 rounded-full font-label-caps text-label-caps text-primary hover:text-primary-container transition-all border border-transparent hover:border-primary-container/30 flex items-center gap-2 whitespace-nowrap uppercase tracking-widest"
            href="/blog"
          >
            Ver todos artigos <span className="material-symbols-outlined text-sm" data-icon="arrow_outward">arrow_outward</span>
          </a>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Article 1 */}
          <motion.article variants={fadeInUp} className="glass-panel rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer border-t border-t-white/10 hover:neon-border hover:neon-glow">
            <div className="mb-6 rounded-lg overflow-hidden h-48 bg-surface-container-low relative">
              <img
                alt="Data Analytics SEO"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIG2molL8FTVBKOw3UYTb1EUlK-REcvkW51ue2gQ9eBCdb5J99BIy5SxHKRqMrvF7RHXjJAVHoYKHH3jRUKZ89NiPu7whzDzo9rxwybHqSaEsMbOPlfFxCK3FViq1if9C1XaQFPE5o1DdQ2zjg52Z-h3KFYTB2QkGcaPMtQCcajLflQ6mj4EH4qGwRTku1zoy5-EY444yQBuefElJ4HCVgeZz2lhKJIGTien5da7Kt4T9GSgMxovYqRxaMb8sF8BBvTCEMCppi4zY"
              />
              <div className="absolute top-4 left-4 px-2 py-1 bg-surface/80 backdrop-blur-md rounded border border-white/10 flex items-center gap-2 text-xs font-label-caps text-primary uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-glow"></span>
                SEO & Tráfego
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-primary-container transition-colors text-2xl">
              A Engenharia Reversa do Algoritmo em 2026
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
              Como utilizar IA para estruturar silos de conteúdo que dominam a primeira página do Google sem depender de backlinks obscuros.
            </p>
          </motion.article>

          {/* Article 2 */}
          <motion.article variants={fadeInUp} className="glass-panel rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer border-t border-t-white/10 hover:neon-border hover:neon-glow">
            <div className="mb-6 rounded-lg overflow-hidden h-48 bg-surface-container-low relative">
              <img
                alt="TikTok Strategy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYH-9FbgXGEzsKmvea60nZPVi4op73ZZ22-cQUrVhSJmjvwMquafh_3DBEnoF6uxmTyXJhJUgbecfmDXVD0rTl3u8j6Y91XkQ3ts6v-nbp_7HTZ9JJCThY78nXpgGG-OGESWdAgoGMx2ZOOikniM4l3STmQwH9f3UKoJ-m5kKQQEvUDU-911CWR7A5RyzCXkl5lJ2z5qNpyvc_7vRZ4DXiGyohDbX98ihLdYLXte-e7LHhdmF_pVo4sfnhBLf_urlaFViKdvn7as4"
              />
              <div className="absolute top-4 left-4 px-2 py-1 bg-surface/80 backdrop-blur-md rounded border border-white/10 flex items-center gap-2 text-xs font-label-caps text-primary uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-glow"></span>
                TikTok Strategy
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-primary-container transition-colors text-2xl">
              Retenção Absoluta: O Hook Perfeito
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
              Desconstruindo os primeiros 3 segundos dos vídeos mais virais do nicho de tecnologia e como replicar a estrutura.
            </p>
          </motion.article>

          {/* Article 3 */}
          <motion.article variants={fadeInUp} className="glass-panel rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer border-t border-t-white/10 hover:neon-border hover:neon-glow">
            <div className="mb-6 rounded-lg overflow-hidden h-48 bg-surface-container-low relative">
              <img
                alt="YouTube Production"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkgP4ibK2mkVhNx4Ph5q0FVlRDQ6me_h1VOLhycEpy7Rr5_phWH24Rvo7SzELQo5TaVAnxXzhxlTKxbMAVMso4mZ4JMHfMZvCadQ0GD7gJ3p5j9waK_PGeifMNIkyPoDfmyjp-VlEeWh4s11uF7DvNKt7RPbGGTyecmrbUdbUs_aSlKhTFw9jlHDVXzfbXojHaOLM8iw7gfJ8Njn8ArhJ84TVQfbgPqdkTB4_BWvWy5dr2-svUclcU_1rpxQgZMvHtTOeTZtW44S0"
              />
              <div className="absolute top-4 left-4 px-2 py-1 bg-surface/80 backdrop-blur-md rounded border border-white/10 flex items-center gap-2 text-xs font-label-caps text-primary uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-glow"></span>
                YouTube Docs
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-primary-container transition-colors text-2xl">
              O Formato Documentário para Autoridade
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
              Por que vídeos longos com alta retenção superam a esteira infinita de shorts na construção de confiança B2B.
            </p>
          </motion.article>
        </motion.div>
      </section>
    </main>
  );
}
