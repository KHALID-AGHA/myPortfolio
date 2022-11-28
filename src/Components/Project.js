import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ransom from '../img/ransom.png'
import area from '../img/area-service.png'
import erp from '../img/erp.png'
import km from '../img/km.png'
import food from '../img/food.png'
import ciel from '../img/atelierenciel.png'
import CenterTitle from "../Components/Shared/CenterTitle"
import Buttons from '../Components/Shared/Buttons'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { themeContext } from "../Context/Context";
import { useContext } from "react";
export default function Project() {

    const projectCards = [
        {
            id: 1, title: 'Ransom', link: "https://ransom-website.herokuapp.com/", description: "Website that makes it easier for people to anonymously send any type of feedback", Img: ransom,
            tags: [{ id: 1, tag1: "MERN" }, { id: 2, tag2: "Codi" }],
        },
        {
            id: 2, title: 'Area-Service', link: "https://area-service.vercel.app/", description: "A website that helps professionals who do not work from an office, or cannot afford one, and people who are searching for a provider near them.", Img: area,
            tags: [{ id: 1, tag1: "NextJS" }, { id: 2, tag2: "NodeJS" }, { id: 3, tag3: "Codi" }],

        },
        {
            id: 3, title: 'ERP', link: 'https://www.youtube.com/watch?v=DSBKuvX2XEc', description: "An application that automates the HR process of the company, and provides insights and internal controls, drawing on a central database that shows reports of all employees, teams and projects", Img: erp,
            tags: [{ id: 1, tag1: "React" }, { id: 2, tag2: "Laravel" }, { id: 3, tag3: "Codi" }],
        },
        {
            id: 4, title: 'KM-almajdal', link: "https://kmalmajdal-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: km,
            tags: [{ id: 1, tag1: "NextJS" }, { id: 2, tag2: "TailwindCSS" }, { id: 3, tag3: "DAS360" }],
        },
        {
            id: 5, title: 'Foodoption', link: "https://foodoption-with-tailwindcss.vercel.app/", description: "FrontEnd Part of project using NextJS & TailwindCSS styling", Img: food,
            tags: [{ id: 1, tag1: "NextJS" }, { id: 2, tag2: "TailwindCSS" }, { id: 3, tag3: "DAS360" }],
        },
        {
            id: 6, title: 'Atelierenciel', link: "https://atelierenciel.com/", description: "Online store sells hand painting (wearable andaccessories) products", Img: ciel,
            tags: [{ id: 1, tag1: "WordPress" }, { id: 2, tag2: "E-commerce" }, { id: 3, tag3: "Codi" }],
        },
    ]
    //---------------Slider
    var settings = {
        pauseOnFocus: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        autoplaySpeed: true,
        autoplay: true,
        slidesToShow: 3.5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div name="projects_section" id="projects_section"
            className='projects w-full h-screen md:h-auto pt-10 flex flex-col  md:mb-10  '>
            {/********************************* Heading **********************************/}
            <CenterTitle Header1={"Recent Projects"} Header2={"Portfolio"} />

            <span>Filter</span>
            {/********************************* Filer & Sort ********************************/}

            {/********************************* Projects Card ********************************/}
            <section className="flex flex-row gap-5 flex-wrap justify-center w-full rounded-md 
            max-h-full h-full md:h-screen md:pr-5 scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl  scrollbar-thumb-black scrollbar-track-heavyTeal overflow-hidden "
            >

                {projectCards.map((card) => (
                    <div className="relative w-[30%] md:w-full h-96 flex flex-col items-center justify-between  ">
                        <div className="group h-3/4 w-full mt-4 py-5 px-5 bg-[#f3f4f6] flex flex-row items-center justify-center rounded-2xl ">

                            {/******************************* Tags ********************************* */}
                            <div
                                className="absolute z-40 w-full h-[75%] flex flex-row items-center justify-end rounded-lg
                                transform duration-700 invisible
                                group-hover:visible  group-hover:bg-[#9ebac0] group-hover:bg-opacity-50  ">
                                <div className="w-full flex flex-row justify-around items-center my-1">
                                    {card.tags.map((tag) => (
                                        <span
                                            className="mt-1 text-lightBeige bg-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"

                                            key={tag.id}>#{tag.tag1}{tag.tag2}{tag.tag3}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/******************************* Image ********************************* */}
                            <img className="object-cover w-[95%] h-[95%] rounded-lg " src={card.Img} />

                        </div>

                        {/******************************* Title, Description & Link ********************************* */}

                        <div
                            className={`${darkMode ? 'border-2 border-heavyTeal rounded-md' : ""} px-5 py-5  shadow-2xl mt-4  overflow-hidden scrollbar h-[28%] w-full flex flex-col justify-between items-start`}
                        >
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className="text-heavyTeal font-bold ">{card.title}</h1>
                                <a href={card.link} target={"_blank"}>
                                    <FaExternalLinkAlt cursor={'pointer'} color={'#0E5E6F'} />
                                </a>
                            </div>

                            <p className="text-lightTeal ">{card.description}</p>

                            {/******************************* Tags ********************************* */}

                            <div className="w-full flex flex-row justify-around items-center my-1">
                                {card.tags.map((tag) => (
                                    <span
                                        className="mt-1 bg-lightBeige text-heavyTeal py-1 sm:text-xs text-sm px-3 bg-orange-200 text-orange-800 rounded-full"

                                        key={tag.id}>#{tag.tag1}{tag.tag2}{tag.tag3}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    )
}


