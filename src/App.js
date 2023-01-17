import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Works from './Components/Works';
import { useContext } from 'react';
import Footer from './Components/Footer';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';
import { Context } from './Context/Context';

function App() {

  //-------- Dark Mode
  const { theme } = useContext(Context)

  return (

    <div
      className={`${theme ? 'bg-app' : "bg-darkApp"} App overflow-hidden`}
    >
      <Navbar />
      <main className='py-2 px-14 mt-20'>

        {/* <div className='load'></div> */}

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
