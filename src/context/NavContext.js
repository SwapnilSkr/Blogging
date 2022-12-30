import { createContext, useContext } from "react";
import { useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };
    
    return (
        <NavContext.Provider value={{ navOpen, toggleNav }}>
        {children}
        </NavContext.Provider>
    );
    }


    export const useNav = () => {
        const { navOpen, toggleNav } = useContext(NavContext);
        return { navOpen, toggleNav };
    }

    export default NavProvider;