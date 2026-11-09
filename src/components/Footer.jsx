import { profile } from "../data/profile";
export default function Footer() {
  return <footer><div className="wrap mono">© {new Date().getFullYear()} {profile.name} · built with React</div></footer>;
}
