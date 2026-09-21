import Logo from "./Logo";
import { navLinks, socialLinks } from "../data";
import { MotionLink } from "./Motion";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top"><MotionLink href="#hero" aria-label="Artic Development — início"><Logo size="lg" /></MotionLink><p>Ideias à frente.<br />Software à altura.</p><nav aria-label="Navegação do rodapé">{navLinks.map(({ id, label }) => <MotionLink key={id} href={"#" + id}>{label}</MotionLink>)}</nav></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Artic Development</p><p>Artic Desenvolvimento de Software LTDA<br />CNPJ 69.133.740/0001-00 · São José dos Pinhais, PR</p><MotionLink href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></MotionLink><MotionLink className="back-to-top" href="#hero" onClick={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          // Let native anchor navigation complete before assigning keyboard focus.
          requestAnimationFrame(() => {
            const title = document.getElementById("hero-title");
            if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
          });
        }}>Voltar ao topo <span aria-hidden="true">↑</span></MotionLink></div>
      </div>
    </footer>
  );
}
