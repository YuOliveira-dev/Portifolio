import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function MyShop() {
  return (
    <section className="sec-b-m">
      <NavBarToPage />
      <div className="img-sec">
        <img
          src="../images/projects/thumb-My-shop.png"
          alt="thumb project php"
          className="img-t-m"
        />
      </div>
      <div className="s-b-m">
        <h2 className="t-b-m">
          MyShop: Desenvolvimento de um E-commerce com React, TypeScript e
          Styled Components
        </h2>
        <p className="p-b-m">
          O projeto MyShop é uma aplicação de e-commerce desenvolvida com o
          objetivo de aprimorar habilidades em React, TypeScript e Styled
          Components. Utilizando o Vite como bundler para uma experiência de
          desenvolvimento mais ágil, o projeto incorpora práticas modernas de
          desenvolvimento front-end, como a tipagem estática proporcionada pelo
          TypeScript e a estilização modular com Styled Components. Durante o
          desenvolvimento, foram aplicadas técnicas de componentização,
          gerenciamento de estado e integração de estilos dinâmicos, resultando
          em uma interface responsiva e escalável. Este projeto serviu como um
          laboratório para consolidar conhecimentos em tecnologias modernas do
          ecossistema JavaScript, além de reforçar boas práticas de organização
          de código e estruturação de projetos.
        </p>
      </div>
      <div className="links-My-Shop">
        <a
          target="_blank"
          className="btn-to-f-my-shop"
          href="https://sistema-em-php.onrender.com"
        >
          Clique aqui para visualizar o{" "}
          <span className="sp-t-my-shop">projeto!</span>
        </a>
        <br />
        <br />
        <a
          target="_blank"
          className="btn-to-f-my-shop"
          href="https://sistema-em-php.onrender.com"
        >
          Clique aqui para visualizar o{" "}
          <span className="sp-t-my-shop">repositório!</span>
        </a>
        <br />
        <br />
      </div>
    </section>
  );
}

export default MyShop;
