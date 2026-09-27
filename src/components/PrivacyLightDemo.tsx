export function PrivacyLightDemo() {
  return <div className="privacy-light-demo" aria-label="Diagrama conceptual de contraste de luz">
    <div className="privacy-scene privacy-day"><span>Exterior más luminoso</span><div className="privacy-window"><i /></div><strong>Privacidad diurna más marcada</strong></div>
    <div className="privacy-arrow" aria-hidden="true">↔</div>
    <div className="privacy-scene privacy-night"><span>Interior más luminoso</span><div className="privacy-window"><i /></div><strong>El efecto puede invertirse de noche</strong></div>
  </div>;
}
