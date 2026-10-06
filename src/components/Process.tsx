import { steps } from "../data";
import { m } from "framer-motion";
import { useUiMotion } from "./Motion";

export default function Process() {
  const { reduced, transition } = useUiMotion();
  const enter = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { ...transition(0.45), delay: reduced ? 0 : index * 0.08 },
  });

  return (
    <section id="processo" className="section process" aria-labelledby="process-title">
      <div className="container process-layout">
        <div className="process-sticky">
          <span className="section-badge">COMO TRABALHAMOS</span>
          <h2 id="process-title">Um caminho claro,<br />do primeiro oi <em>à entrega</em>.</h2>
          <p className="process-intro">
            Você acompanha as decisões, vê a ideia ganhar forma e sabe o que esperar em cada etapa do projeto.
          </p>
        </div>

        <div className="process-timeline-wrap">
          <ol className="steps process-timeline">
            {steps.map(({ num, title, desc, deliverable }, index) => (
              <m.li key={num} className="timeline-step" {...enter(index)}>
                <div className="timeline-marker-col" aria-hidden="true">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-num" aria-hidden="true">{num}</span>
                  <h3>{title}</h3>
                  <p className="step-desc">{desc}</p>
                  <div className="step-deliverable">
                    <span className="deliverable-label">Você recebe:</span>
                    <span className="deliverable-val">{deliverable}</span>
                  </div>
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
