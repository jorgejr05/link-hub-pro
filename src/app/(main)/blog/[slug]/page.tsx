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
        <p>O GEO não se importa se a palavra-chave aparece 10 vezes no seu rodapé. Ele se importa com contexto, autoridade e estrutura de dados semânticos (JSON-LD). A IA precisa conseguir "ler" seu catálogo, seus diferenciais e suas respostas técnicas de forma nativa. O pipeline de RAG (Retrieval-Augmented Generation) dos grandes modelos busca a verdade em dados estruturados, não em textos marqueteiros.</p>
        <p>Se a infraestrutura da sua empresa não estiver preparada e conectada de forma que os LLMs consigam interpretar em tempo real, você será apagado do novo mapa digital. As empresas que apenas "publicam conteúdo" vão sumir; as que estruturam dados para consumo de máquinas vão herdar todo o tráfego orgânico.</p>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-on-surface-variant font-label-md">
            Fonte sugerida para aprofundamento: <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noreferrer" className="text-primary hover:underline">Google Search Central - Entendendo Dados Estruturados</a>
          </p>
        </div>
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
        <p>Quando o estoque muda, o PDF fica defasado. Quando o preço sobe, a IA continua prometendo descontos que não existem. Sem acesso à verdade em tempo real, a IA não é uma assistente, é uma bomba relógio de passivo comercial. A verdadeira revolução não está em modelos de linguagem mais inteligentes, mas sim em dar a eles "mãos" para operar seus sistemas internos.</p>
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">O poder do Protocolo MCP</h3>
        <p>Foi aí que o mercado começou a adotar o <strong>Model Context Protocol (MCP)</strong> e os frameworks baseados em Agentes Autônomos (como LangChain e LangGraph). Em vez de enviar o dado estático para o modelo, criamos pontes dinâmicas.</p>
        <p>Quando um cliente no WhatsApp pergunta se tem uma furadeira 220v, o agente entende a intenção e executa uma "Tool" (ferramenta) que vai diretamente no Bling ou SAP, roda uma query SQL ou chamada de API no estoque, confere o saldo real e responde. O agente se torna um micro-funcionário que sabe operar o seu sistema.</p>
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            Um ERP que conversa com o ChatGPT transforma uma simples ferramenta de troca de mensagens em um braço operacional de vendas altamente escalável e infalível.
          </p>
        </div>
        <p>As integrações modernas não são apenas sobre mover dados do Ponto A ao Ponto B. São sobre fornecer <strong>contexto ao vivo</strong> para que máquinas tomem decisões confiáveis. Uma arquitetura de software sólida é o que separa um chatbot inútil de um verdadeiro braço direito digital.</p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-on-surface-variant font-label-md">
            Fonte sugerida para aprofundamento: <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noreferrer" className="text-primary hover:underline">Anthropic - Model Context Protocol (MCP)</a>
          </p>
        </div>
      </>
    )
  },
  "por-que-projetos-de-ia-fracassam": {
    title: "Por que a maioria dos projetos de IA nunca gera retorno financeiro?",
    description: "Desmistificando o glamour da IA e entendendo por que a base de dados importa mais que o modelo de linguagem.",
    subtitle: "E por que a culpa quase sempre é do processo de negócio e não da tecnologia.",
    content: (
      <>
        <p>O roteiro clássico do fracasso corporativo moderno: o CEO assiste a uma palestra no Vale do Silício, contrata uma API cara e pede para a equipe "colocar IA na empresa para ontem".</p>
        <p>Seis meses depois, o projeto consumiu um orçamento gigantesco de infraestrutura, os clientes odeiam o bot genérico engessado, e o time humano trabalha dobrado para consertar as alucinações comerciais que a máquina tomou por conta própria.</p>
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">IA não conserta processos ruins</h3>
        <p>A dura verdade corporativa: se a sua empresa não tem uma padronização de nomenclatura de produtos (MDM), a IA vai errar. Se o seu fluxo logístico exige 4 e-mails dispersos para aprovar um desconto, a IA não vai encurtar o tempo de venda — ela só vai mandar os 4 e-mails mais rápido, gerando caos escalonado.</p>
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            O maior gargalo da Inteligência Artificial hoje é a <strong>Inteligência Humana de Processos</strong>. Você não pode automatizar a desordem sem criar desordem automatizada.
          </p>
        </div>
        <p>Projetos reais de arquitetura começam mapeando a realidade. Antes de escrever uma única linha de código em Python ou TypeScript, você desenha caixas de processos de negócios. Onde o dado nasce? Onde ele morre? Quem é o dono dele? Quem o valida? A arquitetura de dados (data lakes limpos vs data swamps caóticos) dita o sucesso do LLM.</p>
        <p>A arquitetura não resolve só onde armazenar o dado, ela resolve como garantir que o agente robótico consiga tomar a decisão comercial com a mesma confiabilidade que um funcionário de 10 anos de casa teria.</p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-on-surface-variant font-label-md">
            Fonte sugerida para aprofundamento: <a href="https://hbr.org/2022/07/how-to-build-a-data-driven-enterprise" target="_blank" rel="noreferrer" className="text-primary hover:underline">Harvard Business Review - The Data-Driven Enterprise</a>
          </p>
        </div>
      </>
    )
  },
  "whatsapp-api-mudanca-precos-outubro-2026": {
    title: "Alerta: A mudança de preços do WhatsApp em Outubro vai quebrar automações ineficientes.",
    description: "A Meta mudou as regras do jogo. A partir de Outubro, empresas precisarão remodelar urgentemente sua operação no WhatsApp.",
    subtitle: "Seu agente usa 10 mensagens para tirar um pedido? Prepare-se para ver sua margem de lucro desaparecer.",
    content: (
      <>
        <p>Este é um aviso direto para qualquer operação que dependa de automação no WhatsApp hoje. Em Outubro de 2026, a Meta implementará uma nova política de custos para o WhatsApp Business API. A cobrança passará a penalizar fortemente o volume de mensagens trocadas, alterando drasticamente o modelo que ajudou a popularizar a plataforma corporativa.</p>
        
        <p>A reação imediata do mercado tem sido de pânico. Muitas empresas estão pausando seus projetos de IA temendo que as interações automatizadas estourem o orçamento. Mas a verdade é que o problema não está no novo preço da Meta. <strong className="text-primary font-semibold">O problema está na forma amadora como o mercado vinha construindo Inteligência Artificial.</strong></p>
        
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">A urgência de remodelar sua operação</h3>
        <p>Até ontem, as empresas aplaudiam bots que agiam como vendedores prolixos. O robô perguntava "Como você está?", pedia detalhes em múltiplas mensagens, enviava emojis separados, e pedia confirmações constantes. Um pedido simples levava de 8 a 12 transações na API. Na nova economia da Meta, esse bot "tagarela" se tornará um passivo financeiro insustentável.</p>
        
        <div className="bg-surface-container-lowest border-l-4 border-primary-container p-6 rounded-r-2xl my-8">
          <p className="text-primary font-semibold">
            Na nova regra do jogo, ser conciso e contextual não é mais uma questão apenas de boa experiência do usuário. É uma questão urgente de sobrevivência da margem de lucro.
          </p>
        </div>
        
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">Como sanar isso antes de Outubro?</h3>
        <p>A resposta está na <strong>engenharia orientada a contexto</strong>. Se o seu agente tiver integração nativa e em tempo real com o ERP, o CRM e todo o barramento de dados, ele não precisa fazer dezenas de perguntas ao cliente.</p>
        <ul className="pl-6 space-y-2 list-disc list-outside text-on-surface-variant my-6 py-2">
          <li><strong>Leitura de Intenção:</strong> A IA interpreta o contexto em milissegundos sem responder textos descartáveis como "Vou verificar pra você...".</li>
          <li><strong>Zero-Shot Resolution:</strong> A infraestrutura busca dados cruciais no banco de forma silenciosa e devolve uma <strong className="text-primary">única mensagem definitiva</strong> contendo a solução, os detalhes do produto e o link de pagamento.</li>
          <li><strong>Agrupamento de Dados:</strong> O envio de faturas, rastreios e respostas vão no mesmo pacote inteligente, reduzindo os disparos de API em até 80%.</li>
        </ul>
        <p>Empresas que tratam IA apenas como "um script de respostas" vão quebrar pagando a conta da Meta. Mas aquelas que remodelarem suas automações como uma orquestração de sistemas silenciosa, vão operar de forma mais enxuta e barata do que nunca.</p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-on-surface-variant font-label-md mb-8">
            Fonte de referência sobre a mudança: <a href="https://developers.facebook.com/docs/whatsapp/pricing/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Meta for Developers - WhatsApp Pricing</a>
          </p>
        </div>

        {/* NOTA DO AUTOR E CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-start text-left">
          <h4 className="font-headline-md text-2xl text-primary mb-6">Minha visão</h4>
          <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
            Sinceramente? Eu já esperava esse movimento da Meta. Construir negócios sobre um terreno alugado sempre tem um preço. É por isso que, desde o primeiro dia, estruturamos as arquiteturas no nosso laboratório para serem brutalmente eficientes. O código que desenvolvemos já funciona com 'Zero-Shot Resolution', indo até a base de dados da empresa sem gastar mensagens inúteis. Se você quiser entender como podemos reestruturar a sua operação antes de Outubro e blindá-la contra esses custos invisíveis, me chama no botão abaixo.
          </p>
          <a 
            href="https://wa.me/5518988183746" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors shadow-lg whitespace-nowrap"
          >
            Vamos conversar
          </a>
        </div>
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
      <div className="max-w-4xl mx-auto">
        
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

            <div className="mt-12 pt-8 flex items-center justify-end">
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
