import React, { useState, useEffect, useContext } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }) => {

    const rootElement = document.querySelector(":root");
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
      if (darkTheme) {
        rootElement.style.setProperty("--clr", "var(--clr-dark)");
        rootElement.style.setProperty("--bg-clr", "var(--bg-clr-dark)");
        rootElement.style.setProperty("--shadow", "var(--shadow-dark)");
      } else {
        rootElement.style.setProperty("--clr", "var(--clr-light)");
        rootElement.style.setProperty("--bg-clr", "var(--bg-clr-light)");
        rootElement.style.setProperty("--shadow", "var(--shadow-light)");
      }
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}