import { steps } from "../data";

export default function Process() {
  return (
    <section id="processo" className="section process" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2 id="process-title">Um caminho claro, do primeiro oi à entrega.</h2>
          </div>
          <p className="section-intro">Você acompanha as decisões, vê a ideia ganhar forma e sabe o que esperar de cada etapa.</p>
        </header>
        <div className="steps-head" aria-hidden="true"><span>Etapa</span><span>O que acontece</span><span>O que você recebe</span></div>
        <ol className="steps">{steps.map(({ num, title, desc, deliverable }) => (
          <li key={num} className="step">
            <span className="step-num" aria-hidden="true">{num}</span>
            <h3>{title}</h3>
            <p className="step-desc">{desc}</p>
            <p className="step-result"><span>Você recebe</span>{deliverable}</p>
          </li>
        ))}</ol>
      </div>
    </section>
  );
}
