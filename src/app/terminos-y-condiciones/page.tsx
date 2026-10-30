import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terminos-y-condiciones/" },
  title: { absolute: "Términos y Condiciones | High Tech Polarizados" },
  description: "Términos y Condiciones de High Tech Polarizados en Zapopan: pago, medidas, fecha de instalación, curado y garantía de la película.",
};

const SECCIONES: { t: string; p: string[] }[] = [
  {
    "t": "1. Aceptación",
    "p": [
      "Al aceptar una cotización de High Tech Polarizados, el cliente acepta estos Términos y Condiciones."
    ]
  },
  {
    "t": "2. Pago",
    "p": [
      "30% de anticipo para agendar el trabajo y 70% restante al terminar la instalación.",
      "Aceptamos pago con tarjeta y Mercado Pago."
    ]
  },
  {
    "t": "3. Medidas",
    "p": [
      "Las medidas de la cotización son estimadas y se confirman en sitio. Si la diferencia con la superficie real es de hasta el 10% del trabajo (con un tope de $2,500 + IVA), no se hace ningún ajuste. Si la diferencia es mayor, se ajusta la diferencia completa, hacia arriba o hacia abajo. Cualquier ajuste se avisa antes de iniciar."
    ]
  },
  {
    "t": "4. Fecha de instalación",
    "p": [
      "La fecha de instalación es una cita estimada. Si High Tech Polarizados necesita moverla, te avisará con al menos 24 horas de anticipación y te ofrecerá una nueva fecha o la devolución de tu anticipo."
    ]
  },
  {
    "t": "5. Causas de fuerza mayor",
    "p": [
      "La lluvia, el polvo o el viento, la falta de película con el proveedor, o que el lugar no esté listo para trabajar no se consideran incumplimiento. En esos casos reprogramamos la instalación."
    ]
  },
  {
    "t": "6. Curado de la película",
    "p": [
      "Después de instalar es normal ver neblina o pequeñas burbujas mientras la película cura. En vehículos, no bajes las ventanas durante 48 horas. Las burbujas de curado desaparecen solas en 15 a 30 días."
    ]
  },
  {
    "t": "7. Garantía",
    "p": [
      "La garantía que aplica a tu trabajo se indica en tu cotización:",
      "Nanocerámica: 10 años en el material y 10 años en la instalación.",
      "Plata Reflecta: 5 o 10 años, según la línea.",
      "Película de seguridad: 5 o 10 años, según la película.",
      "Esmerilado y cualquier película instalada por el exterior del vidrio: 1 año.",
      "Otras películas: la garantía indicada en la cotización.",
      "Los defectos visibles (rayones, basura o burbujas que sigan después del curado) deben reportarse dentro de los 15 días siguientes a la instalación.",
      "La garantía no cubre golpes, rayones posteriores a la instalación, daños por limpiadores con amoniaco ni choque térmico del vidrio."
    ]
  }
];

export default function Page() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px" }}>
      <h1>Términos y Condiciones</h1>
      <p>High Tech Polarizados · Zapopan, Jalisco</p>
      {SECCIONES.map((s) => (
        <section key={s.t}>
          <h2>{s.t}</h2>
          {s.p.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </main>
  );
}
