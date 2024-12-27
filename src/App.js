// Components
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="dark:bg-[#000] dark:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
