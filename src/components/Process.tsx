import { steps } from "../data";
import { m } from "framer-motion";
import { useUiMotion } from "./Motion";

export default function Process() {
  const { reduced, transition } = useUiMotion();
  return (
    <section id="processo" className="section process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">Do primeiro oi à entrega</p><h2 id="process-title">Um caminho claro.<br />Construído com você.</h2></div>
          <p>Você acompanha as decisões, vê a ideia ganhar forma e sabe o que esperar de cada etapa.</p>
        </div>
        <ol className="process-steps">{steps.map(({ num, title, desc, deliverable }, index) => (
          <li key={num}>
            <m.span className="step-line" aria-hidden="true" initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ ...transition(0.4), delay: reduced ? 0 : index * 0.06 }} />
            <span className="step-number" aria-hidden="true">{num}</span><h3>{title}</h3><p>{desc}</p><div className="step-deliverable"><span>O resultado</span><p>{deliverable}</p></div>
          </li>
        ))}</ol>
      </div>
    </section>
  );
}
