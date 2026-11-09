import { sections } from "../data/sections";
import { profile } from "../data/profile";
import useScrollSpy from "../hooks/useScrollSpy";
import { toggleTheme } from "../hooks/theme";

const ids = sections.map((s) => s[0]);

export default function Navbar({ onOpenPalette }) {
  const active = useScrollSpy(ids);
  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">{profile.logo}<b>.dev</b></a>
          <div className="nl">
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={(active === id ? "on " : "") + (["about", "experience"].includes(id) ? "h" : "")}>{label}</a>
            ))}
            <button className="ib" onClick={onOpenPalette} aria-label="Open command palette">Search <kbd>Ctrl K</kbd></button>
            <button className="ib" onClick={toggleTheme} aria-label="Toggle theme">◐</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
