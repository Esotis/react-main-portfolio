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
        href="https://www.instagram.com/jovananggata/"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/jovan-kirsten-anggata-739358260/"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/Esotis"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://wa.link/c5oa0i"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-whatsapp"></i>
      </a>
    </motion.div>
  );
}

export default Social;
