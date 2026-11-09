import { useEffect, useRef, useState } from "react";
import { sections } from "../data/sections";
import { profile } from "../data/profile";
import { goTo, toggleTheme } from "../hooks/theme";

export default function CommandPalette({ close }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const input = useRef(null);
  useEffect(() => input.current?.focus(), []);

  const items = [
    ...sections.map(([id, label]) => ({ label: `Go to ${label}`, kind: "section", run: () => goTo(id) })),
    { label: "Toggle theme", kind: "action", run: toggleTheme },
    { label: "Send an email", kind: "link", run: () => (location.href = `mailto:${profile.email}`) },
  ];
  const list = items.filter((x) => x.label.toLowerCase().includes(query.toLowerCase()));
  const run = (x) => { if (x) { close(); x.run(); } };

  const onKey = (e) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); setIndex(Math.min(list.length - 1, index + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIndex(Math.max(0, index - 1)); }
    else if (e.key === "Enter") run(list[index]);
  };

  return (
    <div className="ov" onClick={close}>
      <div className="pal" onClick={(e) => e.stopPropagation()}>
        <input ref={input} placeholder="Type a command…" value={query} onChange={(e) => { setQuery(e.target.value); setIndex(0); }} onKeyDown={onKey} />
        {list.map((x, n) => (
          <button key={x.label} className={n === index ? "on" : ""} onClick={() => run(x)}>
            <span>{x.label}</span><span className="mono">{x.kind}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
