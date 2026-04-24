import { BASE_URL } from "@/lib/constants";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "WaveBRAinBot",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.webp`,
      },
      description:
        "Agência de performance com IA: agentes 24/7 no WhatsApp que automatizam atendimento, qualificam leads e agendam reuniões em menos de 3 segundos.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "wavebrainbot@gmail.com",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
      sameAs: ["https://instagram.com/wavebrainbot"],
      founder: {
        "@type": "Person",
        name: "Mateus Brasileiro Federighi",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "WaveBRAinBot",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      name: "Agente de IA para WhatsApp",
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Automação de Atendimento com Inteligência Artificial",
      description:
        "Construímos agentes de IA 24/7 no WhatsApp que atendem, qualificam e convertem leads automaticamente para clínicas, imobiliárias, escritórios jurídicos e outros negócios.",
      areaServed: { "@type": "Country", name: "Brazil" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planos WaveBRAinBot",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Plano Essencial",
            price: "799",
            priceCurrency: "BRL",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "799",
              priceCurrency: "BRL",
              unitText: "MONTH",
            },
          },
          {
            "@type": "Offer",
            name: "Plano Performance",
            price: "1499",
            priceCurrency: "BRL",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1499",
              priceCurrency: "BRL",
              unitText: "MONTH",
            },
          },
          {
            "@type": "Offer",
            name: "Plano Automation",
            price: "2499",
            priceCurrency: "BRL",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "2499",
              priceCurrency: "BRL",
              unitText: "MONTH",
            },
          },
        ],
      },
    },
  ],
};
