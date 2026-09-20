import Logo from "./Logo";
import { navLinks, socialLinks } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top"><a href="#hero" aria-label="Artic Development — início"><Logo size="lg" /></a><p>Ideias à frente.<br />Software à altura.</p><nav aria-label="Navegação do rodapé">{navLinks.map(({ id, label }) => <a key={id} href={"#" + id}>{label}</a>)}</nav></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Artic Development</p><p>Artic Desenvolvimento de Software LTDA<br />CNPJ 69.133.740/0001-00 · São José dos Pinhais, PR</p><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href="#hero">Voltar ao topo ↑</a></div>
      </div>
    </footer>
  );
}
