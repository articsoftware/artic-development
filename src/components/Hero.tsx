import { ArrowIcon } from "./Icons";
import iceberg from "../assets/arctic-landscape-v1.webp";
import { m } from "framer-motion";
import { MotionLink, useUiMotion } from "./Motion";
import { contactItems, heroFacts } from "../data";

const whatsapp = contactItems.find(item => item.icon === "phone")?.href;

// The photo's waterline sits at 42% of its height; CSS pins that point to 42%
// of the hero (object-position), so the headline stays above the water and the
// offer below it at any desktop aspect ratio.
export default function Hero() {
  const { reduced, transition } = useUiMotion();
  const enter = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition(0.55), delay: reduced ? 0 : delay },
  });
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img src={iceberg} alt="" width={2172} height={724} decoding="async" {...{ fetchpriority: "high" }} />
      </div>
      <div className="container hero-layout">
        <m.div className="hero-above" {...enter(0)}>
          <p className="eyebrow">Artic Development · software sob medida</p>
          <h1 id="hero-title">Ideias à frente.<br /> Software à <em>altura</em>.</h1>
        </m.div>
        <m.div className="hero-below" {...enter(0.12)}>
          <p className="hero-lede">Sites, aplicativos e sistemas que as pessoas usam — e as APIs, integrações e automações que sustentam tudo por baixo.</p>
          <div className="hero-actions">
            <MotionLink href="#contato" className="button button-light">Vamos construir juntos <ArrowIcon /></MotionLink>
            {whatsapp && <MotionLink href={whatsapp} target="_blank" rel="noreferrer" className="button button-ghost">Falar no WhatsApp</MotionLink>}
          </div>
        </m.div>
        <ul className="hero-facts" aria-label="Sobre o atendimento">
          {heroFacts.map((fact, index) => <li key={fact}>{index === 0 && <span className="status-dot" aria-hidden="true" />}{fact}</li>)}
        </ul>
      </div>
    </section>
  );
}
