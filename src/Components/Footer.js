import React, { useContext } from 'react'
import logo from '../img/Logo.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { CgChevronUp } from 'react-icons/cg';
import { Link } from 'react-scroll';
import { Context } from '../Context/Context';

export default function Footer() {

    //---------------Dark Mode
    const { setNavItem, theme } = useContext(Context)

    return (
        <footer
            className={`${theme ? "border-t-2 border-t-heavyBeige" : ""}
       relative py-4 bg-heavyTeal shadow-2xl shadow-heavyTeal  h-20 md:h-auto
        flex flex-row items-center justify-around md:flex-col
        `}
        >
            {/* Image */}
            <div className='w-1/3 flex flex-row items-center justify-center  md:hidden'>
                <img src={logo} className="h-14 rounded-full bg-heavyBeige" alt="Logo" />

            </div>

            {/* Name */}
            <div className="w-1/3 md:w-full flex flex-row items-center justify-center md:mt-4 ">
                <i className="self-center text-xl sm:text-sm text-heavyBeige font-semibold whitespace-nowrap  ">
                    ~ Mohammad Khalid kassem Agha ~
                </i>
            </div>

            {/*Links & Icons */}
            <div className="w-1/3 md:w-full flex flex-row items-center justify-center ">

                <a
                    className='hover:transform hover:transition-all hover:scale-125 mx-2'
                    href={'https://www.linkedin.com/in/khalid-agha/'} target='_blank' >
                    <AiFillLinkedin size={30} color="F2DEBA" cursor={'pointer'}
                    />
                </a>

                <a
                    className='hover:transform hover:transition-all hover:scale-125 mx-2'
                    href={'https://github.com/KhalidAgha-2000'} target='_blank' >
                    <AiFillGithub size={30} color="F2DEBA" cursor={'pointer'}
                    />
                </a>

                <a
                    className='hover:transform hover:transition-all hover:scale-125 mx-2'
                    href={'https://wa.me/0096176318263'} target='_blank' >
                    <AiOutlineWhatsApp size={30} color="F2DEBA" cursor={'pointer'}
                    />
                </a>

            </div>

            {/* Back to top */}
            <Link spy={true} to="home_section" smooth={true} activeClass="activeClass">
                <CgChevronUp
                    onClick={() => { setNavItem('home') }}
                    color='#242D49'
                    cursor='pointer'
                    size={30}
                    className="absolute left-1/2 -top-2 
                    hover:transform hover:transition-all hover:scale-110  hover:opacity-100
                    border-t-2 border-heavyTeal bg-lightBeige rounded-full "
                />
            </Link>
        </footer>
    )
} 