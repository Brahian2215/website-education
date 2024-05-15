import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Nomadapp", text2: "Divulgando el conocimiento" },
    { text1: "Educación para todos", text2: "Cursos libres" },
    { text1: "Refuerza tus saberes", text2: "Material de apoyo" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);
    return () => clearTimeout(id);
  }, [heroCount]);  

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
