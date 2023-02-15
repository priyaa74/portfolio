// import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Github from './component/Github';
import Footer from './component/Footer'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Github/>
    <Footer/>
    </main>
  );
}

export default App;
