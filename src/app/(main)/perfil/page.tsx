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

        <div className="relative border-l border-white/10 ml-4 md:ml-[50%] md:-translate-x-px space-y-12 pb-12">
          
          {/* 2023 */}
          <div className="relative pl-8 md:pl-0 md:w-full md:-ml-full md:pr-[calc(100%+2rem)] md:text-right group">
            <div className="absolute top-0 left-[-5px] md:right-[calc(100%-5px)] md:left-auto w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Início de 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">O Front-End e o Mercado Digital</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm">
              O início da jornada. Criação de Landing Pages, VSLs e sites de alta performance para a venda de infoprodutos como afiliado, onde o foco em conversão e resultados ditava a regra.
            </p>
          </div>

          {/* 2023-2024 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">2023 - 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia e Low-Code</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm">
              A necessidade de estruturas mais robustas levou a um aprofundamento técnico. A entrada no desenvolvimento de software tradicional e no low-code (com FlutterFlow) permitiu escalar a complexidade das soluções entregues.
            </p>
          </div>

          {/* Final 2024 */}
          <div className="relative pl-8 md:pl-0 md:w-full md:-ml-full md:pr-[calc(100%+2rem)] md:text-right group">
            <div className="absolute top-0 left-[-5px] md:right-[calc(100%-5px)] md:left-auto w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0a0a0b] group-hover:bg-primary transition-colors"></div>
            <div className="text-on-surface-variant group-hover:text-primary transition-colors font-label-sm uppercase tracking-widest mb-2">Final de 2024</div>
            <h3 className="text-xl font-bold text-white mb-2">O Boom dos Agentes Autônomos</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm">
              Imersão profunda na nova geração de aplicações. Integração de ecossistemas com n8n, Dify e LLMs, consolidando uma vasta base de certificações em Inteligência Artificial e automação extrema.
            </p>
          </div>

          {/* Atualmente */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#0a0a0b] shadow-[0_0_15px_rgba(202,243,0,0.5)]"></div>
            <div className="text-primary font-label-sm uppercase tracking-widest mb-2">Atualmente</div>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia de Software (FIAP)</h3>
            <p className="text-on-surface font-body-sm leading-relaxed text-sm">
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

      {/* 04. CERTIFICAÇÕES E CURSOS (NOCODE STARTUP) */}
      <section className="w-full py-24 px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-white mb-4">Certificações</h2>
          <p className="text-on-surface font-body-md text-base md:text-lg max-w-2xl mx-auto">
            Mais de 35 credenciais oficiais comprovando o domínio em arquiteturas modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Categoria: Inteligência Artificial */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Inteligência Artificial & Agentes</h3>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant flex-1">
              <li>• MasterClass IA & Engenharia de Prompts</li>
              <li>• Agentes IA Nocode (Fundamentos 2)</li>
              <li>• Seu Primeiro Agente IA em 30min</li>
              <li>• Fundamentos Dify (M1)</li>
              <li>• RAG - Converse com PDF e Planilhas (M2)</li>
              <li>• Dify Tools - Bancos de Dados e APIs (M3)</li>
              <li>• Workflows e Agendamento Dify (M4, M5)</li>
              <li>• Agente Vendedor e Agente SDR</li>
              <li>• Agente de Voz</li>
              <li>• Geração Automática de Vídeos UGC</li>
            </ul>
          </div>

          {/* Categoria: Automações e Backend */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automação & Backend</h3>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant flex-1">
              <li>• Fundamentos N8N</li>
              <li>• Sua Primeira Automação (N8N)</li>
              <li>• Multi Agentes - Cases Essenciais</li>
              <li>• O Poder das APIs - Fundamentos Essenciais</li>
              <li>• Converse com Banco de Dados e APIs - Tools</li>
              <li>• Hacks para Chats com IA (N8N)</li>
              <li>• API Instagram (Agente Direct/Comentários)</li>
              <li>• API Não Oficial (Agente Whatsapp)</li>
              <li>• Policies Avançadas no Supabase - RLS</li>
              <li>• Gerenciando Pagamentos N8N / Supabase</li>
            </ul>
          </div>

          {/* Categoria: Mobile e Produtos */}
          <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Software & Mobile (FlutterFlow)</h3>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant flex-1">
              <li>• Fundamentos Desen. de Software (F1.3)</li>
              <li>• Fundamentos Desen. de Produtos (F1.2)</li>
              <li>• Fundamentos FlutterFlow - Design e Backend</li>
              <li>• Zero ao App - Aplicativo de Finanças</li>
              <li>• Meu Primeiro Super App (App dos Sonhos)</li>
              <li>• App de Agendamento - Operações com Datas</li>
              <li>• Geração de PDF e Publicação nas Lojas</li>
              <li>• Pagamentos Supabase + Flutterflow</li>
              <li>• Plano de Estudos FF</li>
              <li>• MasterClass NoCode</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
