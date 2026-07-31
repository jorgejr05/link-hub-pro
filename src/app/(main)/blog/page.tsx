import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Insights & Estratégia | Jorge Gomes Jr.",
  description: "Artigos e análises sobre o impacto da Inteligência Artificial e Arquitetura de Sistemas nos negócios.",
};

const articles = [
  {
    slug: "whatsapp-api-mudanca-precos-outubro-2026",
    title: "O fim do chatbot 'tagarela'. Como a mudança de preços do WhatsApp em Outubro afeta sua arquitetura.",
    date: "31 jul 2026",
    category: "Infra & Meta",
    image: "/blog/whatsapp.jpg",
    author: "Jorge Jr."
  },
  {
    slug: "o-google-ja-escolhe-empresas-antes-do-cliente-clicar",
    title: "O Google já escolhe empresas antes do cliente clicar. Pouca gente percebeu isso.",
    date: "31 jul 2026",
    category: "Search & GEO",
    image: "/blog/search.jpg",
    author: "Jorge Jr."
  },
  {
    slug: "seu-erp-pode-conversar-com-o-chatgpt",
    title: "Seu ERP pode conversar com o ChatGPT. A maioria das empresas ainda não sabe disso.",
    date: "25 jul 2026",
    category: "Integrações",
    image: "/blog/software.jpg",
    author: "Jorge Jr."
  },
  {
    slug: "por-que-projetos-de-ia-fracassam",
    title: "Por que a maioria dos projetos de IA nunca gera retorno financeiro?",
    date: "18 jul 2026",
    category: "Estratégia",
    image: "/blog/architecture.jpg",
    author: "Jorge Jr."
  }
];

export default function BlogHub() {
  return (
    <main className="w-full min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container/30 selection:text-white pt-36 md:pt-48 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl text-primary uppercase mb-6 leading-tight tracking-tight">
            Navegando a Nova <br className="hidden md:block" />
            <span className="neon-text">Era dos Sistemas.</span>
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Análises profundas sobre como a Inteligência Artificial e a Arquitetura de Software estão redefinindo a competição no mundo dos negócios.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/blog/${article.slug}`}
              className="bg-surface-container rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-container/10 group flex flex-col overflow-hidden"
            >
              {/* Image Header */}
              <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-primary-container font-label-md text-sm mb-3 block">
                  {article.category}
                </span>
                
                <h2 className="font-headline-md text-xl md:text-2xl text-primary font-bold group-hover:text-primary-container transition-colors leading-snug mb-6">
                  {article.title}
                </h2>
                
                {/* Spacer to push footer to the bottom if title is short */}
                <div className="flex-1"></div>

                {/* Footer with Avatar */}
                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                  <img 
                    src="/jorge-junior.jpg" 
                    alt={article.author} 
                    className="w-10 h-10 rounded-full object-cover border border-white/10" 
                  />
                  <div>
                    <p className="font-body-md text-primary font-semibold text-sm">{article.author}</p>
                    <p className="font-label-md text-on-surface-variant text-xs uppercase tracking-widest">{article.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
