import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Database de Artigos
const articlesDB = {
  "o-google-ja-escolhe-empresas-antes-do-cliente-clicar": {
    title: "O Google já escolhe empresas antes do cliente clicar. Pouca gente percebeu isso.",
    description: "Como a mudança na dinâmica de busca com Inteligência Artificial e a GEO estão redefinindo quem vende no digital.",
    subtitle: "Pouca gente percebeu isso. E quem perceber primeiro vai levar o mercado.",
    content: (
      <>
        <p>Durante anos, o jogo era simples: você criava um site, colocava as palavras-chave certas e disputava os três primeiros lugares do Google. O cliente procurava "software para logística", olhava os links e <strong className="text-primary font-semibold">ele decidia</strong> onde ia clicar.</p>
        <p>Isso acabou.</p>
        <p>Com a ascensão de motores como ChatGPT, Perplexity e as próprias <strong className="text-primary font-semibold">IA Overviews do Google</strong>, a dinâmica inverteu completamente.</p>
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            O cliente não escolhe mais em qual link clicar. A Inteligência Artificial lê todos os links, processa a informação e entrega <strong className="text-primary-container font-bold">a resposta pronta</strong> com a empresa que ela julgou ser a melhor.
          </p>
        </div>
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">A morte do SEO tradicional e o nascimento do GEO</h3>
        <p>A otimização de busca (SEO) como conhecíamos está morrendo. O que está nascendo é o <strong>GEO (Generative Engine Optimization)</strong>.</p>
        <p>O GEO não se importa se a palavra-chave aparece 10 vezes no seu rodapé. Ele se importa com contexto, autoridade e estrutura de dados semânticos (JSON-LD). A IA precisa conseguir "ler" seu catálogo, seus diferenciais e suas respostas técnicas de forma nativa.</p>
        <p>Se a infraestrutura da sua empresa não estiver preparada e conectada de forma que os LLMs consigam interpretar em tempo real, você será apagado do novo mapa digital.</p>
      </>
    )
  },
  "seu-erp-pode-conversar-com-o-chatgpt": {
    title: "Seu ERP pode conversar com o ChatGPT. A maioria das empresas ainda não sabe disso.",
    description: "Conectando o núcleo financeiro e logístico da empresa diretamente aos modelos de IA globais.",
    subtitle: "Por que deixar a IA cega se o seu estoque dita as regras do jogo?",
    content: (
      <>
        <p>A maior falácia atual sobre automação corporativa é achar que "alimentar" um PDF de produtos para uma Inteligência Artificial é suficiente para vender online.</p>
        <p>Quando o estoque muda, o PDF fica defasado. Quando o preço sobe, a IA continua prometendo descontos que não existem. Sem acesso à verdade, a IA não é uma assistente, é uma bomba relógio de passivo comercial.</p>
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">O poder do Protocolo MCP</h3>
        <p>Foi aí que o mercado começou a adotar o <strong>Model Context Protocol (MCP)</strong>. Em vez de enviar o dado estático para o modelo, criamos pontes dinâmicas.</p>
        <p>Quando um cliente no WhatsApp pergunta se tem uma furadeira 220v, o agente (construído com LangGraph) entende a intenção e executa uma "Tool" que vai diretamente no Bling, roda uma query no estoque, confere o saldo real e responde.</p>
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            Um ERP que conversa com o ChatGPT transforma uma simples ferramenta de troca de mensagens em um braço operacional de vendas altamente escalável.
          </p>
        </div>
        <p>As integrações modernas não são apenas sobre mover dados do Ponto A ao Ponto B. São sobre fornecer <strong>contexto ao vivo</strong> para que máquinas tomem decisões confiáveis.</p>
      </>
    )
  },
  "por-que-projetos-de-ia-fracassam": {
    title: "Por que a maioria dos projetos de IA nunca gera retorno financeiro?",
    description: "Desmistificando o glamour da IA e entendendo por que a base de dados importa mais que o modelo de linguagem.",
    subtitle: "E por que a culpa quase sempre é do processo de negócio e não da tecnologia.",
    content: (
      <>
        <p>O roteiro clássico do fracasso corporativo moderno: o CEO assiste a uma palestra no Vale do Silício, contrata uma API e pede para a equipe "colocar IA na empresa".</p>
        <p>Seis meses depois, o projeto consumiu orçamento de infraestrutura, os clientes odeiam o bot genérico e o time humano trabalha dobrado para consertar as alucinações da máquina.</p>
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">IA não conserta processos ruins</h3>
        <p>Se a sua empresa não tem uma padronização de nomenclatura de produtos, a IA vai errar. Se o seu fluxo logístico exige 4 e-mails para aprovar um desconto, a IA não vai encurtar o tempo de venda — ela só vai mandar os 4 e-mails mais rápido.</p>
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            O maior gargalo da Inteligência Artificial hoje é a <strong>Inteligência Humana de Processos</strong>. Você não pode automatizar a desordem.
          </p>
        </div>
        <p>Projetos reais de arquitetura começam mapeando a realidade. Antes de escrever código, você desenha caixas. Onde o dado nasce? Onde ele morre? Quem valida?</p>
        <p>A arquitetura não resolve só onde armazenar o dado, ela resolve como garantir que o agente robótico consiga tomar a decisão comercial com a mesma confiabilidade que um funcionário de 10 anos de casa teria.</p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesDB[slug as keyof typeof articlesDB];
  if (!article) return { title: "Artigo não encontrado | Jorge Gomes Jr." };
  return {
    title: `${article.title} | Jorge Gomes Jr.`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesDB[slug as keyof typeof articlesDB];

  if (!article) {
    notFound();
  }

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
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          {/* SOCIAL HEADER */}
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
            
            <h1 className="font-headline-xl text-3xl md:text-4xl text-primary leading-tight tracking-tight mb-2">
              {article.title}
            </h1>
            <p className="text-xl text-on-surface-variant font-medium mb-10">
              {article.subtitle}
            </p>

            <div className="w-full h-px bg-white/5 my-8"></div>

            {article.content}

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
