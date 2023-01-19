import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    // true === light mode
    // false === dark mode
    const [mode, setMode] = useState(true)
    
    function toggleDarkMode() {
        setMode((prevVal) => !prevVal)
    }

    return (
        <div className="container">
            <Navbar darkMode={mode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={mode} />
        </div>
    )
}