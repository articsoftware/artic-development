import { useState } from "react";
import { Disclosure, DisclosureIcon, MotionLink, useUiMotion } from "./Motion";
import { services } from "../data";
import { serviceIcons, ArrowIcon, CheckIcon } from "./Icons";
import { m } from "framer-motion";

export default function Services({ onSelectService }: { onSelectService: (value: string) => void }) {
  const [active, setActive] = useState<string | null>(null);
  const { reduced, transition } = useUiMotion();

  return (
    <section id="servicos" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">O que fazemos</p><h2 id="services-title">Seu desafio.<br />Nossa próxima construção.</h2></div>
          <p>Da presença digital aos bastidores da operação, criamos a tecnologia que aproxima você do próximo passo.</p>
        </div>
        <div className="services-grid">
          {services.map(({ id, title, summary, desc, examples, tags, formLabel }, index) => (
            <m.article key={id} className={"solution-card" + (index === 0 ? " solution-featured" : "") + (active === id ? " is-open" : "")}
              initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...transition(0.4), delay: reduced ? 0 : index * 0.08 }}>
              <div className="solution-top"><span className="service-icon" aria-hidden="true">{serviceIcons[id]}</span><span className="solution-summary">{summary}</span></div>
              <h3 id={"service-title-" + id}>{title}</h3>
              <p className="solution-description">{desc}</p>
              <ul className="service-tags" aria-label="Tecnologias">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <button className="solution-expand" id={"service-trigger-" + id} aria-expanded={active === id} aria-controls={"service-panel-" + id} onClick={() => setActive(active === id ? null : id)}>
                {active === id ? "Fechar possibilidades" : "Ver possibilidades"}
                <DisclosureIcon open={active === id} />
              </button>
              <Disclosure open={active === id} id={"service-panel-" + id} labelledBy={"service-title-" + id}>
              <div className="solution-detail">
                <ul>{examples.map(example => <li key={example}><span aria-hidden="true"><CheckIcon /></span>{example}</li>)}</ul>
                <MotionLink href="#contato" className="text-link" onClick={() => onSelectService(formLabel)}>Conversar sobre este serviço <ArrowIcon /></MotionLink>
              </div>
              </Disclosure>
            </m.article>
          ))}
        </div>
        <div className="services-invite"><p>Não sabe qual solução faz mais sentido?</p><MotionLink href="#contato" className="text-link">Vamos descobrir juntos <ArrowIcon /></MotionLink></div>
      </div>
    </section>
  );
}
