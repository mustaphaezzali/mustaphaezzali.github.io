import { SITE_CONFIG } from '@/lib/constants'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Get in Touch</h2>
                    <p className={styles.description}>
                        Are you looking for a skilled data scientist to deliver high-performance and actionable insights from your data,
                        enabling data-driven decisions for your organization? Or looking for any kind of consultation? Or want to ask questions?
                        Or have some advice for me or just want to say &quot;Hi 👋&quot;? In any case feel free to let me know. I will do my best to
                        respond back. 😊 The quickest way to reach out to me is via email.
                    </p>

                    <div className={styles.contactInfo}>
                        <a href={`mailto:${SITE_CONFIG.author.email}`} className="btn btn-primary">
                            {SITE_CONFIG.author.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
