import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { MenuIcon, XIcon, ArrowIcon } from "./Icons";
import { useActiveSection, useScrolled } from "../hooks";
import { navLinks } from "../data";

const sectionIds = ["hero", ...navLinks.map(link => link.id)];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const scrolled = useScrolled();
  const activeSection = useActiveSection(sectionIds);
  const brand = useRef<HTMLAnchorElement>(null);
  const mobileMenu = useRef<HTMLElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 640px)");
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
      if (event.key === "Escape") { setMenuOpen(false); toggle.current?.focus(); }
    };
    if (menuOpen) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <nav className="container nav-inner" aria-label="Navegação principal">
        <a ref={brand} href="#hero" aria-label="Artic Development — início" onClick={() => setMenuOpen(false)}><Logo size="md" /></a>
        <ul className="desktop-links">{navLinks.map(({ id, label }) => <li key={id}><a href={"#" + id} aria-current={activeSection === id ? "location" : undefined}>{label}</a></li>)}</ul>
        <a className="nav-contact" href="#contato">Vamos conversar <ArrowIcon /></a>
        <button ref={toggle} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-menu">{menuOpen ? <XIcon /> : <MenuIcon />}</button>
      </nav>
      {menuOpen && <nav ref={mobileMenu} id="mobile-menu" className="mobile-menu" aria-label="Navegação mobile">{navLinks.map(({ id, label }) => <a key={id} href={"#" + id} aria-current={activeSection === id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{label}<ArrowIcon /></a>)}</nav>}
    </header>
  );
}
