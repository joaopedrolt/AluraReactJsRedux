import Navbar from 'components/NavBar';
import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

export default function DefaultPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}