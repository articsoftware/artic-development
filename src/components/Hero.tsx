import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowIcon, ArrowUpRightIcon, CheckIcon, LayersIcon, SparkIcon } from "./Icons";
import Logo from "./Logo";
import heroGlacier from "../assets/hero-obsidian-glacier.webp";
import { MotionLink, useUiMotion } from "./Motion";
import { contactItems, heroBlueprints, heroFacts } from "../data";

const whatsapp = contactItems.find(item => item.icon === "phone")?.href;

export default function Hero() {
  const { reduced, transition } = useUiMotion();
  const [activeId, setActiveId] = useState(heroBlueprints[0].id);
  const current = heroBlueprints.find(item => item.id === activeId) ?? heroBlueprints[0];

  const enter = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition(0.65), delay: reduced ? 0 : delay },
  });

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          src={heroGlacier}
          alt=""
          width={1376}
          height={768}
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
        <div className="hero-vignette" />
      </div>

      <div className="container hero-inner">
        <m.div className="hero-header" {...enter(0)}>
          <div className="pill-badge pill-badge-dark">
            <span className="status-dot" aria-hidden="true" />
            <span>ARTIC DEVELOPMENT · SOFTWARE SOB MEDIDA</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Ideias à frente.
            <br />
            Software <em>à altura</em>.
          </h1>

          <p className="hero-lede">
            Projetamos sites, aplicativos e sistemas que elevam o padrão da sua marca — com as APIs, integrações e automações que sustentam toda a operação.
          </p>

          <div className="hero-actions">
            <MotionLink href="#contato" className="button button-ivory">
              <span>Agendar conversa estratégica</span>
              <ArrowIcon />
            </MotionLink>
            {whatsapp && (
              <MotionLink
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-obsidian-ghost"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRightIcon />
              </MotionLink>
            )}
          </div>
        </m.div>

        <m.div className="hero-stage" {...enter(0.16)}>
          <div className="hero-callout hero-callout-left" aria-hidden="true">
            <span className="callout-icon"><LayersIcon size={14} /></span>
            <span>Engenharia Ponta a Ponta</span>
          </div>

          <div className="hero-callout hero-callout-right" aria-hidden="true">
            <span className="callout-icon"><SparkIcon size={12} /></span>
            <span>Direto com o Fundador</span>
          </div>

          <div className="studio-window" aria-label="Prévia da arquitetura de entrega Artic">
            <div className="studio-topbar">
              <div className="studio-brand-pill">
                <Logo size="sm" iconOnly />
                <span className="studio-path">{current.path}</span>
              </div>
              <div className="studio-status-pill">
                <span className="studio-status-dot" aria-hidden="true" />
                <span>{current.status}</span>
              </div>
            </div>

            <div className="studio-body">
              <aside className="studio-sidebar" aria-label="Camadas de engenharia">
                <p className="studio-sidebar-label">CAMADAS</p>
                <div className="studio-tabs" role="tablist" aria-label="Especialidades técnicas">
                  {heroBlueprints.map(blueprint => {
                    const selected = blueprint.id === current.id;
                    return (
                      <button
                        key={blueprint.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        aria-controls={`blueprint-panel-${blueprint.id}`}
                        id={`blueprint-tab-${blueprint.id}`}
                        className={"studio-tab" + (selected ? " is-active" : "")}
                        onClick={() => setActiveId(blueprint.id)}
                      >
                        <span className="studio-tab-dot" aria-hidden="true" />
                        <span>{blueprint.tab}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="studio-sidebar-meta">
                  <span>SEDE</span>
                  <p>Curitiba, PR · Remoto</p>
                </div>
              </aside>

              <div
                className="studio-canvas"
                role="tabpanel"
                id={`blueprint-panel-${current.id}`}
                aria-labelledby={`blueprint-tab-${current.id}`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={current.id}
                    className="studio-canvas-inner"
                    initial={reduced ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={transition(0.24)}
                  >
                    <div className="studio-canvas-head">
                      <p className="studio-summary">{current.summary}</p>
                      <span className="studio-flow-badge" aria-hidden="true">01 → 04 · FLUXO CONECTADO</span>
                    </div>

                    <div className="studio-graph">
                      {/* Connected architectural spline overlay on desktop */}
                      <svg
                        className="studio-wires"
                        viewBox="0 0 600 264"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        {/* 01 -> 02 horizontal bridge */}
                        <path
                          className="wire-base"
                          d="M 278 58 L 322 58"
                        />
                        <path
                          className="wire-pulse"
                          d="M 278 58 L 322 58"
                        />
                        {/* 02 -> 03 clean S-curve vertical routing */}
                        <path
                          className="wire-base"
                          d="M 460 118 C 460 144, 140 122, 140 150"
                        />
                        <path
                          className="wire-pulse wire-pulse-delay"
                          d="M 460 118 C 460 144, 140 122, 140 150"
                        />
                        {/* 03 -> 04 horizontal bridge */}
                        <path
                          className="wire-base"
                          d="M 278 206 L 322 206"
                        />
                        <path
                          className="wire-pulse wire-pulse-delay-2"
                          d="M 278 206 L 322 206"
                        />
                      </svg>

                      <ol className="studio-flow">
                        {current.nodes.map((node, index) => (
                          <li key={node.step} className={`studio-node studio-node-${index + 1}`}>
                            <div className="studio-node-head">
                              <span className="studio-node-step">{node.step}</span>
                              <span className="studio-node-meta">{node.meta}</span>
                            </div>
                            <strong>{node.label}</strong>
                            <p>{node.detail}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>

              <div className="studio-inspector">
                <div className="studio-inspector-details">
                  <p className="studio-sidebar-label">{current.inspectorTitle}</p>
                  <ul className="studio-deliverables">
                    {current.deliverables.map(item => (
                      <li key={item}>
                        <CheckIcon size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="studio-stack">
                  <p className="studio-sidebar-label">STACK PRINCIPAL</p>
                  <div className="studio-stack-pills">
                    {current.stack.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <MotionLink href="#contato" className="studio-cta">
                  <span>Solicitar arquitetura</span>
                  <ArrowUpRightIcon size={14} />
                </MotionLink>
              </div>
            </div>
          </div>
        </m.div>

        <ul className="hero-facts" aria-label="Sobre o atendimento">
          {heroFacts.map((fact, index) => (
            <li key={fact}>
              {index === 0 && <span className="status-dot" aria-hidden="true" />}
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
