import { motion } from "framer-motion";
import { FaAward, FaBookOpen, FaFlagCheckered } from "react-icons/fa";
import { InfoMotion } from "../../constant/animation";

function Info() {
  return (
    <>
      <div className="about-info grid">
        <motion.div
          variants={InfoMotion}
          initial="hidden"
          custom={0}
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          className="about-box"
        >
          <FaAward className="about-icon" />
          <h3 className="about-title">Intermediate</h3>
          <span className="about-subtitle">Always learning everday 🔥</span>
        </motion.div>

        <motion.div
          variants={InfoMotion}
          initial="hidden"
          custom={0.5}
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          className="about-box"
        >
          <FaFlagCheckered className="about-icon" />
          <h3 className="about-title">Completed</h3>
          <span className="about-subtitle">20+ Projects</span>
        </motion.div>

        <motion.div
          variants={InfoMotion}
          initial="hidden"
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          className="about-box"
        >
          <FaBookOpen className="about-icon" />
          <h3 className="about-title">Web Developer</h3>
          <span className="about-subtitle">Keep leaning!</span>
        </motion.div>
      </div>
    </>
  );
}

export default Info;
