import "./Portfolio.css";
import { type ProjectsData } from "./Works";

interface WorkItemsProps {
  item: ProjectsData;
}

function WorkItems({ item }: WorkItemsProps) {
  return (
    <div className="work-card">
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a href="#" className="work-button">
        Demo <i className="uil uil-arrow-right work-button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems;
