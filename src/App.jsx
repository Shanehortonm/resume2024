import { Banner } from "./components/Banner";
import Nav from "./components/Nav";
import { About } from "./components/About";

const App = () => {
  return (
    <div className="main-bg">
      <Nav />
      <Banner />
      <About />
    </div>
  );
};

export default App;
