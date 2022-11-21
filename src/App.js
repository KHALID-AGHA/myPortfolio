import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Works from './Components/Works';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { useContext, useEffect, useState } from 'react';
import Footer from './Components/Footer';
import { themeContext } from './Context/Context';
import { BsArrowUpCircleFill } from 'react-icons/bs';

function App() {
  //---------------Dark Mode
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  //---------------Scroll To Top
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div
      className={`${darkMode ? 'bg-[black]' : ""} App  overflow-hidden py-2 px-14 bg-opacity-100`}
    >
      <main>
        <Navbar />
        <Intro />
        <Skills />
        <Experience />
        <Works />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <BsArrowUpCircleFill
        onClick={scrollTop}
        color={`${darkMode ? "#F2DEBA" : '#242d49'}`}
        className={`${showScroll ? 'flex' : "hidden"} scrollTop fixed z-[100000] opacity-50 w-10 h-10 bottom-5 right-5 cursor-pointer items-center hover:opacity-100`}
      />
    </div>
  );
}

export default App;
