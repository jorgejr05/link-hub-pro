import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "O Google já escolhe empresas antes do cliente clicar | Jorge Gomes Jr.",
  description: "Como a mudança na dinâmica de busca com Inteligência Artificial e a GEO estão redefinindo quem vende no digital.",
};

export default function ArticlePage() {
  return (
    <main className="w-full min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container/30 selection:text-white pt-24 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-2xl mx-auto">
        
        {/* BREADCRUMB */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-label-caps text-on-surface-variant hover:text-primary-container transition-colors uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Voltar para o Blog
          </Link>
        </div>

        <article className="glass-panel rounded-[2rem] p-6 md:p-12 relative overflow-hidden">
          {/* Fundo sutil do painel */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          {/* SOCIAL HEADER (Twitter/Instagram Style) */}
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img 
                src="/jorge-trabalhando.jpg" 
                alt="Jorge Júnior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-headline-md text-primary font-bold">Jorge Júnior</h3>
                <span className="material-symbols-outlined text-primary-container text-[16px] filled">verified</span>
              </div>
              <p className="text-on-surface-variant text-xs md:text-sm">@ojorge.jr</p>
            </div>
          </div>

          {/* ARTICLE CONTENT */}
          <div className="relative z-10 space-y-8 font-body-lg text-lg text-on-surface-variant leading-relaxed">
            
            {/* The Hook (Manchete viral) */}
            <h1 className="font-headline-xl text-3xl md:text-4xl text-primary leading-tight tracking-tight mb-2">
              O Google já escolhe empresas antes do cliente clicar.
            </h1>
            <p className="text-xl text-on-surface-variant font-medium mb-10">
              Pouca gente percebeu isso. E quem perceber primeiro vai levar o mercado.
            </p>

            <div className="w-full h-px bg-white/5 my-8"></div>

            <p>
              Durante anos, o jogo era simples: você criava um site, colocava as palavras-chave certas e disputava os três primeiros lugares do Google. O cliente procurava "software para logística", olhava os links e <strong className="text-primary font-semibold">ele decidia</strong> onde ia clicar.
            </p>

            <p>
              Isso acabou.
            </p>

            <p>
              Com a ascensão de motores como ChatGPT, Perplexity e as próprias <strong className="text-primary font-semibold">IA Overviews do Google</strong> (aquelas respostas geradas por IA no topo da pesquisa), a dinâmica inverteu completamente.
            </p>

            <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
              <p className="text-primary font-semibold">
                O cliente não escolhe mais em qual link clicar. A Inteligência Artificial lê todos os links, processa a informação e entrega <strong className="text-primary-container font-bold">a resposta pronta</strong> com a empresa que ela julgou ser a melhor.
              </p>
            </div>

            <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">
              A morte do SEO tradicional e o nascimento do GEO
            </h3>

            <p>
              A otimização de busca (SEO) como conhecíamos está morrendo. O que está nascendo é o <strong>GEO (Generative Engine Optimization)</strong>. 
            </p>

            <p>
              O GEO não se importa se a palavra-chave aparece 10 vezes no seu rodapé. Ele se importa com contexto, autoridade e estrutura de dados semânticos (JSON-LD). A IA precisa conseguir "ler" seu catálogo, seus diferenciais e suas respostas técnicas de forma nativa.
            </p>

            <p>
              Se a infraestrutura da sua empresa — seja seu ERP, seu site ou seu SaaS — não estiver preparada e conectada de forma que os LLMs (Grandes Modelos de Linguagem) consigam interpretar em tempo real, você será apagado do novo mapa digital.
            </p>

            <div className="w-full h-px bg-white/5 my-8"></div>

            <h3 className="font-headline-lg text-xl text-primary font-bold mb-4">
              O que isso muda na prática para a sua empresa?
            </h3>
            
            <ul className="space-y-4 list-disc pl-5 text-on-surface-variant">
              <li><strong>Tráfego gratuito altamente qualificado:</strong> Enquanto a concorrência paga fortunas em Ads, sua empresa pode ser a recomendação #1 das IAs.</li>
              <li><strong>Ciclos de vendas curtos:</strong> O cliente que chega via IA já recebeu a recomendação mastigada. Ele não quer comparar, ele quer comprar.</li>
              <li><strong>Infraestrutura é Rei:</strong> Não adianta um site bonito se o backend não emite os sinais corretos (Schema.org e integrações de contexto).</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-label-caps tracking-widest text-on-surface-variant">Compartilhe no Instagram</span>
                  <a href="https://www.instagram.com/ojorge.jr?igsh=MWdvejY1YXZ6aWpiag==" target="_blank" rel="noreferrer" className="text-sm font-label-md text-primary-container hover:text-primary transition-colors">@ojorge.jr</a>
                </div>
              </div>
              <Link href="/blog" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-xs font-label-caps uppercase tracking-widest">
                Ler mais artigos
              </Link>
            </div>
          </div>
        </article>

      </div>
    </main>
  );
}
