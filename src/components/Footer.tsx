import Logo from "./Logo";
import { useScrollTo } from "../hooks";

export default function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080E1A] border-t border-[#1E6FD9]/15 px-6 py-8">
      {/* Aurora line */}
      <div className="h-px w-full mb-8"
        style={{ background: "linear-gradient(90deg, transparent, rgba(56,190,255,.3), rgba(15,255,203,.2), transparent)" }} />

      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div>
          <Logo size="sm" showTagline />
        </div>

        <div className="flex gap-8">
          {(["servicos", "sobre", "processo", "contato"] as const).map((id) => {
            const labels: Record<string, string> = { servicos: "Serviços", sobre: "Sobre", processo: "Processo", contato: "Contato" };
            return (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-xs text-[#8BA8C4]/50 hover:text-[#38BEFF] transition-colors">
                {labels[id]}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-[#8BA8C4]/30">
          © {year} ArticWeb Development · João Pedro Plinta 🐧
        </div>
      </div>
    </footer>
  );
}
