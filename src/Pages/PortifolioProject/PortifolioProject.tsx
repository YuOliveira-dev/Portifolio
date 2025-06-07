import NavBarToPage from "../../components/NavBarToPage/NavBarToPage"
import "./styles.css"


function PortifolioProject() {
    return(
      <section className="c-p-p">
      <div className="c-p-p__wrapper">

          <NavBarToPage />
        <div className="s-t-p">
          <img
            src="../images/projects/thumb-portifolio2.jpg"
            alt="Miniatura do Projeto Portfólio"
            className="s-t-p__img"
          />
        </div>

        <header className="s-h-p">
          <h1 className="s-h-p__title">
            Projeto UX/UI, Front-End e Integração com API Node.js
          </h1>
          <p className="s-h-p__desc">
            Uma aplicação full stack completa desenvolvida para apresentar minhas habilidades em design de interface, desenvolvimento front-end e integração com APIs back-end com suporte a banco de dados.
          </p>
        </header>

        <section className="s-o-p">
          <h2 className="s-o-p__title">Visão Geral</h2>
          <p className="s-o-p__text">
            Este projeto foi criado com o objetivo de ser um portfólio funcional e tecnicamente sólido. Desenvolvido utilizando <strong>React com TypeScript</strong> no front-end e uma <strong>API Node.js + Express</strong> no back-end, ele consome dados reais de um banco de dados estruturado.
          </p>
        </section>

        <section className="s-t-pj">
          <h2 className="s-t-pj__title">Tecnologias Utilizadas</h2>
          <ul className="s-t-pj__list">
            <li><strong>React + TypeScript:</strong> componentes modulares e segurança de tipos no front-end.</li>
            <li><strong>Node.js + Express:</strong> API RESTful e manipulação de requisições.</li>
            <li><strong>Banco de Dados:</strong> responsável por armazenar e servir os dados dos projetos.</li>
            <li><strong>CSS Personalizado:</strong> estilos gerenciados em um único arquivo <code>styles.css</code>.</li>
            <li><strong>Vercel & Render:</strong> utilizados para deploy do front-end e back-end, respectivamente.</li>
          </ul>
        </section>

        <section className="s-s-p">
          <h2 className="s-s-p__title">Estrutura & Organização</h2>
          <ul className="s-s-p__list">
            <li><strong>Intro:</strong> seção inicial com chamada para ação e impacto visual.</li>
            <li><strong>Skills:</strong> lista de ferramentas e tecnologias utilizadas no dia a dia.</li>
            <li><strong>Projetos:</strong> seção alimentada dinamicamente pela API.</li>
            <li><strong>Design Gráfico:</strong> galeria com trabalhos visuais desenvolvidos.</li>
            <li><strong>Contato:</strong> formulário funcional com validação e feedback.</li>
          </ul>
        </section>

        <section className="s-l-p">
          <h2 className="s-l-p__title">Aprendizados & Insights</h2>
          <ul className="s-l-p__list">
            <li>Integração completa entre front-end e back-end.</li>
            <li>Construção e documentação de uma API RESTful.</li>
            <li>Consumo de dados assíncronos com React.</li>
            <li>Arquitetura limpa e componentes reutilizáveis.</li>
            <li>Melhoria do fluxo de deploy e versionamento.</li>
          </ul>
        </section>

        <section className="s-r-p">
          <h2 className="s-r-p__title">Resultado Final</h2>
          <p className="s-r-p__text">
            Este projeto representa um marco profissional, uma aplicação full stack completa que demonstra minha capacidade de projetar, desenvolver e publicar soluções focadas em escalabilidade, código limpo e experiência do usuário.
          </p>
        </section>

        <div className="s-lk-p">
          <a
            href="https://github.com/YuOliveira-dev/Portifolio"
            target="_blank"
            className="s-lk-p__btn"
          >
            Ver no GitHub
          </a>
           <a
            href="https://github.com/YuOliveira-dev/api-portifolio"
            target="_blank"
            className="s-lk-p__btn"
          >
            Veja a API no GitHub
          </a>
        </div>

      </div>
    </section>
    )
}


export default PortifolioProject