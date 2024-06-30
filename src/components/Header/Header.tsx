import { useState } from "react";
import "./Header.css";
import ScrollProgressBar from "./ScrollProgressBar";

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("#home");

  // when user scrolling change the background header nav
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY >= 80)
      return header!.classList.add("scroll-header", "scrolled-nav");
    header!.classList.remove("scroll-header", "scrolled-nav");
  });

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav-logo">
            CoffinS
          </a>

          <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list">
              <li className="nav-item">
                <a
                  href="#home"
                  className={
                    activeNav === "#home" ? "nav-link active-link" : "nav-link"
                  }
                  onClick={() => setActiveNav("#home")}
                >
                  <i className="uil uil-estate nav-icon"></i> Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#about"
                  className={
                    activeNav === "#about" ? "nav-link active-link" : "nav-link"
                  }
                  onClick={() => setActiveNav("#about")}
                >
                  <i className="uil uil-user nav-icon"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  className={
                    activeNav === "#skills"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  onClick={() => setActiveNav("#skills")}
                >
                  <i className="uil uil-file-alt nav-icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  className={
                    activeNav === "#services"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  onClick={() => setActiveNav("#services")}
                >
                  <i className="uil uil-briefcase-alt nav-icon"></i> Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  className={
                    activeNav === "#portfolio"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  onClick={() => setActiveNav("#portfolio")}
                >
                  <i className="uil uil-scenery nav-icon"></i> Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className={
                    activeNav === "#contact"
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  onClick={() => setActiveNav("#contact")}
                >
                  <i className="uil uil-message nav-icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav-close"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>

          <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
      <ScrollProgressBar />
    </>
  );
}

export default Header;
