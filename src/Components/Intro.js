import me from '../img/mee.png'
import cheerful from '../img/cheerful.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiMongodb, SiReact, SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { useContext, useEffect } from 'react'
import { themeContext } from '../Context/Context'
import AOS from "aos";
import "aos/dist/aos.css";
import RightTitle from './Shared/RightTitle';

export default function Intro() {
    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div name="home_section"
            id='home_section'
            className='intro flex flex-row md:flex-col items-center h-[70vh] md:h-auto pt-12  '>

            {/********************************* Details & Links **********************************/}
            <div className='i-left bg w-1/2 z-30 md:w-full flex flex-col justify-center h-full '>
                {/** <section className='w-full h-2/3 flex flex-col justify-evenly'>
                    <span className='i-name-span-greet HeaderOne'>Hi, I am </span>
                    <span className='i-name-span-name HeaderTwo  md:text-xl'></span>
                    <span className='i-name-span-text  Paragraph   '>
                        Responsible, committed, cheerful programmer.
                        <br />
                        Hard worker who attempting to make a significant effort to accomplish goals.
                    </span>
                </section> */}
                <RightTitle Header1={"Hi, I am"} Header2={"Mohammad Khalid Kassem Agha"}
                    Paragraph1={"  Responsible, committed, cheerful programmer."}
                    Paragraph2={" Hard worker who attempting to make a significant effort to accomplish goals."}
                />

                <section className='w-full py-10 h-1/3 flex flex-row justify-evenly items-center'>
                    <a target={'_blank'} href='https://www.linkedin.com/in/khalid-agha/'
                        className='hover:transform hover:transition-all hover:scale-125' >
                        <AiFillLinkedin
                            color='#0E5E6F' size={50} cursor={'pointer'}
                            data-aos-duration="1500" data-aos="zoom-in"
                        />
                    </a>

                    <a target={'_blank'} href='https://github.com/KhalidAgha-2000'
                        className='hover:transform hover:transition-all hover:scale-125' >
                        <AiFillGithub
                            data-aos-duration="1500" data-aos="zoom-in"
                            className='transform transition-all hover:scale-125'
                            color='#0E5E6F' size={50} cursor={'pointer'} />
                    </a>

                    <a target={'_blank'} href='https://wa.me/0096176318263'
                        className='hover:transform hover:transition-all hover:scale-125' >
                        <AiOutlineWhatsApp
                            data-aos-duration="1500" data-aos="zoom-in"
                            className='transform transition-all hover:scale-125'
                            color='#0E5E6F' size={50} cursor={'pointer'} />
                    </a>
                </section>
            </div>

            {/********************************* Images **********************************/}
            <div className='i-right md:hidden bg-lightBeige -mx-0 border-none rounded-lg shadow-xl shadow-heavyTeal w-1/2 h-[90vh] transform -rotate-[34deg] '>

                <section className='w-full h-2/3 bg-heavyBeige flex flex-row items-center justify-around rounded-[100px]'>
                    {/********************************* Me **********************************/}
                    <div className='w-2/3 rounded-tl-[250px]
                    bg-gradient-to-tl from-heavyTeal via-blueCard to-lightBeige 
                    shadow-2xl shadow-heavyTeal
                    h-full flex flex-row items-center justify-center'>
                        <img src={me} alt="Me" className='transform rotate-[33deg] rounded-b-full w-[60%]' />
                    </div>

                    {/********************************* Mongo & Express **********************************/}
                    <div
                        data-aos="flip-right" data-aos-duration="1500"
                        className='w-1/3 flex flex-col items-center justify-around pt-20 bg-lightBeige h-full border-r-2 border-r-heavyTeal '>
                        <SiMongodb size={40} color="#0E5E6F" />
                        <SiExpress size={40} color="#0E5E6F" />
                    </div>
                </section>

                {/********************************* Under Image **********************************/}
                <section className='w-full h-1/3 flex flex-row justify-around items-start bg-heavyBeige'>
                    <div className='w-2/3 h-full border-r-4 border-t-2 border-heavyTeal '>
                        <div data-aos="flip-right" data-aos-duration="1500"
                            className=' bg-gradient-to-bl from-heavyTeal via-blueCard to-lightBeige w-1/2 h-full'>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500"
                            className=' bg-gradient-to-bl from-heavyTeal via-blueCard to-lightBeige w-1/2 h-full'>
                        </div>
                    </div>

                    {/********************************* React & Node**********************************/}
                    <div
                        data-aos="flip-right" data-aos-duration="1500"
                        className='flex h-full bg-lightBeige border-r-2 border-r-heavyTeal w-1/3 flex-col items-center justify-around'>
                        <SiReact size={40} color="#0E5E6F" />
                        <FaNodeJs size={40} color="#0E5E6F" />
                    </div>
                </section>

            </div>

        </div>
    )
}
