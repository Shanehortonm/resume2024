import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 500,
      duration: 3000,
    });
  }, []);

  return (
    <div className="main-bg overflow-hidden">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
