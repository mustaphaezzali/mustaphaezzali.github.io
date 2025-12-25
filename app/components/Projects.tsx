import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'
import styles from './Projects.module.css'

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className={styles.title}>Featured Projects</h2>

                <div className={styles.grid}>
                    {PROJECTS.filter(p => p.featured).map((project) => (
                        <div key={project.id} className={`${styles.projectCard} card`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.links}>
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11 3C11 2.44772 11.4477 2 12 2H18C18.5523 2 19 2.44772 19 3V9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9V5.41421L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L15.5858 4H12C11.4477 4 11 3.55228 11 3Z" fill="currentColor" />
                                                    <path d="M5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H11C12.1046 17 13 16.1046 13 15V12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12V15C15 17.2091 13.2091 19 11 19H5C2.79086 19 1 17.2091 1 15V9C1 6.79086 2.79086 5 5 5H8C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7H5Z" fill="currentColor" />
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                                                </svg>
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.technologies}>
                                    {project.technologies.map((tech) => (
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
