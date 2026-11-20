import { m } from "framer-motion";
import { MotionLink, useUiMotion } from "./Motion";
import { serviceLayers, services, stackTiles } from "../data";
import { serviceIcons, ArrowIcon, CheckIcon, LayersIcon, SparkIcon } from "./Icons";
import iceTexture from "../assets/obsidian-ice-texture.webp";
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
    <MotionLink
      id={"service-cta-" + service.id}
      href="#contato"
      className="bento-cta"
      aria-describedby={"service-title-" + service.id}
      onClick={() => onSelect(service.formLabel)}
    >
      <span>Conversar sobre este serviço</span>
      <ArrowIcon />
    </MotionLink>
  );
}

function ServiceVisual({ id }: { id: string }) {
  if (id === "web") {
    return (
      <div className="bento-visual bento-visual-web" aria-hidden="true">
        <div className="mini-window">
          <div className="mini-window-bar">
            <span /><span /><span />
            <div className="mini-url">app.cliente.com.br</div>
          </div>
          <div className="mini-window-grid">
            <div className="mini-stat">
              <small>Performance</small>
              <strong>Rápido &amp; Limpo</strong>
              <div className="mini-bars">
                <i style={{ height: "42%" }} />
                <i style={{ height: "64%" }} />
                <i style={{ height: "54%" }} />
                <i style={{ height: "82%" }} />
                <i style={{ height: "100%" }} className="is-peak" />
              </div>
            </div>
            <div className="mini-stack-list">
              <div><em /><span>Landing &amp; Institucional</span></div>
              <div><em /><span>Painéis &amp; Portais</span></div>
              <div><em /><span>Produtos Digitais</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "mobile") {
    return (
      <div className="bento-visual bento-visual-mobile" aria-hidden="true">
        <div className="mini-phone">
          <div className="mini-phone-notch" />
          <div className="mini-phone-header">
            <span className="mini-pill">iOS &amp; Android</span>
            <strong>Experiência nativa</strong>
          </div>
          <div className="mini-phone-cards">
            <div className="mini-phone-card is-accent">
              <span>Autoatendimento</span>
              <small>Fluxo direto na palma da mão</small>
            </div>
            <div className="mini-phone-card">
              <span>Sincronização em tempo real</span>
              <small>Conectado ao seu back-end</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "api") {
    return (
      <div className="bento-visual bento-visual-api" aria-hidden="true">
        <div className="mini-code-card">
          <div className="mini-code-row">
            <span className="code-method">POST</span>
            <code>/v1/operacao/sincronizar</code>
            <span className="code-ok">200 OK</span>
          </div>
          <div className="mini-code-divider" />
          <div className="mini-code-row">
            <span className="code-method is-get">GET</span>
            <code>/v1/clientes/status</code>
            <span className="code-ok">REST</span>
          </div>
          <div className="mini-code-row">
            <span className="code-method is-hook">HOOK</span>
            <code>webhook.erp.update</code>
            <span className="code-ok">VERIFIED</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "auto") {
    return (
      <div className="bento-visual bento-visual-auto" aria-hidden="true">
        <div className="mini-flow-strip">
          <div className="mini-flow-box">
            <small>01 · Gatilho</small>
            <strong>Novo evento</strong>
            <span>Formulário / ERP</span>
          </div>
          <span className="mini-flow-arrow" />
          <div className="mini-flow-box is-active">
            <small>02 · Orquestração</small>
            <strong>Validar &amp; Rotear</strong>
            <span>n8n · Webhooks</span>
          </div>
          <span className="mini-flow-arrow" />
          <div className="mini-flow-box">
            <small>03 · Ação</small>
            <strong>CRM Atualizado</strong>
            <span>Sem trabalho manual</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bento-visual bento-visual-process" aria-hidden="true">
      <div className="mini-trend-card">
        <div className="mini-trend-top">
          <span>FLUXO OPERACIONAL</span>
          <span className="mini-trend-pill">Gargalos eliminados</span>
        </div>
        <svg viewBox="0 0 420 92" className="mini-trend-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9EE4EC" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#9EE4EC" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 78 C75 74, 120 62, 185 52 C245 43, 300 26, 420 12 L420 92 L0 92 Z" fill="url(#trendFill)" />
          <path d="M0 78 C75 74, 120 62, 185 52 C245 43, 300 26, 420 12" fill="none" stroke="#9EE4EC" strokeWidth="1.75" />
          <circle cx="305" cy="27" r="4.5" fill="#F4F6F7" stroke="#050709" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

const TOTAL_STACK_SLOTS = 12;

export default function Services({ onSelectService }: { onSelectService: Select }) {
  const { reduced, transition } = useUiMotion();
  const [surface, depth] = serviceLayers;
  const surfaceServices = services.filter(service => service.layer === "surface");
  const depthServices = services.filter(service => service.layer === "depth");
  const stackMap = new Map(stackTiles.map(tile => [tile.gridSlot, tile]));

  const enter = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { ...transition(0.5), delay: reduced ? 0 : index * 0.06 },
  });

  return (
    <section id="servicos" className="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head section-head-dark">
          <div>
            <div className="pill-badge pill-badge-dark">
              <LayersIcon size={12} />
              <span>O QUE CONSTRUÍMOS</span>
            </div>
            <h2 id="services-title">
              Da superfície <em>à estrutura</em>.
            </h2>
          </div>
          <p className="section-intro">
            Parte do software aparece na tela. A outra parte mantém tudo funcionando. A Artic projeta e cuida das duas camadas com o mesmo rigor.
          </p>
        </header>

        <div className="services-block">
          <LayerHead layer={surface} />
          <div className="bento-surface-grid">
            {surfaceServices.map((service, index) => (
              <m.article
                key={service.id}
                className="bento-card bento-card-surface"
                aria-labelledby={"service-title-" + service.id}
                {...enter(index)}
              >
                <div className="bento-card-bg" aria-hidden="true">
                  <img src={iceTexture} alt="" loading="lazy" width={1376} height={768} />
                </div>

                <div className="bento-card-top">
                  <span className="service-icon" aria-hidden="true">{serviceIcons[service.id]}</span>
                  <ul className="service-tags" aria-label="Tecnologias">
                    {service.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>

                <ServiceVisual id={service.id} />

                <div className="bento-card-copy">
                  <h4 id={"service-title-" + service.id}>{service.title}</h4>
                  <p className="service-summary">{service.summary}</p>
                  <p className="service-desc">{service.desc}</p>
                  <ul className="service-examples" aria-label="Exemplos">
                    {service.examples.map(example => (
                      <li key={example}><CheckIcon size={14} /><span>{example}</span></li>
                    ))}
                  </ul>
                  <ServiceCta service={service} onSelect={onSelectService} />
                </div>
              </m.article>
            ))}
          </div>
        </div>

        <div className="waterline-divider" aria-hidden="true">
          <span />
        </div>

        <div className="services-block">
          <LayerHead layer={depth} />
          <div className="bento-depth-grid">
            {depthServices.map((service, index) => (
              <m.article
                key={service.id}
                className={`bento-card bento-card-depth bento-slot-${service.id}`}
                aria-labelledby={"service-title-" + service.id}
                {...enter(index)}
              >
                <div className="bento-card-bg" aria-hidden="true">
                  <img src={iceTexture} alt="" loading="lazy" width={1376} height={768} />
                </div>

                <div className="bento-card-top">
                  <span className="service-icon" aria-hidden="true">{serviceIcons[service.id]}</span>
                  <ul className="service-tags" aria-label="Tecnologias">
                    {service.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>

                <div className="bento-depth-content">
                  <div className="bento-card-copy">
                    <h4 id={"service-title-" + service.id}>{service.title}</h4>
                    <p className="service-summary">{service.summary}</p>
                    <p className="service-desc">{service.desc}</p>
                    <ul className="service-examples" aria-label="Exemplos">
                      {service.examples.map(example => (
                        <li key={example}><CheckIcon size={14} /><span>{example}</span></li>
                      ))}
                    </ul>
                    <ServiceCta service={service} onSelect={onSelectService} />
                  </div>
                  <ServiceVisual id={service.id} />
                </div>
              </m.article>
            ))}
          </div>

          <div className="services-invite">
            <p>Não sabe em qual camada está o seu gargalo?</p>
            <MotionLink href="#contato" className="bento-cta">
              <span>Vamos mapear juntos</span>
              <ArrowIcon />
            </MotionLink>
          </div>
        </div>

        <div className="stack-showcase">
          <div className="stack-copy">
            <div className="pill-badge pill-badge-dark">
              <SparkIcon size={11} />
              <span>STACK &amp; INFRAESTRUTURA</span>
            </div>
            <h3>
              Tecnologia escolhida <em>para durar</em>.
            </h3>
            <p>
              Ferramentas maduras, tipagem forte e código limpo — nada de modismo passageiro que trava a evolução do seu negócio seis meses depois.
            </p>
          </div>

          <div className="stack-mosaic" aria-label="Principais tecnologias utilizadas pela Artic">
            {Array.from({ length: TOTAL_STACK_SLOTS }, (_, slotIndex) => {
              const tile = stackMap.get(slotIndex);
              if (!tile) {
                return <div key={`hatch-${slotIndex}`} className="stack-hatch" aria-hidden="true" />;
              }
              return (
                <div key={tile.name} className="stack-tile">
                  <strong>{tile.name}</strong>
                  <span>{tile.role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
