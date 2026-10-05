import { ArrowIcon } from "./Icons";
import landscape from "../assets/arctic-landscape-v1.webp";
import { m } from "framer-motion";
import { MotionLink, useUiMotion } from "./Motion";

export default function Hero() {
  const { reduced, transition } = useUiMotion();
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <img className="hero-bg" src={landscape} alt="" width={2172} height={724} fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="container">
        <m.div className="hero-intro" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={transition(0.45)}>
          <div>
            <p className="hero-category"><span /> Artic Development</p>
            <h1 id="hero-title">Ideias à frente.<br />Software à altura.</h1>
          </div>
          <div className="hero-copy">
            <p>Transformamos desafios em sites, aplicativos e sistemas que fazem sentido para o seu negócio.</p>
            <m.a href="#contato" className="button-primary" whileTap={reduced ? undefined : { scale: 0.98 }} transition={transition(0.12)}>Vamos construir juntos <ArrowIcon /></m.a>
            <span className="hero-location">De Curitiba para onde sua ideia estiver.</span>
          </div>
        </m.div>
        <div className="hero-foot">
          <p><span className="status-dot" /> Disponível para novos projetos</p>
          <p>Conversa direta. Desenvolvimento próximo.</p>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-chevron" />
      </div>
    </section>
  );
}
