import { useState } from "react";
import { services } from "../data";
import { serviceIcons } from "./Icons";
import { useScrollTo } from "../hooks";
import type { Service } from "../types";

function ServiceCard({ id, title, desc, tags }: Service) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-[#0D1525] border border-[#1E6FD9]/20 p-8 overflow-hidden
        transition-all duration-300 cursor-default group"
      style={{ boxShadow: hovered ? "0 0 30px rgba(56,190,255,.08)" : "none" }}>

      {/* Top accent */}
      <div className={`absolute top-0 left-0 h-px transition-all duration-500
        ${hovered ? "w-full" : "w-0"}`}
        style={{ background: "linear-gradient(90deg, #1E6FD9, #38BEFF, #0FFFCB)" }} />

      <div className="text-[#38BEFF] mb-6">{serviceIcons[id]}</div>
      <h3 className="text-xl font-bold text-[#E8F4FF] mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
      <p className="text-[#8BA8C4] text-sm leading-relaxed mb-5">{desc}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag}
            className="text-xs uppercase tracking-wider border border-[#1E6FD9]/30 text-[#8BA8C4]/70 px-2 py-1
            group-hover:border-[#38BEFF]/30 group-hover:text-[#8BA8C4] transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const scrollTo = useScrollTo();

  return (
    <section id="servicos" className="bg-[#080E1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-[#38BEFF] block mb-3">O que fazemos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E8F4FF] mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Serviços especializados
          </h2>
          <p className="text-[#8BA8C4] max-w-lg text-sm leading-relaxed">
            Soluções construídas em temperatura zero — sem pressa, sem atalhos, com precisão absoluta em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E6FD9]/10">
          {services.map((s: Service) => <ServiceCard key={s.id} {...s} />)}

          {/* CTA card */}
          <div className="bg-[#080E1A] border border-dashed border-[#38BEFF]/25 p-8
            flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-3">🐧</div>
            <p className="text-lg font-bold text-[#E8F4FF] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
              Seu projeto aqui
            </p>
            <p className="text-[#8BA8C4] text-sm mb-6 leading-relaxed">
              Vamos conversar. Análise inicial gratuita, sem compromisso.
            </p>
            <button onClick={() => scrollTo("contato")}
              className="text-xs uppercase tracking-widest font-semibold px-6 py-3 text-[#080E1A] transition-colors duration-200"
              style={{ background: "linear-gradient(135deg, #1E6FD9, #38BEFF)" }}>
              Solicitar orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
