import FileSVG from "../../assets/files";
import CV from "../../assets/John-Cv.pdf";
import AboutImage from "../../assets/jovan.jpg";
import "./About.css";
import Info from "./Info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={AboutImage} alt="" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            FullStack Developer, still learning about computer network, it's fun
            to know the architecture and technology of Web and Network.
          </p>

          {/* donwload attribute in anchor html element is used to download the href file instead of navigating to the file and rename the downloaded file to "Jovan_CV.pdf" */}
          <a href={CV} download="Jovan_CV" className="button button-flex">
            Download CV {FileSVG}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
