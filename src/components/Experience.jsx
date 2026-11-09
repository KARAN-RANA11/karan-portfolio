import { jobs } from "../data/experience";
import Reveal from "./Reveal";
export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="ey">04 / experience</div>
        <h2>Where I’ve worked.</h2>
        <div className="tl">
          {jobs.map((j) => (
            <Reveal key={j.title} className="job">
              <div className="w">{j.when}</div>
              <h3>{j.title}</h3>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="tags">{j.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
