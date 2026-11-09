import { skills } from "../data/skills";
import Reveal from "./Reveal";
export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="ey">02 / skills</div>
        <h2>The toolkit.</h2>
        <div className="grid">
          {skills.map(([group, items]) => (
            <Reveal key={group}>
              <div className="card">
                <h3 style={{ marginBottom: 14 }}>{group}</h3>
                {items.map(([name, level]) => (
                  <div key={name}>
                    <div className="sk"><span>{name}</span><span>{level}%</span></div>
                    <div className="bar"><i style={{ "--w": level + "%" }} /></div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
