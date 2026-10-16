export const automotiveOnSiteQuestion = "¿Instalan polarizado automotriz a domicilio?";

export const automotiveOnSiteAnswer =
  "En taller con cita. A domicilio solo flotillas o autos de agencia.";

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
