const steps = [
  ["01", "Entendemos el objetivo", "Calor, UV, privacidad, deslumbramiento, seguridad o apariencia."],
  ["02", "Revisamos el cristal", "Aplicación, iluminación, medidas y condiciones que pueden cambiar la recomendación."],
  ["03", "Elegimos la solución", "Tecnología y tono con especificaciones y limitaciones explicadas con claridad."],
  ["04", "Cotizamos el alcance", "Recibes una propuesta según tu proyecto o vehículo, no una tarifa genérica fuera de contexto."],
] as const;

export function ProcessSteps() {
  return (
    <div className="process-grid">
      {steps.map(([number, title, text]) => (
        <article className="process-step" key={number}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
