import { useEffect, useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/emailjs";
import { budgetOptions, contactItems, services, socialLinks } from "../data";
import { contactIcons, CheckIcon, ArrowIcon } from "./Icons";
import type { ServiceRequest } from "../types";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact({ serviceRequest }: { serviceRequest: ServiceRequest | null }) {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const focusName = useRef(false);
  const submitting = useRef(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (!serviceRequest) return;
    setSelectedService(serviceRequest.value);
    setStatus(current => current === "success" ? "idle" : current);
    const frame = requestAnimationFrame(() => serviceRef.current?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [serviceRequest]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus({ preventScroll: true });
    if (status === "idle" && focusName.current) {
      nameRef.current?.focus({ preventScroll: true });
      focusName.current = false;
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || submitting.current) return;
    submitting.current = true;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  const resetForm = () => {
    setSelectedService("");
    focusName.current = true;
    setStatus("idle");
  };

  return (
    <section id="contato" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-label">Toda construção começa aqui</p>
          <h2 id="contact-title">Qual é a sua<br />próxima ideia?</h2>
          <p>Conte o que você quer transformar.<br />Vamos encontrar o caminho para fazer acontecer.</p>
          <div className="contact-methods">
            {contactItems.map(({ icon, label, value, href }) => (
              <div key={label} className="contact-method">
                <span aria-hidden="true">{contactIcons[icon]}</span>
                <div><span>{label}</span>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div>
              </div>
            ))}
          </div>
          <a className="contact-social text-link" href={socialLinks.instagram} target="_blank" rel="noreferrer">
            Conheça a Artic no Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-form-panel">
          {status === "success" ? (
            <div className="form-success">
              <span aria-hidden="true"><CheckIcon /></span>
              <h3 ref={successRef} tabIndex={-1}>Conversa iniciada.</h3>
              <p>Recebi sua mensagem. Retorno em até 24 horas para falar sobre a sua ideia.</p>
              <button className="button-secondary" onClick={resetForm}>Enviar outra mensagem</button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <h3>Vamos construir juntos.</h3>
                <p>Análise inicial gratuita. Retorno em até 24h.</p>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} aria-busy={status === "loading"}>
                <p className="form-required-note">Os campos com * são obrigatórios.</p>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Seu nome <span aria-hidden="true">*</span></label>
                    <input ref={nameRef} id="contact-name" name="from_name" autoComplete="name" required placeholder="Como posso te chamar?" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">E-mail <span aria-hidden="true">*</span></label>
                    <input id="contact-email" name="from_email" autoComplete="email" type="email" required placeholder="voce@empresa.com" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-service">O que você precisa?</label>
                  <select ref={serviceRef} id="contact-service" name="service" value={selectedService} onChange={event => setSelectedService(event.target.value)}>
                    <option value="">Ainda estou explorando as possibilidades</option>
                    {services.map(({ id, formLabel }) => <option key={id}>{formLabel}</option>)}
                    <option>Outros / Não sei ainda</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">Conte um pouco sobre a ideia <span aria-hidden="true">*</span></label>
                  <textarea id="contact-message" name="message" rows={4} required placeholder="O que você quer construir ou melhorar?" />
                </div>
                <details className="form-options">
                  <summary>Detalhes opcionais <span>Investimento estimado</span></summary>
                  <div className="form-field">
                    <label htmlFor="contact-budget">Qual faixa você tem em mente?</label>
                    <select id="contact-budget" name="budget" defaultValue="">
                      <option value="">Prefiro conversar primeiro</option>
                      {budgetOptions.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </div>
                </details>
                {status === "error" && (
                  <div className="form-error" role="alert">
                    <p>Não foi possível enviar. Seus dados continuam aqui para tentar novamente.</p>
                    <div>{contactItems.filter(item => item.href).map(({ label, href }) => <a key={label} href={href}>Falar por {label}</a>)}</div>
                  </div>
                )}
                <button className="button-primary form-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando mensagem..." : "Enviar mensagem"}<ArrowIcon />
                </button>
                <p className="form-note">Sem compromisso. Só uma boa conversa sobre o seu projeto.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
