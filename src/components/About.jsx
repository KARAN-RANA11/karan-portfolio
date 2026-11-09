import { profile } from "../data/profile";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="ey">01 / about</div>
          <h2>Engineering with clarity and ownership.</h2>
          <div className="grid">
            {profile.about.map((a) => (
              <div className="card" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
