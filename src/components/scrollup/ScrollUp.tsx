import { useState } from "react";
import "./ScrollUp.css";

function ScrollUp() {
  const [userScroll, setUserScroll] = useState<boolean>(false);

  // if user scroll and window offset Y greater than 560, show the scroll up icon
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 560) {
      return setUserScroll(true);
    }
    setUserScroll(false);
  });

  return (
    <a href="#" className={userScroll ? "scrollup show-scroll" : "scrollup"}>
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
}

export default ScrollUp;
