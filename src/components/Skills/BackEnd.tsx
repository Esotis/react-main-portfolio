import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import { BackEndMotion, SkillChildrenMotion } from "../../constant/animation";

function BackEnd() {
  return (
    <motion.div
      variants={BackEndMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="skills-content"
    >
      <h3 className="skills-title">BackEnd Developer</h3>

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
              <h3 className="skills-name">NodeJS</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            custom={2.2}
            viewport={{ once: true }}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">MySQL</h3>
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
              <h3 className="skills-name">MongoDB</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>
        </div>

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
              <h3 className="skills-name">Firebase</h3>
              <span className="skills-level">Basic</span>
            </div>
          </motion.div>

          <motion.div
            variants={SkillChildrenMotion}
            initial="hidden"
            whileInView="visible"
            custom={2.2}
            viewport={{ once: true }}
            className="skills-data"
          >
            <BiBadgeCheck className="badge" />

            <div>
              <h3 className="skills-name">Laravel</h3>
              <span className="skills-level">Ongoing</span>
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
              <h3 className="skills-name">Web 3.0</h3>
              <span className="skills-level">In the future</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BackEnd;
