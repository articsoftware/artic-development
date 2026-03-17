import { useInView } from "../hooks";
import { skillBars } from "../data";
import type { SkillBar } from "../types";

function SkillBar({ label, pct }: SkillBar) {
  const { ref, inView } = useInView(0.5);
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#E8F4FF]">{label}</span>
        <span className="text-[#38BEFF] text-xs font-medium">{pct}%</span>
      </div>
      <div className="h-px bg-[#1E6FD9]/20 rounded">
        <div className="h-full rounded transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${pct}%` : "0%",
            background: "linear-gradient(90deg, #1E6FD9, #38BEFF, #0FFFCB)",
          }} />
      </div>
    </div>
  );
}

function BigLogo() {
  return (
    <svg width="260" height="260" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ab-bg" cx="45%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#1d8a7c"/>
          <stop offset="45%" stopColor="#0e6070"/>
          <stop offset="100%" stopColor="#082535"/>
        </radialGradient>
        <linearGradient id="ab-ml" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#d8f0f5" stopOpacity="0.85"/>
        </linearGradient>
        <linearGradient id="ab-mr" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d0ecf5" stopOpacity="0.72"/>
          <stop offset="100%" stopColor="#9dd4e8" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="ab-mb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8dce8" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#7bc4d8" stopOpacity="0.28"/>
        </linearGradient>
        <clipPath id="ab-cc"><circle cx="200" cy="200" r="185"/></clipPath>
      </defs>
      <circle cx="200" cy="200" r="185" fill="url(#ab-bg)"/>
      <circle cx="200" cy="200" r="185" fill="none" stroke="#3ab8c8" strokeWidth="1.5" opacity={0.2}/>
      <g clipPath="url(#ab-cc)">
        <polygon points="268,340 330,195 392,340" fill="url(#ab-mb)"/>
        <polygon points="52,345 200,92 200,345" fill="url(#ab-ml)"/>
        <polygon points="200,92 348,345 200,345" fill="url(#ab-mr)"/>
        <polygon points="200,92 172,170 228,170" fill="white" opacity={0.93}/>
        <rect x="30" y="334" width="360" height="22" fill="#051a2a" opacity={0.2}/>
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#0D1525]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Visual */}
        <div className="relative hidden lg:flex flex-col items-center justify-center gap-6">

          {/* Moldura */}
          <div className="relative flex items-center justify-center w-full aspect-square max-w-md">
            {/* Grid fundo */}
            <div className="absolute inset-0 opacity-20 rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(rgba(56,190,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,190,255,.1) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
            {/* Cantos */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[#38BEFF]/40" />
            <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-[#38BEFF]/40" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-[#38BEFF]/40" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[#38BEFF]/40" />
            {/* Glow */}
            <div className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(30,111,217,.15) 0%, transparent 70%)" }} />
            {/* Logo grande */}
            <BigLogo />
          </div>

          {/* Badge */}
          <div className="flex items-center gap-3 border border-[#1E6FD9]/30 bg-[#080E1A] px-5 py-3">
            <span className="text-xl">🐧</span>
            <div>
              <div className="text-xs text-[#38BEFF] font-medium tracking-wider uppercase">Pinguim</div>
              <div className="text-xs text-[#8BA8C4]/60">ArticWeb Dev · Curitiba, PR</div>
            </div>
          </div>

          {/* Linha aurora */}
          <div className="w-24 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #38BEFF, #0FFFCB, transparent)" }} />
        </div>

        {/* Texto */}
        <div>
          <span className="text-xs uppercase tracking-widest text-[#38BEFF] block mb-3">Sobre mim</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E8F4FF] mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            João Pedro Plinta,<br />
            <span style={{ color: "#38BEFF" }}>o Pinguim</span>
          </h2>
          <p className="text-[#8BA8C4] text-sm leading-relaxed mb-4">
            Desenvolvedor fullstack de Curitiba — sim, aquela cidade fria — fundador da{" "}
            <strong className="text-[#E8F4FF]">ArticWeb</strong>.
            Trabalho com desenvolvimento de software há mais de 5 anos construindo produtos que funcionam de verdade.
          </p>
          <p className="text-[#8BA8C4] text-sm leading-relaxed mb-4">
            Acredito que bom código é como o ártico: limpo, preciso e não colapsa sob pressão.
            Cada projeto recebe atenção total — sem pegar mais do que consigo entregar com qualidade.
          </p>
          <p className="text-[#8BA8C4] text-sm leading-relaxed mb-8">
            Sem terceirização. Sem copy-paste de template. Sem enrolação.
            Só eu, o código e o problema que vamos resolver juntos.
          </p>

          <div>{skillBars.map((s: SkillBar) => <SkillBar key={s.label} {...s} />)}</div>
        </div>

      </div>
    </section>
  );
}