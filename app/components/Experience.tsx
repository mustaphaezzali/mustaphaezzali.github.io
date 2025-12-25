import { EXPERIENCES } from '@/lib/constants'
import styles from './Experience.module.css'

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className={styles.title}>Experience</h2>

                <div className={styles.timeline}>
                    {EXPERIENCES.map((exp, index) => (
                        <div key={exp.id} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <div className={styles.timelineDot}></div>
                                {index < EXPERIENCES.length - 1 && <div className={styles.timelineLine}></div>}
                            </div>

                            <div className={`${styles.timelineContent} card`}>
                                <div className={styles.timelineDate}>
                                    {exp.startDate} - {exp.endDate}
                                </div>
                                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                                <h4 className={styles.timelineCompany}>{exp.company}</h4>
                                <p className={styles.timelineDescription}>{exp.description}</p>
                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className={styles.tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
