import Logo from "./Logo";
import { contactItems, navLinks, privacyPolicy, socialLinks } from "../data";
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "./Icons";
import iceTexture from "../assets/obsidian-ice-texture.webp";
import { MotionLink } from "./Motion";

const emailItem = contactItems.find(item => item.icon === "mail");
const phoneItem = contactItems.find(item => item.icon === "phone");

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-media" aria-hidden="true">
        <img src={iceTexture} alt="" width={1376} height={768} loading="lazy" />
        <div className="footer-media-mask" />
      </div>

      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <MotionLink href="#hero" aria-label="Artic Development — início">
              <Logo size="md" />
            </MotionLink>
            <p className="footer-tagline">
              Ideias à frente. Software à altura.
              <br />
              Engenharia sob medida para negócios que pensam longo prazo.
            </p>
            <div className="footer-direct">
              {emailItem?.href && (
                <a href={emailItem.href}>
                  <MailIcon size={16} />
                  <span>{emailItem.value}</span>
                </a>
              )}
              {phoneItem?.href && (
                <a href={phoneItem.href} target="_blank" rel="noopener noreferrer">
                  <PhoneIcon size={16} />
                  <span>{phoneItem.value}</span>
                </a>
              )}
            </div>
          </div>

          <div className="footer-columns">
            <nav className="footer-col" aria-label="Navegação do rodapé">
              <p className="footer-col-title">NAVEGAÇÃO</p>
              {navLinks.map(({ id, label }) => (
                <MotionLink key={id} href={"#" + id}>{label}</MotionLink>
              ))}
            </nav>

            <div className="footer-col">
              <p className="footer-col-title">CONECTAR</p>
              <MotionLink href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <span>Instagram</span>
                <ArrowUpRightIcon size={13} />
              </MotionLink>
              {phoneItem?.href && (
                <MotionLink href={phoneItem.href} target="_blank" rel="noopener noreferrer">
                  <span>WhatsApp</span>
                  <ArrowUpRightIcon size={13} />
                </MotionLink>
              )}
              <MotionLink href="#contato">Iniciar conversa</MotionLink>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">OPERAÇÃO</p>
              <p className="footer-col-text">Curitiba &amp; São José dos Pinhais, PR</p>
              <p className="footer-col-text">Atendimento remoto em todo o Brasil</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Artic Development</p>
          <p className="footer-legal">
            Artic Desenvolvimento de Software LTDA · CNPJ 69.133.740/0001-00 ·{" "}
            <a href={privacyPolicy.path}>Política de privacidade</a>
          </p>
          <MotionLink
            className="back-to-top"
            href="#hero"
            onClick={event => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              requestAnimationFrame(() => {
                const title = document.getElementById("hero-title");
                if (title) {
                  title.tabIndex = -1;
                  title.focus({ preventScroll: true });
                }
              });
            }}
          >
            <span>Voltar ao topo</span>
            <span aria-hidden="true">↑</span>
          </MotionLink>
        </div>
      </div>
    </footer>
  );
}
