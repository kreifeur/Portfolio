import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="w-[100%] text-sm">
      <Navbar />
      <Home/>
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default App;
