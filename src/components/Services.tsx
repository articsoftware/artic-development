import { useState } from "react";
import { services } from "../data";
import { serviceIcons, ArrowIcon } from "./Icons";

export default function Services() {
  const [active, setActive] = useState<string | null>(services[0].id);
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <div className="section-heading"><p className="section-label">Expertise</p><div><h2>O que o seu negócio<br />precisa para ir além?</h2><p>Uma presença digital melhor. Um sistema que acompanha o crescimento. Menos trabalho manual. Vamos construir a solução certa.</p></div></div>
        <div className="service-list">
          {services.map(({ id, title, desc, tags }) => (
            <article key={id} className={active === id ? "service-row is-open" : "service-row"}>
              <h3><button id={"service-trigger-" + id} aria-expanded={active === id} aria-controls={"service-panel-" + id} onClick={() => setActive(active === id ? null : id)}><span className="service-icon">{serviceIcons[id]}</span><span>{title}</span><span className="service-toggle" aria-hidden="true">{active === id ? "−" : "+"}</span></button></h3>
              <div id={"service-panel-" + id} role="region" aria-labelledby={"service-trigger-" + id} hidden={active !== id}>
                <div className="service-detail"><p>{desc}</p><div><ul className="service-tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a className="text-link" href="#contato">Conversar sobre o projeto <ArrowIcon /></a></div></div>
              </div>
            </article>
          ))}
        </div>
        <p className="service-footnote">Ainda não sabe por onde começar? <a href="#contato">A primeira conversa é por nossa conta.</a></p>
      </div>
    </section>
  );
}
