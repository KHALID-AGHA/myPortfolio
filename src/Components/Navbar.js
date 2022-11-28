import React, { useState } from 'react'
import Toggle from './Toggle'
import KhaledLogo from '../img/Khaled6.gif'
import KhaledAgha from '../img/KhaledAgha.gif'
import AghaLogo from '../img/agha.gif'
import KhaledLogo1 from '../img/Khaled1.png'
import KhaledLogo2 from '../img/Khaled2.png'
import KhaledLogo3 from '../img/Khaled3.png'
import KhaledLogo4 from '../img/Khaled4.png'
import KhaledLogo5 from '../img/Khaled5.png'
import Buttons from './Shared/Buttons'
import { Link } from 'react-scroll'

export default function Navbar() {
    //---------Navbar Links
    const navigationLinks = [
        { id: 0, title: "Skills", linkTo: "skills_section" },
        { id: 1, title: "Experiences", linkTo: "experiences_section" },
        { id: 2, title: "Services", linkTo: "services_section" },
        { id: 3, title: "Portfolio", linkTo: "projects_section" },
    ]



    return (
        <div
            name="navbar"
            id='navbar'
            className='navbar-wrapper 
             text-heavyTeal fixed top-0 z-[99999] h-14 w-full shadow-2xl shadow-lightTeal rounded-bl-xl rounded-br-xl  
            flex flex-row justify-evenly items-center  
            bg-gradient-to-tl from-heavyTeal via-blueCard to-black 
            '>
            {/***LInks underline using context  */}
            {/*********************************Logo **********************************/}
            <section className='Logo_Name md:w-1/2 py-2 w-1/4 h-full px-2 flex items-center justify-center font-bold '>
                Khalid
            </section>
            {/*********************************Links **********************************/}
            <section className='Links md:hidden  w-2/4 h-full px-2 flex items-center '>
                <ul className='w-full h-auto flex flex-row items-center justify-around'>
                    {navigationLinks.map((link) => (

                        <Link spy={true} to={link.linkTo} smooth={true} activeClass="activeClass">
                            <li
                                className='hover:cursor-pointer hover:underline hover:bg-lightTeal hover:text-heavyBeige
                                py-2 px-2 rounded-sm text-lg'
                                key={link.id}
                            >{link.title}</li>
                        </Link>
                    ))}
                </ul>
            </section>

            {/*********************************Contact **********************************/}
            <section className='Logo_Name md:w-1/2 md:flex-row-reverse w-1/4 h-full px-2 flex flex-row items-center justify-around'>
                <Link spy={true} to="contact_section" smooth={true} activeClass="activeClass">
                    <Buttons Action={"contact"} />
                </Link>
                <Toggle />
                {/*********************************Dark/Light **********************************/}

            </section>
        </div>
    )
}
