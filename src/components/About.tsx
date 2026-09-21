import { expertise } from "../data";
import Logo from "./Logo";
import { Reveal } from "./Motion";

export default function About() {
  return (
    <section id="sobre" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="about-heading">
          <Logo iconOnly size="lg" />
          <p className="section-label">Tecnologia com gente por perto</p>
          <h2 id="about-title">A melhor parte de construir<br /> é construir junto.</h2>
          <p>A Artic nasce da ideia de que software bem feito começa com escuta, clareza e atenção ao que realmente importa.</p>
        </Reveal>
        <div className="founder-row">
          <div className="founder-identity"><span className="founder-avatar" aria-hidden="true">JP</span><div><h3>João Pedro Plinta</h3><p>Fundador e desenvolvedor fullstack</p></div></div>
          <div className="founder-story"><p>Sou o João, também conhecido como Pinguim. Há mais de 3 anos, desenvolvo soluções de ponta a ponta. Aqui, quem entende a sua ideia é quem cuida do código e acompanha a entrega.</p><ul className="expertise-tags" aria-label="Áreas de atuação">{expertise.map(label => <li key={label}>{label}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
