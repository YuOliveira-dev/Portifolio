import NavBarToPage from "../../components/NavBarToPage/NavBarToPage";
import "./styles.css";

function ProjetoItau() {
  return (
    <section className="c-p-itau">
      <div className="c-p-itau__wrapper">

        <NavBarToPage />

        <div className="s-t-itau">
          <img
            src="../images/screenProjects/itau/Login.png"
            alt="Login do App Itaú"
            className="s-t-itau__img"
          />
          <img
            src="../images/screenProjects/itau/Home.png"
            alt="Tela Inicial do App Itaú"
            className="s-t-itau__img"
          />
          <img
            src="../images/screenProjects/itau/ScreenPix.png"
            alt="Tela Pix App Itaú"
            className="s-t-itau__img"
          />
        </div>

        <header className="s-h-itau">
          <h1 className="s-h-itau__title">
            Projeto UX – Diagnóstico e Redesign do App Itaú
          </h1>
          <p className="s-h-itau__desc">
            Projeto prático focado em pesquisa com usuários, diagnósticos de usabilidade e redesign de telas baseado em dados reais. Desenvolvido como parte do curso de UX/UI Design da EBAC.
          </p>
        </header>

        <section className="s-o-itau">
          <h2 className="s-o-itau__title">Visão Geral</h2>
          <p className="s-o-itau__text">
            O objetivo foi entender as principais dores dos usuários com o app do Banco Itaú, especialmente em relação ao uso do <strong>PIX</strong> e atendimento. A partir de análises em redes sociais e questionários presenciais, identificamos <strong>problemas recorrentes</strong> como lentidão, bugs e dificuldade em encontrar recursos. Esses dados serviram como base para o processo de redesign.
          </p>
        </section>

        <section className="s-t-pj-itau">
          <h2 className="s-t-pj-itau__title">Tecnologias Utilizadas</h2>
          <ul className="s-t-pj-itau__list">
            <li><strong>Figma:</strong> prototipagem e testes de usabilidade com usuários reais.</li>
            <li><strong>UX Research:</strong> análise de redes sociais, aplicação de formulários e mapeamento da jornada.</li>
            <li><strong>Empathy Map & Persona:</strong> construção de empatia e identificação de expectativas reais.</li>
            <li><strong>Técnica 60/30/10:</strong> utilizada para balancear a identidade visual da marca.</li>
          </ul>
        </section>

        <section className="s-s-itau">
          <h2 className="s-s-itau__title">Soluções Propostas</h2>
          <ul className="s-s-itau__list">
            <li>Interface mais limpa e otimizada com foco no PIX.</li>
            <li>FAQ interativo com botão de contato direto com atendente.</li>
            <li>Ajuste de limite em apenas um clique.</li>
            <li>Extrato detalhado e mais acessível.</li>
          </ul>
        </section>

        <section className="s-l-itau">
          <h2 className="s-l-itau__title">Aprendizados & Insights</h2>
          <ul className="s-l-itau__list">
            <li>Importância da escuta ativa com usuários reais.</li>
            <li>Criação de soluções baseadas em dados e evidências.</li>
            <li>Validação de protótipos com usuários no início do processo.</li>
            <li>Equilíbrio entre identidade visual e usabilidade.</li>
          </ul>
        </section>

        <section className="s-r-itau">
          <h2 className="s-r-itau__title">Resultado Final</h2>
          <p className="s-r-itau__text">
            O projeto demonstrou como a <strong>pesquisa centrada no usuário</strong> pode gerar soluções reais para problemas de usabilidade. O redesign obteve feedbacks positivos e mostrou que, com mudanças simples e empáticas, é possível melhorar significativamente a experiência digital.
          </p>
        </section>

        <div className="s-lk-itau">
          <a
            href="https://medium.com/@carvalhoyc/projeto-de-parceria-itaú-ebac-c8a48dada439"
            target="_blank"
            rel="noopener noreferrer"
            className="s-lk-itau__btn"
          >
            Leia o artigo completo
          </a>
          <a
            href="https://www.figma.com/design/Z9FC2nbWUfxNcaMaZjNiEr/Projeto-itau?node-id=0-1&t=BPHaMTlzsv1XaTmO-1"
            target="_blank"
            rel="noopener noreferrer"
            className="s-lk-itau__btn s-lk-itau__btn--alt"
          >
            Ver no Figma
          </a>
        </div>

      </div>
    </section>
  );
}

export default ProjetoItau;
