// import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Footer from './component/Footer';
import Github from './component/Github';

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
