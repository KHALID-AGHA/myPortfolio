import TagFilterSpan from "./TagFilterSpan";
import { subfilterNavigation } from "./data";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Filteration = (props) => {

    //-------------- Dark Mode
    const { theme } = useContext(Context)

    return (
        <div>
            <div
                className={`${theme ? "bg-darkFilter" : "bg-darkTitle"} flex flex-row justify-evenly flex-wrap items-center w-[55%] rounded-lg bg-darkTitle m-auto md:h-auto md:w-full h-12 my-2 `}>
                {subfilterNavigation
                    .map((sub) => (

                        <TagFilterSpan
                            key={sub.id}
                            text={sub.title}
                            onClick={() => { props.setFilterNavState(sub.title) }}
                            className={`${props.filterNavState === sub.title ? 'bg-lightTeal text-lightBeige cursor-pointer' : "cursor-pointer"} `}
                        />

                    ))}
            </div>

        </div >
    )
}
export default Filteration;