import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Works from './Components/Works';
 import Contact from './Components/Contact';
import { useContext, useEffect, useState } from 'react';
import Footer from './Components/Footer';
import { themeContext } from './Context/Context';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';
import { Link } from 'react-scroll';
import { navContext } from './Context/NavContext';
import { Context } from './Context/LinksContext';

function App() {

  //-------- Dark Mode
  const { theme } = useContext(Context)

  return (


    <div
      className={`${theme ? 'bg-[#121215]' : "bg-[#f1f5f9]"} App overflow-hidden`}
    >
      <Navbar />
      <main className='py-2 px-14 mt-20'>

        <Intro />
        <Skills />
        <Experience />
        <Works />
         <Project />
        <ContactMe />

      </main>
      <Footer />

    </div>

);
}

export default App;
