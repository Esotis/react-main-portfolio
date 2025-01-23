import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Genesys from "./Genesys";
import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>

        <div className="skills-container container grid">
          <FrontEnd />

          <BackEnd />
          <Genesys />
        </div>
      </section>
    </>
  );
}

export default Skills;
