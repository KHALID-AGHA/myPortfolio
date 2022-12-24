import React, { createContext, useState } from 'react'
export const Context = createContext()

export const ContextBody = ({ children }) => {
    //-------------- Navbar Items
    const [navItem, setNavItem] = useState('home')

    //-------------- Theme
    const [theme, setTheme] = useState(false)

    return (
        <Context.Provider
            value={{
                navItem,
                setNavItem,
                theme,
                setTheme,
            }}
        >
            {children}
        </Context.Provider>
    )
}