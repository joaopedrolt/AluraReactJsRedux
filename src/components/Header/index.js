import styles from './Header.module.scss'

export default function Header({ title, desc, className = '', img }) {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-text']}>
                <h1>{title}</h1>
                <h2>{desc}</h2>
            </div>
            <div className={styles['header-image']}>
                <img
                    alt={title}
                    src={img}
                />
            </div>
        </header>
    )
}