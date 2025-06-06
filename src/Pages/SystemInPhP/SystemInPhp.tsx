import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function SystemInPhp() {
  return (
    <section className="sec-b-p">
      <NavBarToPage />
      <div className="img-sec">
        <img
          src="../images/projects/thumb-php.png"
          alt="thumb project php"
          className="img-t-p"
        />
      </div>
      <div className="s-b-p">
        <h2 className="t-b-p">
          Projeto de Estudo: Sistema de Login e Cadastro com{" "}
          <strong>PHP e SQlite</strong>
        </h2>
        <p className="p-b-p">
          Este projeto foi desenvolvido como parte do meu processo de
          aprendizagem em <strong>backend,</strong> com foco na linguagem{" "}
          <strong>PHP </strong>e no uso de banco de dados{" "}
          <strong>SQlite.</strong> A aplicação simula um sistema funcional de
          autenticação de usuários, com páginas para cadastro e login que
          interagem diretamente com o banco, aplicando conceitos essenciais como
          sessões, validação de dados, e <strong>segurança</strong> com hashing
          de senhas e prevenção de <strong>SQL Injection.</strong> <br />
          <br />
          Durante o desenvolvimento, aprofundei meu entendimento sobre a
          estrutura <strong>cliente-servidor,</strong> a lógica por trás do
          fluxo de autenticação e a importância da separação de
          responsabilidades entre front-end e back-end. Além disso, utilizei{" "}
          <strong>Docker </strong>para criar um ambiente de desenvolvimento
          replicável, o que me proporcionou uma introdução prática à
          containerização e ao <strong>deploy</strong> de aplicações.
          <br />
          <br />
          Esse projeto foi <strong>fundamental </strong>para consolidar meu
          conhecimento em <strong>PHP </strong>e bancos relacionais, além de
          preparar a base para lidar com autenticação e persistência de dados em
          aplicações mais complexas no futuro.
        </p>
      </div>
      <div className="links-Sys-php">
        <a
          target="_blank"
          className="btn-to-f-sys-p"
          href="https://sistema-em-php.onrender.com"
        >
          Clique aqui para visualizar o{" "}
          <span className="spn-to-f-sys-p">projeto!</span>
        </a>
        <br />
        <br />
        <a
          target="_blank"
          className="btn-to-f-sys-p"
          href="https://github.com/YuOliveira-dev/Sistema-em-PHP"
        >
          Clique aqui para visualizar o{" "}
          <span className="spn-to-f-sys-p">repositório!</span>
        </a>
        <br />
        <br />
      </div>
    </section>
  );
}

export default SystemInPhp;
