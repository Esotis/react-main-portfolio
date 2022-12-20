import { motion } from "framer-motion";

function Social({ socialMotion }: any) {
  return (
    <motion.div
      variants={socialMotion}
      initial="hidden"
      animate="visible"
      className="home-social"
    >
      <a
        href="https://www.instagram.com/"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://dribbble.com/"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </motion.div>
  );
}

export default Social;
