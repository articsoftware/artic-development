import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { MenuIcon, XIcon, ArrowIcon, ArrowUpRightIcon } from "./Icons";
import { useActiveSection, useScrolled } from "../hooks";
import { navLinks } from "../data";
import { m } from "framer-motion";
import { Disclosure, MotionLink, useUiMotion } from "./Motion";

const sectionIds = ["hero", ...navLinks.map(link => link.id)];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { reduced, transition } = useUiMotion();
  const toggle = useRef<HTMLButtonElement>(null);
  const scrolled = useScrolled(24);
  const activeSection = useActiveSection(sectionIds);
  const brand = useRef<HTMLAnchorElement>(null);
  const mobileMenu = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (!desktop.matches) return;
      if (mobileMenu.current?.contains(document.activeElement) || document.activeElement === toggle.current) {
        brand.current?.focus({ preventScroll: true });
      }
      setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    if (menuOpen) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <nav className="nav-inner" aria-label="Navegação principal">
        <a ref={brand} href="#hero" className="nav-brand" aria-label="Artic Development — início" onClick={() => setMenuOpen(false)}>
          <Logo size="sm" />
        </a>

        <ul className="desktop-links">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <MotionLink href={"#" + id} aria-current={activeSection === id ? "location" : undefined}>
                {label}
                <m.span
                  className="nav-indicator"
                  aria-hidden="true"
                  initial={false}
                  animate={{ scaleX: activeSection === id ? 1 : 0 }}
                  transition={transition(0.22)}
                />
              </MotionLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <MotionLink className="nav-contact" href="#contato">
            <span>Iniciar projeto</span>
            <ArrowUpRightIcon />
          </MotionLink>
          <m.button
            ref={toggle}
            type="button"
            className="menu-toggle"
            whileTap={reduced ? undefined : { scale: 0.94 }}
            transition={transition(0.12)}
            onClick={() => setMenuOpen(previous => !previous)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </m.button>
        </div>
      </nav>

      <Disclosure open={menuOpen} id="mobile-menu" className="mobile-menu-shell">
        <nav ref={mobileMenu} className="mobile-menu" aria-label="Navegação mobile">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => {
                setMenuOpen(false);
                const section = document.getElementById(id);
                if (section) {
                  section.tabIndex = -1;
                  section.focus({ preventScroll: true });
                }
              }}
            >
              <span>{label}</span>
              <ArrowIcon />
            </a>
          ))}
        </nav>
      </Disclosure>
    </header>
  );
}
