import { useCounter, useScrollTo } from "../hooks";
import { stats } from "../data";
import type { Stat } from "../types";
import { ArrowIcon } from "./Icons";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { ref, val } = useCounter(to);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(56,190,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(56,190,255,.06) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,111,217,.12) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15,255,203,.06) 0%, transparent 65%)" }} />

      {/* Aurora line top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #38BEFF, #0FFFCB, transparent)" }} />

      <div className="relative z-10 max-w-3xl mx-auto w-full">

        {/* Badge */}
        <div className="aw-fade-1 inline-flex items-center gap-2 border border-[#1E6FD9]/40
          bg-[#1E6FD9]/8 px-4 py-2 rounded-full text-[#38BEFF] text-xs uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0FFFCB]" style={{ animation: "awPulse 2s infinite" }} />
          Disponível para novos projetos
        </div>

        <h1 className="aw-fade-2 text-5xl md:text-7xl font-extrabold text-[#E8F4FF] leading-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Código que não<br />
          <span style={{ background: "linear-gradient(135deg, #38BEFF, #0FFFCB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            derrete
          </span>{" "}
          sob pressão
        </h1>

        <p className="aw-fade-3 text-[#8BA8C4] text-lg max-w-xl leading-relaxed mb-4">
          João Pedro Plinta — fundador da <strong className="text-[#E8F4FF]">ArticWeb</strong>.
          Desenvolvimento de software sob medida: sites, apps, APIs e automações construídos
          com precisão ártica e entrega real.
        </p>
        <p className="aw-fade-3 text-[#38BEFF]/70 text-sm mb-10 tracking-wide">
          ❄️ Curitiba, PR · Atendimento remoto em todo o Brasil
        </p>

        <div className="aw-fade-4 flex flex-wrap gap-4 mb-16">
          <button onClick={() => scrollTo("contato")}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-8 py-4 text-[#080E1A]
            transition-all duration-200 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1E6FD9, #38BEFF)" }}>
            Iniciar projeto
            <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowIcon /></span>
          </button>
          <button onClick={() => scrollTo("servicos")}
            className="text-xs uppercase tracking-widest font-medium px-8 py-4
            border border-[#1E6FD9]/50 text-[#8BA8C4]
            hover:border-[#38BEFF] hover:text-[#38BEFF] transition-all duration-200 active:scale-95">
            Ver serviços
          </button>
        </div>

        {/* Stats */}
        <div className="aw-fade-4 flex flex-wrap gap-10 pt-8 border-t border-[#1E6FD9]/20">
          {stats.map(({ to, suffix, label }: Stat) => (
            <div key={label}>
              <div className="text-3xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif", color: "#38BEFF" }}>
                <Counter to={to} suffix={suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-[#8BA8C4]/60 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
