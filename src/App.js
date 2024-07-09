import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/home/index.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/index.jsx";
import Service from "./Components/Service/index.jsx";
import Career from "./Components/Career/index.jsx";
import Training from "./Components/Training/index.jsx";
import Mobiledetails from "./Components/Service/Mobiledetails/Mobiledetails.jsx";
import Blog from "./Components/Blog/index.jsx";
import Blogmain from "./Components/Blog/Blogmain/Blogmain.jsx";
import Contact from "./Components/Contact/index.jsx";
import Get from "./Components/Get/index.jsx";
import Portfolio from "./Components/Portfolio/index.jsx";
import Persnal from "./Components/Portfolio/Persnal/Persnal.jsx";

// import dg from ".././src/Img/img/asset 1.svg"
function App() {
  return (
    <>
      {/* <Demo/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="/training" element={<Training />} />
          <Route path="/mobiledetails" element={<Mobiledetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogmain" element={<Blogmain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get" element={<Get />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioorder" element={<Persnal/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
