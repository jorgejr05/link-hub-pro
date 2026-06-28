-- 1. Create the blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  date text NOT NULL,
  author text NOT NULL,
  cover_image text,
  social_instagram text,
  social_linkedin text,
  social_tiktok text,
  views integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 2. Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Create Policy for Public Read Access
CREATE POLICY "Public profiles are viewable by everyone."
ON blog_posts FOR SELECT
USING ( true );

-- 4. Create Policy for Authenticated Admin Access
-- (Permite que usuários logados com a conta oficial do Supabase possam inserir/editar/deletar)
CREATE POLICY "Admins can insert"
ON blog_posts FOR INSERT
WITH CHECK ( auth.role() = 'authenticated' );

CREATE POLICY "Admins can update"
ON blog_posts FOR UPDATE
USING ( auth.role() = 'authenticated' );

CREATE POLICY "Admins can delete"
ON blog_posts FOR DELETE
USING ( auth.role() = 'authenticated' );

-- 5. Insert the initial 3 posts
INSERT INTO blog_posts (slug, title, excerpt, content, category, read_time, date, author, social_instagram, social_linkedin, social_tiktok)
VALUES
(
  'ia-transformando-pme-interior',
  'Como a IA está transformando pequenas e médias empresas no interior do Brasil',
  'Não é apenas no Vale do Silício. Empresas de Araçatuba e região já estão usando IA para automatizar vendas, reduzir custos e ganhar escala competitiva.',
  '<h2 class="text-2xl font-bold text-primary mb-4 mt-8">A Revolução Silenciosa Fora das Capitais</h2><p class="text-on-surface-variant mb-6 leading-relaxed">Quando falamos de Inteligência Artificial, a imagem que costuma vir à cabeça são grandes corporações tech e startups unicórnios em São Paulo ou no Vale do Silício. Mas a verdadeira revolução silenciosa está acontecendo no interior do Brasil.</p><p class="text-on-surface-variant mb-6 leading-relaxed">Em cidades como Araçatuba, clínicas médicas, escritórios de contabilidade e e-commerces regionais estão adotando LLMs (Large Language Models) para resolver problemas diários que antes exigiam horas de trabalho manual.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">O Gargalo do Atendimento</h3><p class="text-on-surface-variant mb-6 leading-relaxed">Uma das maiores dores das pequenas e médias empresas (PMEs) é o atendimento via WhatsApp. Responder clientes fora do horário comercial, classificar leads e encaminhar orçamentos tomava um tempo precioso das equipes. Hoje, com <strong>Agentes de IA</strong>, esse fluxo pode ser 100% automatizado, com a IA lendo o catálogo da empresa em tempo real e fechando vendas de forma autônoma e humanizada.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">Redução de Custos e Escala</h3><p class="text-on-surface-variant mb-6 leading-relaxed">A matemática é simples: uma integração bem-feita de IA custa uma fração de um novo funcionário focado apenas em suporte básico. Ao terceirizar a triagem e as dúvidas comuns para um Agente, o time humano foca em fechar os grandes negócios e no relacionamento estratégico.</p><blockquote class="border-l-4 border-primary-container pl-6 py-2 my-8 italic text-lg text-primary">"A IA não vai substituir sua empresa, mas uma empresa usando IA certamente vai."</blockquote><h3 class="text-xl font-bold text-primary mb-3 mt-8">Por Onde Começar?</h3><p class="text-on-surface-variant mb-6 leading-relaxed">O primeiro passo é mapear os processos manuais e repetitivos. Onde a equipe gasta mais tempo copiando e colando dados? Onde os clientes reclamam de demora no atendimento? É aí que a IA brilha.</p>',
  'Estratégia de IA',
  '5 min',
  '28 de Junho, 2026',
  'Jorge Jr.',
  'A revolução da IA não está só no Vale do Silício — ela já chegou no interior paulista! 🚀 Empresas que não adotarem automação agora vão perder mercado. Arrasta pro lado pra ver como clínicas e lojas em Araçatuba estão automatizando o WhatsApp. Link na bio pro artigo completo! 👇 #IA #Araçatuba #Inovacao #Empreendedorismo',
  'Como a IA está transformando PMEs no interior de São Paulo.\n\nMuitos acreditam que IA é apenas para big techs, mas o maior impacto proporcional está acontecendo em pequenas e médias empresas. Automação de WhatsApp com LLMs, integração com ERPs e triagem de leads 24/7 já são realidade.\n\nEscrevi um artigo detalhando os primeiros passos para empresários que não querem ficar para trás. Leia no blog: [Link]',
  'Hook: Você acha que Inteligência Artificial é só pra empresa gigante? Errado.\n\nBody: Se você tem um negócio local, seja clínica, loja ou escritório, seus concorrentes já estão usando IA pra atender clientes 24 horas por dia no WhatsApp e você tá perdendo venda dormindo. A IA consegue ler seu estoque, montar orçamento e até cobrar o cliente. Quer saber como implementar isso na sua empresa sem gastar uma fortuna? Clica no link do meu perfil e lê o artigo que acabei de soltar.\n\nCall to action: Me segue aqui pra mais dicas de automação.'
),
(
  'chatgpt-gemini-claude-qual-escolher',
  'ChatGPT, Gemini ou Claude: qual modelo escolher para automatizar seu negócio?',
  'Com tantas opções de LLMs no mercado, fazer a escolha certa impacta diretamente no custo da sua API e na inteligência do seu atendimento. Veja o comparativo focado em negócios.',
  '<h2 class="text-2xl font-bold text-primary mb-4 mt-8">Guerra de Titãs: Qual o melhor LLM para você?</h2><p class="text-on-surface-variant mb-6 leading-relaxed">Se você decidiu implementar IA no seu negócio, o primeiro dilema técnico é: qual "cérebro" utilizar? OpenAI (ChatGPT), Google (Gemini) ou Anthropic (Claude)? A resposta depende inteiramente do seu caso de uso.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">1. OpenAI (GPT-4o / GPT-4o-mini)</h3><p class="text-on-surface-variant mb-2 leading-relaxed"><strong>Ponto forte:</strong> O ecossistema mais maduro do mercado. Excelente para chamadas de função (function calling), ou seja, quando você precisa que a IA execute ações em sistemas externos (ex: criar um lead no CRM, gerar um boleto).</p><p class="text-on-surface-variant mb-6 leading-relaxed"><strong>Custo:</strong> O modelo mini é extremamente barato e rápido, ideal para triagem de mensagens de WhatsApp.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">2. Anthropic (Claude 3.5 Sonnet)</h3><p class="text-on-surface-variant mb-2 leading-relaxed"><strong>Ponto forte:</strong> Codificação, redação e análise de documentos complexos. Se o seu caso de uso envolve ler PDFs gigantes, contratos ou gerar relatórios gerenciais, o Claude tem uma janela de contexto e uma capacidade de raciocínio lógico frequentemente superior ao GPT-4.</p><p class="text-on-surface-variant mb-6 leading-relaxed"><strong>Custo:</strong> Premium, mas vale cada centavo para tarefas de alta complexidade intelectual.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">3. Google (Gemini 1.5 Pro)</h3><p class="text-on-surface-variant mb-6 leading-relaxed"><strong>Ponto forte:</strong> Janela de contexto massiva (até 2 milhões de tokens) e integração nativa com o Workspace (Docs, Sheets, Drive). Se você quer processar vídeos inteiros, ou todo o histórico do seu negócio de uma vez, o Gemini é imbatível.</p><div class="glass-panel rounded-2xl p-6 my-8"><h3 class="text-xl font-bold text-primary mb-3">Veredito do Arquiteto</h3><p class="text-on-surface-variant mb-2 leading-relaxed">Para bots de WhatsApp de e-commerce e triagem: <strong class="text-primary-container">GPT-4o-mini</strong>.</p><p class="text-on-surface-variant mb-2 leading-relaxed">Para análise de contratos em escritórios de advocacia: <strong class="text-primary-container">Claude 3.5 Sonnet</strong>.</p><p class="text-on-surface-variant mb-2 leading-relaxed">Para cruzar dados de mil planilhas da sua empresa: <strong class="text-primary-container">Gemini 1.5 Pro</strong>.</p></div>',
  'Tutoriais',
  '7 min',
  '25 de Junho, 2026',
  'Jorge Jr.',
  'ChatGPT, Gemini ou Claude? 🤔 Escolher o LLM errado pode custar caro pra sua empresa no fim do mês! 💸 No novo post do blog eu destrincho qual inteligência artificial usar para atendimento no WhatsApp, análise de contratos e automação. Confere no link da bio! #InteligenciaArtificial #OpenAI #Gemini #Claude',
  'A escolha do modelo fundacional (LLM) define o sucesso da arquitetura de IA da sua empresa.\n\nVejo muitos empresários pagando caro em chamadas de API do GPT-4 para tarefas que um modelo menor resolveria perfeitamente. Por outro lado, tentar economizar na análise de um contrato complexo usando um modelo open-source fraco pode gerar alucinações perigosas.\n\nNeste artigo, faço um comparativo técnico e de custos: OpenAI vs Google vs Anthropic focado em Casos de Uso Empresariais. Link nos comentários.',
  'Hook: Pare de gastar dinheiro à toa com Inteligência Artificial!\n\nBody: Se você tá usando o ChatGPT Plus pra tudo, você tá vacilando. Tem 3 inteligências gigantes hoje: OpenAI, Google Gemini e Claude. Quer um robô de WhatsApp barato e rápido? GPT-4o mini. Precisa ler um contrato de 50 páginas sem errar nada? Vai de Claude 3.5. Quer analisar um vídeo de 2 horas da sua reunião? Gemini. Usar a ferramenta certa pra tarefa certa é o segredo da automação barata. Lê o guia completo lá no meu site!'
),
(
  'o-que-e-agente-de-ia-atendimento',
  'O que é um Agente de IA e como ele pode atender seus clientes 24h',
  'Esqueça os chatbots burros de menu (digite 1, 2 ou 3). Os Agentes Autônomos de IA conversam como humanos e resolvem problemas reais no WhatsApp.',
  '<h2 class="text-2xl font-bold text-primary mb-4 mt-8">Adeus, Chatbots Engessados!</h2><p class="text-on-surface-variant mb-6 leading-relaxed">Todos nós já perdemos a paciência com um robô no WhatsApp que só sabe dizer: <em>"Desculpe, não entendi. Digite 1 para Financeiro ou 2 para Suporte"</em>. Esse modelo de atendimento baseado em "árvore de decisões" está oficialmente morto.</p><p class="text-on-surface-variant mb-6 leading-relaxed">A nova era pertence aos <strong class="text-primary-container">Agentes Autônomos de IA</strong>.</p><h3 class="text-xl font-bold text-primary mb-3 mt-8">Qual a diferença?</h3><p class="text-on-surface-variant mb-6 leading-relaxed">Um chatbot tradicional só responde o que foi previamente programado. Se o cliente faz uma pergunta fora do roteiro, ele quebra. Um Agente de IA, movido por um LLM, tem <strong>raciocínio, contexto e acesso a ferramentas (Tools)</strong>.</p><ul class="space-y-4 mb-8"><li class="flex gap-3 text-on-surface-variant leading-relaxed"><span class="material-symbols-outlined text-primary-container shrink-0">check_circle</span><span><strong>Entendimento Natural:</strong> O cliente pode mandar um áudio de 2 minutos enrolado, e a IA extrai a intenção exata.</span></li><li class="flex gap-3 text-on-surface-variant leading-relaxed"><span class="material-symbols-outlined text-primary-container shrink-0">check_circle</span><span><strong>Integração de Sistemas:</strong> O Agente não só responde. Se o cliente diz "quero comprar o produto X", o Agente acessa o ERP (como Bling), checa o estoque, gera o link de pagamento e envia de volta na conversa.</span></li><li class="flex gap-3 text-on-surface-variant leading-relaxed"><span class="material-symbols-outlined text-primary-container shrink-0">check_circle</span><span><strong>Memória:</strong> Ele lembra o que o cliente falou ontem, há um mês, criando um relacionamento altamente personalizado.</span></li></ul><h3 class="text-xl font-bold text-primary mb-3 mt-8">Como implementamos na Plugeefy?</h3><p class="text-on-surface-variant mb-6 leading-relaxed">Na arquitetura que desenhamos para e-commerces, o Agente possui um servidor MCP (Model Context Protocol) que expõe o catálogo de produtos de forma estruturada. A IA funciona como uma vendedora humana super capacitada que sabe de cabeça o estoque inteiro da loja e atende centenas de clientes simultaneamente, de madrugada ou no domingo de Páscoa.</p><p class="text-on-surface-variant font-medium text-primary mb-6">E a melhor parte? O setup é mais rápido do que você imagina.</p>',
  'Automação de Processos',
  '6 min',
  '20 de Junho, 2026',
  'Jorge Jr.',
  '🤖 Morte aos chatbots burros de ''Digite 1, 2 ou 3''! A era agora é dos Agentes de IA Autônomos. Eles conversam como humanos, checam seu estoque e fecham vendas de madrugada no WhatsApp. Quer entender como essa mágica (que é pura engenharia) funciona? Artigo novo no blog! Link na bio! 🚀 #Automação #Atendimento #WhatsApp',
  'O fim das ''árvores de decisão'' no atendimento ao cliente.\n\nChatbots baseados em regras rígidas geram atrito e frustração. A transição para Agentes de IA (Stateful Agents) permite que o bot compreenda intenções complexas, acesse APIs (como ERPs e CRMs) em tempo real via Function Calling e resolva o problema do cliente sem transbordo humano.\n\nDetalhei a arquitetura técnica por trás de um verdadeiro Agente de Vendas 24/7 no novo estudo de caso do blog.',
  'Hook: Se o WhatsApp da sua empresa tem aquele robô chato de ''digite 1 ou 2'', eu tenho péssimas notícias.\n\nBody: Seus clientes odeiam isso. A tecnologia que a gente usa agora se chama Agente Autônomo de IA. O cliente manda um áudio gigantesco, a IA entende tudo, entra no seu sistema, checa se tem a peça no estoque e já manda o link do Pix. Tudo sozinho. É uma máquina de vendas operando 24 horas. Quer botar isso na sua loja? Confere o artigo novo no meu site que eu explico exatamente como funciona.'
);
