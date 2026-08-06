export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  dateStart: string;
  dateLastDeploy: string;
  liveUrl?: string;
  githubUrl?: string;
  tag: string;
  icon: string;
  color: string;
  bg: string;
  shortPain: string;
  // Deep-Dive Content
  genesis: string;
  challenge: string;
  solution: string;
  techDecisions: string[];
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    slug: "plugeefy",
    title: "Plugeefy",
    subtitle: "A ponte estrutural entre farmácias e IAs locais",
    dateStart: "Fev/2026",
    dateLastDeploy: "Jul/2026",
    tag: "Infraestrutura & SEO",
    icon: "storefront",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    shortPain: "Catálogos offline invisíveis para LLMs (Google AI, ChatGPT).",
    genesis: "O projeto nasceu ao notar que, com a ascensão dos motores de busca guiados por IA, o comércio físico estava sendo apagado. Se uma farmácia local não estivesse estruturada em grafos e dados granulares (JSON-LD), as IAs jamais a recomendariam.",
    challenge: "O maior desafio não era apenas construir um site, mas criar uma arquitetura de governança e interoperabilidade (SEO voltado para IA) que lesse inventários de farmácias e normalizasse esses dados respeitando regulamentações sanitárias rigorosas.",
    solution: "Desenvolvemos a plataforma Plugeefy, que engloba tanto um marketplace otimizado quanto uma API profunda que formata os dados de estoque em esquemas universais (Schema.org).",
    techDecisions: [
      "Next.js App Router para SSR avançado e indexação massiva no Google.",
      "Arquitetura de dados orientada a Grafos de Conhecimento, essencial para LLMs.",
      "TypeScript no backend (plugeefy-api) para garantir contratos rigorosos de payload."
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Schema.org", "SEO para IA"]
  },
  {
    slug: "gestao-de-entregas",
    title: "Gestão de Entregas (Speedy Chain)",
    subtitle: "Ecossistema de vitrine e despacho local",
    dateStart: "Out/2025",
    dateLastDeploy: "Mai/2026",
    liveUrl: "https://sistemaentregas.vercel.app/",
    tag: "Marketplace & Logística",
    icon: "local_shipping",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    shortPain: "Altas taxas do iFood e gestão caótica da frota própria de motoboys.",
    genesis: "Negócios locais como lanchonetes e restaurantes estavam reféns das taxas abusivas dos grandes marketplaces, mas tentar fazer frota própria resultava em caos no WhatsApp e caderninho.",
    challenge: "Unificar a frente de loja (a vitrine onde o cliente pede) com o painel de despacho (onde o dono envia o pedido para o entregador), tudo em tempo real e sem complexidade de adoção.",
    solution: "Foi construído o sistema Integra Araçatuba / Speedy Chain Link. Ele opera como um marketplace independente, conectando clientes diretamente às lojas, com um painel de gestão completo para roteamento dos pedidos.",
    techDecisions: [
      "Uso de arquitetura serverless na Vercel para escalabilidade durante picos de pedidos (sexta à noite).",
      "Bancos de dados relacionais e em tempo real para sincronização de status de pedido."
    ],
    techStack: ["Next.js", "Supabase", "Serverless", "TailwindCSS"]
  },
  {
    slug: "roteirizador-delivery",
    title: "Sistema Logístico Delivery",
    subtitle: "Roteirização inteligente e fechamento de caixa",
    dateStart: "Mar/2026",
    dateLastDeploy: "Mar/2026",
    liveUrl: "https://roterizadorai.vercel.app/",
    tag: "Algoritmos & Logística",
    icon: "route",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    shortPain: "Roteirização manual que gerava atrasos, entregas erradas e furos no acerto de caixa.",
    genesis: "Concebido após acompanhar a rotina insana de despachantes em grandes lanchonetes. Eles precisam agrupar pedidos do iFood e balcão por proximidade geográfica manualmente, enquanto controlam quanto cada motoboy tem a receber no fim da noite.",
    challenge: "Construir um motor lógico que integrasse fluxos do iFood, pegasse a ordem de chegada dos motoboys, formasse rotas ótimas baseadas em mapa e contabilizasse centavos do fechamento noturno (dinheiro vs máquina).",
    solution: "O Roteirizador AI é um painel de alta performance que recebe pedidos, otimiza agrupamentos de áreas de entrega, designa a carga de forma justa para a frota e emite relatórios automáticos de acerto.",
    techDecisions: [
      "Lógicas de agrupamento baseadas em raios geográficos e setores.",
      "Dashboards e relatórios focados em performance contábil (gestão financeira de frota)."
    ],
    techStack: ["React", "TypeScript", "Maps API", "Algoritmos de Roteirização", "Dashboard"]
  },
  {
    slug: "ju-ai",
    title: "JUAI 2026",
    subtitle: "Sua assistente de mente, rotina e finanças",
    dateStart: "Mar/2026",
    dateLastDeploy: "Mai/2026",
    liveUrl: "https://ju-ai2026.vercel.app/",
    tag: "IA Humanizada",
    icon: "psychology",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    shortPain: "Falta de consistência diária e gestão financeira fragmentada.",
    genesis: "As pessoas usam vários apps soltos (um pra finanças, outro pra hábitos, outro pra notas), mas não conseguem manter consistência. A ideia foi criar não um software, mas uma 'entidade' parceira.",
    challenge: "Como fazer uma Inteligência Artificial parecer humana e proativa? Não podia ser só mais um chat. Tinha que ser uma assistente de voz que calcula saldos futuros reais e cobra metas de longo prazo em tarefas diárias.",
    solution: "JUAI é um ecossistema. Ela responde por voz (hands-free), atua como Mestre Financeira deduzindo contas fixas do saldo, e quebra grandes metas anuais em trilhas de 1 dia, cobrando proativamente o usuário.",
    techDecisions: [
      "Integração profunda de modelos de processamento de linguagem natural e voz.",
      "Interfaces imersivas e microinterações (como a animação de escuta 'hands-free') para transmitir 'humanidade'."
    ],
    techStack: ["Next.js", "Integração de LLMs (Voz/Texto)", "Arquitetura Proativa", "Design Imersivo"]
  },
  {
    slug: "agendamento-ia",
    title: "Agendamento com IA",
    subtitle: "O fim dos gargalos de atendimento humano",
    dateStart: "Out/2025",
    dateLastDeploy: "Out/2025",
    liveUrl: "https://agendamentocomia.vercel.app/",
    tag: "Agentes Autônomos",
    icon: "calendar_clock",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    shortPain: "Leads de altíssimo valor perdem o interesse na contratação pelo tempo de resposta.",
    genesis: "Observando clínicas e prestadores de serviços high-ticket perderem milhares de reais diariamente por não responderem o WhatsApp imediatamente à noite ou aos finais de semana.",
    challenge: "Implementar um bot comum de 'digite 1 ou 2' apenas afastava pacientes VIP. O desafio era criar um Agente conversacional que entendesse áudios, mantivesse contexto e operasse o calendário real.",
    solution: "Sistemas baseados em Agentes SDR. A IA qualifica a dor do lead, explica procedimentos com linguagem empática, e escreve diretamente no banco de dados e agenda, tudo 24/7.",
    techDecisions: [
      "Orquestração utilizando n8n para amarrar WhatsApp API à LLMs.",
      "Uso de RAG (Retrieval-Augmented Generation) para o bot conhecer as diretrizes e tabela de preços exclusivas de cada clínica."
    ],
    techStack: ["n8n", "LangChain/Dify", "WhatsApp API", "PostgreSQL", "RAG"]
  },
  {
    slug: "ucg-studio",
    title: "UGC Studio",
    subtitle: "Geração de criativos em escala com Inteligência Artificial",
    dateStart: "Nov/2025",
    dateLastDeploy: "Nov/2025",
    liveUrl: "https://ugcjorgejr.vercel.app/",
    tag: "Geração de Mídia (IA)",
    icon: "movie_creation",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    shortPain: "O custo altíssimo e a lentidão de produzir User Generated Content e vídeos comerciais.",
    genesis: "Equipes de growth e tráfego pago queimam dezenas de milhares de reais em testes de criativos. Produzir vídeos físicos é demorado. Por que não escalar isso com modelos gerativos?",
    challenge: "Criar prompts e orquestrações perfeitamente calibradas para gerar não apenas 'arte de IA', mas vídeos e imagens fotorrealistas que pareçam de fato criados por usuários comuns gravando do celular.",
    solution: "Uma plataforma dedicada a automatizar e estruturar a geração de mídia. O UCG Studio engloba o pipeline de geração de scripts milionários até o render final de áudio e vídeo em avatares ou cenas hyper-realistas.",
    techDecisions: [
      "Integrações de ponta com APIs de Image/Video Generation (Midjourney, Runway, ElevenLabs).",
      "Processamento de jobs assíncronos pesados (arquitetura de filas)."
    ],
    techStack: ["Next.js", "APIs de Geração Visual", "ElevenLabs", "Orquestração Assíncrona"]
  },
  {
    slug: "gravapro-ai",
    title: "GravaPro AI",
    subtitle: "Companheiro autônomo para criação e gravação",
    dateStart: "Mai/2026",
    dateLastDeploy: "Mai/2026",
    liveUrl: "https://gravaproai.vercel.app/",
    tag: "AI Companion",
    icon: "mic",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    shortPain: "Bloqueio criativo e dificuldades técnicas na hora de gravar conteúdos densos.",
    genesis: "O momento da gravação é solitário. Criadores e educadores perdem horas estruturando ideias ou ajustando o fluxo, necessitando de um parceiro estratégico em tempo real.",
    challenge: "Fornecer uma interface livre de distrações, mas com poder cognitivo massivo para co-criar scripts e estruturas de ensino no instante que a ideia surge.",
    solution: "GravaPro AI Companion. Um assistente que entende a linha editorial do criador e molda roteiros, revisa takes e serve como cérebro auxiliar de altíssima velocidade.",
    techDecisions: [
      "Afinamento (Fine-tuning) e prompts sistêmicos direcionados a pedagogia e retenção de atenção.",
      "Interface baseada em conversação focada na experiência do usuário (UX)."
    ],
    techStack: ["Next.js", "AI Assistants API", "LLMs", "UX Minimalista"]
  }
];
