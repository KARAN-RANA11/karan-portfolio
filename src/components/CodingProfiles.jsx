import { platforms, achievements, topics } from "../data/coding";
import Reveal from "./Reveal";

function PlatformCard({ p }) {
  const total = p.easy + p.medium + p.hard;
  const pct = (n) => (total ? (n / total) * 100 + "%" : "0%");
  return (
    <Reveal>
      <div className="card">
        <div className="meta mono"><span>{p.name}</span><a href={p.url} target="_blank" rel="noopener noreferrer">@{p.handle}</a></div>
        {p.solved > 0 ? (
          <>
            <div className="big">{p.solved}<span className="mu"> solved</span></div>
            <div className="stk">
              <i style={{ "--w": pct(p.easy), background: "var(--ac2)" }} />
              <i style={{ "--w": pct(p.medium), background: "#f5a524" }} />
              <i style={{ "--w": pct(p.hard), background: "#f43f5e" }} />
            </div>
            <div className="lg">
              <span><b style={{ background: "var(--ac2)" }} />Easy {p.easy}</span>
              <span><b style={{ background: "#f5a524" }} />Medium {p.medium}</span>
              <span><b style={{ background: "#f43f5e" }} />Hard {p.hard}</span>
            </div>
          </>
        ) : (
          <p className="mu" style={{ margin: "10px 0 0" }}>Add your solved counts in <span className="mono">src/data/coding.js</span>.</p>
        )}
        <div className="kv">{p.extra.map(([k, v]) => <div key={k}><span>{k}</span><b>{v}</b></div>)}</div>
      </div>
    </Reveal>
  );
}

export default function CodingProfiles() {
  return (
    <section id="coding">
      <div className="wrap">
        <div className="ey">04 / problem solving</div>
        <h2>Competitive coding.</h2>
        <div className="grid">
          {platforms.map((p) => <PlatformCard key={p.name} p={p} />)}
          {achievements.map((a) => (
            <Reveal key={a.title}>
              <div className="card">
                <div className="meta mono"><span>{a.title}</span></div>
                <div className="big gr">{a.value}</div>
                <p style={{ margin: "10px 0 0" }}>{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="tags" style={{ marginTop: 22 }}>
          {topics.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}
