import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/emailjs";
import { contactItems, socialLinks } from "../data";
import { contactIcons, CheckIcon, ArrowIcon } from "./Icons";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === "loading") return;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-label">Seu próximo passo</p>
          <h2>Boas ideias<br />merecem sair<br /> do papel.</h2>
          <p>Me conta o que você tem em mente.<br />A gente descobre o melhor caminho juntos.</p>
          <div className="contact-methods">
            {contactItems.map(({ icon, label, value, href }) => <div key={label} className="contact-method"><span aria-hidden="true">{contactIcons[icon]}</span><div><span>{label}</span>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div></div>)}
          </div>
          <a className="contact-social text-link" href={socialLinks.instagram} target="_blank" rel="noreferrer">Conheça a Artic no Instagram <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-form-panel">
          {status === "success" ? (
            <div className="form-success" role="status"><CheckIcon /><h3>Conversa iniciada.</h3><p>Recebi sua mensagem. Retorno em até 24 horas para falar sobre a sua ideia.</p><button className="button-secondary" onClick={() => setStatus("idle")}>Enviar outra mensagem</button></div>
          ) : (
            <>
              <div className="form-heading"><h3>Vamos construir juntos.</h3><p>Análise inicial gratuita. Retorno em até 24h.</p></div>
              <form ref={formRef} onSubmit={handleSubmit} aria-busy={status === "loading"}>
                <div className="form-row">
                  <div className="form-field"><label htmlFor="contact-name">Seu nome <span aria-hidden="true">*</span></label><input id="contact-name" name="from_name" autoComplete="name" required placeholder="Como posso te chamar?" /></div>
                  <div className="form-field"><label htmlFor="contact-email">E-mail <span aria-hidden="true">*</span></label><input id="contact-email" name="from_email" autoComplete="email" type="email" required placeholder="voce@empresa.com" /></div>
                </div>
                <div className="form-field"><label htmlFor="contact-service">O que você precisa?</label><select id="contact-service" name="service" defaultValue=""><option value="" disabled>Selecione o tipo de projeto</option><option>Site ou sistema web</option><option>App mobile</option><option>API / Back-end</option><option>Automações e integrações</option><option>Otimização de processos</option><option>Outros / Não sei ainda</option></select></div>
                <div className="form-field"><label htmlFor="contact-budget">Investimento estimado <span>(opcional)</span></label><select id="contact-budget" name="budget" defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>Até R$ 5.000</option><option>R$ 5.000 – R$ 15.000</option><option>R$ 15.000 – R$ 50.000</option><option>Acima de R$ 50.000</option><option>A definir / Em aberto</option></select></div>
                <div className="form-field"><label htmlFor="contact-message">Conte um pouco sobre a ideia <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={4} required placeholder="O que você quer construir ou melhorar?" /></div>
                {status === "error" && <p className="form-error" role="alert">Não foi possível enviar sua mensagem. Tente novamente ou fale comigo pelo e-mail ao lado.</p>}
                <button className="button-primary form-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Enviando mensagem..." : "Enviar mensagem"}<ArrowIcon /></button>
                <p className="form-note">Sem compromisso. Só uma boa conversa sobre o seu projeto.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
