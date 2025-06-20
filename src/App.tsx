import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Stacks from "./components/Stacks/Stacks";
import Socials from "./components/Socials/Socials";
import FloatingElements from "./components/FloatingElements/FloatingElements";
import { Element } from "react-scroll";

import BackToTop from "./components/ButtonBackToTop/BackToTop";
// import Carrosel from "./components/CarroselAuto/Carrosel";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div style={{ position: "absolute", width: "100%", height: "100vh" }}>
        <FloatingElements />
      </div>
      <Header />

      <Element name="secao1">
        <Projects />
      </Element>
      {/* <Carrosel /> */}
      <Element name="secao2">
        <AboutMe />
      </Element>
      <Element name="secao3">
        <Stacks />
      </Element>
      <Element name="secao4">
        <ContactMe />
      </Element>
      <Socials />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
