import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Insights & Estratégia | Jorge Gomes Jr.",
  description: "Artigos e análises sobre o impacto da Inteligência Artificial e Arquitetura de Sistemas nos negócios.",
};

const articles = [
  {
    slug: "whatsapp-api-mudanca-precos-outubro-2026",
    title: "O fim do chatbot 'tagarela'. Como a mudança de preços do WhatsApp em Outubro de 2026 afeta sua arquitetura.",
    date: "31 JUL 2026",
    readingTime: "5 min de leitura",
    category: "Infra & Meta",
  },
  {
    slug: "o-google-ja-escolhe-empresas-antes-do-cliente-clicar",
    title: "O Google já escolhe empresas antes do cliente clicar. Pouca gente percebeu isso.",
    date: "31 JUL 2026",
    readingTime: "4 min de leitura",
    category: "Search & GEO",
  },
  {
    slug: "seu-erp-pode-conversar-com-o-chatgpt",
    title: "Seu ERP pode conversar com o ChatGPT. A maioria das empresas ainda não sabe disso.",
    date: "25 JUL 2026",
    readingTime: "5 min de leitura",
    category: "Integrações",
  },
  {
    slug: "por-que-projetos-de-ia-fracassam",
    title: "Por que a maioria dos projetos de IA nunca gera retorno financeiro?",
    date: "18 JUL 2026",
    readingTime: "6 min de leitura",
    category: "Estratégia",
  }
];

export default function BlogHub() {
  return (
    <main className="w-full min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container/30 selection:text-white pt-36 md:pt-48 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl text-primary uppercase mb-6 leading-tight tracking-tight">
            Navegando a Nova <br className="hidden md:block" />
            <span className="neon-text">Era dos Sistemas.</span>
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Análises profundas sobre como a Inteligência Artificial e a Arquitetura de Software estão redefinindo a competição no mundo dos negócios.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/blog/${article.slug}`}
              className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-10 transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-[50px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-surface-container border border-white/5 rounded-full text-primary-container font-label-caps text-[10px] uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-on-surface-variant text-xs font-label-md uppercase tracking-widest opacity-60">
                    {article.date}
                  </span>
                </div>
                <h2 className="font-headline-md text-xl md:text-2xl text-primary font-bold group-hover:text-primary-container transition-colors leading-snug">
                  {article.title}
                </h2>
              </div>

              <div className="relative z-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary-container/10 transition-colors shrink-0">
                <span className="material-symbols-outlined text-primary-container">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
