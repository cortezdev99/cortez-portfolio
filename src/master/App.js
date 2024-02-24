import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import NavTopBar from "../components/nav/NavTopBar";
import Footer from "../components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTopBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
