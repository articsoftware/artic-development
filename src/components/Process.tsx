import { steps } from "../data";

export default function Process() {
  return (
    <section id="processo" className="section process-section" aria-labelledby="process-title">
      <div className="container process-grid">
        <div className="process-intro">
          <p className="section-label">Como acontece</p>
          <div className="process-heading">
            <h2 id="process-title">Você acompanha.<br />A ideia avança.</h2>
            <div>
              <p>Em cada etapa, uma conversa clara sobre o que foi feito e o que vem depois.</p>
              <a href="#contato" className="text-link">Vamos dar o primeiro passo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <ol className="process-steps">
          {steps.map(({ num, title, desc, deliverable }) => (
            <li key={num}>
              <span className="step-number" aria-hidden="true">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p className="step-deliverable"><span>Você recebe:</span> {deliverable}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
