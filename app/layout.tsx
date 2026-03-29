import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeProvider from './components/ThemeProvider'

const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-sans',
})

const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
})

export const metadata: Metadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
    keywords: ['AI', 'Machine Learning', 'NLP', 'Computer Vision', 'Data Science', 'ENSIAS', 'Morocco'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
                <ThemeProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
