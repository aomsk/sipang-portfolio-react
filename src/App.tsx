import "../src/styles/App.css";
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const tags: string[] = ["All", "Full-Stack", "Back-end", "Front-end"];
  // const tags: string[] = ["All", "Full-Stack", "Back-end", "Front-end", "Mobile"];
  const [selectBadge, setSelectBadge] = useState<string>("All");

  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Projects tags={tags} selectBadge={selectBadge} setSelectBadge={setSelectBadge} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
