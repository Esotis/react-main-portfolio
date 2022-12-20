import { motion } from "framer-motion";
import handSVG from "../../assets/hand";
import sendSVG from "../../assets/send";

function Data({ dataMotion }: any) {
  return (
    <motion.div
      variants={dataMotion}
      initial="hidden"
      animate="visible"
      className="home-data"
    >
      <h1 className="home-title">Jovan Anggata {handSVG}</h1>
      <h3 className="home-subtitle">Web Developer</h3>
      <p className="home-description">
        I'm very excited about web, and I will always improve my skill all days
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello {sendSVG}
      </a>
    </motion.div>
  );
}

export default Data;
