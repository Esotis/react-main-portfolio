import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import { FrontEndMotion, SkillChildrenMotion } from "../../constant/animation";

function FrontEnd() {
  return (
    <motion.div
      variants={FrontEndMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="skills-content"
    >
      <h3 className="skills-title">Front End</h3>

      <div className="skills-box">
        <div className="skills-group">
          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">Redux</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.2}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">NextJS</h3>
              <span className="skills-level">Basic</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            custom={2.4}
            viewport={{ once: true }}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">Framer Motion</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>
        </div>

        <div className="skills-group">
          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">Tailwind</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.2}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.4}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default FrontEnd;
