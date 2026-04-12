export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WaveBRAinBot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Agente de IA para WhatsApp que automatiza atendimento, qualifica leads e converte clientes 24/7.",
  offers: [
    {
      "@type": "Offer",
      name: "Essencial",
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
      name: "Performance",
      price: "1499",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Automation",
      price: "2499",
      priceCurrency: "BRL",
    },
  ],
  creator: {
    "@type": "Person",
    name: "Mateus Brasileiro Federighi",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "wavebrainbot@gmail.com",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://instagram.com/wavebrainbot"],
};
