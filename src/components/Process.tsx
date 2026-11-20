import { steps } from "../data";
import { m } from "framer-motion";
import { LayersIcon } from "./Icons";
import { useUiMotion } from "./Motion";

export default function Process() {
  const { reduced, transition } = useUiMotion();
  const enter = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { ...transition(0.48), delay: reduced ? 0 : index * 0.06 },
  });

  return (
    <section id="processo" className="section process" aria-labelledby="process-title">
      <div className="container process-shell">
        <div className="process-layout">
          <div className="process-sticky">
            <div className="pill-badge pill-badge-light">
              <LayersIcon size={12} />
              <span>MÉTODO DE ENTREGA</span>
            </div>

            <h2 id="process-title">
              Um caminho claro,
              <br />
              do primeiro oi <em>à entrega</em>.
            </h2>

            <p className="process-intro">
              Você acompanha cada decisão técnica, valida o avanço em entregas reais e sabe exatamente o que esperar em cada etapa.
            </p>

            <div className="process-index-bar" aria-hidden="true">
              <span>01</span>
              <i />
              <span>05 ETAPAS</span>
            </div>
          </div>

          <div className="process-timeline-wrap">
            <ol className="steps process-timeline">
              {steps.map(({ num, title, desc, deliverable }, index) => (
                <m.li key={num} className="timeline-card" {...enter(index)}>
                  <div className="timeline-card-head">
                    <span className="timeline-num" aria-hidden="true">{num}</span>
                    <span className="timeline-phase">ETAPA {num}</span>
                  </div>
                  <h3>{title}</h3>
                  <p className="step-desc">{desc}</p>
                  <div className="step-deliverable">
                    <span className="deliverable-label">Você recebe</span>
                    <span className="deliverable-val">{deliverable}</span>
                  </div>
                </m.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
