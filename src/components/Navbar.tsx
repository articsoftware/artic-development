import { useState } from "react";
import Logo from "./Logo";
import { MenuIcon, XIcon } from "./Icons";
import { useScrolled, useScrollTo } from "../hooks";
import { navLinks } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const scrollTo = useScrollTo();
  const go = (id: string) => { scrollTo(id); setMenuOpen(false); };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#080E1A]/90 backdrop-blur-xl border-b border-[#1E6FD9]/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <button onClick={() => go("hero")} className="flex items-center">
          <Logo size="sm" />
        </button>

        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button onClick={() => go(id)}
                className="text-xs uppercase tracking-widest text-[#8BA8C4] hover:text-[#38BEFF] transition-colors duration-200 font-medium">
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => go("contato")}
          className="hidden md:block text-xs uppercase tracking-widest border border-[#1E6FD9] text-[#38BEFF] px-5 py-2
          hover:bg-[#1E6FD9]/20 hover:border-[#38BEFF] transition-all duration-200">
          Fale comigo
        </button>

        <button className="md:hidden text-[#8BA8C4]" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D1525] border-t border-[#1E6FD9]/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ id, label }) => (
            <button key={id} onClick={() => go(id)}
              className="text-sm text-[#8BA8C4] hover:text-[#38BEFF] text-left transition-colors">
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
