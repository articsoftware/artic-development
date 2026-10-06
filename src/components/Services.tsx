import { m } from "framer-motion";
import { MotionLink, useUiMotion } from "./Motion";
import { serviceLayers, services } from "../data";
import { serviceIcons, ArrowIcon, CheckIcon } from "./Icons";
import type { Service, ServiceLayer } from "../types";

type Select = (value: string) => void;

function LayerHead({ layer }: { layer: ServiceLayer }) {
  return (
    <div className="layer-head">
      <span className="layer-index" aria-hidden="true">{layer.index}</span>
      <div>
        <p className="layer-label">{layer.label}</p>
        <h3 id={"layer-" + layer.id}>{layer.title}</h3>
      </div>
      <p className="layer-desc">{layer.desc}</p>
    </div>
  );
}

function ServiceCta({ service, onSelect }: { service: Service; onSelect: Select }) {
  return (
    <MotionLink id={"service-cta-" + service.id} href="#contato" className="text-link service-cta"
      aria-describedby={"service-title-" + service.id} onClick={() => onSelect(service.formLabel)}>
      Conversar sobre este serviço <ArrowIcon />
    </MotionLink>
  );
}

export default function Services({ onSelectService }: { onSelectService: Select }) {
  const { reduced, transition } = useUiMotion();
  const [surface, depth] = serviceLayers;
  const enter = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { ...transition(0.45), delay: reduced ? 0 : index * 0.07 },
  });

  return (
    <section id="servicos" className="services" aria-labelledby="services-title">
      <div className="services-surface">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">O que construímos</p>
              <h2 id="services-title">Da superfície <em>à estrutura</em>.</h2>
            </div>
            <p className="section-intro">Parte do software aparece na tela. A outra parte mantém tudo funcionando. A Artic cuida das duas.</p>
          </header>

          <LayerHead layer={surface} />
          <div className="surface-grid">
            {services.filter(service => service.layer === "surface").map((service, index) => (
              <m.article key={service.id} className="service-panel" aria-labelledby={"service-title-" + service.id} {...enter(index)}>
                <div className="service-panel-top">
                  <span className="service-icon" aria-hidden="true">{serviceIcons[service.id]}</span>
                  <ul className="service-tags" aria-label="Tecnologias">{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                </div>
                <h4 id={"service-title-" + service.id}>{service.title}</h4>
                <p className="service-summary">{service.summary}</p>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-examples" aria-label="Exemplos">
                  {service.examples.map(example => <li key={example}><CheckIcon />{example}</li>)}
                </ul>
                <ServiceCta service={service} onSelect={onSelectService} />
              </m.article>
            ))}
          </div>
        </div>
      </div>

      <div className="services-depth">
        <div className="container">
          <LayerHead layer={depth} />
          <ol className="depth-list">
            {services.filter(service => service.layer === "depth").map((service, index) => (
              <m.li key={service.id} className="depth-row" {...enter(index)}>
                <span className="service-icon" aria-hidden="true">{serviceIcons[service.id]}</span>
                <div className="depth-title">
                  <h4 id={"service-title-" + service.id}>{service.title}</h4>
                  <p className="service-summary">{service.summary}</p>
                </div>
                <div className="depth-body">
                  <p className="service-desc">{service.desc}</p>
                  <ul className="service-examples" aria-label="Exemplos">
                    {service.examples.map(example => <li key={example}><CheckIcon />{example}</li>)}
                  </ul>
                  <ul className="service-tags" aria-label="Tecnologias">{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                </div>
                <ServiceCta service={service} onSelect={onSelectService} />
              </m.li>
            ))}
          </ol>
          <div className="services-invite">
            <p>Não sabe em qual camada está o seu problema?</p>
            <MotionLink href="#contato" className="text-link">Vamos descobrir juntos <ArrowIcon /></MotionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
