import RightTitle from './Shared/RightTitle'
import { useContext, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Buttons from './Shared/Buttons';
import { Link } from 'react-scroll';
import { cards } from './Shared/data';
import { Context } from '../Context/Context';


export default function Skills() {

    //---------------Dark Mode
    const { theme,setNavItem } = useContext(Context)

    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div id={'skills_section'} name="skills_section"
            className='skills flex md:flex-col pt-10  h-screen md:h-auto mt-40 md:mt-0 relative z-20'>

            {/********************************* Left - Text Side **********************************/}
            <div className='skills-text-side  w-1/2 md:w-full flex flex-col h-[70vh] '>
                <RightTitle Header1={"My Awesome"} Header2={"Skills"} Paragraph1={"Front end, Back end, Server Management, Project Management, Content Management System."} />

                {/********************************* Left - CV **********************************/}
                <div className='skills-CV my-2 md:w-full md:text-center'>
                    <Link spy={true} to="projects_section" smooth={true} activeClass="activeClass">
                        <Buttons onClick={()=>{setNavItem('portfolio')}} Action={"examples"} />
                    </Link>
                </div>
            </div>

            {/********************************* Right - Cards Side **********************************/}
            <div
                className='skills-cards  flex flex-row md:flex-col md:justify-between justify-around items-center w-1/2 md:w-full h-full '>
                {cards.map((singlCard) => (
                    <div
                        data-aos="flip-right" data-aos-duration="2500"
                        key={singlCard.id}
                        className=" skills-single-card w-56 md:w-full h-auto flex flex-col gap-4 items-center text-center  bg-lightBeige border-[7px] border-lightTeal rounded-[20px] pt-2 pb-8 px-7 mx-2 text-heavyTeal my-2 ">
                        <span className='skills-single-card'>{singlCard.icon}</span>
                        <h1 className='skills-single-card font-bold'>{singlCard.title}</h1>
                        <p className='skills-single-card'>{singlCard.paragraph}</p>
                    </div>
                ))}
            </div>
            {/********************************* Blur **********************************/}
            <div
                className={`${!theme ? 'hidden' : ""} 
                        blurSection h-full md:hidden
                        bg-gradient-to-br
                        from-heavyTeal via-lightNavbar to-heavyTeal 
                        blur-[10px] w-[70%] m-auto absolute right-28 top-72 -z-20
                    `}
            ></div>
        </div>
    )
}

