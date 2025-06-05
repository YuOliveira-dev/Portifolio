import { useInView } from 'react-intersection-observer';
import "./styles.css"

const icons = [
{ alt: "Yu-React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { alt: "Yu-JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { alt: "Yu-TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { alt: "Yu-CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { alt: "Yu-HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { alt: "Yu-PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { alt: "Yu-NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { alt: "Yu-MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
  { alt: "Yu-git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { alt: "Yu-photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { alt: "Yu-Illustrator", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
  { alt: "Yu-Xd", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
  { alt: "Yu-figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { alt: "Yu-Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  { alt: "Yu-affterEffects", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" }

]

function Carrosel() {
    const {ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    return(
        

        <div ref={ref} className="container-carrosel">

             <div className={inView ? 'container-images-carrosel' : ''}>
               {icons.map((icons, index)=>(
                   <div 
                   key={index}
                   className="item"
                   style={{"--delay":`${index}s`} as React.CSSProperties}>
                    <img
                    alt={icons.alt}
                    width="48"
                    height="48"
                    src={icons.src} /> 
                 </div>
               ))}
               
            </div>
        </div>
              
    )

    }

export default Carrosel