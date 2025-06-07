import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function PixNaSumUp() {
  return (
    <section className="c-p-sumup">
      <div className="c-p-sumup__wrapper">

        <NavBarToPage />

        <div className="s-t-sumup">
          <img
            src="../images/screenProjects/SumUp/ThumbSumUp.webp"
            alt="Thumb do projeto Pix na SumUp"
            className="s-t-sumup__img"
          />
        </div>

        <header className="s-h-sumup">
          <h1 className="s-h-sumup__title">
            Projeto UX – Interface de PIX para SumUp
          </h1>
          <p className="s-h-sumup__desc">
            Landing page focada em arquitetura da informação, hierarquia visual e responsividade, aplicada como exercício prático durante o curso de UX/UI Design da EBAC.
          </p>
        </header>

        <section className="s-o-sumup">
          <h2 className="s-o-sumup__title">Arquitetura e Hierarquia</h2>
          <p className="s-o-sumup__text">
            O projeto apresenta uma <strong>landing page</strong> estruturada com base em princípios sólidos de <strong>design visual</strong> e <strong>arquitetura da informação</strong>. A disposição dos elementos segue uma hierarquia bem definida, com uso estratégico de <strong>tipografia escalonada</strong> para guiar o usuário da headline até os call-to-actions. Os contrastes de cor e os espaçamentos proporcionais garantem legibilidade e foco visual. A estrutura é construída em seções funcionais, respeitando o comportamento de leitura em F e facilitando a <strong>escaneabilidade do conteúdo</strong>.
          </p>
        </section>

        <section className="s-s-sumup">
          <h2 className="s-s-sumup__title">Componentização e Responsividade</h2>
          <p className="s-s-sumup__text">
            O layout utiliza um grid de 12 colunas, garantindo <strong>consistência</strong> entre breakpoints e alinhamento preciso. Os componentes são modularizados como botões e ícones seguindo o conceito de <strong>design atômico</strong>, permitindo <strong>reutilização e escalabilidade</strong>. A responsividade é implementada com foco mobile-first, assegurando performance visual e <strong>acessibilidade</strong> em qualquer dispositivo.
          </p>
        </section>

        <div className="s-lk-sumup">
          <a
            href="https://www.figma.com/design/dCsS536xJFi9GP0lDJoyQ1/Landing-page?node-id=0-1&t=WxsEyo43UjhkjEHD-1"
            target="_blank"
            rel="noopener noreferrer"
            className="s-lk-sumup__btn"
          >
            Ver no Figma
          </a>
        </div>

      </div>
    </section>
  );
}

export default PixNaSumUp;
