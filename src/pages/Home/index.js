import Header from 'components/Header'
import styles from './Home.module.scss'
import wristwatch from 'assets/inicial.png'

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {

    const navigate = useNavigate();
    const categories = useSelector(state => state.categories)

    return (
        <div>
            <Header
                title='Classificados Tech'
                desc='Compre diversos tipos de produtos no melhor sites do Brasil'
                className={styles.header}
                img={wristwatch}
            />
            <div className={styles.categories}>
                <div className={styles['categories-title']}>
                    <h1>
                        Categories
                    </h1>
                </div>
                <div className={styles['categories-container']}>
                    {categories.map((category, index) => (
                        <div key={index} onClick={() => navigate(`/category/${category.id}`)}>
                            <img src={category.thumbnail} alt={category.nome} />
                            <h1>{category.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}