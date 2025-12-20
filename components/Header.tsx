import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.logoMongolian}>ᠮᠣᠩᠭᠣᠯ</span>
                    <span className={styles.logoText}>MongolToli</span>
                </div>
                <p className={styles.subtitle}>Traditional Mongolian Dictionary</p>
            </div>
        </header>
    );
}
