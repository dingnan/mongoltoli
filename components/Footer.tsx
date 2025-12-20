import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} MongolToli. Traditional Mongolian Dictionary.
                </p>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>About</a>
                    <span className={styles.separator}>•</span>
                    <a href="#" className={styles.link}>Contact</a>
                    <span className={styles.separator}>•</span>
                    <a href="#" className={styles.link}>Privacy</a>
                </div>
            </div>
        </footer>
    );
}
