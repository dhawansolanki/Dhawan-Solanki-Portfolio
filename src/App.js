import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Hero/>
      <About/>
      <Service/>
      <Timeline/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
