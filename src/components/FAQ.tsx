import { faqItems } from "../data";

export default function FAQ() {
  return (
    <section id="duvidas" className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="section-label">Antes de começar</p>
          <h2 id="faq-title">Vamos tirar<br />as dúvidas?</h2>
          <p>Você não precisa chegar com todas as respostas. O primeiro passo é conversar.</p>
          <a className="text-link" href="#contato">Tenho outra pergunta <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="faq-item">
              <summary>{question}<span aria-hidden="true" className="faq-toggle" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
