import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css"

function ProjetoItau() {

  return (

    <div className="containerProjectItau">
        <NavBarToPage />
        
      <section className="project-images">
        <img src="../images/screenProjects/itau/Login.png" alt="Layout Image" className="project-image" />
        <img src="../images/screenProjects/itau/Home.png" alt="Layout Image" className="project-image" />
        <img src="../images/screenProjects/itau/ScreenPix.png" alt="Layout Image" className="project-image"/>
      </section>
      <div className="textsContainer">
        <div className="text1">
          <h2 className="title-project-text"> Diagnóstico e Pesquisa de Usuário</h2><br />
          <p className="paragraph-project-text">
            O projeto foi desenvolvido como parte do curso de UX/UI Design da EBAC, com o objetivo de melhorar a experiência do usuário no aplicativo do Banco Itaú. Inicialmente, foram analisadas reclamações de clientes nas redes sociais, especialmente sobre instabilidades e dificuldades relacionadas ao PIX. Para entender melhor essas dores, foi aplicado um questionário presencial focado em hábitos de uso, dificuldades encontradas e percepção sobre o atendimento. A pesquisa revelou que, apesar de considerarem o app intuitivo, os usuários relatavam lentidão, bugs e dificuldades em ajustar limites e localizar opções de ajuda. Esses dados fundamentaram as decisões de design e melhorias propostas.
          </p>
        </div>
        <div className="text2">
          <h2 className="title-project-text">Ideação e Soluções Propostas</h2><br />
          <p className="paragraph-project-text">
            A partir dos dados coletados, foi criada uma persona com base nos usuários reais e elaborado um mapa de empatia para entender suas motivações, dores e expectativas. Em seguida, a jornada do usuário foi estruturada para identificar pontos de fricção no uso do app. Quatro soluções foram propostas: uma interface mais limpa com foco no PIX, um FAQ interativo com opção de contato direto com funcionários, ajuste de limite facilitado e extrato bancário mais detalhado. Protótipos de baixa fidelidade foram construídos no Figma e testados com usuários, que aprovaram a nova abordagem. A identidade visual foi baseada na marca do Itaú, com uso equilibrado das cores através da técnica 60/30/10, reforçando a familiaridade e confiança do usuário com o ambiente digital.
          </p>
        </div>
      </div>
        <a target="_blank" className="link-to-article" href="https://medium.com/@carvalhoyc/projeto-de-parceria-itaú-ebac-c8a48dada439">
          Se interessou pelo conteúdo ? <span className="span-article">leia o artigo completo!</span>
        </a>
      <div className="stacks"></div>
      
    </div>

  );
}

export default ProjetoItau;
