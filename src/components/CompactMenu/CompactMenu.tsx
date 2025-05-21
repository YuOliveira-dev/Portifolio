import { useState } from "react"
import "./styles.css"

function CompactMenu() {

    const [isOpen, setIsOpen] = useState(true);

    return(
        <nav className="navbar">
                <img src="./images/projects/Logo.png" alt="logo png" />
                     <button className="hamburger" onClick={()=> setIsOpen(!isOpen)}>☰</button>

           <div className={`menu${isOpen ? 'close' : ''}`} >
            
            <button className="close" onClick={() => setIsOpen(true)}>x</button>
            <div className={`sideClose${isOpen ? 'isClose' : ''} `} onClick={() => setIsOpen(true)}></div>
            <ul className="mobile-list">
              
                <li><a href="">Sobre mim</a></li>
              
              
                <li><a href="">Projetos</a></li>
              
              
                <li><a href="">Stacks</a></li>
              
              
                <li><a href="">Contato</a></li>
              
            </ul>
            
           </div>
            
        </nav>
    )
}
console.log()


export default CompactMenu