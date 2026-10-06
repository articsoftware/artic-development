import { m } from "framer-motion";
import { useUiMotion } from "./Motion";

const stats = [
  {
    tag: "EXPERIÊNCIA",
    metric: "+3 ANOS",
    title: "Construindo de ponta a ponta",
    desc: "Da primeira arquitetura à publicação e suporte em produção.",
  },
  {
    tag: "MODELO",
    metric: "100%",
    title: "Código autoral & direto",
    desc: "Sem intermediários: quem entende a sua ideia é quem desenvolve o sistema.",
  },
  {
    tag: "ORIGEM",
    metric: "CURITIBA",
    title: "Atendimento remoto & global",
    desc: "Raízes em Curitiba (PR), entregando tecnologia para onde sua ideia estiver.",
  },
];

export default function Metrics() {
  const { reduced, transition } = useUiMotion();
  const enter = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { ...transition(0.45), delay: reduced ? 0 : index * 0.08 },
  });

  return (
    <section className="metrics-section" aria-label="Credenciais e números da Artic">
      <div className="container">
        <div className="metrics-grid">
          {stats.map((item, index) => (
            <m.div key={item.tag} className="metric-card" {...enter(index)}>
              <div className="metric-top">
                <span className="metric-badge">{item.tag}</span>
              </div>
              <p className="metric-number">{item.metric}</p>
              <h3 className="metric-title">{item.title}</h3>
              <p className="metric-desc">{item.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
