import React, { useEffect } from 'react'
import Toggle from './Toggle'
import KhalidLogo1 from '../img/Logo.png'
import Buttons from './Shared/Buttons'
import { Link } from 'react-scroll'
import { useContext } from 'react'
import { navContext } from '../Context/NavContext'
import { Context } from '../Context/LinksContext'

export default function Navbar() {
    //---------Navbar Links
    const navigationLinks = [
        { id: 0, navContextType: "skills", title: "Skills", linkTo: "skills_section" },
        { id: 1, navContextType: "experiences", title: "Experiences", linkTo: "experiences_section" },
        { id: 2, navContextType: "services", title: "Services", linkTo: "services_section" },
        { id: 3, navContextType: "portfolio", title: "Portfolio", linkTo: "projects_section" },
    ]
    const nav = useContext(navContext)
    // const navItem = nav.state.navItem

    const switchLink = (navContextType) => {
        nav.dispatch({ type: navContextType })
        // console.log({ 'nav': navItem })
    }

    const { navItem, setNavItem } = useContext(Context)


    useEffect(() => {
        console.log('nav', navItem);
    }, [])

    return (
        //bg-gradient-to-tl from-heavyTeal via-blueCard to-black
        <div
            name="navbar"
            id='navbar'
            className='navbar-wrapper 
             text-heavyTeal fixed top-0 z-[99999] h-14 w-full shadow-2xl shadow-lightTeal rounded-bl-xl rounded-br-xl  
            flex flex-row justify-evenly items-center bg-[#e2e8f0] border-b-2 border-heavyTeal'
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

                        <Link spy={true} to={link.linkTo} smooth={true} activeClass="active">
                            <li
                                onClick={() => { setNavItem(link.navContextType) }}
                                // onClick={() => { switchLink(link.navContextType) }}
                                className={`${navItem === link.navContextType ? 'bg-lightTeal rounded-bl-2xl rounded-tr-2xl text-black' : ""} navLi `}
                                key={link.id}
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
