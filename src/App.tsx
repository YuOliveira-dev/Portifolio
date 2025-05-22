import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Stacks from "./components/Stacks/Stacks"
import Socials from "./components/Socials/Socials"

import "./index.css"

const App: React.FC = () => {

  return (
    <div className="app-container">

      <Header />
      <Projects />
      <AboutMe />
      <Stacks />
      <ContactMe />
      <Socials />
      
    </div>
    
  )
}

export default App
