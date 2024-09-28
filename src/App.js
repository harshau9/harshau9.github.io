import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Project from "./containers/project";
import Github from "./containers/github";
import Contact from "./containers/contact";
import Navbar from "./components/navbar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";
import { Link } from "react-router-dom";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}

      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        {/* <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/skills" index element={<Skills />} />
          <Route path="/project" index element={<Project />} />
          <Route path="/github" index element={<Github />} />
          <Route path="/contact" index element={<Contact />} />
        </Routes> */}

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <Home />
        <About />
        <Skills />
        <Project />
        <Github />
        <Contact />
      </div>
    </div>
  );
}

export default App;
