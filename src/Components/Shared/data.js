import ransom from '../../img/Projects/ransom.png'
import area from '../../img/Projects/area-service.png'
import erp from '../../img/Projects/erp.png'
import km from '../../img/Projects/km.png'
import food from '../../img/Projects/food.png'
import ciel from '../../img/Projects/atelierenciel.png'
import { BsBack, BsFront } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'

//*************** Navbar Links */
export const navigationLinks = [
    { id: 0, navContextType: "skills", title: "Skills", linkTo: "skills_section" },
    { id: 1, navContextType: "experiences", title: "Experiences", linkTo: "experiences_section" },
    { id: 2, navContextType: "services", title: "Services", linkTo: "services_section" },
    { id: 3, navContextType: "portfolio", title: "Portfolio", linkTo: "projects_section" },
]

//*************** Skills Cards */
export const cards = [
    { id: 2, title: "Front End", paragraph: "JavaScript, React, NextJS, HTML, CSS,TailwindCSS", icon: <BsFront color='#0E5E6F' size='40px' /> },
    { id: 1, title: "Back End", paragraph: "NodeJs, Express, Laravel, MongoDB, MySQL", icon: <BsBack color='#0E5E6F' size='40px' /> },
    { id: 3, title: "Other Skills", paragraph: "Linux, Git, AGILE Methodology, WordPress, Trello Board", icon: <GiSkills color='#0E5E6F' size='40px' /> },
]

//*************** Experience */
export const myExperience = [
    { id: 1, endNumber: 2, title01: 'Years', title02: 'Experience' },
    { id: 2, endNumber: 9, title01: 'Completed', title02: 'Projects' },
    { id: 3, endNumber: 3, title01: 'Companies', title02: 'Work' },
]

//*************** Filter Navigation */
export const subfilterNavigation = [
    { id: 1, title: "All Projects", },
    { id: 2, title: "internship", },
    { id: 3, title: "bootcamp", },
    { id: 4, title: "deployed", },
    { id: 5, title: "wordpress", },
    { id: 6, title: "demo", },
]


//*************** Projects Array */

export const projectCards = [
    {
        id: 1, title: 'Ransom', category: "bootcamp", hosted: 'deployed', date: 1, link: "https://ransom-website.vercel.app/", description: "Website that makes it easier for people to anonymously send any type of feedback", Img: ransom,
        tags: [{ id: 1, tag1: "#MERN" }, { id: 2, tag2: "#Codi" }],
    },
    {
        id: 2, title: 'Area-Service', category: "bootcamp", hosted: 'deployed', date: 6, link: "https://area-service.vercel.app/", description: "A website that helps professionals who do not work from an office, or cannot afford one, and people who are searching for a provider near them.", Img: area,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#NodeJS" }, { id: 3, tag3: "#Codi" }],
    },
    {
        id: 3, title: 'ERP', category: "bootcamp", hosted: 'demo', date: 2, link: 'https://www.youtube.com/watch?v=DSBKuvX2XEc', description: "An application that automates the HR process of the company, and provides insights and internal controls, drawing on a central database that shows reports of all employees, teams and projects", Img: erp,
        tags: [{ id: 1, tag1: "#React" }, { id: 2, tag2: "#Laravel" }, { id: 3, tag3: "#Codi" }],
    },
    {
        id: 4, title: 'KM-almajdal', category: "internship", hosted: 'deployed', date: 5, link: "https://kmalmajdal-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: km,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#TailwindCSS" }, { id: 3, tag3: "#DAS360" }],
    },
    {
        id: 5, title: 'Foodoption', category: "internship", hosted: 'deployed', date: 4, link: "https://foodoption-with-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: food,
        tags: [{ id: 1, tag1: "#NextJS" }, { id: 2, tag2: "#TailwindCSS" }, { id: 3, tag3: "#DAS360" }],
    },
    {
        id: 6, title: 'Atelierenciel', category: "bootcamp", hosted: 'wordpress', date: 3, link: "https://atelierenciel.com/", description: "Online store sells hand painting (wearable andaccessories) products", Img: ciel,
        tags: [{ id: 1, tag1: "#WordPress" }, { id: 2, tag2: "#E-commerce" }, { id: 3, tag3: "#Codi" }],
    },
]

//*************** Contact Links*/
export const contactCard = [
    { id: 1, title: "WhatsApp", linkTo: "https://wa.me/76318263", info: "+961 76 318 263", icon: <AiOutlineWhatsApp color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
    { id: 2, title: "LinkedIn", linkTo: "https://www.linkedin.com/in/khalid-agha/", info: "khalid-agha", icon: <AiOutlineLinkedin color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
    { id: 3, title: "DM", linkTo: "mkhalid.k.agha@gmail.com", info: "mkhalid.k.agha@gmail.com", icon: <MdAlternateEmail color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
]

