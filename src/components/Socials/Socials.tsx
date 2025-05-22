import "./styles.css"
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";


function Socials() {
    return(
        <div className="social-container">
            <ul>
                <a href="https://www.linkedin.com/in/yuri-carvalho-de-oliveira/" >
                    <li className="icon">
                        <BsLinkedin color="#000" size={40}  />
                    </li>
                </a>
                 <a href="https://github.com/YuOliveira-dev">
                    <li className="icon">
                        <FaGithubSquare color="#000" size={40}/>
                    </li>
                </a>
                 <a  href="https://medium.com/@carvalhoyc">
                    <li className="icon">
                        <SiMedium color="#000" size={40}/>
                    </li>
                </a>
            </ul>
        </div>
    )
}



export default Socials