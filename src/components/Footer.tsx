import { navLinks } from "../data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top"><p>Ideias ambiciosas.<br />Execução precisa.</p><nav aria-label="Navegação do rodapé">{navLinks.map(({ id, label }) => <a key={id} href={"#" + id}>{label}</a>)}</nav><a className="back-to-top" href="#hero">Voltar ao topo <span aria-hidden="true">↑</span></a></div>
        <div className="footer-wordmark" aria-label="Artic Development"><span>Artic</span><span>Development</span></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Artic Development</p><p>Artic Desenvolvimento de Software LTDA<br />CNPJ 69.133.740/0001-00 · São José dos Pinhais, PR</p><span>Feito por João Pedro Plinta.</span></div>
      </div>
    </footer>
  );
}
