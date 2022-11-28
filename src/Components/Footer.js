import React, { useContext } from 'react'
import wave from '../img/wave.svg'
import cheerful from '../img/cheerful.png'
import { themeContext } from '../Context/Context'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { CgChevronUp } from 'react-icons/cg';
import { Link } from 'react-scroll';

export default function Footer() {

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <footer
            className={`${darkMode ? "border-t-2 border-t-heavyBeige" : ""}
       relative p-4 bg-heavyTeal rounded-lg shadow-2xl shadow-heavyTeal -mx-20 -mb-2 h-32
        flex flex-row items-center justify-around md:flex-col
        `}
        >

            <div className="w-1/2 md:w-full flex items-center justify-around md:justify-center">
                <img src={cheerful} className=" h-16 sm:h-8" alt="Cheerful" />
                <span className="self-center text-xl sm:text-sm text-heavyBeige  italic font-semibold whitespace-nowrap  ">
                    ~ Mohammad Khalid kassem Agha ~
                </span>
            </div>

            <div className="w-1/2 h-auto md:w-full md:py-1 md:px-16 sm:px-10 flex items-center justify-around">
                <a
                    className='hover:transform hover:transition-all hover:scale-125'
                    href={'https://www.linkedin.com/in/khalid-agha/'} target='_blank' >
                    <AiFillLinkedin size={40} color="F2DEBA" cursor={'pointer'}
                    />
                </a>
                <a
                    className='hover:transform hover:transition-all hover:scale-125'
                    href={'https://github.com/KhalidAgha-2000'} target='_blank' >
                    <AiFillGithub size={40} color="F2DEBA" cursor={'pointer'}
                    />
                </a>
                <a
                    className='hover:transform hover:transition-all hover:scale-125'
                    href={'https://wa.me/0096176318263'} target='_blank' >
                    <AiOutlineWhatsApp size={40} color="F2DEBA" cursor={'pointer'}
                    />
                </a>
            </div>
            <Link spy={true} to="home_section" smooth={true} activeClass="activeClass">

                <CgChevronUp
                    color='#242D49'
                    cursor='pointer'
                    size={30}
                    className="absolute right-1/2 left-1/2 -top-2 
            border-t-2 border-heavyTeal bg-lightBeige rounded-full items-center hover:opacity-100"
                />
            </Link>
        </footer>
    )
} 