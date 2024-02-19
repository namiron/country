import React, { useState, useEffect } from 'react';
import { IoIosMoon } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import themes from './themes.module.scss'

const Theme = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')


    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className={themes.themes} onClick={toggleTheme}>
            <div className={themes.themeBody}>
                {
                    theme === 'light' ? (
                        <div className={themes.darkBox}>
                            <IoIosMoon /> <p>dark theme</p>
                        </div>
                    ) : (
                        <div className={themes.lightBox}>
                            <FiMoon /> <p>light theme</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Theme
