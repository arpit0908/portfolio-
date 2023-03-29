import React from 'react';
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Blogs from "./components/ClassWork";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
     
      
      <About />
      <Project />
      <Experience />
      <Blogs/>
      
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
