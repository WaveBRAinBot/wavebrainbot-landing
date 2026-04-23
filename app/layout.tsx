import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import CursorGlow from "@/components/CursorGlow";
import Analytics from "@/components/Analytics";
import { structuredData } from "./structured-data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WaveBRAinBot — Agência de Performance com IA",
  description:
    "Construímos infraestrutura de IA para o seu negócio. Agentes 24/7 no WhatsApp, tráfego pago e automações que captam, qualificam e convertem — enquanto você foca no que importa.",
  keywords: [
    "agência de performance IA",
    "agente de IA WhatsApp",
    "automação de atendimento",
    "inteligência artificial",
    "performance digital",
    "qualificação de leads",
    "tráfego pago com IA",
    "automação WhatsApp",
    "infraestrutura IA",
  ],
  openGraph: {
    title: "WaveBRAinBot — Agência de Performance com IA",
    description:
      "Infraestrutura de IA para performance: agentes 24/7, tráfego pago e automações que escalam resultado.",
    type: "website",
    locale: "pt_BR",
    url: "https://wavebrainbot.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveBRAinBot — Agência de Performance com IA",
    description: "Infraestrutura de IA para performance: agentes 24/7, tráfego pago e automações que escalam resultado.",
  },
  metadataBase: new URL("https://wavebrainbot.com.br"),
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* static — XSS safe */}
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