import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function SystemInPhp() {
  return (
    <section className="c-p-php">
      <div className="c-p-php__wrapper">

        <NavBarToPage />

        <div className="s-t-php">
          <img
            src="../images/projects/thumb-php.png"
            alt="Thumbnail do projeto Sistema em PHP"
            className="s-t-php__img"
          />
        </div>

        <header className="s-h-php">
          <h1 className="s-h-php__title">
            Projeto de Estudo: Sistema de Login e Cadastro com <strong>PHP e SQLite</strong>
          </h1>
          <p className="s-h-php__desc">
            Projeto desenvolvido para aprendizado em backend, focando em PHP e banco SQLite. Simula um sistema funcional de autenticação com cadastro e login, aplicando conceitos como sessões, validação, segurança com hashing de senhas e prevenção contra SQL Injection. Utilização do Docker para criação de ambiente replicável e deploy.
          </p>
        </header>

        <section className="s-o-php">
          <h2 className="s-o-php__title">Objetivos e Aprendizados</h2>
          <p className="s-o-php__text">
            Durante o desenvolvimento, aprofundei meu conhecimento sobre a estrutura cliente-servidor, fluxo de autenticação e a separação entre front-end e back-end. O projeto consolidou conhecimentos em PHP e bancos relacionais, preparando a base para aplicações mais complexas.
          </p>
        </section>

        <section className="s-lk-php">
          <a
            href="https://sistema-em-php.onrender.com"
            target="_blank"
            className="s-lk-php__btn"
          >
            Visualizar Projeto
          </a>
          <a
            href="https://github.com/YuOliveira-dev/Sistema-em-PHP"
            target="_blank"
            className="s-lk-php__btn s-lk-php__btn--alt"
          >
            Ver Repositório
          </a>
        </section>

      </div>
    </section>
  );
}

export default SystemInPhp;
