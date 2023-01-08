import { createContext, useContext } from "react";
import { useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [searchOpen,setSearchOpen] = useState(false)
    
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const toggleSearchBar = () => {
        setSearchOpen(!searchOpen)
    }
    
    return (
        <NavContext.Provider value={{ navOpen, toggleNav, searchOpen,toggleSearchBar }}>
        {children}
        </NavContext.Provider>
    );
    }


    export const useNav = () => {
        const { navOpen, toggleNav, searchOpen, toggleSearchBar } = useContext(NavContext);
        return { navOpen, toggleNav, searchOpen, toggleSearchBar };
    }

    export default NavProvider;