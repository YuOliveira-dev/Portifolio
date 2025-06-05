import "./styles.css";
import { motion } from "framer-motion";
function Stacks() {
     
  return (
    <motion.div className="container"
    initial={{opacity:0}}
    whileInView={{opacity: 1, y:-70}}
    transition={{duration:1.2, ease:"backInOut"}}
    >
      <section id="text-section">
        <img src="./images/pen-icon.webp" alt="icon pen" />
        <h2>UX/UI</h2>
        <p>
          Com um olhar apurado para <strong>usabilidade</strong> e estética, projeto interfaces que aliam <strong>funcionalidade e fluidez.</strong> Utilizo princípios de design centrado no <strong>usuário</strong> para criar experiências intuitivas e acessíveis, sempre alinhadas com as necessidades reais dos usuários e os <strong>objetivos do negócio.</strong>
        </p>
      </section>
      <section id="text-section">
        <img src="./images/code-icon.webp" alt="code icon" /><br />
        <h2>Dev</h2>
        <p>
          Atuo com foco na <strong>lógica de interface,</strong> componentização escalável e integração fluida entre <strong>frontend e backend.</strong> Busco soluções que equilibram estrutura, performance e manutenção, transformando requisitos técnicos e visuais em <strong>produtos digitais</strong> funcionais, estáveis e fáceis de evoluir.
        </p>
      </section>
      <section id="text-section">
        <img src="./images/brush-icon.webp" alt="brush icon" /><br />
        <h2>Designer</h2>
        <p>
          Minha base profissional é o <strong>design gráfico,</strong> o que contribui para uma visão estética apurada em todos os projetos. Domino ferramentas como <strong>Photoshop,</strong> <strong>Illustrator</strong> e <strong>Figma,</strong> criando identidades visuais, peças promocionais e layouts com consistência visual e apelo profissional.
        </p>
      </section>
    
      
      
      
    </motion.div>
  );
}

export default Stacks;
