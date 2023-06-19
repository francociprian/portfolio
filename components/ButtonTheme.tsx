"use client"

import React from 'react'
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from './icons'


export const ButtonTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme === "dark"? setTheme('light'): setTheme("dark")}
            className='transition-all duration-100 font-EngraversGothic text-0.75rem ml-0 mr-12'
        >
            {theme=== "dark" ? <MoonIcon/>  : <SunIcon/>}
        </button>
    )
}