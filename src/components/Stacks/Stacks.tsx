import "./styles.css";
import { motion } from "framer-motion";
function Stacks() {
  return (
    <motion.div className="container"
    initial={{opacity:0}}
    whileInView={{opacity: 1, y:-70}}
    transition={{duration:0.9, ease:"backInOut"}}>
      <section id="text-section">
        <img src="./images/projects/pen-icon.png" alt="icon pen" />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
      <section id="text-section">
        <img src="./images/projects/code-icon.png" alt="code icon" /><br />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
      <section id="text-section">
        <img src="./images/projects/brush-icon.png" alt="brush icon" /><br />
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet. Sed unde error et cupiditate tempore ut
          temporibus voluptatem qui repudiandae facere aut alias dolorem. Non
          totam aspernatur ut dolores consequatur 
        </p>
      </section>
    </motion.div>
  );
}

export default Stacks;
