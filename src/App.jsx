import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Nav from "./components/Nav";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 1000,
      duration: 3000,
    });
  }, []);

  return (
    <div className="main-bg overflow-hidden">
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
