import { useEffect, useState } from "react";
export default function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const d = document.documentElement;
      setP((d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight)) * 100);
    };
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  return p;
}
