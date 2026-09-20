import { ArrowIcon } from "./Icons";

const WATERLINE = 628;

const facets = [
  { d: "m89 629 128-202 123 229Z", fill: "#0D1525", stroke: "#38BEFF", strokeOpacity: .18 },
  { d: "m217 427-28 207 151 22Z", fill: "#38BEFF", fillOpacity: .07 },
  { d: "m204 628 213-478 247 455-211 79Z", fill: "url(#ice-shadow)" },
  { d: "m417 150-213 478 249 56Z", fill: "url(#ice-light)" },
  { d: "m417 150-24 246 60 288 31-289Z", fill: "#E8F4FF", fillOpacity: .11 },
  { d: "m417 150-90 202 66 44Z", fill: "#E8F4FF", fillOpacity: .34 },
  { d: "m327 352-123 276 189-232Z", fill: "#E8F4FF", fillOpacity: .12 },
  { d: "m393 396-189 232 249 56Z", fill: "#38BEFF", fillOpacity: .14 },
  { d: "m417 150 67 245 87 41Z", fill: "#38BEFF", fillOpacity: .3 },
  { d: "m484 395 180 210-93-169Z", fill: "#38BEFF", fillOpacity: .12 },
  { d: "m453 684 31-289 180 210Z", fill: "#080E1A", fillOpacity: .24 },
  // Foreground mountain painted last so it occludes the rear edges.
  { d: "m534 659 109-260 129 238Z", fill: "url(#ice-shadow)", stroke: "#38BEFF", strokeOpacity: .16 },
  { d: "m643 399-109 260 80-15Z", fill: "url(#ice-light)", fillOpacity: .55 },
];

function Facets() {
  return <>{facets.map(f => <path key={f.d} {...f} />)}</>;
}

function IceFormation() {
  return (
    <div className="ice-scene" aria-hidden="true">
      <svg viewBox="0 0 820 800" fill="none">
        <defs>
          <linearGradient id="ice-light" x1="410" y1="80" x2="260" y2="660" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8F4FF"/><stop offset=".46" stopColor="#8BA8C4"/><stop offset="1" stopColor="#38BEFF" stopOpacity=".08"/>
          </linearGradient>
          <linearGradient id="ice-shadow" x1="430" y1="110" x2="670" y2="680" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BEFF"/><stop offset=".65" stopColor="#0D1525"/><stop offset="1" stopColor="#080E1A"/>
          </linearGradient>
          <linearGradient id="ice-edge" x1="420" y1="140" x2="420" y2="670" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8F4FF"/><stop offset="1" stopColor="#38BEFF" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="ice-halo"><stop stopColor="#38BEFF" stopOpacity=".18"/><stop offset="1" stopColor="#38BEFF" stopOpacity="0"/></radialGradient>
          <linearGradient id="ice-waterline" x1="60" y1="0" x2="780" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BEFF" stopOpacity="0"/><stop offset=".5" stopColor="#0FFFCB" stopOpacity=".85"/><stop offset="1" stopColor="#38BEFF" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="ice-reflect-fade" x1="0" y1={WATERLINE} x2="0" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#080E1A" stopOpacity="0"/><stop offset="1" stopColor="#080E1A" stopOpacity="1"/>
          </linearGradient>
        </defs>

        <ellipse cx="440" cy="410" rx="370" ry="370" fill="url(#ice-halo)"/>

        {/* Iceberg above the waterline */}
        <Facets/>
        <path d="m417 150-213 478m213-478 36 534" stroke="url(#ice-edge)" strokeWidth="1.5"/>
        <path d="m417 150 247 455" stroke="#38BEFF" strokeOpacity=".5"/>

        {/* Mirrored reflection below the waterline, fading into the dark */}
        <g opacity=".4" transform={`matrix(1 0 0 -1 0 ${WATERLINE * 2})`}>
          <Facets/>
        </g>
        <g stroke="#38BEFF" strokeOpacity=".16">
          {[0, 1, 2, 3, 4].map(i => <ellipse key={i} cx="434" cy={WATERLINE + 3} rx={190 + i * 38} ry={33 + i * 15} />)}
        </g>
        <rect x="0" y={WATERLINE} width="820" height={800 - WATERLINE} fill="url(#ice-reflect-fade)"/>

        <rect x="60" y={WATERLINE - 1} width="720" height="1.4" fill="url(#ice-waterline)"/>
      </svg>
      <div className="ice-note"><span className="ice-note-line" />Da superfície à estrutura.<br />Cada detalhe importa.</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-category">Desenvolvimento de software sob medida</p>
          <h1>Código que<br />não derrete<br />sob pressão.</h1>
          <p className="hero-description">Sites, aplicativos e sistemas para o seu negócio. Da primeira conversa à entrega, você fala com quem desenvolve.</p>
          <div className="hero-actions">
            <a href="#contato" className="button-primary">Vamos conversar <ArrowIcon /></a>
            <a href="#servicos" className="text-link">Explore os serviços <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <IceFormation />
        <div className="hero-signature">
          <span>Contato direto.<br /><strong>Do começo ao próximo passo.</strong></span>
          <span>Curitiba, Brasil<br /><strong>Atendimento remoto</strong></span>
          <p className="availability"><span /> Disponível para novos projetos</p>
          <a href="#servicos" aria-label="Explorar serviços" className="scroll-cue">↓</a>
        </div>
      </div>
    </section>
  );
}
