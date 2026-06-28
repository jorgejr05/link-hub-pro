import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { blogPosts } from "../data/posts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function BlogPost() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 text-center">
        <h1 className="text-3xl text-primary mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-primary-container hover:underline">
          Voltar para o Blog
        </Link>
      </main>
    );
  }

  const whatsappMsg = encodeURIComponent(`Olá, Jorge! Gostaria de agendar um diagnóstico de IA para minha empresa. Vim pelo artigo: ${post.title}`);
  const whatsappUrl = `https://wa.me/5518988183746?text=${whatsappMsg}`;

  return (
    <main className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-32 pb-16 md:pb-24">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date,
          }),
        }}
      />

      {/* Botão Voltar */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link to="/blog" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-xs md:text-sm mb-8 md:mb-12">
          <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
          Voltar para o Blog
        </Link>
      </motion.div>

      {/* Header do Artigo */}
      <motion.header initial="hidden" animate="show" variants={fadeInUp} className="mb-12 md:mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 font-label-caps text-[10px] text-primary-container uppercase tracking-widest">
            {post.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container border border-white/5 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
            {post.readTime} DE LEITURA
          </span>
        </div>
        <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
          <img
            alt="Jorge Jr. Avatar"
            className="w-12 h-12 rounded-full border border-primary-container p-0.5 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUTtkGiVNn7Cytbd39f768CKk3IHcwfaNSTs4Xx_oycaQaQVClcvrVJtQi8rJMAoEfkxIxwb0MKIMpRGXbIXiaPaF1ikrgM252CmgnmZ0TMOkg8vW9NV1j1yQCTicvzNPevZyCDexlbufUpCb9eiySpFhEuqLmvyD9BQnmzI_ySlO5cDq9ms1Rbm0JBEDoyIkNamRjkQXg_g3vP5mktTOZrCO50bMcHi1oiWddDydWTGr_Mw2Uls7cR5YGGO5O3FsDBu7v-x8VrUw"
          />
          <div>
            <p className="font-headline-md text-primary text-sm">{post.author}</p>
            <p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">{post.date}</p>
          </div>
        </div>
      </motion.header>

      {/* Conteúdo do Artigo */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg max-w-none mb-16"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA Final do Artigo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-16"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-container neon-glow" />
        <h3 className="font-headline-lg text-2xl md:text-3xl text-primary mb-4">
          Pronto para automatizar sua operação?
        </h3>
        <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Faça como as empresas da região. Agende um diagnóstico gratuito e descubra onde a IA pode cortar custos e gerar lucro imediato no seu negócio.
        </p>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm md:text-base font-bold uppercase tracking-widest hover:neon-glow transition-all"
        >
          <span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
          Agendar Diagnóstico
        </a>
      </motion.div>

      {/* Roteiros para Redes Sociais (Só visível no código/admin, mas vou deixar renderizado para você copiar) */}
      <motion.div className="bg-surface-container/50 border border-white/5 rounded-2xl p-8">
        <h4 className="font-headline-md text-primary text-xl mb-6 border-b border-white/10 pb-4">
          Conteúdo Gerado para Redes Sociais (Copie e Cole)
        </h4>
        
        <div className="mb-6">
          <h5 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-2">Instagram (Caption)</h5>
          <div className="bg-background/50 p-4 rounded-lg font-mono text-sm text-on-surface-variant whitespace-pre-wrap">
            {post.social.instagram}
          </div>
        </div>
        
        <div className="mb-6">
          <h5 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-2">LinkedIn (Artigo Curto)</h5>
          <div className="bg-background/50 p-4 rounded-lg font-mono text-sm text-on-surface-variant whitespace-pre-wrap">
            {post.social.linkedin}
          </div>
        </div>

        <div>
          <h5 className="font-label-caps text-[11px] text-primary-container uppercase tracking-widest mb-2">TikTok (Roteiro)</h5>
          <div className="bg-background/50 p-4 rounded-lg font-mono text-sm text-on-surface-variant whitespace-pre-wrap">
            {post.social.tiktok}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
