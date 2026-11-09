import { profile } from "../data/profile";
import Reveal from "./Reveal";
export default function Contact() {
  return (
    <section id="contact" className="ct">
      <div className="wrap">
        <Reveal>
          <div className="ey">06 / contact</div>
          <h2>Let’s build something great.</h2>
          <p className="lead">Open to roles, collaborations and interesting problems. Email is the fastest way to reach me.</p>
          <div className="cta">
            <a className="btn p" href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.links.map((l) => <a key={l.label} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
