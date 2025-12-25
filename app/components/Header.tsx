'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = NAV_LINKS.map(link => link.href.substring(1))
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerContent}>
                    <Link href="/" className={styles.logo}>
                        ME
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
