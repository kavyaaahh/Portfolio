import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
function App(){
  return(
    <div className="bg-gradient-to-r from-zinc-950 via-orange to-orange-950 text-white min-h-screen">

  <>
  <Navbar/>
  <Home/>
  <About/>
  <Education/>
  <Skills/>
  <Contact/>
  <Footer/>

  </>
  </div>
  )
}
export default App;
