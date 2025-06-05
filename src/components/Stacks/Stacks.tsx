
import Carrosel from "../CarroselAuto/Carrosel";
import "./styles.css";
import { motion } from "framer-motion";
function Stacks() {
     
  return (
    <motion.div className="container"
    initial={{opacity:0}}
    whileInView={{opacity: 1, y:-70}}
    transition={{duration:0.9, ease:"backInOut"}}>
      <section id="text-section">
        <img src="./images/pen-icon.webp" alt="icon pen" />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
      <section id="text-section">
        <img src="./images/code-icon.webp" alt="code icon" /><br />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
      <section id="text-section">
        <img src="./images/brush-icon.webp" alt="brush icon" /><br />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
    
      <Carrosel />
      
      
    </motion.div>
  );
}

export default Stacks;
