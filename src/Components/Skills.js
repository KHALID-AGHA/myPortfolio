import { BsBack, BsFront } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import KhalidAghaCV from '../../src/KhalidAghaCV.pdf'
import { themeContext } from '../Context/Context';
import { useContext } from 'react';

export default function Skills() {

    const cards = [
        { id: 1, title: "Back End", paragraph: "NodeJs, Express, Laravel, MongoDB, MySQL", icon: <BsBack color='#0E5E6F' size='40px' /> },
        { id: 2, title: "Front End", paragraph: "JavaScript, React, NextJS, HTML, CSS,TailwindCSS", icon: <BsFront color='#0E5E6F' size='40px' /> },
        { id: 3, title: "Other Skills", paragraph: "Linux, Git, AGILE Methodology, WordPress, Trello", icon: <GiSkills color='#0E5E6F' size='40px' /> },
    ]

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div id={'skills_section'} name="skills_section" className='skills flex md:flex-col items-center h-screen md:h-auto py-2 mb-4 relative'>

            {/********************************* Left - Text Side **********************************/}
            <div className='skills-text-side w-1/2 md:w-full flex flex-col justify-center pb-4 h-full  z-[100]'>
                <span className='textSideSpans py-1 text-black font-bold text-5xl'>My Awesome</span>
                <span className='textSideSpans py-1 text-heavyTeal font-bold text-4xl md:text-xl'>Skills</span>
                <span className='textSideSpans py-1 text-lightTeal text-lg font-medium mt-3'>Front end, Back end, Server Management, Project Management, Content Management System. </span>

                {/********************************* Left - CV **********************************/}
                <div className='skills-CV pt-4 md:w-full md:text-center'>
                    <a href={KhalidAghaCV} download>
                        <button className='golbalBtnStyle w-32 md:w-1/2 md:m-auto h-8'>Download CV</button>
                    </a>
                </div>
            </div>

            {/********************************* Right - Cards Side **********************************/}
            <div
                className='skills-cards flex flex-row md:flex-col-reverse md:justify-between justify-around items-center w-1/2 md:w-full h-full z-[1000]'>
                {cards.map((singlCard) => (
                    <div
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
                        blur-[10px] w-[70%] m-auto absolute right-40 top-64 -z-[100px]
                    `}
            ></div>
        </div>
    )
}

