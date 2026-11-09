import { profile } from "../data/profile";
import useTyping from "../hooks/useTyping";
import CodeCard from "./CodeCard";

export default function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section id="top" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="hero">
          <div>
            <div className="ey">// hello, world</div>
            <h1>I’m {profile.name}, I build <span className="gr">software that scales</span>.</h1>
            <div className="type">&gt; {typed}<span className="caret" /></div>
            <p className="lead" style={{ marginTop: 14 }}>{profile.heroLead}</p>
            <div className="cta">
              <a className="btn p" href="#projects">Explore my work</a>
              <a className="btn" href="#contact">Contact me</a>
            </div>
          </div>
          <CodeCard />
        </div>
        <div className="stats">
          {profile.stats.map(([value, label]) => (
            <div className="stat" key={label}><b>{value}</b><span>{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
