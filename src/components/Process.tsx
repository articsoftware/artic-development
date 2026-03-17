import { steps } from "../data";
import type { Step } from "../types";

export default function Process() {
  return (
    <section id="processo" className="bg-[#080E1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <span className="text-xs uppercase tracking-widest text-[#38BEFF] block mb-3">Como trabalho</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E8F4FF] mb-4 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Processo claro,<br />entrega previsível
        </h2>
        <p className="text-[#8BA8C4] text-sm mb-14 max-w-md">
          Sem surpresas, sem scope creep silencioso, sem "tá quase". Cada etapa é comunicada.
        </p>

        {/* Aurora divider */}
        <div className="w-24 h-px mb-14"
          style={{ background: "linear-gradient(90deg, #38BEFF, #0FFFCB)" }} />

        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(56,190,255,.2), rgba(15,255,203,.2), transparent)" }} />

          {steps.map(({ num, title, desc }: Step) => (
            <div key={num} className="relative text-center px-2 group">
              <div className="w-10 h-10 rounded-full border border-[#1E6FD9]/50 bg-[#080E1A]
                flex items-center justify-center mx-auto mb-5 relative z-10
                group-hover:border-[#38BEFF] transition-colors duration-300"
                style={{ boxShadow: "0 0 20px rgba(56,190,255,.1)" }}>
                <span className="text-sm font-bold text-[#38BEFF]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{num}</span>
              </div>
              <h4 className="text-white text-sm font-semibold mb-2">{title}</h4>
              <p className="text-[#8BA8C4]/70 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
