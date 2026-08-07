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
  
  // Jornada Content
  heroTitle: string;
  heroSubtitle: string;
  
  problemTitle: string;
  problemParagraphs: string[];
  
  dominoTitle: string;
  dominoSubtitle: string;
  dominoSteps: string[];
  dominoConclusion: string;
  
  climaxTitle: string;
  climaxParagraphs: string[];
  climaxList?: string[];
  climaxHighlightTitle: string;
  climaxHighlightText: string;
  
  techGrid: string[];
  
  learningsTitle: string;
  learnings: string[];
}

export const projectsData: Project[] = [
  {
    slug: "plugeefy",
    title: "Plugeefy",
    subtitle: "Infraestrutura de crescimento para a era da Inteligência Artificial",
    dateStart: "Jan/2025",
    dateLastDeploy: "Jul/2026",
    tag: "Infraestrutura & SEO",
    icon: "layers",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    shortPain: "O atendimento parava quando o expediente terminava.",
    
    heroTitle: "A Plugeefy nasceu quando estávamos tentando responder uma única pergunta.",
    heroSubtitle: "Como uma empresa pode continuar vendendo quando ninguém está trabalhando?",
    
    problemTitle: "Tudo começou com um problema simples.",
    problemParagraphs: [
      "O atendimento parava quando o expediente terminava.",
      "Durante as noites, finais de semana e feriados, clientes continuavam chegando pelo WhatsApp e Instagram, mas a equipe comercial já não estava disponível. Não faltavam vendedores. Faltava uma operação que continuasse funcionando quando as pessoas saíssem da empresa.",
      "Rapidamente percebemos que responder perguntas era apenas uma pequena parte do problema.",
      "Para vender de verdade, um agente precisava conhecer toda a operação da empresa."
    ],
    
    dominoTitle: "Cada resposta revelou uma pergunta ainda maior.",
    dominoSubtitle: "Toda vez que resolvíamos um problema, descobríamos outro que estava escondido atrás dele.",
    dominoSteps: [
      "Automatizar o atendimento exigiu integrar o ERP.",
      "Integrar o ERP revelou que vender também dependia do cálculo de frete.",
      "O frete nos obrigou a entender pagamentos.",
      "Os pagamentos exigiram CRM.",
      "O CRM aproximou todos os canais de atendimento.",
      "E, quando tudo finalmente estava conectado, percebemos que o próximo canal já não era mais o WhatsApp."
    ],
    dominoConclusion: "Eram os próprios modelos de IA.",
    
    climaxTitle: "Uma nova forma de descoberta.",
    climaxParagraphs: [
      "Enquanto construíamos a arquitetura, o comportamento dos consumidores também estava mudando.",
      "Pela primeira vez, percebemos que as pessoas estavam deixando de navegar por categorias de um e-commerce. Elas começaram a simplesmente perguntar para os modelos de IA e motores de buscas:",
      "Se a descoberta passaria a acontecer dentro de assistentes inteligentes, nossa infraestrutura também precisava estar preparada para isso."
    ],
    climaxList: [
      "\"Qual creatina vocês recomendam?\"",
      "\"Onde encontro essa roupa?\"",
      "\"Qual sapato combina com esse modelo de blusa?\""
    ],
    climaxHighlightTitle: "A Plugeefy evoluiu de um simples software para uma infra de crescimento.",
    climaxHighlightText: "Ela é o laboratório onde investigamos como empresas irão operar na era da Inteligência Artificial.",
    
    techGrid: [
      "Sincronização de Estoque", "Concorrência", "Sistemas de Filas", "Webhooks Nativos",
      "Autenticação", "Compliance LGPD", "Isolamento Multi-tenant", "Criação de Pedidos",
      "Recuperação de Falhas", "Múltiplos Canais", "Infraestrutura Meta", "Clusters de ERP",
      "Servidores MCP", "Sincronização de Catálogo"
    ],
    
    learningsTitle: "O que 18 meses em produção nos ensinaram.",
    learnings: [
      "A IA nunca foi o gargalo. Os dados eram.",
      "Modelos mudam todos os meses. Arquiteturas duram anos.",
      "Automatizar um processo ruim apenas faz o problema acontecer mais rápido.",
      "Toda integração parece simples até precisar funcionar às três da manhã de um domingo.",
      "Quanto mais inteligente o agente, mais importante se torna a qualidade dos dados que ele recebe."
    ]
  },
  {
    slug: "gestao-de-entregas",
    title: "Gestão de Entregas",
    subtitle: "Ecossistema de vitrine e despacho local",
    dateStart: "Out/2025",
    dateLastDeploy: "Mai/2026",
    liveUrl: "https://sistemaentregas.vercel.app/",
    tag: "Marketplace & Logística",
    icon: "local_shipping",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    shortPain: "Taxas abusivas dos grandes apps e gestão caótica de frotas próprias.",
    
    heroTitle: "O Gestão de Entregas nasceu de uma indignação operacional comum no varejo local.",
    heroSubtitle: "Como libertar lojistas das taxas abusivas dos grandes marketplaces sem destruir a logística de entrega?",
    
    problemTitle: "Tudo começou com um problema simples.",
    problemParagraphs: [
      "Comerciantes de diversos nichos (de lanchonetes a lojas do centro) estavam reféns das altas taxas de grandes aplicativos e marketplaces.",
      "O desejo de vender pelos próprios canais (WhatsApp, Instagram) era grande, mas a execução era desastrosa. Anotar pedidos no caderno e coordenar entregadores no grito gerava atrasos e envios incorretos.",
      "Rapidamente percebemos que tirar a loja do grande aplicativo era fácil.",
      "Difícil era replicar a infraestrutura logística que o aplicativo fornecia."
    ],
    
    dominoTitle: "A construção do ecossistema revelou buracos maiores.",
    dominoSubtitle: "Construir um catálogo digital foi só o primeiro passo. A complexidade estava no mundo real.",
    dominoSteps: [
      "Ter o catálogo digital exigiu receber pagamentos.",
      "Receber pagamentos exigiu calcular a distância até a casa do cliente.",
      "Calcular a distância obrigou a conexão com mapas (Geocoding).",
      "Saber o endereço exigiu um painel (KDS/Dashboard) para a separação ou cozinha preparar o pedido.",
      "O pedido pronto precisava avisar o entregador.",
      "O entregador precisava de um app ou painel de despacho próprio."
    ],
    dominoConclusion: "O verdadeiro produto não era o catálogo. Era o roteamento logístico em tempo real.",
    
    climaxTitle: "A fundação do Gestão de Entregas.",
    climaxParagraphs: [
      "Enquanto montávamos a infraestrutura para lojas isoladas, percebemos que o gargalo de marketing local também existia.",
      "Em cidades médias, os consumidores precisam de um agregador local para encontrar as opções.",
      "Foi aí que o sistema evoluiu para um modelo de Marketplace Próprio Regional, onde o lojista não paga comissão por venda, mas usufrui de uma malha logística unificada."
    ],
    climaxHighlightTitle: "O Gestão de Entregas se tornou uma infraestrutura de independência.",
    climaxHighlightText: "Um motor que orquestra pedidos, despachos e marketing sem extorquir a margem de lucro do empreendedor local.",
    
    techGrid: [
      "Arquitetura Serverless", "Sincronização Realtime", "Supabase", "Next.js",
      "Mapas e Geocoding", "Cálculo de Rotas", "Painel de Despacho", "Gestão de Frota"
    ],
    
    learningsTitle: "O que a logística urbana nos ensinou.",
    learnings: [
      "Entregadores não têm tempo para apps complexos. A interface precisa ser de 1 clique.",
      "Lidar com dinheiro físico na entrega exige fechamento de caixa milimétrico no sistema.",
      "O cliente perdoa erro no pedido, mas não perdoa demora na entrega.",
      "Arquiteturas de tempo real (WebSockets) são obrigatórias quando a promessa é a entrega expressa."
    ]
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
    shortPain: "Leads caros esfriando por demora nas respostas via WhatsApp à noite e finais de semana.",
    
    heroTitle: "O Agendamento IA surgiu para estancar um sangramento silencioso.",
    heroSubtitle: "Quantos milhares de reais são perdidos quando a clínica está fechada e não atende o WhatsApp?",
    
    problemTitle: "Um gargalo de conversão milionário.",
    problemParagraphs: [
      "Clínicas e negócios High-Ticket rodam anúncios pesados no Instagram. O lead clica, chega no WhatsApp às 21h, animado com o procedimento.",
      "Ninguém responde. No dia seguinte, às 08h, a secretária manda um 'Bom dia'. O lead já esfriou, desistiu ou encontrou o concorrente.",
      "Colocar um bot burro de 'Digite 1 para preço, 2 para endereço' ofendia o cliente High-Ticket e derrubava a conversão do mesmo jeito."
    ],
    
    dominoTitle: "A sofisticação do atendimento.",
    dominoSubtitle: "Atender um paciente VIP não é sobre responder rápido, é sobre entender o contexto.",
    dominoSteps: [
      "Remover os menus burros exigiu o uso de Modelos de Linguagem Naturais (LLMs).",
      "Impedir a IA de alucinar exigiu a implementação de RAG (base de conhecimento injetada no contexto).",
      "Processar a queixa do paciente exigiu transcrever áudios do WhatsApp.",
      "A IA concordar com a data exigiu leitura em tempo real da agenda da clínica.",
      "Confirmar a marcação exigiu agendar no Google Calendar ou ERP."
    ],
    dominoConclusion: "O Agente SDR precisava operar o sistema da clínica com a mesma perícia da recepcionista.",
    
    climaxTitle: "A recepcionista que nunca dorme.",
    climaxParagraphs: [
      "Criamos um fluxo de orquestração via n8n onde a IA recepciona, é empática, qualifica a dor do paciente, consulta a tabela de valores exata via banco vetorial e propõe os melhores horários.",
      "Quando o paciente diz 'na quarta à tarde', a IA valida e reserva.",
      "O resultado: o CPA (Custo por Aquisição) despencou, e a agenda passou a encher de madrugada."
    ],
    climaxHighlightTitle: "O fim das perdas de funil noturnas.",
    climaxHighlightText: "Não é um chatbot de FAQ. É uma IA autônoma capaz de fechar negócios de alto valor.",
    
    techGrid: [
      "n8n (Orquestração)", "LangChain / RAG", "Integração WhatsApp API", "Supabase",
      "LLMs (OpenAI/Claude)", "Webhooks de Agenda", "Análise de Sentimento", "Transcription API"
    ],
    
    learningsTitle: "O que o atendimento autônomo nos ensinou.",
    learnings: [
      "Pacientes preferem ser bem atendidos por uma IA do que ignorados por um humano.",
      "Controlar o tamanho das mensagens da IA é vital. Ninguém lê blocos gigantes no WhatsApp.",
      "A base de conhecimento (RAG) da clínica deve ser revisada constantemente, pois o modelo trata ela como verdade absoluta."
    ]
  },
  {
    slug: "ucg-studio",
    title: "UGC Studio",
    subtitle: "Geração de criativos em escala com IA",
    dateStart: "Nov/2025",
    dateLastDeploy: "Nov/2025",
    liveUrl: "https://ugcjorgejr.vercel.app/",
    tag: "Geração de Mídia (IA)",
    icon: "movie_creation",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    shortPain: "O alto custo, fricção e lentidão para se produzir User Generated Content (Vídeos Curtos).",
    
    heroTitle: "O UGC Studio nasceu para resolver o gargalo da mídia de performance.",
    heroSubtitle: "Como gerar dezenas de criativos em vídeo por dia sem montar um estúdio profissional?",
    
    problemTitle: "A fome infinita por criativos (Ad Fatigue).",
    problemParagraphs: [
      "Agências de tráfego pago enfrentam sempre a mesma barreira: depois de algumas semanas, os vídeos dos anúncios cansam a audiência (fadiga criativa).",
      "Contratar influenciadores e atores para regravar depoimentos ou apresentar novos ângulos do produto era caro e o ciclo de feedback era lento demais.",
      "Enquanto isso, modelos generativos de imagem, voz e vídeo estavam se tornando hiper-realistas, mas estavam espalhados em ferramentas isoladas."
    ],
    
    dominoTitle: "Unificando os pedaços da IA.",
    dominoSubtitle: "Gerar um simples vídeo com áudio sincronizado envolvia coordenar 4 sistemas diferentes.",
    dominoSteps: [
      "Gerar o roteiro (Prompt Engineering) precisava ser guiado por frameworks de copywriting.",
      "A voz do ator exigiu integração com a ElevenLabs (Text-to-Speech avançado).",
      "Gerar o rosto exigiu Midjourney/Stable Diffusion.",
      "Sincronizar a fala (Lip-sync) exigiu APIs robustas de renderização (Runway, HeyGen).",
      "Juntar tudo isso em uma esteira contínua exigiu uma arquitetura assíncrona baseada em Filas."
    ],
    dominoConclusion: "Criamos a linha de montagem industrial do marketing generativo.",
    
    climaxTitle: "Vídeos em escala, sem câmeras.",
    climaxParagraphs: [
      "O UGC Studio encapsula toda a complexidade. A pessoa entra com um link de produto ou ideia, e a plataforma cuida do pipeline inteiro.",
      "Com a geração massiva, as agências podem realizar testes A/B profundos (mesmo roteiro, avatares diferentes; ou mesmo avatar, scripts diferentes), descobrindo os vencedores antes de queimar o orçamento (Budget).",
      "O custo por criativo e o tempo de lançamento despencaram em 90%."
    ],
    climaxHighlightTitle: "Fábrica autônoma de conversão.",
    climaxHighlightText: "A plataforma que democratiza o acesso a recursos audiovisuais que antes custavam dezenas de milhares de reais.",
    
    techGrid: [
      "Next.js App Router", "Integração ElevenLabs", "Integração HeyGen/Runway", "Jobs Assíncronos",
      "AWS S3 (Armazenamento)", "Pipelines de Geração de Prompts", "Filas (Queues)", "React"
    ],
    
    learningsTitle: "O que a geração sintética nos ensinou.",
    learnings: [
      "A iluminação e a textura no micro-render são os detalhes que diferenciam 'IA barata' de 'Hyper-realismo'.",
      "Processamentos em vídeo quebram integrações sincrônicas. Usar Webhooks é a única forma segura de lidar com renderizações longas.",
      "O fator humano (emoção na voz, timing) ainda é o diferencial. A IA precisa receber direção de arte minuciosa através do prompt."
    ]
  },
  {
    slug: "roteirizador-delivery",
    title: "Sistema Logístico Delivery",
    subtitle: "Roteirização inteligente e acerto financeiro",
    dateStart: "Mar/2026",
    dateLastDeploy: "Mar/2026",
    liveUrl: "https://roterizadorai.vercel.app/",
    tag: "Algoritmos & Logística",
    icon: "route",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    shortPain: "Gestão manual de motoboys e rotas resultando em atrasos e furos no caixa.",
    
    heroTitle: "O Roteirizador nasceu observando o desespero de um despachante às 20h de sábado.",
    heroSubtitle: "Como uma mente humana pode agrupar 40 pedidos e dividir para 10 entregadores simultaneamente?",
    
    problemTitle: "Tudo começou com uma prancheta de papel.",
    problemParagraphs: [
      "Nas grandes lanchonetes locais, pedidos chegam por WhatsApp, telefone e iFood ao mesmo tempo.",
      "O despachante olha para os pacotes na mesa e precisa decidir: qual motoboy leva o pedido do bairro A junto com o bairro B? E se o motoboy 3 acabou de chegar e está na vez?",
      "Isso gerava viagens ineficientes (motoboys cruzando a cidade inteira com um único lanche) e pior: o fechamento financeiro no final da noite demorava 2 horas para conferir quem recebeu quanto em dinheiro, cartão ou pix."
    ],
    
    dominoTitle: "O efeito cascata da roteirização.",
    dominoSubtitle: "Resolver apenas a rota não fechava a conta final da noite.",
    dominoSteps: [
      "Criar rotas exigiu integrar os pedidos automaticamente do iFood.",
      "Agrupar por bairros exigiu uma API de geolocalização e raio geográfico.",
      "Distribuir justamente exigiu criar uma fila (roleta) de motoboys.",
      "O motoboy aceitar a corrida exigiu registrar o valor exato da taxa de entrega.",
      "Taxas de entrega variadas exigiram um cofre digital por entregador."
    ],
    dominoConclusion: "O software de rota virou um sistema bancário de acerto de contas.",
    
    climaxTitle: "A otimização em fração de segundos.",
    climaxParagraphs: [
      "Implementamos um motor lógico que consolida a volumetria da noite.",
      "Ao invés de despachar lanches um a um, o sistema encontra os nós (pontos de entrega) mais próximos num mapa, junta os pedidos e emite o romaneio completo.",
      "O dono do restaurante e os motoboys passaram a ir embora 1 hora mais cedo, com a tranquilidade de que os números sempre batiam."
    ],
    climaxHighlightTitle: "De roteador de mapas para controlador de fluxo de caixa.",
    climaxHighlightText: "Um algoritmo que maximiza a taxa/hora do entregador e zera os erros contábeis do estabelecimento.",
    
    techGrid: [
      "Algoritmos de Agrupamento", "Integração API iFood", "Contabilidade Realtime", "Filas Virtuais",
      "React", "TypeScript", "Dashboard Financeiro", "Gestão de Turnos"
    ],
    
    learningsTitle: "O que o chão de fábrica nos ensinou.",
    learnings: [
      "O algoritmo mais avançado do mundo é inútil se a impressora térmica da cozinha falhar.",
      "Interfaces para motoboys devem operar em 'dark mode' para economizar bateria e não ofuscar à noite.",
      "A confiança no sistema vem quando o motoboy confere o saldo na tela e bate centavo por centavo com o bolso dele."
    ]
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
    shortPain: "Múltiplos aplicativos de produtividade gerando mais estresse e pouca consistência.",
    
    heroTitle: "A JUAI nasceu quando percebemos que planilhas e trackers não mudam comportamentos.",
    heroSubtitle: "Como construir uma inteligência que age não como software, mas como parceira diária?",
    
    problemTitle: "A fadiga dos aplicativos.",
    problemParagraphs: [
      "As pessoas usam Notion para notas, planilhas para finanças e apps coloridos para hábitos.",
      "A fricção de abrir o app certo, preencher o dado e fechar quebrava o momento. A motivação acabava na primeira semana de janeiro.",
      "Mais do que 'anotar', faltava cobrança. Faltava alguém, não algo, para dizer: 'Você prometeu que ia treinar hoje de manhã. Tá de pé?'"
    ],
    
    dominoTitle: "A humanização da máquina.",
    dominoSubtitle: "Tornar a IA proativa exigiu repensar toda a estrutura de prompts e memória.",
    dominoSteps: [
      "Para ser uma assistente útil, a IA precisou de uma memória de longo prazo.",
      "Lembrar do que o usuário falou exigiu bancos de dados vetoriais (Embeddings).",
      "Ser proativa exigiu rotinas autônomas e triggers baseados em tempo (CRON).",
      "Agir sobre as finanças exigiu que a IA calculasse o Saldo Livre (deduzindo despesas fixas).",
      "Ser natural obrigou a saída do texto e a adoção maciça de Voz (Hands-free)."
    ],
    dominoConclusion: "O objetivo era remover a interface da frente do relacionamento humano-máquina.",
    
    climaxTitle: "A quebra das grandes metas em microrrotinas.",
    climaxParagraphs: [
      "Descobrimos que a JUAI brilhava não quando gerava um plano anual enorme, mas quando focava no micro.",
      "Se o usuário quisesse ler 12 livros no ano, a JUAI cobrava apenas a meta diária palpável: 10 páginas antes de dormir.",
      "Esse ecossistema fechado (metas, hábitos, dinheiro, calendário) operado apenas por conversa redefiniu a forma como interagimos com as nossas obrigações."
    ],
    climaxHighlightTitle: "Mais humanizada. Mais focada. Mais presente.",
    climaxHighlightText: "A JUAI não é um aplicativo que você abre. É um ecossistema com o qual você convive.",
    
    techGrid: [
      "LLM Fine-tuning", "Processamento de Voz", "Vector Databases", "Embeddings",
      "Animações CSS Avançadas", "Microinterações de UX", "Gestão de Estado Complexa", "Arquitetura Proativa"
    ],
    
    learningsTitle: "O que a Inteligência Pessoal nos ensinou.",
    learnings: [
      "O tom de voz de uma IA muda brutalmente como o usuário absorve uma crítica ou cobrança.",
      "Digitar é lento e cognitivamente exaustivo. Voz é o futuro da interface de entrada.",
      "Um Saldo Livre real (dinheiro na conta menos contas fixas) evita mais dívidas do que qualquer gráfico de pizza colorido."
    ]
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
    shortPain: "O bloqueio criativo solitário de educadores na hora de formatar ideias e scripts.",
    
    heroTitle: "O GravaPro AI nasceu para matar o cursor piscando na tela em branco.",
    heroSubtitle: "Como dar a um produtor de conteúdo um assistente de direção implacável?",
    
    problemTitle: "A gravação de cursos e conteúdos longos é uma ilha deserta.",
    problemParagraphs: [
      "O criador de conteúdo domina o assunto, mas transformar esse conhecimento de sua mente para uma estrutura didática, roteirizada e envolvente leva dias.",
      "Quando a câmera liga, ele frequentemente se perde, refaz takes, e gasta dezenas de horas na pós-edição para consertar problemas de estruturação.",
      "Eles precisavam de um parceiro de brainstorm que também fosse um roteirista sênior."
    ],
    
    dominoTitle: "Codificando a didática.",
    dominoSubtitle: "Fazer a IA gerar texto é fácil. Fazer ela gerar metodologias de ensino engajadoras, não.",
    dominoSteps: [
      "O chat genérico do ChatGPT não servia, exigindo a criação de Prompts de Sistema densos.",
      "Entender o tom do criador exigiu carregar históricos de vídeos antigos no banco vetorial.",
      "Estruturar cursos exigiu que a IA entendesse formatos clássicos (Gatilhos, Retenção, Clímax).",
      "Reduzir o atrito do criador exigiu uma interface limpa, focada e minimalista."
    ],
    dominoConclusion: "O GravaPro não apenas escreve, ele direciona a arquitetura da informação.",
    
    climaxTitle: "O cérebro auxiliar do professor digital.",
    climaxParagraphs: [
      "Com a plataforma operando, criadores passaram a ditar ideias soltas em áudio, e o sistema devolvia roteiros fracionados com tempos de câmera, notas de entonação (B-Roll) e ganchos para manter o público atento.",
      "A barreira de entrada técnica desabou, permitindo que mentes brilhantes foquem apenas em entregar a mensagem, enquanto a IA estrutura a forma."
    ],
    climaxHighlightTitle: "Foco no Flow de Gravação.",
    climaxHighlightText: "Tiramos a frustração do papel em branco e colocamos um estúdio criativo hiper focado nas mãos de um só indivíduo.",
    
    techGrid: [
      "Assistants API", "Fine-Tuning Educacional", "Context Window Optimization",
      "Next.js", "Tailwind CSS", "UX Livre de Distrações", "Processamento de Linguagem Natural"
    ],
    
    learningsTitle: "O que a companhia criativa nos ensinou.",
    learnings: [
      "Quando o assunto é criatividade, as IAs precisam provocar com perguntas desafiadoras, e não apenas concordar com tudo.",
      "A UX precisa ser imaculada. Qualquer botão desnecessário quebra o estado de Flow do criador.",
      "Prompts estruturais (forçando saídas em JSON ou Markdown) transformam textos flácidos em roteiros acionáveis."
    ]
  }
];
