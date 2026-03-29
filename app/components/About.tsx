import { SITE_CONFIG, SKILLS } from '@/lib/constants'
import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className={styles.title}>About Me</h2>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>{SITE_CONFIG.author.bio}</p>

                        <div className={styles.skills}>
                            <h3>Skills & Technologies</h3>
                            <div className={styles.skillsGrid}>
                                {Object.entries(SKILLS).map(([category, techs]) => {
                                    const icons: Record<string, string> = {
                                        'Natural Language Processing': '🧠',
                                        'Machine Learning': '⚡',
                                        'Computer Vision': '👁️',
                                        'Programming Languages': '💻',
                                        'Web Development': '🌐',
                                        'Tools & Technologies': '🛠️',
                                    }
                                    return (
                                        <div key={category} className={styles.skillCard}>
                                            <div className={styles.cardHeader}>
                                                <span className={styles.cardIcon}>{icons[category] || '📦'}</span>
                                                <h4>{category}</h4>
                                            </div>
                                            <div className={styles.skillTags}>
                                                {techs.map((tech) => (
                                                    <span key={tech} className={styles.tag}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <a href={SITE_CONFIG.author.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
