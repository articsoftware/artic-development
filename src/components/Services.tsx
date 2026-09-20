import { useState } from "react";
import { services } from "../data";
import { serviceIcons, ArrowIcon, CheckIcon } from "./Icons";

interface ServicesProps {
  onSelectService: (value: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [active, setActive] = useState<string | null>(services[0].id);

  return (
    <section id="servicos" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">O que construímos</p>
          <div>
            <h2 id="services-title">Do seu desafio<br />à solução certa.</h2>
            <p>Uma presença digital melhor. Uma operação mais simples. Escolha por onde você quer começar.</p>
          </div>
        </div>
        <div className="service-list">
          {services.map(({ id, title, summary, desc, tags, examples, formLabel }) => (
            <article key={id} className={active === id ? "service-row is-open" : "service-row"}>
              <h3>
                <button
                  id={"service-trigger-" + id}
                  aria-expanded={active === id}
                  aria-controls={"service-panel-" + id}
                  onClick={() => setActive(active === id ? null : id)}
                >
                  <span className="service-icon" aria-hidden="true">{serviceIcons[id]}</span>
                  <span className="service-name">{title}</span>
                  <span className="service-summary">{summary}</span>
                  <span className="service-toggle" aria-hidden="true">{active === id ? "−" : "+"}</span>
                </button>
              </h3>
              <div id={"service-panel-" + id} role="region" aria-labelledby={"service-trigger-" + id} hidden={active !== id}>
                <div className="service-detail">
                  <div className="service-description">
                    <p>{desc}</p>
                    <ul className="service-tags" aria-label="Tecnologias utilizadas">
                      {tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  <div className="service-deliverables">
                    <h4>O que podemos construir</h4>
                    <ul>{examples.map(example => <li key={example}><span aria-hidden="true"><CheckIcon /></span>{example}</li>)}</ul>
                    <a className="text-link" href="#contato" onClick={() => onSelectService(formLabel)}>
                      Conversar sobre este serviço <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="service-footnote">Ainda não sabe por onde começar? <a href="#contato">A primeira conversa é por nossa conta.</a></p>
      </div>
    </section>
  );
}
