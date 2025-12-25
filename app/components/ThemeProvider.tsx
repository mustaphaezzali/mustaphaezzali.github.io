'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        const theme = savedTheme || (prefersDark ? 'dark' : 'light')
        document.documentElement.setAttribute('data-theme', theme)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <>{children}</>
}
