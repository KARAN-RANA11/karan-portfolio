const root = document.documentElement;
export function initTheme() {
  try { const t = localStorage.getItem("theme"); if (t === "light" || t === "dark") root.setAttribute("data-theme", t); } catch (e) {}
}
export function isDark() {
  const t = root.getAttribute("data-theme");
  return t === "dark" || (t !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
}
export function toggleTheme() {
  const next = isDark() ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
}
export const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
