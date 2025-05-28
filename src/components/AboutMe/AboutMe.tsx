import "./styles.css"
import { motion } from "framer-motion"


function AboutMe() {
    return(
        
       <motion.div className="container-text"
       initial={{opacity:0}}
       whileInView={{opacity:1, y:-70}}
       transition={{duration: 0.9, ease:"backInOut"}}
       
       >
        
        <section id="primary-text">
            <h2 className="title">Design</h2>
            <p className="text-1">I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
        </section>
        
            <section id="secondary-text">
            <h2>Engineering</h2>
            <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
            </section>
        </motion.div>
            
       
       
    )
}

export default AboutMe