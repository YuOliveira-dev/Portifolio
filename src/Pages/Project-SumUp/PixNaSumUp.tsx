import "./styles.css"
import NavBarToPage from "../../components/NavBarToPage/NavBarToPage"


function PixNaSumUp() {
    return(
        <div className="containerProjectSumUp">
          <NavBarToPage />
          <section className="projectSumUpThumb">
            <img src="../../images/screenProjects/SumUp/ThumbSumUp.webp" alt="" className="thumSumUp"/>
          </section>
          <section className="sectionTextsSumUp">
            <div className="sec-1-sumup">
            <h2 className="t-1-sumup">Arquitetura da Interface e Hierarquia de Informação</h2>
            <p className="p-1-sumup">
               O projeto apresenta uma landing page estruturada com base em princípios sólidos de design visual e arquitetura da informação. A disposição dos elementos segue uma hierarquia bem definida, com uso estratégico de tipografia escalonada para guiar o usuário da headline até os call-to-actions. Os contrastes de cor e os espaçamentos proporcionais (padding e margin) garantem legibilidade e foco visual. A estrutura é construída em seções funcionais e intuitivas, como hero, sobre, benefícios e contato, respeitando o comportamento de leitura em F (F-pattern) e facilitando a escaneabilidade do conteúdo.
            </p>
            </div>
            <div className="sec-2-sumup">
                <h2 className="t-2-sumup">Componentização, Grid System e Responsividade</h2>
                <p className="p-2-sumup">
                   O layout utiliza um grid system de 12 colunas, garantindo consistência entre os breakpoints e alinhamento preciso dos elementos. Os componentes são modularizados — como botões, cards e ícones — seguindo o conceito de design atômico, permitindo reutilização e escalabilidade no desenvolvimento. A responsividade é contemplada com adaptação fluida para dispositivos móveis, mantendo a integridade visual e funcional em telas menores. O projeto aplica boas práticas de layout adaptativo e mobile-first, assegurando performance e acessibilidade em diferentes contextos de uso.
                </p>
            </div>
          </section>
            <a target="_blank" className="btn-to-f-sum-up" href="https://www.figma.com/proto/dCsS536xJFi9GP0lDJoyQ1/Landing-page?node-id=204-326&t=lQhSUyA58y0TE8Hy-1">Se interessou pelo conteúdo? <span className="spn-to-f-sum-up">veja o projeto completo no Figma!</span></a>
        </div>
    )
}






export default PixNaSumUp