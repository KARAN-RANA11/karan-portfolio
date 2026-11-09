import { useEffect, useState } from "react";
export default function useTyping(words) {
  const [st, setSt] = useState({ i: 0, n: 0, del: false });
  useEffect(() => {
    const w = words[st.i];
    const delay = !st.del && st.n === w.length ? 1400 : st.del ? 35 : 70;
    const id = setTimeout(() => {
      if (!st.del && st.n < w.length) setSt({ ...st, n: st.n + 1 });
      else if (!st.del) setSt({ ...st, del: true });
      else if (st.n > 0) setSt({ ...st, n: st.n - 1 });
      else setSt({ i: (st.i + 1) % words.length, n: 0, del: false });
    }, delay);
    return () => clearTimeout(id);
  }, [st, words]);
  return words[st.i].slice(0, st.n);
}
