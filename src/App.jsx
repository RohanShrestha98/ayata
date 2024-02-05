import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import BriefHistory from "./pages/BriefHistory";
import ClientServed from "./pages/ClientServed";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
  return (
    <div className="element" id="containerElement">
      <Navbar />
      <Hero />
      <AboutUs />
      <BriefHistory />
      <WhatWeDo />
      <ClientServed />
      <Footer />
    </div>
  );
}

export default App;
