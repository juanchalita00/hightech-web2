const layers = [
  { name: "Vidrio", note: "El cristal que ya está instalado." },
  { name: "Adhesivo", note: "Une la película al vidrio por dentro." },
  { name: "PET conductor", note: "Lleva la corriente hasta el cristal líquido." },
  { name: "PDLC", note: "El cristal líquido que se ordena o se dispersa." },
  { name: "PET conductor", note: "Cierra la película por la cara interior." },
] as const;

export function PdlcLayers() {
  return (
    <ol className="pdlc-layers" aria-label="Capas de la película inteligente, del vidrio hacia el interior">
      {layers.map((layer, index) => (
        <li key={`${layer.name}-${index}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{layer.name}</strong>
          <p>{layer.note}</p>
        </li>
      ))}
    </ol>
  );
}
