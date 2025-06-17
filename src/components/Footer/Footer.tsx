
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-version">v1.0 - 2025</p>
        <a
          href="/Yuri Carvalho.pdf"
          download
          className="footer-link"
        >
          Baixar currículo
        </a>
        <p className="footer-creditos">
          Desenvolvido por <strong>Yuri Carvalho</strong> • Desenvolvedor Full-Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
