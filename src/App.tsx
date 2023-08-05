import "../src/styles/App.css";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const menu: string[] = ["Profile", "Projects", "Contact"];
  return (
    <>
      <Navbar menu={menu} />
      <Hero />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
