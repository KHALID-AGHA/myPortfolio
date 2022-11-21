import React from 'react'
import Toggle from './Toggle'

export default function Navbar() {
    const navigationLinks = [
        { id: 0, title: "Skills", linkTo: "skills_section" },
        { id: 1, title: "Experiences", linkTo: "experiences_section" },
        { id: 2, title: "Services", linkTo: "services_section" },
        { id: 3, title: "Portfolio", linkTo: "projects_section" },
    ]
    return (
        <div name="navbar" id='navbar' className='navbar-wrapper h-auto flex flex-row justify-between items-center'>

            {/*********************************Name & Mode **********************************/}
            <div className='navbar-left flex flex-row justify-between w-1/3 items-center   '>
                <div className='navbar-name text-3xl   font-bold text-heavyTeal'>KHALID</div>
                <Toggle />
            </div>

            {/*********************************Contact **********************************/}
            <div className='navbar-right flex flex-row items-center justify-around  md:justify-end w-2/3   z-10 font-normal'>
                <ul className='navbar-list-ul w-1/2 flex flex-row justify-between items-center md:hidden '>
                    {
                        navigationLinks.map((liLink) => (
                            <li key={liLink.id} className='navbar-list-li hover:cursor-pointer text-heavyTeal hover:text-lightTeal'>
                                <a href={`#${liLink.linkTo}`}>{liLink.title}</a>
                            </li>
                        ))
                    }
                </ul>

                {/********************************* Contact **********************************/}
                <a href={"#contact_section"}  >
                    <button className='navbar-Btn golbalBtnStyle h-full '>
                        Contact me
                    </button>
                </a>
            </div>
        </div>
    )
}
