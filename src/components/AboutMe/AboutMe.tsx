import "./styles.css";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="container-text"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: -70 }}
      transition={{ duration: 0.9, ease: "backInOut" }}
    >
      <section id="primary-text">
        <h2 className="title">Design</h2>
        <p className="text-1">
          Sou um designer com forte atuação prática entre <strong>design</strong> e
          <strong> desenvolvimento.</strong>  Em vez de me limitar a ferramentas, 
          trabalho diretamente com código e estilos ajustando tipografias,
          otimizando layouts e aprimorando <strong>a experiências do usuário.</strong> Tenho foco
          em soluções responsivas, acessíveis e alinhadas a boas práticas de
          <strong> UI/UX.</strong> Utilizo ferramentas como <strong>Figma,</strong><strong> React </strong>e <strong>CSS</strong>  para transformar
          ideias em interfaces funcionais e modernas. Mais do que seguir
          tendências, busco criar produtos digitais com propósito, sempre
          centrados nas necessidades reais do usuário.
        </p>
      </section>

      <section id="secondary-text">
        <h2>Engineering</h2>
        <p>
          No desenvolvimento de <strong>aplicações,</strong> priorizo desempenho, escalabilidade
          e resiliência. Domino ferramentas modernas como
          <strong> React,</strong> <strong>Node.js</strong> e <strong>TypeScript</strong> — mas também sou capaz de entregar
          soluções eficientes mesmo fora de ambientes pré-configurados. Tenho
          como foco a escrita de código limpo, otimizado e preparado para
          crescimento, sempre considerando a <strong>experiência do usuário </strong>e a
          sustentabilidade do projeto em longo prazo.
        </p>
      </section>
    </motion.div>
  );
}

export default AboutMe;
