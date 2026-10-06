const tickerItems = [
  "SITES & SISTEMAS WEB",
  "APPS MOBILE",
  "APIS & BACK-END",
  "AUTOMAÇÕES & INTEGRAÇÕES",
  "OTIMIZAÇÃO DE PROCESSOS",
  "CURITIBA, PR",
  "SOFTWARE SOB MEDIDA",
  "DO PRIMEIRO OI À ENTREGA",
];

export default function Marquee() {
  return (
    <div className="ticker-strip" role="presentation" aria-hidden="true">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <span key={"track-1-" + index} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <span key={"track-2-" + index} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
