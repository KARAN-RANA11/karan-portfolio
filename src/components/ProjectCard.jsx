import { useState } from "react";
export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="meta mono"><span>{project.meta}</span><span>0{index}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      {open && <div className="det"><ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul></div>}
      <button className="more" onClick={() => setOpen(!open)}>{open ? "Hide details ↑" : "View details →"}</button>
    </div>
  );
}
