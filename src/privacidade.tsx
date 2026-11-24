import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Logo from "./components/Logo";
import { privacyPolicy } from "./data";

function PrivacyPolicy() {
  const { email, updatedAt, intro, sections } = privacyPolicy;

  return (
    <div className="site-shell">
      <header className="container policy-header">
        <a href="/" aria-label="Artic Development — página inicial">
          <Logo size="sm" />
        </a>
        <a href="/" className="policy-back">← Voltar ao site</a>
      </header>

      <main id="main-content" className="container policy">
        <h1>Política de Privacidade</h1>
        <p className="policy-updated">Atualizada em {updatedAt}</p>
        <p className="policy-intro">{intro}</p>

        {sections.map(({ title, content }) => (
          <section key={title}>
            <h2>{title}</h2>
            {content.map((block, index) =>
              Array.isArray(block) ? (
                <ul key={index}>{block.map(item => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p key={index}>{block}</p>
              )
            )}
          </section>
        ))}

        <section className="policy-contact">
          <h2>Fale sobre os seus dados</h2>
          <p>
            Para dúvidas ou pedidos sobre os seus dados pessoais, escreva para{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);
