import { useState, useRef, FormEvent, ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/emailjs";
import { contactItems } from "../data";
import { contactIcons, CheckIcon } from "./Icons";
import type { ContactItem } from "../types";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldCls =
  "w-full bg-[#080E1A] border border-[#1E6FD9]/30 text-[#E8F4FF] px-4 py-3 text-sm " +
  "focus:border-[#38BEFF] focus:outline-none transition-colors placeholder:text-[#8BA8C4]/40 rounded-sm";

function Label({ children }: { children: ReactNode }) {
  return <label className="text-xs uppercase tracking-wider text-[#8BA8C4]/60 block mb-2">{children}</label>;
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 text-center">
      <div className="w-14 h-14 rounded-full border border-[#38BEFF]/50 flex items-center justify-center mb-5 text-[#38BEFF]"
        style={{ boxShadow: "0 0 24px rgba(56,190,255,.2)" }}>
        <CheckIcon />
      </div>
      <h3 className="text-2xl font-bold text-[#E8F4FF] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
        Mensagem enviada! ❄️
      </h3>
      <p className="text-[#8BA8C4] text-sm mb-6">Retorno em até 24 horas. Obrigado pelo contato!</p>
      <button onClick={onReset}
        className="text-xs uppercase tracking-widest text-[#38BEFF] underline hover:text-[#0FFFCB] transition-colors">
        Enviar outra mensagem
      </button>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <span className="text-xs uppercase tracking-widest text-[#38BEFF] block mb-3">Contato</span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#E8F4FF] mb-5 leading-tight"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        Vamos construir<br />
        <span style={{ color: "#38BEFF" }}>algo juntos</span>
      </h2>
      <p className="text-[#8BA8C4] text-sm leading-relaxed mb-10">
        Me conta sobre o seu projeto. Análise inicial gratuita e retorno
        em até 24 horas — sem enrolação.
      </p>

      <div className="flex flex-col gap-4">
        {contactItems.map(({ icon, label, value }: ContactItem) => (
          <div key={label}
            className="flex items-center gap-4 border border-[#1E6FD9]/20 bg-[#0D1525] px-5 py-4
            hover:border-[#38BEFF]/40 transition-colors duration-200 group">
            <span className="text-[#38BEFF] flex-shrink-0">{contactIcons[icon]}</span>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8BA8C4]/50 mb-0.5">{label}</div>
              <div className="text-[#E8F4FF] text-sm">{value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram */}
      <a href="https://www.instagram.com/articweb.development/" target="_blank" rel="noreferrer"
        className="mt-4 flex items-center gap-4 border border-[#1E6FD9]/20 bg-[#0D1525] px-5 py-4
        hover:border-[#38BEFF]/40 transition-colors duration-200">
        <span className="text-[#38BEFF]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </span>
        <div>
          <div className="text-xs uppercase tracking-wider text-[#8BA8C4]/50 mb-0.5">Instagram</div>
          <div className="text-[#E8F4FF] text-sm">@articweb.development</div>
        </div>
      </a>
    </div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (status === "success") return <SuccessMessage onReset={() => { setStatus("idle"); formRef.current?.reset(); }} />;

  return (
    <>
      <h3 className="text-2xl font-bold text-[#E8F4FF] mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
        Iniciar projeto
      </h3>
      <p className="text-[#8BA8C4]/60 text-sm mb-7">Preencha e retorno em até 24h.</p>

      {status === "error" && (
        <div className="mb-5 border border-red-800/50 bg-red-950/20 text-red-400 text-xs px-4 py-3 rounded-sm">
          Erro ao enviar. Verifique as configurações do EmailJS ou entre em contato pelo Instagram.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div><Label>Nome</Label><input name="from_name" type="text" required placeholder="Seu nome" className={fieldCls} /></div>
          <div><Label>E-mail</Label><input name="from_email" type="email" required placeholder="seu@email.com" className={fieldCls} /></div>
        </div>
        <div className="mb-4">
          <Label>Tipo de projeto</Label>
          <select name="service" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecione um serviço</option>
            <option>Site ou sistema web</option>
            <option>App mobile</option>
            <option>API / Back-end</option>
            <option>Automações e integrações</option>
            <option>Otimização de processos</option>
            <option>Outros / Não sei ainda</option>
          </select>
        </div>
        <div className="mb-4">
          <Label>Orçamento estimado</Label>
          <select name="budget" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecione uma faixa</option>
            <option>Até R$ 5.000</option>
            <option>R$ 5.000 – R$ 15.000</option>
            <option>R$ 15.000 – R$ 50.000</option>
            <option>Acima de R$ 50.000</option>
            <option>A definir / Em aberto</option>
          </select>
        </div>
        <div className="mb-6">
          <Label>Mensagem</Label>
          <textarea name="message" rows={4} required
            placeholder="Conte sobre seu projeto, ideia ou desafio..."
            className={`${fieldCls} resize-none`} />
        </div>
        <button type="submit" disabled={status === "loading"}
          className="w-full text-[#080E1A] text-xs uppercase tracking-widest font-semibold py-4
          transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg, #1E6FD9, #38BEFF)" }}>
          {status === "loading" ? "Enviando..." : "Enviar mensagem →"}
        </button>
      </form>
    </>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-[#0D1525]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <ContactInfo />
        <div className="bg-[#080E1A] border border-[#1E6FD9]/20 p-8 min-h-[480px] flex flex-col justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
