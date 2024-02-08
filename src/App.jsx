import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import BriefHistory from "./pages/BriefHistory";
import ClientServed from "./pages/ClientServed";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import LoadingFirst from "./pages/LoadingFirst";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
  return (
    <div className="element" id="containerElement">
      <LoadingFirst />
      <Navbar />
      <Hero />
      <AboutUs />
      <BriefHistory />
      <WhatWeDo />
      <ClientServed />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
