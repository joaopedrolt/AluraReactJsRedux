import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} />
        </nav>
    )
}

export default NavBar;