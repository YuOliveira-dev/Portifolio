import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Stacks from "./components/Stacks/Stacks"
import CompactMenu from "./components/CompactMenu/CompactMenu"
import "./index.css"

const App: React.FC = () => {

  return (
    <div className="app-container">

      <Header />
      <CompactMenu />
      <Projects />
      <AboutMe />
      <Stacks />
      <ContactMe />
      
    </div>
    
  )
}

export default App
