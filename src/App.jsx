// import { useEffect, useState } from "react";
// import ScrollProgress from "./components/ScrollProgress";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import CodingProfiles from "./components/CodingProfiles";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CommandPalette from "./components/CommandPalette";
// import { Snowfall } from "react-snowfall";

// export default function App() {
//   const [palette, setPalette] = useState(false);
//   useEffect(() => {
//     const onKey = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette((v) => !v); }
//     };
//     addEventListener("keydown", onKey);
//     return () => removeEventListener("keydown", onKey);
//   }, []);
//   return (
//     <>
     
//       <ScrollProgress />
//       <Navbar onOpenPalette={() => setPalette(true)} />
//       <main>
//         <Hero /><About /><Skills /><Projects /><CodingProfiles /><Experience /><Contact />
//       </main>
//       <Footer />
//       {palette && <CommandPalette close={() => setPalette(false)} />}
//         <Snowfall
//         color="#ffffff"
//         snowflakeCount={100}
//         speed={[0.5, 2]}
//         radius={[1, 4]}
//       />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

// Correct import
import Snowfall from "react-snowfall";

export default function App() {
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setPalette((v) => !v);
      }
    };

    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenPalette={() => setPalette(true)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {palette && (
        <CommandPalette close={() => setPalette(false)} />
      )}

      <Snowfall
        color="#ffffff"
        snowflakeCount={100}
        speed={[0.5, 2]}
        radius={[1, 4]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
