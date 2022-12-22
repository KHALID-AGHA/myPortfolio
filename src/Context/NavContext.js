import { createContext, useReducer } from 'react'

export const navContext = createContext();

const initialState = { navItem: 'home' }

const navReducer = (state, action) => {

    switch (action.type) {
        case 'skills':
            return { navItem: 'skills' }

        case 'experiences':
            return { navItem: 'experiences' }

        case 'services':
            return { navItem: 'services' }

        case 'portfolio':
            return { navItem: 'portfolio' }

        default:
            console.log('state',state);
            return state;
    }
}

export const NavProvider = (props) => {
    const [state, dispatch] = useReducer(navReducer, initialState);
    return (
        <navContext.Provider value={{ state, dispatch }}>
            {props.children}
        </navContext.Provider>
    );
}

