import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Headroom from "react-headroom";
import { register } from "swiper/element/bundle";

//Components
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  register();
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 500,
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="main-bg overflow-hidden">
      <Headroom>
        <NavBar />
      </Headroom>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
