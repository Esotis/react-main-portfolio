import "./Portfolio.css";
import Works from "./Works";

function Portfolio() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most recent works</span>

      <Works />
    </section>
  );
}

export default Portfolio;
