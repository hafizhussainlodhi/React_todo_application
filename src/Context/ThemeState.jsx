import ThemeContext from "./ThemeContext.jsx";
import { useState } from 'react'
function ThemeState(props) {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light"
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState