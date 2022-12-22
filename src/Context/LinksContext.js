import React, { createContext, useState } from 'react'
export const Context = createContext()

export const ContextBody = ({ children }) => {
    const [navItem, setNavItem] = useState('home')

    return (
        <Context.Provider
            value={{
                navItem,
                setNavItem,
            }}
        >
            {children}
        </Context.Provider>
    )
}