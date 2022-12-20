import scrollSVG from "../../assets/scroll";

function ScrollDown() {
  return (
    <div className="home-scroll">
      <a href="#about" className="home-scroll-button button-flex">
        {scrollSVG}
        <span className="home-scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home-scroll-arrow"></i>
      </a>
    </div>
  );
}

export default ScrollDown;
