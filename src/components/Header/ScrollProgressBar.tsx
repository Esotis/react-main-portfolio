import { motion, useScroll } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}

export default ScrollProgressBar;
