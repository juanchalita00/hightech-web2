import { installNote, installTimes, waitingCopy } from "@/lib/public-facts";

export function InstallTimes() {
  return (
    <section className="section section-alt" id="tiempos">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Antes y después de instalar</p>
            <h2>Cuánto tarda y dónde esperas.</h2>
          </div>
          <p>{waitingCopy}</p>
        </div>
        <div className="table-scroll">
        <table className="install-times">
          <caption className="sr-only">Tiempos de instalación automotriz</caption>
          <thead>
            <tr><th>Trabajo</th><th>Tiempo</th></tr>
          </thead>
          <tbody>
            {installTimes.map((row) => (
              <tr key={row.job}><td>{row.job}</td><td>{row.time}</td></tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="install-times-note">{installNote} Los primeros días pueden verse burbujas de agua; se van solas. No bajes los vidrios en 48 horas.</p>
      </div>
    </section>
  );
}
