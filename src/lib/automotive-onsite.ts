export const automotiveOnSiteQuestion = "¿Instalan polarizado automotriz a domicilio?";

export const automotiveOnSiteAnswer =
  "Sí, en algunos casos podemos instalar a domicilio, como flotillas, maquinaria o autos nuevos de agencia. Cada servicio lo revisa primero nuestro equipo para confirmar que se pueda hacer con la calidad de siempre.";

export const automotiveOnSiteSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es-MX",
  mainEntity: [
    {
      "@type": "Question",
      name: automotiveOnSiteQuestion,
      acceptedAnswer: { "@type": "Answer", text: automotiveOnSiteAnswer },
    },
  ],
};
