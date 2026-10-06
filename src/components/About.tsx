import { expertise } from "../data";
import { Reveal } from "./Motion";
import founderPhoto from "../assets/founder-avatar.webp";

export default function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-statement">
          <p className="eyebrow">Quem constrói</p>
          <h2 id="about-title">Aqui, quem entende a sua ideia é <em>quem cuida do código</em>.</h2>
          <p className="about-lede">A Artic nasce da ideia de que software bem feito começa com escuta, clareza e atenção ao que realmente importa.</p>
        </Reveal>
        <div className="founder">
          <div className="founder-identity">
            <img src={founderPhoto} alt="João Pedro Plinta" className="founder-avatar" width={96} height={96} loading="lazy" />
            <div>
              <h3>João Pedro Plinta</h3>
              <p>Fundador e desenvolvedor fullstack</p>
            </div>
          </div>
          <p className="founder-story">Sou o João, também conhecido como Pinguim. Há mais de 3 anos, desenvolvo soluções de ponta a ponta — e acompanho cada projeto da primeira conversa à entrega.</p>
          <ul className="expertise" aria-label="Áreas de atuação">{expertise.map(label => <li key={label}>{label}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
