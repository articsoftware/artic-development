import { steps } from "../data";

export default function Process() {
  return (
    <section id="processo" className="section process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">Do primeiro oi à entrega</p><h2 id="process-title">Um caminho claro.<br />Construído com você.</h2></div>
          <p>Você acompanha as decisões, vê a ideia ganhar forma e sabe o que esperar de cada etapa.</p>
        </div>
        <ol className="process-steps">{steps.map(({ num, title, desc, deliverable }) => (
          <li key={num}><span className="step-number" aria-hidden="true">{num}</span><h3>{title}</h3><p>{desc}</p><div className="step-deliverable"><span>O resultado</span><p>{deliverable}</p></div></li>
        ))}</ol>
      </div>
    </section>
  );
}
