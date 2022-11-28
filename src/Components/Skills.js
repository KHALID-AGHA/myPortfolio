import { BsBack, BsFront } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import KhalidAghaCV from '../../src/KhalidAghaCV.pdf'
import RightTitle from './Shared/RightTitle'
import { themeContext } from '../Context/Context';
import { useContext, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Buttons from './Shared/Buttons';


export default function Skills() {

    const cards = [
        { id: 2, title: "Front End", paragraph: "JavaScript, React, NextJS, HTML, CSS,TailwindCSS", icon: <BsFront color='#0E5E6F' size='40px' /> },
        { id: 1, title: "Back End", paragraph: "NodeJs, Express, Laravel, MongoDB, MySQL", icon: <BsBack color='#0E5E6F' size='40px' /> },
        { id: 3, title: "Other Skills", paragraph: "Linux, Git, AGILE Methodology, WordPress, Trello Board", icon: <GiSkills color='#0E5E6F' size='40px' /> },
    ]

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div id={'skills_section'} name="skills_section"
            className='skills flex md:flex-col pt-10  h-screen md:h-auto mt-40 md:mt-0 relative z-20'>

            {/********************************* Left - Text Side **********************************/}
            {/**<span className='textSideSpans my-2 HeaderOne'>My Awesome</span>
                <span className='textSideSpans my-2 HeaderTwo md:text-xl'>Skills</span>
                <span className='textSideSpans my-2 Paragraph '>Front end, Back end, Server Management, Project Management, Content Management System. </span>
                */}
            <div className='skills-text-side  w-1/2 md:w-full flex flex-col h-[70vh] '>
                <RightTitle Header1={"My Awesome"} Header2={"Skills"} Paragraph1={"Front end, Back end, Server Management, Project Management, Content Management System."} />

                {/********************************* Left - CV **********************************/}
                <div className='skills-CV my-2 md:w-full md:text-center'>
                    <a href={'#projects_section'} >
                        <Buttons Action={"examples"} />
                    </a>
                </div>
            </div>

            {/********************************* Right - Cards Side **********************************/}
            <div
                className='skills-cards flex flex-row md:flex-col md:justify-between justify-around items-center w-1/2 md:w-full h-full '>
                {cards.map((singlCard) => (
                    <div
                        data-aos="flip-right" data-aos-duration="2500"
                        key={singlCard.id}
                        className=" skills-single-card w-56 md:w-full h-auto flex flex-col gap-4 items-center text-center  bg-lightBeige border-[7px] border-lightTeal rounded-[20px] pt-2 pb-8 px-7 mx-2 text-heavyTeal my-2 ">
                        <span className='skills-single-card  '>{singlCard.icon}</span>
                        <h1 className='skills-single-card font-bold'>{singlCard.title}</h1>
                        <p className='skills-single-card'>{singlCard.paragraph}</p>
                    </div>
                ))}
            </div>
            {/********************************* Blur **********************************/}
            <div
                className={`${darkMode ? 'hidden' : ""} 
                        blurSection h-full md:hidden
                        bg-gradient-to-tl 
                        from-[#70B0B8] via-blueCard to-lightBeige 
                        blur-[10px] w-[70%] m-auto absolute right-28 top-64 -z-20
                    `}
            ></div>
        </div>
    )
}

