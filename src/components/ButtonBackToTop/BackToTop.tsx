import { useState } from "react";
import "./styles.css"
import { IoCaretBackCircle } from "react-icons/io5";
import { scroller } from "react-scroll";

function BackToTop() {
    const scrollToSection = (sectionName: string) => {
        scroller.scrollTo(sectionName, {
          duration: 1750,
          delay: 0.2,
          smooth: 'easeInOutQuint',
        });
      };
const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true)
    };
    const handleMouseLeave = () => {
        setIsHovering(false)
    };

    return(
        <div className="backToTopContainer">
            
            <a onClick={()=>{scrollToSection('secao0')}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="buttonBackToTop">
            <IoCaretBackCircle size={48} style={{transform: 'rotate(90deg)', color: '#ff000476'}} />
            </a>
            
            <h3 className={`isClosed${isHovering ? 'No' : ''}`}>Volte ao início</h3>
        </div>
    )
}








export default BackToTop