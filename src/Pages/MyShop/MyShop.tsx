import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function MyShop() {
  return (
    <section className="s-p-MyShop">
      <NavBarToPage />

     
      <div className="s-p-MyShop__image-wrapper">
        <img
          src="../images/projects/thumb-My-shop.png"
          alt="Thumbnail do projeto MyShop"
          className="s-p-MyShop__image"
        />
      </div>

      
      <article className="s-p-MyShop__overview">
        <h1 className="s-p-MyShop__title">
        E-commerce desenvolvido com React, TypeScript e Styled Components
        </h1>
        <p className="s-p-MyShop__text">
          MyShop é um projeto que simula um sistema de e-commerce, focado no desenvolvimento front-end moderno. Construído utilizando React para criação de componentes reutilizáveis e TypeScript para garantir tipagem estática e maior segurança no código, este projeto incorpora Styled Components para uma estilização modular e dinâmica. O uso do bundler Vite trouxe uma experiência de desenvolvimento otimizada, com build rápido e hot-reload eficiente.
        </p>
      </article>

      
      <article className="s-p-MyShop__details">
        <h2 className="s-p-MyShop__subtitle">Desafios Técnicos e Funcionalidades</h2>
        <p className="s-p-MyShop__text">
          Durante o desenvolvimento, o foco foi aplicar boas práticas de componentização para manter o código organizado e reutilizável. A gestão de estado foi cuidadosamente planejada para garantir a fluidez da interface, além de permitir a escalabilidade do projeto. A integração dos Styled Components possibilitou a criação de temas dinâmicos e uma melhor manutenção do CSS, evitando conflitos globais.
        </p>
        <p className="s-p-MyShop__text">
          Foram implementadas funcionalidades como catálogo de produtos, carrinho de compras, e páginas responsivas, sempre pensando na experiência do usuário e no desempenho da aplicação. O projeto também serviu como laboratório para consolidar o uso de tipagem avançada do TypeScript, incluindo tipos genéricos e interfaces para componentes.
        </p>
      </article>

      
      <article className="s-p-MyShop__tech">
        <h2 className="s-p-MyShop__subtitle">Tecnologias Utilizadas</h2>
        <ul className="s-p-MyShop__list">
          <li><strong>React:</strong> Biblioteca JavaScript para construção de interfaces declarativas e reativas.</li>
          <li><strong>TypeScript:</strong> Superset do JavaScript com tipagem estática, que aumenta a robustez do código.</li>
          <li><strong>Styled Components:</strong> Biblioteca para CSS-in-JS, que permite estilos dinâmicos e scoped.</li>
          <li><strong>Vite:</strong> Bundler moderno que oferece build rápido e ambiente de desenvolvimento com hot reload.</li>
          <li><strong>Responsividade:</strong> CSS flexbox e media queries para suporte a múltiplos dispositivos.</li>
        </ul>
      </article>
      <section className="s-p-MyShop__links">
        <a
          href="https://myshop-tawny.vercel.app"
          target="_blank"
          className="s-p-MyShop__btn"
        >
          Ver Projeto Online
        </a>
        <a
          href="https://github.com/YuOliveira-dev/MyShop"
          target="_blank"
          className="s-p-MyShop__btn"
        >
          Ver Repositório no GitHub
        </a>
      </section>
    </section>
  );
}

export default MyShop;
