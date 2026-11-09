// The code window in the hero. Edit the values below.
export default function CodeCard() {
  return (
    <div className="win">
      <div className="wb">
        <i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} />
        <span className="mono" style={{ marginLeft: 8 }}>about.ts</span>
      </div>
      <pre className="mono">
        <span className="c">// about.ts</span>{"\n"}
        <span className="k">const</span> <span className="f">karan</span> = {"{"}{"\n"}
        {"  "}role: <span className="s">"Software Engineer"</span>,{"\n"}
        {"  "}company: <span className="s">"TCS"</span>,{"\n"}
        {"  "}stack: [<span className="s">"Java"</span>, <span className="s">"Spring Boot"</span>, <span className="s">"React"</span>],{"\n"}
        {"  "}codeVitaRank: <span className="n">208</span>, <span className="c">// global, Season 12</span>{"\n"}
        {"  "}cgpa: <span className="n">9.0</span>,{"\n"}
        {"}"};{"\n\n"}
        <span className="k">export default</span> <span className="f">karan</span>;
      </pre>
    </div>
  );
}
