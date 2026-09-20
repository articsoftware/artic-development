import { useState } from "react";
import { services } from "../data";
import { serviceIcons, ArrowIcon, CheckIcon } from "./Icons";

export default function Services({ onSelectService }: { onSelectService: (value: string) => void }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="servicos" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-label">O que fazemos</p><h2 id="services-title">Seu desafio.<br />Nossa próxima construção.</h2></div>
          <p>Da presença digital aos bastidores da operação, criamos a tecnologia que aproxima você do próximo passo.</p>
        </div>
        <div className="services-grid">
          {services.map(({ id, title, summary, desc, examples, tags, formLabel }, index) => (
            <article key={id} className={"solution-card" + (index === 0 ? " solution-featured" : "") + (active === id ? " is-open" : "")}>
              <div className="solution-top"><span className="service-icon" aria-hidden="true">{serviceIcons[id]}</span><span className="solution-summary">{summary}</span></div>
              <h3 id={"service-title-" + id}>{title}</h3>
              <p className="solution-description">{desc}</p>
              <ul className="service-tags" aria-label="Tecnologias">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <button className="solution-expand" id={"service-trigger-" + id} aria-expanded={active === id} aria-controls={"service-panel-" + id} onClick={() => setActive(active === id ? null : id)}>
                Ver possibilidades <span aria-hidden="true">{active === id ? "−" : "+"}</span>
              </button>
              <div className="solution-detail" id={"service-panel-" + id} role="region" aria-labelledby={"service-title-" + id} hidden={active !== id}>
                <ul>{examples.map(example => <li key={example}><span aria-hidden="true"><CheckIcon /></span>{example}</li>)}</ul>
                <a href="#contato" className="text-link" onClick={() => onSelectService(formLabel)}>Conversar sobre este serviço <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="services-invite"><p>Não sabe qual solução faz mais sentido?</p><a href="#contato" className="text-link">Vamos descobrir juntos <ArrowIcon /></a></div>
      </div>
    </section>
  );
}
