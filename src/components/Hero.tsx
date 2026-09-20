import { ArrowIcon } from "./Icons";
import landscape from "../assets/arctic-landscape-v1.webp";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-intro">
          <div>
            <p className="hero-category"><span /> Artic Development</p>
            <h1 id="hero-title">Ideias à frente.<br />Software à altura.</h1>
          </div>
          <div className="hero-copy">
            <p>Transformamos desafios em sites, aplicativos e sistemas que fazem sentido para o seu negócio.</p>
            <a href="#contato" className="button-primary">Vamos construir juntos <ArrowIcon /></a>
            <span className="hero-location">De Curitiba para onde sua ideia estiver.</span>
          </div>
        </div>
        <div className="horizon-panel">
          <img className="horizon-landscape" src={landscape} alt="" width={2172} height={724} fetchPriority="high" />
          <div className="horizon-title">
            <h2>Uma boa experiência.<br />Uma base sólida.</h2>
            <p>Design, tecnologia e cuidado em cada camada do seu projeto.</p>
            <a className="horizon-link" href="#servicos">Conheça nossas soluções <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-foot">
          <p><span className="status-dot" /> Disponível para novos projetos</p>
          <p>Conversa direta. Desenvolvimento próximo.</p>
        </div>
      </div>
    </section>
  );
}
