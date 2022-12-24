import { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Context } from '../Context/Context';

export default function Toggle() {

    //---------------Dark Mode
    const { theme, setTheme } = useContext(Context)

    return (
        <div
            className='toggle cursor-pointer flex flex-row items-center h-full z-[1000]'>
            {
                !theme ? <BsFillMoonFill cursor={'pointer'} onClick={() => { setTheme(!theme) }}
                    className="toogleIcons w-8 h-4"
                    color='#0E5E6F' width={5} height={4} />
                    :
                    <BsFillSunFill cursor={'pointer'} onClick={() => { setTheme(!theme) }}
                        className="toogleIcons w-8 h-4"
                    />
            }
        </div>
    )
}
