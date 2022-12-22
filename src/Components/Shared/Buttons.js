import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Buttons = ({ Action, linkTo, className, onClick }) => {

    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <button
            ata-aos-duration="1500" data-aos="zoom-in"
            onClick={onClick}
            className={"Buttons"}
        // className ||
        // "inline-block px-6 py-2 border-2 border-heavyTeal text-heavyTeal font-medium text-xs leading-tight uppercase rounded-full hover:bg-lightTeal hover:text-lightBeige focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
            {Action}
        </button>

    )
}
export default Buttons
