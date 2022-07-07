import React, {useEffect, useState} from 'react';
import {THEME_OPTIONS} from "../utils/constants/theme";
import {CounterContext} from "./ counter";
import {THEME_LOCALSTORAGE} from "../utils/constants/localStorageVariables";

const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState(localStorage.getItem(THEME_LOCALSTORAGE) || THEME_OPTIONS.LIGHT)
    const [isDark,setIsDark ] = useState(() => {
        const themeSaved = localStorage.getItem(THEME_LOCALSTORAGE)
        if(themeSaved){
            return themeSaved===THEME_OPTIONS.DARK;
        }
        return false
    })

    const toggleTheme= () => {
        let newTheme;
        switch (theme){
            case THEME_OPTIONS.LIGHT: newTheme = THEME_OPTIONS.DARK;
            break;
            case THEME_OPTIONS.DARK: newTheme = THEME_OPTIONS.LIGHT;
            break;
            default: newTheme = THEME_OPTIONS.LIGHT
        }
        setTheme(newTheme)
        if(newTheme===THEME_OPTIONS.DARK){
            setIsDark(true)
        }
        else{
            setIsDark(false)
        }
        localStorage.setItem(THEME_LOCALSTORAGE,newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{theme, toggleTheme, isDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;


export const useTheme = () => {
    const {theme,toggleTheme, isDark} = React.useContext(ThemeContext)

    return {
        theme,toggleTheme, isDark
    }
}