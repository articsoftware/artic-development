import Logo from "./Logo";
import { SparkIcon } from "./Icons";
import { Reveal } from "./Motion";
import { manifestoPillars } from "../data";

export default function Manifesto() {
  return (
    <section className="manifesto" aria-label="Manifesto Artic">
      <div className="manifesto-gridlines" aria-hidden="true" />
      <div className="container manifesto-inner">
        <Reveal className="manifesto-content">
          <div className="pill-badge pill-badge-dark">
            <SparkIcon size={11} />
            <span>ENGENHARIA AUTORAL</span>
          </div>

          <p className="manifesto-statement">
            <span className="manifesto-bright">
              A Artic{" "}
              <span className="manifesto-chip" aria-hidden="true">
                <Logo size="sm" iconOnly />
              </span>{" "}
              projeta e desenvolve software sob medida —
            </span>{" "}
            <span className="manifesto-muted">
              da interface que conquista seus clientes à arquitetura silenciosa que organiza dados, automatiza processos e sustenta o crescimento.
            </span>
          </p>

          <dl className="manifesto-pillars">
            {manifestoPillars.map(({ value, label }) => (
              <div key={label} className="manifesto-pillar">
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
