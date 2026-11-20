import { expertise } from "../data";
import { ArrowUpRightIcon, SparkIcon } from "./Icons";
import { MotionLink, Reveal } from "./Motion";
import founderPhoto from "../assets/founder-avatar.webp";

export default function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-statement">
          <div className="pill-badge pill-badge-light">
            <SparkIcon size={11} />
            <span>QUEM CONSTRÓI</span>
          </div>

          <h2 id="about-title" className="about-headline">
            <span className="tone-strong">Aqui, quem entende a sua ideia</span>{" "}
            <span className="tone-soft">
              é <em>quem cuida do código</em>.
            </span>
          </h2>

          <p className="about-lede">
            A Artic nasce da convicção de que software de alto padrão começa com escuta real, rigor arquitetural e atenção cirúrgica ao que move o negócio.
          </p>

          <p className="founder-story">
            Sou o João Pedro Plinta — também conhecido como Pinguim. Há mais de 3 anos, desenho e desenvolvo sistemas de ponta a ponta, acompanhando cada projeto da primeira conversa estratégica à entrega em produção, sem terceirizar o diálogo nem a qualidade técnica.
          </p>

          <ul className="expertise" aria-label="Áreas de atuação">
            {expertise.map(label => <li key={label}>{label}</li>)}
          </ul>

          <div className="about-actions">
            <MotionLink href="#contato" className="button button-obsidian">
              <span>Conversar direto com o João</span>
              <ArrowUpRightIcon />
            </MotionLink>
          </div>
        </Reveal>

        <div className="founder-monolith">
          <div className="founder-frame">
            <img
              src={founderPhoto}
              alt="João Pedro Plinta, fundador da Artic Development"
              className="founder-portrait"
              width={640}
              height={640}
              loading="lazy"
            />
            <div className="founder-overlay-card">
              <div className="founder-overlay-head">
                <span className="founder-badge-dot" aria-hidden="true" />
                <span>FUNDADOR &amp; ENGENHEIRO FULL-STACK</span>
              </div>
              <h3>João Pedro Plinta</h3>
              <p>Artic Development · Curitiba, PR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
