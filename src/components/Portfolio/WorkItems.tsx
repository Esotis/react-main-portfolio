import { motion } from "framer-motion";
import { WorkItemsMotion } from "../../constant/animation";
import "./Portfolio.css";
import { type ProjectsData } from "./Works";

interface WorkItemsProps {
  item: ProjectsData;
}

function WorkItems({ item }: WorkItemsProps) {
  return (
    <motion.div
      variants={WorkItemsMotion}
      className="work-card"
      initial="hidden"
      animate="visible"
      exit="exit"
      key={item.id}
    >
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>

      <a
        href={item.link ? item.link : "#"}
        target="_blank"
        className="work-button"
      >
        {item.status == "published" ? "Visit Site" : "View Project"}{" "}
        <i className="uil uil-arrow-right work-button-icon"></i>
      </a>
    </motion.div>
  );
}

export default WorkItems;
