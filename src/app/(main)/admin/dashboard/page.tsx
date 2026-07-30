"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { groq } from "@/lib/groq";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  social_instagram: string;
  social_linkedin: string;
  social_tiktok: string;
  date: string;
  author: string;
  views: number;
}
export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Generator states
  const [showGenerator, setShowGenerator] = useState(false);
  const [topic, setTopic] = useState("");
  const [generating, setGenerating] = useState(false);
  const [genStatus, setGenStatus] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    if (data) setPosts(data);
    setLoading(false);
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  const deletePost = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    fetchPosts();
  };

  const generateArticle = async () => {
    if (!topic) return alert("Digite um tema ou link");
    if (!groq) return alert("Groq API não configurada");

    setGenerating(true);
    setGenStatus("Iniciando motor de IA...");

    try {
      const prompt = `
        Você é Jorge Jr, Especialista em Inteligência Artificial, Automação e LLMs em Araçatuba-SP.
        Crie um artigo completo e roteiros de redes sociais sobre este tema: "${topic}"

        REGRAS:
        - O tom deve ser direto, persuasivo para donos de pequenas e médias empresas (B2B).
        - O formato de saída DEVE ser estritamente um JSON com a seguinte estrutura:
        {
          "slug": "url-amigavel",
          "title": "Título chamativo",
          "excerpt": "Resumo de 2 linhas",
          "content": "Conteúdo HTML completo do artigo com <h2> e <p> formatados.",
          "category": "Estratégia de IA",
          "read_time": "5 min",
          "social_instagram": "Caption para Instagram com hashtags",
          "social_linkedin": "Artigo curto para LinkedIn",
          "social_tiktok": "Roteiro Hook/Body/CTA para TikTok"
        }
        NÃO retorne markdown extra ou crases \`\`\`json, retorne APENAS o JSON validado.
      `;

      setGenStatus("Escrevendo artigo e roteiros (Groq LLaMA/Mixtral)...");
      const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama3-70b-8192", // Modelo top tier groq
        temperature: 0.7,
        response_format: { type: "json_object" }
      });

      const result = chatCompletion.choices[0]?.message?.content;
      if (!result) throw new Error("Falha na geração");

      const articleData = JSON.parse(result);

      setGenStatus("Salvando no banco de dados...");
      const { error } = await supabase.from("blog_posts").insert([
        {
          ...articleData,
          date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
          author: "Jorge Jr.",
          views: 0
        }
      ]);

      if (error) throw error;

      setGenStatus("Concluído!");
      setShowGenerator(false);
      setTopic("");
      fetchPosts();
    } catch (err: any) {
      console.error(err);
      alert("Erro ao gerar post: " + err.message);
    } finally {
      setGenerating(false);
      setGenStatus("");
    }
  };

  return (
    <main className="min-h-screen bg-background text-on-surface p-6 md:p-12">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-headline-lg text-primary mb-2">Painel de Controle</h1>
            <p className="text-on-surface-variant font-label-md">Gestão Autônoma de Conteúdo e Analytics</p>
          </div>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-300 font-label-md text-sm transition-colors border border-red-500/30 px-4 py-2 rounded-lg">
            Desconectar
          </button>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-container/30 border border-white/5 rounded-2xl p-6">
            <h3 className="font-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-2">Total de Artigos</h3>
            <p className="text-4xl text-primary font-bold">{posts.length}</p>
          </div>
          <div className="bg-surface-container/30 border border-white/5 rounded-2xl p-6">
            <h3 className="font-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-2">Views Acumuladas</h3>
            <p className="text-4xl text-primary-container font-bold">
              {posts.reduce((acc, curr) => acc + (curr.views || 0), 0)}
            </p>
          </div>
          <div className="bg-surface-container/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-start">
            <button 
              onClick={() => setShowGenerator(!showGenerator)}
              className="w-full bg-primary-container text-on-primary-container font-bold py-3 rounded-xl hover:neon-glow transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              Gerar Artigo com IA
            </button>
          </div>
        </div>

        {/* AI Generator Panel */}
        {showGenerator && (
          <div className="mb-12 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="bg-surface-container-high border border-primary-container/30 rounded-2xl p-8 relative">
              <h2 className="text-xl text-primary mb-4 font-headline-md">Motor de Automação (Groq LLaMA)</h2>
              <p className="text-on-surface-variant text-sm mb-6 max-w-2xl">
                Digite um tema, uma dor do seu cliente ou o link de uma notícia. A IA irá cruzar isso com seu perfil e gerar o artigo SEO-otimizado, além dos scripts para Reels, TikTok e post no LinkedIn.
              </p>
              
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ex: Como agentes de IA estão automatizando a triagem de currículos no RH"
                  className="flex-grow bg-background border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container"
                  disabled={generating}
                  data-gramm="false"
                  data-1p-ignore="true"
                  data-lpignore="true"
                  spellCheck="false"
                />
                <button 
                  onClick={generateArticle}
                  disabled={generating || !topic}
                  className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:brightness-110 disabled:opacity-50 min-w-[200px]"
                >
                  {generating ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                      Gerando...
                    </span>
                  ) : "Iniciar Geração"}
                </button>
              </div>
              {genStatus && <p className="text-primary-container mt-4 font-label-md text-sm">{genStatus}</p>}
            </div>
          </div>
        )}

        {/* Content Table */}
        <div className="bg-surface-container/20 border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="p-4 font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Título</th>
                  <th className="p-4 font-label-caps text-xs text-on-surface-variant uppercase tracking-widest text-center">Views</th>
                  <th className="p-4 font-label-caps text-xs text-on-surface-variant uppercase tracking-widest text-center">Data</th>
                  <th className="p-4 font-label-caps text-xs text-on-surface-variant uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={4} className="p-8 text-center text-on-surface-variant">Carregando...</td></tr>
                ) : posts.length === 0 ? (
                  <tr><td colSpan={4} className="p-8 text-center text-on-surface-variant">Nenhum post encontrado.</td></tr>
                ) : (
                  posts.map(post => (
                    <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="p-4">
                        <p className="text-primary font-medium line-clamp-1">{post.title}</p>
                        <p className="text-on-surface-variant text-xs line-clamp-1">{post.slug}</p>
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-primary-container/20 text-primary-container px-3 py-1 rounded-full text-xs font-bold">
                          {post.views}
                        </span>
                      </td>
                      <td className="p-4 text-center text-on-surface-variant text-sm">{post.date}</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => alert("Scripts:\n" + post.social_tiktok)} className="p-2 text-on-surface-variant hover:text-primary transition-colors tooltip relative" title="Ver Social Scripts">
                            <span className="material-symbols-outlined text-sm">share</span>
                          </button>
                          <button onClick={() => deletePost(post.id)} className="p-2 text-on-surface-variant hover:text-red-400 transition-colors">
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
