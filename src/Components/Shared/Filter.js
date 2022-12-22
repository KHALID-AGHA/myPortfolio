import { useState } from "react"
import { FaSortNumericDownAlt, FaSortNumericUpAlt, FaRocket, FaVideo } from 'react-icons/fa'

//---------------Filter *************** date, deployed, Demo, Internship, bootcamp
const Filter = (props) => {
    const filterNavigation = [
        { id: 1, showedTitle: "All", clickedTitle: "", target: "all" },
        { id: 2, showedTitle: "Older", clickedTitle: "Newer", target: "date" },
        { id: 3, showedTitle: "BootCamp", clickedTitle: "Internship", target: "place" },
        { id: 4, showedTitle: "Deployed", clickedTitle: "Demo", target: "host" },
    ]
    const [rightFilter, setRightFilter] = useState("")

    return (
        <div className='flex flex-row justify-evenly items-center w-2/3 bg-yellow m-auto  md:w-full h-auto my-2 '>
            icon
            {filterNavigation.map((nav) => (

                <span onClick={() => {
                    // props.setNav(nav.target)
                    // props.setShowedTitleState(nav.clickedTitle)
                    // setRightFilter(nav.clickedTitle)

                }}
                    key={nav.id}
                    className="cursor-pointer my-1 bg-lightBeige text-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"
                >
                    {nav.clickedTitle}

                </span>

            ))
            }{
                /**
            <span onClick={() => props.setNav("all")} className="cursor-pointer my-1 bg-lightBeige text-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"
            >
                All
            </span>
            <span onClick={() => props.setNav("date")} className="cursor-pointer my-1 bg-lightBeige text-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"
            >
                Date
            </span>
            <span onClick={() => props.setNav("place")} className="cursor-pointer my-1 bg-lightBeige text-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"
            >
                Place
            </span>
            <span onClick={() => props.setNav("hosted")} className="cursor-pointer my-1 bg-lightBeige text-heavyTeal py-1 text-sm px-3 bg-orange-200 text-orange-800 rounded-full"
            >
                Hosted
            </span> */
            }

        </div>
    )
}
export default Filter;