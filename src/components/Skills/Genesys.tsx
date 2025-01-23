import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import { FrontEndMotion, SkillChildrenMotion } from "../../constant/animation";

function Genesys() {
  return (
    <motion.div
      variants={FrontEndMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="skills-content"
    >
      <h3 className="skills-title">Genesys Administrator</h3>

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
              <h3 className="skills-name">Inbound Call</h3>
              <span className="skills-level">Advanced</span>
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
              <h3 className="skills-name">Outbound Call</h3>
              <span className="skills-level">Intermediate</span>
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
              <h3 className="skills-name">Telephony</h3>
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
              <h3 className="skills-name">Bot Flow</h3>
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
              <h3 className="skills-name">Web Messaging</h3>
              <span className="skills-level">Advanced</span>
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
              <h3 className="skills-name">Other</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Genesys;
