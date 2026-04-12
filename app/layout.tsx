import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import CursorGlow from "@/components/CursorGlow";
import Analytics from "@/components/Analytics";
import { structuredData } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaveBRAinBot — Agente de IA para WhatsApp",
  description:
    "Automatize seu atendimento no WhatsApp com inteligência artificial. Capture leads, qualifique clientes e venda 24/7 sem depender de equipe.",
  keywords: [
    "agente de IA",
    "WhatsApp",
    "automação",
    "atendimento",
    "chatbot",
    "inteligência artificial",
    "CRM",
    "leads",
  ],
  openGraph: {
    title: "WaveBRAinBot — Agente de IA para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com inteligência artificial. Capture leads, qualifique clientes e venda 24/7.",
    type: "website",
    locale: "pt_BR",
    url: "https://wavebrainbot.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveBRAinBot — Agente de IA para WhatsApp",
    description: "Automatize seu atendimento no WhatsApp com IA.",
  },
  metadataBase: new URL("https://wavebrainbot.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
        <CursorGlow />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
