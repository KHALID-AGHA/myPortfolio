import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Buttons = ({ Action, onClick }) => {

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
        >
            {Action}
        </button>

    )
}
export default Buttons
