"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  date: string;
  author: string;
  cover_image?: string;
  views: number;
  social_tiktok?: string;
  social_instagram?: string;
  social_linkedin?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("Supabase Error:", error);
        setErrorMsg(error.message);
      }
      if (data) setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const categories = ["Todos", ...Array.from(new Set(posts.map(p => p.category)))];
  const filteredPosts = selectedCategory === "Todos" ? posts : posts.filter(p => p.category === selectedCategory);

  return (
    <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-40 grid grid-cols-1 lg:grid-cols-12 gap-gutter relative items-start">
      {/* Main Content Area (Left Column) */}
      <div className="lg:col-span-8 flex flex-col gap-12">
        {/* Category Menu (Scrollable Pills) */}
        <nav className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-3 pb-4 w-full">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-label-md uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat 
                  ? "bg-primary-container/15 text-primary-container border border-primary-container/30 shadow-[0_0_15px_rgba(202,243,0,0.1)]" 
                  : "bg-surface-container/50 text-on-surface-variant border border-white/5 hover:bg-white/10 hover:text-primary backdrop-blur-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <h1 className="font-headline-xl text-headline-xl text-primary uppercase">
            Últimos Artigos
          </h1>
          <div className="h-px bg-gradient-to-r from-primary-container/50 to-transparent flex-grow"></div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
             <div className="col-span-1 md:col-span-2 py-12 text-center text-on-surface-variant font-label-md">
                Buscando artigos no banco de dados...
             </div>
          ) : errorMsg ? (
             <div className="col-span-1 md:col-span-2 py-12 text-center text-red-400 font-label-md">
                Erro ao buscar artigos: {errorMsg}
             </div>
          ) : filteredPosts.length === 0 ? (
             <div className="col-span-1 md:col-span-2 py-12 text-center text-on-surface-variant font-label-md">
                Nenhum artigo publicado ainda para esta categoria.
             </div>
          ) : (
            filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                <article className="group relative bg-surface-container-low/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden hover:neon-border transition-all duration-500 hover:neon-glow flex flex-col h-full cursor-pointer">
                  <div className="p-8 flex flex-col gap-4 flex-grow relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container neon-glow"></span>
                        <span className="font-label-caps text-[10px] text-primary uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                        <span className="material-symbols-outlined text-[14px]" data-icon="visibility">visibility</span>
                        {post.views}
                      </div>
                    </div>

                    <h2 className="font-headline-md text-headline-md text-primary group-hover:text-primary-container transition-colors text-xl md:text-2xl line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                      <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest">
                        {post.read_time} DE LEITURA
                      </span>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors" data-icon="arrow_forward">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Sidebar (Right Column) */}
      <aside className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32 h-fit pb-12">
        {/* Profile Bento Card */}
        <div className="bg-surface-container/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/10 rounded-full blur-[60px] pointer-events-none"></div>
          <img
            alt="Jorge Jr. Avatar"
            className="w-24 h-24 rounded-full border border-primary-container p-1 mb-4 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUTtkGiVNn7Cytbd39f768CKk3IHcwfaNSTs4Xx_oycaQaQVClcvrVJtQi8rJMAoEfkxIxwb0MKIMpRGXbIXiaPaF1ikrgM252CmgnmZ0TMOkg8vW9NV1j1yQCTicvzNPevZyCDexlbufUpCb9eiySpFhEuqLmvyD9BQnmzI_ySlO5cDq9ms1Rbm0JBEDoyIkNamRjkQXg_g3vP5mktTOZrCO50bMcHi1oiWddDydWTGr_Mw2Uls7cR5YGGO5O3FsDBu7v-x8VrUw"
          />
          <h3 className="font-headline-lg text-headline-lg text-primary mb-1">
            Jorge Jr.
          </h3>
          <span className="font-label-caps text-label-caps text-primary-container tracking-widest mb-6">
            FOUNDER CREATOR
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Construindo o ecossistema digital do futuro. Explorando a interseção
            entre criação de conteúdo, IA e negócios de alta performance.
          </p>
          <div className="flex gap-3 w-full">
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex justify-center items-center transition-colors tooltip relative group" title="Instagram">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="photo_camera">
                photo_camera
              </span>
            </button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex justify-center items-center transition-colors tooltip relative group" title="LinkedIn">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="work">
                work
              </span>
            </button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex justify-center items-center transition-colors tooltip relative group" title="TikTok">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="music_note">
                music_note
              </span>
            </button>
          </div>
        </div>

        {/* Ecosystem Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-outline px-2 uppercase tracking-widest">
            ECOSSISTEMA
          </h4>
          <a
            className="group relative bg-surface-container-low/40 backdrop-blur-xl border border-white/5 hover:border-primary-container/50 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 overflow-hidden"
            href="https://gravaproai.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-inner relative z-10 group-hover:neon-border transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="videocam">
                videocam
              </span>
            </div>
            <div className="relative z-10 flex-grow">
              <h5 className="font-headline-md text-headline-md text-primary text-[20px] group-hover:text-primary-container transition-colors">
                GravaPro
              </h5>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Domine a criação de vídeos
              </p>
            </div>
            <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors relative z-10" data-icon="chevron_right">
              chevron_right
            </span>
          </a>
          <a
            className="group relative bg-surface-container-low/40 backdrop-blur-xl border border-white/5 hover:border-primary-container/50 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 overflow-hidden"
            href="https://ju-ai2026.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shadow-inner relative z-10 group-hover:neon-border transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="smart_toy">
                smart_toy
              </span>
            </div>
            <div className="relative z-10 flex-grow">
              <h5 className="font-headline-md text-headline-md text-primary text-[20px] group-hover:text-primary-container transition-colors">
                Ju AI
              </h5>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Sua assistente inteligente
              </p>
            </div>
            <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors relative z-10" data-icon="chevron_right">
              chevron_right
            </span>
          </a>
        </div>

        {/* Newsletter Capture */}
        <div className="bg-surface-container-high border border-white/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
          <span
            className="material-symbols-outlined text-primary-container text-4xl mb-4 block"
            data-icon="bolt"
          >
            bolt
          </span>
          <h4 className="font-headline-lg text-headline-lg text-primary mb-2 uppercase">
            Acesse a <span className="text-primary-container">Rede Neural</span>
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Receba atualizações criptografadas sobre as últimas táticas de mercado antes que se tornem padrão.
          </p>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                className="w-full bg-background border border-white/10 rounded-full px-6 py-3 text-primary font-label-md placeholder-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container uppercase tracking-widest text-sm"
                placeholder="ENDEREÇO DE EMAIL"
                type="text"
                autoComplete="off"
                data-gramm="false"
                data-1p-ignore="true"
                data-lpignore="true"
                spellCheck="false"
              />
            </div>
            <button
              className="w-full bg-primary-container text-on-primary-container font-label-md text-sm py-3 rounded-full hover:brightness-110 uppercase tracking-widest font-bold"
              type="button"
            >
              Ingressar
            </button>
          </form>
        </div>
      </aside>
    </main>
  );
}
