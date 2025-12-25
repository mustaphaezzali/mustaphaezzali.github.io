'use client'

import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
        setTheme(initialTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggle}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
        </button>
    )
}
