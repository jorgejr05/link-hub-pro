import React from "react";

export default function PerfilPage() {
  return (
    <main className="w-full flex-1 flex flex-col items-center">
      
      {/* 01. HERO */}
      <section className="w-full py-24 md:py-32 px-6 relative flex flex-col items-center text-center mt-10">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 mb-8 shadow-2xl">
            <img src="/jorge-junior.jpg" alt="Jorge Jr." className="w-full h-full object-cover object-top" />
          </div>
          <h1 className="font-display-lg text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Jorge Jr.
          </h1>
          <p className="text-primary text-sm md:text-base font-label-md tracking-widest uppercase mb-8">
            Arquiteto de IA & Engenheiro de Software
          </p>
          <p className="text-on-surface text-lg md:text-xl font-body-lg leading-relaxed font-light max-w-2xl">
            Unindo engenharia de software e inteligência artificial para construir ecossistemas escaláveis. De interfaces imersivas a agentes autônomos que resolvem problemas reais de negócios.
          </p>
        </div>
      </section>

      {/* 02. TIMELINE (A JORNADA) */}
      <section className="w-full py-20 px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-white mb-4">A Trajetória</h2>
          <p className="text-on-surface font-body-md text-base md:text-lg max-w-2xl mx-auto">
            A evolução contínua da criação visual para a engenharia de dados e autonomia.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 lg:ml-12 space-y-12 pb-12">
          
          {/* 2023 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Início de 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">O Front-End e o Mercado Digital</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              O início da jornada. Criação de Landing Pages, VSLs e sites de alta performance para a venda de infoprodutos como afiliado, onde o foco em conversão e resultados ditava a regra.
            </p>
          </div>

          {/* 2023-2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">2023 - 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia e Low-Code</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              A necessidade de estruturas mais robustas levou a um aprofundamento técnico. A entrada no desenvolvimento de software tradicional e no low-code (com FlutterFlow) permitiu escalar a complexidade das soluções entregues.
            </p>
          </div>

          {/* Final 2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">Final de 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">O Boom dos Agentes Autônomos</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              Imersão profunda na nova geração de aplicações. Integração de ecossistemas com n8n, Dify e LLMs, consolidando uma vasta base de certificações em Inteligência Artificial e automação extrema.
            </p>
          </div>

          {/* Atualmente */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b] shadow-[0_0_15px_rgba(202,243,0,0.5)]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Atualmente</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia de Software (FIAP)</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm max-w-2xl">
              Cursando o 2º ciclo de Engenharia de Software pela FIAP. O objetivo é coroar a bagagem técnica, as certificações e a experiência prática com uma base acadêmica sólida, formando-se como Engenheiro de Software.
            </p>
          </div>

        </div>
      </section>

      {/* 03. HARD SKILLS */}
      <section className="w-full py-20 px-6 max-w-5xl">
        <div className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
          
          <h2 className="font-display-md text-3xl font-bold text-white mb-10 relative z-10">Stack Principal</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {[
              "Next.js", "React", "TypeScript", "Node.js", 
              "Python", "LangChain", "n8n (Automação)", "Dify (IA)", 
              "Supabase", "PostgreSQL", "FlutterFlow", "APIs REST"
            ].map((skill, idx) => (
              <div key={idx} className="bg-[#111113] border border-white/5 rounded-xl p-4 text-center hover:border-primary/30 transition-colors flex items-center justify-center">
                <span className="font-label-sm text-sm text-on-surface font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. DOMÍNIO TÉCNICO E COMPETÊNCIAS */}
      <section className="w-full py-24 px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-white mb-4">Competências Técnicas</h2>
          <p className="text-on-surface font-body-md text-base md:text-lg max-w-2xl mx-auto">
            Mais de 35 credenciais oficiais sintetizadas em capacidades reais de engenharia e negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Categoria: Inteligência Artificial */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                <path d="M5 3v4"/>
                <path d="M19 17v4"/>
                <path d="M3 5h4"/>
                <path d="M17 19h4"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Inteligência Artificial & Agentes</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Desenvolvimento de arquiteturas RAG (Retrieval-Augmented Generation) para conversar com bases de dados e documentos.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Construção de Agentes Autônomos especializados (SDR, Vendas, Atendimento) com tomada de decisão.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Engenharia de Prompts avançada e orquestração de modelos (LLMs) usando Dify e LangChain.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Implementação de agentes conversacionais de voz e automação de vídeos UGC (User-Generated Content).</li>
            </ul>
          </div>

          {/* Categoria: Automações e Backend */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automação & Backend</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Orquestração de APIs e automação de fluxos de dados complexos em larga escala utilizando n8n.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Arquitetura e modelagem de banco de dados relacionais (PostgreSQL / Supabase).</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Implementação de segurança avançada através de Row Level Security (RLS) e permissões granulares.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Automação completa de pagamentos, cobranças financeiras e integrações nativas com WhatsApp/Instagram.</li>
            </ul>
          </div>

          {/* Categoria: Mobile e Produtos */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Software & Mobile</h3>
            <ul className="space-y-4 font-body-sm text-sm text-on-surface-variant flex-1">
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Desenvolvimento Full-Stack de aplicativos móveis e sistemas web complexos utilizando FlutterFlow.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Integração fluida entre design de interfaces (UI/UX) imersivas e lógicas de backend (BaaS).</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Criação de arquiteturas modulares voltadas a alta performance, escalabilidade e manutenibilidade.</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Processo ponta a ponta: do levantamento de requisitos de produto até a geração de builds e publicação nas Lojas.</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
