import styles from './Search.module.scss';

export default function Search() {
    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                placeholder='What are you looking for?'
            />
        </div>
    )
}