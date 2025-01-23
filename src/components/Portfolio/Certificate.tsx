import { motion } from "framer-motion";
import { useState } from "react";
import { WorkItemsMotion } from "../../constant/animation";
import "./Portfolio.css";
import { type ProjectsData } from "./Works";

interface WorkItemsProps {
  item: ProjectsData;
}

function WorkItems({ item }: WorkItemsProps) {
  const [modal, setModal] = useState<number>(0);

  const toggleTab = (index: number) => {
    setModal(index);
  };

  return (
    <>
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

        <span
          className="work-button button-pointer"
          onClick={() => toggleTab(item.id)}
        >
          View Certificate
          <i className="uil uil-arrow-right work-button-icon"></i>
        </span>
      </motion.div>
      {/* Modal */}
      <div
        className={
          modal === item.id ? "work-modal active-work-modal" : "work-modal"
        }
      >
        <div className="work-modal-content">
          <i
            className="uil uil-times work-modal-close"
            onClick={() => toggleTab(0)}
          ></i>

          <img src={item.image} alt="" />
        </div>
      </div>
    </>
  );
}

export default WorkItems;
