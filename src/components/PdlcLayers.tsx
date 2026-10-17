const layers = [
  { name: "Vidrio", note: "El que ya está." },
  { name: "Adhesivo", note: "La pega por dentro." },
  { name: "PET", note: "Lleva la corriente." },
  { name: "PDLC", note: "De opaco a transparente." },
  { name: "PET", note: "Cierra la película." },
] as const;

export function PdlcLayers() {
  return (
    <ol className="pdlc-layers" aria-label="Capas, del vidrio hacia el interior">
      {layers.map((layer, index) => (
        <li key={`${layer.name}-${index}`}>
          <strong>{layer.name}</strong>
          <span>{layer.note}</span>
        </li>
      ))}
    </ol>
  );
}
