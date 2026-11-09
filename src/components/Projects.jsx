import { useState } from "react";
import { projects, categories } from "../data/projects";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <section id="projects">
      <div className="wrap">
        <div className="ey">03 / projects</div>
        <h2>Selected work.</h2>
        <div className="chips">
          {categories.map((c) => (
            <button key={c} className={"chip" + (filter === c ? " on" : "")} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {list.map((p) => <ProjectCard key={p.title} project={p} index={projects.indexOf(p) + 1} />)}
        </div>
      </div>
    </section>
  );
}
