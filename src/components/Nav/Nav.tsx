import logo from '../../assets/eppo_logo.png';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="eppo_logo" />
            <div className={styles.header__links}>
                <a href="/">Inicio</a>
                <a href="#">Contacto</a>
                <a href="/comprar-boleto">COMPRAR BOLETO</a>
            </div>
        </header>
    )
}

export default Nav;