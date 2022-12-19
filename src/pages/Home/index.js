import Header from 'components/Header'
import styles from './Home.module.scss'
import wristwatch from 'assets/inicial.png'

import automotivoThumb from 'assets/categories/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categories/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categories/thumbnail/escritorio.png';
import jogosThumb from 'assets/categories/thumbnail/jogos.png';
import somThumb from 'assets/categories/thumbnail/som.png';
import automotivoHeader from 'assets/categories/header/automotivo.png';
import eletronicosHeader from 'assets/categories/header/eletronicos.png';
import escritorioHeader from 'assets/categories/header/escritorio.png';
import jogosHeader from 'assets/categories/header/jogos.png';
import somHeader from 'assets/categories/header/som.png';

import { useNavigate } from 'react-router-dom';

const categories = [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!'
}, {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}]

export default function Home() {

    const navigate = useNavigate();

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