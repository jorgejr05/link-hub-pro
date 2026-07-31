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

        {/* NOTA DO AUTOR E CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-start text-left">
          <h4 className="font-headline-md text-2xl text-primary mb-6">Minha visão</h4>
          <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
            Eu via as agências de SEO correndo atrás do próprio rabo há anos, trocando palavras-chave em títulos enquanto a fundação da busca estava mudando completamente. A IA não pesquisa no Google, ela absorve dados. Construir a infraestrutura semântica do seu negócio não é mais um 'plus' de marketing, é a garantia de que as máquinas saibam que a sua empresa existe. Se você sente que a sua empresa está ficando invisível nessa nova era da busca e quer entender como a Plugeefy pode estruturar seus dados para o GEO, me chama no botão abaixo.
          </p>
          <a 
            href="https://wa.me/5518988183746" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-container text-[#131313] font-bold font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(202,243,0,0.2)] whitespace-nowrap"
          >
            Vamos conversar
          </a>
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

        {/* NOTA DO AUTOR E CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-start text-left">
          <h4 className="font-headline-md text-2xl text-primary mb-6">Minha visão</h4>
          <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
            Me dá arrepios ver empresas pagando milhares de reais em 'chatbots' que não conseguem nem checar se um produto está no estoque. A verdadeira mágica acontece nos bastidores, quando conectamos o agente diretamente no coração do seu ERP. A IA se torna apenas a interface de comunicação; a inteligência real está na integração fluida dos dados. Se você quer parar de brincar de IA e começar a usar agentes autônomos que realmente vendem, faturam e rastreiam dentro da sua operação, clica no botão abaixo.
          </p>
          <a 
            href="https://wa.me/5518988183746" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-container text-[#131313] font-bold font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(202,243,0,0.2)] whitespace-nowrap"
          >
            Vamos conversar
          </a>
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

        {/* NOTA DO AUTOR E CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-start text-left">
          <h4 className="font-headline-md text-2xl text-primary mb-6">Minha visão</h4>
          <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
            A maioria das empresas acha que Inteligência Artificial é um passe de mágica que vai curar uma operação desorganizada. A realidade é dura: IA burra em cima de um processo quebrado só gera caos automatizado em alta velocidade. No nosso laboratório, a regra é clara: nós arrumamos a casa antes de colocar o robô pra trabalhar nela. Mapeamos os gargalos e criamos a arquitetura limpa que a IA precisa para agir com autonomia segura. Quer entender se a sua empresa está estruturalmente pronta para essa automação inteligente? Me chama no botão abaixo.
          </p>
          <a 
            href="https://wa.me/5518988183746" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-container text-[#131313] font-bold font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(202,243,0,0.2)] whitespace-nowrap"
          >
            Vamos conversar
          </a>
        </div>
      </>
    )
  },
  "whatsapp-api-mudanca-precos-outubro-2026": {
    title: "Alerta: A mudança de preços do WhatsApp em Outubro vai quebrar operações ineficientes.",
    description: "A Meta mudou as regras do jogo. A partir de Outubro, empresas precisarão remodelar urgentemente sua operação no WhatsApp.",
    subtitle: "Seu time ou seu agente usa 20 mensagens para tirar um pedido? Prepare-se para ver sua margem de lucro desaparecer.",
    content: (
      <>
        <p>Este é um aviso direto para qualquer operação que dependa do WhatsApp Business API hoje. Em Outubro de 2026, a Meta implementará uma nova política de custos que passará a penalizar fortemente o <strong>volume de mensagens trafegadas</strong> por empresas. O modelo antigo focado na janela de 24 horas está sendo substituído por cobranças mais agressivas sobre o uso intensivo da rede.</p>
        
        <p>A reação imediata do mercado tem sido de pânico em relação à IA, mas o problema é muito mais profundo. <strong className="text-primary font-semibold">Isso não afeta apenas robôs. Afeta diretamente as operações humanas.</strong> Empresas que usam ferramentas Omnichannel para que múltiplos atendentes respondam via API Oficial vão sofrer o exato mesmo impacto de custo se seus processos de vendas forem tagarelas e ineficientes.</p>
        
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">A matemática da falência operacional</h3>
        <p>Vamos olhar para os números frios. Imagine um cenário extremamente comum: uma operação comercial de pequeno a médio porte que atende em média <strong>100 clientes únicos por dia</strong>. Em um mês, são cerca de 3.000 clientes.</p>
        <p>Seja com IA genérica ou com atendentes humanos prolixos, um atendimento médio de vendas (tirar dúvidas, enviar fotos, cobrar dados) troca tranquilamente entre 20 e 30 mensagens (onde a empresa envia cerca de 15 mensagens). Com a proposta da Meta de cobrar aproximadamente <strong>R$ 0,08 por cada mensagem enviada pela empresa</strong> (substituindo ou estrangulando o modelo antigo por conversa de 24h), a conta se desenha assim:</p>
        <div className="bg-surface-container border border-white/10 p-6 md:p-8 rounded-2xl my-8 font-mono text-sm md:text-base">
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-white/5 pb-3"><span>Clientes no mês:</span> <span className="text-primary font-bold">3.000</span></li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3"><span>Msg enviadas/cliente:</span> <span className="text-primary font-bold">15 msgs</span></li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3"><span>Total de envios:</span> <span className="text-primary font-bold">45.000 msgs</span></li>
            <li className="flex justify-between items-center border-b border-white/5 pb-3"><span>Custo por mensagem (Meta):</span> <span className="text-primary font-bold">R$ 0,08</span></li>
            <li className="flex flex-col md:flex-row md:items-center justify-between font-bold pt-4 text-lg">
              <span>Custo mensal APENAS de WhatsApp:</span> 
              <span className="text-error mt-2 md:mt-0 text-right">R$ 3.600,00</span>
            </li>
          </ul>
        </div>
        <p>Esse valor de <strong>R$ 3.600,00</strong> é apenas o "pedágio" bruto da Meta para você conversar com seus clientes (que antes era quase isento dentro da janela de 24h). E isso sem contar a mensalidade do seu ERP, da plataforma Omnichannel e os custos de tokens das APIs de LLM. Uma operação que hoje tem custo fixo controlado passará a ter um rombo variável insustentável.</p>
        
        <h3 className="font-headline-lg text-2xl text-primary uppercase tracking-tight mt-12 mb-6">As 3 Rotas de Fuga Arquiteturais</h3>
        <p>A solução não é abandonar o WhatsApp — o cliente está lá —, mas parar de usá-lo como um terminal burro de chat infinito. No laboratório da Plugeefy, construímos três abordagens arquiteturais reais para blindar nossos clientes:</p>
        
        <div className="space-y-10 my-10">
          <div className="border-l-[3px] border-primary-container pl-6 md:pl-8">
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-3">1. Adoção agressiva de WhatsApp Flows</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed">Em vez de o atendente (ou a IA) enviar 10 mensagens para coletar o nome, CPF, endereço e modelo do produto escolhido, enviamos <strong>apenas uma única mensagem</strong> contendo um Flow nativo. O cliente abre um mini-aplicativo incrivelmente rápido dentro do próprio WhatsApp, preenche os dados visualmente e envia de volta de uma só vez. A transação acontece instantaneamente, o ERP é alimentado e a empresa economiza 90% das chamadas de API.</p>
          </div>
          
          <div className="border-l-[3px] border-primary-container pl-6 md:pl-8">
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-3">2. Chat Web Personalizado (A ponte Off-Meta)</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed">Quando identificamos que o atendimento será longo ou exigirá uma troca densa (suporte técnico, vendas consultivas, envio de múltiplos PDFs), a primeira mensagem automática do WhatsApp entrega um <strong>link mágico customizado</strong>. Ao clicar, o cliente é levado a uma interface Web com a cara da sua empresa, onde ele continua conversando normalmente com suporte a áudio, imagens e documentos. A grande sacada? Todo o processamento passa a ocorrer na nossa infraestrutura, <strong>anulando 100% dos custos da Meta</strong> independentemente de quantas horas o cliente passar no chat.</p>
          </div>

          <div className="border-l-[3px] border-primary-container pl-6 md:pl-8">
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-3">3. Otimização de Tokens com Zero-Shot</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed">Para interações rápidas que de fato devem terminar dentro do WhatsApp, treinamos os agentes de IA usando <em>Zero-Shot Resolution</em>. A IA não pede "um minuto para checar". Ela interpreta a necessidade, roda o código seguro no banco de dados e devolve o catálogo dinâmico, o status logístico e o link de pagamento <strong>em um único disparo cirúrgico</strong>, reduzindo o custo de tokens e da API Oficial ao mesmo tempo.</p>
          </div>
        </div>

        <p>Empresas que não atualizarem sua arquitetura de comunicação nos próximos meses vão pagar muito caro por cada "bom dia" que enviarem. A era de jogar dinheiro fora por falta de engenharia acabou.</p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-on-surface-variant font-label-md mb-8">
            Fonte de referência sobre a mudança: <a href="https://developers.facebook.com/docs/whatsapp/pricing/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Meta for Developers - WhatsApp Pricing</a>
          </p>
        </div>

        {/* NOTA DO AUTOR E CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-start text-left">
          <h4 className="font-headline-md text-2xl text-primary mb-6">Minha visão</h4>
          <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
            Eu já esperava esse movimento da Meta. Construir negócios sobre um terreno alugado sempre tem um preço. É por isso que, desde o primeiro dia, estruturamos as arquiteturas no nosso laboratório para serem brutalmente eficientes. Se você quiser entender como podemos reestruturar a sua operação implementando WhatsApp Flows e nosso Chat Web Proprietário antes de Outubro, blindando sua empresa contra essa quebra iminente de margem, me chama no botão abaixo.
          </p>
          <a 
            href="https://wa.me/5518988183746" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-container text-[#131313] font-bold font-label-md text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(202,243,0,0.2)] whitespace-nowrap"
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
            Voltar
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
