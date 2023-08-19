import "../src/styles/App.css";
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

// tags
import { tags } from "./utils/data";

function App() {
  const [selectBadge, setSelectBadge] = useState<string>("All");

  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Projects tags={tags} selectBadge={selectBadge} setSelectBadge={setSelectBadge} />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
