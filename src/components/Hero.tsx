import { ArrowIcon } from "./Icons";
import iceberg from "../assets/iceberg-reflection.webp";

function IceFormation() {
  return (
    <div className="ice-scene" aria-hidden="true">
      <img src={iceberg} alt="" width={1149} height={1369} />
      <div className="ice-note"><span className="ice-note-line" />Da superfície à estrutura.<br />Cada detalhe importa.</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-category">Desenvolvimento de software sob medida</p>
          <h1>Código que<br />não derrete<br />sob pressão.</h1>
          <p className="hero-description">Sites, aplicativos e sistemas para o seu negócio. Da primeira conversa à entrega, você fala com quem desenvolve.</p>
          <div className="hero-actions">
            <a href="#contato" className="button-primary">Vamos conversar <ArrowIcon /></a>
            <a href="#servicos" className="text-link">Explore os serviços <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <IceFormation />
        <div className="hero-signature">
          <span>Contato direto.<br /><strong>Do começo ao próximo passo.</strong></span>
          <span>Curitiba, Brasil<br /><strong>Atendimento remoto</strong></span>
          <p className="availability"><span /> Disponível para novos projetos</p>
          <a href="#servicos" aria-label="Explorar serviços" className="scroll-cue">↓</a>
        </div>
      </div>
    </section>
  );
}
