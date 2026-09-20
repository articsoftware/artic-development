import { expertise } from "../data";
import Logo from "./Logo";

export default function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-grid">
        <div className="about-manifesto">
          <p className="section-label">Por trás da Artic</p>
          <h2>Você conversa<br />com quem escreve<br />o código.</h2>
          <p>Uma parceria próxima, do primeiro esboço ao último ajuste.</p>
          <a href="#contato" className="text-link">Vamos nos conhecer <span aria-hidden="true">↗</span></a>
        </div>
        <div className="founder-panel">
          <div className="founder-heading"><div className="founder-avatar" aria-hidden="true">JP</div><div><h3>João Pedro Plinta</h3><p>Fundador & desenvolvedor fullstack</p></div><Logo iconOnly size="sm" /></div>
          <p>Sou o João, também conhecido como Pinguim. Fundei a Artic Development para transformar problemas de negócio em software bem construído.</p>
          <p>Há mais de 3 anos, trabalho com desenvolvimento de ponta a ponta. Aqui, você fala diretamente comigo: quem entende a sua ideia é quem cuida da entrega.</p>
          <div className="founder-principle"><span aria-hidden="true">↳</span><p>Atenção ao detalhe.<br />Responsabilidade com o combinado.</p></div>
          <ul className="expertise-tags" aria-label="Áreas de atuação">{expertise.map(label => <li key={label}>{label}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
