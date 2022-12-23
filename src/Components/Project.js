import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CenterTitle from "../Components/Shared/CenterTitle"
import Buttons from '../Components/Shared/Buttons'
import { FaExternalLinkAlt  } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import { themeContext } from "../Context/Context";
import { useContext, useState } from "react";
import Filter from "./Shared/Filter";
import Filteration from "./Shared/Filteration";
import { useEffect } from "react";
import TagFilterSpan from "./Shared/TagFilterSpan";
import { projectCards } from "./Shared/data";

export default function Project() {


    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    //---------------Filteration
    const [filterNavState, setFilterNavState] = useState('All Projects')
    const [projectCardState, setSetProjectCardState] = useState(projectCards)

    useEffect(() => { }, [projectCardState, filterNavState])



    return (
        <div name="projects_section" id="projects_section"
            className='projects w-full h-screen md:h-auto pt-10 flex flex-col  md:mb-10  '>

            {/********************************* Heading **********************************/}
            <CenterTitle Header1={"Recent Projects"} Header2={"Portfolio"} />

            {/********************************* Filer & Sort *****************************/}

            <Filteration
                filterNavState={filterNavState}
                setFilterNavState={setFilterNavState}
            />
            {/********************************* Projects Card ********************************/}
            <section className="flex flex-row gap-5 flex-wrap justify-center w-full rounded-md 
            max-h-full h-full md:h-screen md:pr-5 scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl  scrollbar-thumb-black scrollbar-track-lightTeal scrollbar-thin overflow-hidden "
            >

                {projectCardState
                    .filter(val => {
                        //********* Field
                        if (filterNavState === val.category) {
                            return projectCardState
                        }
                        //********* Hosted
                        if (filterNavState === val.hosted) {
                            return projectCardState
                        }
                        else if (filterNavState === 'All Projects') { return val }
                    })
                    .map((card) => (
                        <div className="relative w-[30%] md:w-full h-96 flex flex-col items-center justify-between  ">
                            <div className="group h-3/4 w-full mt-4 py-5 px-5 bg-[#f3f4f6] flex flex-row items-center justify-center rounded-2xl ">

                                {/******************************* Tags ********************************* */}
                                <div
                                    className="group absolute z-40 w-full h-[75%] flex flex-row items-center justify-end rounded-lg
                                transform duration-700 invisible
                                group-hover:visible  group-hover:bg-[#9ebac0] group-hover:bg-opacity-50  ">
                                    <div className="w-full flex flex-row justify-around items-center my-1">
                                        {card.tags.map((tag) => (
                                            <TagFilterSpan
                                                className={"text-lightBeige bg-heavyTeal "}
                                                key={tag.id}
                                                tag1={tag.tag1}
                                                tag2={tag.tag2}
                                                tag3={tag.tag3} />
                                        ))}
                                    </div>
                                </div>

                                {/******************************* Image ********************************* */}
                                <img className="object-cover w-[95%] h-[95%] bg-[red] rounded-lg group-hover:scale-110 " src={card.Img} />

                            </div>

                            {/******************************* Title, Description & Link ********************************* */}

                            <div
                                className={`${darkMode ? 'border-2 border-heavyTeal shadow-lightBeige  ' : ""}
                                 px-5 py-5 shadow-2xl  mt-4 rounded-md relative
                                 h-auto mb-4 w-full flex flex-col justify-between items-start`
                                }
                            >
                                <div className=" flex flex-row justify-start items-center w-full">

                                    <a className="" href={card.link} target={"_blank"}>
                                        <AiOutlineLink cursor={'pointer'} color={"#0e5e6f"}/>
                                    </a>
                                    <h1 className="text-heavyTeal font-bold underline ">
                                        {card.title}
                                    </h1>

                                    {/* 
                                        <FaExternalLinkAlt cursor={'pointer'} color={'#0E5E6F'} />
                                     */}

                                </div>

                                {/* <p className="text-lightTeal ">{card.description}</p> */}

                                {/******************************* Tags ********************************* */}

                                <div className="w-full flex flex-row justify-around items-center my-1">
                                    {card.tags.map((tag) => (

                                        <TagFilterSpan
                                            className={"md:text-xs "}
                                            key={tag.id}
                                            tag1={tag.tag1}
                                            tag2={tag.tag2}
                                            tag3={tag.tag3}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))
                }

            </section>
        </div>
    )
} 