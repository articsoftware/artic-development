import { faqItems } from "../data";
import { useState } from "react";
import { Disclosure, DisclosureIcon, MotionLink } from "./Motion";

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const toggle = (index: number) => setOpen(previous => {
    const next = new Set(previous);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });
  return (
    <section id="duvidas" className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">Antes de começar</p>
          <h2 id="faq-title">Vamos tirar as dúvidas?</h2>
          <p>Você não precisa chegar com todas as respostas. O primeiro passo é conversar.</p>
          <MotionLink className="text-link" href="#contato">Tenho outra pergunta <span aria-hidden="true">↗</span></MotionLink>
        </div>
        <div className="faq-list">
          {faqItems.map(({ question, answer }, index) => (
            <div key={question} className="faq-item">
              <h3><button type="button" className="faq-trigger" id={`faq-trigger-${index}`}
                aria-expanded={open.has(index)} aria-controls={`faq-panel-${index}`} onClick={() => toggle(index)}>
                {question}<DisclosureIcon open={open.has(index)} />
              </button></h3>
              <Disclosure open={open.has(index)} id={`faq-panel-${index}`} labelledBy={`faq-trigger-${index}`}>
                <p className="faq-answer">{answer}</p>
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
