import { motion } from "framer-motion";
import {
  HomeDataMotion,
  HomeImageMotion,
  HomeSocialMotion,
} from "../../constant/animation";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social socialMotion={HomeSocialMotion} />
          <motion.div
            variants={HomeImageMotion}
            initial="hidden"
            animate="visible"
            className="home-img"
          ></motion.div>
          <Data dataMotion={HomeDataMotion} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
