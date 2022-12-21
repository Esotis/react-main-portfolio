import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import "./Portfolio.css";
import WorkItems from "./WorkItems";

export interface ProjectsData {
  id: number;
  image: any;
  title: string;
  category: string;
}

interface Item {
  name: string;
}

function Works() {
  const [item, setItem] = useState<Item>({ name: "all" });
  const [projects, setProjects] = useState<ProjectsData[]>([]);
  const [active, setActive] = useState<number>(0);

  function handleClick(category: any, index: number) {
    setItem({ name: category });
    setActive(index);
  }

  // change the showed project based on categories selected
  useEffect(() => {
    if (item.name === "all") {
      return setProjects(projectsData);
    }

    const newProjects = projectsData.filter((project) => {
      return project.category === item.name;
    });
    setProjects(newProjects);
  }, [item]);

  return (
    <>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={() => {
                handleClick(item.name, index);
              }}
              className={`work-item ${active === index ? "active-work" : ""}`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work-container container grid">
        <AnimatePresence initial={false} mode="wait">
          {projects.map((item) => {
            return <WorkItems item={item} key={item.id} />;
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Works;
