import { steps } from "../data";

export default function Process() {
  return (
    <section id="processo" className="section process-section">
      <div className="container process-grid">
        <div className="process-intro"><p className="section-label">Como acontece</p><h2>Um caminho claro.<br />Do início<br /> ao próximo nível.</h2><p>Você sabe o que está acontecendo, o que vem depois e quando esperar cada entrega.</p><div className="process-mark" aria-hidden="true"><span /><span /><span /></div></div>
        <ol className="process-steps">{steps.map(({ num, title, desc }) => <li key={num}><span className="step-number">{num}</span><div><h3>{title}</h3><p>{desc}</p></div></li>)}</ol>
      </div>
    </section>
  );
}
