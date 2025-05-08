import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import "./index.css"

const App: React.FC = () => {

  return (
    <div className="app-container">

      <Header />
      <Projects />
    </div>
    
  )
}

export default App
