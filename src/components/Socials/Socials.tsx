import "./styles.css";

function Socials() {
  return (
    <div className="social-container">
      <ul>
        <a
          href="https://www.linkedin.com/in/yuri-carvalho-de-oliveira/"
          target="_blank"
          aria-label="Botão que redireciona para o meu Linkedin"
        >
         <img className="icon-social" src="./images/linkedin-plain.svg" alt="icone do linkedin"/>
        </a>
        <a
          href="https://github.com/YuOliveira-dev"
          target="_blank"
          aria-label="Botão que redireciona para o meu GitHub"
        >
        
          <img className="icon-social" src="./images/github-original.svg" alt="icone do github" />
          
        </a>
        <a
          href="https://medium.com/@carvalhoyc"
          target="_blank"
          aria-label="Botão que redireciona para o meu Medium"
        >
          <img className="icon-social" src="./images/Medium Icon 1.svg" alt="icone do medium" />
        </a>
      </ul>
    </div>
  );
}

export default Socials;
