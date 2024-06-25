import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/home/index.jsx";

// import dg from ".././src/Img/img/asset 1.svg"
function App() {
  return (
    <>
      {/* <Demo/> */}
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter> 
    </>
  );
}

export default App;
