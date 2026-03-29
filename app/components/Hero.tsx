import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={`${styles.imageWrapper} fade-in`}>
                        <Image
                            src={SITE_CONFIG.author.image}
                            alt={SITE_CONFIG.author.name}
                            width={160}
                            height={160}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <h1 className={`${styles.title} fade-in`}>
                        {SITE_CONFIG.author.name}
                    </h1>
                    <p className={`${styles.subtitle} fade-in`}>
                        {SITE_CONFIG.author.title}
                    </p>
                    <div className={`${styles.cta} fade-in`}>
                        <a href="#contact" className="btn btn-primary">
                            Get in Touch
                        </a>
                        <a href={SITE_CONFIG.author.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.background}></div>
        </section>
    )
}
