import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import CursorContext from "./context/CursorContext";
import Projects from "./components/Projects";
import Development from "./components/Development";

function App() {
  const [currentVideo, setCurrentVideo] = useState("");
  return (
    <>
      <CursorContext.Provider value={{ currentVideo, setCurrentVideo }}>
        <Hero />
        <Projects />
        <Development />
      </CursorContext.Provider>
    </>
  );
}

export default App;
