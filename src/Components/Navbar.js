import React, { useEffect } from 'react'
import Toggle from './Toggle'
import KhalidLogo1 from '../img/Logo.png'
import Buttons from './Shared/Buttons'
import { Link } from 'react-scroll'
import { useContext } from 'react'
import { Context } from '../Context/Context'
import { navigationLinks } from '../Components/Shared/data'
export default function Navbar() {

    //************ Nav Item style on click  && Dark Mode
    const { navItem, setNavItem, theme } = useContext(Context)

    return (

        <div
            name="navbar"
            id='navbar'
            className={`${theme ? "bg-darkNavbar" : "bg-lightNavbar"} first-letter:navbar-wrapper 
            text-heavyTeal fixed top-0 z-[99999] h-14 w-full shadow-2xl shadow-lightTeal rounded-bl-xl rounded-br-xl  
           flex flex-row justify-evenly items-center  border-b-2 border-heavyTeal'}`}
        >

            {/*********************************Logo **********************************/}
            <section className='Logo_Name md:w-1/2  py-2 w-1/4 h-full px-2 flex items-center justify-center'>
                <Link spy={true} to="home_section" smooth={true} activeClass="activeClass">
                    <img src={KhalidLogo1} className='w-14 h-14 cursor-pointer'
                        onClick={() => { setNavItem('home') }}
                    />
                </Link>
            </section>

            {/*********************************Links **********************************/}
            <section className='Links md:hidden  w-2/4 h-full px-2 flex items-center '>
                <ul className='w-full h-auto flex flex-row items-center justify-around'>
                    {navigationLinks.map((link) => (

                        <Link key={link.id} spy={true} to={link.linkTo} smooth={true} activeClass="active">
                            <li
                                onClick={() => { setNavItem(link.navContextType) }}
                                className={`${navItem === link.navContextType ? 'bg-lightTeal rounded-bl-2xl rounded-tr-2xl text-[red]' : ""} navLi  `}
                                
                            >
                                {link.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>

            {/*********************************Contact **********************************/}
            <section className='Logo_Name md:w-1/2 md:flex-row-reverse w-1/4 h-full px-2 flex flex-row items-center justify-around'>
                <Link spy={true} to="contact_section" smooth={true} activeClass="activeClass">
                    <Buttons Action={"contact"} />
                </Link>

                {/*********************************Dark/Light **********************************/}
                <Toggle />

            </section>

        </div>
    )
}
