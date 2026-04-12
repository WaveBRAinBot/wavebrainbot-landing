import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog — WaveBRAinBot",
  description:
    "Insights sobre IA aplicada ao WhatsApp, velocidade de atendimento e conversão de leads para negócios brasileiros.",
};

const posts = [
  {
    slug: "por-que-responder-rapido",
    title: "Por que responder rápido vale mais do que qualquer script de vendas",
    excerpt:
      "A ciência prova: 78% dos clientes compram do primeiro que responde. Veja os dados que mudam completamente a visão sobre atendimento.",
    date: "12 Abr 2026",
    readTime: "5 min",
    tag: "Speed-to-Lead",
    tagColor: "var(--brand-green)",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-green)" }}>
            Blog
          </p>
          <h1 className="text-4xl font-black text-white mb-3">
            IA, Atendimento e Conversão
          </h1>
          <p className="text-white/50">
            Insights baseados em dados reais — sem hype, sem promessas vazias.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block gradient-border rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${post.tagColor}15`, color: post.tagColor }}
                    >
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1 text-white/30 text-xs">
                      <Clock size={11} />
                      {post.readTime}
                    </div>
                    <span className="text-white/30 text-xs">{post.date}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-white/30 group-hover:text-white/70 flex-shrink-0 mt-1 transition-colors group-hover:translate-x-1 duration-200"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
